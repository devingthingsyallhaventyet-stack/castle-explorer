const fs = require('fs');

// Fix Hartland Abbey in data-england.js
let eng = fs.readFileSync('data-england.js', 'utf8');
const fn = new Function(eng + ';return CASTLES');
let castles = fn();
const hartland = castles.find(c => c.name === 'Hartland Abbey');
hartland.img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Hartland_Abbey.jpg/500px-Hartland_Abbey.jpg';
console.log('Fixed Hartland Abbey:', hartland.img);
fs.writeFileSync('data-england.js', 'const CASTLES=' + JSON.stringify(castles), 'utf8');

// Fix south-west.json
let sw = JSON.parse(fs.readFileSync('england/data/south-west.json', 'utf8'));
const h2 = sw.find(c => c.name === 'Hartland Abbey');
h2.img = hartland.img;
fs.writeFileSync('england/data/south-west.json', JSON.stringify(sw), 'utf8');
console.log('Fixed south-west.json');
