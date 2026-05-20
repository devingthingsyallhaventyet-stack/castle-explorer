const fs = require('fs');
const path = require('path');

const dir = __dirname;
const scotDir = path.join(dir, 'scotland');
const navPath = path.join(dir, 'components', 'nav.js');

const renames = [
  {
    oldSlug: 'highlands',
    newSlug: 'scottish-highlands',
    oldDisplay: 'Highlands & Northern Isles',
    newDisplay: 'Scottish Highlands & Northern Isles',
    oldDisplayHtml: 'Highlands &amp; Northern Isles',
    newDisplayHtml: 'Scottish Highlands &amp; Northern Isles',
  },
  {
    oldSlug: 'northeast-tayside',
    newSlug: 'northeast-scotland-tayside',
    oldDisplay: 'Northeast & Tayside',
    newDisplay: 'Northeast Scotland & Tayside',
    oldDisplayHtml: 'Northeast &amp; Tayside',
    newDisplayHtml: 'Northeast Scotland &amp; Tayside',
  },
  {
    oldSlug: 'argyll-western-isles',
    newSlug: 'argyll-western-isles',
    oldDisplay: 'Argyll & Western Isles',
    newDisplay: 'Argyll & the Western Isles',
    oldDisplayHtml: 'Argyll &amp; Western Isles',
    newDisplayHtml: 'Argyll &amp; the Western Isles',
  },
  {
    oldSlug: 'glasgow-stirling',
    newSlug: 'glasgow-central-scotland',
    oldDisplay: 'Glasgow & Stirling',
    newDisplay: 'Glasgow & Central Scotland',
    oldDisplayHtml: 'Glasgow &amp; Stirling',
    newDisplayHtml: 'Glasgow &amp; Central Scotland',
  },
];

function replaceInFile(filePath, replacements) {
  if (!fs.existsSync(filePath)) { console.log(`  [skip] ${filePath} not found`); return false; }
  let content = fs.readFileSync(filePath, 'utf8');
  const before = content;
  for (const [old, neu] of replacements) {
    content = content.replaceAll(old, neu);
  }
  if (content !== before) {
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }
  return false;
}

// Build a universal replacement list
function buildReplacements() {
  const reps = [];
  for (const r of renames) {
    // Display names (longer first to avoid partial matches)
    reps.push([r.oldDisplay, r.newDisplay]);
    reps.push([r.oldDisplayHtml, r.newDisplayHtml]);
    if (r.oldSlug !== r.newSlug) {
      reps.push([`/scotland/${r.oldSlug}`, `/scotland/${r.newSlug}`]);
      reps.push([`slug: '${r.oldSlug}'`, `slug: '${r.newSlug}'`]);
      reps.push([`"region": "${r.oldSlug}"`, `"region": "${r.newSlug}"`]);
    }
    reps.push([`name: '${r.oldDisplay}'`, `name: '${r.newDisplay}'`]);
  }
  return reps;
}

const reps = buildReplacements();

// === 1. RENAME HTML FILES ===
console.log('\n=== RENAMING HTML FILES ===');
for (const r of renames) {
  if (r.oldSlug === r.newSlug) { console.log(`  [skip] ${r.oldSlug}.html (slug unchanged)`); continue; }
  const oldPath = path.join(scotDir, `${r.oldSlug}.html`);
  const newPath = path.join(scotDir, `${r.newSlug}.html`);
  if (fs.existsSync(oldPath)) {
    fs.renameSync(oldPath, newPath);
    console.log(`  [rename] ${r.oldSlug}.html → ${r.newSlug}.html`);
    const redirect = `<!DOCTYPE html>
<html><head>
<meta charset="UTF-8">
<link rel="canonical" href="https://castlecore.uk/scotland/${r.newSlug}">
<meta http-equiv="refresh" content="0;url=/scotland/${r.newSlug}">
<title>Redirecting...</title>
</head><body>
<p>This page has moved to <a href="/scotland/${r.newSlug}">/scotland/${r.newSlug}</a>.</p>
</body></html>`;
    fs.writeFileSync(oldPath, redirect, 'utf8');
    console.log(`  [redirect] created ${r.oldSlug}.html`);
  }
}

// === 2. RENAME JSON FILES ===
console.log('\n=== RENAMING JSON FILES ===');
for (const r of renames) {
  if (r.oldSlug === r.newSlug) continue;
  // Check both root and scotland dir
  for (const d of [dir, scotDir]) {
    const oldJson = path.join(d, `${r.oldSlug}.json`);
    const newJson = path.join(d, `${r.newSlug}.json`);
    if (fs.existsSync(oldJson)) {
      fs.renameSync(oldJson, newJson);
      console.log(`  [rename] ${path.relative(dir, oldJson)} → ${r.newSlug}.json`);
    }
  }
}

// === 3. UPDATE REGION PAGES (including newly renamed ones) ===
console.log('\n=== UPDATING REGION PAGES ===');
const regionPages = fs.readdirSync(scotDir).filter(f => f.endsWith('.html'));
for (const file of regionPages) {
  const filePath = path.join(scotDir, file);
  if (replaceInFile(filePath, reps)) console.log(`  [updated] scotland/${file}`);
}

// === 4. UPDATE SCOTLAND.HTML (root) ===
console.log('\n=== UPDATING SCOTLAND.HTML ===');
{
  const scotlandPath = path.join(dir, 'scotland.html');
  // Also need to replace slug references in JS objects like 'northeast-tayside': [...]
  const scotReps = [...reps];
  for (const r of renames) {
    if (r.oldSlug !== r.newSlug) {
      scotReps.push([`'${r.oldSlug}'`, `'${r.newSlug}'`]);
    }
  }
  if (replaceInFile(scotlandPath, scotReps)) console.log('  [updated] scotland.html');
}

// === 5. UPDATE NAV.JS ===
console.log('\n=== UPDATING NAV.JS ===');
if (replaceInFile(navPath, reps)) console.log('  [updated] components/nav.js');

// === 6. UPDATE DASHBOARD ===
console.log('\n=== UPDATING DASHBOARDS ===');
for (const f of ['dashboard-listing.html', 'dashboard-enrichment.html', 'dashboard-moderation.html', 'dashboard-pipeline.html', 'dashboard-improvements.html']) {
  if (replaceInFile(path.join(dir, f), reps)) console.log(`  [updated] ${f}`);
}

// === 7. UPDATE ENRICHMENT GUIDE ===
console.log('\n=== UPDATING ENRICHMENT GUIDE ===');
if (replaceInFile(path.join(dir, 'enrichment-guide.html'), reps)) console.log('  [updated] enrichment-guide.html');

// === 8. UPDATE DATA FILES ===
console.log('\n=== UPDATING DATA FILES ===');
for (const f of ['audit-data.json', 'current-batch.json', 'filtered-castles.json', 'listings-needing-sources.json', 
                  'priority-scottish.json', 'source-search-targets.json', 'import-listings.js', 'app.js',
                  'data-scotland.js', 'rich-data.js']) {
  if (replaceInFile(path.join(dir, f), reps)) console.log(`  [updated] ${f}`);
}

// === 9. UPDATE BACKUP + OLD REDIRECT ===
console.log('\n=== UPDATING MISC ===');
for (const f of ['scotland-backup-2026-03-28.html']) {
  if (replaceInFile(path.join(dir, f), reps)) console.log(`  [updated] ${f}`);
}
// Update aberdeen-northeast redirect to point to new slug
const aberdeenRedirect = path.join(scotDir, 'aberdeen-northeast.html');
if (replaceInFile(aberdeenRedirect, reps)) console.log('  [updated] scotland/aberdeen-northeast.html');

// === 10. UPDATE ENGLAND REGION PAGES (northern-england has nearby card) ===
console.log('\n=== UPDATING ENGLAND REGION PAGES ===');
const engDir = path.join(dir, 'england');
if (fs.existsSync(engDir)) {
  const engPages = fs.readdirSync(engDir).filter(f => f.endsWith('.html'));
  for (const file of engPages) {
    if (replaceInFile(path.join(engDir, file), reps)) console.log(`  [updated] england/${file}`);
  }
}
// Also check root for northern-england.html
if (replaceInFile(path.join(dir, 'northern-england.html'), reps)) console.log('  [updated] northern-england.html');

console.log('\n=== DONE ===');
console.log('\nRemaining manual steps:');
console.log('1. Update D1 database region values');
console.log('2. Update skill SKILL.md files');
console.log('3. Git add renamed files + redirects');
console.log('4. Deploy');
