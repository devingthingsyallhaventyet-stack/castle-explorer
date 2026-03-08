const fs = require('fs');
const pages = ['caernarfon-castle','conwy-castle','edinburgh-castle',
  'hampton-court-palace','rock-of-cashel','tower-of-london','windsor-castle'];

for (const p of pages) {
  let h = fs.readFileSync('site/' + p + '.html', 'utf8');
  const matches = h.match(/[^a-z]Interior[^a-z]/gi);
  console.log(p + ':');
  if (matches) {
    // Find context
    let idx = 0;
    while ((idx = h.indexOf('Interior', idx)) !== -1) {
      console.log('  ...' + h.substring(Math.max(0,idx-40), idx+50).replace(/\n/g,' ') + '...');
      idx += 8;
    }
  }
}
