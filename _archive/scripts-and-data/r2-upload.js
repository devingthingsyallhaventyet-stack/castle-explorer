const fs = require('fs');
const https = require('https');
const path = require('path');

const API_TOKEN = '2zUXPCS5QPjKr9DRzn_k8JNpiX0Sz9GnWPvgHl2-';
const ACCOUNT_ID = '0593d0435bdf2220598fcc51183baa95';
const BUCKET = 'castle-images';

const files = [
  'img/sigginstown-castle.jpg',
  'img/ballingarry-castle.jpg',
  'img/portlick-castle.jpg',
  'img/assaroe-abbey.jpg',
  'img/ballykinvarga-fort.jpg',
  'img/mountlong-castle.jpg'
];

async function upload(filePath) {
  const key = path.basename(filePath);
  const data = fs.readFileSync(filePath);
  
  return new Promise((resolve, reject) => {
    const opts = {
      hostname: 'api.cloudflare.com',
      path: `/client/v4/accounts/${ACCOUNT_ID}/r2/buckets/${BUCKET}/objects/${key}`,
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
        'Content-Type': 'image/jpeg',
        'Content-Length': data.length
      }
    };
    
    const req = https.request(opts, r => {
      let body = '';
      r.on('data', c => body += c);
      r.on('end', () => {
        console.log(`${key}: ${r.statusCode} ${body.substring(0, 200)}`);
        resolve(r.statusCode);
      });
    });
    req.on('error', e => { console.error(`${key}: ERROR ${e.message}`); reject(e); });
    req.write(data);
    req.end();
  });
}

async function main() {
  for (const f of files) {
    try { await upload(f); } catch(e) { console.error(e.message); }
  }
}
main();
