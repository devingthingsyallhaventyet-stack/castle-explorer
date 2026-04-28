const fs = require('fs');

// Promote gallery-2 for Derrymacloughna so cards look different
const data = JSON.parse(fs.readFileSync('ireland/data/wild-atlantic-way.json', 'utf8'));
const c = data.find(x => x.name === 'Derrymacloughna Castle');
if (c) {
  c.image = c.gallery[0]; // derrymacloughna-castle-2.jpg
  c.gallery = c.gallery.slice(1);
  console.log('New image:', c.image);
}
fs.writeFileSync('ireland/data/wild-atlantic-way.json', JSON.stringify(data, null, 2), 'utf8');

let js = fs.readFileSync('data-ireland.js', 'utf8');
js = js.replace('"image":"https://img.castlecore.uk/derrymacloughna-castle.jpg"', '"image":"https://img.castlecore.uk/derrymacloughna-castle-2.jpg"');
js = js.replace('"https://img.castlecore.uk/derrymacloughna-castle-2.jpg","https://img.castlecore.uk/derrymacloughna-castle-3.jpg"', '"https://img.castlecore.uk/derrymacloughna-castle-3.jpg"');
fs.writeFileSync('data-ireland.js', js, 'utf8');
console.log('Done');
