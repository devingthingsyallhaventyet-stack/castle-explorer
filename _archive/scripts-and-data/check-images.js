const fs = require('fs');
const src = fs.readFileSync('data.js', 'utf8');
// data.js starts with "const CASTLES = [..."
const jsonStr = src.replace(/^const CASTLES\s*=\s*/, '').replace(/;\s*$/, '');
const castles = JSON.parse(jsonStr);

let noImg = 0, hasPlace = 0, hasPhotos = 0;
castles.forEach(c => {
  if (!c.image) {
    noImg++;
    if (c.placeId) hasPlace++;
    if (c.photos && c.photos.length) hasPhotos++;
  }
});
console.log('Total:', castles.length);
console.log('No image:', noImg);
console.log('No image + has placeId:', hasPlace);
console.log('No image + has photos[] already:', hasPhotos);
