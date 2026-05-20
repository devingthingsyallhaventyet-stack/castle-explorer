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

for (const p of pages) {
  const h = fs.readFileSync('site/' + p + '.html', 'utf8');
  const m = h.match(/class="hero-tagline">([^<]+)/);
  console.log(p + ': ' + (m ? m[1] : 'NOT FOUND'));
}
