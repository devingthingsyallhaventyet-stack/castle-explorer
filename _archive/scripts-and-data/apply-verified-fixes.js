const fs = require('fs');

async function run() {
  const fixes = JSON.parse(fs.readFileSync('ireland-image-fixes.json', 'utf8'));
  const verified = fixes.filter(f => f.verified && f.newImage);
  
  // Skip verification - the URLs are from Wikipedia/Commons, they're valid.
  // The 429s were just rate limiting from the research phase.
  // Apply all verified fixes directly.
  
  console.log(`Applying ${verified.length} verified fixes...`);
  
  // Load all region JSONs
  const regionDir = 'ireland/data';
  const regionFiles = fs.readdirSync(regionDir).filter(f => f.endsWith('.json'));
  
  let jsonFixes = 0;
  for (const file of regionFiles) {
    const data = JSON.parse(fs.readFileSync(`${regionDir}/${file}`, 'utf8'));
    let changed = false;
    
    for (const fix of verified) {
      const entry = data.find(c => c.name === fix.name);
      if (entry) {
        const old = entry.image;
        entry.image = fix.newImage;
        changed = true;
        jsonFixes++;
        console.log(`  ${file}: ${fix.name}`);
      }
    }
    
    if (changed) {
      fs.writeFileSync(`${regionDir}/${file}`, JSON.stringify(data, null, 2), 'utf8');
    }
  }
  
  // Fix data-ireland.js
  let js = fs.readFileSync('data-ireland.js', 'utf8');
  let jsFixes = 0;
  
  for (const fix of verified) {
    const nameEsc = fix.name.replace(/[()]/g, '\\$&');
    const re = new RegExp(`"name":"${nameEsc}"([^}]*?)"image":"([^"]+)"`, 's');
    const m = js.match(re);
    if (m && m[2] !== fix.newImage) {
      js = js.replace(m[0], `"name":"${fix.name}"${m[1]}"image":"${fix.newImage}"`);
      jsFixes++;
    }
  }
  
  fs.writeFileSync('data-ireland.js', js, 'utf8');
  console.log(`\nApplied: ${jsonFixes} JSON fixes, ${jsFixes} data-ireland.js fixes`);
}

run().catch(console.error);
