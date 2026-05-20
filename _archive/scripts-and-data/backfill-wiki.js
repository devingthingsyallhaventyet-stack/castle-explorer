const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const ACCOUNT_ID = '0593d0435bdf2220598fcc51183baa95';
const API_TOKEN = '2zUXPCS5QPjKr9DRzn_k8JNpiX0Sz9GnWPvgHl2-';
const BUCKET = 'castle-images';
const R2_BASE = 'https://pub-865f4a8498e64980801e4e498b53f5c0.r2.dev';

function slugify(name) {
  return name.replace(/\s*\(.*?\)\s*/g, '').trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function download(url) {
  return new Promise((resolve, reject) => {
    const get = url.startsWith('https') ? https.get : http.get;
    get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
      res.on('error', reject);
    }).on('error', reject);
  });
}

function uploadToR2(key, buffer, contentType) {
  return new Promise((resolve, reject) => {
    const url = new URL(`https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/r2/buckets/${BUCKET}/objects/${encodeURIComponent(key)}`);
    const options = {
      hostname: url.hostname,
      path: url.pathname,
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
        'Content-Type': contentType || 'image/jpeg',
        'Content-Length': buffer.length,
      }
    };
    const req = https.request(options, (res) => {
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) resolve();
        else reject(new Error(`R2 upload ${res.statusCode}: ${Buffer.concat(chunks).toString()}`));
      });
    });
    req.on('error', reject);
    req.write(buffer);
    req.end();
  });
}

async function fetchWikiImage(articleTitle) {
  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(articleTitle)}`;
  const data = await download(url);
  const json = JSON.parse(data.toString());
  if (json.originalimage && json.originalimage.source) return json.originalimage.source;
  if (json.thumbnail && json.thumbnail.source) return json.thumbnail.source;
  return null;
}

async function main() {
  // Load data
  const dataPath = path.join(__dirname, 'data.js');
  let dataContent = fs.readFileSync(dataPath, 'utf-8');
  
  // Parse castles array
  const match = dataContent.match(/const CASTLES = (\[[\s\S]*\]);\s*(?:if|module|$)/);
  if (!match) {
    // Try different pattern
    const idx = dataContent.indexOf('const CASTLES = [');
    const exportMatch = dataContent.match(/if\s*\(typeof\s+module/);
    let jsonStr;
    if (exportMatch) {
      jsonStr = dataContent.substring(idx + 'const CASTLES = '.length, exportMatch.index).trim().replace(/;\s*$/, '');
    } else {
      jsonStr = dataContent.substring(idx + 'const CASTLES = '.length).trim().replace(/;\s*$/, '');
    }
    var castles = JSON.parse(jsonStr);
  } else {
    var castles = JSON.parse(match[1]);
  }
  
  console.log(`Loaded ${castles.length} castles from data.js`);
  
  // Build lookup by name
  const byName = {};
  castles.forEach((c, i) => { byName[c.name] = i; });
  
  // Load wiki results
  const wiki = JSON.parse(fs.readFileSync(path.join(__dirname, 'wiki-remaining-results.json'), 'utf-8'));
  const found = wiki.found;
  
  let backfilled = 0;
  let errors = [];
  
  // Process each found entry
  for (const entry of found) {
    const idx = byName[entry.name];
    if (idx === undefined) {
      errors.push(`Castle not found in data.js: ${entry.name}`);
      continue;
    }
    
    const castle = castles[idx];
    const slug = slugify(entry.name);
    const key = `wiki-${slug}.jpg`;
    const r2Url = `${R2_BASE}/${key}`;
    
    try {
      console.log(`Downloading: ${entry.name}...`);
      const imgBuf = await download(entry.wikiImg);
      
      // Determine content type
      const lower = entry.wikiImg.toLowerCase();
      let ct = 'image/jpeg';
      if (lower.includes('.png')) ct = 'image/png';
      else if (lower.includes('.gif')) ct = 'image/gif';
      
      console.log(`Uploading ${key} (${(imgBuf.length/1024).toFixed(0)}KB)...`);
      await uploadToR2(key, imgBuf, ct);
      
      // Update data.js entry
      const hasImage = castle.image && !castle.image.includes('placeholder') && castle.image.trim() !== '';
      if (!hasImage || entry.currentImgs === 0) {
        castle.image = r2Url;
      } else {
        if (!castle.gallery) castle.gallery = [];
        castle.gallery.push(r2Url);
      }
      backfilled++;
      console.log(`  ✓ ${entry.name} → ${key}`);
    } catch (e) {
      errors.push(`${entry.name}: ${e.message}`);
      console.error(`  ✗ ${entry.name}: ${e.message}`);
    }
  }
  
  // Fix Old Wardour Castle
  console.log('\nFetching Old Wardour Castle wiki image...');
  const wardourIdx = byName['Old Wardour Castle'];
  if (wardourIdx !== undefined) {
    try {
      const wikiUrl = await fetchWikiImage('Old_Wardour_Castle');
      if (wikiUrl) {
        const imgBuf = await download(wikiUrl);
        const key = 'wiki-old-wardour-castle.jpg';
        await uploadToR2(key, imgBuf, 'image/jpeg');
        const castle = castles[wardourIdx];
        const r2Url = `${R2_BASE}/${key}`;
        if (!castle.image || castle.image.includes('placeholder') || castle.image.trim() === '') {
          castle.image = r2Url;
        } else {
          if (!castle.gallery) castle.gallery = [];
          castle.gallery.push(r2Url);
        }
        backfilled++;
        console.log('  ✓ Old Wardour Castle');
      } else {
        console.log('  ✗ No wiki image found for Old Wardour Castle');
      }
    } catch (e) {
      console.error(`  ✗ Old Wardour Castle: ${e.message}`);
    }
  } else {
    console.log('  Old Wardour Castle not found in data.js');
  }
  
  // Merge King John's Castle entries
  console.log('\nMerging King John\'s Castle Carlingford duplicates...');
  const kj1 = byName["King John's Castle Carlingford"];
  const kj2 = byName["King Johns Castle Carlingford"];
  if (kj1 !== undefined && kj2 !== undefined) {
    const c1 = castles[kj1];
    const c2 = castles[kj2];
    // Keep higher rated
    let keep, remove, keepIdx, removeIdx;
    if (c1.rating >= c2.rating) { keep = c1; remove = c2; keepIdx = kj1; removeIdx = kj2; }
    else { keep = c2; remove = c1; keepIdx = kj2; removeIdx = kj1; }
    
    // Merge galleries
    const allImages = new Set();
    if (keep.gallery) keep.gallery.forEach(g => allImages.add(g));
    if (remove.gallery) remove.gallery.forEach(g => allImages.add(g));
    if (remove.image && remove.image !== keep.image) allImages.add(remove.image);
    keep.gallery = [...allImages];
    
    // Remove the duplicate
    castles.splice(removeIdx, 1);
    // Rebuild index
    Object.keys(byName).forEach(k => delete byName[k]);
    castles.forEach((c, i) => { byName[c.name] = i; });
    console.log(`  ✓ Kept "${keep.name}" (rating ${keep.rating}), removed duplicate`);
  }
  
  // Merge Kilcooley Abbey entries
  console.log('Merging Kilcooley Abbey duplicates...');
  const ka1 = byName["Kilcooley Abbey"];
  const ka2 = byName["Kilcooley Abbey Tipperary"];
  if (ka1 !== undefined && ka2 !== undefined) {
    const c1 = castles[ka1];
    const c2 = castles[ka2];
    let keep, remove, keepIdx, removeIdx;
    if (c1.rating >= c2.rating) { keep = c1; remove = c2; keepIdx = ka1; removeIdx = ka2; }
    else { keep = c2; remove = c1; keepIdx = ka2; removeIdx = ka1; }
    
    const allImages = new Set();
    if (keep.gallery) keep.gallery.forEach(g => allImages.add(g));
    if (remove.gallery) remove.gallery.forEach(g => allImages.add(g));
    if (remove.image && remove.image !== keep.image) allImages.add(remove.image);
    keep.gallery = [...allImages];
    
    castles.splice(removeIdx, 1);
    castles.forEach((c, i) => { byName[c.name] = i; });
    console.log(`  ✓ Kept "${keep.name}" (rating ${keep.rating}), removed duplicate`);
  }
  
  // Re-index
  castles.forEach((c, i) => { c._index = i; });
  
  // Write back data.js
  const exportLine = dataContent.match(/if\s*\(typeof\s+module[\s\S]*$/);
  let newContent = 'const CASTLES = ' + JSON.stringify(castles, null, 2) + ';\n';
  if (exportLine) newContent += '\n' + exportLine[0];
  fs.writeFileSync(dataPath, newContent, 'utf-8');
  
  console.log(`\n=== DONE ===`);
  console.log(`Images backfilled: ${backfilled}`);
  console.log(`Final castle count: ${castles.length}`);
  console.log(`Errors: ${errors.length}`);
  if (errors.length) errors.forEach(e => console.log(`  - ${e}`));
}

main().catch(e => { console.error(e); process.exit(1); });
