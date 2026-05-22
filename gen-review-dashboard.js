const fs = require('fs');
const path = require('path');
const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'audit-data.json'), 'utf8'));
const approved = data.filter(d => d.reviewStatus === 'approved');

const whitelist = [
  'historicenvironment.scot','cadw.gov.wales','english-heritage.org.uk',
  'heritageireland.ie','nts.org.uk','nationaltrust.org.uk','hrp.org.uk',
  'rct.uk','coillte.ie','heritagefund.org.uk','historicengland.org.uk',
  'wikipedia.org','google.com'
];

const links = [];
for (const e of approved) {
  if (!Array.isArray(e.source)) continue;
  for (const s of e.source) {
    if (!s.url) continue;
    try {
      const domain = new URL(s.url).hostname.replace(/^www\./,'');
      const isWL = whitelist.some(w => domain.includes(w));
      if (!isWL) {
        links.push({name: e.name, type: domain, url: s.url, error: 'review'});
      }
    } catch(err){}
  }
}

// Generate JS array
const jsLines = links.map(x => 
  `  {name:${JSON.stringify(x.name)},type:${JSON.stringify(x.type)},url:${JSON.stringify(x.url)},error:"review"}`
);
const jsArray = `const BROKEN_LINKS = [\n${jsLines.join(',\n')}\n];`;

// Read dashboard HTML
let html = fs.readFileSync(path.join(__dirname, 'dashboard-broken-links.html'), 'utf8');

// Replace BROKEN_LINKS array
html = html.replace(/const BROKEN_LINKS = \[[\s\S]*?\];/, jsArray);

// Update badge
html = html.replace(/id="badge-count">\d+/, `id="badge-count">${links.length}`);

// Update stats
html = html.replace(/id="stat-total">\d+/, `id="stat-total">${links.length}`);
html = html.replace(/id="stat-404">\d+/, `id="stat-404">0`);
html = html.replace(/id="stat-err">\d+/, `id="stat-err">0`);
html = html.replace(/id="stat-403">\d+/, `id="stat-403">0`);

// Count unique domains
const domainCounts = {};
links.forEach(l => { domainCounts[l.type] = (domainCounts[l.type]||0)+1; });
const sorted = Object.entries(domainCounts).sort((a,b)=>b[1]-a[1]);

// Update stat labels for review mode
html = html.replace(
  /<div class="stat-card"><div class="label">404 Not Found<\/div><div class="value red" id="stat-404">\d+<\/div><\/div>/,
  `<div class="stat-card"><div class="label">Unique Domains</div><div class="value amber" id="stat-404">${Object.keys(domainCounts).length}</div></div>`
);
html = html.replace(
  /<div class="stat-card"><div class="label">Connection Error<\/div><div class="value amber" id="stat-err">\d+<\/div><\/div>/,
  `<div class="stat-card"><div class="label">Needs Review</div><div class="value amber" id="stat-err">${links.length}</div></div>`
);
html = html.replace(
  /<div class="stat-card"><div class="label">403 Blocked<\/div><div class="value amber" id="stat-403">\d+<\/div><\/div>/,
  `<div class="stat-card"><div class="label">Marked OK</div><div class="value green" id="stat-403">0</div></div>`
);

// Replace filter buttons with top domain filters
const topDomains = sorted.slice(0, 8);
const filterBtns = [
  `<button class="filter-btn active" data-filter="all" onclick="filterBy('all',this)">All (${links.length})</button>`,
  ...topDomains.map(([d,c]) => 
    `<button class="filter-btn" data-filter="${d}" onclick="filterBy('${d}',this)">${d} (${c})</button>`
  )
].join('\n        ');
html = html.replace(/<button class="filter-btn[^>]*>[\s\S]*?<\/button>(?:\s*<button class="filter-btn[^>]*>[\s\S]*?<\/button>)*/,
  filterBtns);

// Update title
html = html.replace(/<h1>🔗 Broken Links<\/h1>/, '<h1>🔗 Source Link Review</h1>');

// Change error badge rendering for "review" type
html = html.replace(
  /const errorClass = \['404','410','502'\]\.includes\(link\.error\) \? '' : 'warn';/,
  `const errorClass = link.error === 'review' ? 'warn' : (['404','410','502'].includes(link.error) ? '' : 'warn');`
);

fs.writeFileSync(path.join(__dirname, 'dashboard-broken-links.html'), html);
console.log(`Updated dashboard with ${links.length} links across ${Object.keys(domainCounts).length} domains`);
console.log('Top domains:', sorted.slice(0,10).map(([d,c])=>`${d}(${c})`).join(', '));
