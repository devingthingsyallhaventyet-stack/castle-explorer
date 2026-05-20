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

function fetch(url, maxRedirects = 5) {
  return new Promise((resolve, reject) => {
    if (maxRedirects <= 0) return reject(new Error('Too many redirects'));
    const mod = url.startsWith('https') ? https : http;
    mod.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let loc = res.headers.location;
        if (loc.startsWith('/')) {
          const u = new URL(url);
          loc = u.protocol + '//' + u.host + loc;
        }
        return resolve(fetch(loc, maxRedirects - 1));
      }
      if (res.statusCode !== 200) return reject(new Error(`HTTP ${res.statusCode}`));
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
      hostname: url.hostname,
      path: url.pathname,
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
        'Content-Type': contentType || 'image/jpeg',
        'Content-Length': buffer.length
      }
    };
    const req = https.request(opts, res => {
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) resolve(true);
        else reject(new Error(`R2 ${res.statusCode}: ${Buffer.concat(chunks).toString()}`));
      });
    });
    req.on('error', reject);
    req.write(buffer);
    req.end();
  });
}

async function main() {
  // Load all wiki results
  const files = ['wiki-fuzzy-results.json','wiki-aggressive-results.json','wiki-final-results.json','wiki-definitive-results.json'];
  const all = new Map();
  for (const f of files) {
    try {
      const d = JSON.parse(fs.readFileSync(f, 'utf8'));
      for (const e of (d.found || [])) {
        if (e.name && e.wikiImg) all.set(e.name, e.wikiImg);
      }
    } catch(e) {}
  }
  
  // Add Old Wardour Castle manually
  all.set('Old Wardour Castle', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Old_Wardour_Castle_01.jpg/1280px-Old_Wardour_Castle_01.jpg');
  
  console.log(`Total unique entries: ${all.size}`);
  
  // Load data.js
  let dataContent = fs.readFileSync('data.js', 'utf8');
  // Extract the array
  const match = dataContent.match(/const CASTLES = (\[[\s\S]*\]);?\s*(module\.exports|if\s*\(|$)/);
  let castles;
  eval('castles = ' + dataContent.replace(/^const CASTLES = /, '').replace(/;\s*if\s*\(typeof module[\s\S]*$/, '').replace(/^const CASTLES = /, ''));
  // Actually, let's just require it
  delete require.cache[require.resolve('./data.js')];
  castles = require('./data.js');
  if (castles.CASTLES) castles = castles.CASTLES;
  if (!Array.isArray(castles)) castles = castles;
  
  console.log(`Castles in data.js: ${castles.length}`);
  
  // Build name->index map
  const nameMap = new Map();
  castles.forEach((c, i) => nameMap.set(c.name, i));
  
  let uploaded = 0, skipped = 0, notFound = 0;
  
  for (const [name, wikiImg] of all) {
    const idx = nameMap.get(name);
    if (idx === undefined) {
      console.log(`NOT FOUND in data.js: ${name}`);
      notFound++;
      continue;
    }
    
    const key = `wiki-${slug(name)}.jpg`;
    const r2Url = `${R2_PUBLIC}/${key}`;
    
    try {
      const buf = await fetch(wikiImg);
      if (buf.length < 5000) {
        console.log(`SKIP (too small ${buf.length}b): ${name}`);
        skipped++;
        continue;
      }
      
      const ct = wikiImg.match(/\.png/i) ? 'image/png' : 'image/jpeg';
      await uploadToR2(key, buf, ct);
      
      const castle = castles[idx];
      const hasImage = castle.image && !castle.image.includes('placeholder') && !castle.image.includes('no-image');
      
      if (!hasImage) {
        castle.image = r2Url;
      } else {
        if (!castle.gallery) castle.gallery = [];
        if (!castle.gallery.includes(r2Url)) {
          castle.gallery.push(r2Url);
        }
      }
      
      uploaded++;
      console.log(`OK (${Math.round(buf.length/1024)}KB): ${name} -> ${key}`);
    } catch(e) {
      console.log(`FAIL: ${name} - ${e.message}`);
      skipped++;
    }
  }
  
  // Write back data.js
  const exportLine = `\nif (typeof module !== 'undefined') module.exports = CASTLES;\n`;
  const out = 'const CASTLES = ' + JSON.stringify(castles, null, 2) + ';\n' + exportLine;
  fs.writeFileSync('data.js', out);
  
  console.log(`\nDONE: ${uploaded} uploaded, ${skipped} skipped, ${notFound} not found in data.js`);
  console.log(`Total castles: ${castles.length}`);
}

main().catch(e => { console.error(e); process.exit(1); });
