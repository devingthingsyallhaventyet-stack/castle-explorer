const fs = require('fs');
const path = require('path');

let data = fs.readFileSync(path.join(__dirname, 'data.js'), 'utf8');

// Renames
const renames = [
  ['Windsor Castle Interior', 'Windsor Castle'],
  ['Edinburgh Castle Interior', 'Edinburgh Castle'],
  ['Hampton Court Palace Interior', 'Hampton Court Palace'],
  ['Notland Castle Interior', 'Notland Castle'],
];
for (const [old, nw] of renames) {
  const before = data.includes(old);
  data = data.split(old).join(nw);
  const after = data.includes(nw);
  console.log(`Rename "${old}" -> "${nw}": ${before ? 'found' : 'NOT FOUND'} -> ${after ? 'done' : 'FAILED'}`);
}

// Deletes - null out entire objects for duplicate entries
const toDelete = [
  'Conwy Castle Interior Tours',
  'Caernarfon Castle Interior Tours',
  'Beaumaris Castle Interior Tours',
  'Craigievar Castle Interior Views',
];
for (const name of toDelete) {
  const idx = data.indexOf(`"name": "${name}"`);
  if (idx === -1) {
    console.log(`Delete "${name}": NOT FOUND`);
    continue;
  }
  // Find the opening { before this name
  let braceStart = data.lastIndexOf('{', idx);
  // Find the matching closing }
  let depth = 1;
  let pos = braceStart + 1;
  while (depth > 0 && pos < data.length) {
    if (data[pos] === '{') depth++;
    if (data[pos] === '}') depth--;
    pos++;
  }
  const obj = data.substring(braceStart, pos);
  data = data.replace(obj, 'null');
  console.log(`Delete "${name}": done (${obj.length} chars removed)`);
}

// Verify
const vm = require('vm');
const ctx = {};
vm.runInNewContext(data.replace(/\bconst\b/g, 'var'), ctx);
const C = ctx.CASTLES.filter(c => c !== null);
console.log('\nTotal sites:', C.length);

// Check renames worked
for (const [_, nw] of renames) {
  const found = C.find(c => c.name === nw);
  console.log(`  ${nw}: ${found ? '✓' : '✗'}`);
}

// Check deletes worked
for (const name of toDelete) {
  const found = C.find(c => c.name === name);
  console.log(`  ${name}: ${found ? '⚠️ STILL EXISTS' : '✓ deleted'}`);
}

fs.writeFileSync(path.join(__dirname, 'data.js'), data, 'utf8');
console.log('\nWrote data.js');
