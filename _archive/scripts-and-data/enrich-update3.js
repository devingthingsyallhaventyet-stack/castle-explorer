const fs = require('fs');
let src = fs.readFileSync('data.js', 'utf8');

const enrichments = [
  {
    name: 'Witton Castle',
    description: "A 15th-century castle turned holiday park in County Durham — where medieval walls meet caravans and campfires under the northern sky.",
    history: "A 15th-century castle near Witton-le-Wear, County Durham. The castle has been converted into a holiday park and caravan site while retaining its medieval character. The grounds include lakes and woodland. Privately owned.",
    tags: ['hidden-gem', 'kid-friendly', 'woodland'],
    era: '15th century',
    access: 'paid'
  },
  {
    name: 'Aberglasney House',
    description: "A restored medieval manor in the Tywi Valley with one of Wales's most enchanting garden restorations — a lost garden found again.",
    history: "A medieval house and gardens in the Tywi Valley, Carmarthenshire. Grade II* listed house with Grade II* gardens. Restored by the Aberglasney Restoration Trust. Features a unique Elizabethan cloister garden and a subtropical indoor garden in the restored Ninfarium.",
    tags: ['romantic-ruin', 'gardens', 'photogenic', 'medieval'],
    era: '16th century',
    access: 'paid'
  },
  {
    name: 'Oxburgh Hall',
    description: "A moated Tudor brick fortress in the Norfolk flatlands — where the Bedingfeld family has lived since 1482 and Catholic secrets hide in the walls.",
    history: "A moated country house built in 1482 by Sir Edmund Bedingfeld, who obtained a licence to crenellate. The Bedingfeld family has lived here since construction. Features a famous priest's hole where Catholic clergy hid during the Reformation. National Trust since 1952. Grade I listed.",
    tags: ['well-preserved', 'photogenic', 'tudor', 'gardens'],
    era: '15th century',
    access: 'paid'
  },
  {
    name: 'Powderham Castle',
    description: "A fortified Devon manor on the Exe estuary — seat of the Courtenay family for over 600 years, where medieval walls meet Georgian grandeur.",
    history: "A fortified manor house in Exminster, Devon, on the west bank of the River Exe estuary. Built after 1390, with major 18th-century renovations. Home of the Courtenay family (Earls of Devon) for over 600 years. Grade I listed with Grade II* gardens. Features a music room and marble hall.",
    tags: ['well-preserved', 'kid-friendly', 'gardens', 'medieval', 'riverside', 'events-venue'],
    era: '14th century',
    access: 'paid'
  },
  {
    name: 'Peckforton Castle',
    description: "A Victorian fantasy castle built to look medieval — perched on a Cheshire hilltop, now one of England's most dramatic wedding venues.",
    history: "A Victorian country house built 1844-1850 in medieval castle style by architect Anthony Salvin for John Tollemache, 1st Baron Tollemache. Grade I listed. Stands in woodland at the north end of Peckforton Hills. Now operates as a luxury hotel and wedding venue.",
    tags: ['well-preserved', 'photogenic', 'gothic', 'woodland', 'hilltop', 'wedding-venue'],
    era: '19th century',
    access: 'paid'
  },
  {
    name: 'Dartmouth Castle',
    description: "An artillery fort guarding one of Devon's most beautiful harbours — where medieval cannons first pointed seaward to face the French.",
    history: "An artillery fort built to protect Dartmouth harbour. Earliest parts date from the 1380s in response to French attack threats. One of the first castles in England designed specifically for artillery. Features a chain mechanism that stretched across the harbour. Managed by English Heritage.",
    tags: ['well-preserved', 'photogenic', 'coastal', 'medieval', 'kid-friendly'],
    era: '14th century',
    access: 'paid'
  },
  {
    name: 'Brodie Castle',
    description: "A Z-plan tower house in the Scottish Highlands with a world-class art collection — and a story of burning, rebuilding, and resilience.",
    history: "A well-preserved Z-plan tower house west of Forres in Moray, Scotland. Built in 1567, burned by Montrose's forces in 1645, then rebuilt. Features fine 17th-century plasterwork and an important collection of paintings. National Trust for Scotland. Category A listed.",
    tags: ['well-preserved', 'photogenic', 'gardens', 'museum', 'medieval'],
    era: '16th century',
    access: 'paid'
  },
  {
    name: 'Lumley Castle',
    description: "A 14th-century quadrangular castle turned luxury hotel — where you can sleep in medieval splendour overlooking the Durham countryside.",
    history: "A 14th-century quadrangular castle at Chester-le-Street, County Durham. Built by Sir Ralph Lumley who converted his family manor into a fortified castle. Grade I listed. Property of the Earl of Scarbrough. Now operates as a 73-room luxury hotel on the banks of the Lumley Park Burn.",
    tags: ['well-preserved', 'haunted', 'medieval', 'wedding-venue'],
    era: '14th century',
    access: 'paid'
  },
  {
    name: 'Tioram Castle',
    description: "A ruined fortress on a tidal island in Loch Moidart — one of Scotland's most romantic and unreachable castles, only accessible at low tide.",
    history: "A ruined castle on the tidal island of Eilean Tioram in Loch Moidart, Scottish Highlands. The name means 'dry castle' in Gaelic. One of Somerled's castles (12th century), later a stronghold of Clann Ruaidhrí. Controls access to Loch Shiel. A scheduled monument. Accessible only at low tide.",
    tags: ['dramatic-ruin', 'free-entry', 'island', 'coastal', 'remote', 'photogenic'],
    era: '14th century',
    access: 'free'
  },
  {
    name: 'Belsay Castle',
    description: "A 14th-century pele tower beside a Greek Revival hall, surrounded by quarry gardens that feel like stepping into another world.",
    history: "A 14th-century pele tower built c.1370 in Northumberland. Adjacent to Belsay Hall, a neoclassical house built in 1817. The quarry gardens, created from the stone quarried to build the hall, are extraordinary. Grade I listed and a scheduled monument. Managed by English Heritage.",
    tags: ['dramatic-ruin', 'photogenic', 'gardens', 'medieval'],
    era: '14th century',
    access: 'paid'
  },
  {
    name: 'Ripley Castle',
    description: "A 14th-century Yorkshire castle where the Ingilby family held court for 700 years — complete with priest holes, a deer park, and Civil War bullet holes.",
    history: "A Grade I listed 14th-century country house in Ripley, North Yorkshire, 3 miles north of Harrogate. Seat of the Ingilby baronets for centuries. Features a medieval gatehouse, Tudor tower, and 18th-century additions. Announced for sale in June 2024 after 700 years of family ownership.",
    tags: ['well-preserved', 'hidden-gem', 'gardens', 'medieval', 'tudor', 'guided-tours'],
    era: '14th century',
    access: 'paid'
  },
  {
    name: 'Mount Grace Priory',
    description: "The best-preserved Carthusian monastery in England — where silent monks lived in individual cells with their own gardens and running water.",
    history: "A Carthusian priory founded in 1398 by Thomas de Holand, Earl of Kent and Duke of Surrey. Dissolved in 1539. The best-preserved of the nine Carthusian monasteries in England. One cell has been fully reconstructed. Each monk had an individual cell with garden and running water. Managed by English Heritage.",
    tags: ['well-preserved', 'hidden-gem', 'gardens', 'medieval', 'atmospheric'],
    era: '14th century',
    access: 'paid'
  },
  {
    name: 'Picton Castle',
    description: "A 13th-century Pembrokeshire castle wrapped in beautiful gardens — built by a Flemish knight, still standing, still enchanting.",
    history: "Originally built at the end of the 13th century by a Flemish knight, later acquired by Sir John Wogan. Grade I listed castle with Grade II* gardens. Of unusual construction, remodelled several times. Now owned by Picton Castle Trust and open to the public. Features 40 acres of gardens.",
    tags: ['well-preserved', 'photogenic', 'kid-friendly', 'gardens', 'medieval'],
    era: '13th century',
    access: 'paid'
  },
  {
    name: 'Dumbarton Castle',
    description: "Scotland's oldest recorded stronghold — a volcanic rock fortress on the Clyde with an unbroken history stretching back to the Iron Age.",
    history: "The longest recorded history of any stronghold in Scotland. Sits on a volcanic plug of basalt known as Dumbarton Rock on the River Clyde. Occupied since the Iron Age, it was the capital of the ancient Kingdom of Strathclyde (Alt Clut). Mary Queen of Scots embarked from here for France as a child.",
    tags: ['dramatic-ruin', 'photogenic', 'hilltop', 'coastal', 'medieval', 'prehistoric'],
    era: 'Iron Age-present',
    access: 'paid'
  },
  {
    name: 'Wenlock Priory',
    description: "A Cluniac monastery of extraordinary beauty in much Wenlock — where 7th-century saints and 12th-century arches share a quiet Shropshire garden.",
    history: "A ruined 12th-century Cluniac monastery in Much Wenlock, Shropshire. Re-founded by Roger de Montgomery between 1079-1082 on the site of a 7th-century monastery. In 1101, bones believed to be those of Saint Milburga were discovered beneath the old church. Managed by English Heritage.",
    tags: ['romantic-ruin', 'photogenic', 'medieval', 'gardens'],
    era: '12th century',
    access: 'paid'
  },
  {
    name: 'Hadleigh Castle',
    description: "A dramatic ruin overlooking the Thames Estuary — immortalised by Constable's brush and still commanding one of Essex's most breathtaking views.",
    history: "A ruined fortification in Essex overlooking the Thames Estuary. Built in the 13th century by Hubert de Burgh. Famously painted by John Constable in 1829. The two surviving towers lean dramatically due to landslip. Free to visit and managed by English Heritage within Hadleigh Country Park.",
    tags: ['dramatic-ruin', 'photogenic', 'free-entry', 'hilltop', 'coastal', 'medieval'],
    era: '13th century',
    access: 'free'
  },
  {
    name: 'Minster Lovell Hall',
    description: "A haunting Cotswold ruin by the River Windrush — where a skeleton was found behind a wall and the mystery of the lost Lovell has never been solved.",
    history: "Built c.1440 by William Lovell in the Oxfordshire Cotswolds beside the River Windrush. Richard III visited as guest of Francis Lovell, 1st Viscount Lovell. After Lovell's disappearance following the Battle of Stoke Field (1487), a skeleton was allegedly found behind a wall centuries later. Managed by English Heritage.",
    tags: ['romantic-ruin', 'free-entry', 'riverside', 'medieval', 'haunted', 'atmospheric'],
    era: '15th century',
    access: 'free'
  },
  {
    name: 'Cong Abbey',
    description: "A Royal Abbey in Ireland's lake country — where the last High King of Ireland retreated and Romanesque stonework whispers of ancient devotion.",
    history: "Originally founded in the 7th century by Saint Feichin, rebuilt in the 12th century as an Augustinian house. Turlough Mór O'Connor, last High King of Ireland, retired and died here in 1198. Features some of Ireland's finest Romanesque and early Gothic carved stonework. The Monks' Fishing House on the river is iconic.",
    tags: ['hidden-gem', 'free-entry', 'medieval', 'gothic', 'riverside', 'atmospheric'],
    era: '12th century',
    access: 'free'
  },
  {
    name: 'Hore Abbey',
    description: "A Cistercian ruin in the shadow of the Rock of Cashel — standing alone in green fields like a silent prayer turned to stone.",
    history: "A ruined Cistercian monastery near the Rock of Cashel, County Tipperary. Founded in 1270 by Archbishop David Mac Cerbaill. Dissolved in 1540. A National Monument of Ireland. The atmospheric ruins stand in open fields with stunning views of the Rock of Cashel.",
    tags: ['dramatic-ruin', 'free-entry', 'photogenic', 'medieval', 'atmospheric'],
    era: '13th century',
    access: 'free'
  },
  {
    name: 'Kilbeggan Distillery',
    description: "Not a castle but a piece of living history — the world's oldest licensed distillery, where whiskey has flowed since 1757.",
    history: "Established in 1757, it is the oldest licensed distillery in Ireland and one of the oldest in the world. Located in Kilbeggan, County Westmeath. The original pot still and waterwheel are still in place. Reopened for production in 2007 after decades of closure. Now a working distillery and museum.",
    tags: ['well-preserved', 'kid-friendly', 'guided-tours', 'gift-shop'],
    era: '18th century',
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
