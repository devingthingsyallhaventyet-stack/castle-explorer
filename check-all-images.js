const https = require('https');
const http = require('http');
const fs = require('fs');

const pages = [
  'alnwick-castle','bamburgh-castle','blarney-castle','blenheim-palace',
  'caernarfon-castle','canterbury-cathedral','cardiff-castle','castle-howard',
  'chatsworth-house','conwy-castle','corfe-castle','dover-castle',
  'dunnottar-castle','durham-cathedral','edinburgh-castle','eilean-donan-castle',
  'fountains-abbey','hampton-court-palace','kilkenny-castle','leeds-castle',
  'rock-of-cashel','stirling-castle','tower-of-london','warwick-castle',
  'windsor-castle'
];

function checkUrl(url) {
  return new Promise((resolve) => {
    const mod = url.startsWith('https') ? https : http;
    const req = mod.request(url, { method: 'HEAD', timeout: 5000 }, (res) => {
      resolve(res.statusCode);
    });
    req.on('error', () => resolve('ERROR'));
    req.on('timeout', () => { req.destroy(); resolve('TIMEOUT'); });
    req.end();
  });
}

async function main() {
  for (const p of pages) {
    const h = fs.readFileSync('site/' + p + '.html', 'utf8');
    
    // Get hero image
    const heroMatch = h.match(/class="hero-img"[\s\S]*?src="([^"]+)"/);
    const hero = heroMatch ? heroMatch[1] : null;
    
    // Get all R2 images
    const r2imgs = [...new Set((h.match(/https:\/\/img\.castlecore\.uk\/[^"'\s]+/g) || []))];
    
    // Get Wikipedia images
    const wikiImgs = [...new Set((h.match(/https:\/\/upload\.wikimedia\.org\/[^"'\s]+/g) || []))];
    
    // Check hero
    let heroStatus = 'N/A';
    if (hero) {
      heroStatus = await checkUrl(hero);
    }
    
    const broken = [];
    // Check first R2 image
    for (const img of r2imgs.slice(0, 3)) {
      const status = await checkUrl(img);
      if (status !== 200) broken.push(img + ' → ' + status);
    }
    
    if (heroStatus !== 200 || broken.length) {
      console.log('⚠️ ' + p);
      if (heroStatus !== 200) console.log('  HERO: ' + hero + ' → ' + heroStatus);
      broken.forEach(b => console.log('  ' + b));
    } else {
      console.log('✅ ' + p);
    }
  }
}

main();
