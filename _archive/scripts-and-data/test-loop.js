const fs = require('fs');
const castles = JSON.parse(fs.readFileSync('data.js', 'utf8').replace(/^const CASTLES\s*=\s*/, '').replace(/;\s*$/, ''));
const missing = castles.filter(c => !c.image);
console.log(missing.length, 'missing');

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function queryWiki(title) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=pageimages&format=json&pithumbsize=500`;
  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 5000);
    const res = await fetch(url, {
      signal: ctrl.signal,
      headers: { 'User-Agent': 'castlecore-bot/1.0 (castle explorer project; contact@example.com)', 'Accept': 'application/json' }
    });
    clearTimeout(timer);
    const data = await res.json();
    for (const p of Object.values(data.query?.pages || {})) {
      if (p.thumbnail?.source) return p.thumbnail.source;
    }
  } catch (e) { }
  return null;
}

(async () => {
  let found = 0;
  for (let i = 0; i < 50; i++) {
    const c = missing[i];
    let img = await queryWiki(c.name);
    if (!img && c.county) { await sleep(50); img = await queryWiki(c.name + ' ' + c.county); }
    if (!img && c.country) { await sleep(50); img = await queryWiki(c.name + ' ' + c.country); }
    if (img) found++;
    await sleep(50);
    if ((i + 1) % 10 === 0) console.log(`${i + 1}/50 found:${found}`);
  }
  console.log('Done. Found:', found);
})();
