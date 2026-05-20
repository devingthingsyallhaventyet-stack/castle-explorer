const fs = require('fs');

// Fix JSON - promote gallery image to main
const data = JSON.parse(fs.readFileSync('ireland/data/wild-atlantic-way.json', 'utf8'));
const c = data.find(x => x.name === 'Carna Castle');
if (c) {
  console.log('Old image:', c.image);
  // Move current gallery[0] to image, remove it from gallery
  c.image = c.gallery[0]; // carna-castle-2.jpg
  c.gallery = c.gallery.slice(1); // keep 3, 4
  console.log('New image:', c.image);
  console.log('Gallery:', c.gallery);
}
fs.writeFileSync('ireland/data/wild-atlantic-way.json', JSON.stringify(data, null, 2), 'utf8');

// Fix data-ireland.js
let js = fs.readFileSync('data-ireland.js', 'utf8');
// Replace main image
js = js.replace(
  '"image":"https://img.castlecore.uk/carna-castle.jpg"',
  '"image":"https://img.castlecore.uk/carna-castle-2.jpg"'
);
// Remove carna-castle-2 from gallery since it's now the main
js = js.replace(
  '"https://img.castlecore.uk/carna-castle-2.jpg","https://img.castlecore.uk/carna-castle-3.jpg"',
  '"https://img.castlecore.uk/carna-castle-3.jpg"'
);
fs.writeFileSync('data-ireland.js', js, 'utf8');
console.log('Done');
