const fs = require('fs');
const https = require('https');

function wikiThumb(title) {
  return new Promise(resolve => {
    const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=pageimages&pithumbsize=600&format=json`;
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
  // Get Wikipedia images for route cards
  const needed = [
    'Dolbadarn Castle',
    'Castell Dinas Brân', 
    'Powis Castle',
    'Tretower Court',
    'Hay Castle',
    'Ogmore Castle',
    'Harlech Castle',
    'Cardiff Castle',
    'Chepstow Castle',
    'Raglan Castle',
    'Caerphilly Castle',
  ];
  
  const images = {};
  for (const name of needed) {
    await new Promise(r => setTimeout(r, 100));
    const img = await wikiThumb(name);
    images[name] = img;
    console.log(`${name}: ${img ? 'OK' : 'MISSING'}`);
  }
  
  // Fix snowdonia-north.html
  let sn = fs.readFileSync('wales/snowdonia-north.html', 'utf8');
  sn = sn.replace(
    'src="https://img.castlecore.uk/dolbadarn-castle.jpg"',
    `src="${images['Dolbadarn Castle']}"`
  );
  sn = sn.replace(
    'src="https://img.castlecore.uk/dinas-bran-castle.jpg"',
    `src="${images['Castell Dinas Brân'] || images['Harlech Castle']}"`
  );
  fs.writeFileSync('wales/snowdonia-north.html', sn, 'utf8');
  console.log('Fixed snowdonia-north.html routes');

  // Fix mid-wales-marches.html
  let mw = fs.readFileSync('wales/mid-wales-marches.html', 'utf8');
  mw = mw.replace(
    'src="https://img.castlecore.uk/powis-castle.jpg"',
    `src="${images['Powis Castle']}"`
  );
  mw = mw.replace(
    'src="https://img.castlecore.uk/tretower-court.jpg"',
    `src="${images['Tretower Court']}"`
  );
  mw = mw.replace(
    'src="https://img.castlecore.uk/hay-castle.jpg"',
    `src="${images['Hay Castle']}"`
  );
  fs.writeFileSync('wales/mid-wales-marches.html', mw, 'utf8');
  console.log('Fixed mid-wales-marches.html routes');

  // Fix south-wales.html  
  let sw = fs.readFileSync('wales/south-wales.html', 'utf8');
  sw = sw.replace(
    'src="https://img.castlecore.uk/ogmore-castle.jpg"',
    `src="${images['Ogmore Castle']}"`
  );
  fs.writeFileSync('wales/south-wales.html', sw, 'utf8');
  console.log('Fixed south-wales.html routes');

  // Fix Neath Castle duplicates in south-wales.json
  let swData = JSON.parse(fs.readFileSync('wales/data/south-wales.json', 'utf8'));
  const before = swData.length;
  const seen = new Set();
  swData = swData.filter(c => {
    const key = c.name + '|' + c.lat + '|' + c.lng;
    if (seen.has(key)) { console.log(`Removed duplicate: ${c.name}`); return false; }
    seen.add(key);
    return true;
  });
  console.log(`south-wales.json: ${before} → ${swData.length} entries`);
  fs.writeFileSync('wales/data/south-wales.json', JSON.stringify(swData), 'utf8');

  // Also fix in data-wales.js
  const window = {};
  new Function('window', fs.readFileSync('data-wales.js', 'utf8'))(window);
  let allWales = window.walesCastles;
  const beforeAll = allWales.length;
  const seenAll = new Set();
  allWales = allWales.filter(c => {
    const key = c.name + '|' + c.lat + '|' + c.lng;
    if (seenAll.has(key)) { console.log(`Removed duplicate from data-wales.js: ${c.name}`); return false; }
    seenAll.add(key);
    return true;
  });
  console.log(`data-wales.js: ${beforeAll} → ${allWales.length} entries`);
  fs.writeFileSync('data-wales.js', 'window.walesCastles=' + JSON.stringify(allWales), 'utf8');
}

main();
