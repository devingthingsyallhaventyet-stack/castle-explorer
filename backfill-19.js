const fs = require('fs');
const https = require('https');
const http = require('http');

const ACCOUNT_ID = '0593d0435bdf2220598fcc51183baa95';
const API_TOKEN = '2zUXPCS5QPjKr9DRzn_k8JNpiX0Sz9GnWPvgHl2-';
const BUCKET = 'castle-images';
const R2_BASE = 'https://img.castlecore.uk';
const GOOGLE_KEY = 'AIzaSyA1OrSJLhSG2YOLKPAo9-Jk0Lwoe4X0SX8';

let dataStr = fs.readFileSync('data.js', 'utf8');
const startIdx = dataStr.indexOf('[');
const endIdx = dataStr.lastIndexOf(']') + 1;
let castles = JSON.parse(dataStr.slice(startIdx, endIdx));

const targets = castles.filter(c => !c.image || c.image === '');
console.log(`Found ${targets.length} sites with no image\n`);

const sleep = ms => new Promise(r => setTimeout(r, ms));

function makeSlug(name) {
  return name.toLowerCase().replace(/\s*\(.*?\)\s*/g, '').trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function download(url, retries = 3) {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => reject(new Error('Download timeout 15s')), 15000);
    const get = url.startsWith('https') ? https.get : http.get;
    get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        clearTimeout(timeout);
        return download(res.headers.location, retries).then(resolve).catch(reject);
      }
      if (res.statusCode === 429 && retries > 0) {
        clearTimeout(timeout);
        res.resume();
        return sleep(5000).then(() => download(url, retries - 1)).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) { clearTimeout(timeout); return reject(new Error(`HTTP ${res.statusCode}`)); }
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => { clearTimeout(timeout); resolve(Buffer.concat(chunks)); });
      res.on('error', (e) => { clearTimeout(timeout); reject(e); });
    }).on('error', (e) => { clearTimeout(timeout); reject(e); });
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

// Wikipedia search - try multiple query variants
async function wikiSearch(castle) {
  const queries = [
    castle.name,
    castle.name + ' ' + (castle.county || ''),
    castle.name + ' ' + (castle.country || ''),
    castle.name.replace(/ Castle| Tower| House| Priory| Church| Village| Museum/g, '') + ' castle ' + (castle.country || '')
  ];
  
  for (const q of queries) {
    try {
      const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(q.trim())}&prop=pageimages&format=json&pithumbsize=1280`;
      const res = await fetch(url, {
        headers: { 'User-Agent': 'castlecore-bot/1.0', 'Accept': 'application/json' },
        signal: AbortSignal.timeout(5000)
      });
      const data = await res.json();
      for (const p of Object.values(data.query?.pages || {})) {
        if (p.thumbnail?.source) return p.thumbnail.source;
      }
      await sleep(200);
    } catch(e) { /* skip */ }
  }
  
  // Also try Wikipedia search API
  try {
    const url = `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(castle.name)}&gsrlimit=3&prop=pageimages&format=json&pithumbsize=1280`;
    const res = await fetch(url, {
      headers: { 'User-Agent': 'castlecore-bot/1.0', 'Accept': 'application/json' },
      signal: AbortSignal.timeout(5000)
    });
    const data = await res.json();
    for (const p of Object.values(data.query?.pages || {})) {
      if (p.thumbnail?.source) return p.thumbnail.source;
    }
  } catch(e) { /* skip */ }
  
  return null;
}

// Google Places search
async function googlePlacesSearch(castle) {
  try {
    // Text search to find the place
    const query = `${castle.name}, ${castle.county || ''}, ${castle.country || ''}`.trim();
    const searchUrl = `https://places.googleapis.com/v1/places:searchText`;
    const res = await fetch(searchUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': GOOGLE_KEY,
        'X-Goog-FieldMask': 'places.id,places.displayName,places.photos'
      },
      body: JSON.stringify({ textQuery: query, maxResultCount: 1 }),
      signal: AbortSignal.timeout(8000)
    });
    const data = await res.json();
    const place = data.places?.[0];
    if (!place?.photos?.length) return null;
    
    // Get photo URL
    const photoRef = place.photos[0].name;
    const photoUrl = `https://places.googleapis.com/v1/${photoRef}/media?maxWidthPx=1280&key=${GOOGLE_KEY}`;
    return { photoUrl, placeId: place.id };
  } catch(e) { 
    console.log(`    Google Places error: ${e.message}`);
    return null; 
  }
}

async function main() {
  let wikiFound = 0, googleFound = 0, failed = [];
  
  for (const castle of targets) {
    console.log(`\n--- ${castle.name} (${castle.country}) ---`);
    const slug = makeSlug(castle.name);
    
    // Try Wikipedia first
    console.log('  Trying Wikipedia...');
    const wikiImg = await wikiSearch(castle);
    await sleep(500);
    
    if (wikiImg) {
      console.log(`  Wiki found: ${wikiImg.substring(0, 80)}...`);
      try {
        const buf = await download(wikiImg);
        const key = `wiki-${slug}.jpg`;
        await uploadToR2(key, buf);
        castle.image = `${R2_BASE}/${key}`;
        wikiFound++;
        console.log(`  ✅ Uploaded as primary (${buf.length} bytes)`);
        continue;
      } catch(e) {
        console.log(`  Wiki download/upload failed: ${e.message}`);
      }
    } else {
      console.log('  Wiki: nothing found');
    }
    
    // Try Google Places
    console.log('  Trying Google Places...');
    const gResult = await googlePlacesSearch(castle);
    await sleep(500);
    
    if (gResult) {
      try {
        const buf = await download(gResult.photoUrl);
        const key = `google-${slug}.jpg`;
        await uploadToR2(key, buf);
        castle.image = `${R2_BASE}/${key}`;
        googleFound++;
        console.log(`  ✅ Google Places uploaded as primary (${buf.length} bytes)`);
        continue;
      } catch(e) {
        console.log(`  Google download/upload failed: ${e.message}`);
      }
    } else {
      console.log('  Google Places: nothing found');
    }
    
    failed.push(castle.name);
    console.log('  ❌ No image found from either source');
  }
  
  // Save
  const output = 'const CASTLES = ' + JSON.stringify(castles, null, 2) + ';\n\nif (typeof module !== "undefined") module.exports = CASTLES;\n';
  fs.writeFileSync('data.js', output);
  
  const withImages = castles.filter(c => c.image).length;
  console.log(`\n========== RESULTS ==========`);
  console.log(`Wikipedia: ${wikiFound}`);
  console.log(`Google Places: ${googleFound}`);
  console.log(`Failed: ${failed.length} — ${failed.join(', ')}`);
  console.log(`Total with images: ${withImages}/${castles.length}`);
}

main().catch(console.error);
