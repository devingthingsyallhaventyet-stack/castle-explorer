const fs = require('fs');
let dataStr = fs.readFileSync('data.js','utf8');
let castles = JSON.parse(dataStr.slice(dataStr.indexOf('['), dataStr.lastIndexOf(']')+1));
const c = castles.find(x => x.name === 'Dunderave Castle');
if (c) {
  c.image = 'https://img.castlecore.uk/wiki-dunderave-castle.jpg';
  console.log('Updated Dunderave Castle');
}
const wi = castles.filter(c=>c.image&&c.image!=='').length;
const out = 'const CASTLES = ' + JSON.stringify(castles, null, 2) + ';\n\nif (typeof module !== "undefined") module.exports = CASTLES;\n';
fs.writeFileSync('data.js', out);
console.log(`Total with images: ${wi}/${castles.length}`);
