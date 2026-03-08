const https = require('https');
const fs = require('fs');

const API_TOKEN = '2zUXPCS5QPjKr9DRzn_k8JNpiX0Sz9GnWPvgHl2-';
const ACCOUNT_ID = '0593d0435bdf2220598fcc51183baa95';
const BUCKET = 'castle-images';

// Try different Wikipedia thumbnail sizes
const urls = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Edinburgh_Castle_Overview.jpg/1280px-Edinburgh_Castle_Overview.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Edinburgh_Overview02.jpg/1280px-Edinburgh_Overview02.jpg',
  // Try full original (not thumbnail)
  'https://upload.wikimedia.org/wikipedia/commons/4/47/Edinburgh_Castle_-_01.jpg',
  // Google Places images already on R2 - just test which exist
];

function download(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'CastlecoreBot/1.0 (https://castlecore.uk)' } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) return download(res.headers.location).then(resolve).catch(reject);
      if (res.statusCode !== 200) { reject(new Error('Status: ' + res.statusCode + ' for ' + url.split('/').pop())); return; }
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    }).on('error', reject);
  });
}

function checkUrl(url) {
  return new Promise((resolve) => {
    https.request(url, { method: 'HEAD', timeout: 5000 }, (res) => resolve(res.statusCode)).on('error', () => resolve('ERR')).end();
  });
}

async function main() {
  // First check which R2 images exist for Edinburgh
  console.log('=== Checking R2 images ===');
  const r2names = ['edinburgh-castle-2.jpg','edinburgh-castle-3.jpg','edinburgh-castle-4.jpg','edinburgh-castle-5.jpg'];
  for (const name of r2names) {
    const status = await checkUrl('https://img.castlecore.uk/' + name);
    console.log(name + ': ' + status);
  }
  
  // Try Wikipedia downloads
  console.log('\n=== Trying Wikipedia ===');
  for (const url of urls) {
    try {
      const data = await download(url);
      console.log('✅ Downloaded: ' + url.split('/').pop() + ' (' + (data.length/1024).toFixed(0) + 'KB)');
      // Upload as hero
      const req = https.request({
        hostname: 'api.cloudflare.com',
        path: `/client/v4/accounts/${ACCOUNT_ID}/r2/buckets/${BUCKET}/objects/edinburgh-castle-hero.jpg`,
        method: 'PUT',
        headers: { 'Authorization': `Bearer ${API_TOKEN}`, 'Content-Type': 'image/jpeg', 'Content-Length': data.length }
      }, (res) => { console.log('Upload: ' + res.statusCode); });
      req.write(data); req.end();
      return;
    } catch(e) {
      console.log('❌ ' + e.message);
    }
  }
}
main();
