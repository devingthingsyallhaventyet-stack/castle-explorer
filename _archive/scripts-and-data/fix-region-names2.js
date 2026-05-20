const fs = require('fs');

let scot = fs.readFileSync('scotland.html', 'utf8');

// Fix the remaining raw & versions on scotland.html
scot = scot.replace('Aberdeen & the Northeast', 'Northeast & Tayside');
scot = scot.replace('Argyll & the Islands', 'Argyll & Western Isles');
scot = scot.replace('Dumfries & Galloway', 'Southwest Scotland');

fs.writeFileSync('scotland.html', scot, 'utf8');
console.log('scotland.html: fixed remaining names');

// Also check nearby cards in region pages for raw & versions
const dir = 'scotland';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));
files.forEach(f => {
  let html = fs.readFileSync(dir + '/' + f, 'utf8');
  let changed = false;
  
  const replacements = [
    ['Aberdeen & Northeast', 'Northeast & Tayside'],
    ['Aberdeen & the Northeast', 'Northeast & Tayside'],
    ['Argyll & Islands', 'Argyll & Western Isles'],
    ['Argyll & the Islands', 'Argyll & Western Isles'],
    ['Dumfries & Galloway', 'Southwest Scotland'],
    ['The Borders</h3>', 'Scottish Borders</h3>'],
    ['The Highlands</h3>', 'Highlands & Northern Isles</h3>'],
  ];
  
  for (const [old, nw] of replacements) {
    if (html.includes(old)) {
      html = html.split(old).join(nw);
      changed = true;
    }
  }
  
  if (changed) {
    fs.writeFileSync(dir + '/' + f, html, 'utf8');
    console.log(f + ': fixed');
  }
});
