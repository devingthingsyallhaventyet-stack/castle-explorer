const fs = require('fs');

async function main() {
  const staging = JSON.parse(fs.readFileSync('google-images-staging.json', 'utf8'));
  let fixed = 0, failed = 0, total = 0;
  
  for (const [key, entry] of Object.entries(staging)) {
    if (!entry.photos) continue;
    for (let i = 0; i < entry.photos.length; i++) {
      const p = entry.photos[i];
      if (!p.googlePhotoUri?.includes('places.googleapis.com')) continue;
      total++;
      
      try {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), 8000);
        const res = await fetch(p.googlePhotoUri, { redirect: 'follow', signal: controller.signal });
        clearTimeout(timer);
        if (res.ok && res.url?.startsWith('https://lh3.')) {
          entry.photos[i].googlePhotoUri = res.url;
          fixed++;
        } else { failed++; }
      } catch(e) { failed++; }
      
      await new Promise(r => setTimeout(r, 100));
    }
    if (fixed % 50 === 0 && fixed > 0) console.log(`Fixed ${fixed}/${total}...`);
  }
  
  console.log(`Done. Fixed: ${fixed}, Failed: ${failed}, Total bad: ${total}`);
  fs.writeFileSync('google-images-staging.json', JSON.stringify(staging, null, 2));
}
main();
