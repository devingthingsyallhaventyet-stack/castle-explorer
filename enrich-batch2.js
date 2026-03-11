const fs = require('fs');
const vm = require('vm');
let raw = fs.readFileSync('data.js', 'utf8');
let code = raw.replace(/^const /gm, 'var ');
const ctx = {};
vm.runInNewContext(code, ctx);
const castles = ctx.CASTLES;

const enrichments = [
  {
    name: "Balmerino Abbey",
    description: "A Cistercian ruin on the Fife coast where a 13th-century queen lies buried and ancient chestnut trees shade crumbling chapter house walls. Founded on a site sacred since the 4th century, it breathes quiet devotion and deep Scottish history.",
    history: "Founded 1227-1229 by Ermengarde de Beaumont and Alexander II, with monks from Melrose Abbey. The site may have been sacred since the 4th century, when St Merinac established a chapel. Burned by an English force in 1547, damaged again during the Reformation in 1559. Became a temporal lordship in 1603.",
    tags: ["ruins-romantic", "coastal", "atmospheric", "medieval", "hidden-gem", "free-entry"],
    access: "free", era: "13th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Balmerino_Abbey"}]
  },
  {
    name: "Clare Castle",
    description: "An unusually tall Norman motte crowned with flint wall fragments in sleepy Suffolk — once the seat of Elizabeth de Clare, one of medieval England's wealthiest women. The earthworks and tower remnants still command the gentle countryside.",
    history: "Built shortly after the Norman Conquest in 1066 by Richard Fitz Gilbert as caput of the feudal barony. In the 14th century it was seat of Elizabeth de Clare, one of England's wealthiest women. Passed to the Crown and disused by 1600. Damaged by the Great Eastern Railway in 1867. Scheduled Monument and Grade II* listed.",
    tags: ["ruins-romantic", "free-entry", "norman", "medieval", "dog-friendly"],
    access: "free", era: "11th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Clare_Castle"}]
  },
  {
    name: "Dacre Castle",
    description: "A 66-foot sandstone tower house rising from a medieval moat in the quiet Lake District village of Dacre — built against the threat of Scottish raids, with ornate carvings and four crenellated turrets. Now a private home you can only admire from outside.",
    history: "Built mid-14th century, probably by Margaret Multon, wife of Ralph Dacre, against the threat of Scottish invasion. The 66-foot tower features crenellations, four turrets, and an ornate lavabo in the main hall. Renovated in the 1670s and 1960s. Now a private residence.",
    tags: ["medieval", "atmospheric", "hidden-gem"],
    access: "exterior-only", era: "14th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Dacre_Castle"}]
  },
  {
    name: "Chipchase Castle",
    description: "A magnificent Jacobean mansion fused with a 14th-century pele tower in the wild borderlands north of Hadrian's Wall. The Heron family's fortress-turned-estate sits in gorgeous Northumberland countryside, with gardens occasionally open to the public.",
    history: "The massive four-storey tower house was built mid-14th century by Walter Heron. In 1621, Cuthbert Heron demolished the adjoining house and built a fine Jacobean mansion, keeping the tower attached. His son George was killed at the Battle of Marston Moor in 1644. Grade I listed and Scheduled Ancient Monument.",
    tags: ["well-preserved", "gardens", "medieval", "atmospheric"],
    access: "paid", era: "14th-17th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Chipchase_Castle"}]
  },
  {
    name: "Dryslwyn Castle",
    description: "A Welsh-built fortress crowning a rocky hilltop above the golden Towy Valley — one of the most important surviving structures built by a native Welsh prince. The panoramic views alone are worth the climb, and the ruins pulse with the spirit of Deheubarth.",
    history: "Built c.1220s by a prince of Deheubarth, probably Rhys Gryg, as a key stronghold alongside Dinefwr Castle. Besieged in 1246 and repeatedly fought over between Welsh and English forces. Grade I listed building. Managed by Cadw with panoramic views over the Towy Valley.",
    tags: ["ruins-romantic", "hilltop", "photogenic", "free-entry", "atmospheric", "medieval"],
    access: "free", era: "13th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Dryslwyn_Castle"}, {name: "Cadw", url: "https://cadw.gov.wales/visit/places-to-visit/dryslwyn-castle"}]
  },
  {
    name: "Carlow Castle",
    description: "Ireland's first towered keep — a revolutionary Norman design with massive corner towers flanking the River Barrow. Only two towers survive after a disastrous 19th-century demolition attempt, but their scale still takes your breath away.",
    history: "Built 1207-1213, probably by William Marshal. The first castle of its kind in Ireland — a huge rectangular tower with four three-quarter-circular corner towers. National Monument. Much of the castle was accidentally destroyed in 1814 when a local doctor tried to reduce it to make room for a lunatic asylum.",
    tags: ["ruins-romantic", "riverside", "norman", "medieval", "free-entry"],
    access: "free", era: "13th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Carlow_Castle"}]
  },
  {
    name: "Ballymote Castle",
    description: "The last and most symmetrical of Connacht's great Norman castles — a massive keepless enclosure with imposing corner towers, built to protect a conquered province. Even in ruin, its geometric perfection is startlingly modern.",
    history: "Built c.1300 by Richard Óg de Burgh, 2nd Earl of Ulster, to protect his newly won possessions in County Sligo. The most symmetrical of all Irish keepless castles, with similarities to Beaumaris. Fought over during the Nine Years' War. National Monument managed by the Office of Public Works.",
    tags: ["ruins-romantic", "norman", "medieval", "atmospheric", "free-entry"],
    access: "free", era: "14th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Ballymote_Castle"}]
  },
  {
    name: "Oranmore Castle",
    description: "A 15th-century tower house perched at the edge of Galway Bay, where Clanricarde lords once held out against Confederate rebels and writer Anita Leslie later threw legendary parties. Restored from ruin, it's a living piece of Wild Atlantic heritage.",
    history: "Built c.15th century, possibly on an older fortification. Used as a Clanricarde stronghold. During the 1642 Confederate rebellion, the 5th Earl held the castle against rebels. Abandoned in the 19th century. Purchased by writer Anita Leslie in 1947 for £200 and reroofed. Now owned by her daughter Leonie.",
    tags: ["coastal", "well-preserved", "medieval", "atmospheric", "hidden-gem"],
    access: "exterior-only", era: "15th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Oranmore_Castle"}]
  },
  {
    name: "Dundonald Castle",
    description: "A royal tower house built by Robert II to celebrate becoming king, rising from the remains of a vitrified Iron Age hill fort. The layers here go deep — from ancient tribal stronghold to medieval seat of Scottish kings, with views across Ayrshire to the sea.",
    history: "Built for Robert II on his accession to the throne in 1371, on the site of a vitrified Iron Age hill fort. Used as a royal residence by Robert II and Robert III. The place name means 'fort of Donald'. The hill fort's timber-laced walls were fired c.1000 AD when the Kingdom of Strathclyde fell.",
    tags: ["hilltop", "well-preserved", "medieval", "atmospheric", "prehistoric", "guided-tours"],
    access: "paid", era: "14th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Dundonald_Castle"}]
  },
  {
    name: "Llandovery Castle",
    description: "A Norman stronghold on a knoll above the River Towy, fought over endlessly between Welsh princes and English kings. A modern statue of the Welsh hero Llywelyn ap Gruffydd Fychan guards what remains — a monument to Welsh resistance in a charming market town.",
    history: "Norman motte-and-bailey probably begun in 1116 by Richard Fitz Pons. Repeatedly lost to the Princes of Deheubarth. Henry II spent heavily repairing it 1159-62 but the Welsh recaptured it anyway. Finally fell to Edward I in 1277. Burned in the early 16th century and never repaired. Grade II* listed.",
    tags: ["ruins-romantic", "riverside", "free-entry", "norman", "medieval"],
    access: "free", era: "12th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Llandovery_Castle"}]
  },
  {
    name: "Saltwood Castle",
    description: "Where the four knights plotted the murder of Thomas Becket — this Norman castle later became home to art historian Kenneth Clark and his politician son Alan. Centuries of intrigue behind private walls, from medieval archbishops to 20th-century diarists.",
    history: "11th century origins, expanded in the 13th-14th centuries. Appropriated by Archbishop Lanfranc after the Norman Conquest. Reputedly where the four knights met before assassinating Thomas Becket in 1170. Ceded to Henry VIII in 1540. Restored in the 1880s and 1930s. Home of Kenneth Clark, then Alan Clark. Grade I listed.",
    tags: ["norman", "medieval", "atmospheric", "gardens"],
    access: "exterior-only", era: "11th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Saltwood_Castle"}]
  },
  {
    name: "Noltland Castle",
    description: "A bristling fortress on remote Westray in Orkney, built by a man who plotted the murder of Lord Darnley. With more gun loops than almost any Scottish castle and nine-foot walls, Noltland is paranoia made architecture — hauntingly isolated on the island edge.",
    history: "Built in the 1560s by Gilbert Balfour, Master of the Royal Household to Mary Queen of Scots and accomplice in Lord Darnley's murder. Seized during political upheaval, burned by Covenanters in 1650 after the Battle of Carbisdale. Never completed. In state care since 1911.",
    tags: ["remote", "island", "dark-brooding", "atmospheric", "ruins-romantic", "free-entry"],
    access: "free", era: "16th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Noltland_Castle"}]
  },
  {
    name: "Lochmaben Castle",
    description: "A massive royal fortress on the shores of Castle Loch, built by Edward I to control the Scottish borders and later rebuilt by James IV. The Bruce family's original motte lies nearby — layers of Anglo-Scottish conflict reflected in dark water.",
    history: "The original motte-and-bailey was built c.1160 by the Bruce family, Lords of Annandale. Edward I replaced it c.1300 with a massive stone castle at the south end of Castle Loch. Besieged and razed by Archibald Douglas in 1384. Rebuilt under James IV, 1488-1513. Now managed by Historic Environment Scotland.",
    tags: ["ruins-romantic", "riverside", "atmospheric", "medieval", "free-entry"],
    access: "free", era: "13th-16th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Lochmaben_Castle"}]
  },
  {
    name: "Deganwy Castle",
    description: "One of Wales' most ancient fortified sites — a volcanic plug fortress that was headquarters to the legendary 6th-century King Maelgwn Gwynedd. Only earthworks remain, but the twin hilltop views over the Conwy estuary are otherworldly.",
    history: "Possibly first occupied in Roman times, became the headquarters of Maelgwn Gwynedd, King of Gwynedd (c.520-547). Rebuilt multiple times through the medieval period. A hoard of 204 silver Cnut pennies was found nearby in 1979. The 110m volcanic plug provides commanding views over the River Conwy.",
    tags: ["ruins-romantic", "hilltop", "coastal", "free-entry", "atmospheric", "celtic", "prehistoric", "medieval"],
    access: "free", era: "6th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Deganwy_Castle"}]
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

const out = 'const CASTLES = ' + JSON.stringify(castles, null, 2) + ';\n';
fs.writeFileSync('data.js', out, 'utf8');
console.log(`\nUpdated ${updated}/${enrichments.length} sites`);
