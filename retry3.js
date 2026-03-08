const fs = require('fs');
const ACCOUNT_ID = '0593d0435bdf2220598fcc51183baa95';
const API_TOKEN = '2zUXPCS5QPjKr9DRzn_k8JNpiX0Sz9GnWPvgHl2-';
const BUCKET = 'castle-images';
const R2_BASE = 'https://img.castlecore.uk';
const GOOGLE_KEY = 'AIzaSyA1OrSJLhSG2YOLKPAo9-Jk0Lwoe4X0SX8';

let dataStr = fs.readFileSync('data.js', 'utf8');
let castles = JSON.parse(dataStr.slice(dataStr.indexOf('['), dataStr.lastIndexOf(']') + 1));
const targets = castles.filter(c => !c.image);
console.log('Remaining:', targets.map(c => c.name).join(', '));

function makeSlug(n) { return n.toLowerCase().replace(/\s*\(.*?\)\s*/g, '').trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); }
const sleep = ms => new Promise(r => setTimeout(r, ms));

async function tryWiki(castle) {
  const queries = [castle.name, castle.name + ' ' + castle.country, castle.name + ' ' + (castle.county || '')];
  for (const q of queries) {
    const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(q.trim())}&prop=pageimages&format=json&pithumbsize=1280`;
    const res = await fetch(url, { headers: { 'User-Agent': 'castlecore-bot/1.0' }, signal: AbortSignal.timeout(5000) });
    const data = await res.json();
    for (const p of Object.values(data.query?.pages || {})) {
      if (p.thumbnail?.source) return p.thumbnail.source;
    }
    await sleep(2000);
  }
  return null;
}

async function tryGoogle(castle) {
  const query = `${castle.name}, ${castle.county || ''}, ${castle.country}`;
  const res = await fetch('https://places.googleapis.com/v1/places:searchText', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Goog-Api-Key': GOOGLE_KEY, 'X-Goog-FieldMask': 'places.photos' },
    body: JSON.stringify({ textQuery: query, maxResultCount: 1 }),
    signal: AbortSignal.timeout(8000)
  });
  const data = await res.json();
  const photo = data.places?.[0]?.photos?.[0]?.name;
  if (photo) return `https://places.googleapis.com/v1/${photo}/media?maxWidthPx=1280&key=${GOOGLE_KEY}`;
  return null;
}

async function downloadAndUpload(imgUrl, key) {
  const res = await fetch(imgUrl, { headers: { 'User-Agent': 'Mozilla/5.0' }, signal: AbortSignal.timeout(20000), redirect: 'follow' });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const r2 = await fetch(`https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/r2/buckets/${BUCKET}/objects/${encodeURIComponent(key)}`, {
    method: 'PUT', headers: { 'Authorization': `Bearer ${API_TOKEN}`, 'Content-Type': 'image/jpeg' },
    body: buf, signal: AbortSignal.timeout(15000)
  });
  if (!r2.ok) throw new Error(`R2 ${r2.status}`);
  return buf.length;
}

async function main() {
  for (const c of targets) {
    const slug = makeSlug(c.name);
    process.stdout.write(`${c.name}... `);
    await sleep(5000); // longer delay to avoid 429

    // Wiki
    try {
      const wikiUrl = await tryWiki(c);
      if (wikiUrl) {
        await sleep(2000);
        const key = `wiki-${slug}.jpg`;
        const size = await downloadAndUpload(wikiUrl, key);
        c.image = `${R2_BASE}/${key}`;
        console.log(`✅ wiki (${(size/1024).toFixed(0)}KB)`);
        continue;
      }
    } catch(e) { console.log(`wiki err: ${e.message}`); }

    // Google
    try {
      const gUrl = await tryGoogle(c);
      if (gUrl) {
        const key = `google-${slug}.jpg`;
        const size = await downloadAndUpload(gUrl, key);
        c.image = `${R2_BASE}/${key}`;
        console.log(`✅ google (${(size/1024).toFixed(0)}KB)`);
        continue;
      }
    } catch(e) { console.log(`google err: ${e.message}`); }
    console.log('❌ failed');
  }

  const output = 'const CASTLES = ' + JSON.stringify(castles, null, 2) + ';' + '\n\nif (typeof module !== "undefined") module.exports = CASTLES;\n';
  fs.writeFileSync('data.js', output);
  console.log('\nTotal with images:', castles.filter(c => c.image).length + '/' + castles.length);
}
main().catch(console.error);
