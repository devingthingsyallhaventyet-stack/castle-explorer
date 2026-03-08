const fs = require('fs');
const https = require('https');

const brokenPages = [
  'alnwick-castle','bamburgh-castle','blarney-castle','blenheim-palace',
  'caernarfon-castle','cardiff-castle','castle-howard','conwy-castle',
  'corfe-castle','dover-castle','dunnottar-castle','eilean-donan-castle',
  'fountains-abbey','kilkenny-castle','leeds-castle','rock-of-cashel',
  'stirling-castle','tower-of-london','warwick-castle'
];

function checkUrl(url) {
  return new Promise((resolve) => {
    const req = https.request(url, { method: 'HEAD', timeout: 5000 }, (res) => {
      resolve(res.statusCode);
    });
    req.on('error', () => resolve('ERROR'));
    req.on('timeout', () => { req.destroy(); resolve('TIMEOUT'); });
    req.end();
  });
}

async function main() {
  let fixed = 0;
  for (const slug of brokenPages) {
    const r2Url = 'https://img.castlecore.uk/' + slug + '.jpg';
    const status = await checkUrl(r2Url);
    
    if (status === 200) {
      let h = fs.readFileSync('site/' + slug + '.html', 'utf8');
      // Replace the Wikipedia hero URL with R2
      const heroMatch = h.match(/(class="hero-img"[\s\S]*?src=")([^"]+)(")/);
      if (heroMatch) {
        h = h.replace(heroMatch[0], heroMatch[1] + r2Url + heroMatch[3]);
        fs.writeFileSync('site/' + slug + '.html', h);
        console.log('✅ ' + slug + ' → R2 hero (' + status + ')');
        fixed++;
      }
    } else {
      console.log('❌ ' + slug + ' → R2 missing (' + status + '), need to upload');
    }
  }
  console.log('\nFixed ' + fixed + '/' + brokenPages.length);
}

main();
