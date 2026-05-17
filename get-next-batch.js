const fs = require('fs');

const filteredCastles = JSON.parse(fs.readFileSync('filtered-castles.json', 'utf8'));

console.log('Next 8 castles to process (positions 11-18):');
filteredCastles.slice(10, 18).forEach((castle, i) => {
  console.log(`${i+11}. ${castle.name} (${castle.country})`);
});