const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const ACCOUNT_ID = '0593d0435bdf2220598fcc51183baa95';
const API_TOKEN = '2zUXPCS5QPjKr9DRzn_k8JNpiX0Sz9GnWPvgHl2-';
const BUCKET = 'castle-images';
const R2_BASE = 'https://pub-865f4a8498e64980801e4e498b53f5c0.r2.dev';

const sleep = ms => new Promise(r => setTimeout(r, ms));

function slugify(name) {
  return name.replace(/\s*\(.*?\)\s*/g, '').trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function download(url, retries = 3) {
  return new Promise((resolve, reject) => {
    const get = url.startsWith('https') ? https.get : http.get;
    get(url, { headers: { 'User-Agent': 'CastleCoreBot/1.0 (castlecore.uk; contact@castlecore.uk)' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, retries).then(resolve).catch(reject);
      }
      if (res.statusCode === 429 && retries > 0) {
        const wait = parseInt(res.headers['retry-after'] || '5') * 1000;
        console.log(`    Rate limited, waiting ${wait/1000}s...`);
        return sleep(Math.max(wait, 3000)).then(() => download(url, retries - 1)).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) return reject(new Error(`HTTP ${res.statusCode}`));
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
    const req = https.request({
      hostname: url.hostname, path: url.pathname, method: 'PUT',
      headers: { 'Authorization': `Bearer ${API_TOKEN}`, 'Content-Type': contentType || 'image/jpeg', 'Content-Length': buffer.length }
    }, (res) => {
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => res.statusCode < 300 ? resolve() : reject(new Error(`R2 ${res.statusCode}`)));
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
  return json.originalimage?.source || json.thumbnail?.source || null;
}

async function main() {
  const dataPath = path.join(__dirname, 'data.js');
  let dataContent = fs.readFileSync(dataPath, 'utf-8');
  
  const idx = dataContent.indexOf('const CASTLES = [');
  const exportMatch = dataContent.match(/if\s*\(typeof\s+module/);
  let jsonStr;
  if (exportMatch) {
    jsonStr = dataContent.substring(idx + 'const CASTLES = '.length, exportMatch.index).trim().replace(/;\s*$/, '');
  } else {
    jsonStr = dataContent.substring(idx + 'const CASTLES = '.length).trim().replace(/;\s*$/, '');
  }
  const castles = JSON.parse(jsonStr);
  console.log(`Loaded ${castles.length} castles`);
  
  const byName = {};
  castles.forEach((c, i) => { byName[c.name] = i; });
  
  const wiki = JSON.parse(fs.readFileSync(path.join(__dirname, 'wiki-remaining-results.json'), 'utf-8'));
  
  // Add Old Wardour Castle to the list
  const allEntries = [...wiki.found];
  // We'll handle Wardour separately after
  
  let backfilled = 0;
  let errors = [];
  
  for (let i = 0; i < allEntries.length; i++) {
    const entry = allEntries[i];
    const cidx = byName[entry.name];
    if (cidx === undefined) { errors.push(`Not found: ${entry.name}`); continue; }
    
    const castle = castles[cidx];
    const slug = slugify(entry.name);
    const key = `wiki-${slug}.jpg`;
    const r2Url = `${R2_BASE}/${key}`;
    
    // Skip if already has this R2 url
    if (castle.image === r2Url || (castle.gallery && castle.gallery.includes(r2Url))) {
      console.log(`  Skip (already done): ${entry.name}`);
      backfilled++;
      continue;
    }
    
    try {
      // Throttle: wait 1.5s between requests to Wikipedia
      if (i > 0) await sleep(1500);
      
      console.log(`[${i+1}/${allEntries.length}] ${entry.name}...`);
      const imgBuf = await download(entry.wikiImg);
      
      const lower = entry.wikiImg.toLowerCase();
      let ct = 'image/jpeg';
      if (lower.includes('.png')) ct = 'image/png';
      
      await uploadToR2(key, imgBuf, ct);
      
      const hasImage = castle.image && !castle.image.includes('placeholder') && castle.image.trim() !== '';
      if (!hasImage || entry.currentImgs === 0) {
        castle.image = r2Url;
      } else {
        if (!castle.gallery) castle.gallery = [];
        castle.gallery.push(r2Url);
      }
      backfilled++;
      console.log(`  ✓ ${key} (${(imgBuf.length/1024).toFixed(0)}KB)`);
    } catch (e) {
      errors.push(`${entry.name}: ${e.message}`);
      console.error(`  ✗ ${e.message}`);
    }
  }
  
  // Old Wardour Castle
  console.log('\nOld Wardour Castle...');
  const wardourIdx = byName['Old Wardour Castle'];
  if (wardourIdx !== undefined) {
    try {
      await sleep(1500);
      const wikiUrl = await fetchWikiImage('Old_Wardour_Castle');
      if (wikiUrl) {
        await sleep(1500);
        const imgBuf = await download(wikiUrl);
        const key = 'wiki-old-wardour-castle.jpg';
        await uploadToR2(key, imgBuf, 'image/jpeg');
        const castle = castles[wardourIdx];
        const r2Url = `${R2_BASE}/${key}`;
        if (!castle.image || castle.image.includes('placeholder') || !castle.image.trim()) {
          castle.image = r2Url;
        } else {
          if (!castle.gallery) castle.gallery = [];
          castle.gallery.push(r2Url);
        }
        backfilled++;
        console.log('  ✓ Old Wardour Castle');
      }
    } catch (e) { console.error(`  ✗ ${e.message}`); }
  }
  
  // Merge King John's Castle
  console.log('\nMerging duplicates...');
  const kj1 = byName["King John's Castle Carlingford"];
  const kj2 = byName["King Johns Castle Carlingford"];
  if (kj1 !== undefined && kj2 !== undefined) {
    const c1 = castles[kj1], c2 = castles[kj2];
    let [keep, remove, removeIdx] = c1.rating >= c2.rating ? [c1, c2, kj2] : [c2, c1, kj1];
    const imgs = new Set(keep.gallery || []);
    (remove.gallery || []).forEach(g => imgs.add(g));
    if (remove.image && remove.image !== keep.image) imgs.add(remove.image);
    keep.gallery = [...imgs];
    castles.splice(removeIdx, 1);
    console.log(`  KJ: kept "${keep.name}" (${keep.rating})`);
  }
  
  // Rebuild index after splice
  Object.keys(byName).forEach(k => delete byName[k]);
  castles.forEach((c, i) => { byName[c.name] = i; });
  
  const ka1 = byName["Kilcooley Abbey"];
  const ka2 = byName["Kilcooley Abbey Tipperary"];
  if (ka1 !== undefined && ka2 !== undefined) {
    const c1 = castles[ka1], c2 = castles[ka2];
    let [keep, remove, removeIdx] = c1.rating >= c2.rating ? [c1, c2, ka2] : [c2, c1, ka1];
    const imgs = new Set(keep.gallery || []);
    (remove.gallery || []).forEach(g => imgs.add(g));
    if (remove.image && remove.image !== keep.image) imgs.add(remove.image);
    keep.gallery = [...imgs];
    castles.splice(removeIdx, 1);
    console.log(`  KA: kept "${keep.name}" (${keep.rating})`);
  }
  
  // Re-index
  castles.forEach((c, i) => { c._index = i; });
  
  // Write back
  const exportLine = dataContent.match(/if\s*\(typeof\s+module[\s\S]*$/);
  let newContent = 'const CASTLES = ' + JSON.stringify(castles, null, 2) + ';\n';
  if (exportLine) newContent += '\n' + exportLine[0];
  fs.writeFileSync(dataPath, newContent, 'utf-8');
  
  console.log(`\n=== DONE ===`);
  console.log(`Backfilled: ${backfilled}`);
  console.log(`Final count: ${castles.length}`);
  console.log(`Errors: ${errors.length}`);
  errors.forEach(e => console.log(`  - ${e}`));
}

main().catch(e => { console.error(e); process.exit(1); });
