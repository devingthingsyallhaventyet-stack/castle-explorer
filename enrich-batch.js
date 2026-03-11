const fs = require('fs');
const vm = require('vm');

// Load current data
let code = fs.readFileSync('data.js', 'utf8');
const originalCode = code;

const enrichments = [
  {
    name: "Dalton Castle",
    description: "A brooding 14th-century peel tower rising from a quiet Cumbrian market town — once a monastic prison where abbots dispensed justice in the shadow of Furness Abbey.",
    history: "Built in the 14th century by monks of Furness Abbey to protect nearby Dalton-in-Furness. Served as a prison from at least 1257 until 1774. After Henry VIII dissolved the abbey, the castle fell to ruin before being repaired with abbey stone. Now owned by the National Trust and hosts a local history exhibition.",
    tags: ["well-preserved", "museum", "medieval", "norman"],
    era: "14th century",
    access: "free",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Dalton_Castle,_Cumbria"}, {name: "National Trust", url: "https://www.nationaltrust.org.uk/dalton-castle"}]
  },
  {
    name: "Ravensworth Castle",
    description: "A hauntingly beautiful Grade I ruin wrapped in a dry moat, where 14th-century sandstone towers crumble beneath centuries of ivy — pure dark academia energy.",
    history: "First recorded when King John visited in 1201. The surviving ruins date from the late 14th century, built by Henry, 1st Baron FitzHugh, who enclosed 200 acres of parkland around it in 1391. Gradually dismantled from the 16th century, its stone reused for local buildings. Grade I listed and a scheduled monument.",
    tags: ["ruins-romantic", "medieval", "atmospheric", "dark-brooding", "free-entry"],
    era: "14th century",
    access: "exterior-only",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Ravensworth_Castle_(North_Yorkshire)"}, {name: "Historic England", url: "https://historicengland.org.uk/listing/the-list/list-entry/1150657"}]
  },
  {
    name: "Wiston Castle",
    description: "One of Wales's finest motte-and-bailey castles, founded by a Flemish settler on land seized from Norman rebels — fifty stone steps climb to its dramatic hilltop perch.",
    history: "Founded after 1100 by Wizo, a Flemish settler granted land by Henry I. Captured by the Welsh several times but always retaken. Abandoned in the 13th century when its owners moved to nearby Picton Castle. Grade I listed building and scheduled monument in the care of Cadw.",
    tags: ["hilltop", "ruins-romantic", "norman", "free-entry", "photogenic"],
    era: "12th century",
    access: "free",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Wiston_Castle"}, {name: "Cadw", url: "https://cadw.gov.wales/visit/places-to-visit/wiston-castle"}]
  },
  {
    name: "Cloghan Castle",
    description: "A sturdy Offaly tower house rising from ancient monastic foundations — where a 6th-century saint's monastery became a Norman stronghold on the banks of the Shannon.",
    history: "Originally a monastery founded by St Crónán around 600 AD. The Normans fortified the site, and the current tower house dates from the medieval period. Located in the parish of Lusmagh, County Offaly, near Banagher on the River Shannon.",
    tags: ["medieval", "riverside", "atmospheric", "remote"],
    era: "Medieval",
    access: "exterior-only",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Lusmagh#Cloghan_Castle"}]
  },
  {
    name: "Cubbie Roo's Castle",
    description: "The oldest stone castle in Orkney, built by a Norse chieftain on a tiny windswept island — a raw, elemental ruin where Viking sagas come alive.",
    history: "Built around 1145 by Kolbeinn Hrúga, a powerful Norse chieftain mentioned in the Orkneyinga Saga. Located on the island of Wyre, one of Orkney's smallest inhabited islands. One of Scotland's oldest stone castles. Maintained by Historic Scotland alongside the nearby ruins of St Mary's Chapel.",
    tags: ["island", "remote", "coastal", "prehistoric", "free-entry", "atmospheric"],
    era: "12th century",
    access: "free",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Wyre,_Orkney"}, {name: "Historic Environment Scotland", url: "https://www.historicenvironment.scot/visit-a-place/places/cubbie-roos-castle/"}]
  },
  {
    name: "Castle Coeffin",
    description: "A haunted MacDougall ruin on the wild shores of Lismore, where a Norse princess's ghost is said to wander until her bones return to Norway.",
    history: "Built in the 13th century by the MacDougalls of Lorn on the site of a Viking fortress. Named after Caifen, a Danish prince whose sister allegedly haunts the castle. First documented in 1469 when granted to Sir Colin Campbell of Glenorchy. Stands on a promontory on Lismore's northwest coast, across Loch Linnhe.",
    tags: ["island", "coastal", "haunted", "ruins-romantic", "remote", "atmospheric", "medieval"],
    era: "13th century",
    access: "free",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Castle_Coeffin"}, {name: "Historic Environment Scotland", url: "https://www.trove.scot/designation/SM2433"}]
  },
  {
    name: "Mettingham Castle",
    description: "A moated medieval manor turned monastic college in deepest Suffolk — where knights gave way to canons and 13 boys learned their Latin behind stone walls.",
    history: "Founded in 1342 when Sir John de Norwich received a licence to crenellate his manor house. An Edwardian-style gatehouse guarded its stone walls. In 1394, it was given to secular canons from nearby Norton, who established Mettingham College and taught up to 13 boys. Features three moated courts and surviving gatehouse.",
    tags: ["medieval", "ruins-romantic", "atmospheric", "gardens"],
    era: "14th century",
    access: "exterior-only",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Mettingham_Castle"}, {name: "English Heritage", url: "https://www.english-heritage.org.uk/visit/places/mettingham-castle/"}]
  },
  {
    name: "Weeting Castle",
    description: "Not a castle at all but a grand 12th-century manor house built of Norfolk flint — a moated enigma designed to impress, now a romantic ruin in English Heritage care.",
    history: "Built around 1180 by Hugh de Plais as a high-status domestic dwelling mimicking castle architecture. Comprised a three-storey tower, great hall, and service block. A moat was added in the 13th century. Ceased use in the late 14th century. Became an ornamental feature of Weeting Hall from 1770. Managed by English Heritage since 1926.",
    tags: ["ruins-romantic", "medieval", "free-entry", "photogenic"],
    era: "12th century",
    access: "free",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Weeting_Castle"}, {name: "English Heritage", url: "https://www.english-heritage.org.uk/visit/places/weeting-castle/"}]
  },
  {
    name: "Scotstarvit Tower",
    description: "A perfectly preserved six-storey tower house rising from the Fife hills — home to a satirist who skewered Scottish statesmen from his lofty perch.",
    history: "Built in the third quarter of the 16th century by the Inglis family. Bought in 1611 by Sir John Scot, author of 'The Staggering State of the Scots' Statesmen', who rebuilt it in the 1620s. Later passed to the Wemyss family. Placed in National Trust for Scotland care in 1948, now managed by Historic Environment Scotland.",
    tags: ["well-preserved", "hilltop", "photogenic", "medieval", "guided-tours"],
    era: "16th century",
    access: "free",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Scotstarvit_Tower"}, {name: "Historic Environment Scotland", url: "https://www.historicenvironment.scot/visit-a-place/places/scotstarvit-tower/"}]
  },
  {
    name: "Lympne Castle",
    description: "A medieval fortress above Romney Marsh where archdeacons once held court — and Paul McCartney's Wings once recorded an album among its ancient stones.",
    history: "Built in the 1080s for the Archdeacons of Canterbury near the Roman Saxon Shore fort of Portus Lemanis. Rebuilt in the 1360s and expanded. Served as the archdeacon's residence until 1860. Restored by Robert Lorimer in 1907-12. Wings recorded sessions here for 'Back to the Egg' in 1978. Grade I listed.",
    tags: ["well-preserved", "medieval", "norman", "wedding-venue", "gardens", "photogenic"],
    era: "11th-14th century",
    access: "paid",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Lympne_Castle"}]
  },
  {
    name: "Loughor Castle",
    description: "A ruined Norman ringwork perched above the River Loughor, built atop a Roman fort — where Welsh princes and English lords battled for control of the Gower.",
    history: "Built around 1106 by Anglo-Norman lord Henry de Beaumont on the site of the Roman fort Leucarum. Attacked and burnt in 1151, captured by Llywelyn the Great in 1215. John de Braose rebuilt it with stone walls after 1220. A stone tower added in the late 13th century. Now in the care of Cadw.",
    tags: ["ruins-romantic", "norman", "hilltop", "free-entry", "riverside"],
    era: "12th century",
    access: "free",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Loughor_Castle"}, {name: "Cadw", url: "https://cadw.gov.wales/visit/places-to-visit/loughor-castle"}]
  },
  {
    name: "Arnside Tower",
    description: "A crumbling five-storey pele tower hidden in Cumbrian woodland — built against Border Reivers, scarred by fire, and slowly surrendering to time.",
    history: "Built in the second half of the 15th century as defence against Border Reivers. Constructed of limestone rubble, originally five storeys with an adjacent wing in a Scottish style rare for English towers. Suffered a serious fire in 1602 but was repaired. The northwestern side collapsed in the early 1900s. Privately owned.",
    tags: ["ruins-romantic", "woodland", "atmospheric", "dark-brooding", "medieval"],
    era: "15th century",
    access: "exterior-only",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Arnside_Tower"}]
  },
  {
    name: "Crayke Castle",
    description: "A restored 15th-century tower house crowning the highest point in its parish — where bishops of Durham ruled, Parliamentarians laid siege, and centuries of history settled into stone.",
    history: "A castle has stood here since the Norman Conquest, attributed to Bishop Hugh Pudsey. The present building was constructed around 1450 for Robert Neville, Bishop of Durham, on land held by the See since Saxon times. Slighted during the Civil War siege of York. Sold in 1648 and restored. Grade I listed.",
    tags: ["well-preserved", "hilltop", "medieval", "atmospheric", "photogenic"],
    era: "15th century",
    access: "exterior-only",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Crayke_Castle"}]
  },
  {
    name: "Clackmannan Tower",
    description: "A brooding five-storey tower house where King David II once lived and an eccentric Jacobite widow knighted Robert Burns with a sword she claimed was Robert the Bruce's.",
    history: "Dates to at least the 14th century, inhabited by King David II of Scotland. Sold to his cousin Robert Bruce, 2nd Baron of Clackmannan in 1359. Extended in the 1400s. Catherine Bruce of Clackmannan (1696-1791), a fierce Jacobite supporter, was its most famous resident. Scheduled monument managed by Historic Environment Scotland.",
    tags: ["hilltop", "medieval", "atmospheric", "haunted", "well-preserved"],
    era: "14th-15th century",
    access: "exterior-only",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Clackmannan_Tower"}, {name: "Historic Environment Scotland", url: "https://www.historicenvironment.scot/visit-a-place/places/clackmannan-tower/"}]
  },
  {
    name: "Cessford Castle",
    description: "A massive Border Reiver stronghold with walls thirteen feet thick — where the notorious Kerr clan defied English siege engines and the Earl of Surrey himself.",
    history: "Built around 1450 by Andrew Ker, ancestor of the Earls of Roxburghe. An L-plan castle with up to six storeys, two barrel-vaulted, and walls up to 13 feet thick. Besieged in 1523 by the Earl of Surrey, who admitted it could never have been taken had defence continued. Abandoned in 1650. Scheduled monument.",
    tags: ["ruins-romantic", "dark-brooding", "medieval", "atmospheric", "remote"],
    era: "15th century",
    access: "exterior-only",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Cessford_Castle"}]
  },
  {
    name: "Morton Castle",
    description: "A lonely ruin above an artificial loch in the Nith Valley — where earls of March watched over deer parks and the ghost of a murdered regent lingers in the mist.",
    history: "Part of a chain of castles along the strategically important Nith Valley. A castle existed here by 1307, held by Thomas Randolph, Earl of Moray. Destroyed per the Treaty of Berwick in 1357. Rebuilt by the earls of March in the early 15th century. Later passed to the Earls of Morton. The 4th Earl was executed in 1580 for Lord Darnley's murder.",
    tags: ["ruins-romantic", "remote", "atmospheric", "dark-brooding", "hilltop", "medieval"],
    era: "13th-15th century",
    access: "free",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Morton_Castle"}, {name: "Historic Environment Scotland", url: "https://www.historicenvironment.scot/visit-a-place/places/morton-castle/"}]
  },
  {
    name: "Dunbeath Castle",
    description: "A dramatic clifftop fortress on the wild Caithness coast where a brave wife held off Montrose's Royalist army while her husband rode to warn Edinburgh.",
    history: "First recorded in 1428, originally held by the Earl of Caithness. The Sinclairs built a four-storey tower house in 1620. In 1650, Catherine Fraser defended the castle against the Marquess of Montrose's forces while her husband Sir John Sinclair rode to Edinburgh. Mainly 17th-century with 19th-century extensions. Category A listed.",
    tags: ["cliffside", "coastal", "atmospheric", "dark-brooding", "medieval", "gardens"],
    era: "15th-17th century",
    access: "exterior-only",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Dunbeath_Castle"}]
  },
  {
    name: "Hussey Tower",
    description: "A solitary medieval tower in the heart of Boston, Lincolnshire — a rare survivor from the age of tax collectors and justices of the peace.",
    history: "Built around 1450, commissioned by Richard Benyngton, a collector of taxes and Justice of the Peace for Boston. One of the few surviving medieval structures in the town. Grade II* listed building.",
    tags: ["medieval", "well-preserved", "free-entry"],
    era: "15th century",
    access: "free",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Hussey_Tower"}, {name: "Heritage Lincolnshire", url: "https://www.heritagelincolnshire.org/explore-with-us/historic-sites/hussey-tower"}]
  },
  {
    name: "Greenhalgh Castle",
    description: "Lancashire's last Royalist holdout — a ruined Tudor castle gifted by Henry VII to the man who helped him seize the crown at Bosworth Field.",
    history: "Built in 1490 by Thomas Stanley, 1st Earl of Derby, on land reportedly gifted by his stepson Henry Tudor for helping defeat Richard III at Bosworth. John Leland called it 'a pretty castle of the lords of Derby'. During the Civil War, it was one of the last two Royalist strongholds in Lancashire, enduring a bitter siege before surrendering in May 1645.",
    tags: ["ruins-romantic", "medieval", "tudor", "atmospheric", "dark-brooding"],
    era: "15th century",
    access: "exterior-only",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Greenhalgh_Castle"}]
  },
  {
    name: "Breachacha Castle",
    description: "A 15th-century Maclean stronghold on the shores of a Hebridean loch — where Samuel Johnson once stayed and the winds of Coll have battered stone for six centuries.",
    history: "A 15th-century tower house on the island of Coll, stronghold of the Macleans of Coll since 1431. Superseded by a new dwelling in 1750 but remained partially occupied. Samuel Johnson and James Boswell stayed at the newer castle during their Hebrides tour. Restored to livable condition in the 1960s. Category A listed.",
    tags: ["island", "coastal", "remote", "medieval", "atmospheric", "photogenic"],
    era: "15th century",
    access: "exterior-only",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Breachacha_Castle"}]
  },
  {
    name: "Scattery Island",
    description: "A haunting uninhabited island in the Shannon Estuary where an ancient round tower and ruined monastery stand sentinel — abandoned by its last residents in 1969.",
    history: "Saint Senan founded a monastery here between 535 and 540 AD, which became the seat of a bishopric. Features one of Ireland's finest round towers and several ruined churches. Raided by Vikings multiple times. The last permanent residents left in 1969. Now managed by the Office of Public Works with a visitor centre.",
    tags: ["island", "remote", "celtic", "atmospheric", "ruins-romantic", "free-entry"],
    era: "6th century",
    access: "free",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Inis_Cathaigh"}]
  },
  {
    name: "Macduff's Castle",
    description: "A Shakespearean ruin above the Wemyss Caves — where the legendary Thane of Fife's descendants held court and Edward I once slept before betraying his host.",
    history: "Associated with the MacDuff Earls of Fife, possibly dating to the 11th century in the age of King Macbeth. The Wemyss family owned it from the 14th century. Edward I stayed here in 1304 before ordering its destruction after the host joined Robert the Bruce. Later expanded by the Colvilles in the 1530s. Partially demolished in 1967.",
    tags: ["ruins-romantic", "coastal", "dark-brooding", "medieval", "atmospheric"],
    era: "14th-16th century",
    access: "exterior-only",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Macduff%27s_Castle"}]
  },
  {
    name: "Menstrie Castle",
    description: "Birthplace of the man who founded Nova Scotia — a restored 16th-century manor where poetry, politics, and colonial ambition all began under one Scottish roof.",
    history: "Built around 1560 by the Alexander family. Birthplace of Sir William Alexander (c.1577), poet, Privy Councillor, Secretary of State, and 1st Earl of Stirling, who was instrumental in founding Nova Scotia. Later owned by the Holburn family. Restored in the 20th century. Now contains holiday flats and a museum run by the community.",
    tags: ["well-preserved", "museum", "medieval", "tudor"],
    era: "16th century",
    access: "free",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Menstrie_Castle"}, {name: "National Trust for Scotland", url: "https://www.nts.org.uk/"}]
  },
  {
    name: "Dunaverty Castle",
    description: "A wind-scoured headland at the tip of Kintyre where a MacDonald fortress once commanded three seas — and one of Scotland's bloodiest massacres unfolded.",
    history: "A natural stronghold on a rocky headland at the southern tip of Kintyre, accessible only by drawbridge. Mentioned in records from 1248. Garrisoned by Alexander III against Norwegian invasion in 1263. Later a Clan Donald stronghold. Scene of the 1647 Dunaverty massacre when Covenanter forces killed up to 300 Royalists. Now only earthworks remain.",
    tags: ["cliffside", "coastal", "remote", "dark-brooding", "atmospheric", "medieval"],
    era: "13th century",
    access: "free",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Dunaverty_Castle"}]
  },
  {
    name: "Skelbo Castle",
    description: "A crumbling 14th-century keep overlooking Loch Fleet where commissioners once waited for a child queen who would never arrive — the Maid of Norway, dead at seven.",
    history: "Granted to the Moravia family in the early 13th century. In 1290, Edward I's commissioners awaited the arrival of Margaret, Maid of Norway at Skelbo, only to learn of her death aged 7 during her voyage from Norway. Captured by Robert the Bruce in 1308. Subject of ownership disputes in the 1490s. Scheduled monument.",
    tags: ["ruins-romantic", "coastal", "atmospheric", "dark-brooding", "medieval", "remote"],
    era: "14th century",
    access: "free",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Skelbo_Castle"}]
  },
  {
    name: "Dalquharran Castle",
    description: "A Robert Adam masterpiece slowly crumbling in the Ayrshire countryside — where neoclassical elegance meets centuries of Kennedy family ambition and an older castle's ghost.",
    history: "The estate includes two castles: the old ruined medieval castle (scheduled monument since 1935) and the Robert Adam-designed mansion completed around 1790 for Thomas Kennedy. The Kennedy family held the property from at least 1474. The mansion was habitable until the 1960s but is now deteriorating. Category A listed.",
    tags: ["ruins-romantic", "atmospheric", "victorian", "gardens", "photogenic"],
    era: "15th century / 1790",
    access: "exterior-only",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Dalquharran_Castle"}]
  },
  {
    name: "Kinlochaline Castle",
    description: "The 'Castle of Butter' — a brooding tower house at the head of Loch Aline, paid for in dairy and burned in civil war, now restored as a private Highland home.",
    history: "A 15th-century tower house in Morvern, also known as Caisteal an Ime (Castle of Butter) after the legend that a MacInnes lady paid its builder in butter. Four storeys with 10-foot-thick sandstone walls. Burned in 1644 during Alasdair Mac Colla's campaign, attacked again in 1679. Abandoned about 1690. Restored in the late 1990s.",
    tags: ["coastal", "well-preserved", "remote", "medieval", "atmospheric"],
    era: "15th century",
    access: "exterior-only",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Kinlochaline_Castle"}]
  },
  {
    name: "Torthorwald Castle",
    description: "A massive ruined tower standing guard over a Dumfriesshire village — where feuding Border families, Kirkpatricks and Carlyles, fought over stone and power for centuries.",
    history: "Originally a 12th-century motte-and-bailey. The stone castle dates from the 14th century, built by the Kirkpatrick family after Robert the Bruce confiscated the lands in 1306. Passed to the Carlyle family through marriage in 1425. Attacked and sacked in 1544 by Lord Carlyle. The ruins comprise four phases of building up to 60 feet high.",
    tags: ["ruins-romantic", "medieval", "dark-brooding", "atmospheric"],
    era: "14th century",
    access: "free",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Torthorwald_Castle"}]
  }
];

// Apply enrichments
let updated = 0;
for (const e of enrichments) {
  // Find the castle entry by name - use regex to locate it
  const nameEscaped = e.name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const nameRegex = new RegExp(`(name:\\s*["'])${nameEscaped}(["'])`);
  const idx = code.search(nameRegex);
  if (idx === -1) {
    console.log(`SKIP: Could not find "${e.name}" in data.js`);
    continue;
  }
  
  // Find the closing of this castle object (next },\n or similar)
  // We need to find the object boundaries
  let braceCount = 0;
  let objStart = idx;
  // Walk backward to find the opening {
  while (objStart > 0 && code[objStart] !== '{') objStart--;
  let objEnd = objStart;
  braceCount = 0;
  for (let i = objStart; i < code.length; i++) {
    if (code[i] === '{') braceCount++;
    if (code[i] === '}') braceCount--;
    if (braceCount === 0) { objEnd = i; break; }
  }
  
  let objStr = code.substring(objStart, objEnd + 1);
  
  // Update/add fields
  function updateField(obj, field, value) {
    const fieldRegex = new RegExp(`(${field}:\\s*)([\\s\\S]*?)(?=,\\s*\\w+:|\\s*})`);
    const match = obj.match(fieldRegex);
    if (match) {
      return obj.replace(fieldRegex, `$1${value},`);
    }
    // Add before closing brace
    return obj.replace(/\s*}$/, `,\n    ${field}: ${value}\n  }`);
  }
  
  let newObj = objStr;
  
  // Set description
  if (e.description) {
    const descVal = JSON.stringify(e.description);
    if (newObj.match(/description:\s*/)) {
      newObj = newObj.replace(/description:\s*["'][^"']*["']/, `description: ${descVal}`);
    } else {
      newObj = newObj.replace(/\s*}$/, `,\n    description: ${descVal}\n  }`);
    }
  }
  
  // Set history
  if (e.history) {
    const histVal = JSON.stringify(e.history);
    if (newObj.match(/history:\s*/)) {
      newObj = newObj.replace(/history:\s*["'][^"']*["']/, `history: ${histVal}`);
    } else {
      newObj = newObj.replace(/\s*}$/, `,\n    history: ${histVal}\n  }`);
    }
  }
  
  // Set tags
  if (e.tags) {
    const tagsVal = JSON.stringify(e.tags);
    if (newObj.match(/tags:\s*\[/)) {
      newObj = newObj.replace(/tags:\s*\[[^\]]*\]/, `tags: ${tagsVal}`);
    } else {
      newObj = newObj.replace(/\s*}$/, `,\n    tags: ${tagsVal}\n  }`);
    }
  }
  
  // Set era
  if (e.era) {
    const eraVal = JSON.stringify(e.era);
    if (newObj.match(/era:\s*/)) {
      newObj = newObj.replace(/era:\s*["'][^"']*["']/, `era: ${eraVal}`);
    } else {
      newObj = newObj.replace(/\s*}$/, `,\n    era: ${eraVal}\n  }`);
    }
  }
  
  // Set access
  if (e.access) {
    const accVal = JSON.stringify(e.access);
    if (newObj.match(/access:\s*/)) {
      newObj = newObj.replace(/access:\s*["'][^"']*["']/, `access: ${accVal}`);
    } else {
      newObj = newObj.replace(/\s*}$/, `,\n    access: ${accVal}\n  }`);
    }
  }
  
  // Set sources
  if (e.sources) {
    const srcVal = JSON.stringify(e.sources);
    if (newObj.match(/sources:\s*\[/)) {
      newObj = newObj.replace(/sources:\s*\[[^\]]*\]/, `sources: ${srcVal}`);
    } else {
      newObj = newObj.replace(/\s*}$/, `,\n    sources: ${srcVal}\n  }`);
    }
  }
  
  code = code.replace(objStr, newObj);
  updated++;
  console.log(`OK: ${e.name}`);
}

fs.writeFileSync('data.js', code, 'utf8');
console.log(`\nDone. Updated ${updated} of ${enrichments.length} sites.`);
