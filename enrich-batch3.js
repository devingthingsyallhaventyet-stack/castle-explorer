const fs = require('fs');

let raw = fs.readFileSync('data.js', 'utf8');
const prefix = 'const CASTLES = ';
const jsonStr = raw.substring(prefix.length).replace(/;\s*$/, '');
const castles = JSON.parse(jsonStr);

const enrichments = {
  "Southwell Minster": {
    description: "Nottinghamshire's hidden gem — a Norman minster with exquisite 13th-century leaf carvings so lifelike they seem to breathe in the chapter house shadows.",
    history: "A minster where God has been worshipped for over 900 years, replacing an earlier Saxon church. The Norman nave dates from c.1108, while the chapter house (c.1290) contains the famous 'Leaves of Southwell' — naturalistic stone carvings considered the finest medieval foliage sculpture in England. Adjacent to the site of a Roman villa. Became a cathedral in 1884.",
    tags: ["well-preserved", "photogenic", "atmospheric", "norman", "medieval", "free-entry"],
    access: "free",
    era: "12th century",
    sources: [{name: "Southwell Minster", url: "https://www.southwellminster.org/history/"}, {name: "Southwell History Society", url: "https://southwellhistorysociety.co.uk/a-brief-history-of-southwell"}]
  },
  "Arbroath Abbey": {
    description: "The red sandstone ruins where Scottish independence was born — birthplace of the Declaration of Arbroath, one of history's most powerful assertions of freedom.",
    history: "Founded in 1178 by King William I (the Lion) in honour of his murdered friend Archbishop Thomas Becket. Completed by 1233. The Declaration of Arbroath was signed here in 1320, asserting Scotland's independence from England. The distinctive round window, known as the 'O of Arbroath', once served as a beacon for ships. Managed by Historic Environment Scotland.",
    tags: ["ruins-romantic", "atmospheric", "photogenic", "medieval", "guided-tours"],
    access: "paid",
    era: "12th-13th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Arbroath_Abbey"}, {name: "Historic Environment Scotland", url: "https://www.historicenvironment.scot/visit-a-place/places/arbroath-abbey/"}]
  },
  "Buckfast Abbey": {
    description: "A living Benedictine monastery on the edge of Dartmoor — rebuilt stone by stone by just six monks over 32 years, a testament to extraordinary devotion.",
    history: "First established as an abbey in 1018, refounded as Cistercian in 1134, and dissolved by Henry VIII in 1539. French Benedictine monks returned in 1882 and rebuilt the abbey church between 1907-1938 — remarkably, the work was done almost entirely by the monks themselves. The abbey remains an active monastery with a famous bee-keeping tradition.",
    tags: ["well-preserved", "atmospheric", "gardens", "tearoom-cafe", "gift-shop", "free-entry"],
    access: "free",
    era: "11th century (original), 20th century (rebuilt)",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Buckfast_Abbey"}, {name: "Historic England", url: "https://historicengland.org.uk/education/schools-resources/educational-images/buckfast-abbey-buckfast-road-buckfastleigh-6984"}]
  },
  "Johnstown Castle": {
    description: "A fairy-tale neo-Gothic castle rising from ornamental lakes and woodland in County Wexford — where Norman roots run deep beneath Victorian grandeur.",
    history: "The first castle was a Norman tower house built in the late 12th century by the Esmonde family, who came from Lincolnshire after the 1169 Norman invasion. Confiscated during the Cromwellian era, acquired by John Grogan in 1692. The current neo-Gothic castle was created in the 19th century. Now houses the Irish Agricultural Museum and is surrounded by stunning ornamental gardens.",
    tags: ["well-preserved", "photogenic", "gardens", "museum", "woodland", "gothic"],
    access: "paid",
    era: "12th century (original), 19th century (current)",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Johnstown_Castle"}, {name: "Johnstown Castle", url: "https://johnstowncastle.ie/johnstown-castle/"}]
  },
  "Muckross Friary": {
    description: "A hauntingly intact Franciscan friary in Killarney National Park — where an ancient yew tree grows in the cloister and Ireland's last Gaelic poets lie buried.",
    history: "Founded in 1448 for the Observantine Franciscans by Donal McCarthy Mor. Previously known as the Friary of Irrelagh. Remarkably well-preserved despite suppression and occupation by Protestant forces. The broad-canopied yew tree in the cloister is believed to be as old as the friary itself. Burial place of the great Gaelic poets Aodhagán Ó Rathaille and Eoghan Rua Ó Súilleabháin.",
    tags: ["ruins-romantic", "atmospheric", "photogenic", "medieval", "woodland", "free-entry"],
    access: "free",
    era: "15th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Muckross_Abbey"}, {name: "Heritage Ireland", url: "https://heritageireland.ie/unguided-sites/muckross-franciscan-friary/"}]
  },
  "Llandaff Cathedral": {
    description: "One of Britain's oldest Christian sites, nestled in a hollow by the River Taff — where Celtic saints once gathered and Epstein's towering Christ still stuns.",
    history: "Stands on one of the oldest Christian sites in Britain, founded in the 6th century by St Dyfrig, succeeded by St Teilo and St Euddogwy. The current building dates from c.1120, with restorations after severe damage from a German parachute mine in January 1941 during the Cardiff Blitz. Features Jacob Epstein's striking aluminium sculpture 'Christ in Majesty'.",
    tags: ["well-preserved", "atmospheric", "medieval", "free-entry"],
    access: "free",
    era: "12th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Llandaff_Cathedral"}, {name: "Visit Cardiff", url: "https://www.visitcardiff.com/highlights/llandaff-cathedral/"}]
  },
  "Pentre Ifan": {
    description: "The largest and most dramatic neolithic dolmen in Wales — a massive capstone balanced impossibly on slender uprights against a backdrop of Preseli Hills.",
    history: "The largest and best-preserved neolithic dolmen in Wales, dating to approximately 3500 BC. The enormous capstone, estimated at 16 tonnes, balances on three slender uprights. One of just three Welsh monuments to receive legal protection under the Ancient Monuments Protection Act 1882. Originally covered by an earth mound that has long since eroded away. Managed by Cadw.",
    tags: ["atmospheric", "photogenic", "prehistoric", "remote", "hilltop", "free-entry"],
    access: "free",
    era: "c. 3500 BC",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Pentre_Ifan"}, {name: "Atlas Obscura", url: "https://www.atlasobscura.com/places/pentre-ifan"}]
  },
  "Dylan Thomas Boathouse": {
    description: "The clifftop writing shed where Dylan Thomas penned Under Milk Wood — perched above the Tâf estuary in the 'timeless, beautiful, barmy town' of Laugharne.",
    history: "The Boathouse in Laugharne was Dylan Thomas's home during his last four years (1949-1953). Set in a cliff overlooking the Tâf estuary, it's where he wrote many of his major works, including Under Milk Wood and much of his late poetry. Thomas first arrived in Laugharne aged 19 in 1934. The house is now a museum dedicated to his life and work.",
    tags: ["atmospheric", "photogenic", "coastal", "museum"],
    access: "paid",
    era: "20th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Dylan_Thomas_Boathouse"}, {name: "Visit Wales", url: "https://www.visitwales.com/attraction/visitor-centre/dylan-thomas-boat-house-829119"}]
  },
  "Dunkeld Cathedral": {
    description: "Scotland's most romantic cathedral ruin, set at an ancient ecclesiastical centre where St Columba's relics were brought to safety from Viking raiders.",
    history: "In 849, King Kenneth MacAlpin brought relics of St Columba from Iona to Dunkeld to protect them from Viking raids, establishing it as a major ecclesiastical centre. The cathedral combines Gothic and Norman elements — the nave stands in picturesque ruin while the choir remains in active use as a parish church. Columba's bones were kept here until the Reformation.",
    tags: ["ruins-romantic", "atmospheric", "photogenic", "medieval", "riverside", "free-entry"],
    access: "free",
    era: "13th-15th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Dunkeld_Cathedral"}, {name: "Historic Environment Scotland", url: "https://www.historicenvironment.scot/visit-a-place/places/dunkeld-cathedral/"}]
  },
  "Abbotsford House": {
    description: "Sir Walter Scott's dream made stone — a Scottish baronial fantasy on the banks of the Tweed, stuffed with relics and the inspiration for a literary revolution.",
    history: "Built 1817-1825 as the residence of Sir Walter Scott, the historical novelist and poet who invented the historical romance genre. Scott bought the estate in 1811 and created an iconic Scottish baronial mansion filled with his collection of historical relics, armour, and antiquities. Its architecture helped define the 19th-century baronial revival style. A key site in the history of European Romanticism.",
    tags: ["well-preserved", "photogenic", "atmospheric", "riverside", "museum", "gardens", "guided-tours", "gift-shop"],
    access: "paid",
    era: "19th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Abbotsford,_Scottish_Borders"}, {name: "Abbotsford", url: "https://www.scottsabbotsford.com/history"}]
  },
  "Great Malvern Priory": {
    description: "A Benedictine jewel at the foot of the Malvern Hills — renowned for medieval stained glass so vivid it rivals any cathedral in England.",
    history: "A Benedictine monastery begun c.1075, dedicated to St Mary the Virgin in 1083. The monastic church survived the Dissolution to become the parish church. Famous for its exceptional 15th-century stained glass, considered among the finest in England, and its medieval floor tiles. The Norman arcade and 15th-century tower still stand magnificently.",
    tags: ["well-preserved", "photogenic", "atmospheric", "medieval", "norman", "free-entry"],
    access: "free",
    era: "11th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Great_Malvern_Priory"}, {name: "Great Malvern Priory", url: "https://www.greatmalvernpriory.org.uk/heritage"}]
  },
  "Cartmel Priory": {
    description: "An 800-year-old priory watching over one of England's prettiest villages — where medieval stonework meets a famous foodie village with sticky toffee pudding.",
    history: "Founded in 1189 by William Marshal, Earl of Pembroke, for Augustinian canons. The priory church survived the Dissolution because it was also the parish church. Features a distinctive diagonal bell tower and stunning 15th-century choir stalls with misericords. Grade I listed. The surrounding village is famous for its racecourse and sticky toffee pudding.",
    tags: ["well-preserved", "atmospheric", "medieval", "free-entry", "tearoom-cafe"],
    access: "free",
    era: "12th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Cartmel_Priory"}, {name: "Cartmel Priory", url: "http://cartmelpriory.org.uk/"}]
  },
  "Malmesbury Abbey": {
    description: "England's oldest borough meets a flying monk — where Brother Eilmer launched himself from the tower in 1010 in one of history's first attempts at human flight.",
    history: "One of the oldest continuously used churches in England, with roots in the 7th century. Famous as the site where monk Eilmer of Malmesbury attempted human flight in 1010, gliding over 180 metres before crash-landing and breaking both legs. The abbey was a major Benedictine monastery and burial place of King Æthelstan. The surviving nave is a fraction of the original building.",
    tags: ["well-preserved", "atmospheric", "medieval", "norman", "free-entry"],
    access: "free",
    era: "12th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Malmesbury_Abbey"}, {name: "Wikipedia (Malmesbury)", url: "https://en.wikipedia.org/wiki/Malmesbury"}]
  },
  "Raby Castle Deer Park": {
    description: "A brooding 14th-century fortress rising from the Durham countryside — where the Rising of the North was plotted and 700 knights once gathered in its hall.",
    history: "A magnificent 14th-century castle built by the powerful Neville family. The great Baron's Hall reportedly hosted 700 knights. The Nevills held Raby until 1569, when it was forfeited to the Crown after their support for the failed Rising of the North. Purchased in 1626 by Sir Henry Vane the Elder, Treasurer to Charles I. Still home to the Vane family (Lords Barnard) today.",
    tags: ["well-preserved", "photogenic", "atmospheric", "medieval", "gardens", "guided-tours", "tearoom-cafe", "gift-shop"],
    access: "paid",
    era: "14th century",
    sources: [{name: "Raby Castle", url: "https://www.raby.co.uk/raby-castle/"}, {name: "Britain Express", url: "https://www.britainexpress.com/counties/durham/castles/raby.htm"}]
  },
  "Brodsworth Hall": {
    description: "A Victorian time capsule preserved 'as found' — faded grandeur, peeling paint, and all — where the slow decay of a once-opulent family home tells its own story.",
    history: "A Victorian country house near Doncaster, conserved by English Heritage in its state of 'graceful decline' rather than restored. The interiors show how a once-opulent house grew 'comfortably shabby' over generations. Contents purchased by the National Heritage Memorial Fund. The award-winning restored gardens provide vivid contrast to the gently fading house.",
    tags: ["atmospheric", "photogenic", "victorian", "gardens", "museum", "guided-tours"],
    access: "paid",
    era: "19th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Brodsworth_Hall"}, {name: "English Heritage", url: "https://www.english-heritage.org.uk/visit/places/brodsworth-hall-and-gardens/"}]
  },
  "Packwood House": {
    description: "A Tudor house reimagined as an English country dream — where the famous yew garden is said to represent the Sermon on the Mount in living topiary.",
    history: "A Tudor house with over 400 years of history, transformed in the early 20th century by Graham Baron Ash into his vision of an ideal English country home. The famous yew garden, traditionally said to represent the Sermon on the Mount with its 'multitude' of clipped yews, is one of the most remarkable topiary gardens in Britain. Given to the National Trust in 1941.",
    tags: ["well-preserved", "photogenic", "gardens", "tudor", "museum", "tearoom-cafe"],
    access: "paid",
    era: "16th century",
    sources: [{name: "National Trust", url: "https://www.nationaltrust.org.uk/visit/warwickshire/packwood-house"}, {name: "National Trust History", url: "https://www.nationaltrust.org.uk/visit/warwickshire/packwood-house/history-of-packwood-house"}]
  },
  "Compton Verney": {
    description: "A restored 18th-century mansion in Capability Brown parkland, reborn as a world-class art gallery — from Chinese bronzes to British folk art under one roof.",
    history: "A Grade I listed 18th-century mansion surrounded by 120 acres of parkland landscaped by Capability Brown. A manor house existed on the site from c.1442. Fell into disrepair in the 20th century before being spectacularly restored as an art gallery, opening in 2004. Houses six world-class collections including the UK's largest collection of folk art, Chinese bronzes, and Neapolitan art.",
    tags: ["well-preserved", "photogenic", "gardens", "museum", "tearoom-cafe", "gift-shop"],
    access: "paid",
    era: "18th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Compton_Verney_Art_Gallery"}, {name: "Art Fund", url: "https://www.artfund.org/explore/museums-and-galleries/compton-verney"}]
  },
  "Coughton Court": {
    description: "A Tudor stronghold of Catholic resistance — where the Throckmorton family sheltered priests, plotted against Elizabeth I, and awaited news of the Gunpowder Plot.",
    history: "Seat of the Throckmorton family since 1409, this Tudor house was a centre of Catholic resistance in Elizabethan England. Features priest holes where clergy hid during religious persecution. Connected to both the Throckmorton Plot of 1583 to murder Elizabeth I and the Gunpowder Plot of 1605. The striking Tudor gatehouse dominates the approach. Now managed by the National Trust.",
    tags: ["well-preserved", "atmospheric", "tudor", "haunted", "gardens", "museum", "guided-tours"],
    access: "paid",
    era: "15th-16th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Coughton_Court"}, {name: "Tudor Times", url: "https://tudortimes.co.uk/places/coughton-court"}]
  },
  "Croome Court": {
    description: "Capability Brown's first complete landscape — a Palladian mansion where the famous gardener made his name and WWII secrets were kept in underground bunkers.",
    history: "A Palladian mansion in Worcestershire, significant as Capability Brown's first complete landscape commission (c.1750). The house was designed for the 6th Earl of Coventry. During WWII, the estate was used by RAF Defford for secret radar development. After decades of decline, the house was purchased by the Croome Heritage Trust in 2007 and leased to the National Trust.",
    tags: ["well-preserved", "photogenic", "gardens", "museum", "kid-friendly"],
    access: "paid",
    era: "18th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Croome_Court"}, {name: "National Trust", url: "https://www.nationaltrust.org.uk/visit/worcestershire-herefordshire/croome/the-history-of-croome-court"}]
  },
  "Buckland Abbey": {
    description: "From Cistercian monastery to the home of Sir Francis Drake — where the spirit of seafaring adventure still echoes through 800 years of Devon history.",
    history: "Founded as a Cistercian monastery in 1278, dissolved in 1539. Converted into a dwelling by Sir Richard Grenville, who destroyed most of the monastic buildings. Acquired by Sir Francis Drake in 1581 after his circumnavigation of the globe. The great medieval barn survives alongside Drake's home. Managed by the National Trust since 1948.",
    tags: ["well-preserved", "atmospheric", "medieval", "gardens", "museum", "guided-tours", "tearoom-cafe"],
    access: "paid",
    era: "13th century",
    sources: [{name: "National Trust", url: "https://www.nationaltrust.org.uk/visit/devon/buckland-abbey/history-of-buckland-abbey"}, {name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Buckland_Abbey"}]
  },
  "Castle Coole": {
    description: "Ireland's finest neoclassical mansion — a Palladian masterpiece in Portland stone where even the servants' entrance was hidden underground to preserve the perfect facade.",
    history: "Built 1789-1797 for the 1st Earl of Belmore, designed by James Wyatt in severe neoclassical style. The Portland stone was shipped from Dorset and carried overland by bullock cart. Features magnificent Regency interiors including a state bedroom prepared for George IV (who never visited). Remarkably, the mansion has no above-ground service door. Now a National Trust property.",
    tags: ["well-preserved", "photogenic", "gardens", "guided-tours", "museum"],
    access: "paid",
    era: "18th century",
    sources: [{name: "National Trust", url: "https://www.nationaltrust.org.uk/visit/northern-ireland/castle-coole/history-of-castle-coole"}, {name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Castle_Coole"}]
  },
  "Sherborne Castle": {
    description: "Sir Walter Raleigh's Tudor retreat in 1,200 acres of Dorset parkland — where the adventurer who brought tobacco to England built his country dream.",
    history: "Built in 1594 by Sir Walter Raleigh as Sherborne Lodge, after he decided the adjacent Old Castle was too ruined to restore. Extended in the 1620s by the Digby family, who still own it today. Set in 1,200 acres of parkland with a lake created by Capability Brown. Houses nationally important collections of furniture, paintings, and porcelain spanning 400 years.",
    tags: ["well-preserved", "photogenic", "tudor", "gardens", "museum", "guided-tours"],
    access: "paid",
    era: "16th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Sherborne_Castle"}, {name: "Sherborne Castle", url: "https://www.sherbornecastle.com/"}]
  },
  "Chillingham Castle": {
    description: "Britain's most haunted castle — a medieval fortress in wild Northumberland where ghost tours prowl torch-lit corridors and 50 spectres reportedly call home.",
    history: "A medieval castle originally built as a 12th-century monastery, fortified in 1344 during the Scottish wars. Home to wild Chillingham cattle, a unique enclosed herd dating back 700 years. Rated first place in the Independent on Sunday's top fifty castles in Europe. Famous for its ghosts, including the 'blue boy' who haunted the Pink Room. Features a medieval torture chamber. Rescued from ruin by Sir Humphry Wakefield.",
    tags: ["atmospheric", "dark-brooding", "haunted", "medieval", "guided-tours", "remote"],
    access: "paid",
    era: "12th-14th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Chillingham_Castle"}, {name: "Chillingham Castle", url: "https://chillingham-castle.com/"}]
  },
  "Hexham Abbey": {
    description: "A 1,350-year-old foundation built with Roman stone — where Saxon crypts survive beneath medieval arches in one of England's most ancient places of worship.",
    history: "Originally built in AD 674 by St Wilfrid using stones from the nearby Roman fort at Corbridge. The Saxon crypt survives as one of the finest early Christian monuments in England. Replaced by an Augustinian priory from 1113, with the current church built 1170-1250. Dissolved by Henry VIII but the church survived as the parish church. Features one of the oldest wooden seats in England, the Frith Stool.",
    tags: ["well-preserved", "atmospheric", "medieval", "norman", "free-entry"],
    access: "free",
    era: "7th century (original), 12th century (current)",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Hexham_Abbey"}, {name: "Britain Express", url: "https://www.britainexpress.com/attractions.htm?attraction=3074"}]
  },
  "Floors Castle": {
    description: "Scotland's largest inhabited castle — a Georgian palace on the banks of the Tweed where border reivers once raided and a king was killed by an exploding cannon.",
    history: "Built from 1718 by William Adam for John Ker, 1st Duke of Roxburghe, on a site steeped in border history. Stands opposite the ruins of Roxburgh Castle, where King James II was killed by an exploding cannon during a siege in 1460. The castle was greatly expanded in the 1840s by William Playfair. Still home to the Duke of Roxburghe. Scotland's largest inhabited house.",
    tags: ["well-preserved", "photogenic", "gardens", "riverside", "guided-tours", "tearoom-cafe", "gift-shop"],
    access: "paid",
    era: "18th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Floors_Castle"}, {name: "Floors Castle", url: "https://www.floorscastle.com/"}]
  },
  "Falkland Palace": {
    description: "The Stuart royals' favourite country retreat — a Renaissance masterpiece in the Fife countryside with Britain's oldest real tennis court still in play.",
    history: "Transformed between 1501-1541 by King James IV and James V into one of Scotland's finest Renaissance palaces, inspired by the grand châteaux of France. Home to the oldest surviving real (royal) tennis court in Britain, built in 1539. James V died here in 1542 after hearing of the birth of his daughter, the future Mary Queen of Scots. Managed by the National Trust for Scotland.",
    tags: ["well-preserved", "photogenic", "gardens", "medieval", "guided-tours", "gift-shop"],
    access: "paid",
    era: "16th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Falkland_Palace"}, {name: "National Trust for Scotland", url: "https://www.nts.org.uk/visit/places/falkland-palace"}]
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
