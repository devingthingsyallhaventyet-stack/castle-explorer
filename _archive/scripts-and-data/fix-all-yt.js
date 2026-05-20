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
  'caernarfon-castle','canterbury-cathedral','castle-howard',
  'chatsworth-house','corfe-castle','dover-castle',
  'dunnottar-castle','durham-cathedral','edinburgh-castle','eilean-donan-castle',
  'fountains-abbey','hampton-court-palace','kilkenny-castle','leeds-castle',
  'rock-of-cashel','stirling-castle','tower-of-london','warwick-castle',
  'windsor-castle'
];

for (const slug of pages) {
  const castle = ctx.CASTLES.find(x => x && x.name && slugify(x.name) === slug);
  const name = castle ? castle.name : slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  
  let h = fs.readFileSync('site/' + slug + '.html', 'utf8');
  const query = encodeURIComponent(name + ' drone cinematic');
  
  // Replace broken template literal with actual query
  h = h.replace(
    /q=\$\{encodeURIComponent\([^)]*\)?\}?/g,
    'q=' + query
  );
  
  fs.writeFileSync('site/' + slug + '.html', h);
  console.log('Fixed: ' + slug + ' → q=' + query);
}
