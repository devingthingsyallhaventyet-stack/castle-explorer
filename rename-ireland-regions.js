const fs = require('fs');
const path = require('path');

const dir = __dirname;
const ireDir = path.join(dir, 'ireland');
const navPath = path.join(dir, 'components', 'nav.js');

const renames = [
  {
    oldSlug: 'kingdom-of-munster',
    newSlug: 'southwest-ireland-munster',
    oldDisplay: 'The Kingdom of Munster',
    newDisplay: 'Southwest Ireland & Munster',
    oldDisplayHtml: 'The Kingdom of Munster',
    newDisplayHtml: 'Southwest Ireland &amp; Munster',
  },
  {
    oldSlug: 'the-heartlands',
    newSlug: 'central-ireland-heartlands',
    oldDisplay: 'The Heartlands',
    newDisplay: 'Central Ireland & the Heartlands',
    oldDisplayHtml: 'The Heartlands',
    newDisplayHtml: 'Central Ireland &amp; the Heartlands',
  },
  {
    oldSlug: 'dublin-and-the-pale',
    newSlug: 'dublin-eastern-ireland',
    oldDisplay: 'Dublin & The Pale',
    newDisplay: 'Dublin & Eastern Ireland',
    oldDisplayHtml: 'Dublin &amp; The Pale',
    newDisplayHtml: 'Dublin &amp; Eastern Ireland',
  },
  {
    oldSlug: 'ulster-and-the-north',
    newSlug: 'northern-ireland-ulster',
    oldDisplay: 'Ulster & the North',
    newDisplay: 'Northern Ireland & Ulster',
    oldDisplayHtml: 'Ulster &amp; the North',
    newDisplayHtml: 'Northern Ireland &amp; Ulster',
  },
];

function readFile(p) { return fs.existsSync(p) ? fs.readFileSync(p, 'utf8') : null; }
function writeFile(p, c) { fs.writeFileSync(p, c, 'utf8'); }

// === 1. RENAME HTML FILES + REDIRECTS ===
console.log('\n=== RENAMING HTML FILES ===');
for (const r of renames) {
  if (r.oldSlug === r.newSlug) continue;
  const oldPath = path.join(ireDir, `${r.oldSlug}.html`);
  const newPath = path.join(ireDir, `${r.newSlug}.html`);
  if (fs.existsSync(oldPath)) {
    fs.renameSync(oldPath, newPath);
    console.log(`  [rename] ${r.oldSlug}.html → ${r.newSlug}.html`);
    const redirect = `<!DOCTYPE html>
<html><head>
<meta charset="UTF-8">
<link rel="canonical" href="https://castlecore.uk/ireland/${r.newSlug}">
<meta http-equiv="refresh" content="0;url=/ireland/${r.newSlug}">
<title>Redirecting...</title>
</head><body>
<p>This page has moved to <a href="/ireland/${r.newSlug}">/ireland/${r.newSlug}</a>.</p>
</body></html>`;
    writeFile(oldPath, redirect);
    console.log(`  [redirect] created ${r.oldSlug}.html`);
  }
}

// === 2. RENAME JSON FILES ===
console.log('\n=== RENAMING JSON FILES ===');
for (const r of renames) {
  if (r.oldSlug === r.newSlug) continue;
  for (const d of [dir, ireDir]) {
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
      reps.push([`/ireland/${r.oldSlug}`, `/ireland/${r.newSlug}`]);
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

// === 3. UPDATE IRELAND REGION PAGES ===
console.log('\n=== UPDATING IRELAND REGION PAGES ===');
const irePages = fs.readdirSync(ireDir).filter(f => f.endsWith('.html'));
for (const file of irePages) {
  const filePath = path.join(ireDir, file);
  let c = readFile(filePath);
  if (!c) continue;
  const before = c;
  c = applyReps(c);
  if (c !== before) { writeFile(filePath, c); console.log(`  [updated] ireland/${file}`); }
}

// === 4. UPDATE IRELAND.HTML (country page) ===
console.log('\n=== UPDATING IRELAND.HTML ===');
{
  const filePath = path.join(dir, 'ireland.html');
  let c = readFile(filePath);
  if (c) {
    const before = c;
    c = applyReps(c);
    if (c !== before) { writeFile(filePath, c); console.log('  [updated] ireland.html'); }
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

// === 9. UPDATE CROSS-REFERENCES (other countries) ===
console.log('\n=== UPDATING CROSS-REFERENCES ===');
for (const subdir of ['england', 'scotland', 'wales', 'northern-ireland']) {
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
