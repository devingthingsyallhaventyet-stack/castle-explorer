const fs = require('fs');
const h = fs.readFileSync('site/edinburgh-castle.html', 'utf8');
const i = h.indexOf('class="hero-section');
if (i > -1) console.log(h.substring(i, i + 1500));

// Also get the CSS for hero elements
const tagline = h.indexOf('.hero-tagline');
if (tagline > -1) console.log('\n=== TAGLINE CSS ===\n' + h.substring(tagline, tagline + 300));

const heroMeta = h.indexOf('.hero-meta');
if (heroMeta > -1) console.log('\n=== HERO-META CSS ===\n' + h.substring(heroMeta, heroMeta + 300));
