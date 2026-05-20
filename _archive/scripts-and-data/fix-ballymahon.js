const fs = require('fs');
const toRemove = ['Ballymahon Castle', 'Castlecor House'];
const removeSet = new Set(toRemove);

// Fix region JSON
const data = JSON.parse(fs.readFileSync('ireland/data/the-heartlands.json', 'utf8'));
const before = data.length;
const filtered = data.filter(c => !removeSet.has(c.name));
console.log(`the-heartlands.json: ${before} → ${filtered.length}`);
fs.writeFileSync('ireland/data/the-heartlands.json', JSON.stringify(filtered, null, 2), 'utf8');

// Fix data-ireland.js
let js = fs.readFileSync('data-ireland.js', 'utf8');
for (const name of toRemove) {
  const re = new RegExp(`\\{"name":"${name}"[^}]*\\},?`, 'g');
  js = js.replace(re, '');
  console.log('Removed from data-ireland.js:', name);
}
js = js.replace(/,,+/g, ',').replace(/,(\s*\])/g, '$1');
fs.writeFileSync('data-ireland.js', js, 'utf8');

// Update ireland.html count 742 → 740
let html = fs.readFileSync('ireland.html', 'utf8');
html = html.replace(/742/g, '740');
fs.writeFileSync('ireland.html', html, 'utf8');
console.log('Updated ireland.html: 742 → 740');
