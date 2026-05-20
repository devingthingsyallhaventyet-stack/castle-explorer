const fs = require('fs');
const API_KEY = 'AIzaSyA1OrSJLhSG2YOLKPAo9-Jk0Lwoe4X0SX8';

async function fetchT(url, opts = {}, ms = 8000) {
  const c = new AbortController();
  const t = setTimeout(() => c.abort(), ms);
  try { const r = await fetch(url, { ...opts, signal: c.signal }); clearTimeout(t); return r; }
  catch(e) { clearTimeout(t); return null; }
}

async function main() {
  const staging = JSON.parse(fs.readFileSync('google-images-staging.json', 'utf8'));
  
  // Find all entries with broken photo URLs
  const badKeys = [];
  for (const [key, entry] of Object.entries(staging)) {
    if (!entry.photos) continue;
    if (entry.photos.some(p => p.googlePhotoUri?.includes('places.googleapis.com'))) {
      badKeys.push(key);
    }
  }
  console.log(`Refetching ${badKeys.length} broken entries from Google Places`);
  
  const START = parseInt(process.env.START || '0');
  const COUNT = parseInt(process.env.COUNT || '30');
  const batch = badKeys.slice(START, START + COUNT);
  
  let fixed = 0;
  for (let i = 0; i < batch.length; i++) {
    const key = batch[i];
    const entry = staging[key];
    const name = entry.placeName;
    
    // Re-search Google Places
    const res = await fetchT('https://places.googleapis.com/v1/places:searchText', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': API_KEY,
        'X-Goog-FieldMask': 'places.id,places.displayName,places.photos'
      },
      body: JSON.stringify({ textQuery: name, maxResultCount: 1 })
    }, 10000);
    
    if (!res || !res.ok) {
      console.log(`[${START+i+1}] ${name} — search failed`);
      await new Promise(r => setTimeout(r, 300));
      continue;
    }
    
    const data = await res.json();
    const place = data.places?.[0];
    if (!place || !place.photos?.length) {
      console.log(`[${START+i+1}] ${name} — no photos`);
      entry.photos = [];
      await new Promise(r => setTimeout(r, 300));
      continue;
    }
    
    const photos = [];
    for (const p of place.photos.slice(0, 5)) {
      const photoUrl = `https://places.googleapis.com/v1/${p.name}/media?maxWidthPx=800&key=${API_KEY}`;
      // Follow redirect to get lh3 URL
      const pRes = await fetchT(photoUrl, { redirect: 'manual' }, 5000);
      if (pRes) {
        const location = pRes.headers.get('location');
        if (location?.startsWith('https://lh3.')) {
          const author = p.authorAttributions?.[0];
          photos.push({
            googlePhotoUri: location,
            attribution: author?.displayName || 'Google Maps',
            authorUrl: author?.uri || null
          });
        }
      }
      await new Promise(r => setTimeout(r, 100));
    }
    
    entry.photos = photos;
    fixed++;
    console.log(`[${START+i+1}/${badKeys.length}] ${name} — ${photos.length} photos`);
    await new Promise(r => setTimeout(r, 200));
  }
  
  console.log(`Done batch. Fixed: ${fixed}/${batch.length}`);
  fs.writeFileSync('google-images-staging.json', JSON.stringify(staging, null, 2));
}
main();
