const fs = require('fs');
const path = require('path');

let data = fs.readFileSync(path.join(__dirname, 'data.js'), 'utf8');

// 1. Fix Cardiff Castle image (currently Castell Coch)
data = data.replace(
  'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Castell_Coch_2018.jpg/500px-Castell_Coch_2018.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Aerial_view_of_Cardiff_Castle.jpg/500px-Aerial_view_of_Cardiff_Castle.jpg'
);

// 2. Remove "Interior" from site names
const interiorFixes = [
  ['Windsor Castle Interior', 'Windsor Castle'],
  ['Edinburgh Castle Interior', 'Edinburgh Castle Interior'],  // skip - conflicts with existing "Edinburgh Castle"?
  ['Hampton Court Palace Interior', 'Hampton Court Palace'],
  ['Conwy Castle Interior Tours', 'Conwy Castle Interior Tours'],  // skip - conflicts with "Conwy Castle"
  ['Caernarfon Castle Interior Tours', 'Caernarfon Castle Interior Tours'],  // skip
  ['Beaumaris Castle Interior Tours', 'Beaumaris Castle Interior Tours'],  // skip
  ['Craigievar Castle Interior Views', 'Craigievar Castle Interior Views'],  // skip
  ['Notland Castle Interior', 'Notland Castle Interior'],  // skip
];

// Check which ones conflict with existing names
const vm = require('vm');
const ctx = {};
vm.runInNewContext(data.replace(/\bconst\b/g, 'var'), ctx);
const names = new Set(ctx.CASTLES.filter(c => c).map(c => c.name));

// These are DUPLICATES that should be DELETED (they duplicate an existing entry):
const toDelete = [];
const renames = [];

// Windsor Castle Interior -> if "Windsor Castle" exists, delete Interior version
// Actually let's check
for (const [oldName, newName] of [
  ['Windsor Castle Interior', 'Windsor Castle'],
  ['Edinburgh Castle Interior', 'Edinburgh Castle'],
  ['Hampton Court Palace Interior', 'Hampton Court Palace'],
  ['Conwy Castle Interior Tours', 'Conwy Castle'],
  ['Caernarfon Castle Interior Tours', 'Caernarfon Castle'],
  ['Beaumaris Castle Interior Tours', 'Beaumaris Castle'],
  ['Craigievar Castle Interior Views', 'Craigievar Castle'],
  ['Notland Castle Interior', 'Notland Castle'],
]) {
  if (names.has(newName)) {
    toDelete.push(oldName);
    console.log(`DELETE: "${oldName}" (duplicate of existing "${newName}")`);
  } else {
    renames.push([oldName, newName]);
    console.log(`RENAME: "${oldName}" -> "${newName}"`);
  }
}

// Actually check if Notland Castle exists or Noltland
const noltland = ctx.CASTLES.filter(c => c && c.name.toLowerCase().includes('nolt'));
console.log('Noltland entries:', noltland.map(c => c.name));

// Delete duplicate entries (set to null in the array)
for (const name of toDelete) {
  // Find the entry and null it out
  const regex = new RegExp(`\\{[^}]*"name":\\s*"${name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[^}]*\\}`, 'g');
  // This is tricky with the data format. Let's just report for now.
}

console.log('\n--- Summary ---');
console.log('To delete:', toDelete);
console.log('To rename:', renames);
console.log('Cardiff image fixed: YES');

fs.writeFileSync(path.join(__dirname, 'data.js'), data, 'utf8');
console.log('\nWrote data.js (Cardiff image fix only for now)');
