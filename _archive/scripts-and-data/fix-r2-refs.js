const fs = require('fs');

// Check all cinematic pages for broken R2 URLs where -interior- was stripped
const pages = [
  'caernarfon-castle','conwy-castle'
];

for (const slug of pages) {
  let h = fs.readFileSync('site/' + slug + '.html', 'utf8');
  // Check if any R2 images reference -interior-tours variants
  const r2 = h.match(/img\.castlecore\.uk\/[^"'\s]+/g);
  if (r2) {
    const broken = r2.filter(u => !u.includes('-interior'));
    // Check if original files had -interior-tours
    console.log(slug + ' R2 URLs:');
    r2.slice(0, 5).forEach(u => console.log('  ' + u));
  }
}
