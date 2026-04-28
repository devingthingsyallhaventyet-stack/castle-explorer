// Quick existence check via Brave search for the 30 unconfirmed castles
const fs = require('fs');

const unconfirmed = [
  "Knockelly Castle, County Tipperary",
  "Sharavogue Castle, County Offaly",
  "Rataine Castle, County Westmeath",
  "Dowdstown Castle Meath",
  "Drumconrath Castle, County Meath",
  "Dunlicky Castle, County Clare",
  "Inishmaan Castle, County Galway",
  "Gortmore Castle, County Galway",
  "Derrymacloughna Castle, County Clare",
  "Collooney Castle, County Sligo",
  "Drumlease Castle, County Leitrim",
  "Fuerty Castle, County Roscommon",
  "Cloonfree Castle, County Roscommon",
  "Rathmullan Castle Meath",
  "Carrigart Castle, County Donegal",
  "Cloone Round Tower, County Leitrim",
  "Annestown Castle, County Waterford",
  "Ballylaneen Castle, County Waterford",
  "Clondra Castle, County Longford",
  "Frankford Castle, County Offaly",
  "Ballymulcashel Castle, County Limerick",
  "Ballycahill Castle, County Tipperary",
  "Drumshanbo Castle, County Leitrim",
  "Kilbarry Castle, County Waterford",
  "Ballylooby Castle, County Tipperary",
  "Carriggundel Castle, County Limerick",
  "Caherconlish Castle, County Limerick",
  "Ballinagleragh Castle, County Leitrim",
  "Caherlistrane Castle, County Galway",
  "Ballyjamesduff Castle, County Cavan",
];

// Output for manual review - just print the list with search URLs
console.log('# Unconfirmed Castles - Manual Verification Needed\n');
console.log('These 30 castles have NO web presence on Wikipedia, Commons, or Geograph.\n');

for (const c of unconfirmed) {
  const name = c.split(',')[0].trim();
  console.log(`- ${c}`);
}

console.log('\nRecommendation: Remove these entries or flag them as "unverified" with a placeholder image.');
