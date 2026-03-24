const fs = require('fs');
let src = fs.readFileSync('data.js', 'utf8');

const updates = [
  {
    name: "Guisborough Priory",
    description: "A soaring Gothic skeleton in the Tees Valley — the dramatic east end of this 14th-century church rises like a stone ghost against the Cleveland Hills.",
    history: "Founded in 1119 by Robert de Brus as an Augustinian priory. Destroyed by fire in 1289 and rebuilt with the magnificent east end that still stands. Dissolved in 1540 and its stonework was looted for centuries — you can spot priory stones in buildings throughout Guisborough. Managed by English Heritage. An outstanding example of early Gothic architecture.",
    tags: ["atmospheric", "ruins-romantic", "gothic", "free-entry", "medieval"],
    access: "free",
    era: "12th-14th century",
    sources: [{name: "English Heritage", url: "https://www.english-heritage.org.uk/visit/places/gisborough-priory/"}, {name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Gisborough_Priory"}]
  },
  {
    name: "Reading Abbey",
    description: "Where Henry I was buried and Jane Austen went to school — once one of England's mightiest monasteries, now romantic ruins in the heart of a modern town.",
    history: "Founded in 1121 by Henry I, youngest son of William the Conqueror, who was later buried before the high altar. Became one of the richest and most important monasteries in medieval England. Parliament met here several times. Dissolved in 1539, the last abbot was hanged, drawn, and quartered. The ruins later housed a school attended by young Jane Austen. Reopened to the public in 2018 after restoration.",
    tags: ["atmospheric", "ruins-romantic", "medieval", "free-entry", "gardens"],
    access: "free",
    era: "12th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Reading_Abbey"}, {name: "Reading Museum", url: "https://www.readingmuseum.org.uk/blog/short-history-reading-readings-royal-abbey"}]
  },
  {
    name: "Dunmore Pineapple",
    description: "Britain's most eccentric folly — a 14-metre stone pineapple crowning a Georgian walled garden, built by a Scottish earl with impeccable taste and questionable restraint.",
    history: "Built in 1761 as a summerhouse by the 4th Earl of Dunmore in the grounds of Dunmore Park. Considered one of the greatest architectural follies in the United Kingdom. The extraordinary pineapple cupola sits atop a classical portico and walled garden where real pineapples were once grown in heated pits. Now owned by the National Trust for Scotland and can be rented as a holiday cottage via the Landmark Trust.",
    tags: ["photogenic", "gardens", "remote", "atmospheric"],
    access: "free",
    era: "Georgian (1761)",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Dunmore_Pineapple"}, {name: "Britain Express", url: "https://www.britainexpress.com/attractions.htm?attraction=1172"}]
  },
  {
    name: "Callendar House",
    description: "A French château hiding behind the Antonine Wall — 600 years of Scottish history from Roman frontiers to Jacobite risings, all under one extravagant roof.",
    history: "Core dates to a 14th-century tower house, redesigned in the 19th century as a French Renaissance château with Scottish Baronial elements. Hosted Mary Queen of Scots, Cromwell, and Bonnie Prince Charlie. The Livingston family held it for centuries before forfeiture after the 1715 Jacobite rising. Sits adjacent to a section of the Antonine Wall, Rome's northernmost frontier. Now a museum and heritage centre.",
    tags: ["well-preserved", "museum", "gardens", "tearoom-cafe", "kid-friendly", "free-entry"],
    access: "free",
    era: "14th-19th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Callendar_House"}, {name: "Visit Scotland", url: "https://www.visitscotland.com/info/see-do/callendar-house-p254861"}]
  },
  {
    name: "Harvington Hall",
    description: "England's greatest survival of priest holes — seven secret hiding places where Catholic clergy risked death behind Elizabethan walls painted with rare medieval murals.",
    history: "An Elizabethan manor with more priest holes than any other house in England — seven in total, constructed after 1585 when it became illegal for Catholic priests to set foot in England. Built by Humphrey Pakington to shelter persecuted clergy. Contains a remarkable collection of rare Elizabethan wall paintings. Surrounded by a moat and set deep in the Worcestershire countryside.",
    tags: ["well-preserved", "atmospheric", "haunted", "medieval", "tudor", "gardens", "guided-tours", "tearoom-cafe"],
    access: "paid",
    era: "Elizabethan (16th century)",
    sources: [{name: "Harvington Hall", url: "https://harvingtonhall.co.uk/"}, {name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Harvington_Hall"}]
  },
  {
    name: "East Riddlesden Hall",
    description: "A dark-stoned Yorkshire manor with 1,400 years of history — from farming estate to Civil War flashpoint, it barely escaped demolition to become a National Trust treasure.",
    history: "With origins dating back over 1,400 years, this West Yorkshire manor was once a thriving farming estate. The current building dates largely to the 17th century. Nearly lost when the north wing was demolished in 1905. The Brigg brothers purchased the hall and handed it to the National Trust in 1934. Features a magnificent medieval tithe barn, one of the finest in northern England.",
    tags: ["well-preserved", "atmospheric", "gardens", "tearoom-cafe", "gift-shop", "kid-friendly", "medieval"],
    access: "paid",
    era: "17th century",
    sources: [{name: "National Trust", url: "https://www.nationaltrust.org.uk/visit/yorkshire/east-riddlesden-hall"}, {name: "National Trust History", url: "https://www.nationaltrust.org.uk/visit/yorkshire/east-riddlesden-hall/history-of-east-riddlesden-hall"}]
  },
  {
    name: "Torre Abbey",
    description: "Devon's best-preserved medieval monastery turned art gallery — 800 years of history from Premonstratensian canons to Agatha Christie's personal effects, steps from Torquay's seafront.",
    history: "Founded in 1196 as a monastery for Premonstratensian canons — the best-preserved medieval monastery in Devon and Cornwall. Converted to a country mansion after the Dissolution. The Cary family held it for centuries. Spanish Armada prisoners were held here in 1588. Now houses an art collection including works associated with Agatha Christie, who was born in Torquay. Reopened as a museum and gallery.",
    tags: ["well-preserved", "museum", "gardens", "coastal", "tearoom-cafe", "gift-shop", "medieval"],
    access: "paid",
    era: "12th century onwards",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Torre_Abbey"}, {name: "Torre Abbey", url: "https://www.torre-abbey.org.uk/"}]
  },
  {
    name: "Prideaux Place",
    description: "An Elizabethan gem presiding over Padstow harbour — 400 years of one family's history behind honey-stone walls with Strawberry Hill Gothic interiors and Camel Estuary views.",
    history: "Built in 1592 by Sir Nicholas Prideaux, a distinguished lawyer, and home to the Prideaux family for over 400 years — one of the West Country's oldest continuously inhabited houses. Features Strawberry Hill Gothic interiors added in the 18th century. Used as a filming location for numerous productions. Overlooks the fishing port of Padstow with views across the Camel Estuary.",
    tags: ["well-preserved", "photogenic", "gardens", "coastal", "filming-location", "guided-tours", "tudor"],
    access: "paid",
    era: "Elizabethan (1592)",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Prideaux_Place"}, {name: "Visit Cornwall", url: "https://www.visitcornwall.com/things-to-do/history-and-heritage/prideaux-place"}, {name: "Prideaux Place", url: "https://prideauxplace.co.uk/history/"}]
  },
  {
    name: "Michelham Priory",
    description: "England's longest medieval moat encircles this 13th-century Augustinian priory — a tranquil Sussex oasis where monks, Tudor wreckers, evacuees, and Canadian soldiers all left their mark.",
    history: "Founded in 1229 by Gilbert de l'Aigle (de Aquila), descendant of loyal supporters of William the Conqueror. The Augustinian canons built what became one of Sussex's wealthiest religious houses. Dissolved under Henry VIII, then converted to a Tudor farmhouse. During WWII, housed evacuees and served as a base for the Canadian Army. Now run by Sussex Past as a museum with England's longest medieval water-filled moat.",
    tags: ["well-preserved", "atmospheric", "gardens", "museum", "medieval", "tearoom-cafe", "kid-friendly"],
    access: "paid",
    era: "13th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Michelham_Priory"}, {name: "Sussex Past", url: "https://sussexpast.co.uk/attraction/michelham-priory/"}]
  },
  {
    name: "Broughton Castle",
    description: "A perfectly moated medieval manor where three streams meet — home to the same family since 1377 and a secret meeting place for the architects of the English Civil War.",
    history: "Built in 1300 by Sir John de Broughton where three streams create a natural moat. Sold in 1377 to William of Wykeham, Bishop of Winchester — the same family (now Lords Saye and Sele) has held it ever since. In the 1630s, the 8th Lord Saye and Sele hosted secret meetings here to plan opposition to Charles I, effectively plotting the English Civil War. A stunning, lived-in medieval and Elizabethan house.",
    tags: ["well-preserved", "photogenic", "romantic", "gardens", "medieval", "guided-tours", "filming-location"],
    access: "paid",
    era: "14th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Broughton_Castle"}, {name: "Broughton Castle", url: "https://www.broughtoncastle.com/"}]
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
