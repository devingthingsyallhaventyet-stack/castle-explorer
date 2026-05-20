const fs = require('fs');
const https = require('https');
const http = require('http');

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
  const files = ['wiki-fuzzy-results.json','wiki-aggressive-results.json','wiki-final-results.json','wiki-definitive-results.json'];
  const all = new Map();
  for (const f of files) {
    try { const d = JSON.parse(fs.readFileSync(f, 'utf8')); for (const e of (d.found || [])) { if (e.name && e.wikiImg) all.set(e.name, e.wikiImg); } } catch(e) {}
  }
  all.set('Old Wardour Castle', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Old_Wardour_Castle_01.jpg/1280px-Old_Wardour_Castle_01.jpg');

  // Load already-done from first run (check data.js for wiki- URLs already added)
  delete require.cache[require.resolve('./data.js')];
  let castles = require('./data.js');
  if (!Array.isArray(castles)) castles = castles.CASTLES || castles;
  
  const nameMap = new Map();
  castles.forEach((c, i) => nameMap.set(c.name, i));
  
  // Find which ones still need doing
  const todo = [];
  for (const [name, wikiImg] of all) {
    const idx = nameMap.get(name);
    if (idx === undefined) continue;
    const c = castles[idx];
    const key = `wiki-${slug(name)}.jpg`;
    const r2Url = `${R2_PUBLIC}/${key}`;
    // Skip if already has this R2 URL
    if (c.image === r2Url || (c.gallery && c.gallery.includes(r2Url))) continue;
    todo.push({ name, wikiImg, idx, key, r2Url });
  }
  
  console.log(`TODO: ${todo.length} images remaining`);
  let uploaded = 0, skipped = 0;
  
  for (let i = 0; i < todo.length; i++) {
    const { name, wikiImg, idx, key, r2Url } = todo[i];
    
    // Add delay between requests to avoid 429
    if (i > 0) await sleep(2000);
    
    let buf;
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        buf = await fetch(wikiImg);
        break;
      } catch(e) {
        if (e.message.includes('429') && attempt < 2) {
          console.log(`  429 on ${name}, waiting ${(attempt+1)*5}s...`);
          await sleep((attempt + 1) * 5000);
        } else {
          buf = null;
          console.log(`FAIL: ${name} - ${e.message}`);
          break;
        }
      }
    }
    
    if (!buf || buf.length < 5000) {
      if (buf) console.log(`SKIP (${buf.length}b): ${name}`);
      skipped++;
      continue;
    }
    
    try {
      const ct = wikiImg.match(/\.png/i) ? 'image/png' : 'image/jpeg';
      await uploadToR2(key, buf, ct);
      
      const castle = castles[idx];
      const hasImage = castle.image && !castle.image.includes('placeholder') && !castle.image.includes('no-image');
      if (!hasImage) { castle.image = r2Url; } 
      else { if (!castle.gallery) castle.gallery = []; if (!castle.gallery.includes(r2Url)) castle.gallery.push(r2Url); }
      
      uploaded++;
      console.log(`OK (${Math.round(buf.length/1024)}KB) [${i+1}/${todo.length}]: ${name}`);
    } catch(e) {
      console.log(`R2 FAIL: ${name} - ${e.message}`);
      skipped++;
    }
  }
  
  // Write back
  const exportLine = `\nif (typeof module !== 'undefined') module.exports = CASTLES;\n`;
  fs.writeFileSync('data.js', 'const CASTLES = ' + JSON.stringify(castles, null, 2) + ';\n' + exportLine);
  
  console.log(`\nDONE: ${uploaded} uploaded, ${skipped} skipped`);
  console.log(`Total castles: ${castles.length}`);
}

main().catch(e => { console.error(e); process.exit(1); });
