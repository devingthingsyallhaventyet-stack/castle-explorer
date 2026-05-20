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

function fetchJson(url) {
  return fetch(url).then(buf => JSON.parse(buf.toString()));
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
      res.on('end', () => { if (res.statusCode >= 200 && res.statusCode < 300) resolve(true); else reject(new Error(`R2 ${res.statusCode}: ${Buffer.concat(chunks).toString()}`)); });
    });
    req.on('error', reject);
    req.write(buffer);
    req.end();
  });
}

function contentTypeFromUrl(url) {
  if (/\.png/i.test(url)) return 'image/png';
  if (/\.webp/i.test(url)) return 'image/webp';
  if (/\.gif/i.test(url)) return 'image/gif';
  return 'image/jpeg';
}

async function getWikiImage(wikiTitle) {
  const data = await fetchJson(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(wikiTitle)}`);
  if (data.originalimage && data.originalimage.source) return data.originalimage.source;
  if (data.thumbnail && data.thumbnail.source) return data.thumbnail.source;
  throw new Error('No image found on Wikipedia page');
}

async function main() {
  // Load castles
  delete require.cache[require.resolve('./data.js')];
  let castles = require('./data.js');
  if (!Array.isArray(castles)) castles = castles.CASTLES || castles;
  const nameMap = new Map();
  castles.forEach((c, i) => nameMap.set(c.name, i));

  const results = { success: [], failed: [] };

  // Part 1: Wikipedia images
  const wikiItems = [
    { castle: 'Newport Castle (Pembs)', wiki: 'Newport_Castle,_Pembrokeshire' },
    { castle: 'Castle Hyde', wiki: 'Castlehyde' },
    { castle: 'Finlaystone', wiki: 'Finlaystone_House' },
    { castle: 'Deel Castle Mayo', wiki: 'Deel_Castle' },
    { castle: 'Castle of Esslemont', wiki: 'Esslemont_Castle' },
    { castle: 'Newtownstewart', wiki: 'Stewart_Castle,_Northern_Ireland' },
    { castle: 'Millom', wiki: 'Millom_Castle' },
  ];

  console.log('=== Part 1: Wikipedia Images ===');
  for (const item of wikiItems) {
    await sleep(2000);
    try {
      const imgUrl = await getWikiImage(item.wiki);
      console.log(`  Wiki image for ${item.castle}: ${imgUrl.substring(0, 80)}...`);
      const buf = await fetch(imgUrl);
      if (buf.length < 2000) throw new Error(`Image too small: ${buf.length}b`);
      const key = `wiki-${slug(item.castle)}.jpg`;
      const ct = contentTypeFromUrl(imgUrl);
      await uploadToR2(key, buf, ct);
      const r2Url = `${R2_PUBLIC}/${key}`;
      
      // Update data.js
      const idx = nameMap.get(item.castle);
      if (idx !== undefined) {
        const c = castles[idx];
        const hasImage = c.image && !c.image.includes('placeholder') && !c.image.includes('no-image');
        if (!hasImage) c.image = r2Url;
        else { if (!c.gallery) c.gallery = []; if (!c.gallery.includes(r2Url)) c.gallery.push(r2Url); }
      }
      
      console.log(`  OK: ${item.castle} → ${r2Url}`);
      results.success.push({ name: item.castle, url: r2Url });
    } catch (e) {
      console.log(`  FAIL: ${item.castle} - ${e.message}`);
      results.failed.push({ name: item.castle, error: e.message });
    }
  }

  // Part 2: Scraped images - we'll save the URLs to fetch via browser later
  // For now, handle the ones we can identify from HTML
  const scrapeItems = [
    { castle: 'Wardour', url: 'https://www.english-heritage.org.uk/visit/places/old-wardour-castle/' },
    { castle: 'Peele Tower Kentmere', url: 'https://greatacre.wordpress.com/2017/03/24/kentmere-hall/' },
    { castle: 'Lohort', url: 'https://www.britainirelandcastles.com/Ireland/County-Cork/Lohort-Castle.html' },
    { castle: 'Kiltinan', url: 'https://fethard.com/research/kiltinan_castle.html' },
    { castle: 'Blackcastle', url: 'https://www.discoverireland.ie/carlow/black-castle' },
    { castle: 'Castlemore', url: 'https://www.castles.nl/castlemore-castle' },
    { castle: 'Dromore (Limerick)', url: 'https://www.buildingsofireland.ie/buildings-search/building/21901202/dromore-castle-limerick' },
    { castle: 'Bruree', url: 'https://www.ouririshheritage.org/content/archive/place/limerick-castles-database-archive/bruree-ballynoe-castle' },
    { castle: 'Roughan', url: 'https://www.castles.nl/roughan-castle' },
    { castle: 'Pitcur Souterrain', url: 'https://share.google/mu9J2HhkGs06aKZ1U' },
  ];

  // Output scrape items for browser-based fetching
  fs.writeFileSync('scrape-targets.json', JSON.stringify(scrapeItems, null, 2));
  console.log('\n=== Part 2: Scrape targets saved to scrape-targets.json ===');

  // Save data.js
  const exportLine = `\nif (typeof module !== 'undefined') module.exports = CASTLES;\n`;
  fs.writeFileSync('data.js', 'const CASTLES = ' + JSON.stringify(castles, null, 2) + ';\n' + exportLine);

  console.log('\n=== Results ===');
  console.log(`Success: ${results.success.length}`);
  console.log(`Failed: ${results.failed.length}`);
  for (const f of results.failed) console.log(`  - ${f.name}: ${f.error}`);
  
  fs.writeFileSync('fetch-results.json', JSON.stringify(results, null, 2));
}

main().catch(e => { console.error(e); process.exit(1); });
