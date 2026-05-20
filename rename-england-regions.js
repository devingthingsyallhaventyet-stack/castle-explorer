const fs = require('fs');
const path = require('path');

const dir = __dirname;
const engDir = path.join(dir, 'england');
const navPath = path.join(dir, 'components', 'nav.js');

const renames = [
  {
    oldSlug: 'south-west',
    newSlug: 'south-west-england',
    oldDisplay: 'South West',
    newDisplay: 'South West England',
    // Careful: "South West" appears in prose descriptions too
    // Only replace in specific contexts
  },
  {
    oldSlug: 'east-of-england',
    newSlug: 'east-anglia',
    oldDisplay: 'East of England',
    newDisplay: 'East Anglia & East England',
  },
];

function readFile(p) { return fs.existsSync(p) ? fs.readFileSync(p, 'utf8') : null; }
function writeFile(p, c) { fs.writeFileSync(p, c, 'utf8'); }

// === 1. RENAME HTML FILES + CREATE REDIRECTS ===
console.log('\n=== RENAMING HTML FILES ===');
for (const r of renames) {
  if (r.oldSlug === r.newSlug) continue;
  const oldPath = path.join(engDir, `${r.oldSlug}.html`);
  const newPath = path.join(engDir, `${r.newSlug}.html`);
  if (fs.existsSync(oldPath)) {
    fs.renameSync(oldPath, newPath);
    console.log(`  [rename] ${r.oldSlug}.html → ${r.newSlug}.html`);
    const redirect = `<!DOCTYPE html>
<html><head>
<meta charset="UTF-8">
<link rel="canonical" href="https://castlecore.uk/england/${r.newSlug}">
<meta http-equiv="refresh" content="0;url=/england/${r.newSlug}">
<title>Redirecting...</title>
</head><body>
<p>This page has moved to <a href="/england/${r.newSlug}">/england/${r.newSlug}</a>.</p>
</body></html>`;
    writeFile(oldPath, redirect);
    console.log(`  [redirect] created ${r.oldSlug}.html`);
  }
}

// === 2. RENAME JSON FILES ===
console.log('\n=== RENAMING JSON FILES ===');
for (const r of renames) {
  if (r.oldSlug === r.newSlug) continue;
  for (const d of [dir, engDir]) {
    const oldJson = path.join(d, `${r.oldSlug}.json`);
    const newJson = path.join(d, `${r.newSlug}.json`);
    if (fs.existsSync(oldJson)) {
      fs.renameSync(oldJson, newJson);
      console.log(`  [rename] ${path.relative(dir, oldJson)} → ${r.newSlug}.json`);
    }
  }
}

// === 3. UPDATE EAST OF ENGLAND PAGE (safe to global replace) ===
console.log('\n=== UPDATING EAST OF ENGLAND → EAST ANGLIA PAGE ===');
{
  const filePath = path.join(engDir, 'east-anglia.html');
  let c = readFile(filePath);
  if (c) {
    c = c.replaceAll('East of England', 'East Anglia & East England');
    c = c.replaceAll('/england/east-of-england', '/england/east-anglia');
    c = c.replaceAll("slug: 'east-of-england'", "slug: 'east-anglia'");
    c = c.replaceAll("name: 'East of England'", "name: 'East Anglia & East England'");
    c = c.replaceAll("'east-of-england'", "'east-anglia'");
    writeFile(filePath, c);
    console.log('  [updated] england/east-anglia.html');
  }
}

// === 4. UPDATE SOUTH WEST PAGE (targeted replacements only) ===
console.log('\n=== UPDATING SOUTH WEST → SOUTH WEST ENGLAND PAGE ===');
{
  const filePath = path.join(engDir, 'south-west-england.html');
  let c = readFile(filePath);
  if (c) {
    // URL slugs
    c = c.replaceAll('/england/south-west"', '/england/south-west-england"');
    c = c.replaceAll('/england/south-west\'', '/england/south-west-england\'');
    c = c.replaceAll("slug: 'south-west'", "slug: 'south-west-england'");
    c = c.replaceAll("name: 'South West'", "name: 'South West England'");
    c = c.replaceAll("'south-west'", "'south-west-england'");
    
    // Page titles and headings - targeted
    c = c.replace('<h1>South West</h1>', '<h1>South West England</h1>');
    c = c.replace('Castles in the South West -', 'Castles in South West England -');
    c = c.replace('Castles in the South West |', 'Castles in South West England |');
    c = c.replace('"Castles in the South West"', '"Castles in South West England"');
    c = c.replaceAll('South West Castle Routes', 'South West England Castle Routes');
    c = c.replaceAll('South West Castle FAQ', 'South West England Castle FAQ');
    c = c.replaceAll('Top Rated in the South West', 'Top Rated in South West England');
    c = c.replaceAll('Travelling to the South West', 'Travelling to South West England');
    c = c.replaceAll('Where to Stay in the South West', 'Where to Stay in South West England');
    c = c.replaceAll('Best Time to Visit South West Castles', 'Best Time to Visit South West England Castles');
    
    // Breadcrumb
    c = c.replace('England</a> / South West</p>', 'England</a> / South West England</p>');
    
    // Schema/meta - "South West" as region name in structured contexts
    c = c.replaceAll('"Castles, ruins, and historic sites across South West England.', '"Castles, ruins, and historic sites across South West England.');
    
    // FAQ questions with "South West England" already have it right from meta content
    // The intro text references are fine as "South West" in prose
    
    writeFile(filePath, c);
    console.log('  [updated] england/south-west-england.html');
  }
}

// === 5. UPDATE NAV.JS ===
console.log('\n=== UPDATING NAV.JS ===');
{
  let c = readFile(navPath);
  if (c) {
    c = c.replaceAll('/england/east-of-england', '/england/east-anglia');
    c = c.replaceAll('>East of England<', '>East Anglia & East England<');
    c = c.replaceAll('/england/south-west"', '/england/south-west-england"');
    c = c.replaceAll('>South West<', '>South West England<');
    writeFile(navPath, c);
    console.log('  [updated] components/nav.js');
  }
}

// === 6. UPDATE OTHER ENGLAND REGION PAGES (nearby cards) ===
console.log('\n=== UPDATING CROSS-REFERENCES ===');
const otherPages = fs.readdirSync(engDir).filter(f => f.endsWith('.html'));
for (const file of otherPages) {
  if (['south-west-england.html', 'east-anglia.html', 'south-west.html', 'east-of-england.html'].includes(file)) continue;
  const filePath = path.join(engDir, file);
  let c = readFile(filePath);
  if (!c) continue;
  const before = c;
  c = c.replaceAll('/england/east-of-england', '/england/east-anglia');
  c = c.replaceAll('>East of England<', '>East Anglia & East England<');
  c = c.replaceAll('/england/south-west"', '/england/south-west-england"');
  // Only replace "South West" in nearby card alt text and card labels, not in prose
  c = c.replaceAll('alt="South West"', 'alt="South West England"');
  if (c !== before) {
    writeFile(filePath, c);
    console.log(`  [updated] england/${file}`);
  }
}

// Also check Wales region pages for nearby cards
const walesDir = path.join(dir, 'wales');
if (fs.existsSync(walesDir)) {
  const walesPages = fs.readdirSync(walesDir).filter(f => f.endsWith('.html'));
  for (const file of walesPages) {
    const filePath = path.join(walesDir, file);
    let c = readFile(filePath);
    if (!c) continue;
    const before = c;
    c = c.replaceAll('/england/south-west"', '/england/south-west-england"');
    c = c.replaceAll('/england/east-of-england', '/england/east-anglia');
    if (c !== before) {
      writeFile(filePath, c);
      console.log(`  [updated] wales/${file}`);
    }
  }
}

// === 7. UPDATE ENGLAND.HTML (root country page) ===
console.log('\n=== UPDATING ENGLAND.HTML ===');
{
  const filePath = path.join(dir, 'england.html');
  let c = readFile(filePath);
  if (c) {
    const before = c;
    c = c.replaceAll('/england/east-of-england', '/england/east-anglia');
    c = c.replaceAll('East of England', 'East Anglia & East England');
    c = c.replaceAll('/england/south-west"', '/england/south-west-england"');
    c = c.replaceAll('/england/south-west\'', '/england/south-west-england\'');
    // Region card names - targeted
    c = c.replaceAll('>South West<', '>South West England<');
    c = c.replaceAll("'south-west'", "'south-west-england'");
    c = c.replaceAll("'east-of-england'", "'east-anglia'");
    if (c !== before) {
      writeFile(filePath, c);
      console.log('  [updated] england.html');
    }
  }
}

// === 8. UPDATE DASHBOARD ===
console.log('\n=== UPDATING DASHBOARD ===');
{
  const filePath = path.join(dir, 'dashboard-listing.html');
  let c = readFile(filePath);
  if (c) {
    const before = c;
    c = c.replaceAll("'South West'", "'South West England'");
    c = c.replaceAll("'East of England'", "'East Anglia & East England'");
    if (c !== before) {
      writeFile(filePath, c);
      console.log('  [updated] dashboard-listing.html');
    }
  }
}

// === 9. UPDATE ENRICHMENT GUIDE ===
console.log('\n=== UPDATING ENRICHMENT GUIDE ===');
for (const f of ['enrichment-guide.html', 'enrichment-guide.md']) {
  const filePath = path.join(dir, f);
  let c = readFile(filePath);
  if (c) {
    const before = c;
    c = c.replaceAll("'South West'", "'South West England'");
    c = c.replaceAll("'East of England'", "'East Anglia & East England'");
    c = c.replaceAll('South West</td>', 'South West England</td>');
    c = c.replaceAll('East of England</td>', 'East Anglia & East England</td>');
    // Also plain text references in guide
    c = c.replace(/\bSouth West\b(?=.*England.*region)/g, 'South West England');
    if (c !== before) {
      writeFile(filePath, c);
      console.log(`  [updated] ${f}`);
    }
  }
}

// === 10. UPDATE AUDIT-DATA.JSON (region field only) ===
console.log('\n=== UPDATING AUDIT-DATA.JSON ===');
{
  const filePath = path.join(dir, 'audit-data.json');
  let c = readFile(filePath);
  if (c) {
    const before = c;
    c = c.replaceAll('"region": "South West"', '"region": "South West England"');
    c = c.replaceAll('"region": "East of England"', '"region": "East Anglia & East England"');
    if (c !== before) {
      writeFile(filePath, c);
      console.log('  [updated] audit-data.json');
    }
  }
}

// === 11. UPDATE SKILLS ===
console.log('\n=== UPDATING SKILLS ===');
const skillsDir = path.join(dir, '..', 'skills');
function updateSkills(d) {
  if (!fs.existsSync(d)) return;
  const entries = fs.readdirSync(d, { withFileTypes: true });
  for (const e of entries) {
    if (e.isDirectory()) {
      const skillFile = path.join(d, e.name, 'SKILL.md');
      let c = readFile(skillFile);
      if (c) {
        const before = c;
        c = c.replaceAll("'South West'", "'South West England'");
        c = c.replaceAll("'East of England'", "'East Anglia & East England'");
        c = c.replaceAll('South West</td>', 'South West England</td>');
        c = c.replaceAll('East of England</td>', 'East Anglia & East England</td>');
        c = c.replaceAll('| South West |', '| South West England |');
        c = c.replaceAll('| East of England |', '| East Anglia & East England |');
        if (c !== before) {
          writeFile(skillFile, c);
          console.log(`  [updated] skills/${e.name}/SKILL.md`);
        }
      }
    }
  }
}
updateSkills(skillsDir);

console.log('\n=== DONE ===');
console.log('\nRemaining: Update D1 database region values, then deploy.');
