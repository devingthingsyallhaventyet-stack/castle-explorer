const fs = require('fs');
let h = fs.readFileSync('site/edrom-castle.html', 'utf8');

// Replace all the Edinburgh Castle image references with empty/placeholder
h = h.replace(/data-original-src="[^"]*"/, 'data-original-src=""');
h = h.replace(/<div class="g-main"><img src="[^"]*"/, '<div class="g-main"><img src=""');
h = h.replace(/og:image" content="[^"]*"/, 'og:image" content=""');
h = h.replace(/twitter:image" content="[^"]*"/, 'twitter:image" content=""');

// Also fix JSON-LD image
h = h.replace(/"image":\s*"https:\/\/img\.castlecore\.uk\/edrom-castle\.jpg"/, '"image": ""');

fs.writeFileSync('site/edrom-castle.html', h, 'utf8');
console.log('done');
