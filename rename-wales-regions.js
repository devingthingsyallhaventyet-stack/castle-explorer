const fs = require('fs');
const path = require('path');

const dir = __dirname;
const walesDir = path.join(dir, 'wales');
const navPath = path.join(dir, 'components', 'nav.js');

const renames = [
  {
    oldSlug: 'snowdonia-north',
    newSlug: 'north-wales-snowdonia',
    oldDisplay: 'Snowdonia & North Wales',
    newDisplay: 'North Wales & Snowdonia',
    oldDisplayHtml: 'Snowdonia &amp; North Wales',
    newDisplayHtml: 'North Wales &amp; Snowdonia',
  },
  {
    oldSlug: 'mid-wales-marches',
    newSlug: 'mid-wales-borderlands',
    oldDisplay: 'Mid Wales & the Marches',
    newDisplay: 'Mid Wales & Borderlands',
    oldDisplayHtml: 'Mid Wales &amp; the Marches',
    newDisplayHtml: 'Mid Wales &amp; Borderlands',
  },
  {
    oldSlug: 'west-wales',
    newSlug: 'west-wales-pembrokeshire',
    oldDisplay: 'West Wales',
    newDisplay: 'West Wales & Pembrokeshire',
    oldDisplayHtml: 'West Wales',
    newDisplayHtml: 'West Wales &amp; Pembrokeshire',
  },
];

function readFile(p) { return fs.existsSync(p) ? fs.readFileSync(p, 'utf8') : null; }
function writeFile(p, c) { fs.writeFileSync(p, c, 'utf8'); }

// === 1. RENAME HTML FILES + REDIRECTS ===
console.log('\n=== RENAMING HTML FILES ===');
for (const r of renames) {
  if (r.oldSlug === r.newSlug) continue;
  const oldPath = path.join(walesDir, `${r.oldSlug}.html`);
  const newPath = path.join(walesDir, `${r.newSlug}.html`);
  if (fs.existsSync(oldPath)) {
    fs.renameSync(oldPath, newPath);
    console.log(`  [rename] ${r.oldSlug}.html → ${r.newSlug}.html`);
    const redirect = `<!DOCTYPE html>
<html><head>
<meta charset="UTF-8">
<link rel="canonical" href="https://castlecore.uk/wales/${r.newSlug}">
<meta http-equiv="refresh" content="0;url=/wales/${r.newSlug}">
<title>Redirecting...</title>
</head><body>
<p>This page has moved to <a href="/wales/${r.newSlug}">/wales/${r.newSlug}</a>.</p>
</body></html>`;
    writeFile(oldPath, redirect);
    console.log(`  [redirect] created ${r.oldSlug}.html`);
  }
}

// === 2. RENAME JSON FILES ===
console.log('\n=== RENAMING JSON FILES ===');
for (const r of renames) {
  if (r.oldSlug === r.newSlug) continue;
  for (const d of [dir, walesDir]) {
    const oldJson = path.join(d, `${r.oldSlug}.json`);
    const newJson = path.join(d, `${r.newSlug}.json`);
    if (fs.existsSync(oldJson)) {
      fs.renameSync(oldJson, newJson);
      console.log(`  [rename] ${path.relative(dir, oldJson)} → ${r.newSlug}.json`);
    }
  }
}

// Build replacement pairs
function buildReps() {
  const reps = [];
  for (const r of renames) {
    reps.push([r.oldDisplay, r.newDisplay]);
    if (r.oldDisplayHtml !== r.oldDisplay) reps.push([r.oldDisplayHtml, r.newDisplayHtml]);
    if (r.oldSlug !== r.newSlug) {
      reps.push([`/wales/${r.oldSlug}`, `/wales/${r.newSlug}`]);
      reps.push([`slug: '${r.oldSlug}'`, `slug: '${r.newSlug}'`]);
      reps.push([`'${r.oldSlug}'`, `'${r.newSlug}'`]);
      reps.push([`"region": "${r.oldSlug}"`, `"region": "${r.newSlug}"`]);
    }
    reps.push([`name: '${r.oldDisplay}'`, `name: '${r.newDisplay}'`]);
  }
  return reps;
}
const reps = buildReps();

function applyReps(content) {
  for (const [old, neu] of reps) content = content.replaceAll(old, neu);
  return content;
}

// === 3. UPDATE WALES REGION PAGES ===
console.log('\n=== UPDATING WALES REGION PAGES ===');
const walesPages = fs.readdirSync(walesDir).filter(f => f.endsWith('.html'));
for (const file of walesPages) {
  const filePath = path.join(walesDir, file);
  let c = readFile(filePath);
  if (!c) continue;
  const before = c;
  c = applyReps(c);
  if (c !== before) { writeFile(filePath, c); console.log(`  [updated] wales/${file}`); }
}

// === 4. UPDATE WALES.HTML (country page) ===
console.log('\n=== UPDATING WALES.HTML ===');
{
  const filePath = path.join(dir, 'wales.html');
  let c = readFile(filePath);
  if (c) {
    const before = c;
    c = applyReps(c);
    if (c !== before) { writeFile(filePath, c); console.log('  [updated] wales.html'); }
  }
}

// === 5. UPDATE NAV.JS ===
console.log('\n=== UPDATING NAV.JS ===');
{
  let c = readFile(navPath);
  if (c) {
    const before = c;
    c = applyReps(c);
    if (c !== before) { writeFile(navPath, c); console.log('  [updated] components/nav.js'); }
  }
}

// === 6. UPDATE DASHBOARD ===
console.log('\n=== UPDATING DASHBOARD ===');
{
  const filePath = path.join(dir, 'dashboard-listing.html');
  let c = readFile(filePath);
  if (c) {
    const before = c;
    c = applyReps(c);
    if (c !== before) { writeFile(filePath, c); console.log('  [updated] dashboard-listing.html'); }
  }
}

// === 7. UPDATE ENRICHMENT GUIDE ===
console.log('\n=== UPDATING ENRICHMENT GUIDE ===');
for (const f of ['enrichment-guide.html', 'enrichment-guide.md']) {
  const filePath = path.join(dir, f);
  let c = readFile(filePath);
  if (c) {
    const before = c;
    c = applyReps(c);
    if (c !== before) { writeFile(filePath, c); console.log(`  [updated] ${f}`); }
  }
}

// === 8. UPDATE AUDIT-DATA.JSON ===
console.log('\n=== UPDATING AUDIT-DATA.JSON ===');
{
  const filePath = path.join(dir, 'audit-data.json');
  let c = readFile(filePath);
  if (c) {
    const before = c;
    for (const r of renames) {
      c = c.replaceAll(`"region": "${r.oldDisplay}"`, `"region": "${r.newDisplay}"`);
    }
    if (c !== before) { writeFile(filePath, c); console.log('  [updated] audit-data.json'); }
  }
}

// === 9. UPDATE CROSS-REFERENCES (England, Scotland, Ireland nearby cards) ===
console.log('\n=== UPDATING CROSS-REFERENCES ===');
for (const subdir of ['england', 'scotland', 'ireland', 'northern-ireland']) {
  const d = path.join(dir, subdir);
  if (!fs.existsSync(d)) continue;
  const pages = fs.readdirSync(d).filter(f => f.endsWith('.html'));
  for (const file of pages) {
    const filePath = path.join(d, file);
    let c = readFile(filePath);
    if (!c) continue;
    const before = c;
    c = applyReps(c);
    if (c !== before) { writeFile(filePath, c); console.log(`  [updated] ${subdir}/${file}`); }
  }
}

// === 10. UPDATE SKILLS ===
console.log('\n=== UPDATING SKILLS ===');
const skillsDir = path.join(dir, '..', 'skills');
if (fs.existsSync(skillsDir)) {
  const entries = fs.readdirSync(skillsDir, { withFileTypes: true });
  for (const e of entries) {
    if (e.isDirectory()) {
      const skillFile = path.join(skillsDir, e.name, 'SKILL.md');
      let c = readFile(skillFile);
      if (c) {
        const before = c;
        c = applyReps(c);
        if (c !== before) { writeFile(skillFile, c); console.log(`  [updated] skills/${e.name}/SKILL.md`); }
      }
    }
  }
}

console.log('\n=== DONE ===');
console.log('\nRemaining: Update D1 database, then deploy.');
