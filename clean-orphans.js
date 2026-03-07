const fs = require('fs');
const path = require('path');
const dataContent = fs.readFileSync('data.js', 'utf-8');
const idx = dataContent.indexOf('const CASTLES = [');
const exp = dataContent.match(/if\s*\(typeof\s+module/);
const jsonStr = exp ? dataContent.substring(idx + 'const CASTLES = '.length, exp.index).trim().replace(/;\s*$/, '') : dataContent.substring(idx + 'const CASTLES = '.length).trim().replace(/;\s*$/, '');
const castles = JSON.parse(jsonStr);
const slugify = n => n.replace(/\s*\(.*?\)\s*/g, '').trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const validSlugs = new Set(castles.map(c => slugify(c.name)));
const siteDir = path.join(__dirname, 'site');
const files = fs.readdirSync(siteDir).filter(f => f.endsWith('.html') && f !== 'index.html');
let removed = 0;
files.forEach(f => {
  const s = f.replace('.html', '');
  if (!validSlugs.has(s)) { fs.unlinkSync(path.join(siteDir, f)); removed++; console.log('Removed: ' + f); }
});
console.log(`Removed ${removed} orphan files`);
