const fs = require('fs');
let data = fs.readFileSync('data.js', 'utf8');

// Fixes for castles that the chain script messed up
const fixes = [
  // Our earlier manual fixes that got overwritten
  { name: 'Lindisfarne Priory', bad: '500px-Kilmallock_Priory_W_2007_08_08.jpg', good: 'lindisfarne-priory-2.jpg', goodFull: 'https://img.castlecore.uk/lindisfarne-priory-2.jpg' },
  { name: 'Ardvreck Castle', bad: '500px-2011_Ardvreck_Castle%2C_Sutherland_2-06-2011_17-53-21.', good: 'ardvreck-castle-2.jpg', goodFull: 'https://img.castlecore.uk/ardvreck-castle-2.jpg' },
  
  // Chain confused these — filename matching was wrong
  { name: 'Dublin Castle', badContains: 'Goat_Castle', goodFull: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/The_Dubhlinn_Gardens_Dublin_Castle_01.JPG/500px-The_Dubhlinn_Gardens_Dublin_Castle_01.JPG' },
  { name: 'Trim Castle', badContains: 'Shane', goodFull: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Trim_Castle_6.jpg/500px-Trim_Castle_6.jpg' },
  { name: 'Conwy Castle', badContains: 'Dolwyddelan', goodFull: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Conwy_Castle%2C_water_view1.jpg/500px-Conwy_Castle%2C_water_view1.jpg' },
  { name: 'Tower of London', badContains: 'Upstream_to_the_tower', goodFull: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Tower_of_London_from_the_Shard_%288515883950%29.jpg/500px-Tower_of_London_from_the_Shard_%288515883950%29.jpg' },
  { name: 'Loch Leven Castle', badContains: 'Ballindaloch', goodFull: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Lochleven_west_wall.JPG/500px-Lochleven_west_wall.JPG' },
  { name: 'Drum Castle', badContains: 'Nendrum', goodFull: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Drum_Castle_-_geograph.org.uk_-_4952750.jpg/500px-Drum_Castle_-_geograph.org.uk_-_4952750.jpg' },
  { name: 'Elgin Cathedral', badContains: 'Ardfert', goodFull: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Elgin_Cathedral_view_from_rear.jpg/500px-Elgin_Cathedral_view_from_rear.jpg' },
  { name: 'Fort George', badContains: 'approach_to_the_fortified', goodFull: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Fort_George_Moray_Firth.jpg/500px-Fort_George_Moray_Firth.jpg' },
  
  // Tully Castle got Tullynally's image
  { name: 'Tully Castle', badContains: 'Tully-Nally', goodFull: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Tully_Castle%2C_County_Fermanagh_-_geograph.org.uk_-_204216.jpg/500px-Tully_Castle%2C_County_Fermanagh_-_geograph.org.uk_-_204216.jpg' },
  
  // Donegal got Doe Castle's image  
  { name: 'Donegal Castle', badContains: 'Doe_Castle', goodFull: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Donegalcastle.jpg/500px-Donegalcastle.jpg' },
  
  // Lea Castle got Killyleagh
  { name: 'Lea Castle', badContains: 'Killyleagh', goodFull: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Lea_Castle%2C_2011.jpg/500px-Lea_Castle%2C_2011.jpg' },
  
  // Ford Castle got Carlingford  
  { name: 'Ford Castle', badContains: 'Carlingford', goodFull: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Ford_Castle_-_geograph.org.uk_-_354895.jpg/500px-Ford_Castle_-_geograph.org.uk_-_354895.jpg' },
  
  // Tynemouth got Alloway  
  { name: 'Tynemouth Priory and Castle', badContains: 'Ghaists', goodFull: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Tynemouth_Priory_Aerial.jpg/500px-Tynemouth_Priory_Aerial.jpg' },
  
  // Old Wardour got Roxburgh
  { name: 'Old Wardour Castle', badContains: 'geograph.org.uk_-_163364', goodFull: 'https://img.castlecore.uk/scraped-wardour.jpg' },
  
  // Castletown House got Sligo Abbey's image
  { name: 'Castletown House', badContains: 'Dominican_Friary', goodFull: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Castletown_House_7.jpg/500px-Castletown_House_7.jpg' },
  
  // Castle of Park got Parke's Castle
  { name: 'Castle of Park', badContains: 'Parke%27s_Castle', goodFull: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Castle_of_Park_Glenluce_exterior.JPG/500px-Castle_of_Park_Glenluce_exterior.JPG' },
];

const fn = new Function(data + ';return CASTLES');
const castles = fn();

let fixed = 0;
for (const fix of fixes) {
  const castle = castles.find(c => c.name === fix.name);
  if (!castle) { console.log(`WARN: ${fix.name} not found`); continue; }
  
  const currentImage = castle.image;
  const isBad = fix.badContains ? currentImage.includes(fix.badContains) : currentImage.includes(fix.bad);
  
  if (isBad) {
    data = data.replace(currentImage, fix.goodFull);
    console.log(`Fixed: ${fix.name}`);
    console.log(`  was: ${currentImage.split('/').pop().substring(0,60)}`);
    console.log(`  now: ${fix.goodFull.split('/').pop().substring(0,60)}`);
    fixed++;
  } else {
    console.log(`OK: ${fix.name} — already correct or different issue`);
  }
}

// Validate
const fn2 = new Function(data + ';return CASTLES');
const c2 = fn2();
console.log(`\nValidation: ${c2.length} castles parsed OK`);
console.log(`Fixed ${fixed} castles`);

fs.writeFileSync('data.js', data, 'utf8');
console.log('data.js saved');
