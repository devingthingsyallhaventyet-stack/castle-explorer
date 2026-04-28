const fs = require('fs');

// Lough Rynn: use Wikipedia image
// Mohill: use Castle Gate Mohill from Commons
// Lough Ree: no verified image → remove

const loughRynnImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Lough_Rynn1.JPG/500px-Lough_Rynn1.JPG';
const mohillImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Castle_Gate%2C_Mohill%2C_Co._Leitrim_%2819774684600%29.jpg/500px-Castle_Gate%2C_Mohill%2C_Co._Leitrim_%2819774684600%29.jpg';

// Fix WAW JSON
const waw = JSON.parse(fs.readFileSync('ireland/data/wild-atlantic-way.json', 'utf8'));
const lr = waw.find(x => x.name === 'Lough Rynn Castle');
if (lr) { lr.image = loughRynnImg; console.log('Fixed Lough Rynn Castle'); }
const mo = waw.find(x => x.name === 'Mohill Castle');
if (mo) { mo.image = mohillImg; console.log('Fixed Mohill Castle'); }
fs.writeFileSync('ireland/data/wild-atlantic-way.json', JSON.stringify(waw, null, 2), 'utf8');

// Remove Lough Ree from Heartlands
const heart = JSON.parse(fs.readFileSync('ireland/data/the-heartlands.json', 'utf8'));
const before = heart.length;
const filtered = heart.filter(c => c.name !== 'Lough Ree Castle');
console.log(`Heartlands: ${before} → ${filtered.length} (removed Lough Ree Castle)`);
fs.writeFileSync('ireland/data/the-heartlands.json', JSON.stringify(filtered, null, 2), 'utf8');

// Fix data-ireland.js
let js = fs.readFileSync('data-ireland.js', 'utf8');

// Update Lough Rynn
const lrRe = /"name":"Lough Rynn Castle"([^}]*?)"image":"([^"]+)"/;
const lrM = js.match(lrRe);
if (lrM) js = js.replace(lrM[0], `"name":"Lough Rynn Castle"${lrM[1]}"image":"${loughRynnImg}"`);

// Update Mohill
const moRe = /"name":"Mohill Castle"([^}]*?)"image":"([^"]+)"/;
const moM = js.match(moRe);
if (moM) js = js.replace(moM[0], `"name":"Mohill Castle"${moM[1]}"image":"${mohillImg}"`);

// Remove Lough Ree
js = js.replace(/\{"name":"Lough Ree Castle"[^}]*\},?/g, '');
js = js.replace(/,,+/g, ',').replace(/,(\s*\])/g, '$1');

fs.writeFileSync('data-ireland.js', js, 'utf8');

// Update count 740 → 739
let html = fs.readFileSync('ireland.html', 'utf8');
html = html.replace(/740/g, '739');
fs.writeFileSync('ireland.html', html, 'utf8');

console.log('Done — 740 → 739');
