const fs = require('fs');

const pages = [
  'alnwick-castle','bamburgh-castle','blarney-castle','blenheim-palace',
  'caernarfon-castle','cardiff-castle','castle-howard','conwy-castle',
  'corfe-castle','dover-castle','dunnottar-castle','eilean-donan-castle',
  'fountains-abbey','kilkenny-castle','leeds-castle','rock-of-cashel',
  'stirling-castle','tower-of-london','warwick-castle'
];

let fixed = 0;
for (const slug of pages) {
  let h = fs.readFileSync('site/' + slug + '.html', 'utf8');
  
  // Cardiff special case - use gallery image since wiki download failed
  const r2Url = slug === 'cardiff-castle' 
    ? 'https://img.castlecore.uk/cardiff-castle-2.jpg'
    : 'https://img.castlecore.uk/' + slug + '.jpg';
  
  // Replace hero image src
  const heroRegex = /(class="hero-img"[\s\S]*?src=")([^"]+)(")/;
  const match = h.match(heroRegex);
  if (match && match[2] !== r2Url) {
    h = h.replace(heroRegex, '$1' + r2Url + '$3');
    
    // Also update og:image and twitter:image meta tags
    h = h.replace(/(property="og:image" content=")[^"]+(")/,  '$1' + r2Url + '$2');
    h = h.replace(/(name="twitter:image" content=")[^"]+(")/,  '$1' + r2Url + '$2');
    
    fs.writeFileSync('site/' + slug + '.html', h);
    console.log('✅ ' + slug + ' → ' + r2Url);
    fixed++;
  } else {
    console.log('⏭️ ' + slug + ' (already R2 or no hero found)');
  }
}

console.log('\nSwapped ' + fixed + ' heroes to R2');
