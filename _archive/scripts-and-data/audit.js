const fs = require('fs');
const vm = require('vm');
const d = fs.readFileSync('data.js', 'utf8');
const ctx = {};
vm.runInNewContext(d.replace('const CASTLES', 'this.CASTLES'), ctx);
const CASTLES = ctx.CASTLES.filter(x => x && x.name);

// 1. Find all listings with "interior" in name
console.log('=== LISTINGS WITH "INTERIOR" IN NAME ===');
CASTLES.filter(c => /interior/i.test(c.name)).forEach(c => console.log(' ', c.name));

// 2. Find Leeds Castle duplicates
console.log('\n=== LEEDS CASTLE LISTINGS ===');
CASTLES.filter(c => /leeds/i.test(c.name)).forEach(c => console.log(' ', c.name, '|', c.lat, c.lng));

// 3. Strome/Strom listings
console.log('\n=== STROME LISTINGS ===');
CASTLES.filter(c => /strom/i.test(c.name)).forEach(c => console.log(' ', c.name, '|', c.lat, c.lng));

// 4. Caernarfon listings
console.log('\n=== CAERNARFON LISTINGS ===');
CASTLES.filter(c => /caernarfon|carnarvon|caernarvon/i.test(c.name)).forEach(c => console.log(' ', c.name, '|', c.lat, c.lng));

// 5. Conwy listings
console.log('\n=== CONWY LISTINGS ===');
CASTLES.filter(c => /conwy|conway/i.test(c.name)).forEach(c => console.log(' ', c.name, '|', c.lat, c.lng));

// 6. Hore Abbey listings
console.log('\n=== HORE ABBEY LISTINGS ===');
CASTLES.filter(c => /hore/i.test(c.name)).forEach(c => console.log(' ', c.name, '|', c.lat, c.lng));

// 7. Kirkham / Sheriff Hutton duplicates
console.log('\n=== KIRKHAM LISTINGS ===');
CASTLES.filter(c => /kirkham/i.test(c.name)).forEach(c => console.log(' ', c.name, '|', c.lat, c.lng));
console.log('\n=== SHERIFF HUTTON LISTINGS ===');
CASTLES.filter(c => /sheriff/i.test(c.name)).forEach(c => console.log(' ', c.name, '|', c.lat, c.lng));

// 8. Find ALL sites within 500 feet (~152m ~ 0.00137 degrees) of each other
console.log('\n=== SITES WITHIN 500 FEET OF EACH OTHER ===');
function haversine(lat1, lng1, lat2, lng2) {
  const R = 20902231; // feet
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat/2)**2 + Math.cos(lat1*Math.PI/180)*Math.cos(lat2*Math.PI/180)*Math.sin(dLng/2)**2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

const dupes = [];
for (let i = 0; i < CASTLES.length; i++) {
  for (let j = i + 1; j < CASTLES.length; j++) {
    const a = CASTLES[i], b = CASTLES[j];
    if (!a.lat || !b.lat) continue;
    const dist = haversine(a.lat, a.lng, b.lat, b.lng);
    if (dist < 500) {
      dupes.push({ a: a.name, b: b.name, feet: Math.round(dist) });
    }
  }
}
dupes.sort((a, b) => a.feet - b.feet);
dupes.forEach(d => console.log(`  ${d.feet}ft: "${d.a}" ↔ "${d.b}"`));
console.log(`\nTotal pairs within 500ft: ${dupes.length}`);
