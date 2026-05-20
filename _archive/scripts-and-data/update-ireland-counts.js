const fs = require('fs');

// Update counts on ireland.html and each region page
const regionCounts = {
  'dublin-and-the-pale': 50,
  'irelands-ancient-east': 134,
  'kingdom-of-munster': 138,
  'the-heartlands': 113,
  'ulster-and-the-north': 117,
  'wild-atlantic-way': 190,
};

const total = Object.values(regionCounts).reduce((a, b) => a + b, 0);
console.log('Total:', total);

// Update ireland.html - find old count (779) and replace
let ireland = fs.readFileSync('ireland.html', 'utf8');
ireland = ireland.replace(/779/g, String(total));
// Also update individual region counts in filter buttons
for (const [slug, count] of Object.entries(regionCounts)) {
  // Look for the old counts in filter buttons - format varies
  // Just log what we find
  const slugClean = slug.replace(/-/g, ' ');
}
fs.writeFileSync('ireland.html', ireland, 'utf8');
console.log('Updated ireland.html');

// Update each region page's castle count
for (const [slug, count] of Object.entries(regionCounts)) {
  const file = `ireland/${slug}.html`;
  if (!fs.existsSync(file)) continue;
  let h = fs.readFileSync(file, 'utf8');
  
  // Look for CONFIG object with count
  const configMatch = h.match(/castleCount:\s*(\d+)/);
  if (configMatch) {
    h = h.replace(`castleCount: ${configMatch[1]}`, `castleCount: ${count}`);
    console.log(`${slug}: castleCount ${configMatch[1]} → ${count}`);
  }
  
  // Also update any visible count text
  const countMatch = h.match(/(\d+)\s*(?:castles|sites|historic)/i);
  if (countMatch && parseInt(countMatch[1]) > count) {
    // Only replace if the old number is bigger (was inflated)
  }
  
  fs.writeFileSync(file, h, 'utf8');
}
