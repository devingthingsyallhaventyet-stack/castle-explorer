const fs = require('fs');
let eng = fs.readFileSync('data-england.js', 'utf8');
const fn = new Function(eng + ';return CASTLES');
let castles = fn();

const fixes = {
  'Salcombe Castle': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/SalcombeCastleFromNorthSands.jpg/500px-SalcombeCastleFromNorthSands.jpg',
  'Trowbridge Castle': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Fore_Street%2C_Trowbridge_-_geograph.org.uk_-_368316.jpg/500px-Fore_Street%2C_Trowbridge_-_geograph.org.uk_-_368316.jpg'
};

castles.forEach(c => {
  if (fixes[c.name]) {
    c.img = fixes[c.name];
    if (c.gallery) c.gallery = c.gallery.filter(g => g !== c.img);
    if (c.gallery && c.gallery.length === 0) delete c.gallery;
    console.log(`Fixed ${c.name}`);
  }
});

const out = 'const CASTLES=' + JSON.stringify(castles);
fs.writeFileSync('data-england.js', out, 'utf8');

// Validate
const fn2 = new Function(out + ';return CASTLES');
const r = fn2();
['Salcombe Castle','Trowbridge Castle'].forEach(n => {
  const c = r.find(x => x.name === n);
  console.log(n, ':', c.img ? 'OK' : 'FAIL');
});
console.log(`Total: ${r.length} castles`);
