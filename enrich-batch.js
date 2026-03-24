const fs = require('fs');

let src = fs.readFileSync('data.js', 'utf8');

const updates = [
  {
    name: "Craigevar Castle Grounds",
    description: "A pink-harled fairytale tower rising from Aberdeenshire woodland — said to have inspired Disney's Cinderella Castle. Seven storeys of Scottish Baronial perfection.",
    history: "Completed in 1626 by merchant William Forbes ('Danzig Willy'), who purchased the unfinished castle from the Mortimer family in 1610. The Forbes family resided here for 350 years. Donated to the National Trust for Scotland in 1963 by the 19th Lord Sempill. One of the finest examples of Scottish Baronial architecture.",
    tags: ["well-preserved", "photogenic", "woodland", "romantic", "atmospheric", "gardens", "guided-tours", "gift-shop"],
    access: "paid",
    era: "17th century",
    sources: [
      {name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Craigievar_Castle"},
      {name: "National Trust for Scotland", url: "https://www.nts.org.uk/visit/places/craigievar"},
      {name: "Visit Aberdeenshire", url: "https://www.visitabdn.com/abdnwillwait/history-and-heritage/craigievar-castle/"}
    ]
  },
  {
    name: "Grey Mare's Tail",
    description: "Scotland's fifth-highest waterfall plunges 60m into the Moffat Water Valley — a glacial landscape of raw, dramatic beauty where Covenanters once hid from persecution.",
    history: "This dramatic hanging valley was carved by glacial erosion over millions of years. Evidence of Iron Age settlers has been found in the area. In the 17th century, Covenanters sought sanctuary in these remote hills during religious persecution. Now a National Trust for Scotland nature reserve with rare upland plants and peregrine falcons.",
    tags: ["remote", "atmospheric", "free-entry", "dog-friendly", "hilltop", "woodland"],
    access: "free",
    era: "Natural/prehistoric",
    sources: [
      {name: "National Trust for Scotland", url: "https://www.nts.org.uk/visit/places/grey-mares-tail"},
      {name: "Visit Moffat", url: "https://visitmoffat.scot/grey-mares-tail"},
      {name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Grey_Mare%27s_Tail,_Moffat_Hills"}
    ]
  },
  {
    name: "Dunbrody Country House",
    description: "A Georgian manor on the Hook Peninsula where Norman history seeps through ancient stone — once home to Cistercian monks who shaped medieval Wexford.",
    history: "The nearby Dunbrody Abbey was founded in 1170 by Hervé de Montmorency on instructions from Strongbow after the Norman invasion of Ireland. The Cistercian abbey, formally established c.1210, became one of Ireland's finest monasteries. The country house was later built on the estate grounds and now operates as a luxury hotel.",
    tags: ["romantic", "atmospheric", "gardens", "tearoom-cafe", "wedding-venue"],
    access: "paid",
    era: "Georgian (18th century)",
    sources: [
      {name: "Visit Wexford", url: "https://www.visitwexford.ie/directory/dunbrody-abbey/"},
      {name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Dunbrody_Abbey"},
      {name: "Discover Ireland", url: "https://www.discoverireland.ie/wexford/dunbrody-abbey-and-visitor-centre"}
    ]
  },
  {
    name: "Wroxeter Roman City",
    description: "The buried bones of Viroconium — once the fourth-largest Roman city in Britain, now a hauntingly quiet field where an enormous bathhouse wall still stands sentinel.",
    history: "Established c. AD 55 as a frontier military post near the River Severn. Grew into Viroconium Cornoviorum, the fourth-largest Roman city in Britain and capital of the Cornovii tribe. The massive 'Old Work' bathhouse wall is the largest freestanding Roman ruin in England. Managed by English Heritage with an on-site museum.",
    tags: ["well-preserved", "atmospheric", "museum", "guided-tours", "prehistoric"],
    access: "paid",
    era: "Roman (1st-5th century)",
    sources: [
      {name: "English Heritage", url: "https://www.english-heritage.org.uk/visit/places/wroxeter-roman-city/"},
      {name: "English Heritage History", url: "https://www.english-heritage.org.uk/visit/places/wroxeter-roman-city/history/"},
      {name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Wroxeter"}
    ]
  },
  {
    name: "Arbeia Roman Fort",
    description: "A reconstructed Roman gateway rises above the Tyne estuary — where Arab boatmen from the Tigris once guarded Hadrian's Wall's vital supply line.",
    history: "Built c. AD 160 at the mouth of the River Tyne to guard the main sea route supplying Hadrian's Wall. Served as a major military granary and supply base. The name 'Arbeia' may mean 'fort of the Arab troops', referring to its garrison of Mesopotamian boatmen. Features reconstructed gateway, barracks, and commander's house. UNESCO World Heritage site.",
    tags: ["well-preserved", "museum", "kid-friendly", "free-entry", "coastal"],
    access: "free",
    era: "Roman (2nd-5th century)",
    sources: [
      {name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Arbeia"},
      {name: "North East Museums", url: "https://www.northeastmuseums.org.uk/arbeia"}
    ]
  },
  {
    name: "Cawfields Roman Wall",
    description: "Hadrian's Wall at its most dramatic — a steep ridge of ancient stone marching over the Northumbrian crags, with a beautifully preserved milecastle perched on the edge.",
    history: "Part of Hadrian's Wall, begun AD 122 to mark the northern frontier of the Roman Empire. This section features Milecastle 42, probably built by the Second Legion, with an impressive gateway and well-preserved walls. The steep terrain here made the Wall particularly dramatic and defensible. Adjacent to a picturesque quarry lake.",
    tags: ["well-preserved", "atmospheric", "hilltop", "free-entry", "remote", "dog-friendly", "photogenic"],
    access: "free",
    era: "Roman (2nd century)",
    sources: [
      {name: "English Heritage", url: "https://www.english-heritage.org.uk/visit/places/cawfields-roman-wall-hadrians-wall/"},
      {name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Hadrian%27s_Wall"}
    ]
  },
  {
    name: "Delapre Abbey",
    description: "A 900-year-old abbey-turned-mansion where Cluniac nuns once prayed and the Battle of Northampton raged — now beautifully restored with Wars of the Roses battlefield views.",
    history: "Founded c. 1145 as a Cluniac nunnery by Simon de Senlis, 4th Earl of Huntingdon. Its grounds were the site of the Battle of Northampton in 1460 during the Wars of the Roses. Dissolved in 1538, converted to a private residence. Served in WWII, then housed the Northamptonshire Record Office. Restored and reopened to the public in 2017.",
    tags: ["well-preserved", "atmospheric", "gardens", "museum", "tearoom-cafe", "gift-shop", "wedding-venue", "events-venue"],
    access: "paid",
    era: "12th-18th century",
    sources: [
      {name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Delapr%C3%A9_Abbey"},
      {name: "Delapré Abbey", url: "https://delapreabbey.org/"}
    ]
  },
  {
    name: "Hanbury Hall",
    description: "A Queen Anne jewel box in Worcestershire — red brick elegance hiding Thornhill ceiling paintings and 400 acres of orchards, gardens, and Georgian parkland.",
    history: "Built c. 1706 for wealthy chancery lawyer Thomas Vernon in the Queen Anne style. Features remarkable wall and ceiling paintings by Sir James Thornhill (who also painted St Paul's Cathedral). The Vernon family accumulated nearly 8,000 acres. Grade I listed, now managed by the National Trust with recreated formal gardens and 400 acres of parkland.",
    tags: ["well-preserved", "photogenic", "gardens", "tearoom-cafe", "gift-shop", "guided-tours", "kid-friendly"],
    access: "paid",
    era: "18th century",
    sources: [
      {name: "National Trust", url: "https://www.nationaltrust.org.uk/visit/worcestershire-herefordshire/hanbury-hall"},
      {name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Hanbury_Hall"}
    ]
  },
  {
    name: "Berrington Hall",
    description: "Henry Holland's neoclassical masterpiece set in Capability Brown's final landscape — austere Georgian grandeur outside, delicate beauty within.",
    history: "Designed 1778-81 by architect Henry Holland for Thomas Harley, former Lord Mayor of London. Set in grounds by Lancelot 'Capability' Brown — his last commission before death. The 7th Lord Rodney gambled away much of the original contents including Gainsborough paintings. Features costume collection, Victorian laundry, and Georgian dairy. National Trust since 1957.",
    tags: ["well-preserved", "photogenic", "gardens", "tearoom-cafe", "gift-shop", "guided-tours", "kid-friendly"],
    access: "paid",
    era: "18th century",
    sources: [
      {name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Berrington_Hall"},
      {name: "National Trust", url: "https://www.nationaltrust.org.uk/visit/worcestershire-herefordshire/berrington-hall"}
    ]
  },
  {
    name: "Kilpeck Church",
    description: "A tiny Norman church with the most extraordinary Romanesque carvings in Britain — dragons, warriors, and the famous Sheela na gig peek from every corner of ancient red stone.",
    history: "Built c. 1140 by Hugh de Kilpeck, a relative of the powerful Mortimer family. The Church of St Mary and St David is celebrated worldwide for its exceptional Romanesque carvings, drawing on Celtic, Scandinavian, Spanish, French, and Italian influences. Over 85 original corbels survive. Virtually unaltered since the 12th century.",
    tags: ["well-preserved", "photogenic", "atmospheric", "norman", "medieval", "free-entry"],
    access: "free",
    era: "12th century",
    sources: [
      {name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Church_of_St_Mary_and_St_David,_Kilpeck"},
      {name: "Britain Express", url: "https://www.britainexpress.com/counties/hereford/Kilpeck.htm"}
    ]
  }
];

function findCastleBlock(source, name) {
  const nameStr = `"name": "${name}"`;
  const pos = source.indexOf(nameStr);
  if (pos === -1) return null;
  
  let depth = 0;
  let start = pos;
  for (let i = pos; i >= 0; i--) {
    if (source[i] === '}') depth++;
    if (source[i] === '{') {
      if (depth === 0) { start = i; break; }
      depth--;
    }
  }
  
  depth = 0;
  let end = pos;
  for (let i = start; i < source.length; i++) {
    if (source[i] === '{') depth++;
    if (source[i] === '}') {
      depth--;
      if (depth === 0) { end = i + 1; break; }
    }
  }
  
  return { start, end, text: source.substring(start, end) };
}

function updateField(objText, field, value) {
  const serialized = JSON.stringify(value);
  // Try to find existing field with quoted key
  const patterns = [
    new RegExp(`("${field}":\\s*)("(?:[^"\\\\]|\\\\.)*")`, 's'),
    new RegExp(`("${field}":\\s*)(\\[(?:[^\\[\\]]*|\\[(?:[^\\[\\]]*|\\[[^\\[\\]]*\\])*\\])*\\])`, 's'),
  ];
  
  for (const p of patterns) {
    const m = objText.match(p);
    if (m) {
      return objText.replace(p, `$1${serialized}`);
    }
  }
  
  // Field doesn't exist - add before closing }
  const lastBrace = objText.lastIndexOf('}');
  const before = objText.substring(0, lastBrace).trimEnd();
  const needsComma = !before.endsWith(',') && !before.endsWith('{');
  return before + (needsComma ? ',' : '') + `\n    "${field}": ${serialized}` + '\n  }';
}

let count = 0;
for (const u of updates) {
  const block = findCastleBlock(src, u.name);
  if (!block) {
    console.log(`NOT FOUND: ${u.name}`);
    continue;
  }
  
  let newBlock = block.text;
  if (u.description) newBlock = updateField(newBlock, 'description', u.description);
  if (u.history) newBlock = updateField(newBlock, 'history', u.history);
  if (u.tags) newBlock = updateField(newBlock, 'tags', u.tags);
  if (u.access) newBlock = updateField(newBlock, 'access', u.access);
  if (u.era) newBlock = updateField(newBlock, 'era', u.era);
  if (u.sources) newBlock = updateField(newBlock, 'sources', u.sources);
  
  src = src.substring(0, block.start) + newBlock + src.substring(block.end);
  console.log(`Updated: ${u.name}`);
  count++;
}

fs.writeFileSync('data.js', src, 'utf8');
console.log(`\nWrote ${count} updates to data.js`);
