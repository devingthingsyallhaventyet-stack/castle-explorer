const fs = require('fs');
const raw = fs.readFileSync('data.js', 'utf8');
const match = raw.match(/const CASTLES = (\[[\s\S]*\]);/);
const castles = JSON.parse(match[1]);

const imageMap = {
  'Derryhivenny Castle': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Derryhivenny_Castle.jpg/500px-Derryhivenny_Castle.jpg',
  'Castle Salem': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Castle_Salem_near_Ross_Carbery_-_geograph.org.uk_-_498699.jpg/500px-Castle_Salem_near_Ross_Carbery_-_geograph.org.uk_-_498699.jpg',
  'Sigginstown Castle': 'https://img.castlecore.uk/sigginstown-castle.jpg',
  'Ballingarry Castle (Lim)': 'https://img.castlecore.uk/ballingarry-castle.jpg',
  'Kinturk Castle': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Kanturk%2C_County_Cork_-_Kanturk_Castle.jpg/500px-Kanturk%2C_County_Cork_-_Kanturk_Castle.jpg',
  'Portlick Castle': 'https://img.castlecore.uk/portlick-castle.jpg',
  'Ballinderry Castle': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Castles_of_Connacht%2C_Ballinderry%2C_Galway_-_geograph.org.uk_-_1953864.jpg/500px-Castles_of_Connacht%2C_Ballinderry%2C_Galway_-_geograph.org.uk_-_1953864.jpg',
  'Liscartan Castle': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Liscartan_Castle_-_geograph.org.uk_-_497041.jpg/500px-Liscartan_Castle_-_geograph.org.uk_-_497041.jpg',
  'Castle Taylor': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Castles_of_Connacht%2C_Castle_Taylor%2C_Galway_%283%29_-_geograph.org.uk_-_1953762.jpg/500px-Castles_of_Connacht%2C_Castle_Taylor%2C_Galway_%283%29_-_geograph.org.uk_-_1953762.jpg',
};

let updated = 0;
for (const castle of castles) {
  const key = Object.keys(imageMap).find(k => castle.name === k || castle.name.includes(k));
  if (key) {
    const old = castle.image;
    castle.image = imageMap[key];
    console.log(`${castle.name}: ${old || '(none)'} → ${castle.image}`);
    updated++;
  }
}

// Also check for Ballinderry near Tuam specifically
for (const castle of castles) {
  if (castle.name === 'Ballinderry Castle' && castle.county && castle.county.includes('Galway')) {
    // Already handled above
  }
}

console.log(`\nUpdated ${updated} castles`);

const output = 'const CASTLES = ' + JSON.stringify(castles, null, 2) + ';';
fs.writeFileSync('data.js', output, 'utf8');
console.log('data.js written');
