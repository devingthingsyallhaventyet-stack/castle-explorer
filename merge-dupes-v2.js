const fs = require('fs');
const vm = require('vm');

const d = fs.readFileSync('data.js', 'utf8');
const ctx = {};
vm.runInNewContext(d.replace('const CASTLES', 'this.CASTLES'), ctx);
let CASTLES = ctx.CASTLES.filter(x => x);

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

// Check for specific duplicates
const checks = [
  'strome', 'kirkham', 'sheriff hutton', 'leeds', 'hore',
  'conwy', 'caernarfon'
];

for (const term of checks) {
  const matches = CASTLES.filter(c => c.name && c.name.toLowerCase().includes(term));
  if (matches.length > 0) {
    console.log(`\n=== ${term.toUpperCase()} (${matches.length} listings) ===`);
    matches.forEach(c => {
      console.log(`  "${c.name}" | lat:${c.lat} lng:${c.lng} | slug: ${slugify(c.name)}`);
    });
  }
}

// Check for site/ pages with these terms
const siteFiles = fs.readdirSync('site').filter(f => f.endsWith('.html'));
console.log('\n=== SITE PAGES ===');
for (const term of ['strome', 'kirkham', 'sheriff', 'leeds', 'hore-abbey', 'conwy-castle', 'caernarfon']) {
  const pages = siteFiles.filter(f => f.includes(term));
  if (pages.length) console.log(`${term}: ${pages.join(', ')}`);
}
