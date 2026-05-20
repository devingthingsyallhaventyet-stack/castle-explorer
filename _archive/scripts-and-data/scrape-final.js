const https = require('https');
const http = require('http');
const fs = require('fs');

const ACCOUNT_ID = '0593d0435bdf2220598fcc51183baa95';
const API_TOKEN = '2zUXPCS5QPjKr9DRzn_k8JNpiX0Sz9GnWPvgHl2-';
const R2_BASE = `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/r2/buckets/castle-images/objects`;
const R2_PUBLIC = 'https://img.castlecore.uk';

function slug(name) {
  return name.toLowerCase().replace(/[()'']/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}
function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function fetch(url, maxRedirects = 5) {
  return new Promise((resolve, reject) => {
    if (maxRedirects <= 0) return reject(new Error('Too many redirects'));
    const mod = url.startsWith('https') ? https : http;
    mod.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' } }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let loc = res.headers.location;
        if (loc.startsWith('/')) { const u = new URL(url); loc = u.protocol + '//' + u.host + loc; }
        res.resume();
        return resolve(fetch(loc, maxRedirects - 1));
      }
      if (res.statusCode !== 200) { res.resume(); return reject(new Error(`HTTP ${res.statusCode}`)); }
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
      res.on('error', reject);
    }).on('error', reject);
  });
}

function uploadToR2(key, buffer, contentType) {
  return new Promise((resolve, reject) => {
    const url = new URL(`${R2_BASE}/${encodeURIComponent(key)}`);
    const opts = {
      hostname: url.hostname, path: url.pathname, method: 'PUT',
      headers: { 'Authorization': `Bearer ${API_TOKEN}`, 'Content-Type': contentType || 'image/jpeg', 'Content-Length': buffer.length }
    };
    const req = https.request(opts, res => {
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => { if (res.statusCode >= 200 && res.statusCode < 300) resolve(true); else reject(new Error(`R2 ${res.statusCode}`)); });
    });
    req.on('error', reject);
    req.write(buffer);
    req.end();
  });
}

async function main() {
  delete require.cache[require.resolve('./data.js')];
  let castles = require('./data.js');
  if (!Array.isArray(castles)) castles = castles.CASTLES || castles;
  const nameMap = new Map();
  castles.forEach((c, i) => nameMap.set(c.name, i));

  const items = [
    { castle: 'Pitcur Souterrain', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Pitcur_Castle_-_geograph.org.uk_-_140012.jpg', key: 'wiki-pitcur-souterrain.jpg' },
    { castle: 'Bruree', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/The_River_Maigue_at_Bruree_-_geograph.org.uk_-_1543488.jpg', key: 'wiki-bruree.jpg' },
  ];

  for (const item of items) {
    await sleep(5000);
    try {
      const buf = await fetch(item.imgUrl);
      if (buf.length < 2000) throw new Error(`Too small: ${buf.length}b`);
      await uploadToR2(item.key, buf, 'image/jpeg');
      const r2Url = `${R2_PUBLIC}/${item.key}`;
      const idx = nameMap.get(item.castle);
      if (idx !== undefined) {
        const c = castles[idx];
        if (!c.image || c.image.includes('placeholder') || c.image.includes('no-image')) c.image = r2Url;
        else { if (!c.gallery) c.gallery = []; if (!c.gallery.includes(r2Url)) c.gallery.push(r2Url); }
      }
      console.log(`OK: ${item.castle} → ${r2Url}`);
    } catch (e) {
      console.log(`FAIL: ${item.castle} - ${e.message}`);
    }
  }

  const exportLine = `\nif (typeof module !== 'undefined') module.exports = CASTLES;\n`;
  fs.writeFileSync('data.js', 'const CASTLES = ' + JSON.stringify(castles, null, 2) + ';\n' + exportLine);
  console.log('data.js updated');
}

main().catch(e => { console.error(e); process.exit(1); });
