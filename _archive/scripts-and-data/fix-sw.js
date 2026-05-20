const fs = require('fs');

// Fix 1: Castles with missing main images - promote gallery to main
const data = fs.readFileSync('england/data/south-west.json', 'utf8');
let castles = JSON.parse(data);

const fixes = {
  'Salcombe Castle': {
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/SalcombeCastleFromNorthSands.jpg/500px-SalcombeCastleFromNorthSands.jpg'
  },
  'Trowbridge Castle': {
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Fore_Street%2C_Trowbridge_-_geograph.org.uk_-_368316.jpg/500px-Fore_Street%2C_Trowbridge_-_geograph.org.uk_-_368316.jpg'
  }
};

castles.forEach(c => {
  if (fixes[c.name]) {
    c.img = fixes[c.name].img;
    // Remove from gallery if it was there
    if (c.gallery) {
      c.gallery = c.gallery.filter(g => g !== c.img);
      if (c.gallery.length === 0) delete c.gallery;
    }
    console.log(`Fixed ${c.name}: set main image`);
  }
});

fs.writeFileSync('england/data/south-west.json', JSON.stringify(castles), 'utf8');
console.log('Saved south-west.json');

// Now fix data-england.js too
let eng = fs.readFileSync('data-england.js', 'utf8');

// Salcombe - find entry and add img
for (const [name, fix] of Object.entries(fixes)) {
  // Find the entry by name and check if img is missing/undefined
  const nameEsc = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(`(\\{[^}]*?"name":"${nameEsc}"[^}]*?)\\}`, 's');
  const m = eng.match(re);
  if (m) {
    let entry = m[1];
    if (!entry.includes('"img"')) {
      // Add img after name
      entry = entry.replace(`"name":"${name}"`, `"name":"${name}","img":"${fix.img}"`);
      eng = eng.replace(m[0], entry + '}');
      console.log(`Fixed ${name} in data-england.js`);
    } else {
      console.log(`${name} already has img in data-england.js`);
    }
  } else {
    console.log(`${name} not found in data-england.js`);
  }
}

// Validate
try {
  const fn = new Function(eng + ';return englandCastles');
  const result = fn();
  console.log(`data-england.js valid: ${result.length} castles`);
  fs.writeFileSync('data-england.js', eng, 'utf8');
} catch(e) {
  console.error('VALIDATION FAILED:', e.message);
}
