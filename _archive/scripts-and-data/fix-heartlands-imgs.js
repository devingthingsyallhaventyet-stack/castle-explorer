const fs = require('fs');

const fixes = {
  'Castle Forbes': {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Castle_Forbes.jpg/500px-Castle_Forbes.jpg'
  },
  'Moycarkey Castle': {
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Castles_of_Munster%2C_Moycarkey%2C_Tipperary_-_geograph.org.uk_-_1542271.jpg/500px-Castles_of_Munster%2C_Moycarkey%2C_Tipperary_-_geograph.org.uk_-_1542271.jpg'
  }
};

// Fix JSON
const data = JSON.parse(fs.readFileSync('ireland/data/the-heartlands.json', 'utf8'));
for (const [name, fix] of Object.entries(fixes)) {
  const c = data.find(x => x.name === name);
  if (c) {
    console.log(`${name}: ${c.image} → wiki`);
    c.image = fix.image;
  } else console.log('NOT FOUND:', name);
}
fs.writeFileSync('ireland/data/the-heartlands.json', JSON.stringify(data, null, 2), 'utf8');

// Fix data-ireland.js
let js = fs.readFileSync('data-ireland.js', 'utf8');
js = js.replace(
  '"image":"https://img.castlecore.uk/castle-forbes.jpg"',
  '"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Castle_Forbes.jpg/500px-Castle_Forbes.jpg"'
);
js = js.replace(
  '"image":"https://img.castlecore.uk/moycarkey-castle.jpg"',
  '"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Castles_of_Munster%2C_Moycarkey%2C_Tipperary_-_geograph.org.uk_-_1542271.jpg/500px-Castles_of_Munster%2C_Moycarkey%2C_Tipperary_-_geograph.org.uk_-_1542271.jpg"'
);
fs.writeFileSync('data-ireland.js', js, 'utf8');
console.log('Updated data-ireland.js');
console.log('Done!');
