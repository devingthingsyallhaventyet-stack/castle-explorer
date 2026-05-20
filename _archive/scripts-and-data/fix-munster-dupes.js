const fs = require('fs');

// All 3 castles share identical images across main + gallery.
// Best we can do: use different gallery images as mains so the cards at least look different.
// Carriggundel keeps main (might be the real one), Caherconlish gets -2, Ballingarry gets -3.

const fixes = [
  { name: 'Caherconlish Castle', newImage: 'https://img.castlecore.uk/caherconlish-castle-2.jpg', oldImage: 'https://img.castlecore.uk/caherconlish-castle.jpg' },
  { name: 'Ballingarry Castle (Limerick)', newImage: 'https://img.castlecore.uk/ballingarry-castle-limerick-3.jpg', oldImage: 'https://img.castlecore.uk/ballingarry-castle-limerick.jpg' },
];

// Fix JSON
const data = JSON.parse(fs.readFileSync('ireland/data/kingdom-of-munster.json', 'utf8'));
for (const fix of fixes) {
  const c = data.find(x => x.name === fix.name);
  if (c) {
    c.image = fix.newImage;
    // Remove the promoted image from gallery
    if (c.gallery) c.gallery = c.gallery.filter(g => g !== fix.newImage);
    console.log(`${fix.name}: promoted to ${fix.newImage.split('/').pop()}`);
  }
}
fs.writeFileSync('ireland/data/kingdom-of-munster.json', JSON.stringify(data, null, 2), 'utf8');

// Fix data-ireland.js
let js = fs.readFileSync('data-ireland.js', 'utf8');
for (const fix of fixes) {
  js = js.replace(`"image":"${fix.oldImage}"`, `"image":"${fix.newImage}"`);
}
fs.writeFileSync('data-ireland.js', js, 'utf8');
console.log('Done');
