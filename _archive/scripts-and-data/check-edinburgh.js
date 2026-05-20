const fs = require('fs');
const h = fs.readFileSync('site/edinburgh-castle.html', 'utf8');

// Check all R2 image URLs
const imgs = h.match(/img\.castlecore\.uk\/[^"'\s]+/g);
console.log('=== R2 IMAGES ===');
if (imgs) imgs.forEach(i => console.log('  ' + i));

// Check hero image
const hero = h.match(/class="hero-img"[\s\S]*?src="([^"]+)"/);
console.log('\n=== HERO IMAGE ===');
console.log(hero ? hero[1] : 'NOT FOUND');

// Check for broken refs (edinburgh-castle-interior was replaced with edinburgh-castle)
// This might have broken img.castlecore.uk/edinburgh-castle-interior-2.jpg → edinburgh-castle-2.jpg
const brokenImgs = h.match(/img\.castlecore\.uk\/edinburgh-castle-[0-9]/g);
console.log('\n=== POTENTIALLY BROKEN (missing -interior- in R2 URL) ===');
if (brokenImgs) brokenImgs.forEach(i => console.log('  ' + i));
else console.log('  None found');

// Check the Google Maps link
const maps = h.match(/google\.com\/maps[^"]+/g);
console.log('\n=== GOOGLE MAPS ===');
if (maps) maps.forEach(m => console.log('  ' + m));

// Check title
const title = h.match(/<title>([^<]+)/);
console.log('\n=== TITLE ===');
console.log(title ? title[1] : 'NOT FOUND');

// Check for any ${} template issues
if (h.includes('${')) console.log('\n⚠️ BROKEN TEMPLATE VARS FOUND');
