const fs = require('fs');
const https = require('https');
const path = require('path');

// Load castles
const dataPath = path.join(__dirname, '..', 'data.js');
const s = fs.readFileSync(dataPath, 'utf8');
const fn = new Function(s + ';return CASTLES');
const castles = fn();
console.log(`Loaded ${castles.length} castles`);

// Extract all Wikipedia URLs
const wikiEntries = [];
for (const c of castles) {
  if (c.image && c.image.includes('upload.wikimedia.org')) {
    wikiEntries.push({ castle: c.name, country: c.country, county: c.county, url: c.image, type: 'main' });
  }
  if (c.gallery) {
    for (const g of c.gallery) {
      if (g.includes('upload.wikimedia.org')) {
        wikiEntries.push({ castle: c.name, country: c.country, county: c.county, url: g, type: 'gallery' });
      }
    }
  }
}
// Dedupe by URL
const seen = new Set();
const unique = wikiEntries.filter(e => { if (seen.has(e.url)) return false; seen.add(e.url); return true; });
console.log(`Found ${unique.length} unique Wikipedia URLs`);

function delay(ms) { return new Promise(r => setTimeout(r, ms)); }

function headRequest(url) {
  return new Promise((resolve) => {
    const timeout = setTimeout(() => { resolve({ status: 'timeout' }); }, 10000);
    const req = https.request(url, { method: 'HEAD', headers: { 'User-Agent': 'CastleCoreBot/1.0 (castlecore.uk)' } }, (res) => {
      clearTimeout(timeout);
      resolve({ status: res.statusCode });
    });
    req.on('error', (e) => { clearTimeout(timeout); resolve({ status: 'error', error: e.message }); });
    req.end();
  });
}

function apiRequest(url) {
  return new Promise((resolve) => {
    const timeout = setTimeout(() => { resolve(null); }, 10000);
    https.get(url, { headers: { 'User-Agent': 'CastleCoreBot/1.0 (castlecore.uk)' } }, (res) => {
      let data = '';
      res.on('data', d => data += d);
      res.on('end', () => { clearTimeout(timeout); try { resolve(JSON.parse(data)); } catch { resolve(null); } });
    }).on('error', () => { clearTimeout(timeout); resolve(null); });
  });
}

function extractFilename(url) {
  // /thumb/a/a6/Some_Image.jpg/500px-Some_Image.jpg -> Some_Image.jpg
  const thumbMatch = url.match(/\/thumb\/[a-f0-9]\/[a-f0-9]{2}\/(.+?)\/\d+px-/);
  if (thumbMatch) return decodeURIComponent(thumbMatch[1]);
  // Direct URL: /a/a6/Some_Image.jpg
  const directMatch = url.match(/\/commons\/[a-f0-9]\/[a-f0-9]{2}\/(.+?)$/);
  if (directMatch) return decodeURIComponent(directMatch[1]);
  return null;
}

async function main() {
  const results = { working: [], broken: [], rateLimited: [], errors: [] };
  
  for (let i = 0; i < unique.length; i++) {
    const entry = unique[i];
    if (i > 0) await delay(1500);
    if (i % 50 === 0) console.log(`Testing ${i}/${unique.length}...`);
    
    const res = await headRequest(entry.url);
    if (res.status === 200) {
      results.working.push(entry);
    } else if (res.status === 404 || res.status === 403) {
      results.broken.push({ ...entry, httpStatus: res.status });
    } else if (res.status === 429) {
      results.rateLimited.push(entry);
    } else {
      results.errors.push({ ...entry, httpStatus: res.status, error: res.error });
    }
  }
  
  console.log(`\nURL Results: ${results.working.length} working, ${results.broken.length} broken, ${results.rateLimited.length} rate-limited, ${results.errors.length} errors`);
  
  // Get attribution for working images
  console.log(`\nFetching attribution for ${results.working.length} working images...`);
  const attributions = [];
  
  for (let i = 0; i < results.working.length; i++) {
    const entry = results.working[i];
    if (i > 0) await delay(1000);
    if (i % 25 === 0) console.log(`Attribution ${i}/${results.working.length}...`);
    
    const filename = extractFilename(entry.url);
    if (!filename) { attributions.push({ ...entry, photographer: 'Unknown', license: 'Unknown', commonsUrl: '' }); continue; }
    
    const apiUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=File:${encodeURIComponent(filename)}&prop=imageinfo&iiprop=extmetadata&format=json`;
    const data = await apiRequest(apiUrl);
    
    let photographer = 'Unknown', license = 'Unknown', commonsUrl = `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(filename)}`;
    
    if (data && data.query && data.query.pages) {
      const page = Object.values(data.query.pages)[0];
      if (page && page.imageinfo && page.imageinfo[0] && page.imageinfo[0].extmetadata) {
        const meta = page.imageinfo[0].extmetadata;
        if (meta.Artist) photographer = meta.Artist.value.replace(/<[^>]+>/g, '').trim();
        if (meta.LicenseShortName) license = meta.LicenseShortName.value;
      }
    }
    
    attributions.push({ castleName: entry.castle, country: entry.country, county: entry.county, imageUrl: entry.url, imageType: entry.type, commonsFilename: filename, commonsPageUrl: commonsUrl, photographer, license });
  }
  
  // Generate report
  const licenseCount = {};
  for (const a of attributions) { licenseCount[a.license] = (licenseCount[a.license] || 0) + 1; }
  
  let md = `# Phase 2: Wikipedia Image Audit (v2)\n\n`;
  md += `**Date:** ${new Date().toISOString()}\n\n`;
  md += `## Summary\n`;
  md += `- **Total Wikipedia URLs:** ${unique.length}\n`;
  md += `- **Working:** ${results.working.length} (${(results.working.length/unique.length*100).toFixed(1)}%)\n`;
  md += `- **Broken (404/403):** ${results.broken.length}\n`;
  md += `- **Rate-limited (429):** ${results.rateLimited.length}\n`;
  md += `- **Other errors:** ${results.errors.length}\n`;
  md += `- **Attribution retrieved:** ${attributions.length}\n\n`;
  
  md += `## License Breakdown\n`;
  for (const [lic, count] of Object.entries(licenseCount).sort((a,b) => b[1]-a[1])) {
    md += `- **${lic}:** ${count} (${(count/attributions.length*100).toFixed(0)}%)\n`;
  }
  
  if (results.broken.length > 0) {
    md += `\n## Broken Images (${results.broken.length})\n\n`;
    md += `| Castle | Country | County | HTTP | URL |\n|--------|---------|--------|------|-----|\n`;
    for (const b of results.broken.sort((a,b) => a.country.localeCompare(b.country) || a.castle.localeCompare(b.castle))) {
      md += `| ${b.castle} | ${b.country} | ${b.county} | ${b.httpStatus} | ${b.url.substring(0,60)}... |\n`;
    }
  }
  
  if (results.rateLimited.length > 0) {
    md += `\n## Rate-Limited (${results.rateLimited.length}) — need retest\n\n`;
    for (const r of results.rateLimited) md += `- ${r.castle} (${r.country})\n`;
  }
  
  md += `\n## Working Images with Attribution (${attributions.length})\n\n`;
  for (const a of attributions.sort((x,y) => x.country.localeCompare(y.country) || x.castleName.localeCompare(y.castleName))) {
    md += `### ${a.castleName} (${a.country}, ${a.county})\n`;
    md += `- **License:** ${a.license}\n`;
    md += `- **Photographer:** ${a.photographer}\n`;
    md += `- **Commons:** ${a.commonsPageUrl}\n\n`;
  }
  
  fs.writeFileSync(path.join(__dirname, 'phase2-images-v2.md'), md, 'utf8');
  fs.writeFileSync(path.join(__dirname, 'phase2-attribution-v2.json'), JSON.stringify(attributions, null, 2), 'utf8');
  
  console.log('\nDone! Reports written to audit/phase2-images-v2.md and audit/phase2-attribution-v2.json');
}

main().catch(e => console.error('Fatal:', e));
