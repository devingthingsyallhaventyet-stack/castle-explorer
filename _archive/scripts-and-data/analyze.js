const fs = require('fs');

// Load the castle data
const dataContent = fs.readFileSync('data.js', 'utf8');
// Use Function constructor to evaluate in a clean scope
const func = new Function(dataContent + '; return CASTLES;');
const CASTLES = func();

console.log('Total castles:', CASTLES.length);
console.log('Sample castle keys:', Object.keys(CASTLES[0]));
console.log('Countries:', [...new Set(CASTLES.map(c => c.country))].sort());

// Analyze for suspicious entries
let noImage = 0;
let duplicateImages = new Map();
let duplicateGalleryImages = new Map();

CASTLES.forEach((castle, index) => {
  if (!castle.image) {
    noImage++;
  } else {
    if (duplicateImages.has(castle.image)) {
      duplicateImages.set(castle.image, duplicateImages.get(castle.image) + 1);
    } else {
      duplicateImages.set(castle.image, 1);
    }
  }
  
  if (castle.gallery) {
    castle.gallery.forEach(img => {
      if (duplicateGalleryImages.has(img)) {
        duplicateGalleryImages.set(img, duplicateGalleryImages.get(img) + 1);
      } else {
        duplicateGalleryImages.set(img, 1);
      }
    });
  }
});

console.log('\nSuspicious entries analysis:');
console.log('- Castles with no image:', noImage);

const duplicateMainImages = Array.from(duplicateImages.entries()).filter(([url, count]) => count > 1);
console.log('- Duplicate main images:', duplicateMainImages.length);

const duplicateGalleries = Array.from(duplicateGalleryImages.entries()).filter(([url, count]) => count > 1);
console.log('- Duplicate gallery images:', duplicateGalleries.length);

console.log('\nFirst 3 castles structure:');
console.log(JSON.stringify(CASTLES.slice(0, 3), null, 2));