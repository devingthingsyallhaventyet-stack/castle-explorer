const fs = require('fs');
const h = fs.readFileSync('site/edinburgh-castle.html', 'utf8');

// Find the hero content div
const start = h.indexOf('<div class="hero-content');
const end = h.indexOf('</div>', h.indexOf('hero-meta', start) + 50);
if (start > -1 && end > -1) {
  console.log('=== HERO CONTENT HTML ===');
  console.log(h.substring(start, end + 10));
}

// Get hero section height CSS 
const heroSection = h.indexOf('.hero-section');
if (heroSection > -1) console.log('\n=== HERO-SECTION CSS ===\n' + h.substring(heroSection, heroSection + 200));

// Check object-position for hero img
const objPos = h.indexOf('object-position');
if (objPos > -1) console.log('\n=== OBJECT-POSITION ===\n' + h.substring(objPos - 50, objPos + 100));
