const fs = require('fs');

const data = JSON.parse(fs.readFileSync('ireland/data/wild-atlantic-way.json', 'utf8'));

// Clonbur: promote clonbur-castle-2.jpg (397590, unique vs caherlistrane main)
const clonbur = data.find(x => x.name === 'Clonbur Castle');
if (clonbur) {
  clonbur.image = 'https://img.castlecore.uk/clonbur-castle-2.jpg';
  clonbur.gallery = clonbur.gallery.filter(g => !g.includes('clonbur-castle-2'));
  console.log('Clonbur →', clonbur.image.split('/').pop());
}

// Carna: use carna-castle-4.jpg (658403, truly unique)
const carna = data.find(x => x.name === 'Carna Castle');
if (carna) {
  carna.image = 'https://img.castlecore.uk/carna-castle-4.jpg';
  carna.gallery = carna.gallery.filter(g => !g.includes('carna-castle-4'));
  console.log('Carna →', carna.image.split('/').pop());
}

fs.writeFileSync('ireland/data/wild-atlantic-way.json', JSON.stringify(data, null, 2), 'utf8');

// Fix data-ireland.js
let js = fs.readFileSync('data-ireland.js', 'utf8');
js = js.replace('"image":"https://img.castlecore.uk/clonbur-castle.jpg"', '"image":"https://img.castlecore.uk/clonbur-castle-2.jpg"');
js = js.replace('"image":"https://img.castlecore.uk/carna-castle-2.jpg"', '"image":"https://img.castlecore.uk/carna-castle-4.jpg"');
fs.writeFileSync('data-ireland.js', js, 'utf8');
console.log('Done');
