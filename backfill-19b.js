const fs = require('fs');

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

async function downloadFetch(url) {
  const res = await fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0' },
    signal: AbortSignal.timeout(20000),
    redirect: 'follow'
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return Buffer.from(await res.arrayBuffer());
}

async function uploadToR2(key, buffer) {
  const res = await fetch(`https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/r2/buckets/${BUCKET}/objects/${encodeURIComponent(key)}`, {
    method: 'PUT',
    headers: { 'Authorization': `Bearer ${API_TOKEN}`, 'Content-Type': 'image/jpeg' },
    body: buffer,
    signal: AbortSignal.timeout(15000)
  });
  if (!res.ok) throw new Error(`R2 ${res.status}`);
  return true;
}

async function wikiSearch(castle) {
  const queries = [
    castle.name,
    castle.name + ' ' + (castle.county || ''),
    castle.name + ' ' + (castle.country || ''),
  ];
  
  for (const q of queries) {
    try {
      const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(q.trim())}&prop=pageimages&format=json&pithumbsize=1280`;
      const res = await fetch(url, {
        headers: { 'User-Agent': 'castlecore-bot/1.0' },
        signal: AbortSignal.timeout(5000)
      });
      const data = await res.json();
      for (const p of Object.values(data.query?.pages || {})) {
        if (p.thumbnail?.source) return p.thumbnail.source;
      }
      await sleep(200);
    } catch(e) {}
  }
  
  // Search API fallback
  try {
    const url = `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(castle.name)}&gsrlimit=3&prop=pageimages&format=json&pithumbsize=1280`;
    const res = await fetch(url, {
      headers: { 'User-Agent': 'castlecore-bot/1.0' },
      signal: AbortSignal.timeout(5000)
    });
    const data = await res.json();
    for (const p of Object.values(data.query?.pages || {})) {
      if (p.thumbnail?.source) return p.thumbnail.source;
    }
  } catch(e) {}
  return null;
}

async function googlePlacesSearch(castle) {
  try {
    const query = `${castle.name}, ${castle.county || ''}, ${castle.country || ''}`.trim();
    const res = await fetch('https://places.googleapis.com/v1/places:searchText', {
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
    const photoRef = place.photos[0].name;
    return `https://places.googleapis.com/v1/${photoRef}/media?maxWidthPx=1280&key=${GOOGLE_KEY}`;
  } catch(e) { return null; }
}

async function main() {
  let wikiFound = 0, googleFound = 0, failed = [];
  
  for (const castle of targets) {
    const slug = makeSlug(castle.name);
    process.stdout.write(`${castle.name}... `);
    
    // Try Wiki
    const wikiImg = await wikiSearch(castle);
    await sleep(300);
    
    if (wikiImg) {
      try {
        const buf = await downloadFetch(wikiImg);
        if (buf.length < 5000) throw new Error('Too small, likely not a real photo');
        const key = `wiki-${slug}.jpg`;
        await uploadToR2(key, buf);
        castle.image = `${R2_BASE}/${key}`;
        wikiFound++;
        console.log(`✅ wiki (${(buf.length/1024).toFixed(0)}KB)`);
        continue;
      } catch(e) {
        console.log(`wiki dl fail: ${e.message}, trying Google...`);
      }
    }
    
    // Try Google Places
    const gUrl = await googlePlacesSearch(castle);
    await sleep(300);
    
    if (gUrl) {
      try {
        const buf = await downloadFetch(gUrl);
        const key = `google-${slug}.jpg`;
        await uploadToR2(key, buf);
        castle.image = `${R2_BASE}/${key}`;
        googleFound++;
        console.log(`✅ google (${(buf.length/1024).toFixed(0)}KB)`);
        continue;
      } catch(e) {
        console.log(`google dl fail: ${e.message}`);
      }
    }
    
    if (!wikiImg && !gUrl) console.log('❌ no source found');
    else console.log('❌ download failed');
    failed.push(castle.name);
  }
  
  // Save
  const output = 'const CASTLES = ' + JSON.stringify(castles, null, 2) + ';\n\nif (typeof module !== "undefined") module.exports = CASTLES;\n';
  fs.writeFileSync('data.js', output);
  
  const withImages = castles.filter(c => c.image).length;
  console.log(`\n=== RESULTS ===`);
  console.log(`Wiki: ${wikiFound} | Google: ${googleFound} | Failed: ${failed.length}`);
  if (failed.length) console.log(`Failed: ${failed.join(', ')}`);
  console.log(`Total with images: ${withImages}/${castles.length}`);
}

main().catch(console.error);
