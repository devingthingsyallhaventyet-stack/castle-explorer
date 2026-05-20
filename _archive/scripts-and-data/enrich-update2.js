const fs = require('fs');
let src = fs.readFileSync('data.js', 'utf8');

const enrichments = [
  {
    name: 'Usk Castle',
    description: "A secret garden hidden inside a medieval fortress — where roses climb ancient walls and the Battle of Usk echoes through the ruins.",
    history: "Built in 1120 in the town of Usk, Monmouthshire. Site of the Battle of Usk during the Owain Glyndŵr uprising. Grade I listed since 1953. Castle House, incorporating parts of the gatehouse, stands within the castle walls. Famous for its award-winning castle gardens, privately owned.",
    tags: ['romantic-ruin', 'hidden-gem', 'gardens', 'medieval'],
    era: '12th century',
    access: 'paid'
  },
  {
    name: 'Dunmoe Castle',
    description: "A crumbling Anglo-Norman tower overlooking the Boyne — where Ireland's ancient river valley meets five centuries of stone and silence.",
    history: "A mid-15th century Anglo-Norman castle near Navan, County Meath, overlooking the River Boyne in the Boyne Valley. A National Monument of Ireland. The D'Arcy family held it for generations. Now a romantic ruin with impressive remaining tower walls.",
    tags: ['romantic-ruin', 'hidden-gem', 'free-entry', 'riverside', 'medieval'],
    era: '15th century',
    access: 'free'
  },
  {
    name: 'Whorlton Castle',
    description: "A medieval gatehouse standing alone on the edge of the North York Moors — guardian of an abandoned village and a road that time forgot.",
    history: "Established in the early 12th century as a Norman motte-and-bailey overlooking an important road on the western edge of the North York Moors. Unusually for a motte-and-bailey, it remained in use into the early modern period. The village of Whorlton was eventually abandoned, leaving the castle gatehouse as a solitary survivor.",
    tags: ['romantic-ruin', 'hidden-gem', 'free-entry', 'hilltop', 'norman', 'medieval', 'remote'],
    era: '12th century',
    access: 'free'
  },
  {
    name: 'Neath Castle',
    description: "A Norman stronghold tucked into a Welsh town centre — where the ghost of Granville's fortress still anchors the streets of Neath.",
    history: "Construction begun between 1114-1130 by Robert, Earl of Gloucester, Lord of Glamorgan. Also known as Granville's Castle after Richard de Grenville. The original timber motte-and-bailey near the Roman fort of Nidum was abandoned when Neath Abbey was founded nearby. The stone castle in the town centre survives as a ruin.",
    tags: ['hidden-gem', 'free-entry', 'norman', 'medieval'],
    era: '12th-13th century',
    access: 'free'
  },
  {
    name: 'Caergwrle Castle',
    description: "A Welsh prince's castle built in uneasy service to an English king — a hilltop ruin where loyalty and rebellion collided in flame.",
    history: "Built c.1277 by Dafydd ap Gruffydd in service to Edward I of England. When Dafydd rebelled, Edward sent Reginald de Grey to seize it. The castle was destroyed by fire during the conflict. Managed by Cadw. The ruins command views over the surrounding countryside.",
    tags: ['hidden-gem', 'free-entry', 'hilltop', 'medieval'],
    era: '13th century',
    access: 'free'
  },
  {
    name: 'Castell Aberlleiniog',
    description: "A Norman motte rising from Anglesey woodland — built by the Earl of Chester to tame the island, now surrendered to the trees.",
    history: "A motte-and-bailey fortress near Llangoed on the Isle of Anglesey, built 1080-1099 by Hugh d'Avranches, 1st Earl of Chester. Sited on a steep hill about two miles from Beaumaris Castle. Currently undergoing restoration. In use from the late 11th century to the mid-17th century.",
    tags: ['hidden-gem', 'free-entry', 'woodland', 'norman', 'medieval'],
    era: '11th century',
    access: 'free'
  },
  {
    name: 'Balvaird Castle',
    description: "A Scottish tower house hiding in the Ochil Hills — the 'Township of the Bard' where medieval Perthshire feels barely a breath away.",
    history: "A late medieval Scottish tower house in the Ochil Hills, about 5km south of Abernethy, Perth and Kinross. The name derives from Gaelic 'Baile a' Bhàird' meaning Township of the Bard. A scheduled monument in the care of Historic Environment Scotland.",
    tags: ['hidden-gem', 'free-entry', 'hilltop', 'medieval', 'remote'],
    era: '15th century',
    access: 'free'
  },
  {
    name: 'Snape Castle',
    description: "A quiet Yorkshire manor house with a turbulent Tudor past — where Catherine Parr once lived before she became Henry VIII's last queen.",
    history: "A semi-fortified manor house in Snape, North Yorkshire, built c.1430 and rebuilt in 1587. Grade I listed and a scheduled monument. Catherine Parr, the sixth and last wife of Henry VIII, lived here during her first marriage to John Neville, 3rd Baron Latimer. Still privately occupied.",
    tags: ['hidden-gem', 'tudor', 'medieval'],
    era: '15th century',
    access: 'exterior-only'
  },
  {
    name: 'Windsor Castle',
    description: "The world's oldest and largest occupied castle — a thousand years of royal power, from William the Conqueror to the present Crown.",
    history: "Founded by William the Conqueror after 1066, it is the oldest and largest occupied castle in the world. Home to the British monarch for over 900 years. Features the iconic Round Tower, St George's Chapel (burial place of monarchs), and lavish State Apartments. Survived a devastating fire in 1992.",
    tags: ['well-preserved', 'photogenic', 'norman', 'medieval', 'gothic', 'gardens', 'guided-tours', 'gift-shop'],
    era: '11th century',
    access: 'paid'
  },
  {
    name: 'Edinburgh Castle',
    description: "Scotland's most iconic fortress — a volcanic citadel dominating the skyline, steeped in siege, ceremony, and a thousand years of defiance.",
    history: "Built on Castle Rock, a volcanic plug with human habitation since the Iron Age. The oldest building, St Margaret's Chapel, dates to the early 12th century. Besieged more than any castle in Britain — 26 times. Home to the Scottish Crown Jewels and the Stone of Destiny. Hosts the Royal Edinburgh Military Tattoo annually.",
    tags: ['well-preserved', 'photogenic', 'medieval', 'hilltop', 'museum', 'guided-tours', 'gift-shop', 'events-venue'],
    era: '12th century',
    access: 'paid'
  },
  {
    name: 'Hampton Court Palace',
    description: "Henry VIII's stolen masterpiece — a Tudor palace of ghost-haunted galleries, hedge mazes, and five centuries of royal excess by the Thames.",
    history: "Originally built by Cardinal Thomas Wolsey in 1514. Seized by Henry VIII in 1529, who expanded it into a grand royal palace. Later remodelled by Christopher Wren for William III. Famous for its Tudor kitchens, haunted gallery, Chapel Royal, and the oldest hedge maze in England (planted 1690s).",
    tags: ['well-preserved', 'photogenic', 'tudor', 'gardens', 'haunted', 'kid-friendly', 'guided-tours', 'gift-shop', 'tearoom-cafe'],
    era: '16th century',
    access: 'paid'
  },
  {
    name: 'Sissinghurst Castle',
    description: "A Tudor tower rising from the most famous garden in England — Vita Sackville-West's living masterpiece of colour, scent, and romance.",
    history: "A 16th-century Elizabethan mansion, now mainly ruined except for the iconic tower and some buildings. Famed worldwide for the garden created by writer Vita Sackville-West and diplomat Harold Nicolson from the 1930s. The gardens are divided into 'rooms' with distinct themes. Managed by the National Trust.",
    tags: ['photogenic', 'well-preserved', 'gardens', 'tudor', 'romantic'],
    era: '16th century',
    access: 'paid'
  },
  {
    name: 'Hardwick Hall',
    description: "\"More glass than wall\" — Bess of Hardwick's Elizabethan power statement, where enormous windows flood a prodigy house with light and ambition.",
    history: "Built 1590-1597 by Robert Smythson for Bess of Hardwick, one of the richest women in Elizabethan England. A 'prodigy house' famous for its revolutionary use of glass — its enormous windows were a statement of wealth. Contains one of Europe's finest collections of Elizabethan embroideries and tapestries. National Trust.",
    tags: ['well-preserved', 'photogenic', 'tudor', 'gardens', 'museum'],
    era: '16th century',
    access: 'paid'
  },
  {
    name: 'Inveraray Castle',
    description: "A fairytale Scottish castle on the shores of Loch Fyne — seat of Clan Campbell and a filming favourite with its distinctive turret silhouette.",
    history: "Seat of the Duke of Argyll, chief of Clan Campbell, on the shores of Loch Fyne. The current castle was built from the mid-18th century in a Gothic Revival style, replacing a 15th-century tower house. Features a magnificent Armoury Hall. Category A listed building. Featured in Downton Abbey.",
    tags: ['well-preserved', 'photogenic', 'kid-friendly', 'gardens', 'gothic', 'filming-location', 'gift-shop'],
    era: '18th century',
    access: 'paid'
  },
  {
    name: 'Belvoir Castle',
    description: "A Gothic Revival fantasy crowning a Leicestershire hilltop — where the Dukes of Rutland have held court since the Norman Conquest.",
    history: "Originally a Norman castle built by Robert de Todeni in 1067. Destroyed and rebuilt four times. The current Gothic Revival building was designed by James Wyatt and built 1801-1832 for the Duke of Rutland. Home to the Manners family. Grade I listed. Name pronounced 'Beaver'.",
    tags: ['well-preserved', 'photogenic', 'kid-friendly', 'gothic', 'gardens', 'events-venue', 'gift-shop', 'tearoom-cafe'],
    era: '19th century (rebuilt)',
    access: 'paid'
  },
  {
    name: 'Battle Abbey',
    description: "Built on the exact spot where Harold fell — William the Conqueror's act of penance that marks the place where England changed forever.",
    history: "Founded by William the Conqueror in 1094 on the site of the Battle of Hastings (1066), dedicated to St Martin of Tours. The high altar was placed where King Harold reportedly died. Dissolved by Henry VIII in 1538. The 14th-century gatehouse survives intact. Managed by English Heritage.",
    tags: ['dramatic-ruin', 'kid-friendly', 'medieval', 'norman', 'museum', 'guided-tours', 'gift-shop'],
    era: '11th century',
    access: 'paid'
  },
  {
    name: 'Scotney Castle',
    description: "A moated medieval ruin floating on a lily-pad lake, framed by one of England's most perfectly picturesque gardens.",
    history: "A medieval moated manor house on a small island, surrounded by a celebrated picturesque garden. The old castle dates to the 14th century; a new house was built above it in 1835-1843. The gardens, a SSSI, feature rhododendrons, azaleas, and spectacular autumn colour. National Trust.",
    tags: ['romantic-ruin', 'photogenic', 'gardens', 'medieval', 'woodland'],
    era: '14th century',
    access: 'paid'
  },
  {
    name: 'Adare Manor',
    description: "Ireland's most opulent Gothic Revival manor — a Pugin masterpiece on the banks of the Maigue, now one of the world's finest luxury hotels.",
    history: "A Tudor Revival manor house on the banks of the River Maigue in Adare, County Limerick. Construction began c.1832 for the Earl of Dunraven, with designs by James Pain, Lewis Cottingham, and Augustus Pugin. Completed in 1862. Now a luxury 5-star hotel and golf resort owned by J.P. McManus. Hosted the 2027 Ryder Cup.",
    tags: ['well-preserved', 'photogenic', 'gardens', 'gothic', 'wedding-venue', 'riverside'],
    era: '19th century',
    access: 'paid'
  },
  {
    name: 'Herstmonceux Castle',
    description: "A moated red-brick Tudor fantasy in the Sussex countryside — once home to the Royal Observatory, now a Canadian university's unlikely English campus.",
    history: "Built in 1441 as one of the oldest significant brick buildings in England. Served as the home of the Royal Greenwich Observatory from 1957-1988. Now owned by Queen's University, Kingston, Canada, and used as an international study centre. Grade I listed with stunning moat and 600 acres of grounds.",
    tags: ['well-preserved', 'photogenic', 'tudor', 'gardens', 'kid-friendly'],
    era: '15th century',
    access: 'paid'
  },
  {
    name: 'Lowther Castle',
    description: "A spectacular Gothic shell in the Cumbrian hills — once the grandest house in the north, now a romantic ruin reborn as a wild garden.",
    history: "Built 1806-1814 for the 1st Earl of Lonsdale, designed by Robert Smirke (his first major commission). Incorporates fragments of a 1685 house. The Lowther family has owned the estate since the Middle Ages. De-roofed in 1957 after WWII military use. Now open to the public with new gardens within the shell.",
    tags: ['romantic-ruin', 'photogenic', 'kid-friendly', 'gardens', 'gothic'],
    era: '19th century',
    access: 'paid'
  }
];

let updated = 0;
for (const e of enrichments) {
  const nameStr = JSON.stringify(e.name);
  let idx = src.indexOf('"name": ' + nameStr);
  if (idx === -1) idx = src.indexOf('name: ' + nameStr);
  if (idx === -1) { console.log('NOT FOUND:', e.name); continue; }

  let objStart = src.lastIndexOf('{', idx);
  let braceCount = 0, objEnd = objStart;
  for (let i = objStart; i < src.length; i++) {
    if (src[i] === '{') braceCount++;
    if (src[i] === '}') braceCount--;
    if (braceCount === 0) { objEnd = i; break; }
  }

  let objStr = src.substring(objStart, objEnd + 1);

  if (/"description"\s*:/.test(objStr)) {
    objStr = objStr.replace(/"description"\s*:\s*"(?:[^"\\]|\\.)*"/, '"description": ' + JSON.stringify(e.description));
  } else {
    objStr = objStr.replace(/("name"\s*:\s*"[^"]*"\s*,)/, '$1\n    "description": ' + JSON.stringify(e.description) + ',');
  }

  if (/"history"\s*:/.test(objStr)) {
    objStr = objStr.replace(/"history"\s*:\s*"(?:[^"\\]|\\.)*"/, '"history": ' + JSON.stringify(e.history));
  } else {
    objStr = objStr.replace(/("description"\s*:\s*"(?:[^"\\]|\\.)*"\s*,?)/, '$1\n    "history": ' + JSON.stringify(e.history) + ',');
  }

  if (e.tags && e.tags.length > 0 && /"tags"\s*:/.test(objStr)) {
    objStr = objStr.replace(/"tags"\s*:\s*\[[\s\S]*?\]/, '"tags": ' + JSON.stringify(e.tags));
  }

  if (e.era && /"era"\s*:/.test(objStr)) {
    objStr = objStr.replace(/"era"\s*:\s*"[^"]*"/, '"era": ' + JSON.stringify(e.era));
  }

  src = src.substring(0, objStart) + objStr + src.substring(objEnd + 1);
  updated++;
}

fs.writeFileSync('data.js', src);
console.log('Updated', updated, 'sites in data.js');
