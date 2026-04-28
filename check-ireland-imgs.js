const fs = require('fs');
const pages = fs.readdirSync('ireland').filter(f => f.endsWith('.html'));
for (const p of pages) {
  const h = fs.readFileSync('ireland/' + p, 'utf8');
  const re = /class="nearby-card"><img src="([^"]+)"[\s\S]*?<h3>([^<]+)<\/h3>/g;
  let m;
  console.log(`\n=== ${p} ===`);
  while ((m = re.exec(h)) !== null) {
    console.log(`  ${m[2]}: ${m[1].substring(0,80)}...`);
  }
}
