const fs = require('fs');
const vm = require('vm');

const d = fs.readFileSync('data.js', 'utf8');
const ctx = {};
vm.runInNewContext(d.replace('const CASTLES', 'this.CASTLES'), ctx);
let CASTLES = ctx.CASTLES.filter(x => x);

const before = CASTLES.length;

// Remove duplicates from data.js (keep the better entry)
const toRemove = [
  'Strome Castle Ruin',      // keep Strome Castle
  'Kirkham Priory Gateway',  // keep Kirkham Priory
  'Sheriff Hutton Castle Ruin', // keep Sheriff Hutton Castle
];

CASTLES = CASTLES.filter(c => !toRemove.includes(c.name));
console.log(`Removed ${before - CASTLES.length} entries from data.js (${before} → ${CASTLES.length})`);

// Write data.js
fs.writeFileSync('data.js', 'const CASTLES = ' + JSON.stringify(CASTLES, null, 2) + ';\n');

// Delete orphan HTML pages
const pagesToDelete = [
  'site/strome-castle-ruin.html',
  'site/strome-ferry-castle.html',
  'site/kirkham-priory-gateway.html',
  'site/sheriff-hutton-castle-ruin.html',
  'site/leeds-castle-kent.html',
  'site/hore-abbey-cashel.html',
  'site/conwy-castle-interior-tours.html',
  'site/caernarfon-castle-interior-tours.html',
  'site/caernarfon-castle-old.html',
];

let deleted = 0;
for (const p of pagesToDelete) {
  if (fs.existsSync(p)) {
    fs.unlinkSync(p);
    console.log('Deleted: ' + p);
    deleted++;
  } else {
    console.log('Not found: ' + p);
  }
}
console.log(`\nDeleted ${deleted} orphan pages. Total sites: ${CASTLES.length}`);
