const fs = require('fs');
const https = require('https');
const http = require('http');

const GOOGLE_API_KEY = 'AIzaSyA1OrSJLhSG2YOLKPAo9-Jk0Lwoe4X0SX8';
const CF_ACCOUNT_ID = '0593d0435bdf2220598fcc51183baa95';
const CF_API_TOKEN = '2zUXPCS5QPjKr9DRzn_k8JNpiX0Sz9GnWPvgHl2-';
const R2_BUCKET = 'castle-images';
const IMG_BASE_URL = 'https://img.castlecore.uk';
const STAGING_FILE = 'google-images-staging.json';

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

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

async function downloadImage(url) {
  const res = await fetch(url);
  if (res.status === 200) return res.body;
  if (res.status >= 300 && res.status < 400 && res.headers.location) {
    return downloadImage(res.headers.location);
  }
  return null;
}

async function uploadToR2(key, imageBuffer, retries = 3) {
  const url = `https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT_ID}/r2/buckets/${R2_BUCKET}/objects/${encodeURIComponent(key)}`;
  for (let attempt = 0; attempt < retries; attempt++) {
    if (attempt > 0) await sleep(5000 * attempt);
    const res = await fetch(url, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${CF_API_TOKEN}`,
        'Content-Type': 'image/jpeg'
      },
      body: imageBuffer
    });
    const respText = res.body.toString();
    try {
      const data = JSON.parse(respText);
      if (data.success) return true;
      if (respText.includes('Rate limited') && attempt < retries - 1) {
        console.log(`  R2 rate limited, retrying in ${2*(attempt+1)}s...`);
        continue;
      }
      console.log(`  R2 error: ${respText.slice(0, 200)}`);
      return false;
    } catch {
      if (res.status === 200) return true;
      return false;
    }
  }
  return false;
}

async function main() {
  // Load audit data
  const auditData = JSON.parse(fs.readFileSync('audit-data.json', 'utf8'));
  const approved = Object.entries(auditData).filter(([_, v]) => v.reviewStatus === 'approved');
  console.log(`Found ${approved.length} approved entries`);

  // Load existing staging
  let staging = {};
  if (fs.existsSync(STAGING_FILE)) {
    staging = JSON.parse(fs.readFileSync(STAGING_FILE, 'utf8'));
    console.log(`Loaded ${Object.keys(staging).length} existing staging entries`);
  }

  let withPhotos = 0, noResults = 0, totalPhotos = 0, skipped = 0, errors = 0;

  for (let i = 0; i < approved.length; i++) {
    const [key, entry] = approved[i];

    // Skip if already in staging
    if (staging[key]) {
      skipped++;
      if ((i + 1) % 25 === 0) console.log(`[${i+1}/${approved.length}] progress (skipped cached)...`);
      continue;
    }

    try {
      // Step 1: Search Google Places
      const body = { textQuery: `${entry.name} ${entry.county || ''} ${entry.country}` };
      if (entry.lat && entry.lng) {
        body.locationBias = { circle: { center: { latitude: entry.lat, longitude: entry.lng }, radius: 5000 } };
      }

      const searchRes = await fetch('https://places.googleapis.com/v1/places:searchText', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Goog-Api-Key': GOOGLE_API_KEY,
          'X-Goog-FieldMask': 'places.id,places.displayName,places.photos'
        },
        body: JSON.stringify(body)
      });
      await sleep(100);

      const searchData = JSON.parse(searchRes.body.toString());
      const place = searchData.places && searchData.places[0];

      if (!place || !place.photos || place.photos.length === 0) {
        staging[key] = { placeId: place?.id || null, placeName: place?.displayName?.text || null, photos: [] };
        noResults++;
        if ((i + 1) % 25 === 0) console.log(`[${i+1}/${approved.length}] ${entry.name} — no photos`);
      } else {
        const slug = slugify(entry.name);
        const photos = [];
        const photoRefs = place.photos.slice(0, 5);

        for (let pi = 0; pi < photoRefs.length; pi++) {
          const photo = photoRefs[pi];
          try {
            // Get photo URL
            const mediaRes = await fetch(
              `https://places.googleapis.com/v1/${photo.name}/media?maxWidthPx=1200&skipHttpRedirect=true&key=${GOOGLE_API_KEY}`
            );
            await sleep(100);
            const mediaData = JSON.parse(mediaRes.body.toString());
            const photoUri = mediaData.photoUri;
            if (!photoUri) continue;

            const r2Key = `${slug}-gp-${pi + 1}.jpg`;
            const attr = photo.authorAttributions && photo.authorAttributions[0];
            photos.push({
              url: `${IMG_BASE_URL}/${r2Key}`,
              r2Key,
              googlePhotoUri: photoUri,
              attribution: attr ? `Photo by ${attr.displayName}` : 'Unknown',
              authorUrl: attr?.uri || '',
              googleAttribution: 'Google Maps',
              uploaded: false
            });
            totalPhotos++;
          } catch (photoErr) {
            console.log(`  ✗ Photo error for ${entry.name} #${pi+1}: ${photoErr.message}`);
          }
        }

        staging[key] = {
          placeId: place.id,
          placeName: place.displayName?.text || entry.name,
          photos
        };

        if (photos.length > 0) {
          withPhotos++;
          console.log(`[${i+1}/${approved.length}] ✓ ${entry.name} — ${photos.length} photos`);
        } else {
          noResults++;
          console.log(`[${i+1}/${approved.length}] ✗ ${entry.name} — photos failed to download`);
        }
      }
    } catch (err) {
      errors++;
      staging[key] = { placeId: null, placeName: null, photos: [], error: err.message };
      console.log(`[${i+1}/${approved.length}] ✗ ${entry.name} — ERROR: ${err.message}`);
    }

    // Save every 10 entries
    if ((i + 1) % 10 === 0) {
      fs.writeFileSync(STAGING_FILE, JSON.stringify(staging, null, 2));
    }
    if ((i + 1) % 25 === 0) {
      console.log(`--- Checkpoint ${i+1}/${approved.length}: ${withPhotos} with photos, ${noResults} no results, ${totalPhotos} total photos, ${errors} errors ---`);
    }
  }

  // Final save
  fs.writeFileSync(STAGING_FILE, JSON.stringify(staging, null, 2));

  console.log('\n=== SUMMARY ===');
  console.log(`Total approved: ${approved.length}`);
  console.log(`Skipped (cached): ${skipped}`);
  console.log(`With photos: ${withPhotos}`);
  console.log(`No results/photos: ${noResults}`);
  console.log(`Errors: ${errors}`);
  console.log(`Total photos downloaded: ${totalPhotos}`);
}

main().catch(console.error);
