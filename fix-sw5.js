const fs = require('fs');

// Fix south-west.json: rename "img" to "image" on the 3 castles
let sw = JSON.parse(fs.readFileSync('england/data/south-west.json', 'utf8'));
['Hartland Abbey','Salcombe Castle','Trowbridge Castle'].forEach(n => {
  const c = sw.find(x => x.name === n);
  if (c && c.img && !c.image) {
    c.image = c.img;
    delete c.img;
    console.log(`Fixed ${n}: img → image`);
  }
});
fs.writeFileSync('england/data/south-west.json', JSON.stringify(sw), 'utf8');

// Fix data-england.js too
let eng = fs.readFileSync('data-england.js', 'utf8');
const fn = new Function(eng + ';return CASTLES');
let castles = fn();
['Hartland Abbey','Salcombe Castle','Trowbridge Castle'].forEach(n => {
  const c = castles.find(x => x.name === n);
  if (c && c.img && !c.image) {
    c.image = c.img;
    delete c.img;
    console.log(`Fixed ${n} in data-england.js`);
  }
});
fs.writeFileSync('data-england.js', 'const CASTLES=' + JSON.stringify(castles), 'utf8');
console.log('Done');
