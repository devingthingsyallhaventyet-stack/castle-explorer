const fs = require('fs');
let data = fs.readFileSync('data.js', 'utf8');
const old = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Scotland_Strome_Castle.jpg/500px-Scotland_Strome_Castle.jpg';
const nw = 'https://img.castlecore.uk/ardvreck-castle-2.jpg';
data = data.replace(old, nw);
fs.writeFileSync('data.js', data, 'utf8');
console.log('done');
