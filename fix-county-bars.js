const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'scotland');

const pages = {
  'northeast-tayside.html': 'Aberdeenshire · Moray · Angus · Dundee',
  'argyll-western-isles.html': 'Argyll and Bute · Na h-Eileanan Siar · Western Isles',
  'borders.html': 'Scottish Borders',
  'southwest-scotland.html': 'Dumfries and Galloway · South Ayrshire · East Ayrshire · North Ayrshire',
  'edinburgh-lothians.html': 'City of Edinburgh · East Lothian · West Lothian · Midlothian',
  'fife-perthshire.html': 'Fife · Perth and Kinross · Clackmannanshire',
  'glasgow-stirling.html': 'Glasgow · Stirling · Falkirk · Lanarkshire · Dunbartonshire · Renfrewshire · Inverclyde',
};

const css = `
/* ========== REGION COUNTIES ========== */
.region-counties{text-align:center;padding:16px 24px;font-family:var(--sans);font-size:.8rem;color:rgba(232,224,208,.5);letter-spacing:.5px}
.counties-label{font-weight:600;color:rgba(232,224,208,.7)}
`;

for (const [file, counties] of Object.entries(pages)) {
  let html = fs.readFileSync(path.join(dir, file), 'utf8');
  
  // Skip if already has county bar
  if (html.includes('region-counties')) {
    console.log(`⏭️ ${file} — already has county bar`);
    continue;
  }
  
  // Add CSS before INTRO + SUBMENU comment
  html = html.replace(
    '/* ========== INTRO + SUBMENU ========== */',
    css.trim() + '\n\n/* ========== INTRO + SUBMENU ========== */'
  );
  
  // Add county bar HTML after hero section
  html = html.replace(
    /<!-- ={10,} -->\n<!-- 2\. INTRO/,
    `<div class="region-counties">\n${counties}\n</div>\n\n<!-- ================================ -->\n<!-- 2. INTRO`
  );
  
  fs.writeFileSync(path.join(dir, file), html, 'utf8');
  console.log(`✅ ${file} — county bar added`);
}

console.log('\nDone!');
