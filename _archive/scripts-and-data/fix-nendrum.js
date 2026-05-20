const fs = require('fs');
const newImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Nendrum_Monastic_site_-_geograph.org.uk_-_5127015.jpg/500px-Nendrum_Monastic_site_-_geograph.org.uk_-_5127015.jpg';

const data = JSON.parse(fs.readFileSync('ireland/data/ulster-and-the-north.json', 'utf8'));
const c = data.find(x => x.name === 'Nendrum Monastic Site');
if (c) { console.log('Old:', c.image); c.image = newImg; console.log('New:', newImg.split('/').pop()); }
fs.writeFileSync('ireland/data/ulster-and-the-north.json', JSON.stringify(data, null, 2), 'utf8');

let js = fs.readFileSync('data-ireland.js', 'utf8');
const re = /"name":"Nendrum Monastic Site"([^}]*?)"image":"([^"]+)"/;
const m = js.match(re);
if (m) { js = js.replace(m[0], `"name":"Nendrum Monastic Site"${m[1]}"image":"${newImg}"`); }
fs.writeFileSync('data-ireland.js', js, 'utf8');
console.log('Done');
