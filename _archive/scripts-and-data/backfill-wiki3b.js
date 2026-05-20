const fs = require('fs');
const https = require('https');
const http = require('http');

const ACCOUNT_ID = '0593d0435bdf2220598fcc51183baa95';
const API_TOKEN = '2zUXPCS5QPjKr9DRzn_k8JNpiX0Sz9GnWPvgHl2-';
const BUCKET = 'castle-images';
const R2_BASE = 'https://img.castlecore.uk';

const fuzzy = JSON.parse(fs.readFileSync('wiki-fuzzy-results.json','utf8')).found;
const aggressive = JSON.parse(fs.readFileSync('wiki-aggressive-results.json','utf8')).found;
const allEntries = [...fuzzy, ...aggressive];

let dataStr = fs.readFileSync('data.js','utf8');
// Extract just the JSON array between "const CASTLES = " and the closing "];"
const startIdx = dataStr.indexOf('[');
const endIdx = dataStr.lastIndexOf(']') + 1;
let castles = JSON.parse(dataStr.slice(startIdx, endIdx));

function makeSlug(name) {
  return name.toLowerCase().replace(/\s*\(.*?\)\s*/g,'').trim().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

function download(url, retries = 3) {
  return new Promise((resolve, reject) => {
    const get = url.startsWith('https') ? https.get : http.get;
    get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, retries).then(resolve).catch(reject);
      }
      if (res.statusCode === 429 && retries > 0) {
        res.resume();
        console.log(`    429, waiting 5s then retrying (${retries} left)...`);
        return sleep(5000).then(() => download(url, retries - 1)).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) return reject(new Error(`HTTP ${res.statusCode}`));
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
      res.on('error', reject);
    }).on('error', reject);
  });
}

function uploadToR2(key, buffer) {
  return new Promise((resolve, reject) => {
    const url = new URL(`https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/r2/buckets/${BUCKET}/objects/${encodeURIComponent(key)}`);
    const req = https.request({
      hostname: url.hostname, path: url.pathname, method: 'PUT',
      headers: { 'Authorization': `Bearer ${API_TOKEN}`, 'Content-Type': 'image/jpeg', 'Content-Length': buffer.length }
    }, (res) => {
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => res.statusCode >= 200 && res.statusCode < 300 ? resolve(true) : reject(new Error(`R2 ${res.statusCode}`)));
    });
    req.on('error', reject);
    req.write(buffer);
    req.end();
  });
}

// Only process the ones that failed (not already having R2 primary and not already done)
const alreadyDone = ['Lismore Castle Gardens','Peele Tower Kentmere','Lochleven Castle Keep','Broughton Castle (Banbury)','Thornton Curtis Abbey Gatehouse','Llangattock Escarpment'];
const toRetry = allEntries.filter(e => !alreadyDone.includes(e.name));

async function main() {
  let backfilled = 0;
  
  for (const entry of toRetry) {
    const castle = castles.find(c => c.name === entry.name);
    if (!castle) { console.log(`SKIP (not in data): ${entry.name}`); continue; }
    if (castle.image && castle.image.includes('img.castlecore.uk')) { console.log(`SKIP (R2): ${entry.name}`); continue; }
    
    const slug = makeSlug(entry.name);
    const key = `wiki-${slug}.jpg`;
    const r2Url = `${R2_BASE}/${key}`;
    
    try {
      console.log(`Downloading: ${entry.name} ...`);
      await sleep(2000); // polite delay
      const imgBuf = await download(entry.wikiImg);
      console.log(`  ${imgBuf.length} bytes, uploading ${key}...`);
      await uploadToR2(key, imgBuf);
      
      const isPlaceholder = !castle.image || castle.image.includes('placeholder') || castle.image === '';
      if (isPlaceholder || entry.currentImgs === 0) {
        castle.image = r2Url;
      } else {
        if (!castle.gallery) castle.gallery = [];
        if (!castle.gallery.includes(r2Url)) castle.gallery.push(r2Url);
      }
      backfilled++;
      console.log(`  OK (${isPlaceholder || entry.currentImgs === 0 ? 'primary' : 'gallery'})`);
    } catch (err) {
      console.error(`  FAIL: ${err.message}`);
    }
  }
  
  const withImages = castles.filter(c => c.image && c.image !== '').length;
  const output = 'const CASTLES = ' + JSON.stringify(castles, null, 2) + ';\n\nif (typeof module !== "undefined") module.exports = CASTLES;\n';
  fs.writeFileSync('data.js', output);
  
  console.log(`\nRetry batch done! Backfilled: ${backfilled}`);
  console.log(`Total with images: ${withImages}/${castles.length}`);
}

main().catch(console.error);
