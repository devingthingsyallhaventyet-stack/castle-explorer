const fs = require('fs');

let raw = fs.readFileSync('data.js', 'utf8');
const prefix = 'const CASTLES = ';
const jsonStr = raw.substring(prefix.length).replace(/;\s*$/, '');
const castles = JSON.parse(jsonStr);

const enrichments = {
  "Cabra Castle": {
    description: "A romantic 18th-century castle hotel draped in ivy and legend — where the drumlands of Cavan meet centuries of Irish intrigue and old-world elegance.",
    history: "Dating back to 1760, built on land that originally contained the medieval Cormey Castle. The site changed hands during the Cromwellian Wars. The current castle was built by the Foster family and later expanded in the Gothic style in 1813. The aristocratic Pratt family lived nearby on the Cabra Estate. Now operates as a luxury castle hotel surrounded by ancient parkland.",
    tags: ["atmospheric", "romantic", "woodland", "wedding-venue", "events-venue"],
    access: "paid",
    era: "18th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Cabra_Castle"}, {name: "Cabra Castle", url: "https://www.cabracastle.com/history"}]
  },
  "Castlemartyr Resort": {
    description: "An 800-year-old estate where Knights Templar, Strongbow, and Sir Walter Raleigh all left their mark — now a five-star retreat amid 220 acres of Cork woodland.",
    history: "First built by the Knights Templar in 1210, the estate has been owned by some of history's most colourful figures including Strongbow and Sir Walter Raleigh. The 17th-century manor house was extensively restored and opened as a luxury resort in 2008. Set within 220 acres of East Cork woodland, with ruins of the original castle still visible in the grounds.",
    tags: ["well-preserved", "romantic", "woodland", "gardens", "wedding-venue"],
    access: "paid",
    era: "13th century (original), 17th century (current)",
    sources: [{name: "Castlemartyr Resort", url: "https://www.castlemartyrresort.ie/about/history/"}, {name: "Historic Hotels", url: "https://www.historichotels.org/hotels-resorts/ORKCA-castlemartyr-resort-cork/"}]
  },
  "Dinefwr Park": {
    description: "An iconic Welsh landscape where 2,000 years of history unfold — from Iron Age hillfort to medieval castle to a grand Newton House amid a rare parkland nature reserve.",
    history: "The park has been in use for over 2,000 years, with remains of an Iron Age fort and two Roman forts discovered on site. Dinefwr Castle, perched on a hilltop, was the principal seat of the rulers of Deheubarth. Newton House, the 17th-century mansion at the estate's heart, is surrounded by a National Nature Reserve — the only parkland NNR in Wales. Managed by the National Trust.",
    tags: ["atmospheric", "photogenic", "gardens", "woodland", "medieval", "prehistoric", "kid-friendly"],
    access: "paid",
    era: "Iron Age to 17th century",
    sources: [{name: "National Trust", url: "https://www.nationaltrust.org.uk/visit/wales/dinefwr"}, {name: "Britain Express", url: "https://www.britainexpress.com/attractions.htm?attraction=721"}]
  },
  "Plas Mawr": {
    description: "Britain's finest Elizabethan townhouse — hidden behind Conwy's medieval walls, a gentleman's mansion of ornate plasterwork and peacocking Tudor ambition.",
    history: "Built 1576-1585 by Robert Wynn, a wealthy Welsh gentleman, at a cost of £800. The finest surviving Elizabethan townhouse in Britain, featuring extraordinary ornamental plasterwork throughout. The main frontage is hidden in a narrow lane, with only the High Street gatehouse hinting at the grandeur within. Managed by Cadw, the Welsh heritage body.",
    tags: ["well-preserved", "photogenic", "tudor", "museum", "guided-tours"],
    access: "paid",
    era: "16th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Plas_Mawr"}, {name: "Cadw", url: "https://cadw.gov.wales/visit/places-to-visit/plas-mawr"}]
  },
  "Monnow Bridge Gate": {
    description: "The only surviving medieval fortified river bridge in Britain — a stone sentinel guarding Monmouth's crossing since the days of Edward I.",
    history: "Construction began in 1272 to replace a 12th-century Norman timber bridge. The gatehouse was added in the late 13th or early 14th century, funded by a medieval tax ('murage') raised by Edward I. The only remaining medieval fortified river bridge in Great Britain with its gate tower still standing. Has played a role in defending Monmouth through the English Civil War and the Chartist uprising.",
    tags: ["well-preserved", "photogenic", "medieval", "free-entry"],
    access: "free",
    era: "13th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Monnow_Bridge"}, {name: "Visit Monmouthshire", url: "https://www.visitmonmouthshire.com/things-to-do/monnow-gate-and-bridge-p1504521"}]
  },
  "Paisley Abbey": {
    description: "A Cluniac monastery with royal bones beneath its floors — burial place of Scotland's High Stewards and the mother of the royal Stewart dynasty.",
    history: "Founded c.1161 by Walter Fitzalan, High Steward of Scotland, near the site of a 6th-century Celtic church of St Mirin. Burial place of all six High Stewards of Scotland and Marjorie Bruce, mother of Robert II and ancestor of the entire Stewart/Stuart dynasty. Houses the ancient Celtic Barochan Cross. The monastery was disbanded at the Reformation in 1560.",
    tags: ["well-preserved", "atmospheric", "medieval", "free-entry"],
    access: "free",
    era: "12th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Paisley_Abbey"}, {name: "Paisley Abbey", url: "https://www.paisleyabbey.org.uk/history/"}]
  },
  "Selby Abbey": {
    description: "A Benedictine masterpiece at the heart of Yorkshire since 1069 — where Norman arches meet Gothic splendour and a 'Mitred Abbey' still serves its community.",
    history: "Founded in 1069 by Benedict of Auxerre, dedicated to Our Lord, Our Lady and St Germain. Granted the rare privilege of a mitre by Pope Alexander IV in 1256, making it a 'Mitred Abbey'. Survived the Dissolution as the parish church. Features superb Norman and Early English architecture and an extraordinary east window. Devastated by fire in 1906 but meticulously restored.",
    tags: ["well-preserved", "photogenic", "norman", "medieval", "gothic", "free-entry"],
    access: "free",
    era: "11th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Selby_Abbey"}, {name: "Selby Abbey", url: "https://www.selbyabbey.org.uk/"}]
  },
  "St Augustine's Abbey": {
    description: "Where Christianity was reborn in southern England — the ruins of the abbey founded by St Augustine himself in AD 598, part of Canterbury's UNESCO World Heritage Site.",
    history: "Founded in AD 598 by St Augustine, sent by Pope Gregory the Great to convert the Anglo-Saxons. One of the oldest monastic sites in England. King Æthelberht of Kent granted Augustine land just outside Canterbury's walls. The abbey served as a royal burial place and major centre of learning until the Dissolution. Part of the Canterbury World Heritage Site. Managed by English Heritage.",
    tags: ["ruins-romantic", "atmospheric", "medieval", "museum", "guided-tours"],
    access: "paid",
    era: "6th century",
    sources: [{name: "English Heritage", url: "https://www.english-heritage.org.uk/visit/places/st-augustines-abbey/"}, {name: "Canterbury Archaeological Society", url: "https://www.canterbury-archaeology.org.uk/st-augustines-abbey"}]
  },
  "Caerleon Roman Fortress": {
    description: "One of only three permanent Roman legionary fortresses in Britain — where gladiators fought in the amphitheatre and soldiers soaked in the bathhouse.",
    history: "Known as Isca Augusta, one of only three permanent legionary fortresses in Roman Britain (alongside Chester and York). Built c.AD 75 for the Second Augustan Legion. Features the most complete Roman amphitheatre in Britain, plus barracks and a remarkable bathhouse preserved under a modern cover building. Traditionally associated with King Arthur by Geoffrey of Monmouth. Occupied until the 370s.",
    tags: ["well-preserved", "photogenic", "prehistoric", "museum", "free-entry", "kid-friendly"],
    access: "free",
    era: "1st century AD",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Caerleon_Roman_Fortress_and_Baths"}, {name: "Visit Wales", url: "https://www.visitwales.com/attraction/historic-site/caerleon-roman-fortress-baths-cadw-911561"}]
  },
  "Rushen Castle": {
    description: "One of the best-preserved medieval castles in the British Isles — built for a Viking king on the Isle of Man, where 800 years of history guard Castletown harbour.",
    history: "Built around 1200 for a Norse-Gaelic king, Castle Rushen is one of the best-preserved medieval castles in Europe. Served as the seat of the Kings and Lords of Mann. Used as a fortress during the English Civil War and later as the island's Victorian prison. The limestone keep has walls up to 7 feet thick. Now a museum run by Manx National Heritage.",
    tags: ["well-preserved", "photogenic", "medieval", "museum", "guided-tours", "coastal"],
    access: "paid",
    era: "13th century",
    sources: [{name: "Manx National Heritage", url: "https://manxnationalheritage.im/our-sites/castle-castletown/"}, {name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Castle_Rushen"}]
  },
  "Culross Palace": {
    description: "A 16th-century merchant's house in Scotland's most perfectly preserved burgh — where painted ceilings glow and Outlander fans come to walk Cranesmuir's cobbles.",
    history: "Built 1597-1611 by Sir George Bruce, Laird of Carnock, a wealthy coal mining entrepreneur who established a coal mine at Culross in 1575. The 'palace' is actually a grand merchant's house, notable for its painted wooden ceilings and terracotta pantile roof. Set in Culross, Scotland's most complete example of a 17th-18th century burgh. Used as a filming location for Outlander. National Trust for Scotland.",
    tags: ["well-preserved", "photogenic", "atmospheric", "gardens", "filming-location", "guided-tours"],
    access: "paid",
    era: "16th-17th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Culross_Palace"}, {name: "National Trust for Scotland", url: "https://www.nts.org.uk/visit/places/culross"}]
  },
  "Inverness Castle Viewpoint": {
    description: "The red sandstone sentinel of the Highland capital — perched on a cliff above the River Ness where castles have stood since Macbeth's time.",
    history: "The site has hosted castles since 1057, said to have been first built by King Malcolm III. Destroyed and rebuilt numerous times throughout Scotland's turbulent history. The current red sandstone castle was erected in 1836 by architect William Burn. Formerly a courthouse and prison, it reopened in 2025 as the Inverness Castle Experience, an immersive attraction celebrating Highland culture and heritage.",
    tags: ["well-preserved", "photogenic", "museum", "guided-tours"],
    access: "paid",
    era: "19th century (current building)",
    sources: [{name: "Scotland's Wild", url: "https://www.scotlandswild.com/inverness-castle"}, {name: "Inverness Castle", url: "https://invernesscastle.scot/"}]
  },
  "St Mary's Abbey York": {
    description: "Hauntingly beautiful Benedictine ruins in the heart of York — once the wealthiest abbey in northern England, now a Gothic skeleton in the Museum Gardens.",
    history: "Founded in 1055 as a Benedictine monastery, becoming one of the wealthiest abbeys in northern England. The dramatic ruins visible today date mainly from a major rebuilding in 1270-1294. Dissolved by Henry VIII in 1539. The ruins stand in the Yorkshire Museum Gardens, and the adjacent hospitium serves as a visitor centre. A breakaway group of monks from St Mary's founded Fountains Abbey in 1132.",
    tags: ["ruins-romantic", "atmospheric", "photogenic", "medieval", "gothic", "free-entry"],
    access: "free",
    era: "13th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/St_Mary%27s_Abbey,_York"}]
  }
};

let updated = 0;
for (const castle of castles) {
  if (enrichments[castle.name]) {
    const e = enrichments[castle.name];
    Object.assign(castle, e);
    updated++;
    console.log(`Updated: ${castle.name}`);
  }
}

fs.writeFileSync('data.js', prefix + JSON.stringify(castles, null, 2) + ';\n', 'utf8');
console.log(`\nTotal updated: ${updated}`);
