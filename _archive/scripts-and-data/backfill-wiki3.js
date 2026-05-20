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

// Load data.js
let dataStr = fs.readFileSync('data.js','utf8');
const jsonStr = dataStr.replace(/^const CASTLES = /, '').replace(/;\s*$/, '');
let castles = JSON.parse(jsonStr);

function makeSlug(name) {
  return name.toLowerCase().replace(/\s*\(.*?\)\s*/g,'').trim().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
}

function download(url) {
  return new Promise((resolve, reject) => {
    const get = url.startsWith('https') ? https.get : http.get;
    get(url, { headers: { 'User-Agent': 'CastleCoreBot/1.0' } }, (res) => {
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

function uploadToR2(key, buffer) {
  return new Promise((resolve, reject) => {
    const url = new URL(`https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/r2/buckets/${BUCKET}/objects/${encodeURIComponent(key)}`);
    const options = {
      hostname: url.hostname,
      path: url.pathname,
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
        'Content-Type': 'image/jpeg',
        'Content-Length': buffer.length
      }
    };
    const req = https.request(options, (res) => {
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) resolve(true);
        else reject(new Error(`R2 upload ${res.statusCode}: ${Buffer.concat(chunks).toString()}`));
      });
    });
    req.on('error', reject);
    req.write(buffer);
    req.end();
  });
}

async function main() {
  let backfilled = 0;
  
  for (const entry of allEntries) {
    const castle = castles.find(c => c.name === entry.name);
    if (!castle) {
      console.log(`SKIP (not in data): ${entry.name}`);
      continue;
    }
    
    // Skip if already has R2 image as primary
    if (castle.image && castle.image.includes('img.castlecore.uk')) {
      console.log(`SKIP (has R2 primary): ${entry.name}`);
      continue;
    }
    
    const slug = makeSlug(entry.name);
    const key = `wiki-${slug}.jpg`;
    const r2Url = `${R2_BASE}/${key}`;
    
    try {
      console.log(`Downloading: ${entry.name} ...`);
      const imgBuf = await download(entry.wikiImg);
      console.log(`  Downloaded ${imgBuf.length} bytes, uploading as ${key}...`);
      await uploadToR2(key, imgBuf);
      console.log(`  Uploaded to R2`);
      
      // Update castle data
      const isPlaceholder = !castle.image || castle.image.includes('placeholder') || castle.image === '';
      if (isPlaceholder || entry.currentImgs === 0) {
        castle.image = r2Url;
      } else {
        if (!castle.gallery) castle.gallery = [];
        if (!castle.gallery.includes(r2Url)) {
          castle.gallery.push(r2Url);
        }
      }
      backfilled++;
      console.log(`  OK (${isPlaceholder || entry.currentImgs === 0 ? 'primary' : 'gallery'})`);
    } catch (err) {
      console.error(`  FAIL: ${err.message}`);
    }
  }
  
  // Write back data.js
  // Count total with images
  const withImages = castles.filter(c => c.image && c.image !== '').length;
  
  const output = 'const CASTLES = ' + JSON.stringify(castles, null, 2) + ';\n\nif (typeof module !== "undefined") module.exports = CASTLES;\n';
  fs.writeFileSync('data.js', output);
  
  console.log(`\nDone! Backfilled: ${backfilled}/${allEntries.length}`);
  console.log(`Total castles with images: ${withImages}/${castles.length}`);
}

main().catch(console.error);
