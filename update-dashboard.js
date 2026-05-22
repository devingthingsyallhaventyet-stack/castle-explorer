const fs = require('fs');
const broken = JSON.parse(fs.readFileSync('broken-links-result.json', 'utf8'));

// Generate JS array
const entries = broken.map(b =>
  `  {name:${JSON.stringify(b.name)},type:${JSON.stringify(b.type)},url:${JSON.stringify(b.url)},error:${JSON.stringify(b.error)}}`
).join(',\n');
const jsArray = `const BROKEN_LINKS = [\n${entries}\n];`;

let html = fs.readFileSync('dashboard-broken-links.html', 'utf8');

// Replace BROKEN_LINKS array
html = html.replace(/const BROKEN_LINKS = \[[\s\S]*?\];/, jsArray);

// Update stats
const e404 = broken.filter(b => b.error === '404').length;
const e403 = broken.filter(b => b.error === '403').length;
const eErr = broken.filter(b => ['ERR', 'TIMEOUT'].includes(b.error)).length;
const eOther = broken.length - e404 - e403 - eErr;

html = html.replace(/"badge-count">\d+/, `"badge-count">${broken.length}`);
html = html.replace(/"stat-total">\d+/, `"stat-total">${broken.length}`);
html = html.replace(/"stat-404">\d+/, `"stat-404">${e404}`);
html = html.replace(/"stat-err">\d+/, `"stat-err">${eErr}`);
html = html.replace(/"stat-403">\d+/, `"stat-403">${e403}`);

// Update filter buttons
const cadw = broken.filter(b => b.url.includes('cadw.gov.wales')).length;
const hie = broken.filter(b => b.url.includes('heritageireland.ie')).length;
const nts = broken.filter(b => b.url.includes('nts.org.uk')).length;
const kerry = broken.filter(b => b.url.includes('kerrytourism.ie')).length;
const nt = broken.filter(b => b.url.includes('nationaltrust.org.uk')).length;

const filterHtml = `<button class="filter-btn active" data-filter="all" onclick="filterBy('all',this)">All</button>
        <button class="filter-btn" data-filter="404" onclick="filterBy('404',this)">404 (${e404})</button>
        <button class="filter-btn" data-filter="ERR" onclick="filterBy('ERR',this)">ERR/Timeout (${eErr})</button>
        <button class="filter-btn" data-filter="403" onclick="filterBy('403',this)">403 (${e403})</button>
        <button class="filter-btn" data-filter="other" onclick="filterBy('other',this)">Other (${eOther})</button>
        <button class="filter-btn" data-filter="cadw.gov.wales" onclick="filterBy('cadw.gov.wales',this)">Cadw (${cadw})</button>
        <button class="filter-btn" data-filter="heritageireland.ie" onclick="filterBy('heritageireland.ie',this)">Heritage Ireland (${hie})</button>
        <button class="filter-btn" data-filter="nts.org.uk" onclick="filterBy('nts.org.uk',this)">NTS (${nts})</button>
        <button class="filter-btn" data-filter="kerrytourism.ie" onclick="filterBy('kerrytourism.ie',this)">Kerry Tourism (${kerry})</button>
        <button class="filter-btn" data-filter="nationaltrust.org.uk" onclick="filterBy('nationaltrust.org.uk',this)">National Trust (${nt})</button>`;

// Replace filter row content
html = html.replace(/<div class="filter-row">[\s\S]*?<\/div>\s*\n\s*<table>/, `<div class="filter-row">\n        ${filterHtml}\n      </div>\n\n      <table>`);

// Also update the ERR filter to match TIMEOUT too
html = html.replace(
  "|| link.url.includes(currentFilter);",
  "|| link.url.includes(currentFilter)\n      || (currentFilter === 'ERR' && link.error === 'TIMEOUT');"
);

fs.writeFileSync('dashboard-broken-links.html', html);

console.log(`Updated dashboard-broken-links.html`);
console.log(`Total: ${broken.length} | 404: ${e404} | 403: ${e403} | ERR/Timeout: ${eErr} | Other: ${eOther}`);
console.log(`Cadw: ${cadw} | Heritage IE: ${hie} | NTS: ${nts} | Kerry: ${kerry} | NT: ${nt}`);
