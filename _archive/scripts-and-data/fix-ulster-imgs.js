const fs = require('fs');
const fixes = [
  ['Burt Castle', 'https://img.castlecore.uk/burt-castle.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Burt_Castle_-_geograph.org.uk_-_1029895.jpg/500px-Burt_Castle_-_geograph.org.uk_-_1029895.jpg'],
  ['Castle Saunderson', 'https://img.castlecore.uk/castle-saunderson.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Castle_saunderson.jpg/500px-Castle_saunderson.jpg'],
  ['Newtownstewart Castle', 'https://img.castlecore.uk/newtownstewart-castle.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Stewart_Castle%2C_Geograph.jpg/500px-Stewart_Castle%2C_Geograph.jpg'],
];

// Fix JSON
const data = JSON.parse(fs.readFileSync('ireland/data/ulster-and-the-north.json', 'utf8'));
for (const [name, old, nu] of fixes) {
  const c = data.find(x => x.name === name);
  if (c) { c.image = nu; console.log('JSON:', name); }
  else console.log('NOT FOUND:', name);
}
fs.writeFileSync('ireland/data/ulster-and-the-north.json', JSON.stringify(data, null, 2), 'utf8');

// Fix data-ireland.js
let js = fs.readFileSync('data-ireland.js', 'utf8');
for (const [name, old, nu] of fixes) {
  js = js.replace(`"image":"${old}"`, `"image":"${nu}"`);
}
fs.writeFileSync('data-ireland.js', js, 'utf8');
console.log('Done');
