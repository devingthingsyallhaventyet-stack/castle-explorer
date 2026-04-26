const fs = require('fs');
const path = require('path');

// Correct region names mapping (old → new)
const nameMap = {
  'The Highlands': 'Highlands &amp; Northern Isles',
  'Aberdeen &amp; the Northeast': 'Northeast &amp; Tayside',
  'Aberdeen &amp; Northeast': 'Northeast &amp; Tayside', 
  'Argyll &amp; the Islands': 'Argyll &amp; Western Isles',
  'Argyll &amp; Islands': 'Argyll &amp; Western Isles',
  'Dumfries &amp; Galloway': 'Southwest Scotland',
  'The Borders': 'Scottish Borders',
};

// Correct castle counts
const countMap = {
  '/scotland/highlands': '74',
  '/scotland/northeast-tayside': '118',
  '/scotland/argyll-western-isles': '53',
  '/scotland/borders': '30',
  '/scotland/southwest-scotland': '60',
  '/scotland/edinburgh-lothians': '27',
  '/scotland/fife-perthshire': '56',
  '/scotland/glasgow-stirling': '26',
};

// Fix nearby cards in all 8 region pages
const regionDir = 'scotland';
const regionFiles = fs.readdirSync(regionDir).filter(f => f.endsWith('.html') && f !== 'index.html');

regionFiles.forEach(f => {
  let html = fs.readFileSync(path.join(regionDir, f), 'utf8');
  let changed = false;

  for (const [old, nw] of Object.entries(nameMap)) {
    if (html.includes(old)) {
      html = html.split(old).join(nw);
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(path.join(regionDir, f), html, 'utf8');
    console.log(f + ': updated nearby card names');
  } else {
    console.log(f + ': no changes needed');
  }
});

// Fix scotland.html landing page
let scot = fs.readFileSync('scotland.html', 'utf8');
let scotChanged = false;

for (const [old, nw] of Object.entries(nameMap)) {
  if (scot.includes(old)) {
    scot = scot.split(old).join(nw);
    scotChanged = true;
  }
}

// Fix counts on scotland.html
for (const [href, count] of Object.entries(countMap)) {
  // Match pattern: region-card-castles">XX sites</div> near the href
  const regex = new RegExp('(href="' + href.replace(/\//g, '\\/') + '"[\\s\\S]*?region-card-castles">)\\d+ sites', 'g');
  const newScot = scot.replace(regex, '$1' + count + ' sites');
  if (newScot !== scot) {
    scot = newScot;
    scotChanged = true;
  }
}

if (scotChanged) {
  fs.writeFileSync('scotland.html', scot, 'utf8');
  console.log('scotland.html: updated region names and counts');
} else {
  console.log('scotland.html: no changes needed');
}
