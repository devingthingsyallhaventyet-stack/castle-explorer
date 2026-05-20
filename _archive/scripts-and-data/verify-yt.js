const fs = require('fs');
const pages = [
  'cardiff-castle','conwy-castle','tower-of-london','edinburgh-castle'
];
for (const p of pages) {
  const h = fs.readFileSync('site/' + p + '.html', 'utf8');
  const m = h.match(/q=[^&"']+/);
  const broken = h.includes('${encodeURIComponent');
  console.log(p + ': ' + (m ? m[0] : 'NOT FOUND') + (broken ? ' STILL BROKEN' : ' OK'));
}
