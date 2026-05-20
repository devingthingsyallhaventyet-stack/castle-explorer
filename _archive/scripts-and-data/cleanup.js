const fs = require('fs');
const https = require('https');
const http = require('http');

const CF_ACCOUNT = '0593d0435bdf2220598fcc51183baa95';
const CF_TOKEN = '2zUXPCS5QPjKr9DRzn_k8JNpiX0Sz9GnWPvgHl2-';
const R2_BUCKET = 'castle-images';

// Read data.js
let raw = fs.readFileSync('data.js', 'utf8');
let match = raw.match(/const CASTLES = (\[[\s\S]*\]);/);
if (!match) { console.error('Cannot parse data.js'); process.exit(1); }
let castles = eval(match[1]);
console.log(`Starting count: ${castles.length}`);

// Task 1: Delete 26 castles
const toDelete = [
  "Tregiffian Vean", "Dyserth Castle", "Middleton Tower", "Holdgate Castle",
  "Castle Camps", "Knighton Castle Mound", "Eilean Dearg Castle", "Frenchpark House",
  "Dun Nosebridge", "Bewley Castle", "Eyrecourt Castle", "Ballone Castle",
  "Pollok Castle", "Dromore Castle Down", "Haggs Castle", "Ballymore Castle Westmeath",
  "Castle Maud", "Dounreay Castle", "Castle Dillon", "Wardour Castle (New)",
  "Benholm Tower", "Benholm Castle", "Lee Castle", "Castletown Louth",
  "Claverhouse Bleachfield", "Lostwithiel Castle"
];

const beforeDel = castles.length;
castles = castles.filter(c => !toDelete.includes(c.name));
console.log(`Deleted ${beforeDel - castles.length} castles (expected 26)`);

// Task 2: Merge Restormel entries
const r1idx = castles.findIndex(c => c.name === "Restormel Castle");
const r2idx = castles.findIndex(c => c.name === "Restormel Castle (Lostwithiel)");
console.log(`Restormel 1 idx: ${r1idx}, Restormel 2 idx: ${r2idx}`);

if (r1idx >= 0 && r2idx >= 0) {
  const r1 = castles[r1idx];
  const r2 = castles[r2idx];
  console.log(`R1 gallery: ${(r1.gallery||[]).length}, R2 gallery: ${(r2.gallery||[]).length}`);
  console.log(`R1 image: ${r1.image}`);
  console.log(`R2 image: ${r2.image}`);
  
  // Keep R1 (Restormel Castle), merge gallery from R2, use higher rating
  const mergedGallery = [...new Set([...(r1.gallery||[]), ...(r2.gallery||[])])];
  // If R2 has image and R1 doesn't have it in gallery, add R1's image to gallery if we switch
  // Use R2's rating (4.4)
  r1.rating = 4.4;
  // Add R2's image and gallery to R1's gallery
  if (r2.image && !mergedGallery.includes(r2.image)) mergedGallery.push(r2.image);
  r1.gallery = mergedGallery;
  
  // Remove R2
  castles.splice(r2idx, 1);
  console.log(`Merged Restormel entries. Kept "${r1.name}" with rating ${r1.rating}, gallery: ${r1.gallery.length}`);
} else {
  console.log('WARNING: Could not find both Restormel entries');
}

// Re-index
castles.forEach((c, i) => c._index = i);

// Save intermediate data.js
function saveData() {
  const out = 'const CASTLES = ' + JSON.stringify(castles, null, 2) + ';\n';
  fs.writeFileSync('data.js', out, 'utf8');
  console.log(`Saved data.js with ${castles.length} castles`);
}

// HTTP helpers
function fetch(url) {
  return new Promise((resolve, reject) => {
    const mod = url.startsWith('https') ? https : http;
    mod.get(url, { headers: { 'User-Agent': 'CastleBot/1.0' } }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetch(res.headers.location).then(resolve, reject);
      }
      const chunks = [];
      res.on('data', d => chunks.push(d));
      res.on('end', () => resolve(Buffer.concat(chunks)));
      res.on('error', reject);
    }).on('error', reject);
  });
}

function uploadToR2(key, buffer, contentType) {
  return new Promise((resolve, reject) => {
    const url = new URL(`https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT}/r2/buckets/${R2_BUCKET}/objects/${encodeURIComponent(key)}`);
    const opts = {
      hostname: url.hostname,
      path: url.pathname,
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${CF_TOKEN}`,
        'Content-Type': contentType || 'image/jpeg',
        'Content-Length': buffer.length
      }
    };
    const req = https.request(opts, res => {
      const chunks = [];
      res.on('data', d => chunks.push(d));
      res.on('end', () => {
        resolve({ status: res.statusCode, body: Buffer.concat(chunks).toString() });
      });
    });
    req.on('error', reject);
    req.write(buffer);
    req.end();
  });
}

function slugify(name) {
  return name.toLowerCase()
    .replace(/[()]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

async function fetchWikiImage(searchTitle) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(searchTitle)}&prop=pageimages&pithumbsize=1280&format=json`;
  const data = JSON.parse(await fetch(url));
  const pages = data.query.pages;
  for (const pid in pages) {
    if (pages[pid].thumbnail) return pages[pid].thumbnail.source;
  }
  return null;
}

async function processImage(castleName, imgUrl, slug) {
  try {
    console.log(`  Downloading ${castleName}...`);
    const imgBuf = await fetch(imgUrl);
    if (imgBuf.length < 1000) {
      console.log(`  SKIP: too small (${imgBuf.length} bytes)`);
      return null;
    }
    const ext = imgUrl.match(/\.(png|jpeg|jpg|gif|webp)/i);
    const ct = ext ? `image/${ext[1].toLowerCase().replace('jpg','jpeg')}` : 'image/jpeg';
    const key = `${slug}.jpg`;
    console.log(`  Uploading ${key} (${(imgBuf.length/1024).toFixed(0)}KB)...`);
    const res = await uploadToR2(key, imgBuf, ct);
    if (res.status >= 200 && res.status < 300) {
      console.log(`  OK: https://img.castlecore.uk/${key}`);
      return `https://img.castlecore.uk/${key}`;
    } else {
      console.log(`  Upload failed (${res.status}): ${res.body.substring(0,200)}`);
      return null;
    }
  } catch(e) {
    console.log(`  ERROR: ${e.message}`);
    return null;
  }
}

async function main() {
  // Task 3a: 44 from wiki-delete-results.json
  const wikiResults = JSON.parse(fs.readFileSync('wiki-delete-results.json', 'utf8'));
  let backfilled = 0;
  
  for (const entry of wikiResults.found) {
    const castle = castles.find(c => c.name === entry.name);
    if (!castle) {
      console.log(`SKIP (not in data): ${entry.name}`);
      continue;
    }
    if (castle.image && castle.image.includes('img.castlecore.uk')) {
      console.log(`SKIP (already has R2 image): ${entry.name}`);
      continue;
    }
    const slug = slugify(entry.name);
    const r2url = await processImage(entry.name, entry.img, slug);
    if (r2url) {
      // Move old image to gallery if exists
      if (castle.image && !castle.gallery?.includes(castle.image)) {
        castle.gallery = castle.gallery || [];
        castle.gallery.push(castle.image);
      }
      castle.image = r2url;
      backfilled++;
    }
  }
  
  // Task 3b: 8 "look at" castles
  const lookAt = [
    { name: "Wardour Castle", search: "Old Wardour Castle" },
    { name: "Newport Castle (Pembs)", search: "Newport Castle, Pembrokeshire" },
    { name: "Castle Hyde", search: "Castlehyde" },
    { name: "Finlaystone Castle", search: "Finlaystone House" },
    { name: "Millom Castle", search: "Millom Castle" },
    { name: "Castle of Esslemont", search: "Esslemont Castle" },
    { name: "Newtownstewart Castle", search: "Stewart Castle, Northern Ireland" },
    { name: "Deel Castle Mayo", search: "Deel Castle" },
  ];
  
  for (const la of lookAt) {
    const castle = castles.find(c => c.name === la.name);
    if (!castle) {
      console.log(`SKIP (not in data): ${la.name}`);
      continue;
    }
    if (castle.image && castle.image.includes('img.castlecore.uk')) {
      console.log(`SKIP (already has R2 image): ${la.name}`);
      continue;
    }
    console.log(`Wiki lookup: "${la.search}" for ${la.name}`);
    const imgUrl = await fetchWikiImage(la.search);
    if (!imgUrl) {
      console.log(`  No Wikipedia image found`);
      continue;
    }
    const slug = slugify(la.name);
    const r2url = await processImage(la.name, imgUrl, slug);
    if (r2url) {
      if (castle.image && !castle.gallery?.includes(castle.image)) {
        castle.gallery = castle.gallery || [];
        castle.gallery.push(castle.image);
      }
      castle.image = r2url;
      backfilled++;
    }
  }
  
  console.log(`\nTotal backfilled: ${backfilled}`);
  console.log(`Final castle count: ${castles.length}`);
  
  saveData();
}

saveData(); // save after deletions/merge
main().catch(e => { console.error(e); process.exit(1); });
