const fs = require('fs');
const vm = require('vm');

const d = fs.readFileSync('data.js', 'utf8');
const ctx = {};
vm.runInNewContext(d.replace('const CASTLES', 'this.CASTLES'), ctx);

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

const pages = [
  'alnwick-castle','bamburgh-castle','blarney-castle','blenheim-palace',
  'caernarfon-castle','canterbury-cathedral','cardiff-castle','castle-howard',
  'chatsworth-house','conwy-castle','corfe-castle','dover-castle',
  'dunnottar-castle','durham-cathedral','edinburgh-castle','eilean-donan-castle',
  'fountains-abbey','hampton-court-palace','kilkenny-castle','leeds-castle',
  'rock-of-cashel','stirling-castle','tower-of-london','warwick-castle',
  'windsor-castle'
];

let updated = 0;
for (const slug of pages) {
  const castle = ctx.CASTLES.find(x => x && x.name && slugify(x.name) === slug);
  if (!castle) {
    // Try partial match
    const c2 = ctx.CASTLES.find(x => x && x.name && slug.includes(slugify(x.name)));
    if (!c2) { console.log('NOT FOUND in data.js: ' + slug); continue; }
    castle_obj = c2;
  } else {
    castle_obj = castle;
  }
  
  const desc = castle_obj.description;
  const html = fs.readFileSync('site/' + slug + '.html', 'utf8');
  
  // Update meta description
  const newHtml = html.replace(
    /(<meta name="description" content=")[^"]*(")/,
    '$1' + desc.replace(/"/g, '&quot;').substring(0, 160) + '...$2'
  );
  
  if (newHtml !== html) {
    fs.writeFileSync('site/' + slug + '.html', newHtml);
    updated++;
    console.log('UPDATED: ' + slug);
    console.log('  NEW: ' + desc.substring(0, 100));
  } else {
    console.log('UNCHANGED: ' + slug);
  }
}
console.log('\nTotal updated: ' + updated);
