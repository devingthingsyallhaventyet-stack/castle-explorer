const fs = require('fs');
let data = fs.readFileSync('data.js', 'utf8');
const fn = new Function(data + ';return CASTLES');
const castles = fn();

const c = castles.find(x => x.name === 'Castle Loch Heylipol');
const oldImage = c.image; // empty string

// Set the main image
const newImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/DSCN6522_Island_House%2C_Tiree.jpg/500px-DSCN6522_Island_House%2C_Tiree.jpg';

// Find the entry and update image field
const namePos = data.indexOf('"Castle Loch Heylipol"');
const imageField = data.indexOf('"image":', namePos);
const imageStart = data.indexOf('"', imageField + 8);
const imageEnd = data.indexOf('"', imageStart + 1);
const currentVal = data.substring(imageStart + 1, imageEnd);

console.log('Current image:', JSON.stringify(currentVal));

// Replace empty image with new one
data = data.substring(0, imageStart + 1) + newImage + data.substring(imageEnd);

// Also add gallery
const galleryField = data.indexOf('"gallery":', namePos);
const galleryStart = data.indexOf('[', galleryField);
const galleryEnd = data.indexOf(']', galleryStart);
const currentGallery = data.substring(galleryStart, galleryEnd + 1);

const newGallery = JSON.stringify([
  'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/DSCN6522_Island_House%2C_Tiree.jpg/500px-DSCN6522_Island_House%2C_Tiree.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/DSCN6523_Island_House%2C_Tiree.jpg/500px-DSCN6523_Island_House%2C_Tiree.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/DSCN6528_Island_House%2C_Tiree.jpg/500px-DSCN6528_Island_House%2C_Tiree.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/DSCN6531_Island_House%2C_Tiree.jpg/500px-DSCN6531_Island_House%2C_Tiree.jpg'
]);

data = data.replace(currentGallery, newGallery);

const fn2 = new Function(data + ';return CASTLES');
const c2 = fn2();
const updated = c2.find(x => x.name === 'Castle Loch Heylipol');
console.log('New image:', updated.image);
console.log('New gallery:', updated.gallery.length, 'images');
console.log('Total castles:', c2.length);

fs.writeFileSync('data.js', data, 'utf8');
console.log('Saved');
