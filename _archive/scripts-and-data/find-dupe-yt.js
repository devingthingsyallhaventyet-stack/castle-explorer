const fs = require('fs');
const h = fs.readFileSync('site/edinburgh-castle.html', 'utf8');

// Count occurrences of YT_KEY
const matches = h.match(/YT_KEY/g);
console.log('YT_KEY occurrences:', matches ? matches.length : 0);

// Count fetch calls to youtube
const fetches = h.match(/googleapis\.com\/youtube/g);
console.log('YouTube API fetches:', fetches ? fetches.length : 0);

// Find all positions
let idx = 0;
while ((idx = h.indexOf('YT_KEY', idx)) !== -1) {
  console.log('\nPosition ' + idx + ':');
  console.log(h.substring(idx - 10, idx + 80));
  idx += 6;
}
