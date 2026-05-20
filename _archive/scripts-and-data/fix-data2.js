const fs = require('fs');
const path = require('path');

let data = fs.readFileSync(path.join(__dirname, 'data.js'), 'utf8');

// Renames (these have no non-Interior counterpart)
data = data.replace(/"name":"Windsor Castle Interior"/g, '"name":"Windsor Castle"');
data = data.replace(/"name":"Edinburgh Castle Interior"/g, '"name":"Edinburgh Castle"');
data = data.replace(/"name":"Hampton Court Palace Interior"/g, '"name":"Hampton Court Palace"');
data = data.replace(/"name":"Notland Castle Interior"/g, '"name":"Notland Castle"');

// Delete duplicates by setting to null (Interior Tours/Views versions)
// These entries exist alongside the main castle entry
const toDelete = [
  'Conwy Castle Interior Tours',
  'Caernarfon Castle Interior Tours', 
  'Beaumaris Castle Interior Tours',
  'Craigievar Castle Interior Views'
];

for (const name of toDelete) {
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(`\\{"name":"${escaped}"[^}]+\\}`, 'g');
  const match = data.match(re);
  if (match) {
    data = data.replace(match[0], 'null');
    console.log('Deleted:', name);
  } else {
    console.log('NOT FOUND:', name);
  }
}

// Also fix Foulksrath - check its image URL
const vm = require('vm');
const ctx = {};
vm.runInNewContext(data.replace(/\bconst\b/g, 'var'), ctx);
const foulk = ctx.CASTLES.find(c => c && c.name && c.name.includes('Foulksrath'));
if (foulk) {
  console.log('\nFoulksrath image:', foulk.image);
  console.log('Foulksrath gallery:', foulk.gallery);
}

// Verify renames
const renamedCheck = ['Windsor Castle', 'Edinburgh Castle', 'Hampton Court Palace', 'Notland Castle'];
for (const n of renamedCheck) {
  const found = ctx.CASTLES.find(c => c && c.name === n);
  console.log(n, found ? '✓' : '✗ NOT FOUND');
}

// Count remaining
const remaining = ctx.CASTLES.filter(c => c !== null).length;
console.log('\nTotal sites after cleanup:', remaining);

fs.writeFileSync(path.join(__dirname, 'data.js'), data, 'utf8');
console.log('Wrote data.js');
