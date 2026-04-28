const fs = require('fs');
const https = require('https');

function wikiThumb(title) {
  return new Promise(resolve => {
    const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=pageimages&pithumbsize=500&format=json`;
    https.get(url, { headers: { 'User-Agent': 'CastleCore/1.0' } }, res => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => {
        try {
          const pages = JSON.parse(d).query.pages;
          const page = Object.values(pages)[0];
          resolve(page?.thumbnail?.source || null);
        } catch { resolve(null); }
      });
    }).on('error', () => resolve(null));
  });
}

async function main() {
  // Fix castle images
  const fixes = ['Killone Abbey', 'Monivea Castle', 'Turoe Stone'];
  const wikiImages = {};
  for (const name of fixes) {
    await new Promise(r => setTimeout(r, 200));
    wikiImages[name] = await wikiThumb(name);
    console.log(`${name}: ${wikiImages[name] ? 'found' : 'MISSING'}`);
  }

  // Update wild-atlantic-way.json
  let data = JSON.parse(fs.readFileSync('ireland/data/wild-atlantic-way.json', 'utf8'));
  for (const name of fixes) {
    if (!wikiImages[name]) continue;
    const c = data.find(x => x.name === name);
    if (c) { c.image = wikiImages[name]; console.log(`Fixed ${name} in JSON`); }
  }
  fs.writeFileSync('ireland/data/wild-atlantic-way.json', JSON.stringify(data), 'utf8');

  // Update data-ireland.js
  const window = {};
  new Function('window', fs.readFileSync('data-ireland.js', 'utf8'))(window);
  const all = window.irelandCastles;
  for (const name of fixes) {
    if (!wikiImages[name]) continue;
    const c = all.find(x => x.name === name);
    if (c) { c.image = wikiImages[name]; console.log(`Fixed ${name} in data-ireland.js`); }
  }
  fs.writeFileSync('data-ireland.js', 'window.irelandCastles=' + JSON.stringify(all), 'utf8');

  // Fix nearby region card images - check what's there
  const html = fs.readFileSync('ireland/wild-atlantic-way.html', 'utf8');
  const nearbyRe = /nearby-card.*?img src="([^"]+)"/g;
  let m;
  console.log('\nNearby card images:');
  while (m = nearbyRe.exec(html)) {
    const url = m[1];
    console.log(' ', url.substring(0, 100));
  }

  // Get Wikipedia images for nearby regions
  const nearbyImages = {};
  const regionCastles = {
    'kingdom-of-munster': 'Blarney Castle',
    'the-heartlands': 'Rock of Cashel', 
    'ulster-and-the-north': 'Donegal Castle',
    'dublin-and-the-pale': 'Dublin Castle'
  };
  
  for (const [slug, castle] of Object.entries(regionCastles)) {
    await new Promise(r => setTimeout(r, 200));
    nearbyImages[slug] = await wikiThumb(castle);
    console.log(`Nearby ${slug}: ${nearbyImages[slug] ? 'found' : 'MISSING'}`);
  }

  // Replace nearby card images
  let updatedHtml = html;
  for (const [slug, imgUrl] of Object.entries(nearbyImages)) {
    if (!imgUrl) continue;
    const re = new RegExp(`(href="/ireland/${slug}"[^>]*class="nearby-card"><img src=")([^"]+)(")`);
    if (re.test(updatedHtml)) {
      updatedHtml = updatedHtml.replace(re, `$1${imgUrl}$3`);
      console.log(`Fixed nearby card: ${slug}`);
    }
  }
  
  fs.writeFileSync('ireland/wild-atlantic-way.html', updatedHtml, 'utf8');
  console.log('\nDone');
}

main();
