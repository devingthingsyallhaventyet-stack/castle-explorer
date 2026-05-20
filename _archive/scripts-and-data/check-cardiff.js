const fs = require('fs');
const h = fs.readFileSync('site/cardiff-castle.html', 'utf8');
const heroMatch = h.match(/hero-img[\s\S]*?<img src="([^"]+)"/);
console.log('Hero:', heroMatch ? heroMatch[1] : 'not found');
const pgItems = [...h.matchAll(/pg-item[\s\S]*?<img src="([^"]+)"/g)];
pgItems.forEach((m, i) => console.log('Gallery ' + i + ':', m[1]));

// Also check YouTube query
const ytMatch = h.match(/q=([^&"]+)/);
console.log('YT query:', ytMatch ? decodeURIComponent(ytMatch[1]) : 'not found');
