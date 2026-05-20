const fs = require('fs');
let h = fs.readFileSync('site/castle-loch-heylipol.html', 'utf8');
const img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/DSCN6522_Island_House%2C_Tiree.jpg/1280px-DSCN6522_Island_House%2C_Tiree.jpg';

h = h.replace(/data-original-src="[^"]*"/, 'data-original-src="' + img + '"');
h = h.replace(/<div class="g-main"><img src="[^"]*"/, '<div class="g-main"><img src="' + img + '"');

// Also update og:image and twitter:image
h = h.replace(/og:image" content="[^"]*"/, 'og:image" content="' + img + '"');
h = h.replace(/twitter:image" content="[^"]*"/, 'twitter:image" content="' + img + '"');

fs.writeFileSync('site/castle-loch-heylipol.html', h, 'utf8');
console.log('done');
