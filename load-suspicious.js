const fs = require('fs');
const suspicious = JSON.parse(fs.readFileSync(__dirname + '/suspicious-links.json', 'utf8'));

const jsLines = suspicious.map(x =>
  `  {name:${JSON.stringify(x.name)},type:${JSON.stringify(x.reason)},url:${JSON.stringify(x.url)},error:${JSON.stringify(x.domain)}}`
);
const jsArray = `const BROKEN_LINKS = [\n${jsLines.join(',\n')}\n];`;

let html = fs.readFileSync(__dirname + '/dashboard-broken-links.html', 'utf8');

// Replace data array
html = html.replace(/const BROKEN_LINKS = \[[\s\S]*?\];/, jsArray);

// Badge + total
html = html.replace(/id="badge-count">\d+/, 'id="badge-count">96');
html = html.replace(/id="stat-total">\d+/, 'id="stat-total">96');

// Stat cards
html = html.replace(
  /<div class="stat-card"><div class="label">Unique Domains<\/div><div class="value amber" id="stat-404">\d+<\/div><\/div>/,
  '<div class="stat-card"><div class="label">Blog/Fan Sites</div><div class="value red" id="stat-404">8</div></div>'
);
html = html.replace(
  /<div class="stat-card"><div class="label">Needs Review<\/div><div class="value amber" id="stat-err">\d+<\/div><\/div>/,
  '<div class="stat-card"><div class="label">Domain Mismatch</div><div class="value amber" id="stat-err">29</div></div>'
);
html = html.replace(
  /<div class="stat-card"><div class="label">Marked OK<\/div><div class="value green" id="stat-403">\d+<\/div><\/div>/,
  '<div class="stat-card"><div class="label">Generic Tourism</div><div class="value amber" id="stat-403">59</div></div>'
);

// Filter buttons
const filterHtml = `<button class="filter-btn active" data-filter="all" onclick="filterBy('all',this)">All (96)</button>
        <button class="filter-btn" data-filter="blog/fan-site" onclick="filterBy('blog/fan-site',this)">Blog/Fan (8)</button>
        <button class="filter-btn" data-filter="domain-mismatch" onclick="filterBy('domain-mismatch',this)">Domain Mismatch (29)</button>
        <button class="filter-btn" data-filter="generic-tourism" onclick="filterBy('generic-tourism',this)">Generic Tourism (59)</button>`;
html = html.replace(/<button class="filter-btn[^>]*>[\s\S]*?<\/button>(?:\s*<button class="filter-btn[^>]*>[\s\S]*?<\/button>)*/, filterHtml);

// Fix filter logic to match on type (reason) field
html = html.replace(
  /const show = currentFilter === 'all'[\s\S]*?if \(!show\) return;/,
  `const show = currentFilter === 'all' || link.type === currentFilter || link.error.includes(currentFilter);\n    if (!show) return;`
);

fs.writeFileSync(__dirname + '/dashboard-broken-links.html', html);
console.log('Done - 96 suspicious links loaded');
