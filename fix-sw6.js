const fs = require('fs');

const replacements = {
  'Hartland Abbey': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Hartland_Abbey.jpg/500px-Hartland_Abbey.jpg',
  'Salcombe Castle': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/SalcombeCastleFromNorthSands.jpg/500px-SalcombeCastleFromNorthSands.jpg',
  'Trowbridge Castle': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Fore_Street%2C_Trowbridge_-_geograph.org.uk_-_368316.jpg/500px-Fore_Street%2C_Trowbridge_-_geograph.org.uk_-_368316.jpg'
};

// Fix south-west.json
let sw = JSON.parse(fs.readFileSync('england/data/south-west.json', 'utf8'));
for (const [name, url] of Object.entries(replacements)) {
  const c = sw.find(x => x.name === name);
  c.image = url;
  delete c.img;
  console.log(`${name}: image → ${url.split('/').pop()}`);
}
fs.writeFileSync('england/data/south-west.json', JSON.stringify(sw), 'utf8');

// Fix data-england.js
let eng = fs.readFileSync('data-england.js', 'utf8');
let castles = new Function(eng + ';return CASTLES')();
for (const [name, url] of Object.entries(replacements)) {
  const c = castles.find(x => x.name === name);
  c.image = url;
  delete c.img;
}
fs.writeFileSync('data-england.js', 'const CASTLES=' + JSON.stringify(castles), 'utf8');

// Validate
let v = new Function(fs.readFileSync('data-england.js','utf8') + ';return CASTLES')();
for (const name of Object.keys(replacements)) {
  const c = v.find(x => x.name === name);
  console.log(`  Verify ${name}: ${c.image ? 'OK' : 'FAIL'}`);
}
console.log(`Total: ${v.length}`);
