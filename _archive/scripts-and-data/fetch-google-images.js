const fs = require('fs');
const https = require('https');
const http = require('http');

const GOOGLE_API_KEY = 'AIzaSyA1OrSJLhSG2YOLKPAo9-Jk0Lwoe4X0SX8';
const CF_ACCOUNT_ID = '0593d0435bdf2220598fcc51183baa95';
const CF_API_TOKEN = '2zUXPCS5QPjKr9DRzn_k8JNpiX0Sz9GnWPvgHl2-';
const R2_BUCKET = 'castle-images';
const IMG_BASE_URL = 'https://img.castlecore.uk';

// Load castles
const src = fs.readFileSync('data.js', 'utf8');
const jsonStr = src.replace(/^const CASTLES\s*=\s*/, '').replace(/;\s*$/, '');
const castles = JSON.parse(jsonStr);

// Progress tracking
const PROGRESS_FILE = 'google-images-progress.json';
let progress = {};
if (fs.existsSync(PROGRESS_FILE)) {
  progress = JSON.parse(fs.readFileSync(PROGRESS_FILE, 'utf8'));
}

function saveProgress() {
  fs.writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2));
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

function fetch(url, options = {}) {
  return new Promise((resolve, reject) => {
    const mod = url.startsWith('https') ? https : http;
    const req = mod.request(url, options, (res) => {
      const chunks = [];
      res.on('data', d => chunks.push(d));
      res.on('end', () => {
        const body = Buffer.concat(chunks);
        resolve({ status: res.statusCode, headers: res.headers, body });
      });
    });
    req.on('error', reject);
    if (options.body) req.write(options.body);
    req.end();
  });
}

async function searchPlace(name, lat, lng, country) {
  const query = encodeURIComponent(`${name} ${country}`);
  const url = `https://places.googleapis.com/v1/places:searchText`;
  const body = JSON.stringify({
    textQuery: `${name} ${country}`,
    locationBias: {
      circle: { center: { latitude: lat, longitude: lng }, radius: 5000 }
    },
    maxResultCount: 1
  });
  
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': GOOGLE_API_KEY,
      'X-Goog-FieldMask': 'places.id,places.photos'
    },
    body
  });
  
  const data = JSON.parse(res.body.toString());
  if (data.places && data.places[0] && data.places[0].photos && data.places[0].photos.length > 0) {
    return data.places[0].photos[0].name; // photo resource name
  }
  return null;
}

async function getPhotoUrl(photoName) {
  const url = `https://places.googleapis.com/v1/${photoName}/media?maxWidthPx=1280&skipHttpRedirect=true&key=${GOOGLE_API_KEY}`;
  const res = await fetch(url);
  const data = JSON.parse(res.body.toString());
  return data.photoUri || null;
}

async function downloadImage(url) {
  const res = await fetch(url);
  if (res.status === 200) return res.body;
  // Follow redirect
  if (res.status >= 300 && res.status < 400 && res.headers.location) {
    return downloadImage(res.headers.location);
  }
  return null;
}

async function uploadToR2(key, imageBuffer, contentType) {
  const url = `https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT_ID}/r2/buckets/${R2_BUCKET}/objects/${encodeURIComponent(key)}`;
  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${CF_API_TOKEN}`,
      'Content-Type': contentType || 'image/jpeg'
    },
    body: imageBuffer
  });
  const data = JSON.parse(res.body.toString());
  return data.success;
}

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

async function main() {
  const noImage = castles.filter((c, i) => {
    c._index = i;
    return !c.image;
  });
  
  console.log(`Total without images: ${noImage.length}`);
  
  let found = 0, failed = 0, skipped = 0;
  const updates = []; // {index, imageUrl}
  
  for (let i = 0; i < noImage.length; i++) {
    const c = noImage[i];
    const slug = slugify(c.name);
    
    // Skip if already processed
    if (progress[slug]) {
      if (progress[slug].imageUrl) {
        updates.push({ index: c._index, imageUrl: progress[slug].imageUrl });
        found++;
      } else {
        failed++;
      }
      skipped++;
      continue;
    }
    
    try {
      const country = c.country || '';
      const photoName = await searchPlace(c.name, c.lat, c.lng, country);
      
      if (!photoName) {
        progress[slug] = { status: 'no_photo' };
        failed++;
        if ((i + 1) % 50 === 0) saveProgress();
        console.log(`[${i+1}/${noImage.length}] ✗ ${c.name} — no photo found`);
        await sleep(100);
        continue;
      }
      
      const photoUrl = await getPhotoUrl(photoName);
      if (!photoUrl) {
        progress[slug] = { status: 'no_url' };
        failed++;
        if ((i + 1) % 50 === 0) saveProgress();
        console.log(`[${i+1}/${noImage.length}] ✗ ${c.name} — couldn't get photo URL`);
        await sleep(100);
        continue;
      }
      
      const imageData = await downloadImage(photoUrl);
      if (!imageData || imageData.length < 1000) {
        progress[slug] = { status: 'download_failed' };
        failed++;
        if ((i + 1) % 50 === 0) saveProgress();
        console.log(`[${i+1}/${noImage.length}] ✗ ${c.name} — download failed`);
        await sleep(100);
        continue;
      }
      
      const r2Key = `${slug}.jpg`;
      const uploaded = await uploadToR2(r2Key, imageData, 'image/jpeg');
      
      if (uploaded) {
        const imageUrl = `${IMG_BASE_URL}/${r2Key}`;
        progress[slug] = { status: 'ok', imageUrl };
        updates.push({ index: c._index, imageUrl });
        found++;
        console.log(`[${i+1}/${noImage.length}] ✓ ${c.name} → ${r2Key} (${(imageData.length/1024).toFixed(0)}KB)`);
      } else {
        progress[slug] = { status: 'upload_failed' };
        failed++;
        console.log(`[${i+1}/${noImage.length}] ✗ ${c.name} — R2 upload failed`);
      }
      
    } catch (err) {
      progress[slug] = { status: 'error', error: err.message };
      failed++;
      console.log(`[${i+1}/${noImage.length}] ✗ ${c.name} — ${err.message}`);
    }
    
    if ((i + 1) % 50 === 0) {
      saveProgress();
      console.log(`\n--- Checkpoint: ${found} found, ${failed} failed, ${i+1}/${noImage.length} processed ---\n`);
    }
    
    await sleep(150); // Rate limit
  }
  
  saveProgress();
  
  // Update data.js
  if (updates.length > 0) {
    console.log(`\nUpdating data.js with ${updates.length} new images...`);
    for (const u of updates) {
      castles[u.index].image = u.imageUrl;
    }
    fs.writeFileSync('data.js', 'const CASTLES = ' + JSON.stringify(castles, null, 2) + ';\n');
    console.log('data.js updated!');
  }
  
  console.log(`\nDone! Found: ${found}, Failed: ${failed}, Skipped (cached): ${skipped}`);
}

main().catch(console.error);
