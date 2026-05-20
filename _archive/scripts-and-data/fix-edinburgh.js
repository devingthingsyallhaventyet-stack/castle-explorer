const fs = require('fs');

// Edinburgh - restore R2 image URLs that were wrongly renamed
let h = fs.readFileSync('site/edinburgh-castle.html', 'utf8');

// Fix R2 image URLs back to their actual filenames
h = h.replace(/img\.castlecore\.uk\/edinburgh-castle-(\d)/g, 'img.castlecore.uk/edinburgh-castle-interior-$1');
h = h.replace(/img\.castlecore\.uk\/edinburgh-castle\.jpg/g, 'img.castlecore.uk/edinburgh-castle-interior.jpg');

// Fix the remaining Google Maps "Interior" search
h = h.replace(/Edinburgh%20Castle%20Interior/g, 'Edinburgh%20Castle');

// Fix Google Places query
h = h.replace(/"Edinburgh Castle Interior"/g, '"Edinburgh Castle"');
h = h.replace(/Edinburgh Castle Interior Edinburgh/g, 'Edinburgh Castle Edinburgh');

// Fix broken template var
h = h.replace(/\$\{[^}]*\}/g, '');

fs.writeFileSync('site/edinburgh-castle.html', h);

// Verify
const still = h.match(/edinburgh-castle-interior/g);
console.log('R2 interior refs restored:', still ? still.length : 0);
const broken = h.includes('${');
console.log('Broken template vars:', broken ? 'YES' : 'none');
const interiorText = h.replace(/edinburgh-castle-interior/g, '').replace(/interior/gi, '');
console.log('Interior in display text:', /Interior/i.test(h.replace(/edinburgh-castle-interior/g, '').replace(/Uneven Interior/g, '')) ? 'YES' : 'none');

// Also fix Hampton Court and Windsor which may have same R2 issue
for (const [slug, prefix] of [['hampton-court-palace', 'hampton-court-palace-interior'], ['windsor-castle', 'windsor-castle-interior']]) {
  let f = fs.readFileSync('site/' + slug + '.html', 'utf8');
  const before = f;
  // Restore R2 URLs
  f = f.replace(new RegExp('img\\.castlecore\\.uk\\/' + slug + '-(\\d)', 'g'), 'img.castlecore.uk/' + prefix + '-$1');
  f = f.replace(new RegExp('img\\.castlecore\\.uk\\/' + slug + '\\.jpg', 'g'), 'img.castlecore.uk/' + prefix + '.jpg');
  // Fix Maps
  f = f.replace(new RegExp(slug.replace(/-/g, '%20').replace(/\b\w/g, c => c.toUpperCase()) + '%20Interior', 'g'), slug.replace(/-/g, '%20').replace(/\b\w/g, c => c.toUpperCase()));
  if (f !== before) {
    fs.writeFileSync('site/' + slug + '.html', f);
    console.log('Fixed R2 URLs for: ' + slug);
  }
}
