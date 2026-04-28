const fs = require('fs');

// === Fix 1: Castle data images ===

// Dunkerron: promote gallery image
// Lixnaw: use Wikipedia image
// Gowran: use Wikipedia image
const dataFixes = [
  {
    file: 'ireland/data/kingdom-of-munster.json',
    fixes: [
      { name: 'Dunkerron Castle', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Castles_of_Munster-_Dunkerron%2C_Kerry_%282%29_%28geograph_3037291%29.jpg/500px-Castles_of_Munster-_Dunkerron%2C_Kerry_%282%29_%28geograph_3037291%29.jpg' },
      { name: 'Lixnaw Castle', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Lixnaw.jpg/500px-Lixnaw.jpg' },
    ]
  },
  {
    file: 'ireland/data/irelands-ancient-east.json',
    fixes: [
      { name: 'Gowran Castle', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/St._Mary%27s_Collegiate_Church_Gowran.jpg/500px-St._Mary%27s_Collegiate_Church_Gowran.jpg' },
    ]
  }
];

for (const { file, fixes } of dataFixes) {
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  for (const fix of fixes) {
    const entry = data.find(c => c.name === fix.name);
    if (entry) {
      console.log(`${fix.name}: ${entry.image} → ${fix.image.substring(0,60)}...`);
      entry.image = fix.image;
    } else {
      console.log(`NOT FOUND: ${fix.name} in ${file}`);
    }
  }
  fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf8');
}

// Also fix the main data-ireland.js
const irelandJs = fs.readFileSync('data-ireland.js', 'utf8');
let fixed = irelandJs;

// Dunkerron
fixed = fixed.replace(
  '"image":"https://img.castlecore.uk/dunkerron-castle.jpg"',
  '"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Castles_of_Munster-_Dunkerron%2C_Kerry_%282%29_%28geograph_3037291%29.jpg/500px-Castles_of_Munster-_Dunkerron%2C_Kerry_%282%29_%28geograph_3037291%29.jpg"'
);
// Lixnaw
fixed = fixed.replace(
  '"image":"https://pub-865f4a8498e64980801e4e498b53f5c0.r2.dev/wiki-lixnaw-castle.jpg"',
  '"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Lixnaw.jpg/500px-Lixnaw.jpg"'
);
// Gowran
fixed = fixed.replace(
  '"image":"https://img.castlecore.uk/gowran-castle.jpg"',
  '"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/St._Mary%27s_Collegiate_Church_Gowran.jpg/500px-St._Mary%27s_Collegiate_Church_Gowran.jpg"'
);

if (fixed !== irelandJs) {
  fs.writeFileSync('data-ireland.js', fixed, 'utf8');
  console.log('Updated data-ireland.js');
} else {
  console.log('WARNING: No changes to data-ireland.js - check field format');
}

// === Fix 2: Nearby card images in HTML pages ===

const htmlFixes = [
  // Munster: replace South West England card with Dublin & The Pale
  {
    file: 'ireland/kingdom-of-munster.html',
    find: '<a href="/england/south-west" class="nearby-card"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/St_Michael%27s_Mount_aerial.jpg/960px-St_Michael%27s_Mount_aerial.jpg" loading="lazy" decoding="async" alt="" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0"><div class="nearby-card-content"><h3>South West England</h3><span>Cornwall to the Cotswolds</span></div></a>',
    replace: '<a href="/ireland/dublin-and-the-pale" class="nearby-card"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/The_Dubhlinn_Gardens_Dublin_Castle_01.JPG/960px-The_Dubhlinn_Gardens_Dublin_Castle_01.JPG" loading="lazy" decoding="async" alt="" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0"><div class="nearby-card-content"><h3>Dublin &amp; The Pale</h3><span>Medieval heart of the capital</span></div></a>'
  },
  // Ancient East: fix Dublin Castle gates 404
  {
    file: 'ireland/irelands-ancient-east.html',
    find: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Dublin_Castle_gates.jpg/960px-Dublin_Castle_gates.jpg',
    replace: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/The_Dubhlinn_Gardens_Dublin_Castle_01.JPG/960px-The_Dubhlinn_Gardens_Dublin_Castle_01.JPG'
  },
  // Ancient East: fix Clonmacnoise 404
  {
    file: 'ireland/irelands-ancient-east.html',
    find: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Clonmacnoise_cathedral_and_McCarthy%27s_tower.jpg/960px-Clonmacnoise_cathedral_and_McCarthy%27s_tower.jpg",
    replace: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Clonmacnoise_6.jpg/960px-Clonmacnoise_6.jpg'
  },
  // Munster: fix Clonmacnoise 404
  {
    file: 'ireland/kingdom-of-munster.html',
    find: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Clonmacnoise_cathedral_and_McCarthy%27s_tower.jpg/960px-Clonmacnoise_cathedral_and_McCarthy%27s_tower.jpg",
    replace: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Clonmacnoise_6.jpg/960px-Clonmacnoise_6.jpg'
  },
];

for (const fix of htmlFixes) {
  let h = fs.readFileSync(fix.file, 'utf8');
  if (h.includes(fix.find)) {
    h = h.replace(fix.find, fix.replace);
    fs.writeFileSync(fix.file, h, 'utf8');
    console.log(`Fixed: ${fix.file}`);
  } else {
    console.log(`NOT FOUND in ${fix.file}: ${fix.find.substring(0,60)}...`);
  }
}

console.log('\nDone!');
