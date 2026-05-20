const fs = require('fs');
const https = require('https');

const raw = fs.readFileSync('data.js', 'utf8');
const castles = JSON.parse(raw.replace(/^const CASTLES = /, '').replace(/;\s*$/, ''));

function fetchJSON(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { headers: { 'User-Agent': 'castlecore-bot/1.0' } }, res => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => { try { resolve(JSON.parse(d)); } catch(e) { reject(e); } });
    });
    req.on('error', reject);
    req.setTimeout(10000, () => { req.destroy(); reject(new Error('timeout')); });
  });
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function tryTitle(title) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=pageimages&format=json&pithumbsize=500`;
  const data = await fetchJSON(url);
  const pages = data?.query?.pages;
  if (!pages) return null;
  for (const id of Object.keys(pages)) {
    if (pages[id].thumbnail?.source) return pages[id].thumbnail.source;
  }
  return null;
}

async function findImage(entry) {
  const tries = [entry.name];
  if (entry.county) tries.push(entry.name + ' ' + entry.county);
  if (entry.country) tries.push(entry.name + ' ' + entry.country);
  for (const t of tries) {
    try {
      const img = await tryTitle(t);
      if (img) return img;
    } catch(e) { /* skip */ }
    await sleep(100);
  }
  return null;
}

function save() {
  fs.writeFileSync('data.js', 'const CASTLES = ' + JSON.stringify(castles, null, 2) + ';\n');
}

async function main() {
  let found = 0, checked = 0, total = castles.filter(e => e && !e.image).length;
  console.log(`Starting backfill: ${total} entries to check`);
  
  for (let i = 0; i < castles.length; i++) {
    const e = castles[i];
    if (!e || e.image) continue;
    checked++;
    const img = await findImage(e);
    if (img) { e.image = img; found++; }
    if (checked % 100 === 0) console.log(`  ${checked}/${total} checked, ${found} found`);
    if (checked % 500 === 0) { save(); console.log('  Saved.'); }
  }
  save();
  console.log(`Done! Found ${found} images out of ${total} missing. Still missing: ${total - found}`);
}

main();
