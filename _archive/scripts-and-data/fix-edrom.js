const fs = require('fs');
let data = fs.readFileSync('data.js', 'utf8');

// Clear the wrong images - replace Edinburgh Castle image with empty
data = data.replace('https://img.castlecore.uk/edrom-castle.jpg', '');

// Clear gallery
const fn = new Function(data + ';return CASTLES');
const castles = fn();
const c = castles.find(x => x.name === 'Edrom Castle');

// Find and replace the gallery array
const namePos = data.indexOf('"Edrom Castle"');
const galleryPos = data.indexOf('"gallery":', namePos);
const arrStart = data.indexOf('[', galleryPos);
const arrEnd = data.indexOf(']', arrStart);
const oldGallery = data.substring(arrStart, arrEnd + 1);

data = data.replace(oldGallery, '[]');

const fn2 = new Function(data + ';return CASTLES');
const c2 = fn2();
const updated = c2.find(x => x.name === 'Edrom Castle');
console.log('Image:', JSON.stringify(updated.image));
console.log('Gallery:', updated.gallery);
console.log('Total:', c2.length);

fs.writeFileSync('data.js', data, 'utf8');
console.log('Saved');
