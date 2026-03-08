const fs = require('fs');
const h = fs.readFileSync('site/edinburgh-castle.html', 'utf8');

// Find the hero HTML section
const start = h.indexOf('<div class="hero">');
const end = h.indexOf('</section>', start);
if (start > -1 && end > -1) {
  console.log(h.substring(start, end + 10));
}

// Also get hero-img CSS
const heroImg = h.indexOf('.hero-img');
if (heroImg > -1) console.log('\n=== HERO-IMG CSS ===\n' + h.substring(heroImg, heroImg + 300));
