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

const replacements = [
  [/Edinburgh Castle Interior/g, 'Edinburgh Castle'],
  [/Hampton Court Palace Interior/g, 'Hampton Court Palace'],
  [/Windsor Castle Interior/g, 'Windsor Castle'],
  [/Caernarfon Castle Interior Tours/g, 'Caernarfon Castle'],
  [/Caernarfon Castle Interior/g, 'Caernarfon Castle'],
  [/Conwy Castle Interior Tours/g, 'Conwy Castle'],
  [/Conwy Castle Interior/g, 'Conwy Castle'],
  // Fix image references too
  [/edinburgh-castle-interior/g, 'edinburgh-castle'],
  [/hampton-court-palace-interior/g, 'hampton-court-palace'],
  [/windsor-castle-interior/g, 'windsor-castle'],
  [/caernarfon-castle-interior-tours/g, 'caernarfon-castle'],
  [/conwy-castle-interior-tours/g, 'conwy-castle'],
];

let totalFixed = 0;
for (const p of pages) {
  let h = fs.readFileSync('site/' + p + '.html', 'utf8');
  let changed = false;
  for (const [re, rep] of replacements) {
    const before = h;
    h = h.replace(re, rep);
    if (h !== before) changed = true;
  }
  if (changed) {
    fs.writeFileSync('site/' + p + '.html', h);
    console.log('Fixed: ' + p);
    totalFixed++;
  }
}
console.log('\nFixed ' + totalFixed + ' pages');

// Verify
console.log('\nVerifying...');
for (const p of pages) {
  const h = fs.readFileSync('site/' + p + '.html', 'utf8');
  // Only flag "Interior" that's NOT "Uneven Interior" or similar terrain terms
  const stripped = h.replace(/Uneven Interior/g, '').replace(/interior design/gi, '').replace(/interior walls/gi, '').replace(/interior of/gi, '');
  if (/Interior/i.test(stripped)) {
    console.log('⚠️ Still has Interior: ' + p);
  }
}
