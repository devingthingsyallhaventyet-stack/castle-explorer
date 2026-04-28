const fs = require('fs');

async function run() {
  const regions = fs.readdirSync('ireland/data').filter(f => f.endsWith('.json'));
  const allEntries = [];
  
  for (const file of regions) {
    const data = JSON.parse(fs.readFileSync(`ireland/data/${file}`, 'utf8'));
    for (const c of data) {
      allEntries.push({ name: c.name, region: file.replace('.json',''), image: c.image, gallery: c.gallery });
    }
  }
  
  console.log(`Scanning ${allEntries.length} entries across ${regions.length} regions...\n`);
  
  // Group by image URL to find duplicates
  const byUrl = {};
  const corrupt = [];
  const broken = [];
  
  // Check all main images
  let i = 0;
  for (const entry of allEntries) {
    i++;
    if (i % 50 === 0) process.stderr.write(`${i}/${allEntries.length}...\n`);
    
    const img = entry.image;
    if (!img) { broken.push({ ...entry, reason: 'no image' }); continue; }
    
    try {
      const r = await fetch(img, { method: 'HEAD' });
      const len = parseInt(r.headers.get('content-length') || '0');
      
      if (r.status !== 200) {
        broken.push({ name: entry.name, region: entry.region, image: img, reason: `HTTP ${r.status}`, hasGallery: (entry.gallery?.length || 0) > 0 });
      } else if (len < 5000 && img.includes('castlecore')) {
        corrupt.push({ name: entry.name, region: entry.region, image: img, size: len, hasGallery: (entry.gallery?.length || 0) > 0 });
      }
      
      // Track for duplicates (only CDN images)
      if (img.includes('castlecore') && r.status === 200 && len >= 5000) {
        const key = String(len);
        if (!byUrl[key]) byUrl[key] = [];
        byUrl[key].push({ name: entry.name, region: entry.region, image: img });
      }
    } catch(e) {
      broken.push({ name: entry.name, region: entry.region, image: img, reason: e.message });
    }
    
    // Small delay to avoid rate limiting
    if (i % 20 === 0) await new Promise(r => setTimeout(r, 200));
  }
  
  console.log('=== CORRUPT CDN IMAGES (< 5KB) ===');
  for (const c of corrupt) console.log(`  ${c.name} (${c.region}) — ${c.size}b, gallery: ${c.hasGallery}`);
  console.log(`Total: ${corrupt.length}\n`);
  
  console.log('=== BROKEN IMAGES (non-200) ===');
  for (const b of broken) console.log(`  ${b.name} (${b.region}) — ${b.reason}, gallery: ${b.hasGallery}`);
  console.log(`Total: ${broken.length}\n`);
  
  // Find potential duplicates (same file size)
  const dupes = Object.entries(byUrl).filter(([k, v]) => v.length > 1);
  console.log('=== POTENTIAL DUPLICATES (same file size) ===');
  for (const [size, entries] of dupes) {
    if (entries.length <= 3) {
      console.log(`  ${size} bytes: ${entries.map(e => e.name).join(', ')}`);
    }
  }
  console.log(`Total groups: ${dupes.length}`);
}

run().catch(console.error);
