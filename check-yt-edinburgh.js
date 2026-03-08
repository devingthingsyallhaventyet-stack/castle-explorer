const fs = require('fs');
const h = fs.readFileSync('site/edinburgh-castle.html', 'utf8');

// Find the YouTube fetch code
const ytIdx = h.indexOf('YT_KEY');
if (ytIdx > -1) {
  console.log('=== YT CODE ===');
  console.log(h.substring(ytIdx - 20, ytIdx + 500));
} else {
  console.log('NO YT_KEY FOUND');
}

// Check for any ${} broken template vars
const broken = h.match(/\$\{[^}]*\}/g);
console.log('\nBroken template vars:', broken || 'none');

// Check if the ytGrid element exists
console.log('\nytGrid element:', h.includes('id="ytGrid"') ? 'YES' : 'NO');
