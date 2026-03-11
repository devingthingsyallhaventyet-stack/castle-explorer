const fs = require('fs');
const vm = require('vm');

// Read and parse
let raw = fs.readFileSync('data.js', 'utf8');
let code = raw.replace(/^const /gm, 'var ');
const ctx = {};
vm.runInNewContext(code, ctx);
const castles = ctx.CASTLES;

const enrichments = [
  {
    name: "Mugdock Castle",
    description: "A brooding 14th-century Graham stronghold wrapped in ancient woodland, its solitary tower rising from the mossy ruins of a clan empire. Atmospheric walks through Mugdock Country Park lead to this hauntingly beautiful shell — dark heritage meets wild Scottish countryside.",
    history: "Built by the Graham clan in the 14th century, Mugdock was their power base for over 300 years. The famous Marquess of Montrose may have been born here in 1612. Slighted during the Bishops' Wars in 1641, the castle was abandoned when the family moved to Buchanan Castle. Now a scheduled monument in Mugdock Country Park.",
    tags: ["ruins-romantic", "woodland", "free-entry", "atmospheric", "dark-brooding", "dog-friendly", "hidden-gem"],
    access: "free", era: "14th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Mugdock_Castle"}]
  },
  {
    name: "Fotheringhay Castle",
    description: "A windswept mound beside the River Nene is all that remains of the castle where Mary Queen of Scots was executed and Richard III was born. The weight of history here is staggering — two of England's most dramatic stories, one lonely earthwork.",
    history: "Founded c.1100 by Simon de Senlis, this Norman motte-and-bailey became a favoured York residence. Richard III was born here in 1452. Most infamously, Mary Queen of Scots was tried and beheaded within its walls in 1587. Dismantled in the 1630s, only the earthworks survive as a Scheduled Monument.",
    tags: ["ruins-romantic", "riverside", "free-entry", "atmospheric", "dark-brooding", "norman", "medieval"],
    access: "free", era: "12th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Fotheringhay_Castle"}]
  },
  {
    name: "Auchindoun Castle",
    description: "A stark L-plan tower perched on prehistoric earthworks above the whisky country of Speyside. Burned, besieged, and fought over by rival clans, Auchindoun stands in wild isolation — a monument to the savage beauty of Highland feuds.",
    history: "Built mid-15th century, possibly by Robert Cochrane, favourite of James III. Passed to Clan Ogilvy in 1489, then Clan Gordon in 1535. Burned by Clan Mackintosh in 1592 in revenge for the killing of the Bonny Earl of Moray. Set within prehistoric earthworks that predate the castle by centuries.",
    tags: ["ruins-romantic", "hilltop", "remote", "atmospheric", "dark-brooding", "free-entry", "medieval"],
    access: "free", era: "15th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Auchindoun_Castle"}]
  },
  {
    name: "Tarbert Castle",
    description: "A royal stronghold crowning the harbour at Tarbert, where Robert the Bruce once fortified and James IV plotted the fall of the Lords of the Isles. Sweeping views over Loch Fyne and the Kintyre peninsula make this ruin endlessly photogenic.",
    history: "Strategic royal castle with origins before the 14th century. Reinforced by Robert the Bruce in the 1320s with an outer bailey and towers. James IV added a tower house in the 1490s during his campaign against the Lords of the Isles. Recently restored with community efforts. Views stretch to the Firth of Clyde.",
    tags: ["ruins-romantic", "coastal", "hilltop", "photogenic", "well-preserved", "free-entry", "medieval"],
    access: "free", era: "13th-16th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Tarbert_Castle"}]
  },
  {
    name: "Beauly Priory",
    description: "Founded by French monks who named this place 'beau lieu' — beautiful place — these 13th-century ruins still feel like hallowed ground. Roofless arches frame Highland skies, and John Keats once wrote poetry among its scattered skulls.",
    history: "Founded c.1230 as a Valliscaulian priory, possibly by Alexander II and John Byset. The French monks gave Beauly its name — 'beau lieu' (beautiful place). Became Cistercian in 1510. Dissolved in 1634. John Keats visited in 1818 and wrote a poem about skulls found here.",
    tags: ["ruins-romantic", "atmospheric", "free-entry", "gothic", "medieval", "hidden-gem"],
    access: "free", era: "13th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Beauly_Priory"}]
  },
  {
    name: "Cadzow Castle",
    description: "Perched above a dramatic gorge in ancient royal parkland, Cadzow's crumbling walls overlook the Avon Water where white cattle still roam. A medieval hunting lodge for Scottish kings, now a moody ruin in one of Scotland's most atmospheric country parks.",
    history: "Site of a hunting lodge for the Kings of Strathclyde, later used by David I (who issued charters here from 1139), Alexander II, Alexander III, and Robert the Bruce. Rebuilt 1500-1550 by the Hamilton family. Sits above the Avon Gorge in Chatelherault Country Park.",
    tags: ["ruins-romantic", "woodland", "riverside", "atmospheric", "free-entry", "medieval", "dog-friendly"],
    access: "free", era: "12th-16th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Cadzow_Castle"}]
  },
  {
    name: "Crickhowell Castle",
    description: "Norman ruins rising from a green spur above the River Usk in the Brecon Beacons — a moody, overgrown motte surrounded by one of Wales' prettiest market towns. The shell keep foundations whisper of centuries of Welsh-Norman conflict.",
    history: "Built c.1121 by Robert Turberville, Norman tenant of Marcher lord Bernard de Neufmarche. Attacked by Welsh rebels in 1172. Passed through the Turberville family for generations. Grade I listed building with visible motte and buried shell keep foundations.",
    tags: ["ruins-romantic", "riverside", "free-entry", "norman", "medieval", "photogenic"],
    access: "free", era: "12th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Crickhowell_Castle"}]
  },
  {
    name: "Penhow Castle",
    description: "Claimed as the oldest continuously inhabited castle in Wales, Penhow has been lived in since the Normans built it in the 12th century. A fortified manor layered with centuries of additions — from medieval tower to Tudor great hall.",
    history: "Built c.1129 by Sir Roger de St Maur (Seymour family) after the Norman invasion of Wales, on lands seized from Caradog ap Gruffydd, Prince of Gwent. Extended in the 15th and 17th centuries. Passed to the Somersets in the 16th century. Grade II* listed.",
    tags: ["well-preserved", "medieval", "norman", "tudor", "hidden-gem"],
    access: "paid", era: "12th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Penhow_Castle"}]
  },
  {
    name: "Bramber Castle",
    description: "A Norman gatehouse fragment stands sentinel over the River Adur in this sleepy Sussex village — once the power centre of the fearsome de Braose barony. The towering wall section and tree-covered motte make for quietly dramatic photos.",
    history: "Built c.1070 by William de Braose after the Norman Conquest as the administrative hub of the Rape of Bramber, controlling the Adur estuary. Reinforced with materials from demolished Knepp Castle on King John's orders. Passed to the Mowbrays in 1326. English Heritage.",
    tags: ["ruins-romantic", "riverside", "free-entry", "norman", "atmospheric", "dog-friendly"],
    access: "free", era: "11th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Bramber_Castle"}, {name: "English Heritage", url: "https://www.english-heritage.org.uk/visit/places/bramber-castle/"}]
  },
  {
    name: "Thirlwall Castle",
    description: "Built with stones plundered from Hadrian's Wall, this 12th-century border castle broods over the River Tipalt in wild Northumberland. Its very name means 'gap in the wall' — a ruin literally made from Roman ruins, layered history you can touch.",
    history: "Built in the 12th century by the Thirlwall family using stones from nearby Hadrian's Wall. The name means 'perforated wall' — a reference to a gap in the Roman fortification. Grade I listed and Scheduled Ancient Monument. Fell into disrepair in the 17th century.",
    tags: ["ruins-romantic", "riverside", "remote", "atmospheric", "dark-brooding", "free-entry", "medieval", "norman"],
    access: "free", era: "12th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Thirlwall_Castle"}]
  },
  {
    name: "Shap Abbey",
    description: "The last English abbey to fall to Henry VIII's dissolution, Shap's romantic ruins stand alone beside the River Lowther in the Lake District fells. Its surviving tower rises from the quiet valley like a final prayer — hauntingly remote.",
    history: "Premonstratensian abbey founded in 1190 near Kendal, moved to this riverside site in 1199. Abbot Richard Redman became Bishop of Ely. The last English monastery dissolved, surrendering in 1540. Managed by English Heritage within the Lake District National Park.",
    tags: ["ruins-romantic", "riverside", "remote", "atmospheric", "free-entry", "medieval", "hidden-gem"],
    access: "free", era: "12th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Shap_Abbey"}, {name: "English Heritage", url: "https://www.english-heritage.org.uk/visit/places/shap-abbey/"}]
  },
  {
    name: "Egremont Castle",
    description: "A Norman motte-and-bailey commanding the town from above the River Ehen, with a legendary horn that only the rightful heir could blow. Wordsworth immortalised it in verse, and the atmospheric gatehouse arch still frames Cumbrian sunsets.",
    history: "Built on a Danish fort site after the 1092 conquest of Cumberland. The present castle was founded 1120-1135 by William Meschin, who also established the town and St Bees Priory. Extended in the 13th century. Inspired Wordsworth's poem 'The Horn of Egremont Castle'. Grade I listed.",
    tags: ["ruins-romantic", "hilltop", "riverside", "free-entry", "norman", "medieval", "atmospheric"],
    access: "free", era: "12th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Egremont_Castle"}]
  },
  {
    name: "Sheriff Hutton Castle",
    description: "A towering quadrangular fortress rising from the Vale of York — once a power base for the Nevilles and a prison for young royal heirs. Its sandstone towers still reach nearly 100 feet, dominating the skyline of this quiet village.",
    history: "Original motte-and-bailey built c.1135-1154 by Bertram de Bulmer, Sheriff of York. The stone castle was built by John, Lord Neville in the 1380s, possibly by architect John Lewyn (who also built Bolton Castle). Richard III used it as his northern power base. Privately owned.",
    tags: ["medieval", "atmospheric", "dark-brooding"],
    access: "exterior-only", era: "14th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Sheriff_Hutton_Castle"}]
  },
  {
    name: "Mingary Castle",
    description: "A hexagonal fortress clinging to a sea-washed ridge on the remote Ardnamurchan peninsula — where clans warred, the Spanish Armada anchored, and kings schemed to break the Lords of the Isles. Recently restored, with nine-foot-thick walls and endless ocean views.",
    history: "13th or 14th century castle built by the MacDougalls or MacDonalds of Ardnamurchan. Used by James IV against Clan Donald in the 1490s. Besieged in 1515 and 1517. A Spanish Armada ship anchored here in 1588. Recently restored and available as accommodation.",
    tags: ["coastal", "remote", "well-preserved", "atmospheric", "medieval", "photogenic"],
    access: "paid", era: "13th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Mingary_Castle"}]
  },
  {
    name: "Hylton Castle",
    description: "A striking Gothic gatehouse tower adorned with medieval heraldic shields — one of the most richly decorated castle facades in northern England. Its carved coats of arms read like a who's-who of 14th-century Northumbrian nobility.",
    history: "Originally wooden, built by the Hilton family after the Norman Conquest. Rebuilt in stone c.1390 by Sir William Hylton. The west facade features remarkable heraldic devices. Gothicised in the 18th century, briefly a school in the 1840s. English Heritage.",
    tags: ["gothic", "medieval", "norman", "free-entry", "atmospheric"],
    access: "free", era: "14th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Hylton_Castle"}, {name: "English Heritage", url: "https://www.english-heritage.org.uk/visit/places/hylton-castle/"}]
  },
  {
    name: "Pengersick Castle",
    description: "Reputedly the most haunted castle in Britain, this Tudor tower house lurks near the Cornish coast at Praa Sands. Its painted wainscotting, ghost legends, and brooding atmosphere make it irresistible for anyone drawn to the darker side of heritage.",
    history: "Built c.1510 by William Worth, this fortified manor features one of the few preserved tower houses of its type in Britain. The interior once had painted panels with verses and proverbs. Grade I listed. Occasionally opens for ghost tours and heritage events.",
    tags: ["haunted", "dark-brooding", "coastal", "tudor", "atmospheric", "hidden-gem"],
    access: "paid", era: "16th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Pengersick_Castle"}]
  },
  {
    name: "Bickleigh Castle",
    description: "A medieval water castle on the banks of the River Exe in deepest Devon — part Norman chapel, part Courtenay mansion, part Civil War survivor. The atmospheric Grade I gatehouse and courtyard buildings span centuries of West Country history.",
    history: "Norman motte castle of the late 11th century, dismantled mid-12th century. A stone chapel was built in the bailey. In the 15th century the Courtenay family built a mansion. The main building was destroyed in the English Civil War; gatehouse and chapel survived. Now a wedding venue.",
    tags: ["riverside", "medieval", "norman", "gardens", "wedding-venue", "atmospheric"],
    access: "paid", era: "11th-15th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Bickleigh_Castle"}]
  }
];

let updated = 0;
for (const e of enrichments) {
  const castle = castles.find(c => c.name === e.name);
  if (!castle) { console.log(`SKIP: ${e.name}`); continue; }
  if (e.description) castle.description = e.description;
  if (e.history) castle.history = e.history;
  if (e.tags) castle.tags = e.tags;
  if (e.access) castle.access = e.access;
  if (e.era) castle.era = e.era;
  if (e.sources) castle.sources = e.sources;
  updated++;
  console.log(`OK: ${e.name}`);
}

// Write back
const out = 'const CASTLES = ' + JSON.stringify(castles, null, 2) + ';\n';
fs.writeFileSync('data.js', out, 'utf8');
console.log(`\nUpdated ${updated}/${enrichments.length} sites`);
