const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'scotland');

// === 1. HIGHLANDS — add Orkney/Shetland, remove Moray, rename ===
let highlands = fs.readFileSync(path.join(dir, 'highlands.html'), 'utf8');

// Update county filter
highlands = highlands.replace(
  "const \nHC=['Highland','Inverness','Ross','Sutherland','Caithness','Skye','Lochaber','Moray','Nairn','Badenoch'];",
  "const \nHC=['Highland','Inverness','Ross','Sutherland','Caithness','Skye','Lochaber','Nairn','Badenoch','Orkney','Shetland'];"
);

// Update title tag
highlands = highlands.replace(
  /Castles in the Scottish Highlands/g,
  'Castles in the Highlands & Northern Isles'
);
highlands = highlands.replace(
  /The Scottish Highlands<\/h1>/,
  'Highlands & Northern Isles</h1>'
);

// Update breadcrumb
highlands = highlands.replace(
  /Scotland<\/a> \/ Highlands/,
  'Scotland</a> / Highlands & Northern Isles'
);

// Update county bar
highlands = highlands.replace(
  'Highland · Inverness · Ross · Sutherland · Caithness · Skye · Lochaber · Moray · Nairn · Badenoch',
  'Highland · Inverness · Ross · Sutherland · Caithness · Skye · Lochaber · Nairn · Badenoch · Orkney · Shetland'
);

// Update meta descriptions
highlands = highlands.replace(/Scottish Highlands/g, 'Highlands & Northern Isles');

fs.writeFileSync(path.join(dir, 'highlands.html'), highlands, 'utf8');
console.log('✅ Highlands updated');


// === 2. ABERDEEN — add Moray, rename to Northeast & Tayside ===
let aberdeen = fs.readFileSync(path.join(dir, 'northeast-tayside.html'), 'utf8');

// Update county filter
aberdeen = aberdeen.replace(
  "const AC=['Aberdeenshire','Angus','Dundee'];",
  "const AC=['Aberdeenshire','Moray','Angus','Dundee'];"
);

// Update titles
aberdeen = aberdeen.replace(/Aberdeen & Northeast/g, 'Northeast & Tayside');
aberdeen = aberdeen.replace(/Aberdeen &amp; Northeast/g, 'Northeast &amp; Tayside');

// Update h1
aberdeen = aberdeen.replace(/Aberdeen &amp; the Northeast/g, 'Northeast &amp; Tayside');
aberdeen = aberdeen.replace(/Aberdeen & the Northeast/g, 'Northeast & Tayside');

// Breadcrumb
aberdeen = aberdeen.replace(/Scotland<\/a> \/ Aberdeen/g, 'Scotland</a> / Northeast & Tayside');

fs.writeFileSync(path.join(dir, 'northeast-tayside.html'), aberdeen, 'utf8');
console.log('✅ Aberdeen → Northeast & Tayside updated');


// === 3. ARGYLL — remove Orkney/Shetland, rename ===
let argyll = fs.readFileSync(path.join(dir, 'argyll-western-isles.html'), 'utf8');

// Update county filter
argyll = argyll.replace(
  "const AC=['Argyll and Bute','Na h-Eileanan Siar','Western Isles','Orkney','Shetland'];",
  "const AC=['Argyll and Bute','Na h-Eileanan Siar','Western Isles'];"
);

// Update titles
argyll = argyll.replace(/Argyll & the Islands/g, 'Argyll & Western Isles');
argyll = argyll.replace(/Argyll &amp; the Islands/g, 'Argyll &amp; Western Isles');
argyll = argyll.replace(/Argyll & Islands/g, 'Argyll & Western Isles');
argyll = argyll.replace(/Argyll &amp; Islands/g, 'Argyll &amp; Western Isles');

// Breadcrumb
argyll = argyll.replace(/Scotland<\/a> \/ Argyll/g, 'Scotland</a> / Argyll & Western Isles');

fs.writeFileSync(path.join(dir, 'argyll-western-isles.html'), argyll, 'utf8');
console.log('✅ Argyll → Argyll & Western Isles updated');


// === 4. DUMFRIES — rename to Southwest Scotland ===
let dumfries = fs.readFileSync(path.join(dir, 'southwest-scotland.html'), 'utf8');

// Update titles
dumfries = dumfries.replace(/Dumfries & Galloway(?! region)/g, 'Southwest Scotland');
dumfries = dumfries.replace(/Dumfries &amp; Galloway/g, 'Southwest Scotland');

// Breadcrumb
dumfries = dumfries.replace(/Scotland<\/a> \/ Dumfries/g, 'Scotland</a> / Southwest Scotland');

fs.writeFileSync(path.join(dir, 'southwest-scotland.html'), dumfries, 'utf8');
console.log('✅ Dumfries → Southwest Scotland updated');

console.log('\nDone! All 4 pages updated.');
