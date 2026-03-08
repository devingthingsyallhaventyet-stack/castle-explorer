const fs = require('fs');

// Fix Cardiff Castle hero image - replace Castell Coch with actual Cardiff Castle
let cardiff = fs.readFileSync('site/cardiff-castle.html', 'utf8');
cardiff = cardiff.replace(
  'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Castell_Coch_2018.jpg/1280px-Castell_Coch_2018.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Aerial_view_of_Cardiff_Castle.jpg/1280px-Aerial_view_of_Cardiff_Castle.jpg'
);
// Fix broken YT query on Cardiff
cardiff = cardiff.replace(
  /q=\$\{encodeURIComponent\(/g,
  'q=' + encodeURIComponent('Cardiff Castle history tour')
);
fs.writeFileSync('site/cardiff-castle.html', cardiff);
console.log('Fixed Cardiff Castle: hero image + YT query');

// Fix broken YT query on Conwy
let conwy = fs.readFileSync('site/conwy-castle.html', 'utf8');
conwy = conwy.replace(
  /q=\$\{encodeURIComponent\(/g,
  'q=' + encodeURIComponent('Conwy Castle Wales drone cinematic')
);
fs.writeFileSync('site/conwy-castle.html', conwy);
console.log('Fixed Conwy Castle: YT query');

// Check ALL 25 cinematic pages for broken YT queries
const pages = [
  'alnwick-castle','bamburgh-castle','blarney-castle','blenheim-palace',
  'caernarfon-castle','canterbury-cathedral','cardiff-castle','castle-howard',
  'chatsworth-house','conwy-castle','corfe-castle','dover-castle',
  'dunnottar-castle','durham-cathedral','edinburgh-castle','eilean-donan-castle',
  'fountains-abbey','hampton-court-palace','kilkenny-castle','leeds-castle',
  'rock-of-cashel','stirling-castle','tower-of-london','warwick-castle',
  'windsor-castle'
];

let broken = [];
for (const p of pages) {
  const h = fs.readFileSync('site/' + p + '.html', 'utf8');
  if (h.includes('${encodeURIComponent')) {
    broken.push(p);
  }
}
if (broken.length) {
  console.log('\nStill broken YT queries:', broken.join(', '));
} else {
  console.log('\nAll YT queries clean!');
}
