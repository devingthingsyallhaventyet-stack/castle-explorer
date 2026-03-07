const fs = require('fs');
const https = require('https');
const http = require('http');

const GOOGLE_API_KEY = 'AIzaSyA1OrSJLhSG2YOLKPAo9-Jk0Lwoe4X0SX8';
const CF_ACCOUNT_ID = '0593d0435bdf2220598fcc51183baa95';
const CF_API_TOKEN = '2zUXPCS5QPjKr9DRzn_k8JNpiX0Sz9GnWPvgHl2-';
const R2_BUCKET = 'castle-images';
const IMG_BASE_URL = 'https://img.castlecore.uk';
const MAX_GALLERY = 5; // total images per listing (1 existing + 4 new)

// Load castles
const src = fs.readFileSync('data.js', 'utf8');
const jsonStr = src.replace(/^const CASTLES\s*=\s*/, '').replace(/;\s*$/, '');
const castles = JSON.parse(jsonStr);

// Progress tracking
const PROGRESS_FILE = 'gallery-progress.json';
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

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

async function searchPlace(name, lat, lng, country) {
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
  if (data.places && data.places[0] && data.places[0].photos) {
    return data.places[0].photos; // return ALL photo references
  }
  return [];
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

async function main() {
  // Only process castles that have an image (primary) but need gallery expansion
  const targets = castles.filter((c, i) => {
    c._index = i;
    if (!c.image) return false; // skip those without any image
    const gallery = c.gallery || [];
    return gallery.length < MAX_GALLERY - 1; // need more gallery images (gallery excludes primary)
  });

  console.log(`Targets for gallery expansion: ${targets.length}`);
  console.log(`Will fetch up to ${MAX_GALLERY - 1} additional photos per site\n`);

  let totalNew = 0, failed = 0, skipped = 0, apiCalls = 0;

  for (let i = 0; i < targets.length; i++) {
    const c = targets[i];
    const slug = slugify(c.name);

    // Skip if already processed
    if (progress[slug] && progress[slug].done) {
      skipped++;
      continue;
    }

    try {
      // Search for place and get all photo references
      const photos = await searchPlace(c.name, c.lat, c.lng, c.country || '');
      apiCalls++;

      if (photos.length <= 1) {
        progress[slug] = { done: true, added: 0, reason: 'only_one_photo' };
        failed++;
        console.log(`[${i+1}/${targets.length}] — ${c.name}: only ${photos.length} photo(s) available`);
        await sleep(100);
        if ((i + 1) % 100 === 0) saveProgress();
        continue;
      }

      // Skip first photo (we already have it), take up to 4 more
      const existingGallery = c.gallery || [];
      const needed = (MAX_GALLERY - 1) - existingGallery.length;
      const newPhotos = photos.slice(1, 1 + needed);
      const galleryUrls = [];

      for (let p = 0; p < newPhotos.length; p++) {
        const photoUrl = await getPhotoUrl(newPhotos[p].name);
        apiCalls++;
        if (!photoUrl) continue;

        const imageData = await downloadImage(photoUrl);
        if (!imageData || imageData.length < 1000) continue;

        const imgNum = existingGallery.length + p + 2; // -2.jpg, -3.jpg, etc.
        const r2Key = `${slug}-${imgNum}.jpg`;
        const uploaded = await uploadToR2(r2Key, imageData, 'image/jpeg');

        if (uploaded) {
          const url = `${IMG_BASE_URL}/${r2Key}`;
          galleryUrls.push(url);
          totalNew++;
        }
        await sleep(100);
      }

      progress[slug] = { done: true, added: galleryUrls.length };

      if (galleryUrls.length > 0) {
        // Update castle data
        if (!castles[c._index].gallery) castles[c._index].gallery = [];
        castles[c._index].gallery.push(...galleryUrls);
        console.log(`[${i+1}/${targets.length}] ✓ ${c.name}: +${galleryUrls.length} photos`);
      } else {
        console.log(`[${i+1}/${targets.length}] — ${c.name}: no new photos downloaded`);
      }

    } catch (err) {
      progress[slug] = { done: true, added: 0, error: err.message };
      failed++;
      console.log(`[${i+1}/${targets.length}] ✗ ${c.name}: ${err.message}`);
    }

    if ((i + 1) % 50 === 0) {
      saveProgress();
      // Save data.js periodically too
      fs.writeFileSync('data.js', 'const CASTLES = ' + JSON.stringify(castles, null, 2) + ';\n');
      console.log(`\n--- Checkpoint: ${totalNew} new images, ${apiCalls} API calls, ${i+1}/${targets.length} processed ---\n`);
    }

    await sleep(150);
  }

  saveProgress();

  // Final save of data.js
  fs.writeFileSync('data.js', 'const CASTLES = ' + JSON.stringify(castles, null, 2) + ';\n');
  console.log(`\nDone! New images: ${totalNew}, Failed: ${failed}, Skipped: ${skipped}, API calls: ${apiCalls}`);
}

main().catch(console.error);
