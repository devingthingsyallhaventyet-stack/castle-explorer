const fs = require('fs');
let src = fs.readFileSync('data.js', 'utf8');

const updates = [
  {
    name: "Boscobel House",
    description: "The timber-framed safe house where Charles II hid in an oak tree from Cromwell's soldiers — a thrilling escape story frozen in Shropshire countryside.",
    history: "Built c. 1632 as a hunting lodge by John Giffard. In 1651, after the Battle of Worcester, Charles II hid here with Royalist Major William Careless — spending an entire day concealed in a nearby oak tree while Roundhead patrols searched below. This 'Royal Oak' became a symbol of the monarchy. Managed by English Heritage.",
    tags: ["well-preserved", "atmospheric", "gardens", "guided-tours", "gift-shop", "museum", "tudor"],
    access: "paid",
    era: "17th century",
    sources: [
      {name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Boscobel_House"},
      {name: "English Heritage", url: "https://www.english-heritage.org.uk/visit/places/boscobel-house-and-the-royal-oak/"}
    ]
  },
  {
    name: "Barrington Court",
    description: "A honey-stone Tudor manor in the Somerset lowlands, rescued from ruin and reborn with Gertrude Jekyll gardens — the National Trust's very first country house acquisition.",
    history: "Built c. 1538 by the Earl of Bridgwater, this near-perfect Elizabethan E-plan house fell into disrepair and was used as a farmhouse for centuries. Became the National Trust's first major country house acquisition in 1907. Restored by Colonel Arthur Lyle in the 1920s, who filled it with architectural salvage. Gardens designed by Gertrude Jekyll.",
    tags: ["well-preserved", "photogenic", "gardens", "tearoom-cafe", "gift-shop", "tudor"],
    access: "paid",
    era: "16th century",
    sources: [
      {name: "National Trust", url: "https://www.nationaltrust.org.uk/visit/somerset/barrington-court"},
      {name: "National Trust History", url: "https://www.nationaltrust.org.uk/visit/somerset/barrington-court/history-of-barrington-court"},
      {name: "Britain Express", url: "https://www.britainexpress.com/counties/somerset/gardens/Barrington-Court.htm"}
    ]
  },
  {
    name: "Pluscarden Abbey",
    description: "A living Benedictine monastery in a secret Moray glen — monks still chant Gregorian plainsong in the same stone walls King Alexander II raised in 1230.",
    history: "Founded in 1230 by King Alexander II for the Valliscaulian Order, one of only three such monasteries in Scotland. Merged with nearby Urquhart Priory in 1454 and became Benedictine. Fell into ruin after the Reformation but was gifted to the Benedictines in 1943 and painstakingly restored by the monks themselves. The only medieval British monastery still used for its original purpose.",
    tags: ["well-preserved", "atmospheric", "remote", "gardens", "free-entry", "medieval", "gift-shop"],
    access: "free",
    era: "13th century",
    sources: [
      {name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Pluscarden_Abbey"},
      {name: "Pluscarden Abbey", url: "https://www.pluscardenabbey.org/"},
      {name: "Pluscarden Abbey History", url: "https://www.pluscardenabbey.org/history"}
    ]
  },
  {
    name: "Lews Castle",
    description: "A brooding Victorian pile overlooking Stornoway harbour — built with opium trade fortune, gifted to the people, and now reborn as a museum of Hebridean heritage.",
    history: "Built 1844-51 for Sir James Matheson, who purchased the entire Isle of Lewis with wealth from the Chinese opium trade. Set in 600 acres of woodland — remarkable for the treeless Hebrides. Lord Leverhulme gifted it to the people of Stornoway in 1923. Served as a WWII hospital, then fell into disrepair. Restored and reopened in 2016 as Museum nan Eilean.",
    tags: ["well-preserved", "photogenic", "museum", "gardens", "woodland", "coastal", "tearoom-cafe", "gift-shop"],
    access: "free",
    era: "Victorian (19th century)",
    sources: [
      {name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Lews_Castle"},
      {name: "Western Isles Info", url: "https://www.westernisles.info/directory/sightseeing-history/lews-castle/"},
      {name: "Lews Castle", url: "https://www.lews-castle.co.uk/"}
    ]
  },
  {
    name: "Grimsthorpe Castle",
    description: "Where medieval fortress meets Vanbrugh grandeur — a 3,000-acre Capability Brown parkland concealing one of Lincolnshire's most dramatic and least-known great houses.",
    history: "Of 13th-century origin, granted by Henry VIII to William, 10th Baron Willoughby de Eresby in 1516. The spectacular north front was designed by Sir John Vanbrugh in 1722 — his last commission. Park landscaped by Capability Brown in 1771. Home to the Willoughby de Eresby family for over 500 years. Features state rooms, gardens, and a 3,000-acre deer park.",
    tags: ["well-preserved", "photogenic", "gardens", "guided-tours", "gift-shop", "tearoom-cafe", "kid-friendly", "events-venue"],
    access: "paid",
    era: "13th-18th century",
    sources: [
      {name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Grimsthorpe_Castle"},
      {name: "Lincolnshire Life", url: "https://www.lincolnshirelife.co.uk/heritage/grimsthorpe-castle/"}
    ]
  },
  {
    name: "Ardgillan Castle",
    description: "A Georgian gem perched on Dublin's coastline with 194 acres of rose gardens, rolling parkland, and sweeping views across the Irish Sea to the Mountains of Mourne.",
    history: "Built on land named 'Ard Choill' (High Wood) in Irish. The Taylor family (later Taylour) made it their home for over 200 years from the mid-18th century. The Down Survey of 1658 records it owned by wine merchant Robert Usher. Sold to German industrialist Heinrich Potts in 1962, then acquired by Fingal County Council in 1982 and opened as a public park.",
    tags: ["well-preserved", "photogenic", "gardens", "coastal", "tearoom-cafe", "kid-friendly", "dog-friendly", "free-entry"],
    access: "free",
    era: "Georgian (18th century)",
    sources: [
      {name: "Ardgillan Castle", url: "https://ardgillancastle.ie/"},
      {name: "Irish Historic Houses", url: "https://irishhistorichouses.com/tag/ardgillan-castle-dublin/"},
      {name: "Ardgillan History", url: "https://ardgillancastle.ie/the-castle/a-brief-history/"}
    ]
  },
  {
    name: "Newark Castle (Nottinghamshire)",
    description: "A mighty riverside ruin where King John drew his last breath — its gatehouse is the finest surviving example in all of England, standing sentinel over 900 years of drama.",
    history: "Founded in the 12th century by the Bishop of Lincoln. King John died here in 1216, reportedly from dysentery after losing the Crown Jewels in the Wash. Rebuilt in the late 13th/early 14th century, then restored as an aristocratic residence c. 1587. Endured three sieges during the English Civil War before being slighted in 1646. Grade I listed.",
    tags: ["atmospheric", "ruins-romantic", "riverside", "free-entry", "medieval", "norman", "museum"],
    access: "free",
    era: "12th-17th century",
    sources: [
      {name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Newark_Castle,_Nottinghamshire"},
      {name: "Historic England", url: "https://historicengland.org.uk/listing/the-list/list-entry/1003474"},
      {name: "Visit Nottinghamshire", url: "https://www.visit-nottinghamshire.co.uk/things-to-do/newark-castle-and-gardens-p354211"}
    ]
  },
  {
    name: "Kinnitty Castle",
    description: "A Gothic Revival castle at the foot of the Slieve Bloom Mountains where Norman invaders, Gaelic chieftains, and ghosts of monks have left centuries of turbulent Irish history.",
    history: "The first castle was destroyed in 1209 during the Norman invasion and rebuilt in 1213. An Augustinian abbey (St Finnian's) was established nearby, leaving a High Cross that still survives. Later held by the O'Carroll clan of Éile. The current Gothic Revival castle dates from the 19th century, built on the medieval foundations. Now operates as a hotel, reputedly one of Ireland's most haunted.",
    tags: ["atmospheric", "haunted", "gothic", "woodland", "romantic", "wedding-venue", "tearoom-cafe"],
    access: "paid",
    era: "13th-19th century",
    sources: [
      {name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Kinnitty_Castle"},
      {name: "Slieve Bloom", url: "https://slievebloom.ie/visit/kinnitty-castle/"}
    ]
  },
  {
    name: "Gwydir Castle",
    description: "A haunted Tudor manor in the Conwy Valley where peacocks strut through ancient gardens and a thousand-year-old yew tree guards secrets of the powerful Wynn dynasty.",
    history: "One of the finest Tudor houses in Wales, ancestral home of the powerful Wynn family. Features a 'Lovers Tree' yew estimated at 600-1,000 years old. King Charles I visited in 1645 as guest of Sir Richard Wynn. Contains a remarkable 1640s dining room that was sold to William Randolph Hearst in 1921, returned from the Metropolitan Museum of Art in the 1990s and reinstalled. Reputedly one of the most haunted houses in Wales.",
    tags: ["atmospheric", "haunted", "photogenic", "gardens", "guided-tours", "tudor", "romantic"],
    access: "paid",
    era: "15th-16th century",
    sources: [
      {name: "Gwydir Castle", url: "https://www.gwydircastle.co.uk/"},
      {name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Gwydir_Castle"},
      {name: "Gwydir Castle History", url: "https://www.gwydircastle.co.uk/history/"}
    ]
  },
  {
    name: "Ruthven Barracks",
    description: "Stark Georgian barracks rising from a Highland mound — built to crush the Jacobites, then burned by the very rebels it was meant to suppress after Culloden.",
    history: "Built in 1719 on an ancient castle mound after the 1715 Jacobite rising, one of four government barracks to maintain order in the Highlands. Successfully defended against a Jacobite attack in 1745 by just 12 soldiers. After Culloden in 1746, defeated Jacobite forces gathered here expecting orders from Bonnie Prince Charlie — instead receiving word to scatter. They burned the barracks before dispersing.",
    tags: ["atmospheric", "ruins-romantic", "hilltop", "free-entry", "remote", "photogenic", "dark-brooding"],
    access: "free",
    era: "18th century",
    sources: [
      {name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Ruthven_Barracks"},
      {name: "Historic Environment Scotland", url: "https://www.historicenvironment.scot/visit-a-place/places/ruthven-barracks/"}
    ]
  },
  {
    name: "Earl Patrick's Palace",
    description: "Scotland's finest Renaissance palace ruin — built by a tyrannical earl so cruel his execution was delayed while he learned the Lord's Prayer.",
    history: "Built c. 1606 by Patrick Stewart, Earl of Orkney, known as 'Black Patie' for his tyrannical rule of the Northern Isles from 1592. Adjacent to the 12th-century Bishop's Palace where King Haakon of Norway died in 1263 after the Battle of Largs. Earl Patrick was executed in 1615 — legend says his execution was delayed while he learned the Lord's Prayer. Considered one of Scotland's most elegant Renaissance buildings.",
    tags: ["atmospheric", "ruins-romantic", "free-entry", "dark-brooding", "medieval"],
    access: "free",
    era: "17th century",
    sources: [
      {name: "Historic Environment Scotland", url: "https://www.historicenvironment.scot/visit-a-place/places/earls-palace-birsay/history/"},
      {name: "Visit Scotland", url: "https://www.visitscotland.com/info/see-do/bishops-palace-and-earls-palace-p247691"},
      {name: "Orkney.com", url: "https://www.orkney.com/listings/bishops-palace-earls"}
    ]
  },
  {
    name: "Dalhousie Castle",
    description: "Scotland's oldest inhabited castle — 800 years of siege, royalty, and intrigue wrapped in pink sandstone on the banks of the River Esk, now a luxury hotel and spa.",
    history: "Origins trace to c. 1140 when Simunus de Ramesia followed King David I to Scotland. Edward I (Longshanks) stayed here en route to battle William Wallace at Falkirk. In 1400, Sir Alexander Ramsay withstood a six-month siege by Henry IV — the last time an English king personally besieged a Scottish castle. The L-plan keep dates to c. 1450. Now operates as a hotel and spa.",
    tags: ["well-preserved", "atmospheric", "romantic", "haunted", "riverside", "wedding-venue", "tearoom-cafe"],
    access: "paid",
    era: "13th-15th century",
    sources: [
      {name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Dalhousie_Castle"},
      {name: "Stravaiging", url: "https://www.stravaiging.com/history/castle/dalhousie-castle/"},
      {name: "Dalhousie Castle", url: "https://www.dalhousiecastle.co.uk/about/history/"}
    ]
  }
];

function findCastleBlock(source, name) {
  const nameStr = '"name": "' + name + '"';
  const pos = source.indexOf(nameStr);
  if (pos === -1) return null;
  let depth = 0, start = pos;
  for (let i = pos; i >= 0; i--) {
    if (source[i] === '}') depth++;
    if (source[i] === '{') { if (depth === 0) { start = i; break; } depth--; }
  }
  depth = 0;
  let end = pos;
  for (let i = start; i < source.length; i++) {
    if (source[i] === '{') depth++;
    if (source[i] === '}') { depth--; if (depth === 0) { end = i + 1; break; } }
  }
  return { start, end, text: source.substring(start, end) };
}

function updateField(objText, field, value) {
  const serialized = JSON.stringify(value);
  const patterns = [
    new RegExp(`("${field}":\\s*)("(?:[^"\\\\]|\\\\.)*")`, 's'),
    new RegExp(`("${field}":\\s*)(\\[(?:[^\\[\\]]*|\\[(?:[^\\[\\]]*|\\[[^\\[\\]]*\\])*\\])*\\])`, 's'),
  ];
  for (const p of patterns) {
    const m = objText.match(p);
    if (m) return objText.replace(p, `$1${serialized}`);
  }
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
  for (const f of ['description','history','tags','access','era','sources']) {
    if (u[f]) newBlock = updateField(newBlock, f, u[f]);
  }
  src = src.substring(0, block.start) + newBlock + src.substring(block.end);
  console.log(`Updated: ${u.name}`);
  count++;
}

fs.writeFileSync('data.js', src, 'utf8');
console.log(`\nWrote ${count} updates to data.js`);
