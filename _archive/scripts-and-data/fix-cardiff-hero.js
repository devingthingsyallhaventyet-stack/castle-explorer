const https = require('https');
const fs = require('fs');

const API_TOKEN = '2zUXPCS5QPjKr9DRzn_k8JNpiX0Sz9GnWPvgHl2-';
const ACCOUNT_ID = '0593d0435bdf2220598fcc51183baa95';
const BUCKET = 'castle-images';

// Try a different Cardiff Castle image
const url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Cardiff_Castle_from_the_west.jpg/1280px-Cardiff_Castle_from_the_west.jpg';

function download(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'CastlecoreBot/1.0 (https://castlecore.uk)' } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) return download(res.headers.location).then(resolve).catch(reject);
      if (res.statusCode !== 200) { reject(new Error('Status: ' + res.statusCode)); return; }
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    }).on('error', reject);
  });
}

function uploadR2(key, data) {
  return new Promise((resolve, reject) => {
    const req = https.request({
      hostname: 'api.cloudflare.com',
      path: `/client/v4/accounts/${ACCOUNT_ID}/r2/buckets/${BUCKET}/objects/${key}`,
      method: 'PUT',
      headers: { 'Authorization': `Bearer ${API_TOKEN}`, 'Content-Type': 'image/jpeg', 'Content-Length': data.length }
    }, (res) => {
      let body = ''; res.on('data', c => body += c);
      res.on('end', () => resolve(res.statusCode));
    });
    req.on('error', reject);
    req.write(data); req.end();
  });
}

async function main() {
  try {
    console.log('Downloading Cardiff Castle image...');
    const data = await download(url);
    console.log('Downloaded ' + (data.length/1024).toFixed(0) + 'KB');
    const status = await uploadR2('cardiff-castle.jpg', data);
    console.log('Upload status:', status);
  } catch(e) {
    console.log('Failed:', e.message);
    // Try another URL
    console.log('Trying alternate...');
    const alt = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Cardiff_Castle_keep_2021.jpg/1280px-Cardiff_Castle_keep_2021.jpg';
    try {
      const data = await download(alt);
      console.log('Downloaded alt ' + (data.length/1024).toFixed(0) + 'KB');
      const status = await uploadR2('cardiff-castle.jpg', data);
      console.log('Upload status:', status);
    } catch(e2) {
      console.log('Alt also failed:', e2.message);
    }
  }
}
main();
