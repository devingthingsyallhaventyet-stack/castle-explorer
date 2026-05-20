const fs = require('fs');
const vm = require('vm');

const d = fs.readFileSync('data.js', 'utf8');
const ctx = {};
vm.runInNewContext(d.replace('const CASTLES', 'this.CASTLES'), ctx);
let CASTLES = ctx.CASTLES.filter(x => x);

const before = CASTLES.length;

// Delete Duleek Tower House (keep Duleek Priory)
CASTLES = CASTLES.filter(c => c.name !== 'Duleek Tower House');

console.log(`Removed ${before - CASTLES.length} entries from data.js (${before} → ${CASTLES.length})`);

fs.writeFileSync('data.js', 'const CASTLES = ' + JSON.stringify(CASTLES, null, 2) + ';\n');

// Delete orphan page
if (fs.existsSync('site/duleek-tower-house.html')) {
  fs.unlinkSync('site/duleek-tower-house.html');
  console.log('Deleted: site/duleek-tower-house.html');
}

console.log('Total sites:', CASTLES.length);
