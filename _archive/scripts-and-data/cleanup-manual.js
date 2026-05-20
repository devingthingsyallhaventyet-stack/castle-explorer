const fs = require('fs');
const path = require('path');
const vm = require('vm');

let data = fs.readFileSync(path.join(__dirname, 'data.js'), 'utf8');
const ctx = {};
vm.runInNewContext(data.replace(/\bconst\b/g, 'var'), ctx);

// Find index by name
function findIdx(name) {
  for (let i = 0; i < ctx.CASTLES.length; i++) {
    if (ctx.CASTLES[i] && ctx.CASTLES[i].name === name) return i;
  }
  return -1;
}

// Delete these (keeping the better version)
const toDelete = [
  'Hore Abbey Cashel',           // keep "Hore Abbey" (more gallery, more desc)
  'Strome Castle Ruin',          // keep "Strome Castle" (already kept by first cleanup but let's verify)
  'Inishmore Dun Aengus',        // keep "Dún Aonghasa" (same site, Irish name is better)
  'Drumcliff Round Tower Sligo', // keep "Drumcliff Tower" 
  'Drumcliff Church',            // keep "Drumcliff Tower" (or is this different?)
  'Rathmullan Friary',           // keep "Rathmullan Priory" (same site)
  'Rathmullan Fort',             // different site - actually keep this one
  'Powerscourt House',           // keep "Powerscourt Estate"
  'Powerscourt Castle',          // keep "Powerscourt Estate" (it's an estate/gardens now)
];

// Actually let's be more careful - Rathmullan Fort is different from Priory/Friary
// And Drumcliff Church might be the actual Yeats grave site vs the tower
// Let's just do the clear duplicates

const clearDeletes = [
  'Hore Abbey Cashel',           // dupe of Hore Abbey
  'Inishmore Dun Aengus',        // dupe of Dún Aonghasa
  'Rathmullan Friary',           // dupe of Rathmullan Priory (same building)
  'Powerscourt House',           // dupe of Powerscourt Estate
];

let deleted = 0;
const newCastles = ctx.CASTLES.map(c => {
  if (!c) return null;
  if (clearDeletes.includes(c.name)) {
    console.log(`Deleted: ${c.name}`);
    deleted++;
    return null;
  }
  return c;
});

const remaining = newCastles.filter(c => c !== null).length;
console.log(`\nDeleted: ${deleted}`);
console.log(`Remaining: ${remaining}`);

// Check Foulksrath
const foulk = newCastles.find(c => c && c.name && c.name.includes('Foulksrath'));
if (foulk) {
  console.log(`\nFoulksrath Castle:`);
  console.log(`  image: ${foulk.image}`);
  console.log(`  gallery: ${JSON.stringify(foulk.gallery)}`);
  // The R2 image might be bad - swap to Wikipedia image
  if (foulk.gallery && foulk.gallery.length > 0) {
    foulk.image = foulk.gallery[0];
    console.log(`  -> Swapped hero to: ${foulk.image}`);
  }
}

const header = 'const CASTLES = ';
const jsonStr = JSON.stringify(newCastles, null, 2);
fs.writeFileSync(path.join(__dirname, 'data.js'), header + jsonStr + ';\n', 'utf8');
console.log('\nWrote data.js');
