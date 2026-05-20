const fs = require('fs');
const newImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Croom_Castle%2C_County_Limerick_-_geograph-3037502.jpg/500px-Croom_Castle%2C_County_Limerick_-_geograph-3037502.jpg';

const data = JSON.parse(fs.readFileSync('ireland/data/kingdom-of-munster.json', 'utf8'));
const c = data.find(x => x.name === 'Croom Castle');
if (c) { c.image = newImg; console.log('JSON fixed'); }
fs.writeFileSync('ireland/data/kingdom-of-munster.json', JSON.stringify(data, null, 2), 'utf8');

let js = fs.readFileSync('data-ireland.js', 'utf8');
js = js.replace('"image":"https://img.castlecore.uk/croom-castle.jpg"', `"image":"${newImg}"`);
fs.writeFileSync('data-ireland.js', js, 'utf8');
console.log('Done');
