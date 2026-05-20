const fs = require('fs');
const https = require('https');

const API_TOKEN = '2zUXPCS5QPjKr9DRzn_k8JNpiX0Sz9GnWPvgHl2-';
const ACCOUNT_ID = '0593d0435bdf2220598fcc51183baa95';
const BUCKET = 'castle-images';

const pages = [
  'alnwick-castle','bamburgh-castle','blarney-castle','blenheim-palace',
  'caernarfon-castle','canterbury-cathedral','cardiff-castle','castle-howard',
  'chatsworth-house','conwy-castle','corfe-castle','dover-castle',
  'dunnottar-castle','durham-cathedral','edinburgh-castle','eilean-donan-castle',
  'fountains-abbey','hampton-court-palace','kilkenny-castle','leeds-castle',
  'rock-of-cashel','stirling-castle','tower-of-london','warwick-castle',
  'windsor-castle'
];

// CSS changes for hero-meta: bolder, more readable
const oldMetaCSS = ".hero-meta span{font-family:'Cinzel',serif;font-size:.68rem;color:var(--parchment-mid);letter-spacing:1.5px;text-transform:uppercase}";
const newMetaCSS = ".hero-meta span{font-family:'Cinzel',serif;font-size:.8rem;color:#fff;letter-spacing:2px;text-transform:uppercase;font-weight:600;text-shadow:0 2px 8px rgba(0,0,0,.7)}";

// Also make the tagline slightly more visible
const oldTaglineCSS = ".hero-tagline{font-family:'Cormorant Garamond',serif;font-style:italic;font-size:clamp(.95rem,1.8vw,1.15rem);color:rgba(244,232,193,.6);letter-spacing:.5px;margin-bottom:.5rem}";
const newTaglineCSS = ".hero-tagline{font-family:'Cormorant Garamond',serif;font-style:italic;font-size:clamp(1rem,2vw,1.25rem);color:rgba(244,232,193,.8);letter-spacing:.5px;margin-bottom:.6rem;text-shadow:0 2px 6px rgba(0,0,0,.5)}";

let updated = 0;
for (const slug of pages) {
  let h = fs.readFileSync('site/' + slug + '.html', 'utf8');
  let changed = false;
  
  // Update meta CSS
  if (h.includes(oldMetaCSS)) {
    h = h.replace(oldMetaCSS, newMetaCSS);
    changed = true;
  }
  
  // Update tagline CSS
  if (h.includes(oldTaglineCSS)) {
    h = h.replace(oldTaglineCSS, newTaglineCSS);
    changed = true;
  }
  
  // Edinburgh specific: change object-position to show more of the castle (top of image)
  if (slug === 'edinburgh-castle') {
    // Add object-position to show the full castle from top
    if (!h.includes('object-position')) {
      h = h.replace(
        '.hero-img img{width:100%;height:100%;object-fit:cover;',
        '.hero-img img{width:100%;height:100%;object-fit:cover;object-position:center 30%;'
      );
      changed = true;
      console.log('  Edinburgh: added object-position: center 30%');
    }
  }
  
  if (changed) {
    fs.writeFileSync('site/' + slug + '.html', h);
    updated++;
    console.log('✅ ' + slug);
  } else {
    console.log('⏭️ ' + slug + ' (no matching CSS found)');
  }
}

console.log('\nUpdated ' + updated + '/' + pages.length + ' pages');
