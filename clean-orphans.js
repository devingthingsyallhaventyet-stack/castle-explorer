const fs = require('fs');
const path = require('path');
const raw = fs.readFileSync('data.js', 'utf8');
const castles = eval(raw.match(/const CASTLES = (\[[\s\S]*\]);/)[1]);
const slugify = n => n.toLowerCase().replace(/[()]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const validSlugs = new Set(castles.map(c => slugify(c.name)));
const siteDir = path.join(__dirname, 'site');
if (!fs.existsSync(siteDir)) { console.log('No site/ dir'); process.exit(0); }
const files = fs.readdirSync(siteDir).filter(f => f.endsWith('.html'));
let removed = 0;
for (const f of files) {
  const slug = f.replace('.html','');
  if (slug === 'index') continue;
  if (!validSlugs.has(slug)) {
    fs.unlinkSync(path.join(siteDir, f));
    removed++;
  }
}
console.log(`Removed ${removed} orphan HTML files`);
