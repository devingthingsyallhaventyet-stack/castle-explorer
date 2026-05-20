const fs = require('fs');
const vm = require('vm');
const d = fs.readFileSync('data.js', 'utf8');
const ctx = {};
vm.runInNewContext(d.replace('const CASTLES', 'this.CASTLES'), ctx);

// Cardiff
const cardiff = ctx.CASTLES.find(x => x && x.name === 'Cardiff Castle');
console.log('=== CARDIFF CASTLE ===');
console.log('Hero image:', cardiff.image);
console.log('Gallery:', JSON.stringify(cardiff.gallery, null, 2));

const ch = fs.readFileSync('site/cardiff-castle.html', 'utf8');
const cq = ch.match(/q=([^&"']+)/);
console.log('YT search query:', cq ? decodeURIComponent(cq[1]) : 'not found');

// All images in the HTML
const imgs = ch.match(/img src="([^"]+)"/g);
if (imgs) {
  console.log('\nAll images in HTML:');
  imgs.forEach(i => console.log(' ', i));
}

// Conwy
console.log('\n=== CONWY CASTLE ===');
const co = fs.readFileSync('site/conwy-castle.html', 'utf8');
const coq = co.match(/q=([^&"']+)/);
console.log('YT search query:', coq ? decodeURIComponent(coq[1]) : 'not found');
