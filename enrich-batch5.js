const fs = require('fs');
let src = fs.readFileSync('data.js', 'utf8');

const updates = [
  {
    name: "Ballindalloch Castle",
    description: "The 'Pearl of the North' — a lived-in 16th-century castle in the heart of Speyside whisky country, where Aberdeen Angus cattle graze beneath baronial turrets.",
    history: "Built in 1546 and continuously inhabited by the Macpherson-Grant family ever since. Known as the 'Pearl of the North', it sits at the confluence of the Rivers Spey and Avon in prime whisky country. The castle was extended over centuries with baronial additions. Famous for its herd of Aberdeen Angus cattle and stunning formal gardens. Open to the public seasonally.",
    tags: ["well-preserved", "photogenic", "gardens", "riverside", "tearoom-cafe", "gift-shop", "guided-tours"],
    access: "paid",
    era: "16th century",
    sources: [{name: "Ballindalloch Castle", url: "https://www.ballindallochcastle.co.uk/"}, {name: "Visit Moray Speyside", url: "https://morayspeyside.com/visit/ballindalloch/"}]
  },
  {
    name: "Knowth Passage Tomb",
    description: "A 5,000-year-old Neolithic mound holding Europe's largest collection of megalithic art — older than the pyramids, with two mysterious passages aligned to the equinox sunrise and sunset.",
    history: "Built c. 3200 BC during the Neolithic era, part of the Brú na Bóinne UNESCO World Heritage complex alongside Newgrange and Dowth. Contains two passage tombs — eastern and western — within the Great Mound, surrounded by 17 smaller satellite tombs. Houses over one-third of all Western European megalithic art on its 127 decorated kerbstones. Used continuously through Bronze Age, Iron Age, and Early Christian periods.",
    tags: ["atmospheric", "prehistoric", "remote", "guided-tours", "museum"],
    access: "paid",
    era: "Neolithic (c. 3200 BC)",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Knowth"}, {name: "Knowth.com", url: "https://www.knowth.com/knowth.htm"}, {name: "Discover Ireland", url: "https://www.discoverireland.ie/meath/knowth-passage-tombs"}]
  },
  {
    name: "Stoneleigh Abbey",
    description: "A Cistercian abbey turned grand Baroque mansion where Jane Austen found inspiration for Mansfield Park — Humphry Repton gardens and 700 years of aristocratic drama.",
    history: "Founded as a Cistercian monastery in 1154, converted to a grand family home after the Dissolution. The Leigh family held it for centuries, hosting Charles I and Queen Victoria. Jane Austen visited in 1806 and wove descriptions of the interiors and grounds into Mansfield Park. Gardens improved by Humphry Repton. Features a magnificent Baroque west wing added in the 1720s.",
    tags: ["well-preserved", "gardens", "riverside", "guided-tours", "tearoom-cafe", "wedding-venue"],
    access: "paid",
    era: "12th-18th century",
    sources: [{name: "Stoneleigh Abbey", url: "https://www.stoneleighabbey.org/about-us/jane-austen"}, {name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Stoneleigh_Abbey"}, {name: "Historic Houses", url: "https://www.historichouses.org/house/stoneleigh-abbey/visit/"}]
  },
  {
    name: "Clevedon Court",
    description: "A rare 14th-century manor house with terraced gardens cascading down a Somerset hillside — where Thackeray wrote and the Elton family collected Nailsea glass for 300 years.",
    history: "Built in 1320 by the de Clyvedon family, one of England's best-preserved 14th-century manor houses. Purchased by Abraham Elton in 1709, whose descendants lived here for three centuries. William Makepeace Thackeray visited and used it as inspiration for 'Castlewood' in his novel Henry Esmond. Features an important collection of Nailsea glass and Eltonware pottery. National Trust since 1961.",
    tags: ["well-preserved", "atmospheric", "gardens", "medieval", "tearoom-cafe", "guided-tours"],
    access: "paid",
    era: "14th century",
    sources: [{name: "National Trust", url: "https://www.nationaltrust.org.uk/visit/bath-bristol/clevedon-court"}, {name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Clevedon_Court"}]
  },
  {
    name: "Brecon Cathedral",
    description: "A 900-year-old sanctuary in the Brecon Beacons — built on a Celtic holy site by Norman conquerors, with a golden rood screen and centuries of Welsh devotion soaked into ancient stone.",
    history: "Built on the site of an earlier Celtic church, the new church was ordered by Bernard de Neufmarché, the Norman knight who conquered the kingdom of Brycheiniog, c. 1093. Originally a Benedictine priory. A magnificent 'golden rood' screen was erected in the 15th century. Restored in the Victorian era by Sir George Gilbert Scott. Elevated to cathedral status in 1923 as the seat of the Diocese of Swansea and Brecon.",
    tags: ["well-preserved", "atmospheric", "medieval", "norman", "free-entry"],
    access: "free",
    era: "11th century onwards",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Brecon_Cathedral"}, {name: "Brecon Cathedral", url: "https://www.breconcathedral.org.uk/"}, {name: "Visit Wales", url: "https://www.visitwales.com/attraction/historic-site/brecon-cathedral-530021"}]
  },
  {
    name: "Caerwent Roman Town",
    description: "The best-preserved Roman town walls in Britain — a miniature Rome where the fierce Silures tribe settled into civilised life with temples, baths, and central heating.",
    history: "Founded as Venta Silurum, the market town of the Silures — the fierce Celtic tribe that resisted Roman conquest for decades. The town walls, standing up to 5 metres high, are the best-preserved in Britain. Within the walls stood a forum, basilica, temple, baths, and private houses with hypocaust heating. A purely civilian settlement with no military garrison. Managed by Cadw.",
    tags: ["well-preserved", "atmospheric", "prehistoric", "free-entry", "dog-friendly"],
    access: "free",
    era: "Roman (1st-5th century)",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Caerwent"}, {name: "Britain Express", url: "https://www.britainexpress.com/attractions.htm?attraction=810"}]
  },
  {
    name: "Landguard Fort",
    description: "A maze of tunnels and bastions guarding the mouth of the Orwell — where the last opposed seaborne invasion of England was repelled and 500 years of coastal defence unfold.",
    history: "First fortified in 1540 with earthworks, the site has been continuously developed through every major conflict. The 1667 Battle of Landguard saw the last opposed seaborne invasion of England repelled here against a Dutch fleet. Rebuilt and expanded through Napoleonic wars, WWI, and WWII. Features a labyrinth of rooms, passages, and gun emplacements. Managed by English Heritage.",
    tags: ["atmospheric", "coastal", "museum", "guided-tours", "kid-friendly"],
    access: "paid",
    era: "16th-20th century",
    sources: [{name: "English Heritage", url: "https://www.english-heritage.org.uk/visit/places/landguard-fort/"}, {name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Landguard_Fort"}, {name: "Landguard", url: "https://landguard.com/"}]
  },
  {
    name: "Bradford-on-Avon Tithe Barn",
    description: "One of England's largest and finest medieval barns — a cathedral of agriculture built for the richest nunnery in the land, its massive stone walls and timber roof still perfectly intact.",
    history: "Built c. 1340 to serve Barton Grange, a manor farm belonging to Shaftesbury Abbey — the richest nunnery in medieval England. One of the largest medieval barns in England at 168 feet long. Features a magnificent cruck roof structure and two projecting gabled porches. A granary dating to c. 1400 stands alongside. Managed by English Heritage.",
    tags: ["well-preserved", "photogenic", "atmospheric", "medieval", "free-entry"],
    access: "free",
    era: "14th century (c. 1340)",
    sources: [{name: "English Heritage", url: "https://www.english-heritage.org.uk/visit/places/bradford-on-avon-tithe-barn/history/"}, {name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Bradford-on-Avon_Tithe_Barn"}]
  },
  {
    name: "Hardknott Roman Fort",
    description: "The most dramatically sited Roman fort in Britain — perched on a wild Lakeland mountain pass with sweeping views to the sea, its parade ground and bathhouse still visible after 1,900 years.",
    history: "Built early in the reign of Emperor Hadrian (AD 117-138) to guard the road connecting the Cumbrian coast with the heart of the Lake District. Known in Roman times as Mediobogdum. The remote, exposed location meant garrison life was harsh. Well-preserved remains include the headquarters building, commandant's house, bathhouse, and a levelled parade ground. One of England's most spectacularly located ancient monuments.",
    tags: ["atmospheric", "remote", "hilltop", "free-entry", "prehistoric", "dog-friendly", "photogenic"],
    access: "free",
    era: "Roman (2nd century)",
    sources: [{name: "English Heritage", url: "https://www.english-heritage.org.uk/visit/places/hardknott-roman-fort/"}, {name: "English Heritage History", url: "https://www.english-heritage.org.uk/visit/places/hardknott-roman-fort/history/"}]
  },
  {
    name: "Segedunum Roman Fort",
    description: "Where Hadrian's Wall begins — the easternmost fort on Rome's greatest frontier, now the most excavated site on the entire Wall with a 35-metre viewing tower.",
    history: "Built c. AD 127 at the eastern terminus of Hadrian's Wall, guarding the mouth of the River Tyne. An extension to the Wall built five years after the main construction. In use for approximately 300 years until nearly AD 400. The most thoroughly excavated fort along the entire Wall. Features a reconstructed bathhouse, museum, and a 35-metre viewing tower offering panoramic views. UNESCO World Heritage site.",
    tags: ["well-preserved", "museum", "kid-friendly", "coastal", "guided-tours"],
    access: "paid",
    era: "Roman (2nd century)",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Segedunum"}, {name: "North East Museums", url: "https://www.northeastmuseums.org.uk/segedunum"}]
  }
];

function findCastleBlock(source, name) {
  const nameStr = '"name": "' + name + '"';
  const pos = source.indexOf(nameStr);
  if (pos === -1) return null;
  let depth = 0, start = pos;
  for (let i = pos; i >= 0; i--) { if (source[i] === '}') depth++; if (source[i] === '{') { if (depth === 0) { start = i; break; } depth--; } }
  depth = 0; let end = pos;
  for (let i = start; i < source.length; i++) { if (source[i] === '{') depth++; if (source[i] === '}') { depth--; if (depth === 0) { end = i + 1; break; } } }
  return { start, end, text: source.substring(start, end) };
}

function updateField(objText, field, value) {
  const serialized = JSON.stringify(value);
  const patterns = [
    new RegExp(`("${field}":\\s*)("(?:[^"\\\\]|\\\\.)*")`, 's'),
    new RegExp(`("${field}":\\s*)(\\[(?:[^\\[\\]]*|\\[(?:[^\\[\\]]*|\\[[^\\[\\]]*\\])*\\])*\\])`, 's'),
  ];
  for (const p of patterns) { const m = objText.match(p); if (m) return objText.replace(p, `$1${serialized}`); }
  const lastBrace = objText.lastIndexOf('}');
  const before = objText.substring(0, lastBrace).trimEnd();
  const needsComma = !before.endsWith(',') && !before.endsWith('{');
  return before + (needsComma ? ',' : '') + `\n    "${field}": ${serialized}` + '\n  }';
}

let count = 0;
for (const u of updates) {
  const block = findCastleBlock(src, u.name);
  if (!block) { console.log(`NOT FOUND: ${u.name}`); continue; }
  let newBlock = block.text;
  for (const f of ['description','history','tags','access','era','sources']) { if (u[f]) newBlock = updateField(newBlock, f, u[f]); }
  src = src.substring(0, block.start) + newBlock + src.substring(block.end);
  console.log(`Updated: ${u.name}`); count++;
}
fs.writeFileSync('data.js', src, 'utf8');
console.log(`\nWrote ${count} updates to data.js`);
