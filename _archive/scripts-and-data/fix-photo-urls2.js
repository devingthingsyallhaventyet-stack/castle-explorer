const fs = require('fs');
const API_KEY = 'AIzaSyA1OrSJLhSG2YOLKPAo9-Jk0Lwoe4X0SX8';

async function fetchWithTimeout(url, opts = {}, timeoutMs = 8000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, { ...opts, signal: controller.signal });
    clearTimeout(timer);
    return res;
  } catch(e) {
    clearTimeout(timer);
    return null;
  }
}

async function main() {
  const staging = JSON.parse(fs.readFileSync('google-images-staging.json', 'utf8'));
  
  // Find entries with bad photo URLs
  const badKeys = [];
  for (const [key, entry] of Object.entries(staging)) {
    if (!entry.photos) continue;
    const hasBad = entry.photos.some(p => p.googlePhotoUri?.startsWith('https://places.googleapis.com'));
    if (hasBad) badKeys.push(key);
  }
  console.log(`Found ${badKeys.length} entries with unresolved photo URLs`);
  
  let fixed = 0;
  for (const key of badKeys) {
    const entry = staging[key];
    const newPhotos = [];
    
    for (const p of entry.photos) {
      if (!p.googlePhotoUri?.startsWith('https://places.googleapis.com')) {
        newPhotos.push(p);
        continue;
      }
      
      // Resolve: append /media to the photo reference
      const mediaUrl = `${p.googlePhotoUri}/media?maxWidthPx=800&key=${API_KEY}&skipHttpRedirect=true`;
      const res = await fetchWithTimeout(mediaUrl, {}, 5000);
      if (res && res.ok) {
        try {
          const data = await res.json();
          if (data.photoUri) {
            p.googlePhotoUri = data.photoUri;
            newPhotos.push(p);
            fixed++;
          }
        } catch(e) {}
      }
      await new Promise(r => setTimeout(r, 150));
    }
    
    entry.photos = newPhotos;
    
    if (badKeys.indexOf(key) % 10 === 0) {
      console.log(`[${badKeys.indexOf(key)+1}/${badKeys.length}] ${entry.placeName} — fixed so far: ${fixed}`);
    }
  }
  
  // Verify
  let remaining = 0;
  Object.values(staging).forEach(s => {
    s.photos?.forEach(p => {
      if (p.googlePhotoUri?.startsWith('https://places.googleapis.com')) remaining++;
    });
  });
  
  console.log(`Done. Fixed: ${fixed}, Remaining bad: ${remaining}`);
  fs.writeFileSync('google-images-staging.json', JSON.stringify(staging, null, 2));
}

main();
