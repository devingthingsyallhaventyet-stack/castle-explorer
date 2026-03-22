const fs = require('fs');

let raw = fs.readFileSync('data.js', 'utf8');
const prefix = 'const CASTLES = ';
const jsonStr = raw.substring(prefix.length).replace(/;\s*$/, '');
const castles = JSON.parse(jsonStr);

const enrichments = {
  "Castle Leslie": {
    description: "A Scottish baronial fantasy set on a thousand wild acres in County Monaghan — where Jonathan Swift once stayed and the Leslies have held court since 1665.",
    history: "Built in 1870-71 in Scottish baronial style by architect W.H. Lynn for Sir John Leslie, 1st Baronet, on the site of a 17th-century mansion. The Leslie family acquired the estate in 1665 when 'fighting bishop' John Leslie bought it with funds from Charles II. Features a Renaissance cloister inspired by Michelangelo's design in Rome. Now operates as a luxury hotel.",
    tags: ["well-preserved", "romantic", "atmospheric", "gardens", "woodland", "wedding-venue", "events-venue"],
    access: "paid",
    era: "19th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Castle_Leslie"}, {name: "Irish Heritage Houses", url: "https://www.ihh.ie/index.cfm/houses/house/name/Castle%20Leslie"}]
  },
  "St Fagans Castle": {
    description: "An Elizabethan mansion risen from Norman ruins, now the jewel of Wales's open-air museum — where centuries of Welsh life unfold across the grounds.",
    history: "Built c.1580 on the ruins of a Norman motte and bailey castle, this Grade I listed Elizabethan mansion was constructed in an E-shape. The grounds now house St Fagans National Museum of History, with over 40 re-erected historic buildings chronicling Welsh culture and architecture. Free entry, managed by Amgueddfa Cymru.",
    tags: ["well-preserved", "museum", "gardens", "free-entry", "kid-friendly", "photogenic"],
    access: "free",
    era: "16th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/St_Fagans_Castle"}, {name: "Museum Wales", url: "https://museum.wales/stfagans/buildings/castle/"}]
  },
  "Witley Court": {
    description: "A breathtaking Italianate ruin frozen in time — once one of England's grandest palaces, now a hauntingly beautiful shell with spectacular fountains still dancing.",
    history: "Built for the Foley family in the 17th century, massively expanded by John Nash in the early 1800s, then rebuilt by Samuel Daukes for the Earls of Dudley. A devastating fire in 1937 gutted the mansion. English Heritage took over in 1972. The restored Perseus and Andromeda fountain is one of Europe's largest.",
    tags: ["ruins-romantic", "atmospheric", "photogenic", "gardens", "dark-brooding", "guided-tours"],
    access: "paid",
    era: "17th-19th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Witley_Court"}, {name: "English Heritage", url: "https://www.english-heritage.org.uk/visit/places/witley-court-and-gardens/"}]
  },
  "Ickworth House": {
    description: "A neoclassical rotunda rising from Suffolk parkland like a fever dream — conceived by an Earl-Bishop who wanted a gallery worthy of his European art collection.",
    history: "Built 1795-1829 for Frederick Hervey, 4th Earl of Bristol and Bishop of Derry, designed by Italian architect Antonio Asprucci. Originally planned as an art gallery, but Napoleon seized the Earl's collection. He died in 1803. The Hervey family owned the estate from 1467. Given to the National Trust in 1956 in lieu of death duties.",
    tags: ["well-preserved", "photogenic", "gardens", "museum", "kid-friendly", "gift-shop", "tearoom-cafe"],
    access: "paid",
    era: "18th-19th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Ickworth_House"}, {name: "National Trust", url: "https://www.nationaltrust.org.uk/visit/suffolk/ickworth-estate/history-of-ickworth"}]
  },
  "Felbrigg Hall": {
    description: "A perfectly preserved Jacobean country house wrapped in ancient woodland — where centuries stand still and the walled garden blooms in quiet splendour.",
    history: "Built 1621-24 by Robert Lyminge for Thomas Windham, with a Georgian west wing added c.1680. Grade I listed, noted for unaltered Jacobean architecture and fine Georgian interiors. Bequeathed to the National Trust in 1969 by Robert Ketton-Cremer. Grounds include a walled garden, orangery, and Felbrigg Woods SSSI.",
    tags: ["well-preserved", "atmospheric", "gardens", "woodland", "museum", "gift-shop", "tearoom-cafe"],
    access: "paid",
    era: "17th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Felbrigg_Hall"}, {name: "National Trust", url: "https://www.nationaltrust.org.uk/visit/norfolk/felbrigg-hall-gardens-and-estate/history-of-felbrigg"}]
  },
  "Beverley Minster": {
    description: "One of England's finest Gothic churches, rising from the Yorkshire market town where a 7th-century saint's bones still rest beneath the nave.",
    history: "Founded c.700 AD by Saint John of Beverley, Bishop of York. His tomb made it a major pilgrimage centre. The current Gothic structure dates from the 13th-14th centuries. Features exceptional medieval carvings, a stunning Percy tomb, and 68 misericords. Often called England's finest non-cathedral church.",
    tags: ["well-preserved", "photogenic", "atmospheric", "gothic", "medieval", "free-entry"],
    access: "free",
    era: "13th-14th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Beverley_Minster"}, {name: "Beverley Minster", url: "https://beverleyminster.org.uk/visit-us-2/a-brief-history/"}]
  },
  "Temple Newsam": {
    description: "A Tudor-Jacobean time capsule set in Capability Brown parkland — birthplace of the doomed Lord Darnley, husband of Mary Queen of Scots.",
    history: "Recorded in the Domesday Book of 1086, originally held by the Knights Templar. The current Tudor-Jacobean house was built in the early 16th century. Birthplace of Henry Stuart, Lord Darnley (1545). Grounds landscaped by Capability Brown. Now a museum with one of Britain's finest decorative arts collections. Called 'the Hampton Court of the North'.",
    tags: ["well-preserved", "photogenic", "gardens", "museum", "tudor", "kid-friendly", "gift-shop"],
    access: "paid",
    era: "16th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Temple_Newsam"}, {name: "Leeds Museums", url: "https://museumsandgalleries.leeds.gov.uk/temple-newsam-jg6y"}]
  },
  "Wilton House": {
    description: "The seat of the Earls of Pembroke for four centuries — where Inigo Jones designed the Double Cube Room and Hollywood comes to film period dramas.",
    history: "Built on the site of medieval Wilton Abbey, granted to the 1st Earl of Pembroke by Henry VIII. Rebuilt in Palladian style in 1647 by Inigo Jones and John Webb after a fire, with further alterations by James Wyatt in 1801. The Double Cube Room is one of England's finest interiors. Filming location for Bridgerton, The Crown, and Pride and Prejudice.",
    tags: ["well-preserved", "photogenic", "gardens", "filming-location", "museum", "guided-tours", "gift-shop"],
    access: "paid",
    era: "17th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Wilton_House"}, {name: "Historic Houses", url: "https://www.historichouses.org/house/wilton-house/visit/"}]
  },
  "Cotehele House": {
    description: "A medieval granite manor on the banks of the Tamar, barely touched in five centuries — where tapestries hang in half-light and time moves differently.",
    history: "A medieval house with Tudor additions in the parish of Calstock, Cornwall. Built by the Edgcumbe family from the 14th century. Remarkably unchanged over 500 years as the family preserved it as a historic curiosity. Features original tapestries, armour, and furnishings. Given to the National Trust after WWII.",
    tags: ["well-preserved", "atmospheric", "medieval", "tudor", "gardens", "riverside", "gift-shop", "tearoom-cafe"],
    access: "paid",
    era: "14th-16th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Cotehele"}, {name: "National Trust", url: "https://www.nationaltrust.org.uk/visit/cornwall/cotehele/history-of-cotehele"}]
  },
  "Tredegar House": {
    description: "One of Britain's most important 17th-century mansions — where the powerful Morgan dynasty ruled South Wales for over 500 years.",
    history: "A Charles II-era country house on the edge of Newport, Wales, home to the Morgan family (later Lords Tredegar) for over 500 years. Considered one of the finest Restoration houses in Britain. The Morgans commissioned a ship, the Tredegar of Newport, which traded with Barbados in 1676. Now managed by the National Trust.",
    tags: ["well-preserved", "photogenic", "gardens", "museum", "guided-tours", "kid-friendly", "tearoom-cafe"],
    access: "paid",
    era: "17th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Tredegar_House"}, {name: "National Trust", url: "https://www.nationaltrust.org.uk/visit/wales/tredegar-house/history-of-tredegar-house"}]
  },
  "Plas Newydd": {
    description: "An elegant estate on the Menai Strait with Snowdonia as its backdrop — home to the Marquess who lost his leg at Waterloo and the one who lost his fortune.",
    history: "Set on the shores of the Menai Strait on Anglesey, continuously inhabited since 1470. Refaced in Gothic and neo-Classical style by James Wyatt in the late 18th century. The 1st Marquess of Anglesey lost his leg at Waterloo (1815). The 5th Marquess nearly bankrupted the estate. Features a famous Rex Whistler mural. Now National Trust.",
    tags: ["well-preserved", "photogenic", "coastal", "gardens", "museum", "guided-tours", "gift-shop"],
    access: "paid",
    era: "18th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Plas_Newydd_(Anglesey)"}, {name: "National Trust", url: "https://www.nationaltrust.org.uk/visit/wales/plas-newydd-house-and-garden/history-of-plas-newydd"}]
  },
  "Chesters Roman Fort": {
    description: "The best-preserved Roman cavalry fort in Britain — where soldiers once bathed in a riverside spa and guarded Hadrian's Wall against the northern wilds.",
    history: "Known as Cilurnum, this cavalry fort on Hadrian's Wall was built in the 2nd century AD to guard a bridge over the North Tyne. Home to the Second Cavalry Regiment of Asturians. Features Britain's best-preserved Roman bathhouse. The Clayton Museum houses a remarkable collection of Roman sculpture. English Heritage site.",
    tags: ["well-preserved", "photogenic", "riverside", "museum", "prehistoric", "guided-tours"],
    access: "paid",
    era: "2nd century AD",
    sources: [{name: "English Heritage", url: "https://www.english-heritage.org.uk/visit/places/chesters-roman-fort-and-museum-hadrians-wall/"}, {name: "Visit Northumberland", url: "https://www.visitnorthumberland.com/explore/things-to-do/attractions/historic-sites/chesters-roman-fort"}]
  },
  "Newgrange Cursus": {
    description: "Part of the Brú na Bóinne UNESCO World Heritage Site — where 5,000-year-old passage tombs predate the pyramids and the winter solstice still illuminates the dead.",
    history: "Part of the Brú na Bóinne complex in the Boyne Valley, a UNESCO World Heritage Site. Newgrange was built c.3100 BC — older than Stonehenge and the Egyptian pyramids. A passage tomb with a roof box that channels sunlight at winter solstice. The surrounding monuments include henges, passage graves, and ringforts spanning millennia.",
    tags: ["atmospheric", "photogenic", "prehistoric", "remote", "guided-tours", "museum"],
    access: "paid",
    era: "c. 3100 BC",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Newgrange"}, {name: "UNESCO", url: "https://whc.unesco.org/en/list/659/"}]
  },
  "Newcastle Castle Keep": {
    description: "The Norman keep that gave Newcastle its name — a brooding stone fortress in the heart of the city where Henry II's power still echoes through the walls.",
    history: "Built 1172-1177 by Henry II on the site of a Roman fort and an earlier Norman motte-and-bailey built by Robert Curthose in 1080 — the 'new castle' that gave the city its name. The Black Gate was added by Henry III (1247-1250). Key northern fortress against Scottish invasions. Now a museum.",
    tags: ["well-preserved", "atmospheric", "norman", "medieval", "museum", "guided-tours"],
    access: "paid",
    era: "12th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/History_of_Newcastle_upon_Tyne"}, {name: "Historic UK", url: "https://www.historic-uk.com/HistoryMagazine/DestinationsUK/NewcastleuponTyne/"}]
  },
  "Wallington Hall": {
    description: "A gracious country house in 13,500 acres of Northumbrian wilderness — where Pre-Raphaelite murals tell the story of the north and the walled garden enchants.",
    history: "Built in 1688 on the site of a medieval castle, transformed in the mid-18th century. The central hall, designed by John Dobson in 1853-54, features murals by William Bell Scott depicting Northumberland's history. At 13,500 acres, it's the National Trust's largest intact estate. Given to the Trust in 1941.",
    tags: ["well-preserved", "photogenic", "gardens", "woodland", "museum", "kid-friendly", "tearoom-cafe", "gift-shop"],
    access: "paid",
    era: "17th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Wallington_Hall"}, {name: "National Trust Collections", url: "https://www.nationaltrustcollections.org.uk/place/wallington"}]
  },
  "Sycamore Gap": {
    description: "A windswept dip in Hadrian's Wall where England's most iconic tree once stood — felled by vandals in 2023 but already sprouting new life from the stump.",
    history: "A dramatic dip in Hadrian's Wall near Crag Lough, made famous by the lone sycamore estimated at 120 years old. It became one of England's most photographed landmarks and appeared in Robin Hood: Prince of Thieves (1991). Illegally felled in September 2023. The stump has since shown new growth.",
    tags: ["atmospheric", "photogenic", "remote", "hilltop", "free-entry", "filming-location"],
    access: "free",
    era: "2nd century AD",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Sycamore_Gap_tree"}, {name: "National Trust", url: "https://www.nationaltrust.org.uk/visit/north-east/hadrians-wall-and-housesteads-fort/next-steps-for-the-sycamore-gap-tree"}]
  },
  "Nostell Priory": {
    description: "A Palladian masterpiece by a teenage James Paine, built on the bones of a medieval monastery — with Chippendale furniture still in the rooms it was made for.",
    history: "Built on the site of a medieval Augustinian priory that closed in 1540. The Palladian house was designed by James Paine (reportedly only 19) for Sir Rowland Winn after his Grand Tour in 1729. Robert Adam contributed interiors. Contains one of the finest Chippendale furniture collections, made specifically for the house. National Trust since 1953.",
    tags: ["well-preserved", "photogenic", "gardens", "museum", "guided-tours", "kid-friendly", "tearoom-cafe"],
    access: "paid",
    era: "18th century",
    sources: [{name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Nostell_Priory"}, {name: "National Trust", url: "https://www.nationaltrust.org.uk/visit/yorkshire/nostell/the-history-of-nostell"}]
  },
  "Bramall Hall": {
    description: "A magnificent black-and-white Tudor manor rising from 70 acres of parkland — one of England's greatest timber-framed houses with a thousand years of stories.",
    history: "A stunning timber-framed Tudor manor in Stockport, with origins in the Domesday Book (1086). Granted by William the Conqueror to Hamon de Masci. The striking black-and-white exterior dates from the 14th-16th centuries. One of the finest timber-framed buildings in England. Now owned by Stockport Council.",
    tags: ["well-preserved", "photogenic", "atmospheric", "tudor", "medieval", "gardens", "museum", "guided-tours", "kid-friendly"],
    access: "paid",
    era: "14th-16th century",
    sources: [{name: "Stockport Council", url: "https://www.stockport.gov.uk/landing/bramall-hall"}, {name: "Historic Houses", url: "https://www.historichouses.org/house/bramall-hall/visit/"}]
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
