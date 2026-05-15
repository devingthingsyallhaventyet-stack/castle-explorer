const fs = require('fs');
const API_KEY = 'AIzaSyA1OrSJLhSG2YOLKPAo9-Jk0Lwoe4X0SX8';

async function main() {
  const staging = JSON.parse(fs.readFileSync('google-images-staging.json', 'utf8'));
  let fixed = 0, failed = 0;
  
  for (const [key, entry] of Object.entries(staging)) {
    if (!entry.photos) continue;
    for (let i = 0; i < entry.photos.length; i++) {
      const p = entry.photos[i];
      if (!p.googlePhotoUri || !p.googlePhotoUri.startsWith('https://places.googleapis.com')) continue;
      
      // Need to resolve this URL
      const url = `${p.googlePhotoUri}/media?maxWidthPx=800&key=${API_KEY}&skipHttpRedirect=true`;
      try {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), 8000);
        const res = await fetch(url, { signal: controller.signal });
        clearTimeout(timer);
        if (res.ok) {
          const data = await res.json();
          if (data.photoUri) {
            entry.photos[i].googlePhotoUri = data.photoUri;
            fixed++;
          } else {
            failed++;
          }
        } else {
          failed++;
        }
      } catch(e) { failed++; }
      await new Promise(r => setTimeout(r, 100));
    }
    if (fixed % 20 === 0 && fixed > 0) console.log(`Fixed ${fixed} so far...`);
  }
  
  console.log(`Done. Fixed: ${fixed}, Failed: ${failed}`);
  fs.writeFileSync('google-images-staging.json', JSON.stringify(staging, null, 2));
}

main();
