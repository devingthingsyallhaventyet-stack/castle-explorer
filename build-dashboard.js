const fs = require('fs');
const vm = require('vm');
const d = fs.readFileSync(__dirname + '/data.js', 'utf8').replace(/\bconst\b/g, 'var');
const ctx = {};
vm.runInNewContext(d, ctx);
const C = ctx.CASTLES.filter(c => c && c.name);

const progress = JSON.parse(fs.readFileSync(__dirname + '/enrichment-progress.json', 'utf8'));
const completed = new Set(progress.completed);

const CINEMATIC = new Set([
  'Alnwick Castle','Bamburgh Castle','Blarney Castle','Blenheim Palace','Caernarfon Castle',
  'Canterbury Cathedral','Cardiff Castle','Castle Howard','Chatsworth House','Conwy Castle',
  'Corfe Castle','Dover Castle','Dunnottar Castle','Durham Cathedral','Edinburgh Castle',
  'Eilean Donan Castle','Fountains Abbey','Hampton Court Palace','Kilkenny Castle','Leeds Castle',
  'Rock of Cashel','Stirling Castle','Tower of London','Warwick Castle','Windsor Castle'
]);

function slug(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

const sites = C.map(c => {
  const isCinematic = CINEMATIC.has(c.name);
  const isEnriched = completed.has(c.name) || isCinematic;
  return { name: c.name, slug: slug(c.name), type: c.type, country: c.country, enriched: isEnriched, cinematic: isCinematic };
}).sort((a, b) => a.name.localeCompare(b.name));

const enrichedCount = sites.filter(s => s.enriched).length;
const total = sites.length;
const pct = ((enrichedCount / total) * 100).toFixed(1);

const countries = [...new Set(sites.map(s => s.country))].sort();
const countryOptions = countries.map(c => `<option value="${c}">${c}</option>`).join('');

const rows = sites.map((s, i) => {
  let badge, statusData;
  if (s.cinematic) { badge = '<span class="badge cinematic">✨ Cinematic</span>'; statusData = 'cinematic'; }
  else if (s.enriched) { badge = '<span class="badge enriched">✅ Enriched</span>'; statusData = 'enriched'; }
  else { badge = '<span class="badge not-enriched">❌ Not Yet</span>'; statusData = 'not'; }
  const eName = s.name.replace(/'/g, "\\'").replace(/"/g, '&quot;');
  return `<tr data-name="${s.name.toLowerCase()}" data-realname="${eName}" data-status="${statusData}" data-country="${s.country}">
    <td class="num">${i + 1}</td>
    <td class="del-cell"><button class="del-btn" onclick="markDelete(this)" title="Mark for deletion">✕</button></td>
    <td><a href="site/${s.slug}.html" target="_blank">${s.name}</a></td>
    <td>${s.type}</td>
    <td>${s.country}</td>
    <td>${badge}</td>
  </tr>`;
}).join('\n');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Dashboard — castlecore</title>
<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #f5f5f5; color: #333; padding: 20px; max-width: 1200px; margin: 0 auto; }
h1 { font-size: 1.5rem; margin-bottom: 4px; }
.stats { color: #666; margin-bottom: 16px; font-size: .9rem; }
.bar { height: 8px; background: #e0e0e0; border-radius: 4px; margin-bottom: 20px; overflow: hidden; }
.bar-fill { height: 100%; background: #2e8b57; border-radius: 4px; transition: width .3s; }
.filters { margin-bottom: 16px; display: flex; gap: 8px; flex-wrap: wrap; align-items: center; }
.filters input { padding: 6px 10px; border: 1px solid #ccc; border-radius: 4px; font-size: .85rem; width: 260px; }
.filters select { padding: 6px 10px; border: 1px solid #ccc; border-radius: 4px; font-size: .85rem; }
table { width: 100%; border-collapse: collapse; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,.1); }
th { text-align: left; padding: 10px 12px; background: #8b2335; color: #fff; font-size: .8rem; text-transform: uppercase; letter-spacing: .5px; position: sticky; top: 0; z-index: 10; }
td { padding: 8px 12px; border-bottom: 1px solid #eee; font-size: .85rem; }
tr:hover td { background: #fafafa; }
a { color: #8b2335; text-decoration: none; }
a:hover { text-decoration: underline; }
.badge { display: inline-block; padding: 2px 8px; border-radius: 10px; font-size: .75rem; font-weight: 600; }
.enriched { background: #d4edda; color: #155724; }
.not-enriched { background: #f8d7da; color: #721c24; }
.cinematic { background: #d4e6f1; color: #1a5276; }
.visible-count { font-size: .8rem; color: #999; margin-bottom: 8px; }

/* Delete button */
.del-cell { width: 36px; text-align: center; }
.del-btn { background: none; border: 1px solid #ddd; color: #999; width: 28px; height: 28px; border-radius: 50%; cursor: pointer; font-size: .8rem; line-height: 1; transition: all .15s; }
.del-btn:hover { background: #f8d7da; border-color: #c0392b; color: #c0392b; }
tr.marked-delete td { background: #fce4e4; text-decoration: line-through; color: #999; }
tr.marked-delete .del-btn { background: #c0392b; color: #fff; border-color: #c0392b; }
tr.marked-delete a { color: #999; }

/* Delete queue banner */
.delete-banner { display: none; position: fixed; bottom: 0; left: 0; right: 0; background: #8b2335; color: #fff; padding: 12px 20px; z-index: 100; font-size: .9rem; box-shadow: 0 -2px 8px rgba(0,0,0,.2); }
.delete-banner.active { display: flex; align-items: center; justify-content: space-between; }
.delete-banner button { background: #fff; color: #8b2335; border: none; padding: 8px 16px; border-radius: 4px; font-weight: 600; cursor: pointer; font-size: .85rem; margin-left: 8px; }
.delete-banner button:hover { background: #f0ebe0; }
.delete-banner .undo-btn { background: transparent; color: #fff; border: 1px solid rgba(255,255,255,.5); }
.delete-banner .undo-btn:hover { background: rgba(255,255,255,.15); }
.copy-toast { position: fixed; bottom: 80px; left: 50%; transform: translateX(-50%); background: #333; color: #fff; padding: 8px 20px; border-radius: 6px; font-size: .85rem; display: none; z-index: 200; }
</style>
</head>
<body>
<h1>🦞 castlecore Dashboard</h1>
<div class="stats">
  ${total} sites &middot;
  <span style="color:#2e8b57;font-weight:600">${enrichedCount} enriched (${pct}%)</span> &middot;
  <span style="color:#c0392b">${total - enrichedCount} remaining</span>
</div>
<div class="bar"><div class="bar-fill" style="width:${pct}%"></div></div>

<div class="filters">
  <input type="text" id="search" placeholder="Search by name..." oninput="filterRows()">
  <select id="statusFilter" onchange="filterRows()">
    <option value="all">All Statuses</option>
    <option value="enriched">Enriched</option>
    <option value="cinematic">Cinematic</option>
    <option value="not">Not Enriched</option>
    <option value="marked">Marked for Deletion</option>
  </select>
  <select id="countryFilter" onchange="filterRows()">
    <option value="all">All Countries</option>
    ${countryOptions}
  </select>
</div>

<div class="visible-count" id="visibleCount">Showing ${total} of ${total}</div>

<table>
<thead><tr><th>#</th><th></th><th>Name</th><th>Type</th><th>Country</th><th>Status</th></tr></thead>
<tbody>
${rows}
</tbody>
</table>

<div class="delete-banner" id="deleteBanner">
  <span id="deleteCount">0 marked for deletion</span>
  <div>
    <button class="undo-btn" onclick="undoAll()">Undo All</button>
    <button onclick="copyList()">📋 Copy List</button>
  </div>
</div>

<div class="copy-toast" id="toast">Copied to clipboard!</div>

<script>
var deleteSet = JSON.parse(localStorage.getItem('cc_delete') || '[]');

// Restore saved state
(function() {
  if (!deleteSet.length) return;
  var rows = document.querySelectorAll('tbody tr');
  rows.forEach(function(r) {
    var name = r.dataset.realname;
    if (deleteSet.indexOf(name) >= 0) r.classList.add('marked-delete');
  });
  updateBanner();
})();

function markDelete(btn) {
  var row = btn.closest('tr');
  var name = row.dataset.realname;
  if (row.classList.contains('marked-delete')) {
    row.classList.remove('marked-delete');
    deleteSet = deleteSet.filter(function(n) { return n !== name; });
  } else {
    row.classList.add('marked-delete');
    if (deleteSet.indexOf(name) < 0) deleteSet.push(name);
  }
  localStorage.setItem('cc_delete', JSON.stringify(deleteSet));
  updateBanner();
}

function updateBanner() {
  var banner = document.getElementById('deleteBanner');
  var count = document.getElementById('deleteCount');
  if (deleteSet.length > 0) {
    banner.classList.add('active');
    count.textContent = deleteSet.length + ' marked for deletion';
  } else {
    banner.classList.remove('active');
  }
}

function undoAll() {
  deleteSet = [];
  localStorage.setItem('cc_delete', '[]');
  document.querySelectorAll('tr.marked-delete').forEach(function(r) { r.classList.remove('marked-delete'); });
  updateBanner();
}

function copyList() {
  var text = deleteSet.join('\\n');
  navigator.clipboard.writeText(text).then(function() {
    var toast = document.getElementById('toast');
    toast.style.display = 'block';
    setTimeout(function() { toast.style.display = 'none'; }, 2000);
  });
}

function filterRows() {
  var q = document.getElementById('search').value.toLowerCase();
  var st = document.getElementById('statusFilter').value;
  var co = document.getElementById('countryFilter').value;
  var rows = document.querySelectorAll('tbody tr');
  var n = 0;
  rows.forEach(function(r) {
    var show = true;
    if (q && r.dataset.name.indexOf(q) < 0) show = false;
    if (st !== 'all') {
      if (st === 'enriched' && r.dataset.status !== 'enriched' && r.dataset.status !== 'cinematic') show = false;
      if (st === 'cinematic' && r.dataset.status !== 'cinematic') show = false;
      if (st === 'not' && r.dataset.status !== 'not') show = false;
      if (st === 'marked' && !r.classList.contains('marked-delete')) show = false;
    }
    if (co !== 'all' && r.dataset.country !== co) show = false;
    r.style.display = show ? '' : 'none';
    if (show) { n++; r.querySelector('.num').textContent = n; }
  });
  document.getElementById('visibleCount').textContent = 'Showing ' + n + ' of ' + ${total};
}
</script>
</body>
</html>`;

fs.writeFileSync(__dirname + '/dashboard.html', html, 'utf8');
console.log(`Dashboard: ${total} sites, ${enrichedCount} enriched (${pct}%), ${total - enrichedCount} remaining`);
