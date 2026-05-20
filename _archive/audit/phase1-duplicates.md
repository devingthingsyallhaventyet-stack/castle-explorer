# Castlecore Duplicate Detection Report - Phase 1

**Generated:** 2026-04-26T17:59:52.811Z
**Total castles analyzed:** 2003
**Potential duplicate pairs found:** 927

## Summary

This report identifies potential duplicate castle entries based on:
1. **Name similarity** - Fuzzy matching with Levenshtein distance
2. **Geographic proximity** - Haversine distance calculation  
3. **Image matching** - Identical image URLs
4. **Combined signals** - Confidence scoring

## Findings

### 1. MERGE (Confidence: 100%)

**Castle A:** Margam Abbey
- Location: 51.5549, -3.7299
- Country/County: Wales, Neath Port Talbot
- Type: abbey
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Chepstow_Castle_%284197%29.jpg/500px-Chepstow_Castle_%284197%29.jpg

**Castle B:** Margam Castle  
- Location: 51.558, -3.728
- Country/County: Wales, Neath Port Talbot
- Type: castle
- Image: https://img.castlecore.uk/margam-castle.jpg

**Metrics:**
- Name similarity: 100.0%
- Distance: 0.369km
- Same image: No

**Reasons:** High name similarity (100.0%), Close proximity (0.4km), Name + proximity combination

**Recommendation:** **MERGE**

---

### 2. MERGE (Confidence: 100%)

**Castle A:** Portumna Castle
- Location: 53.0892, -8.2194
- Country/County: Ireland, County Galway
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Leamaneh_Castle_Ireland_12283094446_o.jpg/500px-Leamaneh_Castle_Ireland_12283094446_o.jpg

**Castle B:** Portumna Priory  
- Location: 53.087, -8.218
- Country/County: Ireland, County Galway
- Type: abbey
- Image: https://img.castlecore.uk/portumna-priory.jpg

**Metrics:**
- Name similarity: 100.0%
- Distance: 0.262km
- Same image: No

**Reasons:** High name similarity (100.0%), Close proximity (0.3km), Name + proximity combination

**Recommendation:** **MERGE**

---

### 3. MERGE (Confidence: 100%)

**Castle A:** Loughrea Castle
- Location: 53.194, -8.57
- Country/County: Ireland, County Galway
- Type: castle
- Image: https://img.castlecore.uk/loughrea-castle.jpg

**Castle B:** Loughrea Priory  
- Location: 53.192, -8.57
- Country/County: Ireland, County Galway
- Type: abbey
- Image: https://img.castlecore.uk/loughrea-priory.jpg

**Metrics:**
- Name similarity: 100.0%
- Distance: 0.222km
- Same image: No

**Reasons:** High name similarity (100.0%), Close proximity (0.2km), Name + proximity combination

**Recommendation:** **MERGE**

---

### 4. MERGE (Confidence: 100%)

**Castle A:** Kilbeggan Castle
- Location: 53.368, -7.502
- Country/County: Ireland, County Westmeath
- Type: tower house
- Image: https://img.castlecore.uk/kilbeggan-castle.jpg

**Castle B:** Kilbeggan Abbey  
- Location: 53.369, -7.505
- Country/County: Ireland, County Westmeath
- Type: abbey
- Image: https://img.castlecore.uk/kilbeggan-abbey.jpg

**Metrics:**
- Name similarity: 100.0%
- Distance: 0.228km
- Same image: No

**Reasons:** High name similarity (100.0%), Close proximity (0.2km), Name + proximity combination

**Recommendation:** **MERGE**

---

### 5. MERGE (Confidence: 85%)

**Castle A:** Lindisfarne Priory
- Location: 55.669, -1.8008
- Country/County: England, Northumberland
- Type: abbey
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Holy_Island_Sunrise_%28again%29_%2815064111624%29.jpg/500px-Holy_Island_Sunrise_%28again%29_%2815064111624%29.jpg

**Castle B:** Lindisfarne Castle  
- Location: 55.6692, -1.7836
- Country/County: England, Northumberland
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/LindisfarneCastleHolyIsland.jpg/500px-LindisfarneCastleHolyIsland.jpg

**Metrics:**
- Name similarity: 100.0%
- Distance: 1.079km
- Same image: No

**Reasons:** High name similarity (100.0%), Near proximity (1.1km), Name + proximity combination

**Recommendation:** **MERGE**

---

### 6. MERGE (Confidence: 85%)

**Castle A:** Neath Abbey
- Location: 51.6544, -3.8004
- Country/County: Wales, Neath Port Talbot
- Type: abbey
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Ewenny_Priory_Church.jpg/500px-Ewenny_Priory_Church.jpg

**Castle B:** Neath Castle  
- Location: 51.661, -3.806
- Country/County: England, Neath Port Talbot
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Neath_Castle_-_geograph.org.uk_-_42391.jpg/500px-Neath_Castle_-_geograph.org.uk_-_42391.jpg

**Metrics:**
- Name similarity: 100.0%
- Distance: 0.829km
- Same image: No

**Reasons:** High name similarity (100.0%), Near proximity (0.8km), Name + proximity combination

**Recommendation:** **MERGE**

---

### 7. MERGE (Confidence: 85%)

**Castle A:** Granny Castle
- Location: 52.34, -7.16
- Country/County: Ireland, County Kilkenny
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Killyleagh_Castle.jpg/500px-Killyleagh_Castle.jpg

**Castle B:** Grannagh Castle  
- Location: 52.325, -7.159
- Country/County: Ireland, County Kilkenny
- Type: castle
- Image: https://img.castlecore.uk/grannagh-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 1.669km
- Same image: No

**Reasons:** High name similarity (80.0%), Near proximity (1.7km), Name + proximity combination

**Recommendation:** **MERGE**

---

### 8. MERGE (Confidence: 85%)

**Castle A:** Donegal Castle
- Location: 54.6539, -8.11
- Country/County: Ireland, County Donegal
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Donegalcastle.jpg/500px-Donegalcastle.jpg

**Castle B:** Donegal Abbey  
- Location: 54.651, -8.118
- Country/County: Ireland, County Donegal
- Type: abbey
- Image: https://img.castlecore.uk/donegal-abbey.jpg

**Metrics:**
- Name similarity: 100.0%
- Distance: 0.607km
- Same image: No

**Reasons:** High name similarity (100.0%), Near proximity (0.6km), Name + proximity combination

**Recommendation:** **MERGE**

---

### 9. MERGE (Confidence: 85%)

**Castle A:** Shane's Castle
- Location: 54.7167, -6.3167
- Country/County: Northern Ireland, County Antrim
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Shane%27s_Castle%2C_County_Antrim_-_geograph.org.uk_-_155426.jpg/500px-Shane%27s_Castle%2C_County_Antrim_-_geograph.org.uk_-_155426.jpg

**Castle B:** Shane Castle  
- Location: 54.707, -6.31
- Country/County: Ireland, County Antrim
- Type: castle
- Image: https://img.castlecore.uk/shane-castle.jpg

**Metrics:**
- Name similarity: 85.7%
- Distance: 1.161km
- Same image: No

**Reasons:** High name similarity (85.7%), Near proximity (1.2km), Name + proximity combination

**Recommendation:** **MERGE**

---

### 10. MERGE (Confidence: 85%)

**Castle A:** Clare Island Castle
- Location: 53.808, -10.003
- Country/County: Ireland, County Mayo
- Type: tower house
- Image: https://img.castlecore.uk/clare-island-castle.jpg

**Castle B:** Clare Island Abbey  
- Location: 53.801, -9.976
- Country/County: Ireland, County Mayo
- Type: abbey
- Image: https://img.castlecore.uk/clare-island-abbey.jpg

**Metrics:**
- Name similarity: 100.0%
- Distance: 1.936km
- Same image: No

**Reasons:** High name similarity (100.0%), Near proximity (1.9km), Name + proximity combination

**Recommendation:** **MERGE**

---

### 11. MERGE (Confidence: 85%)

**Castle A:** Castle Caldwell
- Location: 54.498, -7.868
- Country/County: Northern Ireland, County Fermanagh
- Type: castle
- Image: https://img.castlecore.uk/castle-caldwell.jpg

**Castle B:** Castlecaldwell Castle  
- Location: 54.49, -7.875
- Country/County: Ireland, County Fermanagh
- Type: castle
- Image: https://img.castlecore.uk/castlecaldwell-castle.jpg

**Metrics:**
- Name similarity: 93.3%
- Distance: 0.998km
- Same image: No

**Reasons:** High name similarity (93.3%), Near proximity (1.0km), Name + proximity combination

**Recommendation:** **MERGE**

---

### 12. INVESTIGATE (Confidence: 75%)

**Castle A:** Rippon Castle
- Location: 54.1361, -1.5236
- Country/County: England, North Yorkshire
- Type: castle
- Image: https://img.castlecore.uk/rippon-castle.jpg

**Castle B:** Rippon Cathedral  
- Location: 54.1381, -1.5217
- Country/County: England, Yorkshire
- Type: abbey
- Image: https://img.castlecore.uk/rippon-cathedral.jpg

**Metrics:**
- Name similarity: 62.5%
- Distance: 0.255km
- Same image: No

**Reasons:** Moderate name similarity (62.5%), Close proximity (0.3km), Name + proximity combination

**Recommendation:** **INVESTIGATE**

---

### 13. INVESTIGATE (Confidence: 75%)

**Castle A:** King John's Castle (Carlingford)
- Location: 54.041, -6.188
- Country/County: Ireland, County Louth
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Carlingford_Castle.jpg/500px-Carlingford_Castle.jpg

**Castle B:** Carlingford Mint  
- Location: 54.042, -6.189
- Country/County: Ireland, County Louth
- Type: tower house
- Image: https://img.castlecore.uk/carlingford-mint.jpg

**Metrics:**
- Name similarity: 60.9%
- Distance: 0.129km
- Same image: No

**Reasons:** Moderate name similarity (60.9%), Close proximity (0.1km), Name + proximity combination

**Recommendation:** **INVESTIGATE**

---

### 14. INVESTIGATE (Confidence: 75%)

**Castle A:** Brampton Castle (Birdoswald)
- Location: 54.989, -2.53
- Country/County: England, Cumbria
- Type: fort
- Image: https://img.castlecore.uk/brampton-castle-birdoswald.jpg

**Castle B:** Birdoswald Roman Fort  
- Location: 54.9917, -2.5283
- Country/County: England, Cumbria
- Type: castle
- Image: https://img.castlecore.uk/birdoswald-roman-fort.jpg

**Metrics:**
- Name similarity: 61.9%
- Distance: 0.319km
- Same image: No

**Reasons:** Moderate name similarity (61.9%), Close proximity (0.3km), Name + proximity combination

**Recommendation:** **INVESTIGATE**

---

### 15. INVESTIGATE (Confidence: 75%)

**Castle A:** Kilmallock Friary
- Location: 52.4, -8.578
- Country/County: Ireland, County Limerick
- Type: abbey
- Image: https://img.castlecore.uk/kilmallock-friary.jpg

**Castle B:** Kilmallock Castle  
- Location: 52.399, -8.575
- Country/County: Ireland, County Limerick
- Type: castle
- Image: https://img.castlecore.uk/kilmallock-castle.jpg

**Metrics:**
- Name similarity: 64.7%
- Distance: 0.232km
- Same image: No

**Reasons:** Moderate name similarity (64.7%), Close proximity (0.2km), Name + proximity combination

**Recommendation:** **INVESTIGATE**

---

### 16. INVESTIGATE (Confidence: 75%)

**Castle A:** Shanagolden Friary
- Location: 52.558, -9.075
- Country/County: Ireland, County Limerick
- Type: abbey
- Image: https://img.castlecore.uk/shanagolden-friary.jpg

**Castle B:** Shanagolden Abbey  
- Location: 52.557, -9.069
- Country/County: Ireland, County Limerick
- Type: abbey
- Image: https://img.castlecore.uk/shanagolden-abbey.jpg

**Metrics:**
- Name similarity: 72.2%
- Distance: 0.421km
- Same image: No

**Reasons:** Moderate name similarity (72.2%), Close proximity (0.4km), Name + proximity combination

**Recommendation:** **INVESTIGATE**

---

### 17. INVESTIGATE (Confidence: 70%)

**Castle A:** Cavan Castle
- Location: 53.9908, -7.3608
- Country/County: Ireland, County Cavan
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Kinbane_Castle%2C_daylight.jpg/500px-Kinbane_Castle%2C_daylight.jpg

**Castle B:** Kinbane Castle  
- Location: 55.225, -6.2306
- Country/County: Northern Ireland, County Antrim
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Kinbane_Castle%2C_daylight.jpg/500px-Kinbane_Castle%2C_daylight.jpg

**Metrics:**
- Name similarity: 64.3%
- Distance: 155.339km
- Same image: Yes

**Reasons:** Moderate name similarity (64.3%), Identical image URL

**Recommendation:** **INVESTIGATE**

---

### 18. INVESTIGATE (Confidence: 60%)

**Castle A:** Beeston Castle
- Location: 53.1282, -2.6899
- Country/County: England, Cheshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Beeston_Castle_2016_017.jpg/500px-Beeston_Castle_2016_017.jpg

**Castle B:** Peckforton Castle  
- Location: 53.113, -2.687
- Country/County: England, Cheshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Peckforton_Castle_2014.jpg/500px-Peckforton_Castle_2014.jpg

**Metrics:**
- Name similarity: 64.7%
- Distance: 1.701km
- Same image: No

**Reasons:** Moderate name similarity (64.7%), Near proximity (1.7km), Name + proximity combination

**Recommendation:** **INVESTIGATE**

---

### 19. INVESTIGATE (Confidence: 60%)

**Castle A:** Cawdor Castle
- Location: 57.5218, -3.9227
- Country/County: Scotland, Highland
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Ecosse2009127.JPG/500px-Ecosse2009127.JPG

**Castle B:** Rait Castle  
- Location: 57.506, -3.907
- Country/County: Scotland, Highland
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Rait_Castle.jpg/500px-Rait_Castle.jpg

**Metrics:**
- Name similarity: 61.5%
- Distance: 1.991km
- Same image: No

**Reasons:** Moderate name similarity (61.5%), Near proximity (2.0km), Name + proximity combination

**Recommendation:** **INVESTIGATE**

---

### 20. INVESTIGATE (Confidence: 60%)

**Castle A:** Dunfermline Abbey
- Location: 56.0717, -3.4594
- Country/County: Scotland, Fife
- Type: abbey
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Aberdour_Castle_from_dovecote.jpg/500px-Aberdour_Castle_from_dovecote.jpg

**Castle B:** Dunfermline Palace  
- Location: 56.072, -3.468
- Country/County: Scotland, Fife
- Type: palace
- Image: https://img.castlecore.uk/dunfermline-palace.jpg

**Metrics:**
- Name similarity: 72.2%
- Distance: 0.535km
- Same image: No

**Reasons:** Moderate name similarity (72.2%), Near proximity (0.5km), Name + proximity combination

**Recommendation:** **INVESTIGATE**

---

### 21. INVESTIGATE (Confidence: 60%)

**Castle A:** Dean Castle
- Location: 55.6265, -4.5055
- Country/County: Scotland, East Ayrshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Culzean_Castle_house_and_gardens_01.JPG/500px-Culzean_Castle_house_and_gardens_01.JPG

**Castle B:** Rowallan Castle  
- Location: 55.612, -4.508
- Country/County: Scotland, Ayrshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Rowallan_castle_ayrshire.jpg/500px-Rowallan_castle_ayrshire.jpg

**Metrics:**
- Name similarity: 60.0%
- Distance: 1.620km
- Same image: No

**Reasons:** Moderate name similarity (60.0%), Near proximity (1.6km), Name + proximity combination

**Recommendation:** **INVESTIGATE**

---

### 22. INVESTIGATE (Confidence: 60%)

**Castle A:** Conwy Castle
- Location: 53.2802, -3.8265
- Country/County: Wales, Conwy
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Conwy_Castle%2C_water_view1.jpg/500px-Conwy_Castle%2C_water_view1.jpg

**Castle B:** Deganwy Castle  
- Location: 53.294, -3.819
- Country/County: Wales, Conwy
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/The_Site_of_Deganwy_Castle_-_aerial_2015.jpg/500px-The_Site_of_Deganwy_Castle_-_aerial_2015.jpg

**Metrics:**
- Name similarity: 71.4%
- Distance: 1.613km
- Same image: No

**Reasons:** Moderate name similarity (71.4%), Near proximity (1.6km), Name + proximity combination

**Recommendation:** **INVESTIGATE**

---

### 23. INVESTIGATE (Confidence: 60%)

**Castle A:** Cilgerran Castle
- Location: 52.0838, -4.6846
- Country/County: Wales, Pembrokeshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Ogmore_Castle_5085.jpg/500px-Ogmore_Castle_5085.jpg

**Castle B:** Cardigan Castle  
- Location: 52.0833, -4.6583
- Country/County: Wales, Ceredigion
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Cardigan_Castle_-_south_western_aspect-Geograph-6075948-by-M-J-Roscoe.jpg/500px-Cardigan_Castle_-_south_western_aspect-Geograph-6075948-by-M-J-Roscoe.jpg

**Metrics:**
- Name similarity: 62.5%
- Distance: 1.798km
- Same image: No

**Reasons:** Moderate name similarity (62.5%), Near proximity (1.8km), Name + proximity combination

**Recommendation:** **INVESTIGATE**

---

### 24. INVESTIGATE (Confidence: 60%)

**Castle A:** Kilkenny Castle
- Location: 52.6504, -7.2494
- Country/County: Ireland, County Kilkenny
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Kilkenny-castle.jpg/500px-Kilkenny-castle.jpg

**Castle B:** Black Abbey Kilkenny  
- Location: 52.653, -7.258
- Country/County: Ireland, County Kilkenny
- Type: abbey
- Image: https://img.castlecore.uk/black-abbey-kilkenny.jpg

**Metrics:**
- Name similarity: 60.0%
- Distance: 0.648km
- Same image: No

**Reasons:** Moderate name similarity (60.0%), Near proximity (0.6km), Name + proximity combination

**Recommendation:** **INVESTIGATE**

---

### 25. INVESTIGATE (Confidence: 60%)

**Castle A:** Charles Fort
- Location: 51.6973, -8.4968
- Country/County: Ireland, County Cork
- Type: castle
- Image: https://img.castlecore.uk/charles-fort-2.jpg

**Castle B:** James Fort  
- Location: 51.695, -8.515
- Country/County: Ireland, County Cork
- Type: fort
- Image: https://img.castlecore.uk/james-fort.jpg

**Metrics:**
- Name similarity: 66.7%
- Distance: 1.280km
- Same image: No

**Reasons:** Moderate name similarity (66.7%), Near proximity (1.3km), Name + proximity combination

**Recommendation:** **INVESTIGATE**

---

### 26. INVESTIGATE (Confidence: 60%)

**Castle A:** Thoor Ballylee
- Location: 53.0806, -8.6722
- Country/County: Ireland, County Galway
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Quin_Abbey%2C_Ireland.jpg/500px-Quin_Abbey%2C_Ireland.jpg

**Castle B:** Ballylee Castle  
- Location: 53.068, -8.658
- Country/County: Ireland, County Galway
- Type: tower house
- Image: https://img.castlecore.uk/ballylee-castle.jpg

**Metrics:**
- Name similarity: 60.0%
- Distance: 1.692km
- Same image: No

**Reasons:** Moderate name similarity (60.0%), Near proximity (1.7km), Name + proximity combination

**Recommendation:** **INVESTIGATE**

---

### 27. INVESTIGATE (Confidence: 60%)

**Castle A:** Kilmacduagh Monastery
- Location: 53.0472, -8.8456
- Country/County: Ireland, County Galway
- Type: abbey
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/ArdfertCathedral.jpg/500px-ArdfertCathedral.jpg

**Castle B:** Kilmacduagh Round Tower  
- Location: 53.059, -8.862
- Country/County: Ireland, County Galway
- Type: abbey
- Image: https://img.castlecore.uk/kilmacduagh-round-tower.jpg

**Metrics:**
- Name similarity: 69.6%
- Distance: 1.710km
- Same image: No

**Reasons:** Moderate name similarity (69.6%), Near proximity (1.7km), Name + proximity combination

**Recommendation:** **INVESTIGATE**

---

### 28. INVESTIGATE (Confidence: 60%)

**Castle A:** Audley's Castle
- Location: 54.3803, -5.5553
- Country/County: Northern Ireland, County Down
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Ballygally_Castle.jpg/500px-Ballygally_Castle.jpg

**Castle B:** Castle Ward  
- Location: 54.384, -5.583
- Country/County: Ireland, County Down
- Type: castle
- Image: https://img.castlecore.uk/castle-ward.jpg

**Metrics:**
- Name similarity: 60.0%
- Distance: 1.840km
- Same image: No

**Reasons:** Moderate name similarity (60.0%), Near proximity (1.8km), Name + proximity combination

**Recommendation:** **INVESTIGATE**

---

### 29. INVESTIGATE (Confidence: 60%)

**Castle A:** Etal Castle
- Location: 55.6458, -2.1153
- Country/County: England, Northumberland
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/9/90/Etal_castle.jpg

**Castle B:** Ford Castle  
- Location: 55.6369, -2.1069
- Country/County: England, Northumberland
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Ford_Castle_-_geograph.org.uk_-_354895.jpg/500px-Ford_Castle_-_geograph.org.uk_-_354895.jpg

**Metrics:**
- Name similarity: 63.6%
- Distance: 1.121km
- Same image: No

**Reasons:** Moderate name similarity (63.6%), Near proximity (1.1km), Name + proximity combination

**Recommendation:** **INVESTIGATE**

---

### 30. INVESTIGATE (Confidence: 60%)

**Castle A:** Old Wick Castle
- Location: 58.4167, -3.05
- Country/County: Scotland, Highland
- Type: castle
- Image: https://img.castlecore.uk/old-wick-castle.jpg

**Castle B:** Castle of Old Wick  
- Location: 58.4128, -3.0439
- Country/County: Scotland, Highland
- Type: castle
- Image: https://img.castlecore.uk/castle-of-old-wick.jpg

**Metrics:**
- Name similarity: 72.7%
- Distance: 0.561km
- Same image: No

**Reasons:** Moderate name similarity (72.7%), Near proximity (0.6km), Name + proximity combination

**Recommendation:** **INVESTIGATE**

---

### 31. INVESTIGATE (Confidence: 60%)

**Castle A:** Castle Girnigoe
- Location: 58.4667, -3.0667
- Country/County: Scotland, Highland
- Type: castle
- Image: https://img.castlecore.uk/castle-girnigoe.jpg

**Castle B:** Castle Sinclair Girnigoe  
- Location: 58.477, -3.089
- Country/County: Scotland, Highland
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Girnigoe1.jpg/500px-Girnigoe1.jpg

**Metrics:**
- Name similarity: 62.5%
- Distance: 1.730km
- Same image: No

**Reasons:** Moderate name similarity (62.5%), Near proximity (1.7km), Name + proximity combination

**Recommendation:** **INVESTIGATE**

---

### 32. INVESTIGATE (Confidence: 60%)

**Castle A:** Findlater Castle
- Location: 57.682, -2.638
- Country/County: Scotland, Aberdeenshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Findlater_Castle_-_geograph.org.uk_-_7908944.jpg/500px-Findlater_Castle_-_geograph.org.uk_-_7908944.jpg

**Castle B:** Inchdrewer Castle  
- Location: 57.6667, -2.65
- Country/County: Scotland, Aberdeenshire
- Type: castle
- Image: https://img.castlecore.uk/inchdrewer-castle.jpg

**Metrics:**
- Name similarity: 64.7%
- Distance: 1.845km
- Same image: No

**Reasons:** Moderate name similarity (64.7%), Near proximity (1.8km), Name + proximity combination

**Recommendation:** **INVESTIGATE**

---

### 33. INVESTIGATE (Confidence: 60%)

**Castle A:** Ballyportry Castle
- Location: 53.005, -9.053
- Country/County: Ireland, County Clare
- Type: tower house
- Image: https://img.castlecore.uk/ballyportry-castle.jpg

**Castle B:** Ballykinavarga Castle  
- Location: 53.01, -9.08
- Country/County: Ireland, County Clare
- Type: tower house
- Image: https://img.castlecore.uk/ballykinavarga-castle.jpg

**Metrics:**
- Name similarity: 61.9%
- Distance: 1.890km
- Same image: No

**Reasons:** Moderate name similarity (61.9%), Near proximity (1.9km), Name + proximity combination

**Recommendation:** **INVESTIGATE**

---

### 34. INVESTIGATE (Confidence: 60%)

**Castle A:** Newtown Castle
- Location: 53.087, -9.052
- Country/County: Ireland, County Clare
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Newtown_Castle.png/500px-Newtown_Castle.png

**Castle B:** Termon Castle  
- Location: 53.092, -9.075
- Country/County: Ireland, County Clare
- Type: tower house
- Image: https://img.castlecore.uk/termon-castle.jpg

**Metrics:**
- Name similarity: 71.4%
- Distance: 1.633km
- Same image: No

**Reasons:** Moderate name similarity (71.4%), Near proximity (1.6km), Name + proximity combination

**Recommendation:** **INVESTIGATE**

---

### 35. INVESTIGATE (Confidence: 60%)

**Castle A:** Dromoland Castle
- Location: 52.745, -8.884
- Country/County: Ireland, County Clare
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Dromoland_Castle.jpg/500px-Dromoland_Castle.jpg

**Castle B:** Moghane Castle  
- Location: 52.748, -8.895
- Country/County: Ireland, County Clare
- Type: tower house
- Image: https://img.castlecore.uk/moghane-castle.jpg

**Metrics:**
- Name similarity: 62.5%
- Distance: 0.812km
- Same image: No

**Reasons:** Moderate name similarity (62.5%), Near proximity (0.8km), Name + proximity combination

**Recommendation:** **INVESTIGATE**

---

### 36. INVESTIGATE (Confidence: 60%)

**Castle A:** Black Castle (Wicklow)
- Location: 52.978, -6.032
- Country/County: Ireland, County Wicklow
- Type: castle
- Image: https://img.castlecore.uk/black-castle-wicklow.jpg

**Castle B:** Wicklow Gaol  
- Location: 52.981, -6.046
- Country/County: Ireland, County Wicklow
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Wicklow_Gaol_-_aerial_-_2025-03-09_03.jpg/500px-Wicklow_Gaol_-_aerial_-_2025-03-09_03.jpg

**Metrics:**
- Name similarity: 69.2%
- Distance: 0.995km
- Same image: No

**Reasons:** Moderate name similarity (69.2%), Near proximity (1.0km), Name + proximity combination

**Recommendation:** **INVESTIGATE**

---

### 37. INVESTIGATE (Confidence: 60%)

**Castle A:** Coolbanagher Castle
- Location: 53.13, -7.34
- Country/County: Ireland, County Laois
- Type: tower house
- Image: https://img.castlecore.uk/coolbanagher-castle.jpg

**Castle B:** Coolbanagher Church  
- Location: 53.115, -7.327
- Country/County: Ireland, County Laois
- Type: abbey
- Image: https://img.castlecore.uk/coolbanagher-church.jpg

**Metrics:**
- Name similarity: 73.7%
- Distance: 1.880km
- Same image: No

**Reasons:** Moderate name similarity (73.7%), Near proximity (1.9km), Name + proximity combination

**Recommendation:** **INVESTIGATE**

---

### 38. INVESTIGATE (Confidence: 60%)

**Castle A:** Auchindoir Castle
- Location: 57.329, -2.838
- Country/County: Scotland, Aberdeenshire
- Type: castle
- Image: https://img.castlecore.uk/auchindoir-castle.jpg

**Castle B:** Druminnor Castle  
- Location: 57.3333, -2.8333
- Country/County: Scotland, Aberdeenshire
- Type: castle
- Image: https://img.castlecore.uk/druminnor-castle.jpg

**Metrics:**
- Name similarity: 64.7%
- Distance: 0.555km
- Same image: No

**Reasons:** Moderate name similarity (64.7%), Near proximity (0.6km), Name + proximity combination

**Recommendation:** **INVESTIGATE**

---

### 39. INVESTIGATE (Confidence: 60%)

**Castle A:** Clifford's Tower York
- Location: 53.957, -1.079
- Country/County: England, North Yorkshire
- Type: castle
- Image: https://img.castlecore.uk/clifford-s-tower-york.jpg

**Castle B:** Clifton Tower York  
- Location: 53.9617, -1.085
- Country/County: England, Yorkshire
- Type: castle
- Image: https://img.castlecore.uk/clifton-tower-york.jpg

**Metrics:**
- Name similarity: 76.2%
- Distance: 0.654km
- Same image: No

**Reasons:** Moderate name similarity (76.2%), Near proximity (0.7km), Name + proximity combination

**Recommendation:** **INVESTIGATE**

---

### 40. INVESTIGATE (Confidence: 60%)

**Castle A:** Dromahair Castle
- Location: 54.158, -8.298
- Country/County: Ireland, County Leitrim
- Type: castle
- Image: https://img.castlecore.uk/dromahair-castle.jpg

**Castle B:** Drumlease Castle  
- Location: 54.172, -8.282
- Country/County: Ireland, County Leitrim
- Type: tower house
- Image: https://img.castlecore.uk/drumlease-castle.jpg

**Metrics:**
- Name similarity: 68.8%
- Distance: 1.873km
- Same image: No

**Reasons:** Moderate name similarity (68.8%), Near proximity (1.9km), Name + proximity combination

**Recommendation:** **INVESTIGATE**

---

### 41. INVESTIGATE (Confidence: 60%)

**Castle A:** Liscartan Castle
- Location: 53.648, -6.698
- Country/County: Ireland, County Meath
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Liscartan_Castle_-_geograph.org.uk_-_497041.jpg/500px-Liscartan_Castle_-_geograph.org.uk_-_497041.jpg

**Castle B:** Navan Castle  
- Location: 53.653, -6.682
- Country/County: Ireland, County Meath
- Type: castle
- Image: https://img.castlecore.uk/navan-castle.jpg

**Metrics:**
- Name similarity: 62.5%
- Distance: 1.192km
- Same image: No

**Reasons:** Moderate name similarity (62.5%), Near proximity (1.2km), Name + proximity combination

**Recommendation:** **INVESTIGATE**

---

### 42. INVESTIGATE (Confidence: 60%)

**Castle A:** Dun Telve Broch
- Location: 57.1833, -5.5167
- Country/County: Scotland, Highland
- Type: castle
- Image: https://img.castlecore.uk/dun-telve-broch.jpg

**Castle B:** Dun Troddan Broch  
- Location: 57.1833, -5.5
- Country/County: Scotland, Highland
- Type: castle
- Image: https://img.castlecore.uk/dun-troddan-broch.jpg

**Metrics:**
- Name similarity: 64.7%
- Distance: 1.006km
- Same image: No

**Reasons:** Moderate name similarity (64.7%), Near proximity (1.0km), Name + proximity combination

**Recommendation:** **INVESTIGATE**

---

### 43. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dover Castle
- Location: 51.1285, 1.3222
- Country/County: England, Kent
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/1_dover_castle_aerial_panorama_2017.jpg/500px-1_dover_castle_aerial_panorama_2017.jpg

**Castle B:** Hever Castle  
- Location: 51.1843, 0.1158
- Country/County: England, Kent
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Hever_Castle_2014_06_20_1.jpg/500px-Hever_Castle_2014_06_20_1.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 84.363km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 44. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dover Castle
- Location: 51.1285, 1.3222
- Country/County: England, Kent
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/1_dover_castle_aerial_panorama_2017.jpg/500px-1_dover_castle_aerial_panorama_2017.jpg

**Castle B:** Doe Castle  
- Location: 55.1333, -7.7833
- Country/County: Ireland, County Donegal
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Audley%27s_Castle%2C_closeup.jpg/500px-Audley%27s_Castle%2C_closeup.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 752.255km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 45. KEEP-BOTH (Confidence: 50%)

**Castle A:** Leeds Castle
- Location: 51.2486, 0.6301
- Country/County: England, Kent
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Leeds_castle.JPG/500px-Leeds_castle.JPG

**Castle B:** Lewes Castle  
- Location: 50.8743, 0.0072
- Country/County: England, East Sussex
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Lewes_Castle_towers.JPG/500px-Lewes_Castle_towers.JPG

**Metrics:**
- Name similarity: 83.3%
- Distance: 60.226km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 46. KEEP-BOTH (Confidence: 50%)

**Castle A:** Leeds Castle
- Location: 51.2486, 0.6301
- Country/County: England, Kent
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Leeds_castle.JPG/500px-Leeds_castle.JPG

**Castle B:** Lews Castle  
- Location: 58.2167, -6.3833
- Country/County: Scotland, Western Isles
- Type: castle
- Image: https://img.castlecore.uk/lews-castle.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 895.085km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 47. KEEP-BOTH (Confidence: 50%)

**Castle A:** Leeds Castle
- Location: 51.2486, 0.6301
- Country/County: England, Kent
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Leeds_castle.JPG/500px-Leeds_castle.JPG

**Castle B:** Castle Leod  
- Location: 57.6833, -4.5667
- Country/County: Scotland, Highland
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Castle_Leod_%28geograph_4176882%29.jpg/500px-Castle_Leod_%28geograph_4176882%29.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 789.856km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 48. KEEP-BOTH (Confidence: 50%)

**Castle A:** Bodiam Castle
- Location: 51.0023, 0.5436
- Country/County: England, East Sussex
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Bodiam-castle-10My8-1197.jpg/500px-Bodiam-castle-10My8-1197.jpg

**Castle B:** Odiham Castle  
- Location: 51.2517, -0.9467
- Country/County: England, Hampshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Odiham_Castle.jpg/500px-Odiham_Castle.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 107.633km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 49. KEEP-BOTH (Confidence: 50%)

**Castle A:** Hever Castle
- Location: 51.1843, 0.1158
- Country/County: England, Kent
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Hever_Castle_2014_06_20_1.jpg/500px-Hever_Castle_2014_06_20_1.jpg

**Castle B:** Nevern Castle  
- Location: 51.998, -4.768
- Country/County: Wales, Pembrokeshire
- Type: castle
- Image: https://img.castlecore.uk/nevern-castle.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 349.228km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 50. KEEP-BOTH (Confidence: 50%)

**Castle A:** Rochester Castle
- Location: 51.3889, 0.5024
- Country/County: England, Kent
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Rochester_Castle_from_main_approach.jpg/500px-Rochester_Castle_from_main_approach.jpg

**Castle B:** Colchester Castle  
- Location: 51.8892, 0.9027
- Country/County: England, Essex
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Colchester-castle.jpg/500px-Colchester-castle.jpg

**Metrics:**
- Name similarity: 88.2%
- Distance: 62.112km
- Same image: No

**Reasons:** High name similarity (88.2%)

**Recommendation:** **KEEP-BOTH**

---

### 51. KEEP-BOTH (Confidence: 50%)

**Castle A:** Rochester Castle
- Location: 51.3889, 0.5024
- Country/County: England, Kent
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Rochester_Castle_from_main_approach.jpg/500px-Rochester_Castle_from_main_approach.jpg

**Castle B:** Chester Castle  
- Location: 53.1863, -2.8904
- Country/County: England, Cheshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Chester_Castle_-_geograph.org.uk_-_1022086.jpg/500px-Chester_Castle_-_geograph.org.uk_-_1022086.jpg

**Metrics:**
- Name similarity: 87.5%
- Distance: 305.227km
- Same image: No

**Reasons:** High name similarity (87.5%)

**Recommendation:** **KEEP-BOTH**

---

### 52. KEEP-BOTH (Confidence: 50%)

**Castle A:** Rochester Castle
- Location: 51.3889, 0.5024
- Country/County: England, Kent
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Rochester_Castle_from_main_approach.jpg/500px-Rochester_Castle_from_main_approach.jpg

**Castle B:** Portchester Castle  
- Location: 50.8363, -1.1184
- Country/County: England, Hampshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Portchester_castle_04.jpg/500px-Portchester_castle_04.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 128.748km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 53. KEEP-BOTH (Confidence: 50%)

**Castle A:** Rochester Castle
- Location: 51.3889, 0.5024
- Country/County: England, Kent
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Rochester_Castle_from_main_approach.jpg/500px-Rochester_Castle_from_main_approach.jpg

**Castle B:** Dorchester Abbey  
- Location: 51.6433, -1.165
- Country/County: England, Oxfordshire
- Type: abbey
- Image: https://img.castlecore.uk/dorchester-abbey.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 118.792km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 54. KEEP-BOTH (Confidence: 50%)

**Castle A:** Lewes Castle
- Location: 50.8743, 0.0072
- Country/County: England, East Sussex
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Lewes_Castle_towers.JPG/500px-Lewes_Castle_towers.JPG

**Castle B:** Bowes Castle  
- Location: 54.5167, -2.0167
- Country/County: England, County Durham
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Bowes_Castle_-_geograph.org.uk_-_1060655.jpg/500px-Bowes_Castle_-_geograph.org.uk_-_1060655.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 427.318km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 55. KEEP-BOTH (Confidence: 50%)

**Castle A:** Lewes Castle
- Location: 50.8743, 0.0072
- Country/County: England, East Sussex
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Lewes_Castle_towers.JPG/500px-Lewes_Castle_towers.JPG

**Castle B:** Cowes Castle  
- Location: 50.7633, -1.2981
- Country/County: England, Isle of Wight
- Type: castle
- Image: https://img.castlecore.uk/cowes-castle.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 92.523km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 56. KEEP-BOTH (Confidence: 50%)

**Castle A:** Lewes Castle
- Location: 50.8743, 0.0072
- Country/County: England, East Sussex
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Lewes_Castle_towers.JPG/500px-Lewes_Castle_towers.JPG

**Castle B:** Lews Castle  
- Location: 58.2167, -6.3833
- Country/County: Scotland, Western Isles
- Type: castle
- Image: https://img.castlecore.uk/lews-castle.jpg

**Metrics:**
- Name similarity: 91.7%
- Distance: 913.640km
- Same image: No

**Reasons:** High name similarity (91.7%)

**Recommendation:** **KEEP-BOTH**

---

### 57. KEEP-BOTH (Confidence: 50%)

**Castle A:** Upnor Castle
- Location: 51.4135, 0.5296
- Country/County: England, Kent
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Upnor_Castle_trimmed.jpg/500px-Upnor_Castle_trimmed.jpg

**Castle B:** Upton Castle  
- Location: 51.714, -4.901
- Country/County: Wales, Pembrokeshire
- Type: castle
- Image: https://img.castlecore.uk/upton-castle.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 376.778km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 58. KEEP-BOTH (Confidence: 50%)

**Castle A:** Deal Castle
- Location: 51.2216, 1.4027
- Country/County: England, Kent
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Deal_Castle_Aerial_View.jpg/500px-Deal_Castle_Aerial_View.jpg

**Castle B:** Dean Castle  
- Location: 55.6265, -4.5055
- Country/County: Scotland, East Ayrshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Culzean_Castle_house_and_gardens_01.JPG/500px-Culzean_Castle_house_and_gardens_01.JPG

**Metrics:**
- Name similarity: 90.9%
- Distance: 626.566km
- Same image: No

**Reasons:** High name similarity (90.9%)

**Recommendation:** **KEEP-BOTH**

---

### 59. KEEP-BOTH (Confidence: 50%)

**Castle A:** Deal Castle
- Location: 51.2216, 1.4027
- Country/County: England, Kent
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Deal_Castle_Aerial_View.jpg/500px-Deal_Castle_Aerial_View.jpg

**Castle B:** Lea Castle  
- Location: 53.0833, -7.2833
- Country/County: Ireland, County Laois
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Bective_Abbey.JPG/500px-Bective_Abbey.JPG

**Metrics:**
- Name similarity: 81.8%
- Distance: 627.238km
- Same image: No

**Reasons:** High name similarity (81.8%)

**Recommendation:** **KEEP-BOTH**

---

### 60. KEEP-BOTH (Confidence: 50%)

**Castle A:** Deal Castle
- Location: 51.2216, 1.4027
- Country/County: England, Kent
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Deal_Castle_Aerial_View.jpg/500px-Deal_Castle_Aerial_View.jpg

**Castle B:** Etal Castle  
- Location: 55.6458, -2.1153
- Country/County: England, Northumberland
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/9/90/Etal_castle.jpg

**Metrics:**
- Name similarity: 81.8%
- Distance: 544.187km
- Same image: No

**Reasons:** High name similarity (81.8%)

**Recommendation:** **KEEP-BOTH**

---

### 61. KEEP-BOTH (Confidence: 50%)

**Castle A:** Deal Castle
- Location: 51.2216, 1.4027
- Country/County: England, Kent
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Deal_Castle_Aerial_View.jpg/500px-Deal_Castle_Aerial_View.jpg

**Castle B:** Leap Castle  
- Location: 52.952, -7.809
- Country/County: Ireland, County Offaly
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Castles_of_Leinster-_Leap%2C_Offaly_%28geograph_1952750%29.jpg/500px-Castles_of_Leinster-_Leap%2C_Offaly_%28geograph_1952750%29.jpg

**Metrics:**
- Name similarity: 81.8%
- Distance: 657.609km
- Same image: No

**Reasons:** High name similarity (81.8%)

**Recommendation:** **KEEP-BOTH**

---

### 62. KEEP-BOTH (Confidence: 50%)

**Castle A:** Eynsford Castle
- Location: 51.3628, 0.2094
- Country/County: England, Kent
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Eynsford_Castle_%2820%29_%2818373797302%29_%282%29.jpg/500px-Eynsford_Castle_%2820%29_%2818373797302%29_%282%29.jpg

**Castle B:** Lydford Castle  
- Location: 50.6443, -4.0656
- Country/County: England, Devon
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Lydford%2C_the_castle_-_geograph.org.uk_-_571379.jpg/500px-Lydford%2C_the_castle_-_geograph.org.uk_-_571379.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 309.564km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 63. KEEP-BOTH (Confidence: 50%)

**Castle A:** Eynsford Castle
- Location: 51.3628, 0.2094
- Country/County: England, Kent
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Eynsford_Castle_%2820%29_%2818373797302%29_%282%29.jpg/500px-Eynsford_Castle_%2820%29_%2818373797302%29_%282%29.jpg

**Castle B:** Cessford Castle  
- Location: 55.527, -2.489
- Country/County: Scotland, Scottish Borders
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Cessford_Castle.jpg/500px-Cessford_Castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 496.232km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 64. KEEP-BOTH (Confidence: 50%)

**Castle A:** Eynsford Castle
- Location: 51.3628, 0.2094
- Country/County: England, Kent
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Eynsford_Castle_%2820%29_%2818373797302%29_%282%29.jpg/500px-Eynsford_Castle_%2820%29_%2818373797302%29_%282%29.jpg

**Castle B:** Longford Castle  
- Location: 53.726, -7.798
- Country/County: Ireland, County Longford
- Type: castle
- Image: https://img.castlecore.uk/longford-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 601.415km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 65. KEEP-BOTH (Confidence: 50%)

**Castle A:** Eynsford Castle
- Location: 51.3628, 0.2094
- Country/County: England, Kent
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Eynsford_Castle_%2820%29_%2818373797302%29_%282%29.jpg/500px-Eynsford_Castle_%2820%29_%2818373797302%29_%282%29.jpg

**Castle B:** Gosford Castle  
- Location: 54.288, -6.595
- Country/County: Ireland, County Armagh
- Type: castle
- Image: https://img.castlecore.uk/gosford-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 560.692km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 66. KEEP-BOTH (Confidence: 50%)

**Castle A:** Cooling Castle
- Location: 51.4631, 0.5704
- Country/County: England, Kent
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Cooling_Castle_gatehouse.jpg/500px-Cooling_Castle_gatehouse.jpg

**Castle B:** Coolhill Castle  
- Location: 52.544, -7.06
- Country/County: Ireland, County Kilkenny
- Type: tower house
- Image: https://img.castlecore.uk/coolhill-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 535.695km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 67. KEEP-BOTH (Confidence: 50%)

**Castle A:** Farnham Castle
- Location: 51.2154, -0.7988
- Country/County: England, Surrey
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Aerial_view_of_Farnham_Castle.jpg/500px-Aerial_view_of_Farnham_Castle.jpg

**Castle B:** Wareham Castle  
- Location: 50.687, -2.11
- Country/County: England, Dorset
- Type: castle
- Image: https://img.castlecore.uk/wareham-castle.jpg

**Metrics:**
- Name similarity: 85.7%
- Distance: 109.033km
- Same image: No

**Reasons:** High name similarity (85.7%)

**Recommendation:** **KEEP-BOTH**

---

### 68. KEEP-BOTH (Confidence: 50%)

**Castle A:** Corfe Castle
- Location: 50.6398, -2.0566
- Country/County: England, Dorset
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Corfe_Castle%2C_Dorset.jpg/500px-Corfe_Castle%2C_Dorset.jpg

**Castle B:** Castle Combe  
- Location: 51.4917, -2.2208
- Country/County: England, Wiltshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Castle_combe_river.jpg/500px-Castle_combe_river.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 95.419km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 69. KEEP-BOTH (Confidence: 50%)

**Castle A:** Corfe Castle
- Location: 50.6398, -2.0566
- Country/County: England, Dorset
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Corfe_Castle%2C_Dorset.jpg/500px-Corfe_Castle%2C_Dorset.jpg

**Castle B:** Fore Castle  
- Location: 53.69, -7.186
- Country/County: Ireland, County Westmeath
- Type: castle
- Image: https://img.castlecore.uk/fore-castle.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 487.041km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 70. KEEP-BOTH (Confidence: 50%)

**Castle A:** Corfe Castle
- Location: 50.6398, -2.0566
- Country/County: England, Dorset
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Corfe_Castle%2C_Dorset.jpg/500px-Corfe_Castle%2C_Dorset.jpg

**Castle B:** Corse Castle  
- Location: 57.178, -2.628
- Country/County: Scotland, Aberdeenshire
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Corse_Castle_-_geograph.org.uk_-_252876.jpg/500px-Corse_Castle_-_geograph.org.uk_-_252876.jpg

**Metrics:**
- Name similarity: 91.7%
- Distance: 727.970km
- Same image: No

**Reasons:** High name similarity (91.7%)

**Recommendation:** **KEEP-BOTH**

---

### 71. KEEP-BOTH (Confidence: 50%)

**Castle A:** Corfe Castle
- Location: 50.6398, -2.0566
- Country/County: England, Dorset
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Corfe_Castle%2C_Dorset.jpg/500px-Corfe_Castle%2C_Dorset.jpg

**Castle B:** Castle Coole  
- Location: 54.327, -7.582
- Country/County: Ireland, County Fermanagh
- Type: palace
- Image: https://img.castlecore.uk/castle-coole.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 554.737km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 72. KEEP-BOTH (Confidence: 50%)

**Castle A:** Corfe Castle
- Location: 50.6398, -2.0566
- Country/County: England, Dorset
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Corfe_Castle%2C_Dorset.jpg/500px-Corfe_Castle%2C_Dorset.jpg

**Castle B:** Borve Castle  
- Location: 58.1167, -5
- Country/County: Scotland, Highland
- Type: castle
- Image: https://img.castlecore.uk/borve-castle.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 852.757km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 73. KEEP-BOTH (Confidence: 50%)

**Castle A:** Corfe Castle
- Location: 50.6398, -2.0566
- Country/County: England, Dorset
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Corfe_Castle%2C_Dorset.jpg/500px-Corfe_Castle%2C_Dorset.jpg

**Castle B:** Corby Castle  
- Location: 54.905, -2.8
- Country/County: England, Cumbria
- Type: castle
- Image: https://img.castlecore.uk/corby-castle.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 476.890km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 74. KEEP-BOTH (Confidence: 50%)

**Castle A:** Launceston Castle
- Location: 50.6372, -4.3597
- Country/County: England, Cornwall
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Launceston_Castle_-_geograph.org.uk_-_22242.jpg/500px-Launceston_Castle_-_geograph.org.uk_-_22242.jpg

**Castle B:** Lauriston Castle  
- Location: 55.9667, -3.2833
- Country/County: Scotland, Edinburgh
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/LauristonCastleSouth.jpg/500px-LauristonCastleSouth.jpg

**Metrics:**
- Name similarity: 82.4%
- Distance: 596.894km
- Same image: No

**Reasons:** High name similarity (82.4%)

**Recommendation:** **KEEP-BOTH**

---

### 75. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dunster Castle
- Location: 51.1844, -3.4399
- Country/County: England, Somerset
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Dunster_Castle.jpg/500px-Dunster_Castle.jpg

**Castle B:** Muncaster Castle  
- Location: 54.3542, -3.3278
- Country/County: England, Cumbria
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Muncaster_Castle_-_geograph.org.uk_-_1980832.jpg/500px-Muncaster_Castle_-_geograph.org.uk_-_1980832.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 352.546km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 76. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dunster Castle
- Location: 51.1844, -3.4399
- Country/County: England, Somerset
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Dunster_Castle.jpg/500px-Dunster_Castle.jpg

**Castle B:** Dunideer Castle  
- Location: 57.316, -2.637
- Country/County: Scotland, Aberdeenshire
- Type: castle
- Image: https://img.castlecore.uk/dunideer-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 683.782km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 77. KEEP-BOTH (Confidence: 50%)

**Castle A:** Nunney Castle
- Location: 51.2217, -2.3845
- Country/County: England, Somerset
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Nunney_Castle_from_south.jpg/500px-Nunney_Castle_from_south.jpg

**Castle B:** Dunineny Castle  
- Location: 55.2, -6.25
- Country/County: Northern Ireland, County Antrim
- Type: tower house
- Image: https://img.castlecore.uk/dunineny-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 511.627km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 78. KEEP-BOTH (Confidence: 50%)

**Castle A:** Portland Castle
- Location: 50.5683, -2.4324
- Country/County: England, Dorset
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Uk_dor_portcastle.JPG/500px-Uk_dor_portcastle.JPG

**Castle B:** Portumna Castle  
- Location: 53.0892, -8.2194
- Country/County: Ireland, County Galway
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Leamaneh_Castle_Ireland_12283094446_o.jpg/500px-Leamaneh_Castle_Ireland_12283094446_o.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 486.306km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 79. KEEP-BOTH (Confidence: 50%)

**Castle A:** Portland Castle
- Location: 50.5683, -2.4324
- Country/County: England, Dorset
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Uk_dor_portcastle.JPG/500px-Uk_dor_portcastle.JPG

**Castle B:** Noltland Castle  
- Location: 59.306, -2.956
- Country/County: Scotland, Orkney
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Noltland_Castle_-_geograph.org.uk_-_1763460.jpg/500px-Noltland_Castle_-_geograph.org.uk_-_1763460.jpg

**Metrics:**
- Name similarity: 86.7%
- Distance: 972.156km
- Same image: No

**Reasons:** High name similarity (86.7%)

**Recommendation:** **KEEP-BOTH**

---

### 80. KEEP-BOTH (Confidence: 50%)

**Castle A:** Portland Castle
- Location: 50.5683, -2.4324
- Country/County: England, Dorset
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Uk_dor_portcastle.JPG/500px-Uk_dor_portcastle.JPG

**Castle B:** Portlick Castle  
- Location: 53.508, -7.968
- Country/County: Ireland, County Westmeath
- Type: tower house
- Image: https://img.castlecore.uk/portlick-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 499.959km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 81. KEEP-BOTH (Confidence: 50%)

**Castle A:** Warwick Castle
- Location: 52.2793, -1.5849
- Country/County: England, Warwickshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Warwick_Castle_May_2016.jpg/500px-Warwick_Castle_May_2016.jpg

**Castle B:** Carrick Castle  
- Location: 54.45, -6.7833
- Country/County: Northern Ireland, County Armagh
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Carrick_Castle_tower_from_west.jpg/500px-Carrick_Castle_tower_from_west.jpg

**Metrics:**
- Name similarity: 85.7%
- Distance: 420.820km
- Same image: No

**Reasons:** High name similarity (85.7%)

**Recommendation:** **KEEP-BOTH**

---

### 82. KEEP-BOTH (Confidence: 50%)

**Castle A:** Kenilworth Castle
- Location: 52.3437, -1.5872
- Country/County: England, Warwickshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Kenilworth_Castle_gatehouse_landscape.jpg/500px-Kenilworth_Castle_gatehouse_landscape.jpg

**Castle B:** Wentworth Castle  
- Location: 53.5067, -1.5417
- Country/County: England, Yorkshire
- Type: castle
- Image: https://img.castlecore.uk/wentworth-castle.jpg

**Metrics:**
- Name similarity: 82.4%
- Distance: 129.356km
- Same image: No

**Reasons:** High name similarity (82.4%)

**Recommendation:** **KEEP-BOTH**

---

### 83. KEEP-BOTH (Confidence: 50%)

**Castle A:** Castle Howard
- Location: 54.1191, -0.9109
- Country/County: England, North Yorkshire
- Type: palace
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Castle_Howard_and_garden.jpg/500px-Castle_Howard_and_garden.jpg

**Castle B:** Toward Castle  
- Location: 55.859, -4.985
- Country/County: Scotland, Argyll and Bute
- Type: castle
- Image: https://img.castlecore.uk/toward-castle.jpg

**Metrics:**
- Name similarity: 92.3%
- Distance: 323.926km
- Same image: No

**Reasons:** High name similarity (92.3%)

**Recommendation:** **KEEP-BOTH**

---

### 84. KEEP-BOTH (Confidence: 50%)

**Castle A:** Castle Howard
- Location: 54.1191, -0.9109
- Country/County: England, North Yorkshire
- Type: palace
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Castle_Howard_and_garden.jpg/500px-Castle_Howard_and_garden.jpg

**Castle B:** Hawarden Castle  
- Location: 53.187, -3.031
- Country/County: Wales, Flintshire
- Type: castle
- Image: https://img.castlecore.uk/hawarden-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 173.953km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 85. KEEP-BOTH (Confidence: 50%)

**Castle A:** Castle Howard
- Location: 54.1191, -0.9109
- Country/County: England, North Yorkshire
- Type: palace
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Castle_Howard_and_garden.jpg/500px-Castle_Howard_and_garden.jpg

**Castle B:** Castle Ward  
- Location: 54.384, -5.583
- Country/County: Ireland, County Down
- Type: castle
- Image: https://img.castlecore.uk/castle-ward.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 304.883km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 86. KEEP-BOTH (Confidence: 50%)

**Castle A:** Bolsover Castle
- Location: 53.2307, -1.2913
- Country/County: England, Derbyshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Bolsover_Castle_-_geograph.org.uk_-_6937331.jpg/500px-Bolsover_Castle_-_geograph.org.uk_-_6937331.jpg

**Castle B:** Castle Oliver  
- Location: 52.378, -8.53
- Country/County: Ireland, County Limerick
- Type: castle
- Image: https://img.castlecore.uk/castle-oliver.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 495.520km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 87. KEEP-BOTH (Confidence: 50%)

**Castle A:** Rockingham Castle
- Location: 52.5003, -0.7419
- Country/County: England, Northamptonshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Rockingham_Castle_entrance.jpg/500px-Rockingham_Castle_entrance.jpg

**Castle B:** Nottingham Castle  
- Location: 52.9493, -1.1517
- Country/County: England, Nottinghamshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Nottingham_Castle_Gardens_-_geograph.org.uk_-_2878127.jpg/500px-Nottingham_Castle_Gardens_-_geograph.org.uk_-_2878127.jpg

**Metrics:**
- Name similarity: 82.4%
- Distance: 57.046km
- Same image: No

**Reasons:** High name similarity (82.4%)

**Recommendation:** **KEEP-BOTH**

---

### 88. KEEP-BOTH (Confidence: 50%)

**Castle A:** Norwich Castle
- Location: 52.629, 1.2968
- Country/County: England, Norfolk
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Norwich_Castle_keep%2C_2009.jpg/500px-Norwich_Castle_keep%2C_2009.jpg

**Castle B:** Oxwich Castle  
- Location: 51.554, -4.148
- Country/County: Wales, Swansea
- Type: castle
- Image: https://img.castlecore.uk/oxwich-castle.jpg

**Metrics:**
- Name similarity: 85.7%
- Distance: 390.600km
- Same image: No

**Reasons:** High name similarity (85.7%)

**Recommendation:** **KEEP-BOTH**

---

### 89. KEEP-BOTH (Confidence: 50%)

**Castle A:** Castle Acre Priory
- Location: 52.7176, 0.6836
- Country/County: England, Norfolk
- Type: abbey
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/CastleAcrePriory.JPG/500px-CastleAcrePriory.JPG

**Castle B:** Dacre Castle  
- Location: 54.65, -2.8333
- Country/County: England, Cumbria
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Dacre_Castle_%28geograph_2648020%29.jpg/500px-Dacre_Castle_%28geograph_2648020%29.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 315.858km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 90. KEEP-BOTH (Confidence: 50%)

**Castle A:** Orford Castle
- Location: 52.0949, 1.5351
- Country/County: England, Suffolk
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Orford_Castle_Keep.jpg/500px-Orford_Castle_Keep.jpg

**Castle B:** Oxford Castle  
- Location: 51.7508, -1.2656
- Country/County: England, Oxfordshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Upstream_to_the_tower_-_geograph.org.uk_-_1387392.jpg/500px-Upstream_to_the_tower_-_geograph.org.uk_-_1387392.jpg

**Metrics:**
- Name similarity: 92.3%
- Distance: 195.823km
- Same image: No

**Reasons:** High name similarity (92.3%)

**Recommendation:** **KEEP-BOTH**

---

### 91. KEEP-BOTH (Confidence: 50%)

**Castle A:** Orford Castle
- Location: 52.0949, 1.5351
- Country/County: England, Suffolk
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Orford_Castle_Keep.jpg/500px-Orford_Castle_Keep.jpg

**Castle B:** Ford Castle  
- Location: 55.6369, -2.1069
- Country/County: England, Northumberland
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Ford_Castle_-_geograph.org.uk_-_354895.jpg/500px-Ford_Castle_-_geograph.org.uk_-_354895.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 460.449km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 92. KEEP-BOTH (Confidence: 50%)

**Castle A:** Orford Castle
- Location: 52.0949, 1.5351
- Country/County: England, Suffolk
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Orford_Castle_Keep.jpg/500px-Orford_Castle_Keep.jpg

**Castle B:** Ormond Castle  
- Location: 52.353, -7.629
- Country/County: Ireland, County Tipperary
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Top_of_Ormond_Hill_-_geograph.org.uk_-_235640.jpg/500px-Top_of_Ormond_Hill_-_geograph.org.uk_-_235640.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 624.457km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 93. KEEP-BOTH (Confidence: 50%)

**Castle A:** Orford Castle
- Location: 52.0949, 1.5351
- Country/County: England, Suffolk
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Orford_Castle_Keep.jpg/500px-Orford_Castle_Keep.jpg

**Castle B:** Hertford Castle  
- Location: 51.798, -0.078
- Country/County: England, Hertfordshire
- Type: castle
- Image: https://img.castlecore.uk/hertford-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 115.383km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 94. KEEP-BOTH (Confidence: 50%)

**Castle A:** Orford Castle
- Location: 52.0949, 1.5351
- Country/County: England, Suffolk
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Orford_Castle_Keep.jpg/500px-Orford_Castle_Keep.jpg

**Castle B:** Longford Castle  
- Location: 53.726, -7.798
- Country/County: Ireland, County Longford
- Type: castle
- Image: https://img.castlecore.uk/longford-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 651.055km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 95. KEEP-BOTH (Confidence: 50%)

**Castle A:** Orford Castle
- Location: 52.0949, 1.5351
- Country/County: England, Suffolk
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Orford_Castle_Keep.jpg/500px-Orford_Castle_Keep.jpg

**Castle B:** Hereford Castle  
- Location: 52.0533, -2.715
- Country/County: England, Herefordshire
- Type: castle
- Image: https://img.castlecore.uk/hereford-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 290.469km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 96. KEEP-BOTH (Confidence: 50%)

**Castle A:** Orford Castle
- Location: 52.0949, 1.5351
- Country/County: England, Suffolk
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Orford_Castle_Keep.jpg/500px-Orford_Castle_Keep.jpg

**Castle B:** Gosford Castle  
- Location: 54.288, -6.595
- Country/County: Ireland, County Armagh
- Type: castle
- Image: https://img.castlecore.uk/gosford-castle.jpg

**Metrics:**
- Name similarity: 85.7%
- Distance: 593.549km
- Same image: No

**Reasons:** High name similarity (85.7%)

**Recommendation:** **KEEP-BOTH**

---

### 97. KEEP-BOTH (Confidence: 50%)

**Castle A:** Colchester Castle
- Location: 51.8892, 0.9027
- Country/County: England, Essex
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Colchester-castle.jpg/500px-Colchester-castle.jpg

**Castle B:** Chester Castle  
- Location: 53.1863, -2.8904
- Country/County: England, Cheshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Chester_Castle_-_geograph.org.uk_-_1022086.jpg/500px-Chester_Castle_-_geograph.org.uk_-_1022086.jpg

**Metrics:**
- Name similarity: 82.4%
- Distance: 294.249km
- Same image: No

**Reasons:** High name similarity (82.4%)

**Recommendation:** **KEEP-BOTH**

---

### 98. KEEP-BOTH (Confidence: 50%)

**Castle A:** Colchester Castle
- Location: 51.8892, 0.9027
- Country/County: England, Essex
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Colchester-castle.jpg/500px-Colchester-castle.jpg

**Castle B:** Portchester Castle  
- Location: 50.8363, -1.1184
- Country/County: England, Hampshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Portchester_castle_04.jpg/500px-Portchester_castle_04.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 182.738km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 99. KEEP-BOTH (Confidence: 50%)

**Castle A:** Colchester Castle
- Location: 51.8892, 0.9027
- Country/County: England, Essex
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Colchester-castle.jpg/500px-Colchester-castle.jpg

**Castle B:** Dorchester Abbey  
- Location: 51.6433, -1.165
- Country/County: England, Oxfordshire
- Type: abbey
- Image: https://img.castlecore.uk/dorchester-abbey.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 144.887km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 100. KEEP-BOTH (Confidence: 50%)

**Castle A:** Hedingham Castle
- Location: 51.9902, 0.5942
- Country/County: England, Essex
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/The_Keep%2C_Hedingham_Castle%2C_Essex_-_geograph.org.uk_-_3079561.jpg/500px-The_Keep%2C_Hedingham_Castle%2C_Essex_-_geograph.org.uk_-_3079561.jpg

**Castle B:** Edlingham Castle  
- Location: 55.35, -1.8333
- Country/County: England, Northumberland
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Edlingham_Castle_-_Northumberland_-_England_-_2004-10-31.jpg/500px-Edlingham_Castle_-_Northumberland_-_England_-_2004-10-31.jpg

**Metrics:**
- Name similarity: 87.5%
- Distance: 406.317km
- Same image: No

**Reasons:** High name similarity (87.5%)

**Recommendation:** **KEEP-BOTH**

---

### 101. KEEP-BOTH (Confidence: 50%)

**Castle A:** Hedingham Castle
- Location: 51.9902, 0.5942
- Country/County: England, Essex
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/The_Keep%2C_Hedingham_Castle%2C_Essex_-_geograph.org.uk_-_3079561.jpg/500px-The_Keep%2C_Hedingham_Castle%2C_Essex_-_geograph.org.uk_-_3079561.jpg

**Castle B:** Mettingham Castle  
- Location: 52.4167, 1.4833
- Country/County: England, Suffolk
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Entrance_to_Mettingham_Castle_-_geograph.org.uk_-_984718.jpg/500px-Entrance_to_Mettingham_Castle_-_geograph.org.uk_-_984718.jpg

**Metrics:**
- Name similarity: 82.4%
- Distance: 76.942km
- Same image: No

**Reasons:** High name similarity (82.4%)

**Recommendation:** **KEEP-BOTH**

---

### 102. KEEP-BOTH (Confidence: 50%)

**Castle A:** Wigmore Castle
- Location: 52.3155, -2.8784
- Country/County: England, Herefordshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Wigmore_Castle_-_geograph.org.uk_-_7350280.jpg/500px-Wigmore_Castle_-_geograph.org.uk_-_7350280.jpg

**Castle B:** Ogmore Castle  
- Location: 51.4732, -3.5933
- Country/County: Wales, Vale of Glamorgan
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Castell_Rhuthun_-_adfeilion_y_goresgynwyr_%28wel_o_lia_fe_drion_nhw%29_27.JPG/500px-Castell_Rhuthun_-_adfeilion_y_goresgynwyr_%28wel_o_lia_fe_drion_nhw%29_27.JPG

**Metrics:**
- Name similarity: 85.7%
- Distance: 105.728km
- Same image: No

**Reasons:** High name similarity (85.7%)

**Recommendation:** **KEEP-BOTH**

---

### 103. KEEP-BOTH (Confidence: 50%)

**Castle A:** Wigmore Castle
- Location: 52.3155, -2.8784
- Country/County: England, Herefordshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Wigmore_Castle_-_geograph.org.uk_-_7350280.jpg/500px-Wigmore_Castle_-_geograph.org.uk_-_7350280.jpg

**Castle B:** Lismore Castle  
- Location: 52.1375, -7.9333
- Country/County: Ireland, County Waterford
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Summerhill_House%2C_Main_front.jpg/500px-Summerhill_House%2C_Main_front.jpg

**Metrics:**
- Name similarity: 85.7%
- Distance: 344.795km
- Same image: No

**Reasons:** High name similarity (85.7%)

**Recommendation:** **KEEP-BOTH**

---

### 104. KEEP-BOTH (Confidence: 50%)

**Castle A:** Berkeley Castle
- Location: 51.6891, -2.4592
- Country/County: England, Gloucestershire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Berkeley_Castle_-_geograph.org.uk_-_3079433.jpg/500px-Berkeley_Castle_-_geograph.org.uk_-_3079433.jpg

**Castle B:** Belvelly Castle  
- Location: 51.862, -8.275
- Country/County: Ireland, County Cork
- Type: tower house
- Image: https://img.castlecore.uk/belvelly-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 400.489km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 105. KEEP-BOTH (Confidence: 50%)

**Castle A:** Alnwick Castle
- Location: 55.4155, -1.7057
- Country/County: England, Northumberland
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Alnwick_Castle_in_uk.jpg/500px-Alnwick_Castle_in_uk.jpg

**Castle B:** Old Wick Castle  
- Location: 58.4167, -3.05
- Country/County: Scotland, Highland
- Type: castle
- Image: https://img.castlecore.uk/old-wick-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 343.531km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 106. KEEP-BOTH (Confidence: 50%)

**Castle A:** Bamburgh Castle
- Location: 55.6089, -1.7098
- Country/County: England, Northumberland
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Bamburgh_Castle%2C_beautiful_day.jpg/500px-Bamburgh_Castle%2C_beautiful_day.jpg

**Castle B:** Burgh Castle  
- Location: 52.5847, 1.6442
- Country/County: England, Norfolk
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Burgh_Castle_SS_Peter_and_Paul.jpg/500px-Burgh_Castle_SS_Peter_and_Paul.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 401.035km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 107. KEEP-BOTH (Confidence: 50%)

**Castle A:** Bamburgh Castle
- Location: 55.6089, -1.7098
- Country/County: England, Northumberland
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Bamburgh_Castle%2C_beautiful_day.jpg/500px-Bamburgh_Castle%2C_beautiful_day.jpg

**Castle B:** Roxburgh Castle  
- Location: 55.588, -2.508
- Country/County: Scotland, Scottish Borders
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/0/01/Castles_old_and_new_-_geograph.org.uk_-_163364.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 50.200km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 108. KEEP-BOTH (Confidence: 50%)

**Castle A:** Warkworth Castle
- Location: 55.3449, -1.6122
- Country/County: England, Northumberland
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Warkworth_Castle_interior%2C_2007.jpg/500px-Warkworth_Castle_interior%2C_2007.jpg

**Castle B:** Tamworth Castle  
- Location: 52.6344, -1.6935
- Country/County: England, Staffordshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Tamworth_Castle_343714.jpg/500px-Tamworth_Castle_343714.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 301.441km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 109. KEEP-BOTH (Confidence: 50%)

**Castle A:** Warkworth Castle
- Location: 55.3449, -1.6122
- Country/County: England, Northumberland
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Warkworth_Castle_interior%2C_2007.jpg/500px-Warkworth_Castle_interior%2C_2007.jpg

**Castle B:** Naworth Castle  
- Location: 54.9333, -2.6667
- Country/County: England, Cumbria
- Type: castle
- Image: https://img.castlecore.uk/naworth-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 81.156km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 110. KEEP-BOTH (Confidence: 50%)

**Castle A:** Warkworth Castle
- Location: 55.3449, -1.6122
- Country/County: England, Northumberland
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Warkworth_Castle_interior%2C_2007.jpg/500px-Warkworth_Castle_interior%2C_2007.jpg

**Castle B:** Mackworth Castle  
- Location: 52.934, -1.542
- Country/County: England, Derbyshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/2/2c/Mackworth_Castle_-_thumb_205765.jpg

**Metrics:**
- Name similarity: 87.5%
- Distance: 268.119km
- Same image: No

**Reasons:** High name similarity (87.5%)

**Recommendation:** **KEEP-BOTH**

---

### 111. KEEP-BOTH (Confidence: 50%)

**Castle A:** Warkworth Castle
- Location: 55.3449, -1.6122
- Country/County: England, Northumberland
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Warkworth_Castle_interior%2C_2007.jpg/500px-Warkworth_Castle_interior%2C_2007.jpg

**Castle B:** Wentworth Castle  
- Location: 53.5067, -1.5417
- Country/County: England, Yorkshire
- Type: castle
- Image: https://img.castlecore.uk/wentworth-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 204.449km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 112. KEEP-BOTH (Confidence: 50%)

**Castle A:** Carlisle Castle
- Location: 54.8966, -2.9399
- Country/County: England, Cumbria
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Carlisle_Castle.png/500px-Carlisle_Castle.png

**Castle B:** Carbisdale Castle  
- Location: 57.9, -4.3833
- Country/County: Scotland, Highland
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Carbisdale_Castle_drone_%2825592663297%29.jpg/500px-Carbisdale_Castle_drone_%2825592663297%29.jpg

**Metrics:**
- Name similarity: 82.4%
- Distance: 345.552km
- Same image: No

**Reasons:** High name similarity (82.4%)

**Recommendation:** **KEEP-BOTH**

---

### 113. KEEP-BOTH (Confidence: 50%)

**Castle A:** Brougham Castle
- Location: 54.6546, -2.7484
- Country/County: England, Cumbria
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/1007186_Brougham_Castle%2C_seen_from_the_Northeast_Brougham_20240528_0095.jpg/500px-1007186_Brougham_Castle%2C_seen_from_the_Northeast_Brougham_20240528_0095.jpg

**Castle B:** Brough Castle  
- Location: 54.5273, -2.3282
- Country/County: England, Cumbria
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/BroughCastleSW.jpg/500px-BroughCastleSW.jpg

**Metrics:**
- Name similarity: 86.7%
- Distance: 30.550km
- Same image: No

**Reasons:** High name similarity (86.7%)

**Recommendation:** **KEEP-BOTH**

---

### 114. KEEP-BOTH (Confidence: 50%)

**Castle A:** Brougham Castle
- Location: 54.6546, -2.7484
- Country/County: England, Cumbria
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/1007186_Brougham_Castle%2C_seen_from_the_Northeast_Brougham_20240528_0095.jpg/500px-1007186_Brougham_Castle%2C_seen_from_the_Northeast_Brougham_20240528_0095.jpg

**Castle B:** Broughton Castle  
- Location: 52.056, -1.378
- Country/County: England, Oxfordshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Broughton_castle2.jpg/500px-Broughton_castle2.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 302.911km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 115. KEEP-BOTH (Confidence: 50%)

**Castle A:** Brougham Castle
- Location: 54.6546, -2.7484
- Country/County: England, Cumbria
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/1007186_Brougham_Castle%2C_seen_from_the_Northeast_Brougham_20240528_0095.jpg/500px-1007186_Brougham_Castle%2C_seen_from_the_Northeast_Brougham_20240528_0095.jpg

**Castle B:** Roughan Castle  
- Location: 54.498, -6.908
- Country/County: Northern Ireland, County Tyrone
- Type: castle
- Image: https://img.castlecore.uk/scraped-roughan.jpg

**Metrics:**
- Name similarity: 86.7%
- Distance: 268.614km
- Same image: No

**Reasons:** High name similarity (86.7%)

**Recommendation:** **KEEP-BOTH**

---

### 116. KEEP-BOTH (Confidence: 50%)

**Castle A:** Brough Castle
- Location: 54.5273, -2.3282
- Country/County: England, Cumbria
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/BroughCastleSW.jpg/500px-BroughCastleSW.jpg

**Castle B:** Clough Castle  
- Location: 54.2833, -5.8833
- Country/County: Northern Ireland, County Down
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Clough_%2811%29%2C_October_2009.JPG/500px-Clough_%2811%29%2C_October_2009.JPG

**Metrics:**
- Name similarity: 84.6%
- Distance: 231.657km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 117. KEEP-BOTH (Confidence: 50%)

**Castle A:** Brough Castle
- Location: 54.5273, -2.3282
- Country/County: England, Cumbria
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/BroughCastleSW.jpg/500px-BroughCastleSW.jpg

**Castle B:** Broughton Castle  
- Location: 52.056, -1.378
- Country/County: England, Oxfordshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Broughton_castle2.jpg/500px-Broughton_castle2.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 281.953km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 118. KEEP-BOTH (Confidence: 50%)

**Castle A:** Penrith Castle
- Location: 54.6654, -2.7524
- Country/County: England, Cumbria
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Penrith_Castle_2.JPG/500px-Penrith_Castle_2.JPG

**Castle B:** Skenfrith Castle  
- Location: 51.8545, -2.7834
- Country/County: Wales, Monmouthshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Aerial_view_of_Denbigh_Castle%2C_by_Cadw.jpg/500px-Aerial_view_of_Denbigh_Castle%2C_by_Cadw.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 312.565km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 119. KEEP-BOTH (Confidence: 50%)

**Castle A:** Penrith Castle
- Location: 54.6654, -2.7524
- Country/County: England, Cumbria
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Penrith_Castle_2.JPG/500px-Penrith_Castle_2.JPG

**Castle B:** Penrice Castle  
- Location: 51.5778, -4.1361
- Country/County: Wales, Swansea
- Type: castle
- Image: https://img.castlecore.uk/penrice-castle.jpg

**Metrics:**
- Name similarity: 85.7%
- Distance: 355.506km
- Same image: No

**Reasons:** High name similarity (85.7%)

**Recommendation:** **KEEP-BOTH**

---

### 120. KEEP-BOTH (Confidence: 50%)

**Castle A:** Raby Castle
- Location: 54.62, -1.8419
- Country/County: England, County Durham
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Raby_Castle_%28spring%29.jpg/500px-Raby_Castle_%28spring%29.jpg

**Castle B:** Danby Castle  
- Location: 54.4667, -0.9667
- Country/County: England, North Yorkshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Danby_Castle_ruins_from_the_north_-_geograph.org.uk_-_2606955.jpg/500px-Danby_Castle_ruins_from_the_north_-_geograph.org.uk_-_2606955.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 58.970km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 121. KEEP-BOTH (Confidence: 50%)

**Castle A:** Raby Castle
- Location: 54.62, -1.8419
- Country/County: England, County Durham
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Raby_Castle_%28spring%29.jpg/500px-Raby_Castle_%28spring%29.jpg

**Castle B:** Groby Castle  
- Location: 52.6667, -1.2333
- Country/County: England, Leicestershire
- Type: castle
- Image: https://img.castlecore.uk/groby-castle.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 220.869km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 122. KEEP-BOTH (Confidence: 50%)

**Castle A:** Raby Castle
- Location: 54.62, -1.8419
- Country/County: England, County Durham
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Raby_Castle_%28spring%29.jpg/500px-Raby_Castle_%28spring%29.jpg

**Castle B:** Hay Castle  
- Location: 52.075, -3.125
- Country/County: Wales, Powys
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Hay_Castle%2C_Hay-on-Wye_-_geograph.org.uk_-_583851.jpg/500px-Hay_Castle%2C_Hay-on-Wye_-_geograph.org.uk_-_583851.jpg

**Metrics:**
- Name similarity: 81.8%
- Distance: 295.517km
- Same image: No

**Reasons:** High name similarity (81.8%)

**Recommendation:** **KEEP-BOTH**

---

### 123. KEEP-BOTH (Confidence: 50%)

**Castle A:** Raby Castle
- Location: 54.62, -1.8419
- Country/County: England, County Durham
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Raby_Castle_%28spring%29.jpg/500px-Raby_Castle_%28spring%29.jpg

**Castle B:** Rait Castle  
- Location: 57.506, -3.907
- Country/County: Scotland, Highland
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Rait_Castle.jpg/500px-Rait_Castle.jpg

**Metrics:**
- Name similarity: 81.8%
- Distance: 345.527km
- Same image: No

**Reasons:** High name similarity (81.8%)

**Recommendation:** **KEEP-BOTH**

---

### 124. KEEP-BOTH (Confidence: 50%)

**Castle A:** Raby Castle
- Location: 54.62, -1.8419
- Country/County: England, County Durham
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Raby_Castle_%28spring%29.jpg/500px-Raby_Castle_%28spring%29.jpg

**Castle B:** Wray Castle  
- Location: 54.381, -2.953
- Country/County: England, Cumbria
- Type: castle
- Image: https://img.castlecore.uk/wray-castle.jpg

**Metrics:**
- Name similarity: 81.8%
- Distance: 76.507km
- Same image: No

**Reasons:** High name similarity (81.8%)

**Recommendation:** **KEEP-BOTH**

---

### 125. KEEP-BOTH (Confidence: 50%)

**Castle A:** Raby Castle
- Location: 54.62, -1.8419
- Country/County: England, County Durham
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Raby_Castle_%28spring%29.jpg/500px-Raby_Castle_%28spring%29.jpg

**Castle B:** Castle Roy  
- Location: 57.2667, -3.6
- Country/County: Scotland, Highland
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Castle_Roy_-_geograph.org.uk_-_2069401.jpg/500px-Castle_Roy_-_geograph.org.uk_-_2069401.jpg

**Metrics:**
- Name similarity: 81.8%
- Distance: 313.976km
- Same image: No

**Reasons:** High name similarity (81.8%)

**Recommendation:** **KEEP-BOTH**

---

### 126. KEEP-BOTH (Confidence: 50%)

**Castle A:** Raby Castle
- Location: 54.62, -1.8419
- Country/County: England, County Durham
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Raby_Castle_%28spring%29.jpg/500px-Raby_Castle_%28spring%29.jpg

**Castle B:** Any Castle  
- Location: 52.365, -8.258
- Country/County: Ireland, County Tipperary
- Type: castle
- Image: https://img.castlecore.uk/any-castle.jpg

**Metrics:**
- Name similarity: 81.8%
- Distance: 492.700km
- Same image: No

**Reasons:** High name similarity (81.8%)

**Recommendation:** **KEEP-BOTH**

---

### 127. KEEP-BOTH (Confidence: 50%)

**Castle A:** Richmond Castle
- Location: 54.403, -1.7404
- Country/County: England, North Yorkshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Bailey_and_keep%2C_Richmond_Castle_-_geograph.org.uk_-_1318287.jpg/500px-Bailey_and_keep%2C_Richmond_Castle_-_geograph.org.uk_-_1318287.jpg

**Castle B:** Crichton Castle  
- Location: 55.8397, -2.9706
- Country/County: Scotland, Midlothian
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Scotland-2016-Aerial-Crichton_Castle.jpg/500px-Scotland-2016-Aerial-Crichton_Castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 177.870km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 128. KEEP-BOTH (Confidence: 50%)

**Castle A:** Skipton Castle
- Location: 53.9618, -2.0174
- Country/County: England, North Yorkshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Skipton_Castle_main_gate%2C_2007.jpg/500px-Skipton_Castle_main_gate%2C_2007.jpg

**Castle B:** Askeaton Castle  
- Location: 52.5992, -8.9756
- Country/County: Ireland, County Limerick
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Dunbrody_Abbey_SE_and_Young_Bulls_1997_08_27.jpg/500px-Dunbrody_Abbey_SE_and_Young_Bulls_1997_08_27.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 486.544km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 129. KEEP-BOTH (Confidence: 50%)

**Castle A:** Skipton Castle
- Location: 53.9618, -2.0174
- Country/County: England, North Yorkshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Skipton_Castle_main_gate%2C_2007.jpg/500px-Skipton_Castle_main_gate%2C_2007.jpg

**Castle B:** Askerton Castle  
- Location: 55.0317, -2.7333
- Country/County: England, Cumbria
- Type: castle
- Image: https://img.castlecore.uk/askerton-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 127.632km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 130. KEEP-BOTH (Confidence: 50%)

**Castle A:** Scarborough Castle
- Location: 54.2836, -0.3886
- Country/County: England, North Yorkshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Scarborough_Castle_3.jpg/500px-Scarborough_Castle_3.jpg

**Castle B:** Knaresborough Castle  
- Location: 54.0085, -1.4688
- Country/County: England, North Yorkshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Knaresborough_Castle_ruins.jpg/500px-Knaresborough_Castle_ruins.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 76.714km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 131. KEEP-BOTH (Confidence: 50%)

**Castle A:** Bolton Castle
- Location: 54.3133, -1.89
- Country/County: England, North Yorkshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Castle_Bolton_and_its_maze_-_geograph.org.uk_-_7335033.jpg/500px-Castle_Bolton_and_its_maze_-_geograph.org.uk_-_7335033.jpg

**Castle B:** Hopton Castle  
- Location: 52.4056, -2.9306
- Country/County: England, Shropshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Hopton_Castle.jpg/500px-Hopton_Castle.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 223.077km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 132. KEEP-BOTH (Confidence: 50%)

**Castle A:** Bolton Castle
- Location: 54.3133, -1.89
- Country/County: England, North Yorkshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Castle_Bolton_and_its_maze_-_geograph.org.uk_-_7335033.jpg/500px-Castle_Bolton_and_its_maze_-_geograph.org.uk_-_7335033.jpg

**Castle B:** Whorlton Castle  
- Location: 54.4167, -1.25
- Country/County: England, North Yorkshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Whorlton_Castle_gatehouse_exterior.jpg/500px-Whorlton_Castle_gatehouse_exterior.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 43.026km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 133. KEEP-BOTH (Confidence: 50%)

**Castle A:** Bolton Castle
- Location: 54.3133, -1.89
- Country/County: England, North Yorkshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Castle_Bolton_and_its_maze_-_geograph.org.uk_-_7335033.jpg/500px-Castle_Bolton_and_its_maze_-_geograph.org.uk_-_7335033.jpg

**Castle B:** Halton Castle  
- Location: 53.3333, -2.6833
- Country/County: England, Cheshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Halton_Castle_%285%29.JPG/500px-Halton_Castle_%285%29.JPG

**Metrics:**
- Name similarity: 84.6%
- Distance: 120.770km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 134. KEEP-BOTH (Confidence: 50%)

**Castle A:** Bolton Castle
- Location: 54.3133, -1.89
- Country/County: England, North Yorkshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Castle_Bolton_and_its_maze_-_geograph.org.uk_-_7335033.jpg/500px-Castle_Bolton_and_its_maze_-_geograph.org.uk_-_7335033.jpg

**Castle B:** Hylton Castle  
- Location: 54.9167, -1.45
- Country/County: England, Tyne and Wear
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Hylton_Castle_3.jpg/500px-Hylton_Castle_3.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 72.831km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 135. KEEP-BOTH (Confidence: 50%)

**Castle A:** Bolton Castle
- Location: 54.3133, -1.89
- Country/County: England, North Yorkshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Castle_Bolton_and_its_maze_-_geograph.org.uk_-_7335033.jpg/500px-Castle_Bolton_and_its_maze_-_geograph.org.uk_-_7335033.jpg

**Castle B:** Wilton Castle  
- Location: 54.5333, -1.5333
- Country/County: England, North Yorkshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Winter_view_of_Wilton_Castle_-_geograph.org.uk_-_1169638.jpg/500px-Winter_view_of_Wilton_Castle_-_geograph.org.uk_-_1169638.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 33.629km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 136. KEEP-BOTH (Confidence: 50%)

**Castle A:** Bolton Castle
- Location: 54.3133, -1.89
- Country/County: England, North Yorkshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Castle_Bolton_and_its_maze_-_geograph.org.uk_-_7335033.jpg/500px-Castle_Bolton_and_its_maze_-_geograph.org.uk_-_7335033.jpg

**Castle B:** Kimbolton Castle  
- Location: 52.3, -0.3833
- Country/County: England, Cambridgeshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Kimbolton_School%2C_west_and_south_fronts_-_geograph.org.uk_-_2522953.jpg/500px-Kimbolton_School%2C_west_and_south_fronts_-_geograph.org.uk_-_2522953.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 245.218km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 137. KEEP-BOTH (Confidence: 50%)

**Castle A:** Bolton Castle
- Location: 54.3133, -1.89
- Country/County: England, North Yorkshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Castle_Bolton_and_its_maze_-_geograph.org.uk_-_7335033.jpg/500px-Castle_Bolton_and_its_maze_-_geograph.org.uk_-_7335033.jpg

**Castle B:** Alton Castle  
- Location: 52.964, -1.886
- Country/County: England, Staffordshire
- Type: castle
- Image: https://img.castlecore.uk/alton-castle.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 150.036km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 138. KEEP-BOTH (Confidence: 50%)

**Castle A:** Bolton Castle
- Location: 54.3133, -1.89
- Country/County: England, North Yorkshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Castle_Bolton_and_its_maze_-_geograph.org.uk_-_7335033.jpg/500px-Castle_Bolton_and_its_maze_-_geograph.org.uk_-_7335033.jpg

**Castle B:** Morton Castle  
- Location: 55.272, -3.692
- Country/County: Scotland, Dumfries and Galloway
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Morton_Castle.jpg/500px-Morton_Castle.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 157.184km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 139. KEEP-BOTH (Confidence: 50%)

**Castle A:** Bolton Castle
- Location: 54.3133, -1.89
- Country/County: England, North Yorkshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Castle_Bolton_and_its_maze_-_geograph.org.uk_-_7335033.jpg/500px-Castle_Bolton_and_its_maze_-_geograph.org.uk_-_7335033.jpg

**Castle B:** Dalton Castle  
- Location: 54.154, -3.18
- Country/County: England, Cumbria
- Type: castle
- Image: https://img.castlecore.uk/dalton-castle.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 85.688km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 140. KEEP-BOTH (Confidence: 50%)

**Castle A:** Bolton Castle
- Location: 54.3133, -1.89
- Country/County: England, North Yorkshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Castle_Bolton_and_its_maze_-_geograph.org.uk_-_7335033.jpg/500px-Castle_Bolton_and_its_maze_-_geograph.org.uk_-_7335033.jpg

**Castle B:** Bolton Abbey  
- Location: 53.9828, -1.8886
- Country/County: England, Yorkshire
- Type: abbey
- Image: https://img.castlecore.uk/bolton-abbey.jpg

**Metrics:**
- Name similarity: 100.0%
- Distance: 36.750km
- Same image: No

**Reasons:** High name similarity (100.0%)

**Recommendation:** **KEEP-BOTH**

---

### 141. KEEP-BOTH (Confidence: 50%)

**Castle A:** Lancaster Castle
- Location: 54.0478, -2.8079
- Country/County: England, Lancashire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Lancaster_Castle_-_2023-03-25.jpg/500px-Lancaster_Castle_-_2023-03-25.jpg

**Castle B:** Muncaster Castle  
- Location: 54.3542, -3.3278
- Country/County: England, Cumbria
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Muncaster_Castle_-_geograph.org.uk_-_1980832.jpg/500px-Muncaster_Castle_-_geograph.org.uk_-_1980832.jpg

**Metrics:**
- Name similarity: 87.5%
- Distance: 48.003km
- Same image: No

**Reasons:** High name similarity (87.5%)

**Recommendation:** **KEEP-BOTH**

---

### 142. KEEP-BOTH (Confidence: 50%)

**Castle A:** Lancaster Castle
- Location: 54.0478, -2.8079
- Country/County: England, Lancashire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Lancaster_Castle_-_2023-03-25.jpg/500px-Lancaster_Castle_-_2023-03-25.jpg

**Castle B:** Leicester Castle  
- Location: 52.6319, -1.14
- Country/County: England, Leicestershire
- Type: castle
- Image: https://img.castlecore.uk/leicester-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 192.471km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 143. KEEP-BOTH (Confidence: 50%)

**Castle A:** Beeston Castle
- Location: 53.1282, -2.6899
- Country/County: England, Cheshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Beeston_Castle_2016_017.jpg/500px-Beeston_Castle_2016_017.jpg

**Castle B:** Beverston Castle  
- Location: 51.638, -2.203
- Country/County: England, Gloucestershire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Beverston_castle.jpg/500px-Beverston_castle.jpg

**Metrics:**
- Name similarity: 87.5%
- Distance: 168.965km
- Same image: No

**Reasons:** High name similarity (87.5%)

**Recommendation:** **KEEP-BOTH**

---

### 144. KEEP-BOTH (Confidence: 50%)

**Castle A:** Beeston Castle
- Location: 53.1282, -2.6899
- Country/County: England, Cheshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Beeston_Castle_2016_017.jpg/500px-Beeston_Castle_2016_017.jpg

**Castle B:** Gleaston Castle  
- Location: 54.161, -3.125
- Country/County: England, Cumbria
- Type: castle
- Image: https://img.castlecore.uk/gleaston-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 118.368km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 145. KEEP-BOTH (Confidence: 50%)

**Castle A:** Chester Castle
- Location: 53.1863, -2.8904
- Country/County: England, Cheshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Chester_Castle_-_geograph.org.uk_-_1022086.jpg/500px-Chester_Castle_-_geograph.org.uk_-_1022086.jpg

**Castle B:** Chepstow Castle  
- Location: 51.6442, -2.6747
- Country/County: Wales, Monmouthshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/SKENFRITH_CASTLE.jpg/500px-SKENFRITH_CASTLE.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 172.096km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 146. KEEP-BOTH (Confidence: 50%)

**Castle A:** Chester Castle
- Location: 53.1863, -2.8904
- Country/County: England, Cheshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Chester_Castle_-_geograph.org.uk_-_1022086.jpg/500px-Chester_Castle_-_geograph.org.uk_-_1022086.jpg

**Castle B:** Caister Castle  
- Location: 52.6478, 1.5342
- Country/County: England, Norfolk
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/8/8c/Caister_Castle.jpg

**Metrics:**
- Name similarity: 85.7%
- Distance: 302.587km
- Same image: No

**Reasons:** High name similarity (85.7%)

**Recommendation:** **KEEP-BOTH**

---

### 147. KEEP-BOTH (Confidence: 50%)

**Castle A:** Oxford Castle
- Location: 51.7508, -1.2656
- Country/County: England, Oxfordshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Upstream_to_the_tower_-_geograph.org.uk_-_1387392.jpg/500px-Upstream_to_the_tower_-_geograph.org.uk_-_1387392.jpg

**Castle B:** Ford Castle  
- Location: 55.6369, -2.1069
- Country/County: England, Northumberland
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Ford_Castle_-_geograph.org.uk_-_354895.jpg/500px-Ford_Castle_-_geograph.org.uk_-_354895.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 435.641km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 148. KEEP-BOTH (Confidence: 50%)

**Castle A:** Oxford Castle
- Location: 51.7508, -1.2656
- Country/County: England, Oxfordshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Upstream_to_the_tower_-_geograph.org.uk_-_1387392.jpg/500px-Upstream_to_the_tower_-_geograph.org.uk_-_1387392.jpg

**Castle B:** Longford Castle  
- Location: 53.726, -7.798
- Country/County: Ireland, County Longford
- Type: castle
- Image: https://img.castlecore.uk/longford-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 491.322km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 149. KEEP-BOTH (Confidence: 50%)

**Castle A:** Oxford Castle
- Location: 51.7508, -1.2656
- Country/County: England, Oxfordshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Upstream_to_the_tower_-_geograph.org.uk_-_1387392.jpg/500px-Upstream_to_the_tower_-_geograph.org.uk_-_1387392.jpg

**Castle B:** Gosford Castle  
- Location: 54.288, -6.595
- Country/County: Ireland, County Armagh
- Type: castle
- Image: https://img.castlecore.uk/gosford-castle.jpg

**Metrics:**
- Name similarity: 85.7%
- Distance: 454.401km
- Same image: No

**Reasons:** High name similarity (85.7%)

**Recommendation:** **KEEP-BOTH**

---

### 150. KEEP-BOTH (Confidence: 50%)

**Castle A:** Donnington Castle
- Location: 51.4275, -1.3548
- Country/County: England, Berkshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Donnington_Castle_-_April_2005.jpg/500px-Donnington_Castle_-_April_2005.jpg

**Castle B:** Huntington Castle  
- Location: 52.638, -6.718
- Country/County: Ireland, County Carlow
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Huntington-castle-herefordshire-august-2018.jpg/500px-Huntington-castle-herefordshire-august-2018.jpg

**Metrics:**
- Name similarity: 82.4%
- Distance: 390.683km
- Same image: No

**Reasons:** High name similarity (82.4%)

**Recommendation:** **KEEP-BOTH**

---

### 151. KEEP-BOTH (Confidence: 50%)

**Castle A:** Portchester Castle
- Location: 50.8363, -1.1184
- Country/County: England, Hampshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Portchester_castle_04.jpg/500px-Portchester_castle_04.jpg

**Castle B:** Dorchester Abbey  
- Location: 51.6433, -1.165
- Country/County: England, Oxfordshire
- Type: abbey
- Image: https://img.castlecore.uk/dorchester-abbey.jpg

**Metrics:**
- Name similarity: 81.8%
- Distance: 89.793km
- Same image: No

**Reasons:** High name similarity (81.8%)

**Recommendation:** **KEEP-BOTH**

---

### 152. KEEP-BOTH (Confidence: 50%)

**Castle A:** Hurst Castle
- Location: 50.7083, -1.5487
- Country/County: England, Hampshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Hurst_Castle%2C_near_Milford_on_Sea%2C_Hampshire%2C_England-2Oct2010_trimmmed.jpg/500px-Hurst_Castle%2C_near_Milford_on_Sea%2C_Hampshire%2C_England-2Oct2010_trimmmed.jpg

**Castle B:** Burt Castle  
- Location: 55.071, -7.426
- Country/County: Ireland, County Donegal
- Type: castle
- Image: https://img.castlecore.uk/burt-castle.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 624.703km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 153. KEEP-BOTH (Confidence: 50%)

**Castle A:** Lydford Castle
- Location: 50.6443, -4.0656
- Country/County: England, Devon
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Lydford%2C_the_castle_-_geograph.org.uk_-_571379.jpg/500px-Lydford%2C_the_castle_-_geograph.org.uk_-_571379.jpg

**Castle B:** Clifford Castle  
- Location: 52.087, -3.109
- Country/County: England, Herefordshire
- Type: castle
- Image: https://img.castlecore.uk/clifford-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 173.620km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 154. KEEP-BOTH (Confidence: 50%)

**Castle A:** Lydford Castle
- Location: 50.6443, -4.0656
- Country/County: England, Devon
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Lydford%2C_the_castle_-_geograph.org.uk_-_571379.jpg/500px-Lydford%2C_the_castle_-_geograph.org.uk_-_571379.jpg

**Castle B:** Longford Castle  
- Location: 53.726, -7.798
- Country/County: Ireland, County Longford
- Type: castle
- Image: https://img.castlecore.uk/longford-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 426.688km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 155. KEEP-BOTH (Confidence: 50%)

**Castle A:** Tamworth Castle
- Location: 52.6344, -1.6935
- Country/County: England, Staffordshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Tamworth_Castle_343714.jpg/500px-Tamworth_Castle_343714.jpg

**Castle B:** Lulworth Castle  
- Location: 50.6356, -2.1714
- Country/County: England, Dorset
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Lulworth_Castle_%281937%29.jpg/500px-Lulworth_Castle_%281937%29.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 224.689km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 156. KEEP-BOTH (Confidence: 50%)

**Castle A:** Tamworth Castle
- Location: 52.6344, -1.6935
- Country/County: England, Staffordshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Tamworth_Castle_343714.jpg/500px-Tamworth_Castle_343714.jpg

**Castle B:** Naworth Castle  
- Location: 54.9333, -2.6667
- Country/County: England, Cumbria
- Type: castle
- Image: https://img.castlecore.uk/naworth-castle.jpg

**Metrics:**
- Name similarity: 86.7%
- Distance: 263.494km
- Same image: No

**Reasons:** High name similarity (86.7%)

**Recommendation:** **KEEP-BOTH**

---

### 157. KEEP-BOTH (Confidence: 50%)

**Castle A:** Tamworth Castle
- Location: 52.6344, -1.6935
- Country/County: England, Staffordshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Tamworth_Castle_343714.jpg/500px-Tamworth_Castle_343714.jpg

**Castle B:** Mackworth Castle  
- Location: 52.934, -1.542
- Country/County: England, Derbyshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/2/2c/Mackworth_Castle_-_thumb_205765.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 34.837km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 158. KEEP-BOTH (Confidence: 50%)

**Castle A:** Tamworth Castle
- Location: 52.6344, -1.6935
- Country/County: England, Staffordshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Tamworth_Castle_343714.jpg/500px-Tamworth_Castle_343714.jpg

**Castle B:** Glanworth Castle  
- Location: 52.187, -8.371
- Country/County: Ireland, County Cork
- Type: castle
- Image: https://img.castlecore.uk/glanworth-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 455.482km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 159. KEEP-BOTH (Confidence: 50%)

**Castle A:** Tamworth Castle
- Location: 52.6344, -1.6935
- Country/County: England, Staffordshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Tamworth_Castle_343714.jpg/500px-Tamworth_Castle_343714.jpg

**Castle B:** Amroth Castle  
- Location: 51.7333, -4.65
- Country/County: Wales, Pembrokeshire
- Type: castle
- Image: https://img.castlecore.uk/amroth-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 225.072km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 160. KEEP-BOTH (Confidence: 50%)

**Castle A:** Nottingham Castle
- Location: 52.9493, -1.1517
- Country/County: England, Nottinghamshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Nottingham_Castle_Gardens_-_geograph.org.uk_-_2878127.jpg/500px-Nottingham_Castle_Gardens_-_geograph.org.uk_-_2878127.jpg

**Castle B:** Mettingham Castle  
- Location: 52.4167, 1.4833
- Country/County: England, Suffolk
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Entrance_to_Mettingham_Castle_-_geograph.org.uk_-_984718.jpg/500px-Entrance_to_Mettingham_Castle_-_geograph.org.uk_-_984718.jpg

**Metrics:**
- Name similarity: 88.2%
- Distance: 187.223km
- Same image: No

**Reasons:** High name similarity (88.2%)

**Recommendation:** **KEEP-BOTH**

---

### 161. KEEP-BOTH (Confidence: 50%)

**Castle A:** Craigmillar Castle
- Location: 55.9231, -3.1559
- Country/County: Scotland, Edinburgh
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Craigmillar_Castle.jpg/500px-Craigmillar_Castle.jpg

**Castle B:** Craigievar Castle  
- Location: 57.1444, -2.636
- Country/County: Scotland, Aberdeenshire
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Craigievar_Doocot_and_Castle_-_geograph.org.uk_-_7846018.jpg/500px-Craigievar_Doocot_and_Castle_-_geograph.org.uk_-_7846018.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 139.493km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 162. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dirleton Castle
- Location: 56.0458, -2.7808
- Country/County: Scotland, East Lothian
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Dirleton_S.jpg/500px-Dirleton_S.jpg

**Castle B:** Wilton Castle  
- Location: 54.5333, -1.5333
- Country/County: England, North Yorkshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Winter_view_of_Wilton_Castle_-_geograph.org.uk_-_1169638.jpg/500px-Winter_view_of_Wilton_Castle_-_geograph.org.uk_-_1169638.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 185.800km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 163. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dirleton Castle
- Location: 56.0458, -2.7808
- Country/County: Scotland, East Lothian
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Dirleton_S.jpg/500px-Dirleton_S.jpg

**Castle B:** Dalton Castle  
- Location: 54.154, -3.18
- Country/County: England, Cumbria
- Type: castle
- Image: https://img.castlecore.uk/dalton-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 211.885km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 164. KEEP-BOTH (Confidence: 50%)

**Castle A:** Hailes Castle
- Location: 55.9499, -2.5875
- Country/County: Scotland, East Lothian
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/HailesN.jpg/500px-HailesN.jpg

**Castle B:** Hailes Abbey  
- Location: 51.95, -1.9167
- Country/County: England, Gloucestershire
- Type: abbey
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Hailes_Abbey_Landscape.jpg/500px-Hailes_Abbey_Landscape.jpg

**Metrics:**
- Name similarity: 100.0%
- Distance: 446.924km
- Same image: No

**Reasons:** High name similarity (100.0%)

**Recommendation:** **KEEP-BOTH**

---

### 165. KEEP-BOTH (Confidence: 50%)

**Castle A:** Crichton Castle
- Location: 55.8397, -2.9706
- Country/County: Scotland, Midlothian
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Scotland-2016-Aerial-Crichton_Castle.jpg/500px-Scotland-2016-Aerial-Crichton_Castle.jpg

**Castle B:** Picton Castle  
- Location: 51.7833, -4.8667
- Country/County: Wales, Pembrokeshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/02_Picton_Castle_Pembrokeshire.JPG/500px-02_Picton_Castle_Pembrokeshire.JPG

**Metrics:**
- Name similarity: 80.0%
- Distance: 467.868km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 166. KEEP-BOTH (Confidence: 50%)

**Castle A:** Crichton Castle
- Location: 55.8397, -2.9706
- Country/County: Scotland, Midlothian
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Scotland-2016-Aerial-Crichton_Castle.jpg/500px-Scotland-2016-Aerial-Crichton_Castle.jpg

**Castle B:** Crediton Castle  
- Location: 50.792, -3.652
- Country/County: England, Devon
- Type: castle
- Image: https://img.castlecore.uk/crediton-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 563.093km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 167. KEEP-BOTH (Confidence: 50%)

**Castle A:** Crichton Castle
- Location: 55.8397, -2.9706
- Country/County: Scotland, Midlothian
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Scotland-2016-Aerial-Crichton_Castle.jpg/500px-Scotland-2016-Aerial-Crichton_Castle.jpg

**Castle B:** Craigston Castle  
- Location: 57.5833, -2.3167
- Country/County: Scotland, Aberdeenshire
- Type: castle
- Image: https://img.castlecore.uk/craigston-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 197.942km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 168. KEEP-BOTH (Confidence: 50%)

**Castle A:** Borthwick Castle
- Location: 55.8376, -3.0635
- Country/County: Scotland, Midlothian
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Borthwick_Castle%2C_Midlothian.jpg/500px-Borthwick_Castle%2C_Midlothian.jpg

**Castle B:** Portlick Castle  
- Location: 53.508, -7.968
- Country/County: Ireland, County Westmeath
- Type: tower house
- Image: https://img.castlecore.uk/portlick-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 407.935km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 169. KEEP-BOTH (Confidence: 50%)

**Castle A:** Stirling Castle
- Location: 56.1239, -3.9469
- Country/County: Scotland, Stirling
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Scotland-2016-Aerial-Stirling-Stirling_Castle.jpg/500px-Scotland-2016-Aerial-Stirling-Stirling_Castle.jpg

**Castle B:** Gilling Castle  
- Location: 54.1633, -1.0483
- Country/County: England, Yorkshire
- Type: castle
- Image: https://img.castlecore.uk/gilling-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 285.362km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 170. KEEP-BOTH (Confidence: 50%)

**Castle A:** Doune Castle
- Location: 56.1842, -4.0513
- Country/County: Scotland, Stirling
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Scotland-2016-Aerial-Doune_Castle_%28and_Castle_keeper%27s_cottage%29.jpg/500px-Scotland-2016-Aerial-Doune_Castle_%28and_Castle_keeper%27s_cottage%29.jpg

**Castle B:** Doe Castle  
- Location: 55.1333, -7.7833
- Country/County: Ireland, County Donegal
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Audley%27s_Castle%2C_closeup.jpg/500px-Audley%27s_Castle%2C_closeup.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 261.596km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 171. KEEP-BOTH (Confidence: 50%)

**Castle A:** Doune Castle
- Location: 56.1842, -4.0513
- Country/County: Scotland, Stirling
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Scotland-2016-Aerial-Doune_Castle_%28and_Castle_keeper%27s_cottage%29.jpg/500px-Scotland-2016-Aerial-Doune_Castle_%28and_Castle_keeper%27s_cottage%29.jpg

**Castle B:** Duns Castle  
- Location: 55.78, -2.341
- Country/County: Scotland, Scottish Borders
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Duns_Castle_-_geograph.org.uk_-_8169370.jpg/500px-Duns_Castle_-_geograph.org.uk_-_8169370.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 115.494km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 172. KEEP-BOTH (Confidence: 50%)

**Castle A:** Doune Castle
- Location: 56.1842, -4.0513
- Country/County: Scotland, Stirling
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Scotland-2016-Aerial-Doune_Castle_%28and_Castle_keeper%27s_cottage%29.jpg/500px-Scotland-2016-Aerial-Doune_Castle_%28and_Castle_keeper%27s_cottage%29.jpg

**Castle B:** Boyne Castle  
- Location: 57.6833, -2.7333
- Country/County: Scotland, Aberdeenshire
- Type: castle
- Image: https://img.castlecore.uk/boyne-castle-3.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 184.870km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 173. KEEP-BOTH (Confidence: 50%)

**Castle A:** Castle Campbell
- Location: 56.156, -3.6654
- Country/County: Scotland, Clackmannanshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Castle_Campbell_%28July_2007%29.jpg/500px-Castle_Campbell_%28July_2007%29.jpg

**Castle B:** Camber Castle  
- Location: 50.9308, 0.7803
- Country/County: England, East Sussex
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Camber_Castle%2C_seen_from_the_north-west.jpg/500px-Camber_Castle%2C_seen_from_the_north-west.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 650.729km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 174. KEEP-BOTH (Confidence: 50%)

**Castle A:** Castle Campbell
- Location: 56.156, -3.6654
- Country/County: Scotland, Clackmannanshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Castle_Campbell_%28July_2007%29.jpg/500px-Castle_Campbell_%28July_2007%29.jpg

**Castle B:** Castle Caldwell  
- Location: 54.498, -7.868
- Country/County: Northern Ireland, County Fermanagh
- Type: castle
- Image: https://img.castlecore.uk/castle-caldwell.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 323.430km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 175. KEEP-BOTH (Confidence: 50%)

**Castle A:** Huntingtower Castle
- Location: 56.4088, -3.5179
- Country/County: Scotland, Perth and Kinross
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Perth_and_Kinross_Huntingtower_Castle.jpg/500px-Perth_and_Kinross_Huntingtower_Castle.jpg

**Castle B:** Huntington Castle  
- Location: 52.638, -6.718
- Country/County: Ireland, County Carlow
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Huntington-castle-herefordshire-august-2018.jpg/500px-Huntington-castle-herefordshire-august-2018.jpg

**Metrics:**
- Name similarity: 84.2%
- Distance: 467.271km
- Same image: No

**Reasons:** High name similarity (84.2%)

**Recommendation:** **KEEP-BOTH**

---

### 176. KEEP-BOTH (Confidence: 50%)

**Castle A:** Loch Leven Castle
- Location: 56.2, -3.3807
- Country/County: Scotland, Perth and Kinross
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Lochleven_west_wall.JPG/500px-Lochleven_west_wall.JPG

**Castle B:** Castle Levan  
- Location: 55.9333, -4.8
- Country/County: Scotland, Inverclyde
- Type: castle
- Image: https://img.castlecore.uk/castle-levan.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 92.954km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 177. KEEP-BOTH (Confidence: 50%)

**Castle A:** Drum Castle
- Location: 57.078, -2.4206
- Country/County: Scotland, Aberdeenshire
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Drum_Castle_-_geograph.org.uk_-_4952750.jpg/500px-Drum_Castle_-_geograph.org.uk_-_4952750.jpg

**Castle B:** Trim Castle  
- Location: 53.5453, -6.7886
- Country/County: Ireland, County Meath
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Trim_Castle_6.jpg/500px-Trim_Castle_6.jpg

**Metrics:**
- Name similarity: 81.8%
- Distance: 480.117km
- Same image: No

**Reasons:** High name similarity (81.8%)

**Recommendation:** **KEEP-BOTH**

---

### 178. KEEP-BOTH (Confidence: 50%)

**Castle A:** Drum Castle
- Location: 57.078, -2.4206
- Country/County: Scotland, Aberdeenshire
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Drum_Castle_-_geograph.org.uk_-_4952750.jpg/500px-Drum_Castle_-_geograph.org.uk_-_4952750.jpg

**Castle B:** Crom Castle  
- Location: 54.1667, -7.45
- Country/County: Northern Ireland, County Fermanagh
- Type: castle
- Image: https://img.castlecore.uk/crom-castle.jpg

**Metrics:**
- Name similarity: 81.8%
- Distance: 452.003km
- Same image: No

**Reasons:** High name similarity (81.8%)

**Recommendation:** **KEEP-BOTH**

---

### 179. KEEP-BOTH (Confidence: 50%)

**Castle A:** Drum Castle
- Location: 57.078, -2.4206
- Country/County: Scotland, Aberdeenshire
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Drum_Castle_-_geograph.org.uk_-_4952750.jpg/500px-Drum_Castle_-_geograph.org.uk_-_4952750.jpg

**Castle B:** Edrom Castle  
- Location: 55.798, -2.308
- Country/County: Scotland, Scottish Borders
- Type: tower house
- Image: https://img.castlecore.uk/edrom-castle.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 142.498km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 180. KEEP-BOTH (Confidence: 50%)

**Castle A:** Elgin Cathedral
- Location: 57.6525, -3.3173
- Country/County: Scotland, Moray
- Type: abbey
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Elgin_Cathedral_view_from_rear.jpg/500px-Elgin_Cathedral_view_from_rear.jpg

**Castle B:** Ely Cathedral  
- Location: 52.3986, 0.2633
- Country/County: England, Cambridgeshire
- Type: abbey
- Image: https://img.castlecore.uk/ely-cathedral.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 626.986km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 181. KEEP-BOTH (Confidence: 50%)

**Castle A:** Balvenie Castle
- Location: 57.4498, -3.1343
- Country/County: Scotland, Moray
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Grampian_Map_Balvenie_Castle.png/500px-Grampian_Map_Balvenie_Castle.png

**Castle B:** Balwearie Castle  
- Location: 56.166, -3.296
- Country/County: Scotland, Fife
- Type: tower house
- Image: https://img.castlecore.uk/balwearie-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 143.091km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 182. KEEP-BOTH (Confidence: 50%)

**Castle A:** Balvenie Castle
- Location: 57.4498, -3.1343
- Country/County: Scotland, Moray
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Grampian_Map_Balvenie_Castle.png/500px-Grampian_Map_Balvenie_Castle.png

**Castle B:** Balgonie Castle  
- Location: 56.2, -3.1333
- Country/County: Scotland, Fife
- Type: castle
- Image: https://img.castlecore.uk/wiki-balgonie-castle.jpg

**Metrics:**
- Name similarity: 86.7%
- Distance: 138.971km
- Same image: No

**Reasons:** High name similarity (86.7%)

**Recommendation:** **KEEP-BOTH**

---

### 183. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dunrobin Castle
- Location: 57.9891, -3.9457
- Country/County: Scotland, Highland
- Type: palace
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Dunrobin_Castle_-Sutherland_-Scotland-26May2008_%282%29.jpg/500px-Dunrobin_Castle_-Sutherland_-Scotland-26May2008_%282%29.jpg

**Castle B:** Dunoon Castle  
- Location: 55.947, -4.926
- Country/County: Scotland, Argyll and Bute
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Castle_Hill_Dunoon_-_geograph.org.uk_-_995906.jpg/500px-Castle_Hill_Dunoon_-_geograph.org.uk_-_995906.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 234.710km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 184. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dunrobin Castle
- Location: 57.9891, -3.9457
- Country/County: Scotland, Highland
- Type: palace
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Dunrobin_Castle_-Sutherland_-Scotland-26May2008_%282%29.jpg/500px-Dunrobin_Castle_-Sutherland_-Scotland-26May2008_%282%29.jpg

**Castle B:** Dunraven Castle  
- Location: 51.4486, -3.6081
- Country/County: Wales, Vale of Glamorgan
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Dunraven_Castle_%2816567797823%29.jpg/500px-Dunraven_Castle_%2816567797823%29.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 727.591km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 185. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dunrobin Castle
- Location: 57.9891, -3.9457
- Country/County: Scotland, Highland
- Type: palace
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Dunrobin_Castle_-Sutherland_-Scotland-26May2008_%282%29.jpg/500px-Dunrobin_Castle_-Sutherland_-Scotland-26May2008_%282%29.jpg

**Castle B:** Dunmoran Castle  
- Location: 54.235, -8.62
- Country/County: Ireland, County Sligo
- Type: tower house
- Image: https://img.castlecore.uk/dunmoran-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 507.914km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 186. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dunrobin Castle
- Location: 57.9891, -3.9457
- Country/County: Scotland, Highland
- Type: palace
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Dunrobin_Castle_-Sutherland_-Scotland-26May2008_%282%29.jpg/500px-Dunrobin_Castle_-Sutherland_-Scotland-26May2008_%282%29.jpg

**Castle B:** Dunlavin Castle  
- Location: 53.057, -6.701
- Country/County: Ireland, County Wicklow
- Type: castle
- Image: https://img.castlecore.uk/dunlavin-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 575.071km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 187. KEEP-BOTH (Confidence: 50%)

**Castle A:** Inverlochy Castle
- Location: 56.8281, -5.0942
- Country/County: Scotland, Highland
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Kilchurn_Castle_C15th%2C_Loch_Awe_-_geograph.org.uk_-_7618041.jpg/500px-Kilchurn_Castle_C15th%2C_Loch_Awe_-_geograph.org.uk_-_7618041.jpg

**Castle B:** Inverallochy Castle  
- Location: 57.688, -2.008
- Country/County: Scotland, Aberdeenshire
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Inverallochy_Castle_-_geograph.org.uk_-_8145389.jpg/500px-Inverallochy_Castle_-_geograph.org.uk_-_8145389.jpg

**Metrics:**
- Name similarity: 89.5%
- Distance: 208.760km
- Same image: No

**Reasons:** High name similarity (89.5%)

**Recommendation:** **KEEP-BOTH**

---

### 188. KEEP-BOTH (Confidence: 50%)

**Castle A:** Kilchurn Castle
- Location: 56.4028, -5.0283
- Country/County: Scotland, Argyll and Bute
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Castle_Stalker_-_geograph.org.uk_-_204092.jpg/500px-Castle_Stalker_-_geograph.org.uk_-_204092.jpg

**Castle B:** Kilcogan Castle  
- Location: 53.218, -8.788
- Country/County: Ireland, County Galway
- Type: tower house
- Image: https://img.castlecore.uk/kilcogan-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 428.176km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 189. KEEP-BOTH (Confidence: 50%)

**Castle A:** Kilchurn Castle
- Location: 56.4028, -5.0283
- Country/County: Scotland, Argyll and Bute
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Castle_Stalker_-_geograph.org.uk_-_204092.jpg/500px-Castle_Stalker_-_geograph.org.uk_-_204092.jpg

**Castle B:** Kelburn Castle  
- Location: 55.7833, -4.8667
- Country/County: Scotland, North Ayrshire
- Type: castle
- Image: https://img.castlecore.uk/kelburn-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 69.611km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 190. KEEP-BOTH (Confidence: 50%)

**Castle A:** Duart Castle
- Location: 56.4556, -5.6537
- Country/County: Scotland, Argyll and Bute
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Dunstaffnage_Castle_-_geograph.org.uk_-_7933659.jpg/500px-Dunstaffnage_Castle_-_geograph.org.uk_-_7933659.jpg

**Castle B:** Burt Castle  
- Location: 55.071, -7.426
- Country/County: Ireland, County Donegal
- Type: castle
- Image: https://img.castlecore.uk/burt-castle.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 189.715km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 191. KEEP-BOTH (Confidence: 50%)

**Castle A:** Duart Castle
- Location: 56.4556, -5.6537
- Country/County: Scotland, Argyll and Bute
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Dunstaffnage_Castle_-_geograph.org.uk_-_7933659.jpg/500px-Dunstaffnage_Castle_-_geograph.org.uk_-_7933659.jpg

**Castle B:** Castle Stuart  
- Location: 57.519, -4.098
- Country/County: Scotland, Highland
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Castle_Stuart.jpg/500px-Castle_Stuart.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 151.201km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 192. KEEP-BOTH (Confidence: 50%)

**Castle A:** Duart Castle
- Location: 56.4556, -5.6537
- Country/County: Scotland, Argyll and Bute
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Dunstaffnage_Castle_-_geograph.org.uk_-_7933659.jpg/500px-Dunstaffnage_Castle_-_geograph.org.uk_-_7933659.jpg

**Castle B:** Duagh Castle  
- Location: 52.378, -9.558
- Country/County: Ireland, County Kerry
- Type: tower house
- Image: https://img.castlecore.uk/duagh-castle.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 518.839km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 193. KEEP-BOTH (Confidence: 50%)

**Castle A:** Rothesay Castle
- Location: 55.8376, -5.0539
- Country/County: Scotland, Argyll and Bute
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Caerlaverock_Castle_from_the_air.jpg/500px-Caerlaverock_Castle_from_the_air.jpg

**Castle B:** Rothiemay Castle  
- Location: 57.4833, -2.7667
- Country/County: Scotland, Moray
- Type: castle
- Image: https://img.castlecore.uk/rothiemay-castle.jpg

**Metrics:**
- Name similarity: 87.5%
- Distance: 230.243km
- Same image: No

**Reasons:** High name similarity (87.5%)

**Recommendation:** **KEEP-BOTH**

---

### 194. KEEP-BOTH (Confidence: 50%)

**Castle A:** Neidpath Castle
- Location: 55.6506, -3.4066
- Country/County: Scotland, Scottish Borders
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/SmailholmLochan.jpg/500px-SmailholmLochan.jpg

**Castle B:** Neath Castle  
- Location: 51.661, -3.806
- Country/County: England, Neath Port Talbot
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Neath_Castle_-_geograph.org.uk_-_42391.jpg/500px-Neath_Castle_-_geograph.org.uk_-_42391.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 444.401km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 195. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dunvegan Castle
- Location: 57.4483, -6.5867
- Country/County: Scotland, Isle of Skye
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Armadale_Castle_5.jpg/500px-Armadale_Castle_5.jpg

**Castle B:** Donegal Castle  
- Location: 54.6539, -8.11
- Country/County: Ireland, County Donegal
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Donegalcastle.jpg/500px-Donegalcastle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 324.781km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 196. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dunvegan Castle
- Location: 57.4483, -6.5867
- Country/County: Scotland, Isle of Skye
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Armadale_Castle_5.jpg/500px-Armadale_Castle_5.jpg

**Castle B:** Dunnaman Castle  
- Location: 54.252, -5.898
- Country/County: Northern Ireland, County Down
- Type: motte
- Image: https://img.castlecore.uk/dunnaman-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 357.998km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 197. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dunvegan Castle
- Location: 57.4483, -6.5867
- Country/County: Scotland, Isle of Skye
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Armadale_Castle_5.jpg/500px-Armadale_Castle_5.jpg

**Castle B:** Dungar Castle  
- Location: 52.918, -7.748
- Country/County: Ireland, County Tipperary
- Type: tower house
- Image: https://img.castlecore.uk/dungar-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 509.093km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 198. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dunvegan Castle
- Location: 57.4483, -6.5867
- Country/County: Scotland, Isle of Skye
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Armadale_Castle_5.jpg/500px-Armadale_Castle_5.jpg

**Castle B:** Dunmoran Castle  
- Location: 54.235, -8.62
- Country/County: Ireland, County Sligo
- Type: tower house
- Image: https://img.castlecore.uk/dunmoran-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 379.141km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 199. KEEP-BOTH (Confidence: 50%)

**Castle A:** Armadale Castle
- Location: 57.0634, -5.903
- Country/County: Scotland, Isle of Skye
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Kisimul_%2834570267945%29.jpg/500px-Kisimul_%2834570267945%29.jpg

**Castle B:** Castle Archdale  
- Location: 54.454, -7.725
- Country/County: Ireland, County Fermanagh
- Type: castle
- Image: https://img.castlecore.uk/castle-archdale.jpg

**Metrics:**
- Name similarity: 86.7%
- Distance: 311.715km
- Same image: No

**Reasons:** High name similarity (86.7%)

**Recommendation:** **KEEP-BOTH**

---

### 200. KEEP-BOTH (Confidence: 50%)

**Castle A:** Blair Castle
- Location: 56.7662, -3.8429
- Country/County: Scotland, Perth and Kinross
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Scone_Palace_-_Front_side.jpg/500px-Scone_Palace_-_Front_side.jpg

**Castle B:** Balvaird Castle  
- Location: 56.2833, -3.3167
- Country/County: Scotland, Perth and Kinross
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Balvaird_Castle_2018.jpg/500px-Balvaird_Castle_2018.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 62.648km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 201. KEEP-BOTH (Confidence: 50%)

**Castle A:** Blair Castle
- Location: 56.7662, -3.8429
- Country/County: Scotland, Perth and Kinross
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Scone_Palace_-_Front_side.jpg/500px-Scone_Palace_-_Front_side.jpg

**Castle B:** Claig Castle  
- Location: 55.869, -5.77
- Country/County: Scotland, Argyll and Bute
- Type: castle
- Image: https://img.castlecore.uk/claig-castle.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 155.153km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 202. KEEP-BOTH (Confidence: 50%)

**Castle A:** Bothwell Castle
- Location: 55.8106, -4.0778
- Country/County: Scotland, South Lanarkshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bothwell_Castle_20080505_-_south-east_tower.jpg/500px-Bothwell_Castle_20080505_-_south-east_tower.jpg

**Castle B:** Sopwell Castle  
- Location: 52.79, -8.088
- Country/County: Ireland, County Tipperary
- Type: tower house
- Image: https://img.castlecore.uk/sopwell-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 424.729km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 203. KEEP-BOTH (Confidence: 50%)

**Castle A:** Bothwell Castle
- Location: 55.8106, -4.0778
- Country/County: Scotland, South Lanarkshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bothwell_Castle_20080505_-_south-east_tower.jpg/500px-Bothwell_Castle_20080505_-_south-east_tower.jpg

**Castle B:** Barnwell Castle  
- Location: 52.4517, -0.45
- Country/County: England, Northamptonshire
- Type: castle
- Image: https://img.castlecore.uk/barnwell-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 441.863km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 204. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dean Castle
- Location: 55.6265, -4.5055
- Country/County: Scotland, East Ayrshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Culzean_Castle_house_and_gardens_01.JPG/500px-Culzean_Castle_house_and_gardens_01.JPG

**Castle B:** Lea Castle  
- Location: 53.0833, -7.2833
- Country/County: Ireland, County Laois
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Bective_Abbey.JPG/500px-Bective_Abbey.JPG

**Metrics:**
- Name similarity: 81.8%
- Distance: 335.158km
- Same image: No

**Reasons:** High name similarity (81.8%)

**Recommendation:** **KEEP-BOTH**

---

### 205. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dean Castle
- Location: 55.6265, -4.5055
- Country/County: Scotland, East Ayrshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Culzean_Castle_house_and_gardens_01.JPG/500px-Culzean_Castle_house_and_gardens_01.JPG

**Castle B:** Leap Castle  
- Location: 52.952, -7.809
- Country/County: Ireland, County Offaly
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Castles_of_Leinster-_Leap%2C_Offaly_%28geograph_1952750%29.jpg/500px-Castles_of_Leinster-_Leap%2C_Offaly_%28geograph_1952750%29.jpg

**Metrics:**
- Name similarity: 81.8%
- Distance: 366.535km
- Same image: No

**Reasons:** High name similarity (81.8%)

**Recommendation:** **KEEP-BOTH**

---

### 206. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dean Castle
- Location: 55.6265, -4.5055
- Country/County: Scotland, East Ayrshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Culzean_Castle_house_and_gardens_01.JPG/500px-Culzean_Castle_house_and_gardens_01.JPG

**Castle B:** Castle Levan  
- Location: 55.9333, -4.8
- Country/County: Scotland, Inverclyde
- Type: castle
- Image: https://img.castlecore.uk/castle-levan.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 38.768km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 207. KEEP-BOTH (Confidence: 50%)

**Castle A:** Brodick Castle
- Location: 55.5819, -5.149
- Country/County: Scotland, North Ayrshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Castell_Beaumaris_Castle%2C_Ynys_Mon_%28Anglesey%29%2C_Wales_45.png/500px-Castell_Beaumaris_Castle%2C_Ynys_Mon_%28Anglesey%29%2C_Wales_45.png

**Castle B:** Brodie Castle  
- Location: 57.5833, -3.7333
- Country/County: Scotland, Moray
- Type: castle
- Image: 

**Metrics:**
- Name similarity: 85.7%
- Distance: 238.823km
- Same image: No

**Reasons:** High name similarity (85.7%)

**Recommendation:** **KEEP-BOTH**

---

### 208. KEEP-BOTH (Confidence: 50%)

**Castle A:** Conwy Castle
- Location: 53.2802, -3.8265
- Country/County: Wales, Conwy
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Conwy_Castle%2C_water_view1.jpg/500px-Conwy_Castle%2C_water_view1.jpg

**Castle B:** Coity Castle  
- Location: 51.5259, -3.5491
- Country/County: Wales, Bridgend
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Lismore_Castle_%28Lismore%2C_Co._Waterford%29.jpg/500px-Lismore_Castle_%28Lismore%2C_Co._Waterford%29.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 195.974km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 209. KEEP-BOTH (Confidence: 50%)

**Castle A:** Conwy Castle
- Location: 53.2802, -3.8265
- Country/County: Wales, Conwy
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Conwy_Castle%2C_water_view1.jpg/500px-Conwy_Castle%2C_water_view1.jpg

**Castle B:** Conna Castle  
- Location: 52.068, -8.082
- Country/County: Ireland, County Cork
- Type: tower house
- Image: https://img.castlecore.uk/conna-castle.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 316.934km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 210. KEEP-BOTH (Confidence: 50%)

**Castle A:** Conwy Castle
- Location: 53.2802, -3.8265
- Country/County: Wales, Conwy
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Conwy_Castle%2C_water_view1.jpg/500px-Conwy_Castle%2C_water_view1.jpg

**Castle B:** Corby Castle  
- Location: 54.905, -2.8
- Country/County: England, Cumbria
- Type: castle
- Image: https://img.castlecore.uk/corby-castle.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 192.667km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 211. KEEP-BOTH (Confidence: 50%)

**Castle A:** Harlech Castle
- Location: 52.8602, -4.1094
- Country/County: Wales, Gwynedd
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Harlech_Castle_-_Cadw_photograph.jpg/500px-Harlech_Castle_-_Cadw_photograph.jpg

**Castle B:** Hadleigh Castle  
- Location: 51.545, 0.6069
- Country/County: England, Essex
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Aerial_view_of_Hadleigh_Castle_and_Country_Park_-_geograph.org.uk_-_1563595.jpg/500px-Aerial_view_of_Hadleigh_Castle_and_Country_Park_-_geograph.org.uk_-_1563595.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 353.024km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 212. KEEP-BOTH (Confidence: 50%)

**Castle A:** Flint Castle
- Location: 53.2479, -3.134
- Country/County: Wales, Flintshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Aberystwyth_castle_edit1.jpg/500px-Aberystwyth_castle_edit1.jpg

**Castle B:** Glin Castle  
- Location: 52.567, -9.29
- Country/County: Ireland, County Limerick
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Glin_Castle.jpg/500px-Glin_Castle.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 419.581km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 213. KEEP-BOTH (Confidence: 50%)

**Castle A:** Cardiff Castle
- Location: 51.4822, -3.181
- Country/County: Wales, Cardiff
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Aerial_view_of_Cardiff_Castle.jpg/500px-Aerial_view_of_Cardiff_Castle.jpg

**Castle B:** Cardigan Castle  
- Location: 52.0833, -4.6583
- Country/County: Wales, Ceredigion
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Cardigan_Castle_-_south_western_aspect-Geograph-6075948-by-M-J-Roscoe.jpg/500px-Cardigan_Castle_-_south_western_aspect-Geograph-6075948-by-M-J-Roscoe.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 121.630km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 214. KEEP-BOTH (Confidence: 50%)

**Castle A:** Raglan Castle
- Location: 51.7673, -2.8514
- Country/County: Wales, Monmouthshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Pembroke_Castle_-_June_2011.jpg/500px-Pembroke_Castle_-_June_2011.jpg

**Castle B:** Rowallan Castle  
- Location: 55.612, -4.508
- Country/County: Scotland, Ayrshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Rowallan_castle_ayrshire.jpg/500px-Rowallan_castle_ayrshire.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 441.174km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 215. KEEP-BOTH (Confidence: 50%)

**Castle A:** Pembroke Castle
- Location: 51.6746, -4.9838
- Country/County: Wales, Pembrokeshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Kidwelly_castle_whole.JPG/500px-Kidwelly_castle_whole.JPG

**Castle B:** Pembridge Castle  
- Location: 52.0133, -2.8683
- Country/County: England, Herefordshire
- Type: castle
- Image: https://img.castlecore.uk/pembridge-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 150.123km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 216. KEEP-BOTH (Confidence: 50%)

**Castle A:** Laugharne Castle
- Location: 51.7712, -4.4625
- Country/County: Wales, Carmarthenshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Llansteffan_Castle_and_Beach.jpg/500px-Llansteffan_Castle_and_Beach.jpg

**Castle B:** Lough Ree Castle  
- Location: 53.539, -7.959
- Country/County: Ireland, County Westmeath
- Type: castle
- Image: https://img.castlecore.uk/lough-ree-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 306.962km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 217. KEEP-BOTH (Confidence: 50%)

**Castle A:** Grosmont Castle
- Location: 51.8872, -2.8636
- Country/County: Wales, Monmouthshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Castell_Cricieth_o%27r_awyr_yn_2023_-_Cricieth_Castle_from_a_drone_-_Welsg_built_castle_in_Gwynedd%2C_Wales_41_%28cropped%29.png/500px-Castell_Cricieth_o%27r_awyr_yn_2023_-_Cricieth_Castle_from_a_drone_-_Welsg_built_castle_in_Gwynedd%2C_Wales_41_%28cropped%29.png

**Castle B:** Egremont Castle  
- Location: 54.4833, -3.5167
- Country/County: England, Cumbria
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Egremont_IMG_1323_-_panoramio.jpg/500px-Egremont_IMG_1323_-_panoramio.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 291.931km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 218. KEEP-BOTH (Confidence: 50%)

**Castle A:** Chirk Castle
- Location: 52.9369, -3.1007
- Country/County: Wales, Wrexham
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Castle_and_Path.JPG/500px-Castle_and_Path.JPG

**Castle B:** Cahir Castle  
- Location: 52.3745, -7.9275
- Country/County: Ireland, County Tipperary
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Cahir_Castle%2C_Tipperary_County%2C_Ireland_%286961416840%29_%282%29.jpg/500px-Cahir_Castle%2C_Tipperary_County%2C_Ireland_%286961416840%29_%282%29.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 331.457km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 219. KEEP-BOTH (Confidence: 50%)

**Castle A:** Powis Castle
- Location: 52.661, -3.1669
- Country/County: Wales, Powys
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Bronllys_Castle_-_geograph.org.uk_-_1921221.jpg/500px-Bronllys_Castle_-_geograph.org.uk_-_1921221.jpg

**Castle B:** Bowes Castle  
- Location: 54.5167, -2.0167
- Country/County: England, County Durham
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Bowes_Castle_-_geograph.org.uk_-_1060655.jpg/500px-Bowes_Castle_-_geograph.org.uk_-_1060655.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 219.859km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 220. KEEP-BOTH (Confidence: 50%)

**Castle A:** Powis Castle
- Location: 52.661, -3.1669
- Country/County: Wales, Powys
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Bronllys_Castle_-_geograph.org.uk_-_1921221.jpg/500px-Bronllys_Castle_-_geograph.org.uk_-_1921221.jpg

**Castle B:** Cowes Castle  
- Location: 50.7633, -1.2981
- Country/County: England, Isle of Wight
- Type: castle
- Image: https://img.castlecore.uk/cowes-castle.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 247.175km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 221. KEEP-BOTH (Confidence: 50%)

**Castle A:** Powis Castle
- Location: 52.661, -3.1669
- Country/County: Wales, Powys
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Bronllys_Castle_-_geograph.org.uk_-_1921221.jpg/500px-Bronllys_Castle_-_geograph.org.uk_-_1921221.jpg

**Castle B:** Powrie Castle  
- Location: 56.5, -2.95
- Country/County: Scotland, Dundee
- Type: castle
- Image: https://img.castlecore.uk/powrie-castle.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 427.106km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 222. KEEP-BOTH (Confidence: 50%)

**Castle A:** Bronllys Castle
- Location: 51.9565, -3.2447
- Country/County: Wales, Powys
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Mynydd_Felfed_%28Coed_Hyrddyn%29_-_Velvet_Hill%2C_Llantysilio%2C_Llangollen%2C_Sir_Ddinbych%2C_Cymru_%28Wales%29_70.jpg/500px-Mynydd_Felfed_%28Coed_Hyrddyn%29_-_Velvet_Hill%2C_Llantysilio%2C_Llangollen%2C_Sir_Ddinbych%2C_Cymru_%28Wales%29_70.jpg

**Castle B:** Cefnllys Castle  
- Location: 52.268, -3.348
- Country/County: Wales, Powys
- Type: castle
- Image: https://img.castlecore.uk/cefnllys-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 35.348km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 223. KEEP-BOTH (Confidence: 50%)

**Castle A:** Talley Abbey
- Location: 51.9581, -3.9189
- Country/County: Wales, Carmarthenshire
- Type: abbey
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/The_Ruins_of_Cymer_Abbey_-_geograph.org.uk_-_3795241.jpg/500px-The_Ruins_of_Cymer_Abbey_-_geograph.org.uk_-_3795241.jpg

**Castle B:** Whalley Abbey  
- Location: 53.8167, -2.4167
- Country/County: England, Lancashire
- Type: abbey
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Whalley_Abbey_-_geograph.org.uk_-_1923754.jpg/500px-Whalley_Abbey_-_geograph.org.uk_-_1923754.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 229.920km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 224. KEEP-BOTH (Confidence: 50%)

**Castle A:** Talley Abbey
- Location: 51.9581, -3.9189
- Country/County: Wales, Carmarthenshire
- Type: abbey
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/The_Ruins_of_Cymer_Abbey_-_geograph.org.uk_-_3795241.jpg/500px-The_Ruins_of_Cymer_Abbey_-_geograph.org.uk_-_3795241.jpg

**Castle B:** Sawley Abbey  
- Location: 53.9167, -2.3667
- Country/County: England, Lancashire
- Type: abbey
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Salley_Abbey_-_geograph.org.uk_-_1736378.jpg/500px-Salley_Abbey_-_geograph.org.uk_-_1736378.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 241.339km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 225. KEEP-BOTH (Confidence: 50%)

**Castle A:** Carew Castle
- Location: 51.6899, -4.8434
- Country/County: Wales, Pembrokeshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Dinefwr_castle_at_sunrise.jpg/500px-Dinefwr_castle_at_sunrise.jpg

**Castle B:** Clare Castle  
- Location: 52.0781, 0.5756
- Country/County: England, Suffolk
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Clare_Castle_Motte.jpg/500px-Clare_Castle_Motte.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 374.344km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 226. KEEP-BOTH (Confidence: 50%)

**Castle A:** Carew Castle
- Location: 51.6899, -4.8434
- Country/County: Wales, Pembrokeshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Dinefwr_castle_at_sunrise.jpg/500px-Dinefwr_castle_at_sunrise.jpg

**Castle B:** Carlow Castle  
- Location: 52.836, -6.927
- Country/County: Ireland, County Carlow
- Type: castle
- Image: https://img.castlecore.uk/carlow-castle.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 190.639km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 227. KEEP-BOTH (Confidence: 50%)

**Castle A:** Carew Castle
- Location: 51.6899, -4.8434
- Country/County: Wales, Pembrokeshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Dinefwr_castle_at_sunrise.jpg/500px-Dinefwr_castle_at_sunrise.jpg

**Castle B:** Carna Castle  
- Location: 53.32, -9.87
- Country/County: Ireland, County Galway
- Type: tower house
- Image: https://img.castlecore.uk/carna-castle.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 385.368km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 228. KEEP-BOTH (Confidence: 50%)

**Castle A:** Ogmore Castle
- Location: 51.4732, -3.5933
- Country/County: Wales, Vale of Glamorgan
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Castell_Rhuthun_-_adfeilion_y_goresgynwyr_%28wel_o_lia_fe_drion_nhw%29_27.JPG/500px-Castell_Rhuthun_-_adfeilion_y_goresgynwyr_%28wel_o_lia_fe_drion_nhw%29_27.JPG

**Castle B:** Oranmore Castle  
- Location: 53.269, -8.925
- Country/County: Ireland, County Galway
- Type: castle
- Image: https://img.castlecore.uk/oranmore-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 413.242km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 229. KEEP-BOTH (Confidence: 50%)

**Castle A:** Ogmore Castle
- Location: 51.4732, -3.5933
- Country/County: Wales, Vale of Glamorgan
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Castell_Rhuthun_-_adfeilion_y_goresgynwyr_%28wel_o_lia_fe_drion_nhw%29_27.JPG/500px-Castell_Rhuthun_-_adfeilion_y_goresgynwyr_%28wel_o_lia_fe_drion_nhw%29_27.JPG

**Castle B:** Gortmore Castle  
- Location: 53.39, -8.64
- Country/County: Ireland, County Galway
- Type: tower house
- Image: https://img.castlecore.uk/gortmore-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 402.964km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 230. KEEP-BOTH (Confidence: 50%)

**Castle A:** Coity Castle
- Location: 51.5259, -3.5491
- Country/County: Wales, Bridgend
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Lismore_Castle_%28Lismore%2C_Co._Waterford%29.jpg/500px-Lismore_Castle_%28Lismore%2C_Co._Waterford%29.jpg

**Castle B:** Corby Castle  
- Location: 54.905, -2.8
- Country/County: England, Cumbria
- Type: castle
- Image: https://img.castlecore.uk/corby-castle.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 379.029km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 231. KEEP-BOTH (Confidence: 50%)

**Castle A:** Pennard Castle
- Location: 51.566, -4.0784
- Country/County: Wales, Swansea
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Centre_of_Nenagh_-_panoramio.jpg/500px-Centre_of_Nenagh_-_panoramio.jpg

**Castle B:** Castle Bernard  
- Location: 51.971, -8.971
- Country/County: Ireland, County Cork
- Type: castle
- Image: https://img.castlecore.uk/castle-bernard.jpg

**Metrics:**
- Name similarity: 85.7%
- Distance: 339.601km
- Same image: No

**Reasons:** High name similarity (85.7%)

**Recommendation:** **KEEP-BOTH**

---

### 232. KEEP-BOTH (Confidence: 50%)

**Castle A:** Pennard Castle
- Location: 51.566, -4.0784
- Country/County: Wales, Swansea
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Centre_of_Nenagh_-_panoramio.jpg/500px-Centre_of_Nenagh_-_panoramio.jpg

**Castle B:** Kinnaird Castle  
- Location: 56.7333, -2.55
- Country/County: Scotland, Angus
- Type: castle
- Image: https://img.castlecore.uk/kinnaird-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 583.096km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 233. KEEP-BOTH (Confidence: 50%)

**Castle A:** Ruthin Castle
- Location: 53.1147, -3.3124
- Country/County: Wales, Denbighshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Portumna_castle.jpg/500px-Portumna_castle.jpg

**Castle B:** Rattin Castle  
- Location: 53.482, -7.368
- Country/County: Ireland, County Westmeath
- Type: tower house
- Image: https://img.castlecore.uk/rattin-castle.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 272.555km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 234. KEEP-BOTH (Confidence: 50%)

**Castle A:** Ruthin Castle
- Location: 53.1147, -3.3124
- Country/County: Wales, Denbighshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Portumna_castle.jpg/500px-Portumna_castle.jpg

**Castle B:** Rushen Castle  
- Location: 54.0736, -4.6472
- Country/County: Scotland, Isle of Man
- Type: castle
- Image: https://img.castlecore.uk/rushen-castle.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 138.301km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 235. KEEP-BOTH (Confidence: 50%)

**Castle A:** Blarney Castle
- Location: 51.9291, -8.5709
- Country/County: Ireland, County Cork
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Blarney_Castle_Ireland.jpg/500px-Blarney_Castle_Ireland.jpg

**Castle B:** Farney Castle  
- Location: 52.578, -7.778
- Country/County: Ireland, County Tipperary
- Type: tower house
- Image: https://img.castlecore.uk/farney-castle.jpg

**Metrics:**
- Name similarity: 85.7%
- Distance: 90.106km
- Same image: No

**Reasons:** High name similarity (85.7%)

**Recommendation:** **KEEP-BOTH**

---

### 236. KEEP-BOTH (Confidence: 50%)

**Castle A:** Kilkenny Castle
- Location: 52.6504, -7.2494
- Country/County: Ireland, County Kilkenny
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Kilkenny-castle.jpg/500px-Kilkenny-castle.jpg

**Castle B:** Kilkea Castle  
- Location: 52.952, -6.938
- Country/County: Ireland, County Kildare
- Type: castle
- Image: https://img.castlecore.uk/kilkea-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 39.534km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 237. KEEP-BOTH (Confidence: 50%)

**Castle A:** Kilkenny Castle
- Location: 52.6504, -7.2494
- Country/County: Ireland, County Kilkenny
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Kilkenny-castle.jpg/500px-Kilkenny-castle.jpg

**Castle B:** Killeen Castle  
- Location: 53.498, -6.658
- Country/County: Ireland, County Meath
- Type: castle
- Image: https://img.castlecore.uk/killeen-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 102.193km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 238. KEEP-BOTH (Confidence: 50%)

**Castle A:** Ross Castle
- Location: 52.0386, -9.5267
- Country/County: Ireland, County Kerry
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Ross_Castle_on_Lough_Leane_%2815242590587%29.jpg/500px-Ross_Castle_on_Lough_Leane_%2815242590587%29.jpg

**Castle B:** Rose Castle  
- Location: 54.8333, -2.8333
- Country/County: England, Cumbria
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Rose_Castle%2C_Raughton_Head.jpg/500px-Rose_Castle%2C_Raughton_Head.jpg

**Metrics:**
- Name similarity: 90.9%
- Distance: 541.072km
- Same image: No

**Reasons:** High name similarity (90.9%)

**Recommendation:** **KEEP-BOTH**

---

### 239. KEEP-BOTH (Confidence: 50%)

**Castle A:** Ross Castle
- Location: 52.0386, -9.5267
- Country/County: Ireland, County Kerry
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Ross_Castle_on_Lough_Leane_%2815242590587%29.jpg/500px-Ross_Castle_on_Lough_Leane_%2815242590587%29.jpg

**Castle B:** Aros Castle  
- Location: 56.553, -5.997
- Country/County: Scotland, Argyll and Bute
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Aros_Castle_-_exterior.jpg/500px-Aros_Castle_-_exterior.jpg

**Metrics:**
- Name similarity: 81.8%
- Distance: 551.591km
- Same image: No

**Reasons:** High name similarity (81.8%)

**Recommendation:** **KEEP-BOTH**

---

### 240. KEEP-BOTH (Confidence: 50%)

**Castle A:** Ross Castle
- Location: 52.0386, -9.5267
- Country/County: Ireland, County Kerry
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Ross_Castle_on_Lough_Leane_%2815242590587%29.jpg/500px-Ross_Castle_on_Lough_Leane_%2815242590587%29.jpg

**Castle B:** Roch Castle  
- Location: 51.833, -5.073
- Country/County: Wales, Pembrokeshire
- Type: castle
- Image: https://img.castlecore.uk/roch-castle.jpg

**Metrics:**
- Name similarity: 81.8%
- Distance: 306.137km
- Same image: No

**Reasons:** High name similarity (81.8%)

**Recommendation:** **KEEP-BOTH**

---

### 241. KEEP-BOTH (Confidence: 50%)

**Castle A:** Ross Castle
- Location: 52.0386, -9.5267
- Country/County: Ireland, County Kerry
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Ross_Castle_on_Lough_Leane_%2815242590587%29.jpg/500px-Ross_Castle_on_Lough_Leane_%2815242590587%29.jpg

**Castle B:** Moross Castle  
- Location: 54.958, -7.742
- Country/County: Ireland, County Donegal
- Type: tower house
- Image: https://img.castlecore.uk/moross-castle.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 345.390km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 242. KEEP-BOTH (Confidence: 50%)

**Castle A:** Ross Castle
- Location: 52.0386, -9.5267
- Country/County: Ireland, County Kerry
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Ross_Castle_on_Lough_Leane_%2815242590587%29.jpg/500px-Ross_Castle_on_Lough_Leane_%2815242590587%29.jpg

**Castle B:** Castle Roy  
- Location: 57.2667, -3.6
- Country/County: Scotland, Highland
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Castle_Roy_-_geograph.org.uk_-_2069401.jpg/500px-Castle_Roy_-_geograph.org.uk_-_2069401.jpg

**Metrics:**
- Name similarity: 81.8%
- Distance: 694.642km
- Same image: No

**Reasons:** High name similarity (81.8%)

**Recommendation:** **KEEP-BOTH**

---

### 243. KEEP-BOTH (Confidence: 50%)

**Castle A:** Trim Castle
- Location: 53.5453, -6.7886
- Country/County: Ireland, County Meath
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Trim_Castle_6.jpg/500px-Trim_Castle_6.jpg

**Castle B:** Crom Castle  
- Location: 54.1667, -7.45
- Country/County: Northern Ireland, County Fermanagh
- Type: castle
- Image: https://img.castlecore.uk/crom-castle.jpg

**Metrics:**
- Name similarity: 81.8%
- Distance: 81.583km
- Same image: No

**Reasons:** High name similarity (81.8%)

**Recommendation:** **KEEP-BOTH**

---

### 244. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dublin Castle
- Location: 53.3429, -6.2674
- Country/County: Ireland, County Dublin
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/The_Dubhlinn_Gardens_Dublin_Castle_01.JPG/500px-The_Dubhlinn_Gardens_Dublin_Castle_01.JPG

**Castle B:** Dunlavin Castle  
- Location: 53.057, -6.701
- Country/County: Ireland, County Wicklow
- Type: castle
- Image: https://img.castlecore.uk/dunlavin-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 42.951km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 245. KEEP-BOTH (Confidence: 50%)

**Castle A:** Bunratty Castle
- Location: 52.6978, -8.813
- Country/County: Ireland, County Clare
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Bunrattybig.jpg/500px-Bunrattybig.jpg

**Castle B:** Bungay Castle  
- Location: 52.4528, 1.4375
- Country/County: England, Suffolk
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Bungay_Castle%2C_2012.jpg/500px-Bungay_Castle%2C_2012.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 692.629km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 246. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dunguaire Castle
- Location: 53.1439, -8.9267
- Country/County: Ireland, County Galway
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Dunguaire_Castle%2C_Galway%2C_Ireland.png/500px-Dunguaire_Castle%2C_Galway%2C_Ireland.png

**Castle B:** Dungar Castle  
- Location: 52.918, -7.748
- Country/County: Ireland, County Tipperary
- Type: tower house
- Image: https://img.castlecore.uk/dungar-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 82.725km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 247. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dunguaire Castle
- Location: 53.1439, -8.9267
- Country/County: Ireland, County Galway
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Dunguaire_Castle%2C_Galway%2C_Ireland.png/500px-Dunguaire_Castle%2C_Galway%2C_Ireland.png

**Castle B:** Dunure Castle  
- Location: 55.4, -4.75
- Country/County: Scotland, South Ayrshire
- Type: castle
- Image: https://img.castlecore.uk/dunure-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 369.318km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 248. KEEP-BOTH (Confidence: 50%)

**Castle A:** Ashford Castle
- Location: 53.5333, -9.35
- Country/County: Ireland, County Galway
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Ashford_Castle_in_County_Mayo.jpg/500px-Ashford_Castle_in_County_Mayo.jpg

**Castle B:** Cessford Castle  
- Location: 55.527, -2.489
- Country/County: Scotland, Scottish Borders
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Cessford_Castle.jpg/500px-Cessford_Castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 494.807km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 249. KEEP-BOTH (Confidence: 50%)

**Castle A:** Lismore Castle
- Location: 52.1375, -7.9333
- Country/County: Ireland, County Waterford
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Summerhill_House%2C_Main_front.jpg/500px-Summerhill_House%2C_Main_front.jpg

**Castle B:** Listowel Castle  
- Location: 52.443, -9.485
- Country/County: Ireland, County Kerry
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Listowel_Castle.JPEG/500px-Listowel_Castle.JPEG

**Metrics:**
- Name similarity: 80.0%
- Distance: 110.867km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 250. KEEP-BOTH (Confidence: 50%)

**Castle A:** Nenagh Castle
- Location: 52.8619, -8.1964
- Country/County: Ireland, County Tipperary
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Odea_castle.jpg/500px-Odea_castle.jpg

**Castle B:** Neath Castle  
- Location: 51.661, -3.806
- Country/County: England, Neath Port Talbot
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Neath_Castle_-_geograph.org.uk_-_42391.jpg/500px-Neath_Castle_-_geograph.org.uk_-_42391.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 327.210km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 251. KEEP-BOTH (Confidence: 50%)

**Castle A:** Nenagh Castle
- Location: 52.8619, -8.1964
- Country/County: Ireland, County Tipperary
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Odea_castle.jpg/500px-Odea_castle.jpg

**Castle B:** Fenagh Abbey  
- Location: 53.985, -7.888
- Country/County: Ireland, County Leitrim
- Type: abbey
- Image: https://img.castlecore.uk/fenagh-abbey.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 126.544km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 252. KEEP-BOTH (Confidence: 50%)

**Castle A:** Nenagh Castle
- Location: 52.8619, -8.1964
- Country/County: Ireland, County Tipperary
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Odea_castle.jpg/500px-Odea_castle.jpg

**Castle B:** Tynagh Castle  
- Location: 53.128, -8.414
- Country/County: Ireland, County Galway
- Type: tower house
- Image: https://img.castlecore.uk/tynagh-castle.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 32.979km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 253. KEEP-BOTH (Confidence: 50%)

**Castle A:** Portumna Castle
- Location: 53.0892, -8.2194
- Country/County: Ireland, County Galway
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Leamaneh_Castle_Ireland_12283094446_o.jpg/500px-Leamaneh_Castle_Ireland_12283094446_o.jpg

**Castle B:** Portora Castle  
- Location: 54.345, -7.652
- Country/County: Northern Ireland, County Fermanagh
- Type: castle
- Image: https://img.castlecore.uk/portora-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 144.543km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 254. KEEP-BOTH (Confidence: 50%)

**Castle A:** Askeaton Castle
- Location: 52.5992, -8.9756
- Country/County: Ireland, County Limerick
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Dunbrody_Abbey_SE_and_Young_Bulls_1997_08_27.jpg/500px-Dunbrody_Abbey_SE_and_Young_Bulls_1997_08_27.jpg

**Castle B:** Askerton Castle  
- Location: 55.0317, -2.7333
- Country/County: England, Cumbria
- Type: castle
- Image: https://img.castlecore.uk/askerton-castle.jpg

**Metrics:**
- Name similarity: 93.3%
- Distance: 490.732km
- Same image: No

**Reasons:** High name similarity (93.3%)

**Recommendation:** **KEEP-BOTH**

---

### 255. KEEP-BOTH (Confidence: 50%)

**Castle A:** Carrigogunnell Castle
- Location: 52.6311, -8.7186
- Country/County: Ireland, County Limerick
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Slade_Castle.jpg/500px-Slade_Castle.jpg

**Castle B:** Carriggundel Castle  
- Location: 52.616, -8.65
- Country/County: Ireland, County Limerick
- Type: castle
- Image: https://img.castlecore.uk/carriggundel-castle.jpg

**Metrics:**
- Name similarity: 85.7%
- Distance: 4.926km
- Same image: No

**Reasons:** High name similarity (85.7%)

**Recommendation:** **KEEP-BOTH**

---

### 256. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dunloe Castle
- Location: 52.0167, -9.65
- Country/County: Ireland, County Kerry
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Lea_Castle%2C_2011.jpg/500px-Lea_Castle%2C_2011.jpg

**Castle B:** Dunmoe Castle  
- Location: 53.6958, -6.6847
- Country/County: Ireland, County Meath
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Castelo_de_Athlone_Irlanda.jpg/500px-Castelo_de_Athlone_Irlanda.jpg

**Metrics:**
- Name similarity: 92.3%
- Distance: 272.901km
- Same image: No

**Reasons:** High name similarity (92.3%)

**Recommendation:** **KEEP-BOTH**

---

### 257. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dunloe Castle
- Location: 52.0167, -9.65
- Country/County: Ireland, County Kerry
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Lea_Castle%2C_2011.jpg/500px-Lea_Castle%2C_2011.jpg

**Castle B:** Dunluce Castle  
- Location: 55.2106, -6.5794
- Country/County: Northern Ireland, County Antrim
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Dunluce_Castle_Northern_Ireland_1.jpg/500px-Dunluce_Castle_Northern_Ireland_1.jpg

**Metrics:**
- Name similarity: 85.7%
- Distance: 408.752km
- Same image: No

**Reasons:** High name similarity (85.7%)

**Recommendation:** **KEEP-BOTH**

---

### 258. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dunloe Castle
- Location: 52.0167, -9.65
- Country/County: Ireland, County Kerry
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Lea_Castle%2C_2011.jpg/500px-Lea_Castle%2C_2011.jpg

**Castle B:** Dunmore Castle  
- Location: 52.5667, -7.3667
- Country/County: Ireland, County Waterford
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Dunmore_Castle%2C_Co._Galway.JPG/500px-Dunmore_Castle%2C_Co._Galway.JPG

**Metrics:**
- Name similarity: 85.7%
- Distance: 166.890km
- Same image: No

**Reasons:** High name similarity (85.7%)

**Recommendation:** **KEEP-BOTH**

---

### 259. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dunloe Castle
- Location: 52.0167, -9.65
- Country/County: Ireland, County Kerry
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Lea_Castle%2C_2011.jpg/500px-Lea_Castle%2C_2011.jpg

**Castle B:** Dunoon Castle  
- Location: 55.947, -4.926
- Country/County: Scotland, Argyll and Bute
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Castle_Hill_Dunoon_-_geograph.org.uk_-_995906.jpg/500px-Castle_Hill_Dunoon_-_geograph.org.uk_-_995906.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 534.904km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 260. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dunloe Castle
- Location: 52.0167, -9.65
- Country/County: Ireland, County Kerry
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Lea_Castle%2C_2011.jpg/500px-Lea_Castle%2C_2011.jpg

**Castle B:** Dunollie Castle  
- Location: 56.426, -5.478
- Country/County: Scotland, Argyll and Bute
- Type: castle
- Image: https://img.castlecore.uk/dunollie-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 560.073km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 261. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dunloe Castle
- Location: 52.0167, -9.65
- Country/County: Ireland, County Kerry
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Lea_Castle%2C_2011.jpg/500px-Lea_Castle%2C_2011.jpg

**Castle B:** Dunboy Castle  
- Location: 51.647, -9.878
- Country/County: Ireland, County Cork
- Type: castle
- Image: https://img.castlecore.uk/dunboy-castle.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 43.993km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 262. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dunloe Castle
- Location: 52.0167, -9.65
- Country/County: Ireland, County Kerry
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Lea_Castle%2C_2011.jpg/500px-Lea_Castle%2C_2011.jpg

**Castle B:** Dunure Castle  
- Location: 55.4, -4.75
- Country/County: Scotland, South Ayrshire
- Type: castle
- Image: https://img.castlecore.uk/dunure-castle.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 495.274km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 263. KEEP-BOTH (Confidence: 50%)

**Castle A:** Ferns Castle
- Location: 52.59, -6.5006
- Country/County: Ireland, County Wexford
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Dunsany_Castle%2C_Dunsany%2C_Co._Meath_%28geograph_3543036%29.jpg/500px-Dunsany_Castle%2C_Dunsany%2C_Co._Meath_%28geograph_3543036%29.jpg

**Castle B:** Mearns Castle  
- Location: 55.7833, -4.3333
- Country/County: Scotland, East Renfrewshire
- Type: castle
- Image: https://img.castlecore.uk/mearns-castle.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 382.008km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 264. KEEP-BOTH (Confidence: 50%)

**Castle A:** Slade Castle
- Location: 52.1697, -6.8436
- Country/County: Ireland, County Wexford
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Picturesque_Ireland_-_a_literary_and_artistic_delineation_of_the_natural_scenery%2C_remarkable_places%2C_historical_antiquities%2C_public_buildings%2C_ancient_abbeys%2C_towers%2C_castles%2C_and_other_romantic_and_%2814779127292%29.jpg/500px-thumbnail.jpg

**Castle B:** Slane Castle  
- Location: 53.7097, -6.5433
- Country/County: Ireland, County Meath
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/ForeAbbey1.JPG/500px-ForeAbbey1.JPG

**Metrics:**
- Name similarity: 91.7%
- Distance: 172.418km
- Same image: No

**Reasons:** High name similarity (91.7%)

**Recommendation:** **KEEP-BOTH**

---

### 265. KEEP-BOTH (Confidence: 50%)

**Castle A:** Slade Castle
- Location: 52.1697, -6.8436
- Country/County: Ireland, County Wexford
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Picturesque_Ireland_-_a_literary_and_artistic_delineation_of_the_natural_scenery%2C_remarkable_places%2C_historical_antiquities%2C_public_buildings%2C_ancient_abbeys%2C_towers%2C_castles%2C_and_other_romantic_and_%2814779127292%29.jpg/500px-thumbnail.jpg

**Castle B:** Clare Castle  
- Location: 52.0781, 0.5756
- Country/County: England, Suffolk
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Clare_Castle_Motte.jpg/500px-Clare_Castle_Motte.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 506.381km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 266. KEEP-BOTH (Confidence: 50%)

**Castle A:** Slade Castle
- Location: 52.1697, -6.8436
- Country/County: Ireland, County Wexford
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Picturesque_Ireland_-_a_literary_and_artistic_delineation_of_the_natural_scenery%2C_remarkable_places%2C_historical_antiquities%2C_public_buildings%2C_ancient_abbeys%2C_towers%2C_castles%2C_and_other_romantic_and_%2814779127292%29.jpg/500px-thumbnail.jpg

**Castle B:** Snape Castle  
- Location: 54.2833, -1.65
- Country/County: England, North Yorkshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Snape_Castle_-_geograph.org.uk_-_3225506.jpg/500px-Snape_Castle_-_geograph.org.uk_-_3225506.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 417.877km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 267. KEEP-BOTH (Confidence: 50%)

**Castle A:** Slade Castle
- Location: 52.1697, -6.8436
- Country/County: Ireland, County Wexford
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Picturesque_Ireland_-_a_literary_and_artistic_delineation_of_the_natural_scenery%2C_remarkable_places%2C_historical_antiquities%2C_public_buildings%2C_ancient_abbeys%2C_towers%2C_castles%2C_and_other_romantic_and_%2814779127292%29.jpg/500px-thumbnail.jpg

**Castle B:** Shane Castle  
- Location: 54.707, -6.31
- Country/County: Ireland, County Antrim
- Type: castle
- Image: https://img.castlecore.uk/shane-castle.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 284.338km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 268. KEEP-BOTH (Confidence: 50%)

**Castle A:** Lea Castle
- Location: 53.0833, -7.2833
- Country/County: Ireland, County Laois
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Bective_Abbey.JPG/500px-Bective_Abbey.JPG

**Castle B:** Lews Castle  
- Location: 58.2167, -6.3833
- Country/County: Scotland, Western Isles
- Type: castle
- Image: https://img.castlecore.uk/lews-castle.jpg

**Metrics:**
- Name similarity: 81.8%
- Distance: 573.580km
- Same image: No

**Reasons:** High name similarity (81.8%)

**Recommendation:** **KEEP-BOTH**

---

### 269. KEEP-BOTH (Confidence: 50%)

**Castle A:** Lea Castle
- Location: 53.0833, -7.2833
- Country/County: Ireland, County Laois
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Bective_Abbey.JPG/500px-Bective_Abbey.JPG

**Castle B:** Leap Castle  
- Location: 52.952, -7.809
- Country/County: Ireland, County Offaly
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Castles_of_Leinster-_Leap%2C_Offaly_%28geograph_1952750%29.jpg/500px-Castles_of_Leinster-_Leap%2C_Offaly_%28geograph_1952750%29.jpg

**Metrics:**
- Name similarity: 90.9%
- Distance: 38.075km
- Same image: No

**Reasons:** High name similarity (90.9%)

**Recommendation:** **KEEP-BOTH**

---

### 270. KEEP-BOTH (Confidence: 50%)

**Castle A:** Lea Castle
- Location: 53.0833, -7.2833
- Country/County: Ireland, County Laois
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Bective_Abbey.JPG/500px-Bective_Abbey.JPG

**Castle B:** Castlerea Castle  
- Location: 53.767, -8.494
- Country/County: Ireland, County Roscommon
- Type: castle
- Image: https://img.castlecore.uk/castlerea-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 110.517km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 271. KEEP-BOTH (Confidence: 50%)

**Castle A:** Lea Castle
- Location: 53.0833, -7.2833
- Country/County: Ireland, County Laois
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Bective_Abbey.JPG/500px-Bective_Abbey.JPG

**Castle B:** Castle Leod  
- Location: 57.6833, -4.5667
- Country/County: Scotland, Highland
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Castle_Leod_%28geograph_4176882%29.jpg/500px-Castle_Leod_%28geograph_4176882%29.jpg

**Metrics:**
- Name similarity: 81.8%
- Distance: 539.404km
- Same image: No

**Reasons:** High name similarity (81.8%)

**Recommendation:** **KEEP-BOTH**

---

### 272. KEEP-BOTH (Confidence: 50%)

**Castle A:** Lea Castle
- Location: 53.0833, -7.2833
- Country/County: Ireland, County Laois
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Bective_Abbey.JPG/500px-Bective_Abbey.JPG

**Castle B:** Red Castle  
- Location: 56.7, -2.5833
- Country/County: Scotland, Angus
- Type: castle
- Image: https://img.castlecore.uk/red-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 501.824km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 273. KEEP-BOTH (Confidence: 50%)

**Castle A:** Lea Castle
- Location: 53.0833, -7.2833
- Country/County: Ireland, County Laois
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Bective_Abbey.JPG/500px-Bective_Abbey.JPG

**Castle B:** Castle Levan  
- Location: 55.9333, -4.8
- Country/County: Scotland, Inverclyde
- Type: castle
- Image: https://img.castlecore.uk/castle-levan.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 355.094km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 274. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dunamase Castle
- Location: 53.0328, -7.3472
- Country/County: Ireland, County Laois
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Kellsp5.JPG/500px-Kellsp5.JPG

**Castle B:** Dunmoe Castle  
- Location: 53.6958, -6.6847
- Country/County: Ireland, County Meath
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Castelo_de_Athlone_Irlanda.jpg/500px-Castelo_de_Athlone_Irlanda.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 85.832km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 275. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dunamase Castle
- Location: 53.0328, -7.3472
- Country/County: Ireland, County Laois
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Kellsp5.JPG/500px-Kellsp5.JPG

**Castle B:** Dunmore Castle  
- Location: 52.5667, -7.3667
- Country/County: Ireland, County Waterford
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Dunmore_Castle%2C_Co._Galway.JPG/500px-Dunmore_Castle%2C_Co._Galway.JPG

**Metrics:**
- Name similarity: 80.0%
- Distance: 51.845km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 276. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dunamase Castle
- Location: 53.0328, -7.3472
- Country/County: Ireland, County Laois
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Kellsp5.JPG/500px-Kellsp5.JPG

**Castle B:** Dunnaman Castle  
- Location: 54.252, -5.898
- Country/County: Northern Ireland, County Down
- Type: motte
- Image: https://img.castlecore.uk/dunnaman-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 165.838km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 277. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dunamase Castle
- Location: 53.0328, -7.3472
- Country/County: Ireland, County Laois
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Kellsp5.JPG/500px-Kellsp5.JPG

**Castle B:** Dunimarle Castle  
- Location: 56.0667, -3.5833
- Country/County: Scotland, Fife
- Type: castle
- Image: https://img.castlecore.uk/dunimarle-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 415.479km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 278. KEEP-BOTH (Confidence: 50%)

**Castle A:** Birr Castle
- Location: 53.0961, -7.9133
- Country/County: Ireland, County Offaly
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Clara_Castle_-_geograph.org.uk_-_494292.jpg/500px-Clara_Castle_-_geograph.org.uk_-_494292.jpg

**Castle B:** Burt Castle  
- Location: 55.071, -7.426
- Country/County: Ireland, County Donegal
- Type: castle
- Image: https://img.castlecore.uk/burt-castle.jpg

**Metrics:**
- Name similarity: 81.8%
- Distance: 221.886km
- Same image: No

**Reasons:** High name similarity (81.8%)

**Recommendation:** **KEEP-BOTH**

---

### 279. KEEP-BOTH (Confidence: 50%)

**Castle A:** Birr Castle
- Location: 53.0961, -7.9133
- Country/County: Ireland, County Offaly
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Clara_Castle_-_geograph.org.uk_-_494292.jpg/500px-Clara_Castle_-_geograph.org.uk_-_494292.jpg

**Castle B:** Barra Castle  
- Location: 57.185, -2.367
- Country/County: Scotland, Aberdeenshire
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Barra_Castle%2C_Bourtie%2C_Oldmeldrum_side_view.jpg/500px-Barra_Castle%2C_Bourtie%2C_Oldmeldrum_side_view.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 574.917km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 280. KEEP-BOTH (Confidence: 50%)

**Castle A:** Clonony Castle
- Location: 53.2167, -7.8667
- Country/County: Ireland, County Offaly
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Doe_Castle%2C_Donegal.jpg/500px-Doe_Castle%2C_Donegal.jpg

**Castle B:** Clonyn Castle  
- Location: 53.572, -7.118
- Country/County: Ireland, County Westmeath
- Type: castle
- Image: https://img.castlecore.uk/clonyn-castle.jpg

**Metrics:**
- Name similarity: 85.7%
- Distance: 63.445km
- Same image: No

**Reasons:** High name similarity (85.7%)

**Recommendation:** **KEEP-BOTH**

---

### 281. KEEP-BOTH (Confidence: 50%)

**Castle A:** Clonony Castle
- Location: 53.2167, -7.8667
- Country/County: Ireland, County Offaly
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Doe_Castle%2C_Donegal.jpg/500px-Doe_Castle%2C_Donegal.jpg

**Castle B:** Clonroad Castle  
- Location: 52.847, -8.98
- Country/County: Ireland, County Clare
- Type: castle
- Image: https://img.castlecore.uk/clonroad-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 85.040km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 282. KEEP-BOTH (Confidence: 50%)

**Castle A:** Castletown House
- Location: 53.3422, -6.5372
- Country/County: Ireland, County Kildare
- Type: palace
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/The_Abbey%2C_Sligo_aka_Dominican_Friary_%288671560382%29.jpg/500px-The_Abbey%2C_Sligo_aka_Dominican_Friary_%288671560382%29.jpg

**Castle B:** Castlecor House  
- Location: 53.688, -7.598
- Country/County: Ireland, County Longford
- Type: country house
- Image: https://img.castlecore.uk/castlecor-house.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 79.985km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 283. KEEP-BOTH (Confidence: 50%)

**Castle A:** Drimnagh Castle
- Location: 53.3247, -6.3342
- Country/County: Ireland, County Dublin
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Parke%27s_Castle_courtyard.jpg/500px-Parke%27s_Castle_courtyard.jpg

**Castle B:** Grannagh Castle  
- Location: 52.325, -7.159
- Country/County: Ireland, County Kilkenny
- Type: castle
- Image: https://img.castlecore.uk/grannagh-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 124.208km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 284. KEEP-BOTH (Confidence: 50%)

**Castle A:** Drimnagh Castle
- Location: 53.3247, -6.3342
- Country/County: Ireland, County Dublin
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Parke%27s_Castle_courtyard.jpg/500px-Parke%27s_Castle_courtyard.jpg

**Castle B:** Granagh Castle  
- Location: 52.328, -7.532
- Country/County: Ireland, County Kilkenny
- Type: castle
- Image: https://img.castlecore.uk/granagh-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 136.961km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 285. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dalkey Castle
- Location: 53.2722, -6.1
- Country/County: Ireland, County Dublin
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Boyle_Abbey_Nave_1997_09_17.jpg/500px-Boyle_Abbey_Nave_1997_09_17.jpg

**Castle B:** Easkey Castle  
- Location: 54.292, -8.957
- Country/County: Ireland, County Sligo
- Type: castle
- Image: https://img.castlecore.uk/easkey-castle.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 219.275km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 286. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dunsany Castle
- Location: 53.5556, -6.6556
- Country/County: Ireland, County Meath
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Clogh_Oughter_Castle_Cavan_Ireland_geograph_1405851_by_Oliver_Dixon.jpg/500px-Clogh_Oughter_Castle_Cavan_Ireland_geograph_1405851_by_Oliver_Dixon.jpg

**Castle B:** Dunineny Castle  
- Location: 55.2, -6.25
- Country/County: Northern Ireland, County Antrim
- Type: tower house
- Image: https://img.castlecore.uk/dunineny-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 184.725km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 287. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dunsany Castle
- Location: 53.5556, -6.6556
- Country/County: Ireland, County Meath
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Clogh_Oughter_Castle_Cavan_Ireland_geograph_1405851_by_Oliver_Dixon.jpg/500px-Clogh_Oughter_Castle_Cavan_Ireland_geograph_1405851_by_Oliver_Dixon.jpg

**Castle B:** Dunsink Castle  
- Location: 53.387, -6.338
- Country/County: Ireland, County Dublin
- Type: castle
- Image: https://img.castlecore.uk/dunsink-castle.jpg

**Metrics:**
- Name similarity: 85.7%
- Distance: 28.166km
- Same image: No

**Reasons:** High name similarity (85.7%)

**Recommendation:** **KEEP-BOTH**

---

### 288. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dunsany Castle
- Location: 53.5556, -6.6556
- Country/County: Ireland, County Meath
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Clogh_Oughter_Castle_Cavan_Ireland_geograph_1405851_by_Oliver_Dixon.jpg/500px-Clogh_Oughter_Castle_Cavan_Ireland_geograph_1405851_by_Oliver_Dixon.jpg

**Castle B:** Dunmanus Castle  
- Location: 51.558, -9.645
- Country/County: Ireland, County Cork
- Type: tower house
- Image: https://img.castlecore.uk/dunmanus-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 300.249km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 289. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dunsany Castle
- Location: 53.5556, -6.6556
- Country/County: Ireland, County Meath
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Clogh_Oughter_Castle_Cavan_Ireland_geograph_1405851_by_Oliver_Dixon.jpg/500px-Clogh_Oughter_Castle_Cavan_Ireland_geograph_1405851_by_Oliver_Dixon.jpg

**Castle B:** Dunsandle Castle  
- Location: 53.259, -8.598
- Country/County: Ireland, County Galway
- Type: castle
- Image: https://img.castlecore.uk/dunsandle-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 132.906km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 290. KEEP-BOTH (Confidence: 50%)

**Castle A:** Slane Castle
- Location: 53.7097, -6.5433
- Country/County: Ireland, County Meath
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/ForeAbbey1.JPG/500px-ForeAbbey1.JPG

**Castle B:** Clare Castle  
- Location: 52.0781, 0.5756
- Country/County: England, Suffolk
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Clare_Castle_Motte.jpg/500px-Clare_Castle_Motte.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 510.582km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 291. KEEP-BOTH (Confidence: 50%)

**Castle A:** Slane Castle
- Location: 53.7097, -6.5433
- Country/County: Ireland, County Meath
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/ForeAbbey1.JPG/500px-ForeAbbey1.JPG

**Castle B:** Snape Castle  
- Location: 54.2833, -1.65
- Country/County: England, North Yorkshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Snape_Castle_-_geograph.org.uk_-_3225506.jpg/500px-Snape_Castle_-_geograph.org.uk_-_3225506.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 326.073km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 292. KEEP-BOTH (Confidence: 50%)

**Castle A:** Slane Castle
- Location: 53.7097, -6.5433
- Country/County: Ireland, County Meath
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/ForeAbbey1.JPG/500px-ForeAbbey1.JPG

**Castle B:** Castleisland Castle  
- Location: 52.232, -9.467
- Country/County: Ireland, County Kerry
- Type: castle
- Image: https://img.castlecore.uk/castleisland-castle.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 255.560km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 293. KEEP-BOTH (Confidence: 50%)

**Castle A:** Slane Castle
- Location: 53.7097, -6.5433
- Country/County: Ireland, County Meath
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/ForeAbbey1.JPG/500px-ForeAbbey1.JPG

**Castle B:** Shane Castle  
- Location: 54.707, -6.31
- Country/County: Ireland, County Antrim
- Type: castle
- Image: https://img.castlecore.uk/shane-castle.jpg

**Metrics:**
- Name similarity: 91.7%
- Distance: 111.928km
- Same image: No

**Reasons:** High name similarity (91.7%)

**Recommendation:** **KEEP-BOTH**

---

### 294. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dunmoe Castle
- Location: 53.6958, -6.6847
- Country/County: Ireland, County Meath
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Castelo_de_Athlone_Irlanda.jpg/500px-Castelo_de_Athlone_Irlanda.jpg

**Castle B:** Dunmore Castle  
- Location: 52.5667, -7.3667
- Country/County: Ireland, County Waterford
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Dunmore_Castle%2C_Co._Galway.JPG/500px-Dunmore_Castle%2C_Co._Galway.JPG

**Metrics:**
- Name similarity: 92.9%
- Distance: 133.539km
- Same image: No

**Reasons:** High name similarity (92.9%)

**Recommendation:** **KEEP-BOTH**

---

### 295. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dunmoe Castle
- Location: 53.6958, -6.6847
- Country/County: Ireland, County Meath
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Castelo_de_Athlone_Irlanda.jpg/500px-Castelo_de_Athlone_Irlanda.jpg

**Castle B:** Dunoon Castle  
- Location: 55.947, -4.926
- Country/County: Scotland, Argyll and Bute
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Castle_Hill_Dunoon_-_geograph.org.uk_-_995906.jpg/500px-Castle_Hill_Dunoon_-_geograph.org.uk_-_995906.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 274.486km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 296. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dunmoe Castle
- Location: 53.6958, -6.6847
- Country/County: Ireland, County Meath
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Castelo_de_Athlone_Irlanda.jpg/500px-Castelo_de_Athlone_Irlanda.jpg

**Castle B:** Dunboy Castle  
- Location: 51.647, -9.878
- Country/County: Ireland, County Cork
- Type: castle
- Image: https://img.castlecore.uk/dunboy-castle.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 313.405km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 297. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dunmoe Castle
- Location: 53.6958, -6.6847
- Country/County: Ireland, County Meath
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Castelo_de_Athlone_Irlanda.jpg/500px-Castelo_de_Athlone_Irlanda.jpg

**Castle B:** Dunmahon Castle  
- Location: 54.03, -6.21
- Country/County: Ireland, County Louth
- Type: tower house
- Image: https://img.castlecore.uk/dunmahon-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 48.476km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 298. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dunmoe Castle
- Location: 53.6958, -6.6847
- Country/County: Ireland, County Meath
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Castelo_de_Athlone_Irlanda.jpg/500px-Castelo_de_Athlone_Irlanda.jpg

**Castle B:** Dunure Castle  
- Location: 55.4, -4.75
- Country/County: Scotland, South Ayrshire
- Type: castle
- Image: https://img.castlecore.uk/dunure-castle.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 226.871km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 299. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dunmoe Castle
- Location: 53.6958, -6.6847
- Country/County: Ireland, County Meath
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Castelo_de_Athlone_Irlanda.jpg/500px-Castelo_de_Athlone_Irlanda.jpg

**Castle B:** Dunmoran Castle  
- Location: 54.235, -8.62
- Country/County: Ireland, County Sligo
- Type: tower house
- Image: https://img.castlecore.uk/dunmoran-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 140.068km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 300. KEEP-BOTH (Confidence: 50%)

**Castle A:** Granny Castle
- Location: 52.34, -7.16
- Country/County: Ireland, County Kilkenny
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Killyleagh_Castle.jpg/500px-Killyleagh_Castle.jpg

**Castle B:** Castle Grant  
- Location: 57.35, -3.6167
- Country/County: Scotland, Highland
- Type: castle
- Image: https://img.castlecore.uk/castle-grant.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 601.306km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 301. KEEP-BOTH (Confidence: 50%)

**Castle A:** Clara Castle
- Location: 52.6083, -7.3083
- Country/County: Ireland, County Kilkenny
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Narrow_Water_Tower%2C_Warrenpoint_-_geograph.org.uk_-_399224.jpg/500px-Narrow_Water_Tower%2C_Warrenpoint_-_geograph.org.uk_-_399224.jpg

**Castle B:** Clare Castle  
- Location: 52.0781, 0.5756
- Country/County: England, Suffolk
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Clare_Castle_Motte.jpg/500px-Clare_Castle_Motte.jpg

**Metrics:**
- Name similarity: 91.7%
- Distance: 538.532km
- Same image: No

**Reasons:** High name similarity (91.7%)

**Recommendation:** **KEEP-BOTH**

---

### 302. KEEP-BOTH (Confidence: 50%)

**Castle A:** Clara Castle
- Location: 52.6083, -7.3083
- Country/County: Ireland, County Kilkenny
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Narrow_Water_Tower%2C_Warrenpoint_-_geograph.org.uk_-_399224.jpg/500px-Narrow_Water_Tower%2C_Warrenpoint_-_geograph.org.uk_-_399224.jpg

**Castle B:** Claig Castle  
- Location: 55.869, -5.77
- Country/County: Scotland, Argyll and Bute
- Type: castle
- Image: https://img.castlecore.uk/claig-castle.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 376.076km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 303. KEEP-BOTH (Confidence: 50%)

**Castle A:** Clara Castle
- Location: 52.6083, -7.3083
- Country/County: Ireland, County Kilkenny
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Narrow_Water_Tower%2C_Warrenpoint_-_geograph.org.uk_-_399224.jpg/500px-Narrow_Water_Tower%2C_Warrenpoint_-_geograph.org.uk_-_399224.jpg

**Castle B:** Cabra Castle  
- Location: 53.862, -6.872
- Country/County: Ireland, County Cavan
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Kingscourt_-_Cabra_Castle_view_from_entrance_driveway_-_geograph.org.uk_-_1619780.jpg/500px-Kingscourt_-_Cabra_Castle_view_from_entrance_driveway_-_geograph.org.uk_-_1619780.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 142.396km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 304. KEEP-BOTH (Confidence: 50%)

**Castle A:** Clara Castle
- Location: 52.6083, -7.3083
- Country/County: Ireland, County Kilkenny
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Narrow_Water_Tower%2C_Warrenpoint_-_geograph.org.uk_-_399224.jpg/500px-Narrow_Water_Tower%2C_Warrenpoint_-_geograph.org.uk_-_399224.jpg

**Castle B:** Clarecastle Tower  
- Location: 52.822, -8.961
- Country/County: Ireland, County Clare
- Type: tower house
- Image: https://img.castlecore.uk/clarecastle-tower.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 113.830km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 305. KEEP-BOTH (Confidence: 50%)

**Castle A:** Clara Castle
- Location: 52.6083, -7.3083
- Country/County: Ireland, County Kilkenny
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Narrow_Water_Tower%2C_Warrenpoint_-_geograph.org.uk_-_399224.jpg/500px-Narrow_Water_Tower%2C_Warrenpoint_-_geograph.org.uk_-_399224.jpg

**Castle B:** Carna Castle  
- Location: 53.32, -9.87
- Country/County: Ireland, County Galway
- Type: tower house
- Image: https://img.castlecore.uk/carna-castle.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 188.926km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 306. KEEP-BOTH (Confidence: 50%)

**Castle A:** Clara Castle
- Location: 52.6083, -7.3083
- Country/County: Ireland, County Kilkenny
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Narrow_Water_Tower%2C_Warrenpoint_-_geograph.org.uk_-_399224.jpg/500px-Narrow_Water_Tower%2C_Warrenpoint_-_geograph.org.uk_-_399224.jpg

**Castle B:** Aclare Castle  
- Location: 53.978, -8.758
- Country/County: Ireland, County Sligo
- Type: tower house
- Image: https://img.castlecore.uk/aclare-castle.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 180.214km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 307. KEEP-BOTH (Confidence: 50%)

**Castle A:** Donegal Castle
- Location: 54.6539, -8.11
- Country/County: Ireland, County Donegal
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Donegalcastle.jpg/500px-Donegalcastle.jpg

**Castle B:** Clonegal Castle  
- Location: 52.676, -6.658
- Country/County: Ireland, County Carlow
- Type: tower house
- Image: https://img.castlecore.uk/clonegal-castle.jpg

**Metrics:**
- Name similarity: 86.7%
- Distance: 239.824km
- Same image: No

**Reasons:** High name similarity (86.7%)

**Recommendation:** **KEEP-BOTH**

---

### 308. KEEP-BOTH (Confidence: 50%)

**Castle A:** Doe Castle
- Location: 55.1333, -7.7833
- Country/County: Ireland, County Donegal
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Audley%27s_Castle%2C_closeup.jpg/500px-Audley%27s_Castle%2C_closeup.jpg

**Castle B:** Rose Castle  
- Location: 54.8333, -2.8333
- Country/County: England, Cumbria
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Rose_Castle%2C_Raughton_Head.jpg/500px-Rose_Castle%2C_Raughton_Head.jpg

**Metrics:**
- Name similarity: 81.8%
- Distance: 317.525km
- Same image: No

**Reasons:** High name similarity (81.8%)

**Recommendation:** **KEEP-BOTH**

---

### 309. KEEP-BOTH (Confidence: 50%)

**Castle A:** Doe Castle
- Location: 55.1333, -7.7833
- Country/County: Ireland, County Donegal
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Audley%27s_Castle%2C_closeup.jpg/500px-Audley%27s_Castle%2C_closeup.jpg

**Castle B:** Eye Castle  
- Location: 52.321, 1.149
- Country/County: England, Suffolk
- Type: castle
- Image: https://img.castlecore.uk/eye-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 664.967km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 310. KEEP-BOTH (Confidence: 50%)

**Castle A:** Doe Castle
- Location: 55.1333, -7.7833
- Country/County: Ireland, County Donegal
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Audley%27s_Castle%2C_closeup.jpg/500px-Audley%27s_Castle%2C_closeup.jpg

**Castle B:** Moy Castle  
- Location: 56.322, -5.957
- Country/County: Scotland, Argyll and Bute
- Type: castle
- Image: https://img.castlecore.uk/moy-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 174.769km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 311. KEEP-BOTH (Confidence: 50%)

**Castle A:** Doe Castle
- Location: 55.1333, -7.7833
- Country/County: Ireland, County Donegal
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Audley%27s_Castle%2C_closeup.jpg/500px-Audley%27s_Castle%2C_closeup.jpg

**Castle B:** Fore Castle  
- Location: 53.69, -7.186
- Country/County: Ireland, County Westmeath
- Type: castle
- Image: https://img.castlecore.uk/fore-castle.jpg

**Metrics:**
- Name similarity: 81.8%
- Distance: 165.075km
- Same image: No

**Reasons:** High name similarity (81.8%)

**Recommendation:** **KEEP-BOTH**

---

### 312. KEEP-BOTH (Confidence: 50%)

**Castle A:** Doe Castle
- Location: 55.1333, -7.7833
- Country/County: Ireland, County Donegal
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Audley%27s_Castle%2C_closeup.jpg/500px-Audley%27s_Castle%2C_closeup.jpg

**Castle B:** Castle Roy  
- Location: 57.2667, -3.6
- Country/County: Scotland, Highland
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Castle_Roy_-_geograph.org.uk_-_2069401.jpg/500px-Castle_Roy_-_geograph.org.uk_-_2069401.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 350.935km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 313. KEEP-BOTH (Confidence: 50%)

**Castle A:** Doe Castle
- Location: 55.1333, -7.7833
- Country/County: Ireland, County Donegal
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Audley%27s_Castle%2C_closeup.jpg/500px-Audley%27s_Castle%2C_closeup.jpg

**Castle B:** Tor Castle  
- Location: 56.8667, -5.0833
- Country/County: Scotland, Highland
- Type: castle
- Image: https://img.castlecore.uk/tor-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 255.570km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 314. KEEP-BOTH (Confidence: 50%)

**Castle A:** Glenveagh Castle
- Location: 55.0389, -7.9333
- Country/County: Ireland, County Donegal
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Inch_Abbey_%28geograph_183149%29.jpg/500px-Inch_Abbey_%28geograph_183149%29.jpg

**Castle B:** Gleninagh Castle  
- Location: 53.098, -9.18
- Country/County: Ireland, County Clare
- Type: tower house
- Image: https://img.castlecore.uk/gleninagh-castle.jpg

**Metrics:**
- Name similarity: 87.5%
- Distance: 230.631km
- Same image: No

**Reasons:** High name similarity (87.5%)

**Recommendation:** **KEEP-BOTH**

---

### 315. KEEP-BOTH (Confidence: 50%)

**Castle A:** Boyle Abbey
- Location: 53.9722, -8.2972
- Country/County: Ireland, County Roscommon
- Type: abbey
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Sketrick_Castle.jpg/500px-Sketrick_Castle.jpg

**Castle B:** Moyne Abbey  
- Location: 54.17, -9.26
- Country/County: Ireland, County Mayo
- Type: abbey
- Image: https://img.castlecore.uk/moyne-abbey.jpg

**Metrics:**
- Name similarity: 81.8%
- Distance: 66.558km
- Same image: No

**Reasons:** High name similarity (81.8%)

**Recommendation:** **KEEP-BOTH**

---

### 316. KEEP-BOTH (Confidence: 50%)

**Castle A:** Boyle Abbey
- Location: 53.9722, -8.2972
- Country/County: Ireland, County Roscommon
- Type: abbey
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Sketrick_Castle.jpg/500px-Sketrick_Castle.jpg

**Castle B:** Boyne Castle  
- Location: 57.6833, -2.7333
- Country/County: Scotland, Aberdeenshire
- Type: castle
- Image: https://img.castlecore.uk/boyne-castle-3.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 539.128km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 317. KEEP-BOTH (Confidence: 50%)

**Castle A:** Ballintober Castle
- Location: 53.7167, -8.3167
- Country/County: Ireland, County Roscommon
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Shane%27s_Castle%2C_County_Antrim_-_geograph.org.uk_-_155426.jpg/500px-Shane%27s_Castle%2C_County_Antrim_-_geograph.org.uk_-_155426.jpg

**Castle B:** Ballindoney Castle  
- Location: 52.52, -7.83
- Country/County: Ireland, County Tipperary
- Type: tower house
- Image: https://img.castlecore.uk/ballindoney-castle.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 136.973km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 318. KEEP-BOTH (Confidence: 50%)

**Castle A:** Ballintober Castle
- Location: 53.7167, -8.3167
- Country/County: Ireland, County Roscommon
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Shane%27s_Castle%2C_County_Antrim_-_geograph.org.uk_-_155426.jpg/500px-Shane%27s_Castle%2C_County_Antrim_-_geograph.org.uk_-_155426.jpg

**Castle B:** Ballintubber Abbey  
- Location: 53.695, -9.33
- Country/County: Ireland, County Mayo
- Type: abbey
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Ballintubber_Abbey_eastern_elevation.JPG/500px-Ballintubber_Abbey_eastern_elevation.JPG

**Metrics:**
- Name similarity: 83.3%
- Distance: 66.738km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 319. KEEP-BOTH (Confidence: 50%)

**Castle A:** Ballintober Castle
- Location: 53.7167, -8.3167
- Country/County: Ireland, County Roscommon
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Shane%27s_Castle%2C_County_Antrim_-_geograph.org.uk_-_155426.jpg/500px-Shane%27s_Castle%2C_County_Antrim_-_geograph.org.uk_-_155426.jpg

**Castle B:** Ballinrobe Castle  
- Location: 53.622, -9.228
- Country/County: Ireland, County Mayo
- Type: castle
- Image: https://img.castlecore.uk/ballinrobe-castle.jpg

**Metrics:**
- Name similarity: 88.9%
- Distance: 60.950km
- Same image: No

**Reasons:** High name similarity (88.9%)

**Recommendation:** **KEEP-BOTH**

---

### 320. KEEP-BOTH (Confidence: 50%)

**Castle A:** Ballintober Castle
- Location: 53.7167, -8.3167
- Country/County: Ireland, County Roscommon
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Shane%27s_Castle%2C_County_Antrim_-_geograph.org.uk_-_155426.jpg/500px-Shane%27s_Castle%2C_County_Antrim_-_geograph.org.uk_-_155426.jpg

**Castle B:** Balintore Castle  
- Location: 56.7167, -3.1333
- Country/County: Scotland, Angus
- Type: castle
- Image: https://img.castlecore.uk/balintore-castle.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 468.148km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 321. KEEP-BOTH (Confidence: 50%)

**Castle A:** Ballintober Castle
- Location: 53.7167, -8.3167
- Country/County: Ireland, County Roscommon
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Shane%27s_Castle%2C_County_Antrim_-_geograph.org.uk_-_155426.jpg/500px-Shane%27s_Castle%2C_County_Antrim_-_geograph.org.uk_-_155426.jpg

**Castle B:** Ballintotis Castle  
- Location: 51.845, -8.072
- Country/County: Ireland, County Cork
- Type: tower house
- Image: https://img.castlecore.uk/ballintotis-castle.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 208.773km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 322. KEEP-BOTH (Confidence: 50%)

**Castle A:** Cloughoughter Castle
- Location: 54.0187, -7.4548
- Country/County: Ireland, County Cavan
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Clogh_Oughter_Castle_Cavan_Ireland_geograph_1405851_by_Oliver_Dixon.jpg/500px-Clogh_Oughter_Castle_Cavan_Ireland_geograph_1405851_by_Oliver_Dixon.jpg

**Castle B:** Clogh Oughter Castle  
- Location: 53.974, -7.393
- Country/County: Ireland, County Cavan
- Type: castle
- Image: https://img.castlecore.uk/clogh-oughter-castle.jpg

**Metrics:**
- Name similarity: 90.0%
- Distance: 6.405km
- Same image: No

**Reasons:** High name similarity (90.0%)

**Recommendation:** **KEEP-BOTH**

---

### 323. KEEP-BOTH (Confidence: 50%)

**Castle A:** Cavan Castle
- Location: 53.9908, -7.3608
- Country/County: Ireland, County Cavan
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Kinbane_Castle%2C_daylight.jpg/500px-Kinbane_Castle%2C_daylight.jpg

**Castle B:** Navan Fort  
- Location: 54.348, -6.698
- Country/County: Ireland, County Armagh
- Type: fort
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Navan_Fort%2C_County_Armagh_-_geograph.org.uk_-_43871.jpg/500px-Navan_Fort%2C_County_Armagh_-_geograph.org.uk_-_43871.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 58.642km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 324. KEEP-BOTH (Confidence: 50%)

**Castle A:** Cavan Castle
- Location: 53.9908, -7.3608
- Country/County: Ireland, County Cavan
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Kinbane_Castle%2C_daylight.jpg/500px-Kinbane_Castle%2C_daylight.jpg

**Castle B:** Calvay Castle  
- Location: 57.148, -7.24
- Country/County: Scotland, Na h-Eileanan Siar
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Calbhaigh_castle_-_geograph.org.uk_-_878406.jpg/500px-Calbhaigh_castle_-_geograph.org.uk_-_878406.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 351.147km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 325. KEEP-BOTH (Confidence: 50%)

**Castle A:** Cavan Castle
- Location: 53.9908, -7.3608
- Country/County: Ireland, County Cavan
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Kinbane_Castle%2C_daylight.jpg/500px-Kinbane_Castle%2C_daylight.jpg

**Castle B:** Navan Castle  
- Location: 53.653, -6.682
- Country/County: Ireland, County Meath
- Type: castle
- Image: https://img.castlecore.uk/navan-castle.jpg

**Metrics:**
- Name similarity: 91.7%
- Distance: 58.275km
- Same image: No

**Reasons:** High name similarity (91.7%)

**Recommendation:** **KEEP-BOTH**

---

### 326. KEEP-BOTH (Confidence: 50%)

**Castle A:** Cavan Castle
- Location: 53.9908, -7.3608
- Country/County: Ireland, County Cavan
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Kinbane_Castle%2C_daylight.jpg/500px-Kinbane_Castle%2C_daylight.jpg

**Castle B:** Castle Levan  
- Location: 55.9333, -4.8
- Country/County: Scotland, Inverclyde
- Type: castle
- Image: https://img.castlecore.uk/castle-levan.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 270.848km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 327. KEEP-BOTH (Confidence: 50%)

**Castle A:** Fore Abbey
- Location: 53.6167, -7.2167
- Country/County: Ireland, County Westmeath
- Type: abbey
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/The_ruins_of_Red_Bay_Castle_-_geograph.org.uk_-_3727864.jpg/500px-The_ruins_of_Red_Bay_Castle_-_geograph.org.uk_-_3727864.jpg

**Castle B:** Fore Castle  
- Location: 53.69, -7.186
- Country/County: Ireland, County Westmeath
- Type: castle
- Image: https://img.castlecore.uk/fore-castle.jpg

**Metrics:**
- Name similarity: 100.0%
- Distance: 8.398km
- Same image: No

**Reasons:** High name similarity (100.0%)

**Recommendation:** **KEEP-BOTH**

---

### 328. KEEP-BOTH (Confidence: 50%)

**Castle A:** Fore Abbey
- Location: 53.6167, -7.2167
- Country/County: Ireland, County Westmeath
- Type: abbey
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/The_ruins_of_Red_Bay_Castle_-_geograph.org.uk_-_3727864.jpg/500px-The_ruins_of_Red_Bay_Castle_-_geograph.org.uk_-_3727864.jpg

**Castle B:** Abbey Dore  
- Location: 51.9467, -2.9167
- Country/County: England, Herefordshire
- Type: abbey
- Image: https://img.castlecore.uk/abbey-dore.jpg

**Metrics:**
- Name similarity: 90.0%
- Distance: 343.598km
- Same image: No

**Reasons:** High name similarity (90.0%)

**Recommendation:** **KEEP-BOTH**

---

### 329. KEEP-BOTH (Confidence: 50%)

**Castle A:** Fore Abbey
- Location: 53.6167, -7.2167
- Country/County: Ireland, County Westmeath
- Type: abbey
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/The_ruins_of_Red_Bay_Castle_-_geograph.org.uk_-_3727864.jpg/500px-The_ruins_of_Red_Bay_Castle_-_geograph.org.uk_-_3727864.jpg

**Castle B:** Torre Abbey  
- Location: 50.4633, -3.55
- Country/County: England, Devon
- Type: abbey
- Image: https://img.castlecore.uk/torre-abbey.jpg

**Metrics:**
- Name similarity: 81.8%
- Distance: 430.975km
- Same image: No

**Reasons:** High name similarity (81.8%)

**Recommendation:** **KEEP-BOTH**

---

### 330. KEEP-BOTH (Confidence: 50%)

**Castle A:** Athlone Castle
- Location: 53.4233, -7.9444
- Country/County: Ireland, County Westmeath
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/BonamargyFriary.JPG/500px-BonamargyFriary.JPG

**Castle B:** Athcarne Castle  
- Location: 53.682, -6.598
- Country/County: Ireland, County Meath
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Athcarne_Castle%2C_Co._Meath_-_geograph.org.uk_-_744437.jpg/500px-Athcarne_Castle%2C_Co._Meath_-_geograph.org.uk_-_744437.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 93.476km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 331. KEEP-BOTH (Confidence: 50%)

**Castle A:** Athlone Castle
- Location: 53.4233, -7.9444
- Country/County: Ireland, County Westmeath
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/BonamargyFriary.JPG/500px-BonamargyFriary.JPG

**Castle B:** Rathcline Castle  
- Location: 53.682, -7.862
- Country/County: Ireland, County Longford
- Type: castle
- Image: https://img.castlecore.uk/rathcline-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 29.277km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 332. KEEP-BOTH (Confidence: 50%)

**Castle A:** Athlone Castle
- Location: 53.4233, -7.9444
- Country/County: Ireland, County Westmeath
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/BonamargyFriary.JPG/500px-BonamargyFriary.JPG

**Castle B:** Rathmore Castle  
- Location: 53.578, -6.512
- Country/County: Ireland, County Meath
- Type: tower house
- Image: https://img.castlecore.uk/rathmore-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 96.287km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 333. KEEP-BOTH (Confidence: 50%)

**Castle A:** Athlone Castle
- Location: 53.4233, -7.9444
- Country/County: Ireland, County Westmeath
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/BonamargyFriary.JPG/500px-BonamargyFriary.JPG

**Castle B:** Athlumney Castle  
- Location: 53.644, -6.694
- Country/County: Ireland, County Meath
- Type: castle
- Image: https://img.castlecore.uk/athlumney-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 86.203km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 334. KEEP-BOTH (Confidence: 50%)

**Castle A:** Roche Castle
- Location: 54.0278, -6.4306
- Country/County: Ireland, County Louth
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Benburb-Castle-1.jpg/500px-Benburb-Castle-1.jpg

**Castle B:** Rose Castle  
- Location: 54.8333, -2.8333
- Country/County: England, Cumbria
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Rose_Castle%2C_Raughton_Head.jpg/500px-Rose_Castle%2C_Raughton_Head.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 249.285km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 335. KEEP-BOTH (Confidence: 50%)

**Castle A:** Roche Castle
- Location: 54.0278, -6.4306
- Country/County: Ireland, County Louth
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Benburb-Castle-1.jpg/500px-Benburb-Castle-1.jpg

**Castle B:** Castleroche  
- Location: 54.04, -6.483
- Country/County: Ireland, County Louth
- Type: castle
- Image: https://img.castlecore.uk/castleroche.jpg

**Metrics:**
- Name similarity: 91.7%
- Distance: 3.681km
- Same image: No

**Reasons:** High name similarity (91.7%)

**Recommendation:** **KEEP-BOTH**

---

### 336. KEEP-BOTH (Confidence: 50%)

**Castle A:** Roche Castle
- Location: 54.0278, -6.4306
- Country/County: Ireland, County Louth
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Benburb-Castle-1.jpg/500px-Benburb-Castle-1.jpg

**Castle B:** Roch Castle  
- Location: 51.833, -5.073
- Country/County: Wales, Pembrokeshire
- Type: castle
- Image: https://img.castlecore.uk/roch-castle.jpg

**Metrics:**
- Name similarity: 91.7%
- Distance: 260.450km
- Same image: No

**Reasons:** High name similarity (91.7%)

**Recommendation:** **KEEP-BOTH**

---

### 337. KEEP-BOTH (Confidence: 50%)

**Castle A:** Roche Castle
- Location: 54.0278, -6.4306
- Country/County: Ireland, County Louth
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Benburb-Castle-1.jpg/500px-Benburb-Castle-1.jpg

**Castle B:** Roche Abbey  
- Location: 53.445, -1.2083
- Country/County: England, Yorkshire
- Type: abbey
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Roche_Abbey_%28211961681%29.jpeg/500px-Roche_Abbey_%28211961681%29.jpeg

**Metrics:**
- Name similarity: 100.0%
- Distance: 349.455km
- Same image: No

**Reasons:** High name similarity (100.0%)

**Recommendation:** **KEEP-BOTH**

---

### 338. KEEP-BOTH (Confidence: 50%)

**Castle A:** Roche Castle
- Location: 54.0278, -6.4306
- Country/County: Ireland, County Louth
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Benburb-Castle-1.jpg/500px-Benburb-Castle-1.jpg

**Castle B:** Rothe House  
- Location: 52.653, -7.252
- Country/County: Ireland, County Kilkenny
- Type: tower house
- Image: https://img.castlecore.uk/rothe-house.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 162.303km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 339. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dunluce Castle
- Location: 55.2106, -6.5794
- Country/County: Northern Ireland, County Antrim
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Dunluce_Castle_Northern_Ireland_1.jpg/500px-Dunluce_Castle_Northern_Ireland_1.jpg

**Castle B:** Dunollie Castle  
- Location: 56.426, -5.478
- Country/County: Scotland, Argyll and Bute
- Type: castle
- Image: https://img.castlecore.uk/dunollie-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 151.649km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 340. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dunluce Castle
- Location: 55.2106, -6.5794
- Country/County: Northern Ireland, County Antrim
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Dunluce_Castle_Northern_Ireland_1.jpg/500px-Dunluce_Castle_Northern_Ireland_1.jpg

**Castle B:** Duntrune Castle  
- Location: 56.088, -5.583
- Country/County: Scotland, Argyll and Bute
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Duntrune_Castle_-_geograph.org.uk_-_4669295.jpg/500px-Duntrune_Castle_-_geograph.org.uk_-_4669295.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 115.871km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 341. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dunluce Castle
- Location: 55.2106, -6.5794
- Country/County: Northern Ireland, County Antrim
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Dunluce_Castle_Northern_Ireland_1.jpg/500px-Dunluce_Castle_Northern_Ireland_1.jpg

**Castle B:** Dunure Castle  
- Location: 55.4, -4.75
- Country/County: Scotland, South Ayrshire
- Type: castle
- Image: https://img.castlecore.uk/dunure-castle.jpg

**Metrics:**
- Name similarity: 85.7%
- Distance: 117.683km
- Same image: No

**Reasons:** High name similarity (85.7%)

**Recommendation:** **KEEP-BOTH**

---

### 342. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dunluce Castle
- Location: 55.2106, -6.5794
- Country/County: Northern Ireland, County Antrim
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Dunluce_Castle_Northern_Ireland_1.jpg/500px-Dunluce_Castle_Northern_Ireland_1.jpg

**Castle B:** Dunlicky Castle  
- Location: 52.569, -9.731
- Country/County: Ireland, County Clare
- Type: tower house
- Image: https://img.castlecore.uk/dunlicky-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 358.993km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 343. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dundrum Castle
- Location: 54.2567, -5.85
- Country/County: Northern Ireland, County Down
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Dundrum_Castle_from_outside.jpg/500px-Dundrum_Castle_from_outside.jpg

**Castle B:** Duntrune Castle  
- Location: 56.088, -5.583
- Country/County: Scotland, Argyll and Bute
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Duntrune_Castle_-_geograph.org.uk_-_4669295.jpg/500px-Duntrune_Castle_-_geograph.org.uk_-_4669295.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 204.336km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 344. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dundrum Castle
- Location: 54.2567, -5.85
- Country/County: Northern Ireland, County Down
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Dundrum_Castle_from_outside.jpg/500px-Dundrum_Castle_from_outside.jpg

**Castle B:** Sundrum Castle  
- Location: 55.4833, -4.5833
- Country/County: Scotland, South Ayrshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Sundrum_Castle.jpg/500px-Sundrum_Castle.jpg

**Metrics:**
- Name similarity: 92.9%
- Distance: 158.650km
- Same image: No

**Reasons:** High name similarity (92.9%)

**Recommendation:** **KEEP-BOTH**

---

### 345. KEEP-BOTH (Confidence: 50%)

**Castle A:** Audley's Castle
- Location: 54.3803, -5.5553
- Country/County: Northern Ireland, County Down
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Ballygally_Castle.jpg/500px-Ballygally_Castle.jpg

**Castle B:** Dudley Castle  
- Location: 52.5092, -2.0875
- Country/County: England, West Midlands
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Dudley_Castle%2C_England%2C_Aerial_View.jpg/500px-Dudley_Castle%2C_England%2C_Aerial_View.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 309.826km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 346. KEEP-BOTH (Confidence: 50%)

**Castle A:** Audley's Castle
- Location: 54.3803, -5.5553
- Country/County: Northern Ireland, County Down
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Ballygally_Castle.jpg/500px-Ballygally_Castle.jpg

**Castle B:** Sudeley Castle  
- Location: 51.9397, -1.9442
- Country/County: England, Gloucestershire
- Type: castle
- Image: https://img.castlecore.uk/sudeley-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 362.688km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 347. KEEP-BOTH (Confidence: 50%)

**Castle A:** Inch Abbey
- Location: 54.3333, -5.7333
- Country/County: Northern Ireland, County Down
- Type: abbey
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/View_of_Antrim_Castle_from_the_river_%2813733537463%29.jpg/500px-View_of_Antrim_Castle_from_the_river_%2813733537463%29.jpg

**Castle B:** Inch Castle  
- Location: 55.068, -7.558
- Country/County: Ireland, County Donegal
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Farland_Bank_and_Inch_Castle_-_panoramio.jpg/500px-Farland_Bank_and_Inch_Castle_-_panoramio.jpg

**Metrics:**
- Name similarity: 100.0%
- Distance: 142.892km
- Same image: No

**Reasons:** High name similarity (100.0%)

**Recommendation:** **KEEP-BOTH**

---

### 348. KEEP-BOTH (Confidence: 50%)

**Castle A:** Clough Castle
- Location: 54.2833, -5.8833
- Country/County: Northern Ireland, County Down
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Clough_%2811%29%2C_October_2009.JPG/500px-Clough_%2811%29%2C_October_2009.JPG

**Castle B:** Kinlough Castle  
- Location: 53.79, -9.69
- Country/County: Ireland, County Mayo
- Type: tower house
- Image: https://img.castlecore.uk/kinlough-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 254.528km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 349. KEEP-BOTH (Confidence: 50%)

**Castle A:** Clough Castle
- Location: 54.2833, -5.8833
- Country/County: Northern Ireland, County Down
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Clough_%2811%29%2C_October_2009.JPG/500px-Clough_%2811%29%2C_October_2009.JPG

**Castle B:** Moylough Castle  
- Location: 53.587, -8.568
- Country/County: Ireland, County Galway
- Type: tower house
- Image: https://img.castlecore.uk/moylough-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 192.025km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 350. KEEP-BOTH (Confidence: 50%)

**Castle A:** Shane's Castle
- Location: 54.7167, -6.3167
- Country/County: Northern Ireland, County Antrim
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Shane%27s_Castle%2C_County_Antrim_-_geograph.org.uk_-_155426.jpg/500px-Shane%27s_Castle%2C_County_Antrim_-_geograph.org.uk_-_155426.jpg

**Castle B:** Drishane Castle  
- Location: 52.16, -9.078
- Country/County: Ireland, County Cork
- Type: tower house
- Image: https://img.castlecore.uk/drishane-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 337.987km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 351. KEEP-BOTH (Confidence: 50%)

**Castle A:** Kinbane Castle
- Location: 55.225, -6.2306
- Country/County: Northern Ireland, County Antrim
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Kinbane_Castle%2C_daylight.jpg/500px-Kinbane_Castle%2C_daylight.jpg

**Castle B:** Kilbolane Castle  
- Location: 52.229, -8.829
- Country/County: Ireland, County Cork
- Type: castle
- Image: https://img.castlecore.uk/kilbolane-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 374.374km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 352. KEEP-BOTH (Confidence: 50%)

**Castle A:** Kinbane Castle
- Location: 55.225, -6.2306
- Country/County: Northern Ireland, County Antrim
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Kinbane_Castle%2C_daylight.jpg/500px-Kinbane_Castle%2C_daylight.jpg

**Castle B:** Kinfauns Castle  
- Location: 56.3833, -3.3167
- Country/County: Scotland, Perth and Kinross
- Type: castle
- Image: https://img.castlecore.uk/kinfauns-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 223.017km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 353. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dunineny Castle
- Location: 55.2, -6.25
- Country/County: Northern Ireland, County Antrim
- Type: tower house
- Image: https://img.castlecore.uk/dunineny-castle.jpg

**Castle B:** Dunideer Castle  
- Location: 57.316, -2.637
- Country/County: Scotland, Aberdeenshire
- Type: castle
- Image: https://img.castlecore.uk/dunideer-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 324.195km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 354. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dungannon Castle
- Location: 54.5083, -6.7667
- Country/County: Northern Ireland, County Tyrone
- Type: castle
- Image: https://img.castlecore.uk/dungannon-castle.jpg

**Castle B:** Dundanion Castle  
- Location: 51.851, -8.384
- Country/County: Ireland, County Cork
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Dundanion_Castle_Blackrock_Cork.jpg/500px-Dundanion_Castle_Blackrock_Cork.jpg

**Metrics:**
- Name similarity: 87.5%
- Distance: 314.499km
- Same image: No

**Reasons:** High name similarity (87.5%)

**Recommendation:** **KEEP-BOTH**

---

### 355. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dungannon Castle
- Location: 54.5083, -6.7667
- Country/County: Northern Ireland, County Tyrone
- Type: castle
- Image: https://img.castlecore.uk/dungannon-castle.jpg

**Castle B:** Dunmahon Castle  
- Location: 54.03, -6.21
- Country/County: Ireland, County Louth
- Type: tower house
- Image: https://img.castlecore.uk/dunmahon-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 64.307km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 356. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dungannon Castle
- Location: 54.5083, -6.7667
- Country/County: Northern Ireland, County Tyrone
- Type: castle
- Image: https://img.castlecore.uk/dungannon-castle.jpg

**Castle B:** Dungarvan Castle  
- Location: 52.089, -7.619
- Country/County: Ireland, County Waterford
- Type: castle
- Image: https://img.castlecore.uk/dungarvan-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 274.906km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 357. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dungannon Castle
- Location: 54.5083, -6.7667
- Country/County: Northern Ireland, County Tyrone
- Type: castle
- Image: https://img.castlecore.uk/dungannon-castle.jpg

**Castle B:** Duncannon Fort  
- Location: 52.22, -6.934
- Country/County: Ireland, County Wexford
- Type: fort
- Image: https://img.castlecore.uk/duncannon-fort.jpg

**Metrics:**
- Name similarity: 88.9%
- Distance: 254.689km
- Same image: No

**Reasons:** High name similarity (88.9%)

**Recommendation:** **KEEP-BOTH**

---

### 358. KEEP-BOTH (Confidence: 50%)

**Castle A:** Castlederg Castle
- Location: 54.7167, -7.5833
- Country/County: Northern Ireland, County Tyrone
- Type: castle
- Image: https://img.castlecore.uk/castlederg-castle.jpg

**Castle B:** Castlerea Castle  
- Location: 53.767, -8.494
- Country/County: Ireland, County Roscommon
- Type: castle
- Image: https://img.castlecore.uk/castlerea-castle.jpg

**Metrics:**
- Name similarity: 82.4%
- Distance: 121.049km
- Same image: No

**Reasons:** High name similarity (82.4%)

**Recommendation:** **KEEP-BOTH**

---

### 359. KEEP-BOTH (Confidence: 50%)

**Castle A:** Castlederg Castle
- Location: 54.7167, -7.5833
- Country/County: Northern Ireland, County Tyrone
- Type: castle
- Image: https://img.castlecore.uk/castlederg-castle.jpg

**Castle B:** Castlebar Castle  
- Location: 53.86, -9.3
- Country/County: Ireland, County Mayo
- Type: castle
- Image: https://img.castlecore.uk/castlebar-castle.jpg

**Metrics:**
- Name similarity: 82.4%
- Distance: 146.586km
- Same image: No

**Reasons:** High name similarity (82.4%)

**Recommendation:** **KEEP-BOTH**

---

### 360. KEEP-BOTH (Confidence: 50%)

**Castle A:** Tully Castle
- Location: 54.4333, -7.7333
- Country/County: Northern Ireland, County Fermanagh
- Type: fortified house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Tully_Castle%2C_County_Fermanagh_-_geograph.org.uk_-_204216.jpg/500px-Tully_Castle%2C_County_Fermanagh_-_geograph.org.uk_-_204216.jpg

**Castle B:** Tulsk Castle  
- Location: 53.788, -8.242
- Country/County: Ireland, County Roscommon
- Type: castle
- Image: https://img.castlecore.uk/tulsk-castle.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 79.045km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 361. KEEP-BOTH (Confidence: 50%)

**Castle A:** Tully Castle
- Location: 54.4333, -7.7333
- Country/County: Northern Ireland, County Fermanagh
- Type: fortified house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Tully_Castle%2C_County_Fermanagh_-_geograph.org.uk_-_204216.jpg/500px-Tully_Castle%2C_County_Fermanagh_-_geograph.org.uk_-_204216.jpg

**Castle B:** Ardtully Castle  
- Location: 51.793, -9.731
- Country/County: Ireland, County Kerry
- Type: tower house
- Image: https://img.castlecore.uk/ardtully-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 322.414km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 362. KEEP-BOTH (Confidence: 50%)

**Castle A:** Crom Castle
- Location: 54.1667, -7.45
- Country/County: Northern Ireland, County Fermanagh
- Type: castle
- Image: https://img.castlecore.uk/crom-castle.jpg

**Castle B:** Aros Castle  
- Location: 56.553, -5.997
- Country/County: Scotland, Argyll and Bute
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Aros_Castle_-_exterior.jpg/500px-Aros_Castle_-_exterior.jpg

**Metrics:**
- Name similarity: 81.8%
- Distance: 280.771km
- Same image: No

**Reasons:** High name similarity (81.8%)

**Recommendation:** **KEEP-BOTH**

---

### 363. KEEP-BOTH (Confidence: 50%)

**Castle A:** Crom Castle
- Location: 54.1667, -7.45
- Country/County: Northern Ireland, County Fermanagh
- Type: castle
- Image: https://img.castlecore.uk/crom-castle.jpg

**Castle B:** Edrom Castle  
- Location: 55.798, -2.308
- Country/County: Scotland, Scottish Borders
- Type: tower house
- Image: https://img.castlecore.uk/edrom-castle.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 374.766km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 364. KEEP-BOTH (Confidence: 50%)

**Castle A:** Crom Castle
- Location: 54.1667, -7.45
- Country/County: Northern Ireland, County Fermanagh
- Type: castle
- Image: https://img.castlecore.uk/crom-castle.jpg

**Castle B:** Castle Roy  
- Location: 57.2667, -3.6
- Country/County: Scotland, Highland
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Castle_Roy_-_geograph.org.uk_-_2069401.jpg/500px-Castle_Roy_-_geograph.org.uk_-_2069401.jpg

**Metrics:**
- Name similarity: 81.8%
- Distance: 420.536km
- Same image: No

**Reasons:** High name similarity (81.8%)

**Recommendation:** **KEEP-BOTH**

---

### 365. KEEP-BOTH (Confidence: 50%)

**Castle A:** Crom Castle
- Location: 54.1667, -7.45
- Country/County: Northern Ireland, County Fermanagh
- Type: castle
- Image: https://img.castlecore.uk/crom-castle.jpg

**Castle B:** Croom Castle  
- Location: 52.519, -8.718
- Country/County: Ireland, County Limerick
- Type: castle
- Image: https://img.castlecore.uk/croom-castle.jpg

**Metrics:**
- Name similarity: 91.7%
- Distance: 201.620km
- Same image: No

**Reasons:** High name similarity (91.7%)

**Recommendation:** **KEEP-BOTH**

---

### 366. KEEP-BOTH (Confidence: 50%)

**Castle A:** Crom Castle
- Location: 54.1667, -7.45
- Country/County: Northern Ireland, County Fermanagh
- Type: castle
- Image: https://img.castlecore.uk/crom-castle.jpg

**Castle B:** Croft Castle  
- Location: 52.3033, -2.805
- Country/County: England, Herefordshire
- Type: castle
- Image: https://img.castlecore.uk/croft-castle.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 372.041km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 367. KEEP-BOTH (Confidence: 50%)

**Castle A:** Monea Castle
- Location: 54.3667, -7.6833
- Country/County: Northern Ireland, County Fermanagh
- Type: castle
- Image: https://img.castlecore.uk/monea-castle.jpg

**Castle B:** Monivea Castle  
- Location: 53.403, -8.54
- Country/County: Ireland, County Galway
- Type: tower house
- Image: https://img.castlecore.uk/monivea-castle.jpg

**Metrics:**
- Name similarity: 85.7%
- Distance: 120.975km
- Same image: No

**Reasons:** High name similarity (85.7%)

**Recommendation:** **KEEP-BOTH**

---

### 368. KEEP-BOTH (Confidence: 50%)

**Castle A:** Monea Castle
- Location: 54.3667, -7.6833
- Country/County: Northern Ireland, County Fermanagh
- Type: castle
- Image: https://img.castlecore.uk/monea-castle.jpg

**Castle B:** Conna Castle  
- Location: 52.068, -8.082
- Country/County: Ireland, County Cork
- Type: tower house
- Image: https://img.castlecore.uk/conna-castle.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 256.977km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 369. KEEP-BOTH (Confidence: 50%)

**Castle A:** Carrick Castle
- Location: 54.45, -6.7833
- Country/County: Northern Ireland, County Armagh
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Carrick_Castle_tower_from_west.jpg/500px-Carrick_Castle_tower_from_west.jpg

**Castle B:** Varrich Castle  
- Location: 58.5167, -4.4167
- Country/County: Scotland, Highland
- Type: castle
- Image: https://img.castlecore.uk/varrich-castle.jpg

**Metrics:**
- Name similarity: 85.7%
- Distance: 474.894km
- Same image: No

**Reasons:** High name similarity (85.7%)

**Recommendation:** **KEEP-BOTH**

---

### 370. KEEP-BOTH (Confidence: 50%)

**Castle A:** Moyry Castle
- Location: 54.0667, -6.35
- Country/County: Northern Ireland, County Armagh
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Moyry_Castle_1.jpg/500px-Moyry_Castle_1.jpg

**Castle B:** Moy Castle  
- Location: 56.322, -5.957
- Country/County: Scotland, Argyll and Bute
- Type: castle
- Image: https://img.castlecore.uk/moy-castle.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 252.014km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 371. KEEP-BOTH (Confidence: 50%)

**Castle A:** Tonbridge Castle
- Location: 51.1958, 0.2756
- Country/County: England, Kent
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/TonbridgeCastle0021.JPG/500px-TonbridgeCastle0021.JPG

**Castle B:** Trowbridge Castle  
- Location: 51.319, -2.209
- Country/County: England, Wiltshire
- Type: castle
- Image: https://img.castlecore.uk/trowbridge-castle.jpg

**Metrics:**
- Name similarity: 88.2%
- Distance: 173.433km
- Same image: No

**Reasons:** High name similarity (88.2%)

**Recommendation:** **KEEP-BOTH**

---

### 372. KEEP-BOTH (Confidence: 50%)

**Castle A:** Tonbridge Castle
- Location: 51.1958, 0.2756
- Country/County: England, Kent
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/TonbridgeCastle0021.JPG/500px-TonbridgeCastle0021.JPG

**Castle B:** Pembridge Castle  
- Location: 52.0133, -2.8683
- Country/County: England, Herefordshire
- Type: castle
- Image: https://img.castlecore.uk/pembridge-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 235.358km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 373. KEEP-BOTH (Confidence: 50%)

**Castle A:** Camber Castle
- Location: 50.9308, 0.7803
- Country/County: England, East Sussex
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Camber_Castle%2C_seen_from_the_north-west.jpg/500px-Camber_Castle%2C_seen_from_the_north-west.jpg

**Castle B:** Bramber Castle  
- Location: 50.8847, -0.3092
- Country/County: England, West Sussex
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Bramber_Castle_1.jpg/500px-Bramber_Castle_1.jpg

**Metrics:**
- Name similarity: 85.7%
- Distance: 76.563km
- Same image: No

**Reasons:** High name similarity (85.7%)

**Recommendation:** **KEEP-BOTH**

---

### 374. KEEP-BOTH (Confidence: 50%)

**Castle A:** Camber Castle
- Location: 50.9308, 0.7803
- Country/County: England, East Sussex
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Camber_Castle%2C_seen_from_the_north-west.jpg/500px-Camber_Castle%2C_seen_from_the_north-west.jpg

**Castle B:** Castle Combe  
- Location: 51.4917, -2.2208
- Country/County: England, Wiltshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Castle_combe_river.jpg/500px-Castle_combe_river.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 218.138km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 375. KEEP-BOTH (Confidence: 50%)

**Castle A:** Odiham Castle
- Location: 51.2517, -0.9467
- Country/County: England, Hampshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Odiham_Castle.jpg/500px-Odiham_Castle.jpg

**Castle B:** Oakham Castle  
- Location: 52.6708, -0.7308
- Country/County: England, Rutland
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Great_Hall_-_Oakham_Castle.jpg/500px-Great_Hall_-_Oakham_Castle.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 158.488km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 376. KEEP-BOTH (Confidence: 50%)

**Castle A:** Calshot Castle
- Location: 50.8125, -1.3097
- Country/County: England, Hampshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Calshot_castle_evening.JPG/500px-Calshot_castle_evening.JPG

**Castle B:** Caldicot Castle  
- Location: 51.5833, -2.7167
- Country/County: Wales, Monmouthshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Caldicot_Castle_entrance_-_geograph.org.uk_-_469475.jpg/500px-Caldicot_Castle_entrance_-_geograph.org.uk_-_469475.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 130.216km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 377. KEEP-BOTH (Confidence: 50%)

**Castle A:** Castle Combe
- Location: 51.4917, -2.2208
- Country/County: England, Wiltshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Castle_combe_river.jpg/500px-Castle_combe_river.jpg

**Castle B:** Salcombe Castle  
- Location: 50.234, -3.776
- Country/County: England, Devon
- Type: castle
- Image: https://img.castlecore.uk/salcombe-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 177.394km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 378. KEEP-BOTH (Confidence: 50%)

**Castle A:** Castle Combe
- Location: 51.4917, -2.2208
- Country/County: England, Wiltshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Castle_combe_river.jpg/500px-Castle_combe_river.jpg

**Castle B:** Corse Castle  
- Location: 57.178, -2.628
- Country/County: Scotland, Aberdeenshire
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Corse_Castle_-_geograph.org.uk_-_252876.jpg/500px-Corse_Castle_-_geograph.org.uk_-_252876.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 632.836km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 379. KEEP-BOTH (Confidence: 50%)

**Castle A:** Castle Combe
- Location: 51.4917, -2.2208
- Country/County: England, Wiltshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Castle_combe_river.jpg/500px-Castle_combe_river.jpg

**Castle B:** Castle Coole  
- Location: 54.327, -7.582
- Country/County: Ireland, County Fermanagh
- Type: palace
- Image: https://img.castlecore.uk/castle-coole.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 477.937km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 380. KEEP-BOTH (Confidence: 50%)

**Castle A:** Castle Combe
- Location: 51.4917, -2.2208
- Country/County: England, Wiltshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Castle_combe_river.jpg/500px-Castle_combe_river.jpg

**Castle B:** Corby Castle  
- Location: 54.905, -2.8
- Country/County: England, Cumbria
- Type: castle
- Image: https://img.castlecore.uk/corby-castle.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 381.494km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 381. KEEP-BOTH (Confidence: 50%)

**Castle A:** Taunton Castle
- Location: 51.0178, -3.1014
- Country/County: England, Somerset
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Walls_of_Taunton_Castle_-_geograph.org.uk_-_1235395.jpg/500px-Walls_of_Taunton_Castle_-_geograph.org.uk_-_1235395.jpg

**Castle B:** Baginton Castle  
- Location: 52.35, -1.4833
- Country/County: England, Warwickshire
- Type: castle
- Image: https://img.castlecore.uk/baginton-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 185.429km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 382. KEEP-BOTH (Confidence: 50%)

**Castle A:** Taunton Castle
- Location: 51.0178, -3.1014
- Country/County: England, Somerset
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Walls_of_Taunton_Castle_-_geograph.org.uk_-_1235395.jpg/500px-Walls_of_Taunton_Castle_-_geograph.org.uk_-_1235395.jpg

**Castle B:** Haughton Castle  
- Location: 55.043, -2.185
- Country/County: England, Northumberland
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Haughton_Castle.jpg/500px-Haughton_Castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 451.747km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 383. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dartmouth Castle
- Location: 50.3403, -3.5678
- Country/County: England, Devon
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Dartmouth_Castle_-_geograph.org.uk_-_725989.jpg/500px-Dartmouth_Castle_-_geograph.org.uk_-_725989.jpg

**Castle B:** Yarmouth Castle  
- Location: 50.7069, -1.5006
- Country/County: England, Isle of Wight
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Yarmouth_Castle%2C_Isle_of_Wight_-_geograph.org.uk_-_1720431.jpg/500px-Yarmouth_Castle%2C_Isle_of_Wight_-_geograph.org.uk_-_1720431.jpg

**Metrics:**
- Name similarity: 87.5%
- Distance: 151.710km
- Same image: No

**Reasons:** High name similarity (87.5%)

**Recommendation:** **KEEP-BOTH**

---

### 384. KEEP-BOTH (Confidence: 50%)

**Castle A:** Compton Castle
- Location: 50.4667, -3.5833
- Country/County: England, Devon
- Type: fortified house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Compton_Castle_in_Devon_enh.jpg/500px-Compton_Castle_in_Devon_enh.jpg

**Castle B:** Hopton Castle  
- Location: 52.4056, -2.9306
- Country/County: England, Shropshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Hopton_Castle.jpg/500px-Hopton_Castle.jpg

**Metrics:**
- Name similarity: 85.7%
- Distance: 220.289km
- Same image: No

**Reasons:** High name similarity (85.7%)

**Recommendation:** **KEEP-BOTH**

---

### 385. KEEP-BOTH (Confidence: 50%)

**Castle A:** Compton Castle
- Location: 50.4667, -3.5833
- Country/County: England, Devon
- Type: fortified house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Compton_Castle_in_Devon_enh.jpg/500px-Compton_Castle_in_Devon_enh.jpg

**Castle B:** Bampton Castle  
- Location: 50.9833, -3.2333
- Country/County: England, Devon
- Type: castle
- Image: https://img.castlecore.uk/bampton-castle.jpg

**Metrics:**
- Name similarity: 85.7%
- Distance: 62.503km
- Same image: No

**Reasons:** High name similarity (85.7%)

**Recommendation:** **KEEP-BOTH**

---

### 386. KEEP-BOTH (Confidence: 50%)

**Castle A:** Compton Castle
- Location: 50.4667, -3.5833
- Country/County: England, Devon
- Type: fortified house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Compton_Castle_in_Devon_enh.jpg/500px-Compton_Castle_in_Devon_enh.jpg

**Castle B:** Somerton Castle  
- Location: 53.1333, -0.3
- Country/County: England, Lincolnshire
- Type: castle
- Image: https://img.castlecore.uk/somerton-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 372.600km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 387. KEEP-BOTH (Confidence: 50%)

**Castle A:** Compton Castle
- Location: 50.4667, -3.5833
- Country/County: England, Devon
- Type: fortified house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Compton_Castle_in_Devon_enh.jpg/500px-Compton_Castle_in_Devon_enh.jpg

**Castle B:** Plympton Castle  
- Location: 50.387, -4.0576
- Country/County: England, Devon
- Type: castle
- Image: https://img.castlecore.uk/plympton-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 34.748km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 388. KEEP-BOTH (Confidence: 50%)

**Castle A:** Trematon Castle
- Location: 50.4028, -4.2583
- Country/County: England, Cornwall
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Keep%2C_Trematon_Castle_-_geograph.org.uk_-_1192900.jpg/500px-Keep%2C_Trematon_Castle_-_geograph.org.uk_-_1192900.jpg

**Castle B:** Crediton Castle  
- Location: 50.792, -3.652
- Country/County: England, Devon
- Type: castle
- Image: https://img.castlecore.uk/crediton-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 60.862km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 389. KEEP-BOTH (Confidence: 50%)

**Castle A:** Lulworth Castle
- Location: 50.6356, -2.1714
- Country/County: England, Dorset
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Lulworth_Castle_%281937%29.jpg/500px-Lulworth_Castle_%281937%29.jpg

**Castle B:** Naworth Castle  
- Location: 54.9333, -2.6667
- Country/County: England, Cumbria
- Type: castle
- Image: https://img.castlecore.uk/naworth-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 479.039km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 390. KEEP-BOTH (Confidence: 50%)

**Castle A:** Lulworth Castle
- Location: 50.6356, -2.1714
- Country/County: England, Dorset
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Lulworth_Castle_%281937%29.jpg/500px-Lulworth_Castle_%281937%29.jpg

**Castle B:** Glanworth Castle  
- Location: 52.187, -8.371
- Country/County: Ireland, County Cork
- Type: castle
- Image: https://img.castlecore.uk/glanworth-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 463.100km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 391. KEEP-BOTH (Confidence: 50%)

**Castle A:** Longtown Castle
- Location: 51.9656, -2.9872
- Country/County: England, Herefordshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Longtown_Castle_-_geograph.org.uk_-_392612.jpg/500px-Longtown_Castle_-_geograph.org.uk_-_392612.jpg

**Castle B:** Monkstown Castle  
- Location: 51.836, -8.355
- Country/County: Ireland, County Cork
- Type: castle
- Image: https://img.castlecore.uk/monkstown-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 368.483km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 392. KEEP-BOTH (Confidence: 50%)

**Castle A:** Longtown Castle
- Location: 51.9656, -2.9872
- Country/County: England, Herefordshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Longtown_Castle_-_geograph.org.uk_-_392612.jpg/500px-Longtown_Castle_-_geograph.org.uk_-_392612.jpg

**Castle B:** Johnstown Castle  
- Location: 52.293, -6.5
- Country/County: Ireland, County Wexford
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Johnstown_Castle%2C_Wexford.jpg/500px-Johnstown_Castle%2C_Wexford.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 242.508km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 393. KEEP-BOTH (Confidence: 50%)

**Castle A:** Longtown Castle
- Location: 51.9656, -2.9872
- Country/County: England, Herefordshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Longtown_Castle_-_geograph.org.uk_-_392612.jpg/500px-Longtown_Castle_-_geograph.org.uk_-_392612.jpg

**Castle B:** Longford Castle  
- Location: 53.726, -7.798
- Country/County: Ireland, County Longford
- Type: castle
- Image: https://img.castlecore.uk/longford-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 377.636km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 394. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dudley Castle
- Location: 52.5092, -2.0875
- Country/County: England, West Midlands
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Dudley_Castle%2C_England%2C_Aerial_View.jpg/500px-Dudley_Castle%2C_England%2C_Aerial_View.jpg

**Castle B:** Lumley Castle  
- Location: 54.8333, -1.5167
- Country/County: England, County Durham
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/c/ca/Lumley_Castle_Hotel_-_geograph.org.uk_-_1188877.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 261.147km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 395. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dudley Castle
- Location: 52.5092, -2.0875
- Country/County: England, West Midlands
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Dudley_Castle%2C_England%2C_Aerial_View.jpg/500px-Dudley_Castle%2C_England%2C_Aerial_View.jpg

**Castle B:** Sudeley Castle  
- Location: 51.9397, -1.9442
- Country/County: England, Gloucestershire
- Type: castle
- Image: https://img.castlecore.uk/sudeley-castle.jpg

**Metrics:**
- Name similarity: 85.7%
- Distance: 64.073km
- Same image: No

**Reasons:** High name similarity (85.7%)

**Recommendation:** **KEEP-BOTH**

---

### 396. KEEP-BOTH (Confidence: 50%)

**Castle A:** Stafford Castle
- Location: 52.7956, -2.1375
- Country/County: England, Staffordshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Stafford_Castle_%28September_2020%29.jpg/500px-Stafford_Castle_%28September_2020%29.jpg

**Castle B:** Clifford Castle  
- Location: 52.087, -3.109
- Country/County: England, Herefordshire
- Type: castle
- Image: https://img.castlecore.uk/clifford-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 102.684km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 397. KEEP-BOTH (Confidence: 50%)

**Castle A:** Stafford Castle
- Location: 52.7956, -2.1375
- Country/County: England, Staffordshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Stafford_Castle_%28September_2020%29.jpg/500px-Stafford_Castle_%28September_2020%29.jpg

**Castle B:** Strangford Castle  
- Location: 54.369, -5.655
- Country/County: Ireland, County Down
- Type: tower house
- Image: https://img.castlecore.uk/strangford-castle.jpg

**Metrics:**
- Name similarity: 82.4%
- Distance: 290.676km
- Same image: No

**Reasons:** High name similarity (82.4%)

**Recommendation:** **KEEP-BOTH**

---

### 398. KEEP-BOTH (Confidence: 50%)

**Castle A:** Clun Castle
- Location: 52.4236, -3.0372
- Country/County: England, Shropshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Clun_Castle_02.jpg/500px-Clun_Castle_02.jpg

**Castle B:** Glin Castle  
- Location: 52.567, -9.29
- Country/County: Ireland, County Limerick
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Glin_Castle.jpg/500px-Glin_Castle.jpg

**Metrics:**
- Name similarity: 81.8%
- Distance: 423.472km
- Same image: No

**Reasons:** High name similarity (81.8%)

**Recommendation:** **KEEP-BOTH**

---

### 399. KEEP-BOTH (Confidence: 50%)

**Castle A:** Clun Castle
- Location: 52.4236, -3.0372
- Country/County: England, Shropshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Clun_Castle_02.jpg/500px-Clun_Castle_02.jpg

**Castle B:** Cluny Castle  
- Location: 57.147, -2.536
- Country/County: Scotland, Aberdeenshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Cluny_Castle_front_view.jpg/500px-Cluny_Castle_front_view.jpg

**Metrics:**
- Name similarity: 91.7%
- Distance: 526.196km
- Same image: No

**Reasons:** High name similarity (91.7%)

**Recommendation:** **KEEP-BOTH**

---

### 400. KEEP-BOTH (Confidence: 50%)

**Castle A:** Clun Castle
- Location: 52.4236, -3.0372
- Country/County: England, Shropshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Clun_Castle_02.jpg/500px-Clun_Castle_02.jpg

**Castle B:** Clunie Castle  
- Location: 56.618, -3.428
- Country/County: Scotland, Perthshire
- Type: castle
- Image: https://img.castlecore.uk/clunie-castle.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 467.075km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 401. KEEP-BOTH (Confidence: 50%)

**Castle A:** Hopton Castle
- Location: 52.4056, -2.9306
- Country/County: England, Shropshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Hopton_Castle.jpg/500px-Hopton_Castle.jpg

**Castle B:** Whorlton Castle  
- Location: 54.4167, -1.25
- Country/County: England, North Yorkshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Whorlton_Castle_gatehouse_exterior.jpg/500px-Whorlton_Castle_gatehouse_exterior.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 249.813km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 402. KEEP-BOTH (Confidence: 50%)

**Castle A:** Hopton Castle
- Location: 52.4056, -2.9306
- Country/County: England, Shropshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Hopton_Castle.jpg/500px-Hopton_Castle.jpg

**Castle B:** Halton Castle  
- Location: 53.3333, -2.6833
- Country/County: England, Cheshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Halton_Castle_%285%29.JPG/500px-Halton_Castle_%285%29.JPG

**Metrics:**
- Name similarity: 84.6%
- Distance: 104.482km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 403. KEEP-BOTH (Confidence: 50%)

**Castle A:** Hopton Castle
- Location: 52.4056, -2.9306
- Country/County: England, Shropshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Hopton_Castle.jpg/500px-Hopton_Castle.jpg

**Castle B:** Hylton Castle  
- Location: 54.9167, -1.45
- Country/County: England, Tyne and Wear
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Hylton_Castle_3.jpg/500px-Hylton_Castle_3.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 295.756km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 404. KEEP-BOTH (Confidence: 50%)

**Castle A:** Hopton Castle
- Location: 52.4056, -2.9306
- Country/County: England, Shropshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Hopton_Castle.jpg/500px-Hopton_Castle.jpg

**Castle B:** Morton Castle  
- Location: 55.272, -3.692
- Country/County: Scotland, Dumfries and Galloway
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Morton_Castle.jpg/500px-Morton_Castle.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 322.615km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 405. KEEP-BOTH (Confidence: 50%)

**Castle A:** Hopton Castle
- Location: 52.4056, -2.9306
- Country/County: England, Shropshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Hopton_Castle.jpg/500px-Hopton_Castle.jpg

**Castle B:** Upton Castle  
- Location: 51.714, -4.901
- Country/County: Wales, Pembrokeshire
- Type: castle
- Image: https://img.castlecore.uk/upton-castle.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 155.108km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 406. KEEP-BOTH (Confidence: 50%)

**Castle A:** Whittington Castle
- Location: 52.8528, -2.9953
- Country/County: England, Shropshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Whittington_Castle%2C_Shropshire%2C_UK.jpg/500px-Whittington_Castle%2C_Shropshire%2C_UK.jpg

**Castle B:** Huntington Castle  
- Location: 52.638, -6.718
- Country/County: Ireland, County Carlow
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Huntington-castle-herefordshire-august-2018.jpg/500px-Huntington-castle-herefordshire-august-2018.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 251.692km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 407. KEEP-BOTH (Confidence: 50%)

**Castle A:** Astley Castle
- Location: 52.5139, -1.5153
- Country/County: England, Warwickshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Astley_Castle_Front_Elevation.JPG/500px-Astley_Castle_Front_Elevation.JPG

**Castle B:** Chartley Castle  
- Location: 52.8667, -1.8833
- Country/County: England, Staffordshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Chartley_Castle%2C_2010.jpg/500px-Chartley_Castle%2C_2010.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 46.412km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 408. KEEP-BOTH (Confidence: 50%)

**Castle A:** Burgh Castle
- Location: 52.5847, 1.6442
- Country/County: England, Norfolk
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Burgh_Castle_SS_Peter_and_Paul.jpg/500px-Burgh_Castle_SS_Peter_and_Paul.jpg

**Castle B:** Burleigh Castle  
- Location: 56.214, -3.362
- Country/County: Scotland, Perth and Kinross
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/BurleighCastle.jpg/500px-BurleighCastle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 517.287km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 409. KEEP-BOTH (Confidence: 50%)

**Castle A:** Burgh Castle
- Location: 52.5847, 1.6442
- Country/County: England, Norfolk
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Burgh_Castle_SS_Peter_and_Paul.jpg/500px-Burgh_Castle_SS_Peter_and_Paul.jpg

**Castle B:** Burt Castle  
- Location: 55.071, -7.426
- Country/County: Ireland, County Donegal
- Type: castle
- Image: https://img.castlecore.uk/burt-castle.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 655.686km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 410. KEEP-BOTH (Confidence: 50%)

**Castle A:** Burgh Castle
- Location: 52.5847, 1.6442
- Country/County: England, Norfolk
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Burgh_Castle_SS_Peter_and_Paul.jpg/500px-Burgh_Castle_SS_Peter_and_Paul.jpg

**Castle B:** Bargy Castle  
- Location: 52.222, -6.561
- Country/County: Ireland, County Wexford
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Bargy_Castle_-_geograph.org.uk_-_1239917.jpg/500px-Bargy_Castle_-_geograph.org.uk_-_1239917.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 557.795km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 411. KEEP-BOTH (Confidence: 50%)

**Castle A:** Burgh Castle
- Location: 52.5847, 1.6442
- Country/County: England, Norfolk
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Burgh_Castle_SS_Peter_and_Paul.jpg/500px-Burgh_Castle_SS_Peter_and_Paul.jpg

**Castle B:** Duagh Castle  
- Location: 52.378, -9.558
- Country/County: Ireland, County Kerry
- Type: tower house
- Image: https://img.castlecore.uk/duagh-castle.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 758.197km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 412. KEEP-BOTH (Confidence: 50%)

**Castle A:** Burgh Castle
- Location: 52.5847, 1.6442
- Country/County: England, Norfolk
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Burgh_Castle_SS_Peter_and_Paul.jpg/500px-Burgh_Castle_SS_Peter_and_Paul.jpg

**Castle B:** Roxburgh Castle  
- Location: 55.588, -2.508
- Country/County: Scotland, Scottish Borders
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/0/01/Castles_old_and_new_-_geograph.org.uk_-_163364.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 429.806km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 413. KEEP-BOTH (Confidence: 50%)

**Castle A:** Clare Castle
- Location: 52.0781, 0.5756
- Country/County: England, Suffolk
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Clare_Castle_Motte.jpg/500px-Clare_Castle_Motte.jpg

**Castle B:** Claig Castle  
- Location: 55.869, -5.77
- Country/County: Scotland, Argyll and Bute
- Type: castle
- Image: https://img.castlecore.uk/claig-castle.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 591.084km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 414. KEEP-BOTH (Confidence: 50%)

**Castle A:** Clare Castle
- Location: 52.0781, 0.5756
- Country/County: England, Suffolk
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Clare_Castle_Motte.jpg/500px-Clare_Castle_Motte.jpg

**Castle B:** Clarecastle Tower  
- Location: 52.822, -8.961
- Country/County: Ireland, County Clare
- Type: tower house
- Image: https://img.castlecore.uk/clarecastle-tower.jpg

**Metrics:**
- Name similarity: 91.7%
- Distance: 651.056km
- Same image: No

**Reasons:** High name similarity (91.7%)

**Recommendation:** **KEEP-BOTH**

---

### 415. KEEP-BOTH (Confidence: 50%)

**Castle A:** Clare Castle
- Location: 52.0781, 0.5756
- Country/County: England, Suffolk
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Clare_Castle_Motte.jpg/500px-Clare_Castle_Motte.jpg

**Castle B:** Aclare Castle  
- Location: 53.978, -8.758
- Country/County: Ireland, County Sligo
- Type: tower house
- Image: https://img.castlecore.uk/aclare-castle.jpg

**Metrics:**
- Name similarity: 92.3%
- Distance: 658.381km
- Same image: No

**Reasons:** High name similarity (92.3%)

**Recommendation:** **KEEP-BOTH**

---

### 416. KEEP-BOTH (Confidence: 50%)

**Castle A:** Hadleigh Castle
- Location: 51.545, 0.6069
- Country/County: England, Essex
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Aerial_view_of_Hadleigh_Castle_and_Country_Park_-_geograph.org.uk_-_1563595.jpg/500px-Aerial_view_of_Hadleigh_Castle_and_Country_Park_-_geograph.org.uk_-_1563595.jpg

**Castle B:** Gidleigh Castle  
- Location: 50.691, -3.866
- Country/County: England, Devon
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Gidleigh_Castle.jpg/500px-Gidleigh_Castle.jpg

**Metrics:**
- Name similarity: 86.7%
- Distance: 326.265km
- Same image: No

**Reasons:** High name similarity (86.7%)

**Recommendation:** **KEEP-BOTH**

---

### 417. KEEP-BOTH (Confidence: 50%)

**Castle A:** Hadleigh Castle
- Location: 51.545, 0.6069
- Country/County: England, Essex
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Aerial_view_of_Hadleigh_Castle_and_Country_Park_-_geograph.org.uk_-_1563595.jpg/500px-Aerial_view_of_Hadleigh_Castle_and_Country_Park_-_geograph.org.uk_-_1563595.jpg

**Castle B:** Burleigh Castle  
- Location: 56.214, -3.362
- Country/County: Scotland, Perth and Kinross
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/BurleighCastle.jpg/500px-BurleighCastle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 580.474km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 418. KEEP-BOTH (Confidence: 50%)

**Castle A:** Auckland Castle
- Location: 54.6672, -1.6758
- Country/County: England, County Durham
- Type: palace
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Auckland_Castle_-_geograph.org.uk_-_1896444.jpg/500px-Auckland_Castle_-_geograph.org.uk_-_1896444.jpg

**Castle B:** Buckland Abbey  
- Location: 50.4517, -4.1583
- Country/County: England, Devon
- Type: abbey
- Image: https://img.castlecore.uk/buckland-abbey.jpg

**Metrics:**
- Name similarity: 87.5%
- Distance: 497.796km
- Same image: No

**Reasons:** High name similarity (87.5%)

**Recommendation:** **KEEP-BOTH**

---

### 419. KEEP-BOTH (Confidence: 50%)

**Castle A:** Edlingham Castle
- Location: 55.35, -1.8333
- Country/County: England, Northumberland
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Edlingham_Castle_-_Northumberland_-_England_-_2004-10-31.jpg/500px-Edlingham_Castle_-_Northumberland_-_England_-_2004-10-31.jpg

**Castle B:** Mettingham Castle  
- Location: 52.4167, 1.4833
- Country/County: England, Suffolk
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Entrance_to_Mettingham_Castle_-_geograph.org.uk_-_984718.jpg/500px-Entrance_to_Mettingham_Castle_-_geograph.org.uk_-_984718.jpg

**Metrics:**
- Name similarity: 82.4%
- Distance: 391.868km
- Same image: No

**Reasons:** High name similarity (82.4%)

**Recommendation:** **KEEP-BOTH**

---

### 420. KEEP-BOTH (Confidence: 50%)

**Castle A:** Ford Castle
- Location: 55.6369, -2.1069
- Country/County: England, Northumberland
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Ford_Castle_-_geograph.org.uk_-_354895.jpg/500px-Ford_Castle_-_geograph.org.uk_-_354895.jpg

**Castle B:** Fore Castle  
- Location: 53.69, -7.186
- Country/County: Ireland, County Westmeath
- Type: castle
- Image: https://img.castlecore.uk/fore-castle.jpg

**Metrics:**
- Name similarity: 90.9%
- Distance: 391.725km
- Same image: No

**Reasons:** High name similarity (90.9%)

**Recommendation:** **KEEP-BOTH**

---

### 421. KEEP-BOTH (Confidence: 50%)

**Castle A:** Ford Castle
- Location: 55.6369, -2.1069
- Country/County: England, Northumberland
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Ford_Castle_-_geograph.org.uk_-_354895.jpg/500px-Ford_Castle_-_geograph.org.uk_-_354895.jpg

**Castle B:** Tor Castle  
- Location: 56.8667, -5.0833
- Country/County: Scotland, Highland
- Type: castle
- Image: https://img.castlecore.uk/tor-castle.jpg

**Metrics:**
- Name similarity: 81.8%
- Distance: 229.108km
- Same image: No

**Reasons:** High name similarity (81.8%)

**Recommendation:** **KEEP-BOTH**

---

### 422. KEEP-BOTH (Confidence: 50%)

**Castle A:** Ford Castle
- Location: 55.6369, -2.1069
- Country/County: England, Northumberland
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Ford_Castle_-_geograph.org.uk_-_354895.jpg/500px-Ford_Castle_-_geograph.org.uk_-_354895.jpg

**Castle B:** Castle Ward  
- Location: 54.384, -5.583
- Country/County: Ireland, County Down
- Type: castle
- Image: https://img.castlecore.uk/castle-ward.jpg

**Metrics:**
- Name similarity: 81.8%
- Distance: 261.746km
- Same image: No

**Reasons:** High name similarity (81.8%)

**Recommendation:** **KEEP-BOTH**

---

### 423. KEEP-BOTH (Confidence: 50%)

**Castle A:** Aydon Castle
- Location: 55.0167, -1.9333
- Country/County: England, Northumberland
- Type: fortified house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Aydon_Castle_2.jpg/500px-Aydon_Castle_2.jpg

**Castle B:** Alton Castle  
- Location: 52.964, -1.886
- Country/County: England, Staffordshire
- Type: castle
- Image: https://img.castlecore.uk/alton-castle.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 228.271km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 424. KEEP-BOTH (Confidence: 50%)

**Castle A:** Mitford Castle
- Location: 55.1667, -1.7333
- Country/County: England, Northumberland
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Mitford_Castle.jpg/500px-Mitford_Castle.jpg

**Castle B:** Clifford Castle  
- Location: 52.087, -3.109
- Country/County: England, Herefordshire
- Type: castle
- Image: https://img.castlecore.uk/clifford-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 354.241km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 425. KEEP-BOTH (Confidence: 50%)

**Castle A:** Mitford Castle
- Location: 55.1667, -1.7333
- Country/County: England, Northumberland
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Mitford_Castle.jpg/500px-Mitford_Castle.jpg

**Castle B:** Hertford Castle  
- Location: 51.798, -0.078
- Country/County: England, Hertfordshire
- Type: castle
- Image: https://img.castlecore.uk/hertford-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 390.238km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 426. KEEP-BOTH (Confidence: 50%)

**Castle A:** Egremont Castle
- Location: 54.4833, -3.5167
- Country/County: England, Cumbria
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Egremont_IMG_1323_-_panoramio.jpg/500px-Egremont_IMG_1323_-_panoramio.jpg

**Castle B:** Esslemont Castle  
- Location: 57.352, -2.026
- Country/County: Scotland, Aberdeenshire
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Esslemont_Castle_-_geograph.org.uk_-_1788260.jpg/500px-Esslemont_Castle_-_geograph.org.uk_-_1788260.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 332.213km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 427. KEEP-BOTH (Confidence: 50%)

**Castle A:** Whorlton Castle
- Location: 54.4167, -1.25
- Country/County: England, North Yorkshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Whorlton_Castle_gatehouse_exterior.jpg/500px-Whorlton_Castle_gatehouse_exterior.jpg

**Castle B:** Halton Castle  
- Location: 53.3333, -2.6833
- Country/County: England, Cheshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Halton_Castle_%285%29.JPG/500px-Halton_Castle_%285%29.JPG

**Metrics:**
- Name similarity: 80.0%
- Distance: 152.771km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 428. KEEP-BOTH (Confidence: 50%)

**Castle A:** Whorlton Castle
- Location: 54.4167, -1.25
- Country/County: England, North Yorkshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Whorlton_Castle_gatehouse_exterior.jpg/500px-Whorlton_Castle_gatehouse_exterior.jpg

**Castle B:** Hylton Castle  
- Location: 54.9167, -1.45
- Country/County: England, Tyne and Wear
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Hylton_Castle_3.jpg/500px-Hylton_Castle_3.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 57.066km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 429. KEEP-BOTH (Confidence: 50%)

**Castle A:** Whorlton Castle
- Location: 54.4167, -1.25
- Country/County: England, North Yorkshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Whorlton_Castle_gatehouse_exterior.jpg/500px-Whorlton_Castle_gatehouse_exterior.jpg

**Castle B:** Wilton Castle  
- Location: 54.5333, -1.5333
- Country/County: England, North Yorkshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Winter_view_of_Wilton_Castle_-_geograph.org.uk_-_1169638.jpg/500px-Winter_view_of_Wilton_Castle_-_geograph.org.uk_-_1169638.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 22.431km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 430. KEEP-BOTH (Confidence: 50%)

**Castle A:** Whorlton Castle
- Location: 54.4167, -1.25
- Country/County: England, North Yorkshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Whorlton_Castle_gatehouse_exterior.jpg/500px-Whorlton_Castle_gatehouse_exterior.jpg

**Castle B:** Morton Castle  
- Location: 55.272, -3.692
- Country/County: Scotland, Dumfries and Galloway
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Morton_Castle.jpg/500px-Morton_Castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 182.989km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 431. KEEP-BOTH (Confidence: 50%)

**Castle A:** Sandal Castle
- Location: 53.6667, -1.4833
- Country/County: England, West Yorkshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/SandalCastleMotte.jpg/500px-SandalCastleMotte.jpg

**Castle B:** Kendal Castle  
- Location: 54.3272, -2.7394
- Country/County: England, Cumbria
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Kendal_Castle_From_Above%2C_Sept_2015.jpg/500px-Kendal_Castle_From_Above%2C_Sept_2015.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 110.156km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 432. KEEP-BOTH (Confidence: 50%)

**Castle A:** Harewood Castle
- Location: 53.8833, -1.5333
- Country/County: England, West Yorkshire
- Type: castle
- Image: https://img.castlecore.uk/harewood-castle.jpg

**Castle B:** Saltwood Castle  
- Location: 51.082, 1.083
- Country/County: England, Kent
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Saltwood_Castle_and_wall.JPG/500px-Saltwood_Castle_and_wall.JPG

**Metrics:**
- Name similarity: 80.0%
- Distance: 358.293km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 433. KEEP-BOTH (Confidence: 50%)

**Castle A:** Harewood Castle
- Location: 53.8833, -1.5333
- Country/County: England, West Yorkshire
- Type: castle
- Image: https://img.castlecore.uk/harewood-castle.jpg

**Castle B:** Redwood Castle  
- Location: 52.907, -8.03
- Country/County: Ireland, County Tipperary
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Redwood_Castle.jpg/500px-Redwood_Castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 444.054km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 434. KEEP-BOTH (Confidence: 50%)

**Castle A:** Harewood Castle
- Location: 53.8833, -1.5333
- Country/County: England, West Yorkshire
- Type: castle
- Image: https://img.castlecore.uk/harewood-castle.jpg

**Castle B:** Hereford Castle  
- Location: 52.0533, -2.715
- Country/County: England, Herefordshire
- Type: castle
- Image: https://img.castlecore.uk/hereford-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 218.325km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 435. KEEP-BOTH (Confidence: 50%)

**Castle A:** Halton Castle
- Location: 53.3333, -2.6833
- Country/County: England, Cheshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Halton_Castle_%285%29.JPG/500px-Halton_Castle_%285%29.JPG

**Castle B:** Hylton Castle  
- Location: 54.9167, -1.45
- Country/County: England, Tyne and Wear
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Hylton_Castle_3.jpg/500px-Hylton_Castle_3.jpg

**Metrics:**
- Name similarity: 92.3%
- Distance: 193.532km
- Same image: No

**Reasons:** High name similarity (92.3%)

**Recommendation:** **KEEP-BOTH**

---

### 436. KEEP-BOTH (Confidence: 50%)

**Castle A:** Halton Castle
- Location: 53.3333, -2.6833
- Country/County: England, Cheshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Halton_Castle_%285%29.JPG/500px-Halton_Castle_%285%29.JPG

**Castle B:** Wilton Castle  
- Location: 54.5333, -1.5333
- Country/County: England, North Yorkshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Winter_view_of_Wilton_Castle_-_geograph.org.uk_-_1169638.jpg/500px-Winter_view_of_Wilton_Castle_-_geograph.org.uk_-_1169638.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 153.201km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 437. KEEP-BOTH (Confidence: 50%)

**Castle A:** Halton Castle
- Location: 53.3333, -2.6833
- Country/County: England, Cheshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Halton_Castle_%285%29.JPG/500px-Halton_Castle_%285%29.JPG

**Castle B:** Hallaton Castle  
- Location: 52.55, -0.8333
- Country/County: England, Leicestershire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Hallaton_Castle_earthworks.jpg/500px-Hallaton_Castle_earthworks.jpg

**Metrics:**
- Name similarity: 86.7%
- Distance: 151.498km
- Same image: No

**Reasons:** High name similarity (86.7%)

**Recommendation:** **KEEP-BOTH**

---

### 438. KEEP-BOTH (Confidence: 50%)

**Castle A:** Halton Castle
- Location: 53.3333, -2.6833
- Country/County: England, Cheshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Halton_Castle_%285%29.JPG/500px-Halton_Castle_%285%29.JPG

**Castle B:** Haughton Castle  
- Location: 55.043, -2.185
- Country/County: England, Northumberland
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Haughton_Castle.jpg/500px-Haughton_Castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 192.853km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 439. KEEP-BOTH (Confidence: 50%)

**Castle A:** Halton Castle
- Location: 53.3333, -2.6833
- Country/County: England, Cheshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Halton_Castle_%285%29.JPG/500px-Halton_Castle_%285%29.JPG

**Castle B:** Alton Castle  
- Location: 52.964, -1.886
- Country/County: England, Staffordshire
- Type: castle
- Image: https://img.castlecore.uk/alton-castle.jpg

**Metrics:**
- Name similarity: 92.3%
- Distance: 67.181km
- Same image: No

**Reasons:** High name similarity (92.3%)

**Recommendation:** **KEEP-BOTH**

---

### 440. KEEP-BOTH (Confidence: 50%)

**Castle A:** Halton Castle
- Location: 53.3333, -2.6833
- Country/County: England, Cheshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Halton_Castle_%285%29.JPG/500px-Halton_Castle_%285%29.JPG

**Castle B:** Dalton Castle  
- Location: 54.154, -3.18
- Country/County: England, Cumbria
- Type: castle
- Image: https://img.castlecore.uk/dalton-castle.jpg

**Metrics:**
- Name similarity: 92.3%
- Distance: 96.926km
- Same image: No

**Reasons:** High name similarity (92.3%)

**Recommendation:** **KEEP-BOTH**

---

### 441. KEEP-BOTH (Confidence: 50%)

**Castle A:** Norton Priory
- Location: 53.35, -2.5667
- Country/County: England, Cheshire
- Type: abbey
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Norton_Priory.jpg/500px-Norton_Priory.jpg

**Castle B:** Morton Castle  
- Location: 55.272, -3.692
- Country/County: Scotland, Dumfries and Galloway
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Morton_Castle.jpg/500px-Morton_Castle.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 225.832km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 442. KEEP-BOTH (Confidence: 50%)

**Castle A:** Thornbury Castle
- Location: 51.6094, -2.5233
- Country/County: England, Gloucestershire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Thornbury.castle.west.front.arp.750pix.jpg/500px-Thornbury.castle.west.front.arp.750pix.jpg

**Castle B:** Hornby Castle  
- Location: 54.121, -2.631
- Country/County: England, Lancashire
- Type: castle
- Image: https://img.castlecore.uk/hornby-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 279.371km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 443. KEEP-BOTH (Confidence: 50%)

**Castle A:** Mingary Castle
- Location: 56.6667, -6.1
- Country/County: Scotland, Highland
- Type: castle
- Image: https://img.castlecore.uk/mingary-castle-3.jpg

**Castle B:** Minard Castle  
- Location: 52.121, -10.072
- Country/County: Ireland, County Kerry
- Type: castle
- Image: https://img.castlecore.uk/minard-castle.jpg

**Metrics:**
- Name similarity: 85.7%
- Distance: 566.882km
- Same image: No

**Reasons:** High name similarity (85.7%)

**Recommendation:** **KEEP-BOTH**

---

### 444. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dunbeath Castle
- Location: 58.25, -3.4333
- Country/County: Scotland, Highland
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Dunbeath_Castle.jpg/500px-Dunbeath_Castle.jpg

**Castle B:** Dunbar Castle  
- Location: 56, -2.5167
- Country/County: Scotland, East Lothian
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Dunbar_Harbour_and_Castle%2C_1987.jpg/500px-Dunbar_Harbour_and_Castle%2C_1987.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 256.226km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 445. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dunbeath Castle
- Location: 58.25, -3.4333
- Country/County: Scotland, Highland
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Dunbeath_Castle.jpg/500px-Dunbeath_Castle.jpg

**Castle B:** Neath Castle  
- Location: 51.661, -3.806
- Country/County: England, Neath Port Talbot
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Neath_Castle_-_geograph.org.uk_-_42391.jpg/500px-Neath_Castle_-_geograph.org.uk_-_42391.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 733.047km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 446. KEEP-BOTH (Confidence: 50%)

**Castle A:** Duffus Castle
- Location: 57.6833, -3.3833
- Country/County: Scotland, Moray
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Duffuscastle4.jpg/500px-Duffuscastle4.jpg

**Castle B:** Rufus Castle  
- Location: 50.543, -2.431
- Country/County: England, Dorset
- Type: castle
- Image: https://img.castlecore.uk/rufus-castle.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 796.367km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 447. KEEP-BOTH (Confidence: 50%)

**Castle A:** Auchindoun Castle
- Location: 57.3833, -3.2167
- Country/County: Scotland, Moray
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Auchindoun_Castle_-_geograph.org.uk_-_1369160.jpg/500px-Auchindoun_Castle_-_geograph.org.uk_-_1369160.jpg

**Castle B:** Auchindoir Castle  
- Location: 57.329, -2.838
- Country/County: Scotland, Aberdeenshire
- Type: castle
- Image: https://img.castlecore.uk/auchindoir-castle.jpg

**Metrics:**
- Name similarity: 88.2%
- Distance: 23.503km
- Same image: No

**Reasons:** High name similarity (88.2%)

**Recommendation:** **KEEP-BOTH**

---

### 448. KEEP-BOTH (Confidence: 50%)

**Castle A:** Gylen Castle
- Location: 56.3833, -5.6667
- Country/County: Scotland, Argyll and Bute
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Gylen_Castle%2C_Kerrera_-_geograph.org.uk_-_7637715.jpg/500px-Gylen_Castle%2C_Kerrera_-_geograph.org.uk_-_7637715.jpg

**Castle B:** Glin Castle  
- Location: 52.567, -9.29
- Country/County: Ireland, County Limerick
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Glin_Castle.jpg/500px-Glin_Castle.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 484.488km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 449. KEEP-BOTH (Confidence: 50%)

**Castle A:** Inveraray Castle
- Location: 56.2333, -5.0833
- Country/County: Scotland, Argyll and Bute
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/20210815_Inverary_Castle-8848.jpg/500px-20210815_Inverary_Castle-8848.jpg

**Castle B:** Invergarry Castle  
- Location: 57.045, -5.023
- Country/County: Scotland, Highland
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/6/68/Invergarry_Castle_-_geograph.org.uk_-_1104838.jpg

**Metrics:**
- Name similarity: 88.2%
- Distance: 90.332km
- Same image: No

**Reasons:** High name similarity (88.2%)

**Recommendation:** **KEEP-BOTH**

---

### 450. KEEP-BOTH (Confidence: 50%)

**Castle A:** Sween Castle
- Location: 55.9833, -5.6333
- Country/County: Scotland, Argyll and Bute
- Type: castle
- Image: https://img.castlecore.uk/sween-castle.jpg

**Castle B:** Hen's Castle  
- Location: 53.51, -9.75
- Country/County: Ireland, County Galway
- Type: tower house
- Image: https://img.castlecore.uk/hen-s-castle.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 381.245km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 451. KEEP-BOTH (Confidence: 50%)

**Castle A:** Sween Castle
- Location: 55.9833, -5.6333
- Country/County: Scotland, Argyll and Bute
- Type: castle
- Image: https://img.castlecore.uk/sween-castle.jpg

**Castle B:** Skreen Castle  
- Location: 54.228, -8.618
- Country/County: Ireland, County Sligo
- Type: tower house
- Image: https://img.castlecore.uk/skreen-castle.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 272.243km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 452. KEEP-BOTH (Confidence: 50%)

**Castle A:** Sween Castle
- Location: 55.9833, -5.6333
- Country/County: Scotland, Argyll and Bute
- Type: castle
- Image: https://img.castlecore.uk/sween-castle.jpg

**Castle B:** Shaen Castle  
- Location: 53.028, -7.428
- Country/County: Ireland, County Laois
- Type: castle
- Image: https://img.castlecore.uk/shaen-castle.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 348.414km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 453. KEEP-BOTH (Confidence: 50%)

**Castle A:** Tarbert Castle
- Location: 55.8667, -5.4
- Country/County: Scotland, Argyll and Bute
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Argyll_and_Bute_-_Tarbert_Castle_-_20220920131143.jpg/500px-Argyll_and_Bute_-_Tarbert_Castle_-_20220920131143.jpg

**Castle B:** Narberth Castle  
- Location: 51.7967, -4.7417
- Country/County: Wales, Pembrokeshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Narberth_castle_pembrokeshire.jpg/500px-Narberth_castle_pembrokeshire.jpg

**Metrics:**
- Name similarity: 86.7%
- Distance: 454.615km
- Same image: No

**Reasons:** High name similarity (86.7%)

**Recommendation:** **KEEP-BOTH**

---

### 454. KEEP-BOTH (Confidence: 50%)

**Castle A:** Balvaird Castle
- Location: 56.2833, -3.3167
- Country/County: Scotland, Perth and Kinross
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Balvaird_Castle_2018.jpg/500px-Balvaird_Castle_2018.jpg

**Castle B:** Belvoir Castle  
- Location: 52.8833, -0.7667
- Country/County: England, Leicestershire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Belvoir_Castle_-_geograph.org.uk_-_7667528.jpg/500px-Belvoir_Castle_-_geograph.org.uk_-_7667528.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 412.159km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 455. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dunbar Castle
- Location: 56, -2.5167
- Country/County: Scotland, East Lothian
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Dunbar_Harbour_and_Castle%2C_1987.jpg/500px-Dunbar_Harbour_and_Castle%2C_1987.jpg

**Castle B:** Dunboy Castle  
- Location: 51.647, -9.878
- Country/County: Ireland, County Cork
- Type: castle
- Image: https://img.castlecore.uk/dunboy-castle.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 683.214km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 456. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dunbar Castle
- Location: 56, -2.5167
- Country/County: Scotland, East Lothian
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Dunbar_Harbour_and_Castle%2C_1987.jpg/500px-Dunbar_Harbour_and_Castle%2C_1987.jpg

**Castle B:** Dungar Castle  
- Location: 52.918, -7.748
- Country/County: Ireland, County Tipperary
- Type: tower house
- Image: https://img.castlecore.uk/dungar-castle.jpg

**Metrics:**
- Name similarity: 92.3%
- Distance: 481.181km
- Same image: No

**Reasons:** High name similarity (92.3%)

**Recommendation:** **KEEP-BOTH**

---

### 457. KEEP-BOTH (Confidence: 50%)

**Castle A:** Fast Castle
- Location: 55.9167, -2.35
- Country/County: Scotland, Scottish Borders
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Fast_Castle_-_geograph.org.uk_-_365002.jpg/500px-Fast_Castle_-_geograph.org.uk_-_365002.jpg

**Castle B:** Rait Castle  
- Location: 57.506, -3.907
- Country/County: Scotland, Highland
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Rait_Castle.jpg/500px-Rait_Castle.jpg

**Metrics:**
- Name similarity: 81.8%
- Distance: 200.637km
- Same image: No

**Reasons:** High name similarity (81.8%)

**Recommendation:** **KEEP-BOTH**

---

### 458. KEEP-BOTH (Confidence: 50%)

**Castle A:** Usk Castle
- Location: 51.7, -2.9
- Country/County: Wales, Monmouthshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Garrison_Tower_and_sundial%2C_Usk_Castle_-_geograph.org.uk_-_1425960.jpg/500px-Garrison_Tower_and_sundial%2C_Usk_Castle_-_geograph.org.uk_-_1425960.jpg

**Castle B:** Tulsk Castle  
- Location: 53.788, -8.242
- Country/County: Ireland, County Roscommon
- Type: castle
- Image: https://img.castlecore.uk/tulsk-castle.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 427.863km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 459. KEEP-BOTH (Confidence: 50%)

**Castle A:** Usk Castle
- Location: 51.7, -2.9
- Country/County: Wales, Monmouthshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Garrison_Tower_and_sundial%2C_Usk_Castle_-_geograph.org.uk_-_1425960.jpg/500px-Garrison_Tower_and_sundial%2C_Usk_Castle_-_geograph.org.uk_-_1425960.jpg

**Castle B:** Puck Castle  
- Location: 53.252, -6.117
- Country/County: Ireland, County Dublin
- Type: tower house
- Image: https://img.castlecore.uk/puck-castle.jpg

**Metrics:**
- Name similarity: 81.8%
- Distance: 277.901km
- Same image: No

**Reasons:** High name similarity (81.8%)

**Recommendation:** **KEEP-BOTH**

---

### 460. KEEP-BOTH (Confidence: 50%)

**Castle A:** Picton Castle
- Location: 51.7833, -4.8667
- Country/County: Wales, Pembrokeshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/02_Picton_Castle_Pembrokeshire.JPG/500px-02_Picton_Castle_Pembrokeshire.JPG

**Castle B:** Witton Castle  
- Location: 54.6333, -1.8
- Country/County: England, County Durham
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Witton_Castle_-_geograph.org.uk_-_307577.jpg/500px-Witton_Castle_-_geograph.org.uk_-_307577.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 376.931km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 461. KEEP-BOTH (Confidence: 50%)

**Castle A:** Picton Castle
- Location: 51.7833, -4.8667
- Country/County: Wales, Pembrokeshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/02_Picton_Castle_Pembrokeshire.JPG/500px-02_Picton_Castle_Pembrokeshire.JPG

**Castle B:** Wilton Castle  
- Location: 54.5333, -1.5333
- Country/County: England, North Yorkshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Winter_view_of_Wilton_Castle_-_geograph.org.uk_-_1169638.jpg/500px-Winter_view_of_Wilton_Castle_-_geograph.org.uk_-_1169638.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 377.929km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 462. KEEP-BOTH (Confidence: 50%)

**Castle A:** Picton Castle
- Location: 51.7833, -4.8667
- Country/County: Wales, Pembrokeshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/02_Picton_Castle_Pembrokeshire.JPG/500px-02_Picton_Castle_Pembrokeshire.JPG

**Castle B:** Wiston Castle  
- Location: 51.8333, -4.8833
- Country/County: Wales, Pembrokeshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Wiston_Castle%2C_from_Cadw_information_board.jpg/500px-Wiston_Castle%2C_from_Cadw_information_board.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 5.676km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 463. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dunmore Castle
- Location: 52.5667, -7.3667
- Country/County: Ireland, County Waterford
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Dunmore_Castle%2C_Co._Galway.JPG/500px-Dunmore_Castle%2C_Co._Galway.JPG

**Castle B:** Oranmore Castle  
- Location: 53.269, -8.925
- Country/County: Ireland, County Galway
- Type: castle
- Image: https://img.castlecore.uk/oranmore-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 130.433km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 464. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dunmore Castle
- Location: 52.5667, -7.3667
- Country/County: Ireland, County Waterford
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Dunmore_Castle%2C_Co._Galway.JPG/500px-Dunmore_Castle%2C_Co._Galway.JPG

**Castle B:** Donore Castle  
- Location: 53.683, -6.41
- Country/County: Ireland, County Meath
- Type: tower house
- Image: https://img.castlecore.uk/donore-castle.jpg

**Metrics:**
- Name similarity: 85.7%
- Distance: 139.577km
- Same image: No

**Reasons:** High name similarity (85.7%)

**Recommendation:** **KEEP-BOTH**

---

### 465. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dunmore Castle
- Location: 52.5667, -7.3667
- Country/County: Ireland, County Waterford
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Dunmore_Castle%2C_Co._Galway.JPG/500px-Dunmore_Castle%2C_Co._Galway.JPG

**Castle B:** Dunure Castle  
- Location: 55.4, -4.75
- Country/County: Scotland, South Ayrshire
- Type: castle
- Image: https://img.castlecore.uk/dunure-castle.jpg

**Metrics:**
- Name similarity: 85.7%
- Distance: 358.448km
- Same image: No

**Reasons:** High name similarity (85.7%)

**Recommendation:** **KEEP-BOTH**

---

### 466. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dunmore Castle
- Location: 52.5667, -7.3667
- Country/County: Ireland, County Waterford
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Dunmore_Castle%2C_Co._Galway.JPG/500px-Dunmore_Castle%2C_Co._Galway.JPG

**Castle B:** Dunimarle Castle  
- Location: 56.0667, -3.5833
- Country/County: Scotland, Fife
- Type: castle
- Image: https://img.castlecore.uk/dunimarle-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 459.933km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 467. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dunmore Castle
- Location: 52.5667, -7.3667
- Country/County: Ireland, County Waterford
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Dunmore_Castle%2C_Co._Galway.JPG/500px-Dunmore_Castle%2C_Co._Galway.JPG

**Castle B:** Dunmoran Castle  
- Location: 54.235, -8.62
- Country/County: Ireland, County Sligo
- Type: tower house
- Image: https://img.castlecore.uk/dunmoran-castle.jpg

**Metrics:**
- Name similarity: 86.7%
- Distance: 203.256km
- Same image: No

**Reasons:** High name similarity (86.7%)

**Recommendation:** **KEEP-BOTH**

---

### 468. KEEP-BOTH (Confidence: 50%)

**Castle A:** Bowes Castle
- Location: 54.5167, -2.0167
- Country/County: England, County Durham
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Bowes_Castle_-_geograph.org.uk_-_1060655.jpg/500px-Bowes_Castle_-_geograph.org.uk_-_1060655.jpg

**Castle B:** Cowes Castle  
- Location: 50.7633, -1.2981
- Country/County: England, Isle of Wight
- Type: castle
- Image: https://img.castlecore.uk/cowes-castle.jpg

**Metrics:**
- Name similarity: 91.7%
- Distance: 420.160km
- Same image: No

**Reasons:** High name similarity (91.7%)

**Recommendation:** **KEEP-BOTH**

---

### 469. KEEP-BOTH (Confidence: 50%)

**Castle A:** Witton Castle
- Location: 54.6333, -1.8
- Country/County: England, County Durham
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Witton_Castle_-_geograph.org.uk_-_307577.jpg/500px-Witton_Castle_-_geograph.org.uk_-_307577.jpg

**Castle B:** Wilton Castle  
- Location: 54.5333, -1.5333
- Country/County: England, North Yorkshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Winter_view_of_Wilton_Castle_-_geograph.org.uk_-_1169638.jpg/500px-Winter_view_of_Wilton_Castle_-_geograph.org.uk_-_1169638.jpg

**Metrics:**
- Name similarity: 92.3%
- Distance: 20.470km
- Same image: No

**Reasons:** High name similarity (92.3%)

**Recommendation:** **KEEP-BOTH**

---

### 470. KEEP-BOTH (Confidence: 50%)

**Castle A:** Witton Castle
- Location: 54.6333, -1.8
- Country/County: England, County Durham
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Witton_Castle_-_geograph.org.uk_-_307577.jpg/500px-Witton_Castle_-_geograph.org.uk_-_307577.jpg

**Castle B:** Wiston Castle  
- Location: 51.8333, -4.8833
- Country/County: Wales, Pembrokeshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Wiston_Castle%2C_from_Cadw_information_board.jpg/500px-Wiston_Castle%2C_from_Cadw_information_board.jpg

**Metrics:**
- Name similarity: 92.3%
- Distance: 372.812km
- Same image: No

**Reasons:** High name similarity (92.3%)

**Recommendation:** **KEEP-BOTH**

---

### 471. KEEP-BOTH (Confidence: 50%)

**Castle A:** Witton Castle
- Location: 54.6333, -1.8
- Country/County: England, County Durham
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Witton_Castle_-_geograph.org.uk_-_307577.jpg/500px-Witton_Castle_-_geograph.org.uk_-_307577.jpg

**Castle B:** Wilton House  
- Location: 51.0783, -1.8617
- Country/County: England, Wiltshire
- Type: castle
- Image: https://img.castlecore.uk/wilton-house.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 395.320km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 472. KEEP-BOTH (Confidence: 50%)

**Castle A:** Hylton Castle
- Location: 54.9167, -1.45
- Country/County: England, Tyne and Wear
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Hylton_Castle_3.jpg/500px-Hylton_Castle_3.jpg

**Castle B:** Wilton Castle  
- Location: 54.5333, -1.5333
- Country/County: England, North Yorkshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Winter_view_of_Wilton_Castle_-_geograph.org.uk_-_1169638.jpg/500px-Winter_view_of_Wilton_Castle_-_geograph.org.uk_-_1169638.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 42.966km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 473. KEEP-BOTH (Confidence: 50%)

**Castle A:** Hylton Castle
- Location: 54.9167, -1.45
- Country/County: England, Tyne and Wear
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Hylton_Castle_3.jpg/500px-Hylton_Castle_3.jpg

**Castle B:** Hallaton Castle  
- Location: 52.55, -0.8333
- Country/County: England, Leicestershire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Hallaton_Castle_earthworks.jpg/500px-Hallaton_Castle_earthworks.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 266.270km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 474. KEEP-BOTH (Confidence: 50%)

**Castle A:** Hylton Castle
- Location: 54.9167, -1.45
- Country/County: England, Tyne and Wear
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Hylton_Castle_3.jpg/500px-Hylton_Castle_3.jpg

**Castle B:** Alton Castle  
- Location: 52.964, -1.886
- Country/County: England, Staffordshire
- Type: castle
- Image: https://img.castlecore.uk/alton-castle.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 218.996km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 475. KEEP-BOTH (Confidence: 50%)

**Castle A:** Hylton Castle
- Location: 54.9167, -1.45
- Country/County: England, Tyne and Wear
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Hylton_Castle_3.jpg/500px-Hylton_Castle_3.jpg

**Castle B:** Dalton Castle  
- Location: 54.154, -3.18
- Country/County: England, Cumbria
- Type: castle
- Image: https://img.castlecore.uk/dalton-castle.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 140.170km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 476. KEEP-BOTH (Confidence: 50%)

**Castle A:** Snape Castle
- Location: 54.2833, -1.65
- Country/County: England, North Yorkshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Snape_Castle_-_geograph.org.uk_-_3225506.jpg/500px-Snape_Castle_-_geograph.org.uk_-_3225506.jpg

**Castle B:** Shane Castle  
- Location: 54.707, -6.31
- Country/County: Ireland, County Antrim
- Type: castle
- Image: https://img.castlecore.uk/shane-castle.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 304.544km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 477. KEEP-BOTH (Confidence: 50%)

**Castle A:** Danby Castle
- Location: 54.4667, -0.9667
- Country/County: England, North Yorkshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Danby_Castle_ruins_from_the_north_-_geograph.org.uk_-_2606955.jpg/500px-Danby_Castle_ruins_from_the_north_-_geograph.org.uk_-_2606955.jpg

**Castle B:** Tenby Castle  
- Location: 51.672, -4.7
- Country/County: Wales, Pembrokeshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Tenby_Castle_-_geograph.org.uk_-_3694238.jpg/500px-Tenby_Castle_-_geograph.org.uk_-_3694238.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 398.361km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 478. KEEP-BOTH (Confidence: 50%)

**Castle A:** Danby Castle
- Location: 54.4667, -0.9667
- Country/County: England, North Yorkshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Danby_Castle_ruins_from_the_north_-_geograph.org.uk_-_2606955.jpg/500px-Danby_Castle_ruins_from_the_north_-_geograph.org.uk_-_2606955.jpg

**Castle B:** Dunboy Castle  
- Location: 51.647, -9.878
- Country/County: Ireland, County Cork
- Type: castle
- Image: https://img.castlecore.uk/dunboy-castle.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 672.365km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 479. KEEP-BOTH (Confidence: 50%)

**Castle A:** Danby Castle
- Location: 54.4667, -0.9667
- Country/County: England, North Yorkshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Danby_Castle_ruins_from_the_north_-_geograph.org.uk_-_2606955.jpg/500px-Danby_Castle_ruins_from_the_north_-_geograph.org.uk_-_2606955.jpg

**Castle B:** Any Castle  
- Location: 52.365, -8.258
- Country/County: Ireland, County Tipperary
- Type: castle
- Image: https://img.castlecore.uk/any-castle.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 536.412km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 480. KEEP-BOTH (Confidence: 50%)

**Castle A:** Wilton Castle
- Location: 54.5333, -1.5333
- Country/County: England, North Yorkshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Winter_view_of_Wilton_Castle_-_geograph.org.uk_-_1169638.jpg/500px-Winter_view_of_Wilton_Castle_-_geograph.org.uk_-_1169638.jpg

**Castle B:** Wiston Castle  
- Location: 51.8333, -4.8833
- Country/County: Wales, Pembrokeshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Wiston_Castle%2C_from_Cadw_information_board.jpg/500px-Wiston_Castle%2C_from_Cadw_information_board.jpg

**Metrics:**
- Name similarity: 92.3%
- Distance: 374.029km
- Same image: No

**Reasons:** High name similarity (92.3%)

**Recommendation:** **KEEP-BOTH**

---

### 481. KEEP-BOTH (Confidence: 50%)

**Castle A:** Wilton Castle
- Location: 54.5333, -1.5333
- Country/County: England, North Yorkshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Winter_view_of_Wilton_Castle_-_geograph.org.uk_-_1169638.jpg/500px-Winter_view_of_Wilton_Castle_-_geograph.org.uk_-_1169638.jpg

**Castle B:** Alton Castle  
- Location: 52.964, -1.886
- Country/County: England, Staffordshire
- Type: castle
- Image: https://img.castlecore.uk/alton-castle.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 176.032km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 482. KEEP-BOTH (Confidence: 50%)

**Castle A:** Wilton Castle
- Location: 54.5333, -1.5333
- Country/County: England, North Yorkshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Winter_view_of_Wilton_Castle_-_geograph.org.uk_-_1169638.jpg/500px-Winter_view_of_Wilton_Castle_-_geograph.org.uk_-_1169638.jpg

**Castle B:** Dalton Castle  
- Location: 54.154, -3.18
- Country/County: England, Cumbria
- Type: castle
- Image: https://img.castlecore.uk/dalton-castle.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 114.763km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 483. KEEP-BOTH (Confidence: 50%)

**Castle A:** Wilton Castle
- Location: 54.5333, -1.5333
- Country/County: England, North Yorkshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Winter_view_of_Wilton_Castle_-_geograph.org.uk_-_1169638.jpg/500px-Winter_view_of_Wilton_Castle_-_geograph.org.uk_-_1169638.jpg

**Castle B:** Wilton House  
- Location: 51.0783, -1.8617
- Country/County: England, Wiltshire
- Type: castle
- Image: https://img.castlecore.uk/wilton-house.jpg

**Metrics:**
- Name similarity: 100.0%
- Distance: 384.811km
- Same image: No

**Reasons:** High name similarity (100.0%)

**Recommendation:** **KEEP-BOTH**

---

### 484. KEEP-BOTH (Confidence: 50%)

**Castle A:** Yarmouth Castle
- Location: 50.7069, -1.5006
- Country/County: England, Isle of Wight
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Yarmouth_Castle%2C_Isle_of_Wight_-_geograph.org.uk_-_1720431.jpg/500px-Yarmouth_Castle%2C_Isle_of_Wight_-_geograph.org.uk_-_1720431.jpg

**Castle B:** Monmouth Castle  
- Location: 51.8111, -2.7139
- Country/County: Wales, Monmouthshire
- Type: castle
- Image: https://img.castlecore.uk/monmouth-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 149.004km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 485. KEEP-BOTH (Confidence: 50%)

**Castle A:** Tiverton Castle
- Location: 50.9, -3.4833
- Country/County: England, Devon
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/TivertonCastle_AerialPanorama.png/500px-TivertonCastle_AerialPanorama.png

**Castle B:** Somerton Castle  
- Location: 53.1333, -0.3
- Country/County: England, Lincolnshire
- Type: castle
- Image: https://img.castlecore.uk/somerton-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 330.274km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 486. KEEP-BOTH (Confidence: 50%)

**Castle A:** Tiverton Castle
- Location: 50.9, -3.4833
- Country/County: England, Devon
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/TivertonCastle_AerialPanorama.png/500px-TivertonCastle_AerialPanorama.png

**Castle B:** Beverston Castle  
- Location: 51.638, -2.203
- Country/County: England, Gloucestershire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Beverston_castle.jpg/500px-Beverston_castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 121.108km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 487. KEEP-BOTH (Confidence: 50%)

**Castle A:** Tiverton Castle
- Location: 50.9, -3.4833
- Country/County: England, Devon
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/TivertonCastle_AerialPanorama.png/500px-TivertonCastle_AerialPanorama.png

**Castle B:** Termon Castle  
- Location: 53.092, -9.075
- Country/County: Ireland, County Clare
- Type: tower house
- Image: https://img.castlecore.uk/termon-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 453.643km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 488. KEEP-BOTH (Confidence: 50%)

**Castle A:** Tiverton Castle
- Location: 50.9, -3.4833
- Country/County: England, Devon
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/TivertonCastle_AerialPanorama.png/500px-TivertonCastle_AerialPanorama.png

**Castle B:** Askerton Castle  
- Location: 55.0317, -2.7333
- Country/County: England, Cumbria
- Type: castle
- Image: https://img.castlecore.uk/askerton-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 462.154km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 489. KEEP-BOTH (Confidence: 50%)

**Castle A:** Bampton Castle
- Location: 50.9833, -3.2333
- Country/County: England, Devon
- Type: castle
- Image: https://img.castlecore.uk/bampton-castle.jpg

**Castle B:** Baginton Castle  
- Location: 52.35, -1.4833
- Country/County: England, Warwickshire
- Type: castle
- Image: https://img.castlecore.uk/baginton-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 194.054km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 490. KEEP-BOTH (Confidence: 50%)

**Castle A:** Bampton Castle
- Location: 50.9833, -3.2333
- Country/County: England, Devon
- Type: castle
- Image: https://img.castlecore.uk/bampton-castle.jpg

**Castle B:** Plympton Castle  
- Location: 50.387, -4.0576
- Country/County: England, Devon
- Type: castle
- Image: https://img.castlecore.uk/plympton-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 88.140km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 491. KEEP-BOTH (Confidence: 50%)

**Castle A:** Bungay Castle
- Location: 52.4528, 1.4375
- Country/County: England, Suffolk
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Bungay_Castle%2C_2012.jpg/500px-Bungay_Castle%2C_2012.jpg

**Castle B:** Dungar Castle  
- Location: 52.918, -7.748
- Country/County: Ireland, County Tipperary
- Type: tower house
- Image: https://img.castlecore.uk/dungar-castle.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 620.880km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 492. KEEP-BOTH (Confidence: 50%)

**Castle A:** Somerton Castle
- Location: 53.1333, -0.3
- Country/County: England, Lincolnshire
- Type: castle
- Image: https://img.castlecore.uk/somerton-castle.jpg

**Castle B:** Morton Castle  
- Location: 55.272, -3.692
- Country/County: Scotland, Dumfries and Galloway
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Morton_Castle.jpg/500px-Morton_Castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 324.313km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 493. KEEP-BOTH (Confidence: 50%)

**Castle A:** Somerton Castle
- Location: 53.1333, -0.3
- Country/County: England, Lincolnshire
- Type: castle
- Image: https://img.castlecore.uk/somerton-castle.jpg

**Castle B:** Askerton Castle  
- Location: 55.0317, -2.7333
- Country/County: England, Cumbria
- Type: castle
- Image: https://img.castlecore.uk/askerton-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 264.073km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 494. KEEP-BOTH (Confidence: 50%)

**Castle A:** Baginton Castle
- Location: 52.35, -1.4833
- Country/County: England, Warwickshire
- Type: castle
- Image: https://img.castlecore.uk/baginton-castle.jpg

**Castle B:** Balintore Castle  
- Location: 56.7167, -3.1333
- Country/County: Scotland, Angus
- Type: castle
- Image: https://img.castlecore.uk/balintore-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 497.049km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 495. KEEP-BOTH (Confidence: 50%)

**Castle A:** Baginton Castle
- Location: 52.35, -1.4833
- Country/County: England, Warwickshire
- Type: castle
- Image: https://img.castlecore.uk/baginton-castle.jpg

**Castle B:** Abington Castle  
- Location: 52.607, -8.379
- Country/County: Ireland, County Limerick
- Type: castle
- Image: https://img.castlecore.uk/abington-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 467.700km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 496. KEEP-BOTH (Confidence: 50%)

**Castle A:** Groby Castle
- Location: 52.6667, -1.2333
- Country/County: England, Leicestershire
- Type: castle
- Image: https://img.castlecore.uk/groby-castle.jpg

**Castle B:** Castle Roy  
- Location: 57.2667, -3.6
- Country/County: Scotland, Highland
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Castle_Roy_-_geograph.org.uk_-_2069401.jpg/500px-Castle_Roy_-_geograph.org.uk_-_2069401.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 533.256km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 497. KEEP-BOTH (Confidence: 50%)

**Castle A:** Hallaton Castle
- Location: 52.55, -0.8333
- Country/County: England, Leicestershire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Hallaton_Castle_earthworks.jpg/500px-Hallaton_Castle_earthworks.jpg

**Castle B:** Haughton Castle  
- Location: 55.043, -2.185
- Country/County: England, Northumberland
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Haughton_Castle.jpg/500px-Haughton_Castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 291.063km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 498. KEEP-BOTH (Confidence: 50%)

**Castle A:** Hallaton Castle
- Location: 52.55, -0.8333
- Country/County: England, Leicestershire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Hallaton_Castle_earthworks.jpg/500px-Hallaton_Castle_earthworks.jpg

**Castle B:** Alton Castle  
- Location: 52.964, -1.886
- Country/County: England, Staffordshire
- Type: castle
- Image: https://img.castlecore.uk/alton-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 84.483km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 499. KEEP-BOTH (Confidence: 50%)

**Castle A:** Hallaton Castle
- Location: 52.55, -0.8333
- Country/County: England, Leicestershire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Hallaton_Castle_earthworks.jpg/500px-Hallaton_Castle_earthworks.jpg

**Castle B:** Dalton Castle  
- Location: 54.154, -3.18
- Country/County: England, Cumbria
- Type: castle
- Image: https://img.castlecore.uk/dalton-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 236.767km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 500. KEEP-BOTH (Confidence: 50%)

**Castle A:** Naworth Castle
- Location: 54.9333, -2.6667
- Country/County: England, Cumbria
- Type: castle
- Image: https://img.castlecore.uk/naworth-castle.jpg

**Castle B:** Narberth Castle  
- Location: 51.7967, -4.7417
- Country/County: Wales, Pembrokeshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Narberth_castle_pembrokeshire.jpg/500px-Narberth_castle_pembrokeshire.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 374.923km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 501. KEEP-BOTH (Confidence: 50%)

**Castle A:** Naworth Castle
- Location: 54.9333, -2.6667
- Country/County: England, Cumbria
- Type: castle
- Image: https://img.castlecore.uk/naworth-castle.jpg

**Castle B:** Mackworth Castle  
- Location: 52.934, -1.542
- Country/County: England, Derbyshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/2/2c/Mackworth_Castle_-_thumb_205765.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 234.179km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 502. KEEP-BOTH (Confidence: 50%)

**Castle A:** Naworth Castle
- Location: 54.9333, -2.6667
- Country/County: England, Cumbria
- Type: castle
- Image: https://img.castlecore.uk/naworth-castle.jpg

**Castle B:** Glanworth Castle  
- Location: 52.187, -8.371
- Country/County: Ireland, County Cork
- Type: castle
- Image: https://img.castlecore.uk/glanworth-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 484.711km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 503. KEEP-BOTH (Confidence: 50%)

**Castle A:** Naworth Castle
- Location: 54.9333, -2.6667
- Country/County: England, Cumbria
- Type: castle
- Image: https://img.castlecore.uk/naworth-castle.jpg

**Castle B:** Wentworth Castle  
- Location: 53.5067, -1.5417
- Country/County: England, Yorkshire
- Type: castle
- Image: https://img.castlecore.uk/wentworth-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 174.674km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 504. KEEP-BOTH (Confidence: 50%)

**Castle A:** Rose Castle
- Location: 54.8333, -2.8333
- Country/County: England, Cumbria
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Rose_Castle%2C_Raughton_Head.jpg/500px-Rose_Castle%2C_Raughton_Head.jpg

**Castle B:** Aros Castle  
- Location: 56.553, -5.997
- Country/County: Scotland, Argyll and Bute
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Aros_Castle_-_exterior.jpg/500px-Aros_Castle_-_exterior.jpg

**Metrics:**
- Name similarity: 81.8%
- Distance: 275.410km
- Same image: No

**Reasons:** High name similarity (81.8%)

**Recommendation:** **KEEP-BOTH**

---

### 505. KEEP-BOTH (Confidence: 50%)

**Castle A:** Rose Castle
- Location: 54.8333, -2.8333
- Country/County: England, Cumbria
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Rose_Castle%2C_Raughton_Head.jpg/500px-Rose_Castle%2C_Raughton_Head.jpg

**Castle B:** Fore Castle  
- Location: 53.69, -7.186
- Country/County: Ireland, County Westmeath
- Type: castle
- Image: https://img.castlecore.uk/fore-castle.jpg

**Metrics:**
- Name similarity: 81.8%
- Distance: 309.896km
- Same image: No

**Reasons:** High name similarity (81.8%)

**Recommendation:** **KEEP-BOTH**

---

### 506. KEEP-BOTH (Confidence: 50%)

**Castle A:** Rose Castle
- Location: 54.8333, -2.8333
- Country/County: England, Cumbria
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Rose_Castle%2C_Raughton_Head.jpg/500px-Rose_Castle%2C_Raughton_Head.jpg

**Castle B:** Roch Castle  
- Location: 51.833, -5.073
- Country/County: Wales, Pembrokeshire
- Type: castle
- Image: https://img.castlecore.uk/roch-castle.jpg

**Metrics:**
- Name similarity: 81.8%
- Distance: 365.218km
- Same image: No

**Reasons:** High name similarity (81.8%)

**Recommendation:** **KEEP-BOTH**

---

### 507. KEEP-BOTH (Confidence: 50%)

**Castle A:** Rose Castle
- Location: 54.8333, -2.8333
- Country/County: England, Cumbria
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Rose_Castle%2C_Raughton_Head.jpg/500px-Rose_Castle%2C_Raughton_Head.jpg

**Castle B:** Corse Castle  
- Location: 57.178, -2.628
- Country/County: Scotland, Aberdeenshire
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Corse_Castle_-_geograph.org.uk_-_252876.jpg/500px-Corse_Castle_-_geograph.org.uk_-_252876.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 261.031km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 508. KEEP-BOTH (Confidence: 50%)

**Castle A:** Rose Castle
- Location: 54.8333, -2.8333
- Country/County: England, Cumbria
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Rose_Castle%2C_Raughton_Head.jpg/500px-Rose_Castle%2C_Raughton_Head.jpg

**Castle B:** Castle Roy  
- Location: 57.2667, -3.6
- Country/County: Scotland, Highland
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Castle_Roy_-_geograph.org.uk_-_2069401.jpg/500px-Castle_Roy_-_geograph.org.uk_-_2069401.jpg

**Metrics:**
- Name similarity: 81.8%
- Distance: 274.734km
- Same image: No

**Reasons:** High name similarity (81.8%)

**Recommendation:** **KEEP-BOTH**

---

### 509. KEEP-BOTH (Confidence: 50%)

**Castle A:** Workington Hall
- Location: 54.65, -3.55
- Country/County: England, Cumbria
- Type: fortified house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Workington_Hall_by_AF_Lydon.jpg/500px-Workington_Hall_by_AF_Lydon.jpg

**Castle B:** Wallington Hall  
- Location: 55.1517, -1.9483
- Country/County: England, Northumberland
- Type: castle
- Image: https://img.castlecore.uk/wallington-hall.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 116.612km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 510. KEEP-BOTH (Confidence: 50%)

**Castle A:** Workington Hall
- Location: 54.65, -3.55
- Country/County: England, Cumbria
- Type: fortified house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Workington_Hall_by_AF_Lydon.jpg/500px-Workington_Hall_by_AF_Lydon.jpg

**Castle B:** Harvington Hall  
- Location: 52.3817, -2.1017
- Country/County: England, Worcestershire
- Type: castle
- Image: https://img.castlecore.uk/harvington-hall.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 269.774km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 511. KEEP-BOTH (Confidence: 50%)

**Castle A:** Workington Hall
- Location: 54.65, -3.55
- Country/County: England, Cumbria
- Type: fortified house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Workington_Hall_by_AF_Lydon.jpg/500px-Workington_Hall_by_AF_Lydon.jpg

**Castle B:** Berrington Hall  
- Location: 52.2717, -2.7417
- Country/County: England, Herefordshire
- Type: castle
- Image: https://img.castlecore.uk/berrington-hall.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 269.810km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 512. KEEP-BOTH (Confidence: 50%)

**Castle A:** Lews Castle
- Location: 58.2167, -6.3833
- Country/County: Scotland, Western Isles
- Type: castle
- Image: https://img.castlecore.uk/lews-castle.jpg

**Castle B:** Leap Castle  
- Location: 52.952, -7.809
- Country/County: Ireland, County Offaly
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Castles_of_Leinster-_Leap%2C_Offaly_%28geograph_1952750%29.jpg/500px-Castles_of_Leinster-_Leap%2C_Offaly_%28geograph_1952750%29.jpg

**Metrics:**
- Name similarity: 81.8%
- Distance: 592.190km
- Same image: No

**Reasons:** High name similarity (81.8%)

**Recommendation:** **KEEP-BOTH**

---

### 513. KEEP-BOTH (Confidence: 50%)

**Castle A:** Lews Castle
- Location: 58.2167, -6.3833
- Country/County: Scotland, Western Isles
- Type: castle
- Image: https://img.castlecore.uk/lews-castle.jpg

**Castle B:** Castle Leod  
- Location: 57.6833, -4.5667
- Country/County: Scotland, Highland
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Castle_Leod_%28geograph_4176882%29.jpg/500px-Castle_Leod_%28geograph_4176882%29.jpg

**Metrics:**
- Name similarity: 81.8%
- Distance: 122.501km
- Same image: No

**Reasons:** High name similarity (81.8%)

**Recommendation:** **KEEP-BOTH**

---

### 514. KEEP-BOTH (Confidence: 50%)

**Castle A:** Hay Castle
- Location: 52.075, -3.125
- Country/County: Wales, Powys
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Hay_Castle%2C_Hay-on-Wye_-_geograph.org.uk_-_583851.jpg/500px-Hay_Castle%2C_Hay-on-Wye_-_geograph.org.uk_-_583851.jpg

**Castle B:** Moy Castle  
- Location: 56.322, -5.957
- Country/County: Scotland, Argyll and Bute
- Type: castle
- Image: https://img.castlecore.uk/moy-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 506.793km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 515. KEEP-BOTH (Confidence: 50%)

**Castle A:** Hay Castle
- Location: 52.075, -3.125
- Country/County: Wales, Powys
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Hay_Castle%2C_Hay-on-Wye_-_geograph.org.uk_-_583851.jpg/500px-Hay_Castle%2C_Hay-on-Wye_-_geograph.org.uk_-_583851.jpg

**Castle B:** Wray Castle  
- Location: 54.381, -2.953
- Country/County: England, Cumbria
- Type: castle
- Image: https://img.castlecore.uk/wray-castle.jpg

**Metrics:**
- Name similarity: 81.8%
- Distance: 256.671km
- Same image: No

**Reasons:** High name similarity (81.8%)

**Recommendation:** **KEEP-BOTH**

---

### 516. KEEP-BOTH (Confidence: 50%)

**Castle A:** Hay Castle
- Location: 52.075, -3.125
- Country/County: Wales, Powys
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Hay_Castle%2C_Hay-on-Wye_-_geograph.org.uk_-_583851.jpg/500px-Hay_Castle%2C_Hay-on-Wye_-_geograph.org.uk_-_583851.jpg

**Castle B:** Castle Roy  
- Location: 57.2667, -3.6
- Country/County: Scotland, Highland
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Castle_Roy_-_geograph.org.uk_-_2069401.jpg/500px-Castle_Roy_-_geograph.org.uk_-_2069401.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 578.094km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 517. KEEP-BOTH (Confidence: 50%)

**Castle A:** Hay Castle
- Location: 52.075, -3.125
- Country/County: Wales, Powys
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Hay_Castle%2C_Hay-on-Wye_-_geograph.org.uk_-_583851.jpg/500px-Hay_Castle%2C_Hay-on-Wye_-_geograph.org.uk_-_583851.jpg

**Castle B:** Ayr Castle  
- Location: 55.4667, -4.6333
- Country/County: Scotland, South Ayrshire
- Type: castle
- Image: https://img.castlecore.uk/ayr-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 389.924km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 518. KEEP-BOTH (Confidence: 50%)

**Castle A:** Hay Castle
- Location: 52.075, -3.125
- Country/County: Wales, Powys
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Hay_Castle%2C_Hay-on-Wye_-_geograph.org.uk_-_583851.jpg/500px-Hay_Castle%2C_Hay-on-Wye_-_geograph.org.uk_-_583851.jpg

**Castle B:** Any Castle  
- Location: 52.365, -8.258
- Country/County: Ireland, County Tipperary
- Type: castle
- Image: https://img.castlecore.uk/any-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 351.076km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 519. KEEP-BOTH (Confidence: 50%)

**Castle A:** Wiston Castle
- Location: 51.8333, -4.8833
- Country/County: Wales, Pembrokeshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Wiston_Castle%2C_from_Cadw_information_board.jpg/500px-Wiston_Castle%2C_from_Cadw_information_board.jpg

**Castle B:** Wilton House  
- Location: 51.0783, -1.8617
- Country/County: England, Wiltshire
- Type: castle
- Image: https://img.castlecore.uk/wilton-house.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 225.543km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 520. KEEP-BOTH (Confidence: 50%)

**Castle A:** Cardigan Castle
- Location: 52.0833, -4.6583
- Country/County: Wales, Ceredigion
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Cardigan_Castle_-_south_western_aspect-Geograph-6075948-by-M-J-Roscoe.jpg/500px-Cardigan_Castle_-_south_western_aspect-Geograph-6075948-by-M-J-Roscoe.jpg

**Castle B:** Carrigart Castle  
- Location: 55.155, -7.725
- Country/County: Ireland, County Donegal
- Type: tower house
- Image: https://img.castlecore.uk/carrigart-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 396.866km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 521. KEEP-BOTH (Confidence: 50%)

**Castle A:** Grey Abbey
- Location: 54.4917, -5.5417
- Country/County: Northern Ireland, County Down
- Type: abbey
- Image: https://img.castlecore.uk/grey-abbey.jpg

**Castle B:** Greyabbey House  
- Location: 54.53, -5.555
- Country/County: Ireland, County Down
- Type: abbey
- Image: https://img.castlecore.uk/greyabbey-house.jpg

**Metrics:**
- Name similarity: 90.0%
- Distance: 4.344km
- Same image: No

**Reasons:** High name similarity (90.0%)

**Recommendation:** **KEEP-BOTH**

---

### 522. KEEP-BOTH (Confidence: 50%)

**Castle A:** Bickleigh Castle
- Location: 50.8097, -3.498
- Country/County: England, Devon
- Type: castle
- Image: https://img.castlecore.uk/bickleigh-castle.jpg

**Castle B:** Gidleigh Castle  
- Location: 50.691, -3.866
- Country/County: England, Devon
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Gidleigh_Castle.jpg/500px-Gidleigh_Castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 29.060km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 523. KEEP-BOTH (Confidence: 50%)

**Castle A:** Bickleigh Castle
- Location: 50.8097, -3.498
- Country/County: England, Devon
- Type: castle
- Image: https://img.castlecore.uk/bickleigh-castle.jpg

**Castle B:** Burleigh Castle  
- Location: 56.214, -3.362
- Country/County: Scotland, Perth and Kinross
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/BurleighCastle.jpg/500px-BurleighCastle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 600.998km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 524. KEEP-BOTH (Confidence: 50%)

**Castle A:** Gidleigh Castle
- Location: 50.691, -3.866
- Country/County: England, Devon
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Gidleigh_Castle.jpg/500px-Gidleigh_Castle.jpg

**Castle B:** Burleigh Castle  
- Location: 56.214, -3.362
- Country/County: Scotland, Perth and Kinross
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/BurleighCastle.jpg/500px-BurleighCastle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 615.031km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 525. KEEP-BOTH (Confidence: 50%)

**Castle A:** Hornby Castle
- Location: 54.121, -2.631
- Country/County: England, Lancashire
- Type: castle
- Image: https://img.castlecore.uk/hornby-castle.jpg

**Castle B:** Corby Castle  
- Location: 54.905, -2.8
- Country/County: England, Cumbria
- Type: castle
- Image: https://img.castlecore.uk/corby-castle.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 87.857km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 526. KEEP-BOTH (Confidence: 50%)

**Castle A:** Eye Castle
- Location: 52.321, 1.149
- Country/County: England, Suffolk
- Type: castle
- Image: https://img.castlecore.uk/eye-castle.jpg

**Castle B:** Castle Hyde  
- Location: 52.125, -8.198
- Country/County: Ireland, County Cork
- Type: castle
- Image: https://img.castlecore.uk/castle-hyde.jpg

**Metrics:**
- Name similarity: 81.8%
- Distance: 636.618km
- Same image: No

**Reasons:** High name similarity (81.8%)

**Recommendation:** **KEEP-BOTH**

---

### 527. KEEP-BOTH (Confidence: 50%)

**Castle A:** Eye Castle
- Location: 52.321, 1.149
- Country/County: England, Suffolk
- Type: castle
- Image: https://img.castlecore.uk/eye-castle.jpg

**Castle B:** Ayr Castle  
- Location: 55.4667, -4.6333
- Country/County: Scotland, South Ayrshire
- Type: castle
- Image: https://img.castlecore.uk/ayr-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 515.351km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 528. KEEP-BOTH (Confidence: 50%)

**Castle A:** Haughley Castle
- Location: 52.228, 0.984
- Country/County: England, Suffolk
- Type: castle
- Image: https://img.castlecore.uk/haughley-castle.jpg

**Castle B:** Langley Castle  
- Location: 54.954, -2.306
- Country/County: England, Northumberland
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Langley_Castle.jpg/500px-Langley_Castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 372.777km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 529. KEEP-BOTH (Confidence: 50%)

**Castle A:** Haughley Castle
- Location: 52.228, 0.984
- Country/County: England, Suffolk
- Type: castle
- Image: https://img.castlecore.uk/haughley-castle.jpg

**Castle B:** Haughton Castle  
- Location: 55.043, -2.185
- Country/County: England, Northumberland
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Haughton_Castle.jpg/500px-Haughton_Castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 376.252km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 530. KEEP-BOTH (Confidence: 50%)

**Castle A:** Haughley Castle
- Location: 52.228, 0.984
- Country/County: England, Suffolk
- Type: castle
- Image: https://img.castlecore.uk/haughley-castle.jpg

**Castle B:** Augher Castle  
- Location: 54.418, -7.178
- Country/County: Northern Ireland, County Tyrone
- Type: castle
- Image: https://img.castlecore.uk/augher-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 593.818km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 531. KEEP-BOTH (Confidence: 50%)

**Castle A:** Woodsford Castle
- Location: 50.697, -2.281
- Country/County: England, Dorset
- Type: castle
- Image: https://img.castlecore.uk/woodsford-castle.jpg

**Castle B:** Woodstown Castle  
- Location: 52.228, -6.998
- Country/County: Ireland, County Waterford
- Type: tower house
- Image: https://img.castlecore.uk/woodstown-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 368.367km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 532. KEEP-BOTH (Confidence: 50%)

**Castle A:** Woodsford Castle
- Location: 50.697, -2.281
- Country/County: England, Dorset
- Type: castle
- Image: https://img.castlecore.uk/woodsford-castle.jpg

**Castle B:** Gosford Castle  
- Location: 54.288, -6.595
- Country/County: Ireland, County Armagh
- Type: castle
- Image: https://img.castlecore.uk/gosford-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 494.520km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 533. KEEP-BOTH (Confidence: 50%)

**Castle A:** Haughton Castle
- Location: 55.043, -2.185
- Country/County: England, Northumberland
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Haughton_Castle.jpg/500px-Haughton_Castle.jpg

**Castle B:** Broughton Castle  
- Location: 52.056, -1.378
- Country/County: England, Oxfordshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Broughton_castle2.jpg/500px-Broughton_castle2.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 336.385km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 534. KEEP-BOTH (Confidence: 50%)

**Castle A:** Haughton Castle
- Location: 55.043, -2.185
- Country/County: England, Northumberland
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Haughton_Castle.jpg/500px-Haughton_Castle.jpg

**Castle B:** Taghmon Castle  
- Location: 52.447, -6.671
- Country/County: Ireland, County Wexford
- Type: tower house
- Image: https://img.castlecore.uk/taghmon-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 412.577km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 535. KEEP-BOTH (Confidence: 50%)

**Castle A:** Cartington Castle
- Location: 55.295, -1.877
- Country/County: England, Northumberland
- Type: castle
- Image: https://img.castlecore.uk/cartington-castle.jpg

**Castle B:** Allington Castle  
- Location: 51.278, 0.494
- Country/County: England, Kent
- Type: castle
- Image: https://img.castlecore.uk/allington-castle.jpg

**Metrics:**
- Name similarity: 82.4%
- Distance: 473.590km
- Same image: No

**Reasons:** High name similarity (82.4%)

**Recommendation:** **KEEP-BOTH**

---

### 536. KEEP-BOTH (Confidence: 50%)

**Castle A:** Cartington Castle
- Location: 55.295, -1.877
- Country/County: England, Northumberland
- Type: castle
- Image: https://img.castlecore.uk/cartington-castle.jpg

**Castle B:** Huntington Castle  
- Location: 52.638, -6.718
- Country/County: Ireland, County Carlow
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Huntington-castle-herefordshire-august-2018.jpg/500px-Huntington-castle-herefordshire-august-2018.jpg

**Metrics:**
- Name similarity: 82.4%
- Distance: 432.897km
- Same image: No

**Reasons:** High name similarity (82.4%)

**Recommendation:** **KEEP-BOTH**

---

### 537. KEEP-BOTH (Confidence: 50%)

**Castle A:** Cartington Castle
- Location: 55.295, -1.877
- Country/County: England, Northumberland
- Type: castle
- Image: https://img.castlecore.uk/cartington-castle.jpg

**Castle B:** Abington Castle  
- Location: 52.607, -8.379
- Country/County: Ireland, County Limerick
- Type: castle
- Image: https://img.castlecore.uk/abington-castle.jpg

**Metrics:**
- Name similarity: 82.4%
- Distance: 519.622km
- Same image: No

**Reasons:** High name similarity (82.4%)

**Recommendation:** **KEEP-BOTH**

---

### 538. KEEP-BOTH (Confidence: 50%)

**Castle A:** Allington Castle
- Location: 51.278, 0.494
- Country/County: England, Kent
- Type: castle
- Image: https://img.castlecore.uk/allington-castle.jpg

**Castle B:** Abington Castle  
- Location: 52.607, -8.379
- Country/County: Ireland, County Limerick
- Type: castle
- Image: https://img.castlecore.uk/abington-castle.jpg

**Metrics:**
- Name similarity: 87.5%
- Distance: 625.463km
- Same image: No

**Reasons:** High name similarity (87.5%)

**Recommendation:** **KEEP-BOTH**

---

### 539. KEEP-BOTH (Confidence: 50%)

**Castle A:** Leybourne Castle
- Location: 51.305, 0.436
- Country/County: England, Kent
- Type: castle
- Image: https://img.castlecore.uk/leybourne-castle.jpg

**Castle B:** Lilbourne Castle  
- Location: 52.365, -1.1767
- Country/County: England, Northamptonshire
- Type: castle
- Image: https://img.castlecore.uk/lilbourne-castle.jpg

**Metrics:**
- Name similarity: 87.5%
- Distance: 161.767km
- Same image: No

**Reasons:** High name similarity (87.5%)

**Recommendation:** **KEEP-BOTH**

---

### 540. KEEP-BOTH (Confidence: 50%)

**Castle A:** Clifford Castle
- Location: 52.087, -3.109
- Country/County: England, Herefordshire
- Type: castle
- Image: https://img.castlecore.uk/clifford-castle.jpg

**Castle B:** Cessford Castle  
- Location: 55.527, -2.489
- Country/County: Scotland, Scottish Borders
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Cessford_Castle.jpg/500px-Cessford_Castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 384.667km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 541. KEEP-BOTH (Confidence: 50%)

**Castle A:** Snodhill Castle
- Location: 52.041, -3.075
- Country/County: England, Herefordshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Snodhill_Castle_%28geograph_2203637%29.jpg/500px-Snodhill_Castle_%28geograph_2203637%29.jpg

**Castle B:** Mohill Castle  
- Location: 53.928, -7.868
- Country/County: Ireland, County Leitrim
- Type: castle
- Image: https://img.castlecore.uk/mohill-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 383.248km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 542. KEEP-BOTH (Confidence: 50%)

**Castle A:** Snodhill Castle
- Location: 52.041, -3.075
- Country/County: England, Herefordshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Snodhill_Castle_%28geograph_2203637%29.jpg/500px-Snodhill_Castle_%28geograph_2203637%29.jpg

**Castle B:** Stobhall Castle  
- Location: 56.498, -3.368
- Country/County: Scotland, Perthshire
- Type: castle
- Image: https://img.castlecore.uk/stobhall-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 495.960km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 543. KEEP-BOTH (Confidence: 50%)

**Castle A:** Snodhill Castle
- Location: 52.041, -3.075
- Country/County: England, Herefordshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Snodhill_Castle_%28geograph_2203637%29.jpg/500px-Snodhill_Castle_%28geograph_2203637%29.jpg

**Castle B:** Coolhill Castle  
- Location: 52.544, -7.06
- Country/County: Ireland, County Kilkenny
- Type: tower house
- Image: https://img.castlecore.uk/coolhill-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 276.693km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 544. KEEP-BOTH (Confidence: 50%)

**Castle A:** Alton Castle
- Location: 52.964, -1.886
- Country/County: England, Staffordshire
- Type: castle
- Image: https://img.castlecore.uk/alton-castle.jpg

**Castle B:** Dalton Castle  
- Location: 54.154, -3.18
- Country/County: England, Cumbria
- Type: castle
- Image: https://img.castlecore.uk/dalton-castle.jpg

**Metrics:**
- Name similarity: 92.3%
- Distance: 157.518km
- Same image: No

**Reasons:** High name similarity (92.3%)

**Recommendation:** **KEEP-BOTH**

---

### 545. KEEP-BOTH (Confidence: 50%)

**Castle A:** Alton Castle
- Location: 52.964, -1.886
- Country/County: England, Staffordshire
- Type: castle
- Image: https://img.castlecore.uk/alton-castle.jpg

**Castle B:** Upton Castle  
- Location: 51.714, -4.901
- Country/County: Wales, Pembrokeshire
- Type: castle
- Image: https://img.castlecore.uk/upton-castle.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 247.509km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 546. KEEP-BOTH (Confidence: 50%)

**Castle A:** Broughton Castle
- Location: 52.056, -1.378
- Country/County: England, Oxfordshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Broughton_castle2.jpg/500px-Broughton_castle2.jpg

**Castle B:** Roughan Castle  
- Location: 54.498, -6.908
- Country/County: Northern Ireland, County Tyrone
- Type: castle
- Image: https://img.castlecore.uk/scraped-roughan.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 456.864km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 547. KEEP-BOTH (Confidence: 50%)

**Castle A:** Morton Castle
- Location: 55.272, -3.692
- Country/County: Scotland, Dumfries and Galloway
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Morton_Castle.jpg/500px-Morton_Castle.jpg

**Castle B:** Moorstown Castle  
- Location: 52.38, -7.625
- Country/County: Ireland, County Tipperary
- Type: tower house
- Image: https://img.castlecore.uk/wiki-moorstown-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 412.227km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 548. KEEP-BOTH (Confidence: 50%)

**Castle A:** Cessford Castle
- Location: 55.527, -2.489
- Country/County: Scotland, Scottish Borders
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Cessford_Castle.jpg/500px-Cessford_Castle.jpg

**Castle B:** Hertford Castle  
- Location: 51.798, -0.078
- Country/County: England, Hertfordshire
- Type: castle
- Image: https://img.castlecore.uk/hertford-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 443.965km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 549. KEEP-BOTH (Confidence: 50%)

**Castle A:** Cessford Castle
- Location: 55.527, -2.489
- Country/County: Scotland, Scottish Borders
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Cessford_Castle.jpg/500px-Cessford_Castle.jpg

**Castle B:** Hereford Castle  
- Location: 52.0533, -2.715
- Country/County: England, Herefordshire
- Type: castle
- Image: https://img.castlecore.uk/hereford-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 386.542km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 550. KEEP-BOTH (Confidence: 50%)

**Castle A:** Cessford Castle
- Location: 55.527, -2.489
- Country/County: Scotland, Scottish Borders
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Cessford_Castle.jpg/500px-Cessford_Castle.jpg

**Castle B:** Gosford Castle  
- Location: 54.288, -6.595
- Country/County: Ireland, County Armagh
- Type: castle
- Image: https://img.castlecore.uk/gosford-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 296.374km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 551. KEEP-BOTH (Confidence: 50%)

**Castle A:** Cadzow Castle
- Location: 55.747, -4.036
- Country/County: Scotland, South Lanarkshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/CadzowCastle01.JPG/500px-CadzowCastle01.JPG

**Castle B:** Carlow Castle  
- Location: 52.836, -6.927
- Country/County: Ireland, County Carlow
- Type: castle
- Image: https://img.castlecore.uk/carlow-castle.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 374.061km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 552. KEEP-BOTH (Confidence: 50%)

**Castle A:** Crookston Castle
- Location: 55.835, -4.361
- Country/County: Scotland, Glasgow
- Type: castle
- Image: https://img.castlecore.uk/crookston-castle.jpg

**Castle B:** Roodstown Castle  
- Location: 53.843, -6.577
- Country/County: Ireland, County Louth
- Type: tower house
- Image: https://img.castlecore.uk/roodstown-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 263.025km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 553. KEEP-BOTH (Confidence: 50%)

**Castle A:** Crookston Castle
- Location: 55.835, -4.361
- Country/County: Scotland, Glasgow
- Type: castle
- Image: https://img.castlecore.uk/crookston-castle.jpg

**Castle B:** Craigston Castle  
- Location: 57.5833, -2.3167
- Country/County: Scotland, Aberdeenshire
- Type: castle
- Image: https://img.castlecore.uk/craigston-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 230.975km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 554. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dunoon Castle
- Location: 55.947, -4.926
- Country/County: Scotland, Argyll and Bute
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Castle_Hill_Dunoon_-_geograph.org.uk_-_995906.jpg/500px-Castle_Hill_Dunoon_-_geograph.org.uk_-_995906.jpg

**Castle B:** Dunboy Castle  
- Location: 51.647, -9.878
- Country/County: Ireland, County Cork
- Type: castle
- Image: https://img.castlecore.uk/dunboy-castle.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 577.946km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 555. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dunoon Castle
- Location: 55.947, -4.926
- Country/County: Scotland, Argyll and Bute
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Castle_Hill_Dunoon_-_geograph.org.uk_-_995906.jpg/500px-Castle_Hill_Dunoon_-_geograph.org.uk_-_995906.jpg

**Castle B:** Dunmahon Castle  
- Location: 54.03, -6.21
- Country/County: Ireland, County Louth
- Type: tower house
- Image: https://img.castlecore.uk/dunmahon-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 228.348km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 556. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dunoon Castle
- Location: 55.947, -4.926
- Country/County: Scotland, Argyll and Bute
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Castle_Hill_Dunoon_-_geograph.org.uk_-_995906.jpg/500px-Castle_Hill_Dunoon_-_geograph.org.uk_-_995906.jpg

**Castle B:** Dunmoran Castle  
- Location: 54.235, -8.62
- Country/County: Ireland, County Sligo
- Type: tower house
- Image: https://img.castlecore.uk/dunmoran-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 302.410km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 557. KEEP-BOTH (Confidence: 50%)

**Castle A:** Castle Lachlan
- Location: 55.97, -5.209
- Country/County: Scotland, Argyll and Bute
- Type: castle
- Image: https://img.castlecore.uk/castle-lachlan.jpg

**Castle B:** Lackan Castle  
- Location: 53.5, -7.6
- Country/County: Ireland, County Westmeath
- Type: tower house
- Image: https://img.castlecore.uk/lackan-castle.jpg

**Metrics:**
- Name similarity: 85.7%
- Distance: 314.592km
- Same image: No

**Reasons:** High name similarity (85.7%)

**Recommendation:** **KEEP-BOTH**

---

### 558. KEEP-BOTH (Confidence: 50%)

**Castle A:** Aros Castle
- Location: 56.553, -5.997
- Country/County: Scotland, Argyll and Bute
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Aros_Castle_-_exterior.jpg/500px-Aros_Castle_-_exterior.jpg

**Castle B:** Castle Roy  
- Location: 57.2667, -3.6
- Country/County: Scotland, Highland
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Castle_Roy_-_geograph.org.uk_-_2069401.jpg/500px-Castle_Roy_-_geograph.org.uk_-_2069401.jpg

**Metrics:**
- Name similarity: 81.8%
- Distance: 165.737km
- Same image: No

**Reasons:** High name similarity (81.8%)

**Recommendation:** **KEEP-BOTH**

---

### 559. KEEP-BOTH (Confidence: 50%)

**Castle A:** Moy Castle
- Location: 56.322, -5.957
- Country/County: Scotland, Argyll and Bute
- Type: castle
- Image: https://img.castlecore.uk/moy-castle.jpg

**Castle B:** Castle Moil  
- Location: 57.265, -5.728
- Country/County: Scotland, Highland
- Type: castle
- Image: https://img.castlecore.uk/castle-moil.jpg

**Metrics:**
- Name similarity: 81.8%
- Distance: 105.780km
- Same image: No

**Reasons:** High name similarity (81.8%)

**Recommendation:** **KEEP-BOTH**

---

### 560. KEEP-BOTH (Confidence: 50%)

**Castle A:** Moy Castle
- Location: 56.322, -5.957
- Country/County: Scotland, Argyll and Bute
- Type: castle
- Image: https://img.castlecore.uk/moy-castle.jpg

**Castle B:** Castle Roy  
- Location: 57.2667, -3.6
- Country/County: Scotland, Highland
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Castle_Roy_-_geograph.org.uk_-_2069401.jpg/500px-Castle_Roy_-_geograph.org.uk_-_2069401.jpg

**Metrics:**
- Name similarity: 90.0%
- Distance: 177.848km
- Same image: No

**Reasons:** High name similarity (90.0%)

**Recommendation:** **KEEP-BOTH**

---

### 561. KEEP-BOTH (Confidence: 50%)

**Castle A:** Moy Castle
- Location: 56.322, -5.957
- Country/County: Scotland, Argyll and Bute
- Type: castle
- Image: https://img.castlecore.uk/moy-castle.jpg

**Castle B:** Tor Castle  
- Location: 56.8667, -5.0833
- Country/County: Scotland, Highland
- Type: castle
- Image: https://img.castlecore.uk/tor-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 80.803km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 562. KEEP-BOTH (Confidence: 50%)

**Castle A:** Moy Castle
- Location: 56.322, -5.957
- Country/County: Scotland, Argyll and Bute
- Type: castle
- Image: https://img.castlecore.uk/moy-castle.jpg

**Castle B:** Any Castle  
- Location: 52.365, -8.258
- Country/County: Ireland, County Tipperary
- Type: castle
- Image: https://img.castlecore.uk/any-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 464.522km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 563. KEEP-BOTH (Confidence: 50%)

**Castle A:** Claig Castle
- Location: 55.869, -5.77
- Country/County: Scotland, Argyll and Bute
- Type: castle
- Image: https://img.castlecore.uk/claig-castle.jpg

**Castle B:** Craig Castle  
- Location: 57.36, -2.708
- Country/County: Scotland, Aberdeenshire
- Type: tower house
- Image: https://img.castlecore.uk/craig-castle.jpg

**Metrics:**
- Name similarity: 91.7%
- Distance: 250.135km
- Same image: No

**Reasons:** High name similarity (91.7%)

**Recommendation:** **KEEP-BOTH**

---

### 564. KEEP-BOTH (Confidence: 50%)

**Castle A:** Claig Castle
- Location: 55.869, -5.77
- Country/County: Scotland, Argyll and Bute
- Type: castle
- Image: https://img.castlecore.uk/claig-castle.jpg

**Castle B:** Castle Craig  
- Location: 55.7, -3.2667
- Country/County: Scotland, Scottish Borders
- Type: castle
- Image: https://img.castlecore.uk/castle-craig.jpg

**Metrics:**
- Name similarity: 91.7%
- Distance: 157.636km
- Same image: No

**Reasons:** High name similarity (91.7%)

**Recommendation:** **KEEP-BOTH**

---

### 565. KEEP-BOTH (Confidence: 50%)

**Castle A:** Toward Castle
- Location: 55.859, -4.985
- Country/County: Scotland, Argyll and Bute
- Type: castle
- Image: https://img.castlecore.uk/toward-castle.jpg

**Castle B:** Castle Ward  
- Location: 54.384, -5.583
- Country/County: Ireland, County Down
- Type: castle
- Image: https://img.castlecore.uk/castle-ward.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 168.361km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 566. KEEP-BOTH (Confidence: 50%)

**Castle A:** Castle Moil
- Location: 57.265, -5.728
- Country/County: Scotland, Highland
- Type: castle
- Image: https://img.castlecore.uk/castle-moil.jpg

**Castle B:** Mohill Castle  
- Location: 53.928, -7.868
- Country/County: Ireland, County Leitrim
- Type: castle
- Image: https://img.castlecore.uk/mohill-castle.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 394.615km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 567. KEEP-BOTH (Confidence: 50%)

**Castle A:** Duntulm Castle
- Location: 57.67, -6.365
- Country/County: Scotland, Highland
- Type: castle
- Image: https://img.castlecore.uk/duntulm-castle.jpg

**Castle B:** Duntrune Castle  
- Location: 56.088, -5.583
- Country/County: Scotland, Argyll and Bute
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Duntrune_Castle_-_geograph.org.uk_-_4669295.jpg/500px-Duntrune_Castle_-_geograph.org.uk_-_4669295.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 182.211km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 568. KEEP-BOTH (Confidence: 50%)

**Castle A:** Rait Castle
- Location: 57.506, -3.907
- Country/County: Scotland, Highland
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Rait_Castle.jpg/500px-Rait_Castle.jpg

**Castle B:** Craig Castle  
- Location: 57.36, -2.708
- Country/County: Scotland, Aberdeenshire
- Type: tower house
- Image: https://img.castlecore.uk/craig-castle.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 73.578km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 569. KEEP-BOTH (Confidence: 50%)

**Castle A:** Rait Castle
- Location: 57.506, -3.907
- Country/County: Scotland, Highland
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Rait_Castle.jpg/500px-Rait_Castle.jpg

**Castle B:** Castle Craig  
- Location: 55.7, -3.2667
- Country/County: Scotland, Scottish Borders
- Type: castle
- Image: https://img.castlecore.uk/castle-craig.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 204.604km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 570. KEEP-BOTH (Confidence: 50%)

**Castle A:** Rait Castle
- Location: 57.506, -3.907
- Country/County: Scotland, Highland
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Rait_Castle.jpg/500px-Rait_Castle.jpg

**Castle B:** Castle Grant  
- Location: 57.35, -3.6167
- Country/County: Scotland, Highland
- Type: castle
- Image: https://img.castlecore.uk/castle-grant.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 24.554km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 571. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dornoch Castle
- Location: 57.879, -4.028
- Country/County: Scotland, Highland
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Dornoch_Castle.jpg/500px-Dornoch_Castle.jpg

**Castle B:** Loch Doon Castle  
- Location: 55.298, -4.378
- Country/County: Scotland, Ayrshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Doon_castle_%282266044734%29.jpg/500px-Doon_castle_%282266044734%29.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 287.792km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 572. KEEP-BOTH (Confidence: 50%)

**Castle A:** Skelbo Castle
- Location: 57.911, -4.012
- Country/County: Scotland, Highland
- Type: castle
- Image: https://img.castlecore.uk/skelbo-castle.jpg

**Castle B:** Skibo Castle  
- Location: 57.8833, -4.15
- Country/County: Scotland, Highland
- Type: castle
- Image: https://img.castlecore.uk/skibo-castle.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 8.717km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 573. KEEP-BOTH (Confidence: 50%)

**Castle A:** Loughor Castle
- Location: 51.662, -4.062
- Country/County: Wales, Swansea
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Loughor_Castle_-_geograph.org.uk_-_2353532.jpg/500px-Loughor_Castle_-_geograph.org.uk_-_2353532.jpg

**Castle B:** Loughmoe Castle  
- Location: 52.794, -7.807
- Country/County: Ireland, County Tipperary
- Type: castle
- Image: https://img.castlecore.uk/loughmoe-castle.jpg

**Metrics:**
- Name similarity: 86.7%
- Distance: 284.389km
- Same image: No

**Reasons:** High name similarity (86.7%)

**Recommendation:** **KEEP-BOTH**

---

### 574. KEEP-BOTH (Confidence: 50%)

**Castle A:** Loughor Castle
- Location: 51.662, -4.062
- Country/County: Wales, Swansea
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Loughor_Castle_-_geograph.org.uk_-_2353532.jpg/500px-Loughor_Castle_-_geograph.org.uk_-_2353532.jpg

**Castle B:** Loughrea Castle  
- Location: 53.194, -8.57
- Country/County: Ireland, County Galway
- Type: castle
- Image: https://img.castlecore.uk/loughrea-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 349.826km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 575. KEEP-BOTH (Confidence: 50%)

**Castle A:** Loughor Castle
- Location: 51.662, -4.062
- Country/County: Wales, Swansea
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Loughor_Castle_-_geograph.org.uk_-_2353532.jpg/500px-Loughor_Castle_-_geograph.org.uk_-_2353532.jpg

**Castle B:** Longford Castle  
- Location: 53.726, -7.798
- Country/County: Ireland, County Longford
- Type: castle
- Image: https://img.castlecore.uk/longford-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 340.600km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 576. KEEP-BOTH (Confidence: 50%)

**Castle A:** Loughor Castle
- Location: 51.662, -4.062
- Country/County: Wales, Swansea
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Loughor_Castle_-_geograph.org.uk_-_2353532.jpg/500px-Loughor_Castle_-_geograph.org.uk_-_2353532.jpg

**Castle B:** Lough Ree Castle  
- Location: 53.539, -7.959
- Country/County: Ireland, County Westmeath
- Type: castle
- Image: https://img.castlecore.uk/lough-ree-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 335.820km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 577. KEEP-BOTH (Confidence: 50%)

**Castle A:** Fonmon Castle
- Location: 51.396, -3.448
- Country/County: Wales, Vale of Glamorgan
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Castell_Ffwl-y-mwn.jpg/500px-Castell_Ffwl-y-mwn.jpg

**Castle B:** Donamon Castle  
- Location: 53.671, -8.282
- Country/County: Ireland, County Roscommon
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Donamon_Castle_front.jpg/500px-Donamon_Castle_front.jpg

**Metrics:**
- Name similarity: 85.7%
- Distance: 413.251km
- Same image: No

**Reasons:** High name similarity (85.7%)

**Recommendation:** **KEEP-BOTH**

---

### 578. KEEP-BOTH (Confidence: 50%)

**Castle A:** Carlow Castle
- Location: 52.836, -6.927
- Country/County: Ireland, County Carlow
- Type: castle
- Image: https://img.castlecore.uk/carlow-castle.jpg

**Castle B:** Mallow Castle  
- Location: 52.136, -8.64
- Country/County: Ireland, County Cork
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/The_approach_to_the_fortified_house.JPG/500px-The_approach_to_the_fortified_house.JPG

**Metrics:**
- Name similarity: 84.6%
- Distance: 139.682km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 579. KEEP-BOTH (Confidence: 50%)

**Castle A:** Ballyloughan Castle
- Location: 52.724, -6.908
- Country/County: Ireland, County Carlow
- Type: castle
- Image: https://img.castlecore.uk/ballyloughan-castle.jpg

**Castle B:** Ballylahan Castle  
- Location: 53.83, -9.208
- Country/County: Ireland, County Mayo
- Type: tower house
- Image: https://img.castlecore.uk/ballylahan-castle.jpg

**Metrics:**
- Name similarity: 84.2%
- Distance: 196.223km
- Same image: No

**Reasons:** High name similarity (84.2%)

**Recommendation:** **KEEP-BOTH**

---

### 580. KEEP-BOTH (Confidence: 50%)

**Castle A:** Ballyloughan Castle
- Location: 52.724, -6.908
- Country/County: Ireland, County Carlow
- Type: castle
- Image: https://img.castlecore.uk/ballyloughan-castle.jpg

**Castle B:** Ballyloughloe Castle  
- Location: 53.438, -7.569
- Country/County: Ireland, County Westmeath
- Type: castle
- Image: https://img.castlecore.uk/ballyloughloe-castle.jpg

**Metrics:**
- Name similarity: 85.0%
- Distance: 90.842km
- Same image: No

**Reasons:** High name similarity (85.0%)

**Recommendation:** **KEEP-BOTH**

---

### 581. KEEP-BOTH (Confidence: 50%)

**Castle A:** Burnchurch Castle
- Location: 52.624, -7.449
- Country/County: Ireland, County Kilkenny
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Burnchurch_Castle_ruins.jpg/500px-Burnchurch_Castle_ruins.jpg

**Castle B:** Burncourt Castle  
- Location: 52.31, -8.103
- Country/County: Ireland, County Tipperary
- Type: castle
- Image: https://img.castlecore.uk/burncourt-castle.jpg

**Metrics:**
- Name similarity: 82.4%
- Distance: 56.408km
- Same image: No

**Reasons:** High name similarity (82.4%)

**Recommendation:** **KEEP-BOTH**

---

### 582. KEEP-BOTH (Confidence: 50%)

**Castle A:** Kilkea Castle
- Location: 52.952, -6.938
- Country/County: Ireland, County Kildare
- Type: castle
- Image: https://img.castlecore.uk/kilkea-castle.jpg

**Castle B:** Killua Castle  
- Location: 53.588, -7.208
- Country/County: Ireland, County Westmeath
- Type: castle
- Image: https://img.castlecore.uk/killua-castle.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 72.963km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 583. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dunsink Castle
- Location: 53.387, -6.338
- Country/County: Ireland, County Dublin
- Type: castle
- Image: https://img.castlecore.uk/dunsink-castle.jpg

**Castle B:** Dunlicky Castle  
- Location: 52.569, -9.731
- Country/County: Ireland, County Clare
- Type: tower house
- Image: https://img.castlecore.uk/dunlicky-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 244.673km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 584. KEEP-BOTH (Confidence: 50%)

**Castle A:** Howth Castle
- Location: 53.386, -6.068
- Country/County: Ireland, County Dublin
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Howth_Castle_and_Environs.jpg/500px-Howth_Castle_and_Environs.jpg

**Castle B:** Holt Castle  
- Location: 53.0667, -2.8667
- Country/County: Wales, Wrexham
- Type: castle
- Image: https://img.castlecore.uk/holt-castle.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 216.020km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 585. KEEP-BOTH (Confidence: 50%)

**Castle A:** Bullock Castle
- Location: 53.284, -6.118
- Country/County: Ireland, County Dublin
- Type: castle
- Image: https://img.castlecore.uk/bullock-castle.jpg

**Castle B:** Balloch Castle  
- Location: 56, -4.5833
- Country/County: Scotland, West Dunbartonshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/BallochCastleScotland.jpg/500px-BallochCastleScotland.jpg

**Metrics:**
- Name similarity: 85.7%
- Distance: 317.720km
- Same image: No

**Reasons:** High name similarity (85.7%)

**Recommendation:** **KEEP-BOTH**

---

### 586. KEEP-BOTH (Confidence: 50%)

**Castle A:** Ardgillan Castle
- Location: 53.578, -6.151
- Country/County: Ireland, County Dublin
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Balbriggan_-_Ardgillan_Castle_-_20190707185541.jpg/500px-Balbriggan_-_Ardgillan_Castle_-_20190707185541.jpg

**Castle B:** Ardfinnan Castle  
- Location: 52.316, -7.932
- Country/County: Ireland, County Tipperary
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/ArdfinnanCastleByDavidMulcahy.jpg/500px-ArdfinnanCastleByDavidMulcahy.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 184.193km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 587. KEEP-BOTH (Confidence: 50%)

**Castle A:** Athcarne Castle
- Location: 53.682, -6.598
- Country/County: Ireland, County Meath
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Athcarne_Castle%2C_Co._Meath_-_geograph.org.uk_-_744437.jpg/500px-Athcarne_Castle%2C_Co._Meath_-_geograph.org.uk_-_744437.jpg

**Castle B:** Rathcline Castle  
- Location: 53.682, -7.862
- Country/County: Ireland, County Longford
- Type: castle
- Image: https://img.castlecore.uk/rathcline-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 83.242km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 588. KEEP-BOTH (Confidence: 50%)

**Castle A:** Athcarne Castle
- Location: 53.682, -6.598
- Country/County: Ireland, County Meath
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Athcarne_Castle%2C_Co._Meath_-_geograph.org.uk_-_744437.jpg/500px-Athcarne_Castle%2C_Co._Meath_-_geograph.org.uk_-_744437.jpg

**Castle B:** Cathcart Castle  
- Location: 55.8167, -4.2833
- Country/County: Scotland, Glasgow
- Type: castle
- Image: https://img.castlecore.uk/cathcart-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 279.983km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 589. KEEP-BOTH (Confidence: 50%)

**Castle A:** Ballymoon Castle
- Location: 52.753, -6.873
- Country/County: Ireland, County Carlow
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Ballymoon_Castle_sunset_2.jpg/500px-Ballymoon_Castle_sunset_2.jpg

**Castle B:** Ballymote Castle  
- Location: 54.089, -8.517
- Country/County: Ireland, County Sligo
- Type: castle
- Image: https://img.castlecore.uk/ballymote-castle.jpg

**Metrics:**
- Name similarity: 87.5%
- Distance: 184.208km
- Same image: No

**Reasons:** High name similarity (87.5%)

**Recommendation:** **KEEP-BOTH**

---

### 590. KEEP-BOTH (Confidence: 50%)

**Castle A:** Ballymoon Castle
- Location: 52.753, -6.873
- Country/County: Ireland, County Carlow
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Ballymoon_Castle_sunset_2.jpg/500px-Ballymoon_Castle_sunset_2.jpg

**Castle B:** Ballycowan Castle  
- Location: 53.382, -7.596
- Country/County: Ireland, County Offaly
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Ballycowan_Castle%2C_Co._Offaly_-_geograph.org.uk_-_942610.jpg/500px-Ballycowan_Castle%2C_Co._Offaly_-_geograph.org.uk_-_942610.jpg

**Metrics:**
- Name similarity: 82.4%
- Distance: 85.001km
- Same image: No

**Reasons:** High name similarity (82.4%)

**Recommendation:** **KEEP-BOTH**

---

### 591. KEEP-BOTH (Confidence: 50%)

**Castle A:** Ballymoon Castle
- Location: 52.753, -6.873
- Country/County: Ireland, County Carlow
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Ballymoon_Castle_sunset_2.jpg/500px-Ballymoon_Castle_sunset_2.jpg

**Castle B:** Ballymahon Castle  
- Location: 53.568, -7.768
- Country/County: Ireland, County Longford
- Type: tower house
- Image: https://img.castlecore.uk/ballymahon-castle.jpg

**Metrics:**
- Name similarity: 88.2%
- Distance: 108.502km
- Same image: No

**Reasons:** High name similarity (88.2%)

**Recommendation:** **KEEP-BOTH**

---

### 592. KEEP-BOTH (Confidence: 50%)

**Castle A:** Ballymoon Castle
- Location: 52.753, -6.873
- Country/County: Ireland, County Carlow
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Ballymoon_Castle_sunset_2.jpg/500px-Ballymoon_Castle_sunset_2.jpg

**Castle B:** Ballyboy Castle  
- Location: 53.348, -7.498
- Country/County: Ireland, County Offaly
- Type: tower house
- Image: https://img.castlecore.uk/ballyboy-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 78.245km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 593. KEEP-BOTH (Confidence: 50%)

**Castle A:** Ballymoon Castle
- Location: 52.753, -6.873
- Country/County: Ireland, County Carlow
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Ballymoon_Castle_sunset_2.jpg/500px-Ballymoon_Castle_sunset_2.jpg

**Castle B:** Ballyquin Castle  
- Location: 52.162, -7.578
- Country/County: Ireland, County Waterford
- Type: tower house
- Image: https://img.castlecore.uk/ballyquin-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 81.242km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 594. KEEP-BOTH (Confidence: 50%)

**Castle A:** Ballymoon Castle
- Location: 52.753, -6.873
- Country/County: Ireland, County Carlow
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Ballymoon_Castle_sunset_2.jpg/500px-Ballymoon_Castle_sunset_2.jpg

**Castle B:** Ballylooby Castle  
- Location: 52.275, -7.938
- Country/County: Ireland, County Tipperary
- Type: castle
- Image: https://img.castlecore.uk/ballylooby-castle.jpg

**Metrics:**
- Name similarity: 82.4%
- Distance: 89.547km
- Same image: No

**Reasons:** High name similarity (82.4%)

**Recommendation:** **KEEP-BOTH**

---

### 595. KEEP-BOTH (Confidence: 50%)

**Castle A:** Ballymote Castle
- Location: 54.089, -8.517
- Country/County: Ireland, County Sligo
- Type: castle
- Image: https://img.castlecore.uk/ballymote-castle.jpg

**Castle B:** Ballyboy Castle  
- Location: 53.348, -7.498
- Country/County: Ireland, County Offaly
- Type: tower house
- Image: https://img.castlecore.uk/ballyboy-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 106.227km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 596. KEEP-BOTH (Confidence: 50%)

**Castle A:** Ballymote Castle
- Location: 54.089, -8.517
- Country/County: Ireland, County Sligo
- Type: castle
- Image: https://img.castlecore.uk/ballymote-castle.jpg

**Castle B:** Ballylee Castle  
- Location: 53.068, -8.658
- Country/County: Ireland, County Galway
- Type: tower house
- Image: https://img.castlecore.uk/ballylee-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 113.911km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 597. KEEP-BOTH (Confidence: 50%)

**Castle A:** Moygara Castle
- Location: 53.959, -8.515
- Country/County: Ireland, County Sligo
- Type: castle
- Image: https://img.castlecore.uk/moygara-castle.jpg

**Castle B:** Moyglare Castle  
- Location: 53.41, -6.573
- Country/County: Ireland, County Kildare
- Type: tower house
- Image: https://img.castlecore.uk/moyglare-castle.jpg

**Metrics:**
- Name similarity: 86.7%
- Distance: 141.703km
- Same image: No

**Reasons:** High name similarity (86.7%)

**Recommendation:** **KEEP-BOTH**

---

### 598. KEEP-BOTH (Confidence: 50%)

**Castle A:** Raphoe Castle
- Location: 54.872, -7.597
- Country/County: Ireland, County Donegal
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Raphoe_Castle_-_geograph.org.uk_-_1017810.jpg/500px-Raphoe_Castle_-_geograph.org.uk_-_1017810.jpg

**Castle B:** Rathmore Castle  
- Location: 53.578, -6.512
- Country/County: Ireland, County Meath
- Type: tower house
- Image: https://img.castlecore.uk/rathmore-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 160.238km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 599. KEEP-BOTH (Confidence: 50%)

**Castle A:** Ballinasloe Castle
- Location: 53.331, -8.228
- Country/County: Ireland, County Galway
- Type: castle
- Image: https://img.castlecore.uk/ballinasloe-castle.jpg

**Castle B:** Ballindalloch Castle  
- Location: 57.3419, -3.3625
- Country/County: Scotland, Moray
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Ballindaloch_Castle.jpg/500px-Ballindaloch_Castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 541.547km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 600. KEEP-BOTH (Confidence: 50%)

**Castle A:** Oranmore Castle
- Location: 53.269, -8.925
- Country/County: Ireland, County Galway
- Type: castle
- Image: https://img.castlecore.uk/oranmore-castle.jpg

**Castle B:** Rathmore Castle  
- Location: 53.578, -6.512
- Country/County: Ireland, County Meath
- Type: tower house
- Image: https://img.castlecore.uk/rathmore-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 163.528km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 601. KEEP-BOTH (Confidence: 50%)

**Castle A:** Oranmore Castle
- Location: 53.269, -8.925
- Country/County: Ireland, County Galway
- Type: castle
- Image: https://img.castlecore.uk/oranmore-castle.jpg

**Castle B:** Gortmore Castle  
- Location: 53.39, -8.64
- Country/County: Ireland, County Galway
- Type: tower house
- Image: https://img.castlecore.uk/gortmore-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 23.221km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 602. KEEP-BOTH (Confidence: 50%)

**Castle A:** Oranmore Castle
- Location: 53.269, -8.925
- Country/County: Ireland, County Galway
- Type: castle
- Image: https://img.castlecore.uk/oranmore-castle.jpg

**Castle B:** Bremore Castle  
- Location: 53.588, -6.181
- Country/County: Ireland, County Dublin
- Type: castle
- Image: https://img.castlecore.uk/bremore-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 185.213km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 603. KEEP-BOTH (Confidence: 50%)

**Castle A:** Killahara Castle
- Location: 52.708, -7.796
- Country/County: Ireland, County Tipperary
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Killahara_Castle.jpg/500px-Killahara_Castle.jpg

**Castle B:** Killaha Castle  
- Location: 51.87, -9.75
- Country/County: Ireland, County Kerry
- Type: tower house
- Image: https://img.castlecore.uk/killaha-castle.jpg

**Metrics:**
- Name similarity: 87.5%
- Distance: 162.305km
- Same image: No

**Reasons:** High name similarity (87.5%)

**Recommendation:** **KEEP-BOTH**

---

### 604. KEEP-BOTH (Confidence: 50%)

**Castle A:** Loughmoe Castle
- Location: 52.794, -7.807
- Country/County: Ireland, County Tipperary
- Type: castle
- Image: https://img.castlecore.uk/loughmoe-castle.jpg

**Castle B:** Lough Key Castle  
- Location: 53.986, -8.066
- Country/County: Ireland, County Roscommon
- Type: castle
- Image: https://img.castlecore.uk/lough-key-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 133.652km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 605. KEEP-BOTH (Confidence: 50%)

**Castle A:** Loughmoe Castle
- Location: 52.794, -7.807
- Country/County: Ireland, County Tipperary
- Type: castle
- Image: https://img.castlecore.uk/loughmoe-castle.jpg

**Castle B:** Loughrea Castle  
- Location: 53.194, -8.57
- Country/County: Ireland, County Galway
- Type: castle
- Image: https://img.castlecore.uk/loughrea-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 67.720km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 606. KEEP-BOTH (Confidence: 50%)

**Castle A:** Loughmoe Castle
- Location: 52.794, -7.807
- Country/County: Ireland, County Tipperary
- Type: castle
- Image: https://img.castlecore.uk/loughmoe-castle.jpg

**Castle B:** Lough Ree Castle  
- Location: 53.539, -7.959
- Country/County: Ireland, County Westmeath
- Type: castle
- Image: https://img.castlecore.uk/lough-ree-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 83.458km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 607. KEEP-BOTH (Confidence: 50%)

**Castle A:** Glenstal Castle
- Location: 52.656, -8.42
- Country/County: Ireland, County Limerick
- Type: castle
- Image: https://img.castlecore.uk/glenstal-castle.jpg

**Castle B:** Gleaston Castle  
- Location: 54.161, -3.125
- Country/County: England, Cumbria
- Type: castle
- Image: https://img.castlecore.uk/gleaston-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 388.697km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 608. KEEP-BOTH (Confidence: 50%)

**Castle A:** Kilcoe Castle
- Location: 51.558, -9.492
- Country/County: Ireland, County Cork
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Kilcoe_Castle.jpg/500px-Kilcoe_Castle.jpg

**Castle B:** Kilclief Castle  
- Location: 54.328, -5.582
- Country/County: Northern Ireland, County Down
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Kilclief_Castle%2C_Geograph.jpg/500px-Kilclief_Castle%2C_Geograph.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 404.243km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 609. KEEP-BOTH (Confidence: 50%)

**Castle A:** Kilcoe Castle
- Location: 51.558, -9.492
- Country/County: Ireland, County Cork
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Kilcoe_Castle.jpg/500px-Kilcoe_Castle.jpg

**Castle B:** Kilcogan Castle  
- Location: 53.218, -8.788
- Country/County: Ireland, County Galway
- Type: tower house
- Image: https://img.castlecore.uk/kilcogan-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 190.664km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 610. KEEP-BOTH (Confidence: 50%)

**Castle A:** Mallow Castle
- Location: 52.136, -8.64
- Country/County: Ireland, County Cork
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/The_approach_to_the_fortified_house.JPG/500px-The_approach_to_the_fortified_house.JPG

**Castle B:** Millom Castle  
- Location: 54.21, -3.2717
- Country/County: England, Cumbria
- Type: castle
- Image: https://img.castlecore.uk/millom-castle.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 425.507km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 611. KEEP-BOTH (Confidence: 50%)

**Castle A:** Macroom Castle
- Location: 51.904, -8.958
- Country/County: Ireland, County Cork
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Macroom_Castle.jpg/500px-Macroom_Castle.jpg

**Castle B:** Croom Castle  
- Location: 52.519, -8.718
- Country/County: Ireland, County Limerick
- Type: castle
- Image: https://img.castlecore.uk/croom-castle.jpg

**Metrics:**
- Name similarity: 85.7%
- Distance: 70.313km
- Same image: No

**Reasons:** High name similarity (85.7%)

**Recommendation:** **KEEP-BOTH**

---

### 612. KEEP-BOTH (Confidence: 50%)

**Castle A:** Minard Castle
- Location: 52.121, -10.072
- Country/County: Ireland, County Kerry
- Type: castle
- Image: https://img.castlecore.uk/minard-castle.jpg

**Castle B:** Kinnaird Castle  
- Location: 56.7333, -2.55
- Country/County: Scotland, Angus
- Type: castle
- Image: https://img.castlecore.uk/kinnaird-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 706.171km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 613. KEEP-BOTH (Confidence: 50%)

**Castle A:** Carrigafoyle Castle
- Location: 52.54, -9.583
- Country/County: Ireland, County Kerry
- Type: castle
- Image: https://img.castlecore.uk/carrigafoyle-castle.jpg

**Castle B:** Carrigaholt Castle  
- Location: 52.61, -9.71
- Country/County: Ireland, County Clare
- Type: tower house
- Image: https://img.castlecore.uk/carrigaholt-castle.jpg

**Metrics:**
- Name similarity: 84.2%
- Distance: 11.586km
- Same image: No

**Reasons:** High name similarity (84.2%)

**Recommendation:** **KEEP-BOTH**

---

### 614. KEEP-BOTH (Confidence: 50%)

**Castle A:** Kilbolane Castle
- Location: 52.229, -8.829
- Country/County: Ireland, County Cork
- Type: castle
- Image: https://img.castlecore.uk/kilbolane-castle.jpg

**Castle B:** Kilronan Castle  
- Location: 53.975, -8.118
- Country/County: Ireland, County Roscommon
- Type: castle
- Image: https://img.castlecore.uk/kilronan-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 199.862km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 615. KEEP-BOTH (Confidence: 50%)

**Castle A:** Kilbolane Castle
- Location: 52.229, -8.829
- Country/County: Ireland, County Cork
- Type: castle
- Image: https://img.castlecore.uk/kilbolane-castle.jpg

**Castle B:** Kilcolman Castle  
- Location: 52.252, -8.828
- Country/County: Ireland, County Cork
- Type: tower house
- Image: https://img.castlecore.uk/kilcolman-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 2.558km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 616. KEEP-BOTH (Confidence: 50%)

**Castle A:** Kilbolane Castle
- Location: 52.229, -8.829
- Country/County: Ireland, County Cork
- Type: castle
- Image: https://img.castlecore.uk/kilbolane-castle.jpg

**Castle B:** Kilcogan Castle  
- Location: 53.218, -8.788
- Country/County: Ireland, County Galway
- Type: tower house
- Image: https://img.castlecore.uk/kilcogan-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 110.006km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 617. KEEP-BOTH (Confidence: 50%)

**Castle A:** Kilbolane Castle
- Location: 52.229, -8.829
- Country/County: Ireland, County Cork
- Type: castle
- Image: https://img.castlecore.uk/kilbolane-castle.jpg

**Castle B:** Lilbourne Castle  
- Location: 52.365, -1.1767
- Country/County: England, Northamptonshire
- Type: castle
- Image: https://img.castlecore.uk/lilbourne-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 520.359km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 618. KEEP-BOTH (Confidence: 50%)

**Castle A:** Lough Key Castle
- Location: 53.986, -8.066
- Country/County: Ireland, County Roscommon
- Type: castle
- Image: https://img.castlecore.uk/lough-key-castle.jpg

**Castle B:** Kinlough Castle  
- Location: 53.79, -9.69
- Country/County: Ireland, County Mayo
- Type: tower house
- Image: https://img.castlecore.uk/kinlough-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 108.634km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 619. KEEP-BOTH (Confidence: 50%)

**Castle A:** Lough Key Castle
- Location: 53.986, -8.066
- Country/County: Ireland, County Roscommon
- Type: castle
- Image: https://img.castlecore.uk/lough-key-castle.jpg

**Castle B:** Moylough Castle  
- Location: 53.587, -8.568
- Country/County: Ireland, County Galway
- Type: tower house
- Image: https://img.castlecore.uk/moylough-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 55.281km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 620. KEEP-BOTH (Confidence: 50%)

**Castle A:** Lough Key Castle
- Location: 53.986, -8.066
- Country/County: Ireland, County Roscommon
- Type: castle
- Image: https://img.castlecore.uk/lough-key-castle.jpg

**Castle B:** Loughrea Castle  
- Location: 53.194, -8.57
- Country/County: Ireland, County Galway
- Type: castle
- Image: https://img.castlecore.uk/loughrea-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 94.139km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 621. KEEP-BOTH (Confidence: 50%)

**Castle A:** Lough Key Castle
- Location: 53.986, -8.066
- Country/County: Ireland, County Roscommon
- Type: castle
- Image: https://img.castlecore.uk/lough-key-castle.jpg

**Castle B:** Lough Ree Castle  
- Location: 53.539, -7.959
- Country/County: Ireland, County Westmeath
- Type: castle
- Image: https://img.castlecore.uk/lough-ree-castle.jpg

**Metrics:**
- Name similarity: 87.5%
- Distance: 50.199km
- Same image: No

**Reasons:** High name similarity (87.5%)

**Recommendation:** **KEEP-BOTH**

---

### 622. KEEP-BOTH (Confidence: 50%)

**Castle A:** Wray Castle
- Location: 54.381, -2.953
- Country/County: England, Cumbria
- Type: castle
- Image: https://img.castlecore.uk/wray-castle.jpg

**Castle B:** Castle Roy  
- Location: 57.2667, -3.6
- Country/County: Scotland, Highland
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Castle_Roy_-_geograph.org.uk_-_2069401.jpg/500px-Castle_Roy_-_geograph.org.uk_-_2069401.jpg

**Metrics:**
- Name similarity: 81.8%
- Distance: 323.406km
- Same image: No

**Reasons:** High name similarity (81.8%)

**Recommendation:** **KEEP-BOTH**

---

### 623. KEEP-BOTH (Confidence: 50%)

**Castle A:** Newtown Castle
- Location: 53.087, -9.052
- Country/County: Ireland, County Clare
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Newtown_Castle.png/500px-Newtown_Castle.png

**Castle B:** Annestown Castle  
- Location: 52.142, -7.202
- Country/County: Ireland, County Waterford
- Type: tower house
- Image: https://img.castlecore.uk/annestown-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 163.215km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 624. KEEP-BOTH (Confidence: 50%)

**Castle A:** Doonagore Castle
- Location: 52.949, -9.403
- Country/County: Ireland, County Clare
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Doonagore_Castle.jpg/500px-Doonagore_Castle.jpg

**Castle B:** Donore Castle  
- Location: 53.683, -6.41
- Country/County: Ireland, County Meath
- Type: tower house
- Image: https://img.castlecore.uk/donore-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 214.898km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 625. KEEP-BOTH (Confidence: 50%)

**Castle A:** Gleninagh Castle
- Location: 53.098, -9.18
- Country/County: Ireland, County Clare
- Type: tower house
- Image: https://img.castlecore.uk/gleninagh-castle.jpg

**Castle B:** Grannagh Castle  
- Location: 52.325, -7.159
- Country/County: Ireland, County Kilkenny
- Type: castle
- Image: https://img.castlecore.uk/grannagh-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 160.998km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 626. KEEP-BOTH (Confidence: 50%)

**Castle A:** Annaghdown Castle
- Location: 53.389, -8.936
- Country/County: Ireland, County Galway
- Type: tower house
- Image: https://img.castlecore.uk/annaghdown-castle.jpg

**Castle B:** Annaghkeen Castle  
- Location: 53.439, -8.928
- Country/County: Ireland, County Galway
- Type: tower house
- Image: https://img.castlecore.uk/annaghkeen-castle.jpg

**Metrics:**
- Name similarity: 82.4%
- Distance: 5.585km
- Same image: No

**Reasons:** High name similarity (82.4%)

**Recommendation:** **KEEP-BOTH**

---

### 627. KEEP-BOTH (Confidence: 50%)

**Castle A:** Clonbur Castle
- Location: 53.539, -9.509
- Country/County: Ireland, County Galway
- Type: tower house
- Image: https://img.castlecore.uk/clonbur-castle.jpg

**Castle B:** Closeburn Castle  
- Location: 55.2333, -3.65
- Country/County: Scotland, Dumfries and Galloway
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Castle_1.jpg/500px-Castle_1.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 423.397km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 628. KEEP-BOTH (Confidence: 50%)

**Castle A:** Clonbur Castle
- Location: 53.539, -9.509
- Country/County: Ireland, County Galway
- Type: tower house
- Image: https://img.castlecore.uk/clonbur-castle.jpg

**Castle B:** Clontarf Castle  
- Location: 53.365, -6.203
- Country/County: Ireland, County Dublin
- Type: castle
- Image: https://img.castlecore.uk/clontarf-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 219.744km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 629. KEEP-BOTH (Confidence: 50%)

**Castle A:** Killarone Castle
- Location: 53.33, -8.6
- Country/County: Ireland, County Galway
- Type: tower house
- Image: https://img.castlecore.uk/killarone-castle.jpg

**Castle B:** Kilbarron Castle  
- Location: 54.581, -8.347
- Country/County: Ireland, County Donegal
- Type: tower house
- Image: https://img.castlecore.uk/kilbarron-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 140.086km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 630. KEEP-BOTH (Confidence: 50%)

**Castle A:** Killarone Castle
- Location: 53.33, -8.6
- Country/County: Ireland, County Galway
- Type: tower house
- Image: https://img.castlecore.uk/killarone-castle.jpg

**Castle B:** Kildare Castle  
- Location: 53.157, -6.91
- Country/County: Ireland, County Kildare
- Type: castle
- Image: https://img.castlecore.uk/kildare-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 114.085km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 631. KEEP-BOTH (Confidence: 50%)

**Castle A:** Gallarus Castle
- Location: 52.17, -10.351
- Country/County: Ireland, County Kerry
- Type: tower house
- Image: https://img.castlecore.uk/gallarus-castle.jpg

**Castle B:** Pallas Castle  
- Location: 53.115, -8.748
- Country/County: Ireland, County Galway
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Castles_of_Connacht%2C_Pallas%2C_Galway_-_geograph.org.uk_-_1543456.jpg/500px-Castles_of_Connacht%2C_Pallas%2C_Galway_-_geograph.org.uk_-_1543456.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 150.789km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 632. KEEP-BOTH (Confidence: 50%)

**Castle A:** Rahinnane Castle
- Location: 52.143, -10.306
- Country/County: Ireland, County Kerry
- Type: castle
- Image: https://img.castlecore.uk/rahinnane-castle.jpg

**Castle B:** Rahasane Castle  
- Location: 53.225, -8.755
- Country/County: Ireland, County Galway
- Type: tower house
- Image: https://img.castlecore.uk/rahasane-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 159.384km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 633. KEEP-BOTH (Confidence: 50%)

**Castle A:** Killaha Castle
- Location: 51.87, -9.75
- Country/County: Ireland, County Kerry
- Type: tower house
- Image: https://img.castlecore.uk/killaha-castle.jpg

**Castle B:** Kilglass Castle  
- Location: 54.198, -8.398
- Country/County: Ireland, County Sligo
- Type: tower house
- Image: https://img.castlecore.uk/kilglass-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 274.180km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 634. KEEP-BOTH (Confidence: 50%)

**Castle A:** Killaha Castle
- Location: 51.87, -9.75
- Country/County: Ireland, County Kerry
- Type: tower house
- Image: https://img.castlecore.uk/killaha-castle.jpg

**Castle B:** Killua Castle  
- Location: 53.588, -7.208
- Country/County: Ireland, County Westmeath
- Type: castle
- Image: https://img.castlecore.uk/killua-castle.jpg

**Metrics:**
- Name similarity: 85.7%
- Distance: 256.471km
- Same image: No

**Reasons:** High name similarity (85.7%)

**Recommendation:** **KEEP-BOTH**

---

### 635. KEEP-BOTH (Confidence: 50%)

**Castle A:** Killaha Castle
- Location: 51.87, -9.75
- Country/County: Ireland, County Kerry
- Type: tower house
- Image: https://img.castlecore.uk/killaha-castle.jpg

**Castle B:** Killagha Abbey  
- Location: 52.068, -9.79
- Country/County: Ireland, County Kerry
- Type: abbey
- Image: https://img.castlecore.uk/killagha-abbey.jpg

**Metrics:**
- Name similarity: 87.5%
- Distance: 22.186km
- Same image: No

**Reasons:** High name similarity (87.5%)

**Recommendation:** **KEEP-BOTH**

---

### 636. KEEP-BOTH (Confidence: 50%)

**Castle A:** Ballinacarriga Castle
- Location: 51.721, -9.098
- Country/County: Ireland, County Cork
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Ballinacarriga_Castle.jpg/500px-Ballinacarriga_Castle.jpg

**Castle B:** Ballynacorra Castle  
- Location: 51.87, -8.183
- Country/County: Ireland, County Cork
- Type: tower house
- Image: https://img.castlecore.uk/ballynacorra-castle.jpg

**Metrics:**
- Name similarity: 81.0%
- Distance: 65.069km
- Same image: No

**Reasons:** High name similarity (81.0%)

**Recommendation:** **KEEP-BOTH**

---

### 637. KEEP-BOTH (Confidence: 50%)

**Castle A:** Lohort Castle
- Location: 52.137, -8.745
- Country/County: Ireland, County Cork
- Type: castle
- Image: https://img.castlecore.uk/scraped-lohort.jpg

**Castle B:** Lochore Castle  
- Location: 56.148, -3.358
- Country/County: Scotland, Fife
- Type: castle
- Image: https://img.castlecore.uk/lochore-castle.jpg

**Metrics:**
- Name similarity: 85.7%
- Distance: 567.131km
- Same image: No

**Reasons:** High name similarity (85.7%)

**Recommendation:** **KEEP-BOTH**

---

### 638. KEEP-BOTH (Confidence: 50%)

**Castle A:** Monkstown Castle
- Location: 51.836, -8.355
- Country/County: Ireland, County Cork
- Type: castle
- Image: https://img.castlecore.uk/monkstown-castle.jpg

**Castle B:** Johnstown Castle  
- Location: 52.293, -6.5
- Country/County: Ireland, County Wexford
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Johnstown_Castle%2C_Wexford.jpg/500px-Johnstown_Castle%2C_Wexford.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 136.605km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 639. KEEP-BOTH (Confidence: 50%)

**Castle A:** Monkstown Castle
- Location: 51.836, -8.355
- Country/County: Ireland, County Cork
- Type: castle
- Image: https://img.castlecore.uk/monkstown-castle.jpg

**Castle B:** Woodstown Castle  
- Location: 52.228, -6.998
- Country/County: Ireland, County Waterford
- Type: tower house
- Image: https://img.castlecore.uk/woodstown-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 102.553km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 640. KEEP-BOTH (Confidence: 50%)

**Castle A:** Monkstown Castle
- Location: 51.836, -8.355
- Country/County: Ireland, County Cork
- Type: castle
- Image: https://img.castlecore.uk/monkstown-castle.jpg

**Castle B:** Roodstown Castle  
- Location: 53.843, -6.577
- Country/County: Ireland, County Louth
- Type: tower house
- Image: https://img.castlecore.uk/roodstown-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 253.093km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 641. KEEP-BOTH (Confidence: 50%)

**Castle A:** Monkstown Castle
- Location: 51.836, -8.355
- Country/County: Ireland, County Cork
- Type: castle
- Image: https://img.castlecore.uk/monkstown-castle.jpg

**Castle B:** Annestown Castle  
- Location: 52.142, -7.202
- Country/County: Ireland, County Waterford
- Type: tower house
- Image: https://img.castlecore.uk/annestown-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 85.971km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 642. KEEP-BOTH (Confidence: 50%)

**Castle A:** Monkstown Castle
- Location: 51.836, -8.355
- Country/County: Ireland, County Cork
- Type: castle
- Image: https://img.castlecore.uk/monkstown-castle.jpg

**Castle B:** Moorstown Castle  
- Location: 52.38, -7.625
- Country/County: Ireland, County Tipperary
- Type: tower house
- Image: https://img.castlecore.uk/wiki-moorstown-castle.jpg

**Metrics:**
- Name similarity: 87.5%
- Distance: 78.386km
- Same image: No

**Reasons:** High name similarity (87.5%)

**Recommendation:** **KEEP-BOTH**

---

### 643. KEEP-BOTH (Confidence: 50%)

**Castle A:** Carrigaphooca Castle
- Location: 51.897, -9
- Country/County: Ireland, County Cork
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/a/a9/Carrigaphooca_Castle.jpg

**Castle B:** Carrigaholt Castle  
- Location: 52.61, -9.71
- Country/County: Ireland, County Clare
- Type: tower house
- Image: https://img.castlecore.uk/carrigaholt-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 92.850km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 644. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dundanion Castle
- Location: 51.851, -8.384
- Country/County: Ireland, County Cork
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Dundanion_Castle_Blackrock_Cork.jpg/500px-Dundanion_Castle_Blackrock_Cork.jpg

**Castle B:** Dunmahon Castle  
- Location: 54.03, -6.21
- Country/County: Ireland, County Louth
- Type: tower house
- Image: https://img.castlecore.uk/dunmahon-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 282.687km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 645. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dundanion Castle
- Location: 51.851, -8.384
- Country/County: Ireland, County Cork
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Dundanion_Castle_Blackrock_Cork.jpg/500px-Dundanion_Castle_Blackrock_Cork.jpg

**Castle B:** Dunlavin Castle  
- Location: 53.057, -6.701
- Country/County: Ireland, County Wicklow
- Type: castle
- Image: https://img.castlecore.uk/dunlavin-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 176.027km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 646. KEEP-BOTH (Confidence: 50%)

**Castle A:** Ballindoney Castle
- Location: 52.52, -7.83
- Country/County: Ireland, County Tipperary
- Type: tower house
- Image: https://img.castlecore.uk/ballindoney-castle.jpg

**Castle B:** Ballinderry Castle  
- Location: 53.295, -8.478
- Country/County: Ireland, County Galway
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Castles_of_Connacht%2C_Ballinderry%2C_Galway_-_geograph.org.uk_-_1953864.jpg/500px-Castles_of_Connacht%2C_Ballinderry%2C_Galway_-_geograph.org.uk_-_1953864.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 96.512km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 647. KEEP-BOTH (Confidence: 50%)

**Castle A:** Ballindoney Castle
- Location: 52.52, -7.83
- Country/County: Ireland, County Tipperary
- Type: tower house
- Image: https://img.castlecore.uk/ballindoney-castle.jpg

**Castle B:** Ballinrobe Castle  
- Location: 53.622, -9.228
- Country/County: Ireland, County Mayo
- Type: castle
- Image: https://img.castlecore.uk/ballinrobe-castle.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 154.067km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 648. KEEP-BOTH (Confidence: 50%)

**Castle A:** Lackeen Castle
- Location: 52.909, -8.068
- Country/County: Ireland, County Tipperary
- Type: tower house
- Image: https://img.castlecore.uk/lackeen-castle.jpg

**Castle B:** Lackan Castle  
- Location: 53.5, -7.6
- Country/County: Ireland, County Westmeath
- Type: tower house
- Image: https://img.castlecore.uk/lackan-castle.jpg

**Metrics:**
- Name similarity: 85.7%
- Distance: 72.733km
- Same image: No

**Reasons:** High name similarity (85.7%)

**Recommendation:** **KEEP-BOTH**

---

### 649. KEEP-BOTH (Confidence: 50%)

**Castle A:** Grannagh Castle
- Location: 52.325, -7.159
- Country/County: Ireland, County Kilkenny
- Type: castle
- Image: https://img.castlecore.uk/grannagh-castle.jpg

**Castle B:** Brackagh Castle  
- Location: 54.548, -7.098
- Country/County: Northern Ireland, County Tyrone
- Type: tower house
- Image: https://img.castlecore.uk/brackagh-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 247.219km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 650. KEEP-BOTH (Confidence: 50%)

**Castle A:** Grannagh Castle
- Location: 52.325, -7.159
- Country/County: Ireland, County Kilkenny
- Type: castle
- Image: https://img.castlecore.uk/grannagh-castle.jpg

**Castle B:** Grennan Castle  
- Location: 52.728, -7.258
- Country/County: Ireland, County Kilkenny
- Type: castle
- Image: https://img.castlecore.uk/grennan-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 45.309km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 651. KEEP-BOTH (Confidence: 50%)

**Castle A:** Grannagh Castle
- Location: 52.325, -7.159
- Country/County: Ireland, County Kilkenny
- Type: castle
- Image: https://img.castlecore.uk/grannagh-castle.jpg

**Castle B:** Granagh Castle  
- Location: 52.328, -7.532
- Country/County: Ireland, County Kilkenny
- Type: castle
- Image: https://img.castlecore.uk/granagh-castle.jpg

**Metrics:**
- Name similarity: 93.3%
- Distance: 25.351km
- Same image: No

**Reasons:** High name similarity (93.3%)

**Recommendation:** **KEEP-BOTH**

---

### 652. KEEP-BOTH (Confidence: 50%)

**Castle A:** Clomantagh Castle
- Location: 52.718, -7.485
- Country/County: Ireland, County Kilkenny
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/4/45/Clomantagh_%28or_Croomantagh%29_Castle_-_geograph.org.uk_-_1479267.jpg

**Castle B:** Lemaneagh Castle  
- Location: 52.977, -9.018
- Country/County: Ireland, County Clare
- Type: castle
- Image: https://img.castlecore.uk/lemaneagh-castle.jpg

**Metrics:**
- Name similarity: 82.4%
- Distance: 106.898km
- Same image: No

**Reasons:** High name similarity (82.4%)

**Recommendation:** **KEEP-BOTH**

---

### 653. KEEP-BOTH (Confidence: 50%)

**Castle A:** Shankill Castle
- Location: 52.599, -7.201
- Country/County: Ireland, County Kilkenny
- Type: tower house
- Image: https://img.castlecore.uk/shankill-castle.jpg

**Castle B:** Shanid Castle  
- Location: 52.54, -9.2
- Country/County: Ireland, County Limerick
- Type: castle
- Image: https://img.castlecore.uk/shanid-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 135.256km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 654. KEEP-BOTH (Confidence: 50%)

**Castle A:** Johnstown Castle
- Location: 52.293, -6.5
- Country/County: Ireland, County Wexford
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Johnstown_Castle%2C_Wexford.jpg/500px-Johnstown_Castle%2C_Wexford.jpg

**Castle B:** Jamestown Castle  
- Location: 53.925, -8.068
- Country/County: Ireland, County Leitrim
- Type: fortification
- Image: https://img.castlecore.uk/jamestown-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 209.477km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 655. KEEP-BOTH (Confidence: 50%)

**Castle A:** Johnstown Castle
- Location: 52.293, -6.5
- Country/County: Ireland, County Wexford
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Johnstown_Castle%2C_Wexford.jpg/500px-Johnstown_Castle%2C_Wexford.jpg

**Castle B:** Woodstown Castle  
- Location: 52.228, -6.998
- Country/County: Ireland, County Waterford
- Type: tower house
- Image: https://img.castlecore.uk/woodstown-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 34.656km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 656. KEEP-BOTH (Confidence: 50%)

**Castle A:** Johnstown Castle
- Location: 52.293, -6.5
- Country/County: Ireland, County Wexford
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Johnstown_Castle%2C_Wexford.jpg/500px-Johnstown_Castle%2C_Wexford.jpg

**Castle B:** Roodstown Castle  
- Location: 53.843, -6.577
- Country/County: Ireland, County Louth
- Type: tower house
- Image: https://img.castlecore.uk/roodstown-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 172.429km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 657. KEEP-BOTH (Confidence: 50%)

**Castle A:** Johnstown Castle
- Location: 52.293, -6.5
- Country/County: Ireland, County Wexford
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Johnstown_Castle%2C_Wexford.jpg/500px-Johnstown_Castle%2C_Wexford.jpg

**Castle B:** Moorstown Castle  
- Location: 52.38, -7.625
- Country/County: Ireland, County Tipperary
- Type: tower house
- Image: https://img.castlecore.uk/wiki-moorstown-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 77.044km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 658. KEEP-BOTH (Confidence: 50%)

**Castle A:** Bargy Castle
- Location: 52.222, -6.561
- Country/County: Ireland, County Wexford
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Bargy_Castle_-_geograph.org.uk_-_1239917.jpg/500px-Bargy_Castle_-_geograph.org.uk_-_1239917.jpg

**Castle B:** Barra Castle  
- Location: 57.185, -2.367
- Country/County: Scotland, Aberdeenshire
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Barra_Castle%2C_Bourtie%2C_Oldmeldrum_side_view.jpg/500px-Barra_Castle%2C_Bourtie%2C_Oldmeldrum_side_view.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 613.857km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 659. KEEP-BOTH (Confidence: 50%)

**Castle A:** Donore Castle
- Location: 53.683, -6.41
- Country/County: Ireland, County Meath
- Type: tower house
- Image: https://img.castlecore.uk/donore-castle.jpg

**Castle B:** Dunure Castle  
- Location: 55.4, -4.75
- Country/County: Scotland, South Ayrshire
- Type: castle
- Image: https://img.castlecore.uk/dunure-castle.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 218.885km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 660. KEEP-BOTH (Confidence: 50%)

**Castle A:** Rathmiles Castle
- Location: 53.55, -6.7
- Country/County: Ireland, County Meath
- Type: tower house
- Image: https://img.castlecore.uk/rathmiles-castle.jpg

**Castle B:** Rathmore Castle  
- Location: 53.578, -6.512
- Country/County: Ireland, County Meath
- Type: tower house
- Image: https://img.castlecore.uk/rathmore-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 12.800km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 661. KEEP-BOTH (Confidence: 50%)

**Castle A:** Castlepollard Castle
- Location: 53.678, -7.296
- Country/County: Ireland, County Westmeath
- Type: castle
- Image: https://img.castlecore.uk/castlepollard-castle.jpg

**Castle B:** Castleisland Castle  
- Location: 52.232, -9.467
- Country/County: Ireland, County Kerry
- Type: castle
- Image: https://img.castlecore.uk/castleisland-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 216.782km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 662. KEEP-BOTH (Confidence: 50%)

**Castle A:** Delvin Castle
- Location: 53.613, -7.092
- Country/County: Ireland, County Westmeath
- Type: castle
- Image: https://img.castlecore.uk/delvin-castle.jpg

**Castle B:** Castle Kevin  
- Location: 53.041, -6.285
- Country/County: Ireland, County Wicklow
- Type: castle
- Image: https://img.castlecore.uk/castle-kevin.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 83.171km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 663. KEEP-BOTH (Confidence: 50%)

**Castle A:** Delvin Castle
- Location: 53.613, -7.092
- Country/County: Ireland, County Westmeath
- Type: castle
- Image: https://img.castlecore.uk/delvin-castle.jpg

**Castle B:** Dunlavin Castle  
- Location: 53.057, -6.701
- Country/County: Ireland, County Wicklow
- Type: castle
- Image: https://img.castlecore.uk/dunlavin-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 67.054km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 664. KEEP-BOTH (Confidence: 50%)

**Castle A:** Fore Castle
- Location: 53.69, -7.186
- Country/County: Ireland, County Westmeath
- Type: castle
- Image: https://img.castlecore.uk/fore-castle.jpg

**Castle B:** Castle Forbes  
- Location: 53.725, -7.818
- Country/County: Ireland, County Longford
- Type: castle
- Image: https://img.castlecore.uk/castle-forbes.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 41.778km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 665. KEEP-BOTH (Confidence: 50%)

**Castle A:** Fore Castle
- Location: 53.69, -7.186
- Country/County: Ireland, County Westmeath
- Type: castle
- Image: https://img.castlecore.uk/fore-castle.jpg

**Castle B:** Corse Castle  
- Location: 57.178, -2.628
- Country/County: Scotland, Aberdeenshire
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Corse_Castle_-_geograph.org.uk_-_252876.jpg/500px-Corse_Castle_-_geograph.org.uk_-_252876.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 482.592km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 666. KEEP-BOTH (Confidence: 50%)

**Castle A:** Fore Castle
- Location: 53.69, -7.186
- Country/County: Ireland, County Westmeath
- Type: castle
- Image: https://img.castlecore.uk/fore-castle.jpg

**Castle B:** Castlemore  
- Location: 53.862, -8.193
- Country/County: Ireland, County Roscommon
- Type: castle
- Image: https://img.castlecore.uk/scraped-castlemore.jpg

**Metrics:**
- Name similarity: 81.8%
- Distance: 68.878km
- Same image: No

**Reasons:** High name similarity (81.8%)

**Recommendation:** **KEEP-BOTH**

---

### 667. KEEP-BOTH (Confidence: 50%)

**Castle A:** Fore Castle
- Location: 53.69, -7.186
- Country/County: Ireland, County Westmeath
- Type: castle
- Image: https://img.castlecore.uk/fore-castle.jpg

**Castle B:** Borve Castle  
- Location: 58.1167, -5
- Country/County: Scotland, Highland
- Type: castle
- Image: https://img.castlecore.uk/borve-castle.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 510.670km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 668. KEEP-BOTH (Confidence: 50%)

**Castle A:** Fore Castle
- Location: 53.69, -7.186
- Country/County: Ireland, County Westmeath
- Type: castle
- Image: https://img.castlecore.uk/fore-castle.jpg

**Castle B:** Tor Castle  
- Location: 56.8667, -5.0833
- Country/County: Scotland, Highland
- Type: castle
- Image: https://img.castlecore.uk/tor-castle.jpg

**Metrics:**
- Name similarity: 81.8%
- Distance: 377.459km
- Same image: No

**Reasons:** High name similarity (81.8%)

**Recommendation:** **KEEP-BOTH**

---

### 669. KEEP-BOTH (Confidence: 50%)

**Castle A:** Leap Castle
- Location: 52.952, -7.809
- Country/County: Ireland, County Offaly
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Castles_of_Leinster-_Leap%2C_Offaly_%28geograph_1952750%29.jpg/500px-Castles_of_Leinster-_Leap%2C_Offaly_%28geograph_1952750%29.jpg

**Castle B:** Castle Leod  
- Location: 57.6833, -4.5667
- Country/County: Scotland, Highland
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Castle_Leod_%28geograph_4176882%29.jpg/500px-Castle_Leod_%28geograph_4176882%29.jpg

**Metrics:**
- Name similarity: 81.8%
- Distance: 564.520km
- Same image: No

**Reasons:** High name similarity (81.8%)

**Recommendation:** **KEEP-BOTH**

---

### 670. KEEP-BOTH (Confidence: 50%)

**Castle A:** Leap Castle
- Location: 52.952, -7.809
- Country/County: Ireland, County Offaly
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Castles_of_Leinster-_Leap%2C_Offaly_%28geograph_1952750%29.jpg/500px-Castles_of_Leinster-_Leap%2C_Offaly_%28geograph_1952750%29.jpg

**Castle B:** Castle Levan  
- Location: 55.9333, -4.8
- Country/County: Scotland, Inverclyde
- Type: castle
- Image: https://img.castlecore.uk/castle-levan.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 384.302km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 671. KEEP-BOTH (Confidence: 50%)

**Castle A:** Cloghan Castle
- Location: 53.184, -7.891
- Country/County: Ireland, County Offaly
- Type: tower house
- Image: https://img.castlecore.uk/cloghan-castle.jpg

**Castle B:** Cloghane Castle  
- Location: 51.748, -8.615
- Country/County: Ireland, County Cork
- Type: tower house
- Image: https://img.castlecore.uk/cloghane-castle.jpg

**Metrics:**
- Name similarity: 93.3%
- Distance: 167.036km
- Same image: No

**Reasons:** High name similarity (93.3%)

**Recommendation:** **KEEP-BOTH**

---

### 672. KEEP-BOTH (Confidence: 50%)

**Castle A:** Ballycowan Castle
- Location: 53.382, -7.596
- Country/County: Ireland, County Offaly
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Ballycowan_Castle%2C_Co._Offaly_-_geograph.org.uk_-_942610.jpg/500px-Ballycowan_Castle%2C_Co._Offaly_-_geograph.org.uk_-_942610.jpg

**Castle B:** Ballylahan Castle  
- Location: 53.83, -9.208
- Country/County: Ireland, County Mayo
- Type: tower house
- Image: https://img.castlecore.uk/ballylahan-castle.jpg

**Metrics:**
- Name similarity: 82.4%
- Distance: 117.438km
- Same image: No

**Reasons:** High name similarity (82.4%)

**Recommendation:** **KEEP-BOTH**

---

### 673. KEEP-BOTH (Confidence: 50%)

**Castle A:** Aghaboe Abbey
- Location: 52.912, -7.646
- Country/County: Ireland, County Laois
- Type: abbey
- Image: https://img.castlecore.uk/aghaboe-abbey.jpg

**Castle B:** Aghadoe Castle  
- Location: 52.078, -9.548
- Country/County: Ireland, County Kerry
- Type: castle
- Image: https://img.castlecore.uk/aghadoe-castle.jpg

**Metrics:**
- Name similarity: 85.7%
- Distance: 158.674km
- Same image: No

**Reasons:** High name similarity (85.7%)

**Recommendation:** **KEEP-BOTH**

---

### 674. KEEP-BOTH (Confidence: 50%)

**Castle A:** Ballaghmore Castle
- Location: 52.95, -7.748
- Country/County: Ireland, County Laois
- Type: tower house
- Image: https://img.castlecore.uk/ballaghmore-castle.jpg

**Castle B:** Mullaghmore Castle  
- Location: 54.466, -8.453
- Country/County: Ireland, County Sligo
- Type: castle
- Image: https://img.castlecore.uk/mullaghmore-castle.jpg

**Metrics:**
- Name similarity: 88.9%
- Distance: 174.839km
- Same image: No

**Reasons:** High name similarity (88.9%)

**Recommendation:** **KEEP-BOTH**

---

### 675. KEEP-BOTH (Confidence: 50%)

**Castle A:** Malin Castle
- Location: 55.385, -7.345
- Country/County: Ireland, County Donegal
- Type: castle
- Image: https://img.castlecore.uk/malin-castle.jpg

**Castle B:** Glin Castle  
- Location: 52.567, -9.29
- Country/County: Ireland, County Limerick
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Glin_Castle.jpg/500px-Glin_Castle.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 338.146km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 676. KEEP-BOTH (Confidence: 50%)

**Castle A:** Castleroche
- Location: 54.04, -6.483
- Country/County: Ireland, County Louth
- Type: castle
- Image: https://img.castlecore.uk/castleroche.jpg

**Castle B:** Roch Castle  
- Location: 51.833, -5.073
- Country/County: Wales, Pembrokeshire
- Type: castle
- Image: https://img.castlecore.uk/roch-castle.jpg

**Metrics:**
- Name similarity: 81.8%
- Distance: 262.958km
- Same image: No

**Reasons:** High name similarity (81.8%)

**Recommendation:** **KEEP-BOTH**

---

### 677. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dunmahon Castle
- Location: 54.03, -6.21
- Country/County: Ireland, County Louth
- Type: tower house
- Image: https://img.castlecore.uk/dunmahon-castle.jpg

**Castle B:** Donamon Castle  
- Location: 53.671, -8.282
- Country/County: Ireland, County Roscommon
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Donamon_Castle_front.jpg/500px-Donamon_Castle_front.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 141.644km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 678. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dunmahon Castle
- Location: 54.03, -6.21
- Country/County: Ireland, County Louth
- Type: tower house
- Image: https://img.castlecore.uk/dunmahon-castle.jpg

**Castle B:** Dunmanus Castle  
- Location: 51.558, -9.645
- Country/County: Ireland, County Cork
- Type: tower house
- Image: https://img.castlecore.uk/dunmanus-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 358.939km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 679. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dunmahon Castle
- Location: 54.03, -6.21
- Country/County: Ireland, County Louth
- Type: tower house
- Image: https://img.castlecore.uk/dunmahon-castle.jpg

**Castle B:** Dunnaman Castle  
- Location: 54.252, -5.898
- Country/County: Northern Ireland, County Down
- Type: motte
- Image: https://img.castlecore.uk/dunnaman-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 31.975km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 680. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dunmahon Castle
- Location: 54.03, -6.21
- Country/County: Ireland, County Louth
- Type: tower house
- Image: https://img.castlecore.uk/dunmahon-castle.jpg

**Castle B:** Dunraven Castle  
- Location: 51.4486, -3.6081
- Country/County: Wales, Vale of Glamorgan
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Dunraven_Castle_%2816567797823%29.jpg/500px-Dunraven_Castle_%2816567797823%29.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 336.212km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 681. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dunmahon Castle
- Location: 54.03, -6.21
- Country/County: Ireland, County Louth
- Type: tower house
- Image: https://img.castlecore.uk/dunmahon-castle.jpg

**Castle B:** Dunmoran Castle  
- Location: 54.235, -8.62
- Country/County: Ireland, County Sligo
- Type: tower house
- Image: https://img.castlecore.uk/dunmoran-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 158.651km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 682. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dunmahon Castle
- Location: 54.03, -6.21
- Country/County: Ireland, County Louth
- Type: tower house
- Image: https://img.castlecore.uk/dunmahon-castle.jpg

**Castle B:** Dunlavin Castle  
- Location: 53.057, -6.701
- Country/County: Ireland, County Wicklow
- Type: castle
- Image: https://img.castlecore.uk/dunlavin-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 112.951km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 683. KEEP-BOTH (Confidence: 50%)

**Castle A:** Glin Castle
- Location: 52.567, -9.29
- Country/County: Ireland, County Limerick
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Glin_Castle.jpg/500px-Glin_Castle.jpg

**Castle B:** Glinsk Castle  
- Location: 53.628, -8.518
- Country/County: Ireland, County Roscommon
- Type: fortified house
- Image: https://img.castlecore.uk/glinsk-castle.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 128.744km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 684. KEEP-BOTH (Confidence: 50%)

**Castle A:** Shanid Castle
- Location: 52.54, -9.2
- Country/County: Ireland, County Limerick
- Type: castle
- Image: https://img.castlecore.uk/shanid-castle.jpg

**Castle B:** Shane Castle  
- Location: 54.707, -6.31
- Country/County: Ireland, County Antrim
- Type: castle
- Image: https://img.castlecore.uk/shane-castle.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 307.170km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 685. KEEP-BOTH (Confidence: 50%)

**Castle A:** Castlerea Castle
- Location: 53.767, -8.494
- Country/County: Ireland, County Roscommon
- Type: castle
- Image: https://img.castlecore.uk/castlerea-castle.jpg

**Castle B:** Castlebar Castle  
- Location: 53.86, -9.3
- Country/County: Ireland, County Mayo
- Type: castle
- Image: https://img.castlecore.uk/castlebar-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 53.916km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 686. KEEP-BOTH (Confidence: 50%)

**Castle A:** Castlerea Castle
- Location: 53.767, -8.494
- Country/County: Ireland, County Roscommon
- Type: castle
- Image: https://img.castlecore.uk/castlerea-castle.jpg

**Castle B:** Red Castle  
- Location: 56.7, -2.5833
- Country/County: Scotland, Angus
- Type: castle
- Image: https://img.castlecore.uk/red-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 496.506km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 687. KEEP-BOTH (Confidence: 50%)

**Castle A:** Donamon Castle
- Location: 53.671, -8.282
- Country/County: Ireland, County Roscommon
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Donamon_Castle_front.jpg/500px-Donamon_Castle_front.jpg

**Castle B:** Dunamon Tower  
- Location: 53.655, -8.365
- Country/County: Ireland, County Roscommon
- Type: tower house
- Image: https://img.castlecore.uk/dunamon-tower.jpg

**Metrics:**
- Name similarity: 85.7%
- Distance: 5.751km
- Same image: No

**Reasons:** High name similarity (85.7%)

**Recommendation:** **KEEP-BOTH**

---

### 688. KEEP-BOTH (Confidence: 50%)

**Castle A:** Donamon Castle
- Location: 53.671, -8.282
- Country/County: Ireland, County Roscommon
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Donamon_Castle_front.jpg/500px-Donamon_Castle_front.jpg

**Castle B:** Dunnaman Castle  
- Location: 54.252, -5.898
- Country/County: Northern Ireland, County Down
- Type: motte
- Image: https://img.castlecore.uk/dunnaman-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 168.800km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 689. KEEP-BOTH (Confidence: 50%)

**Castle A:** Clare Island Castle
- Location: 53.808, -10.003
- Country/County: Ireland, County Mayo
- Type: tower house
- Image: https://img.castlecore.uk/clare-island-castle.jpg

**Castle B:** Lady's Island Castle  
- Location: 52.19, -6.418
- Country/County: Ireland, County Wexford
- Type: castle
- Image: https://img.castlecore.uk/lady-s-island-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 299.815km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 690. KEEP-BOTH (Confidence: 50%)

**Castle A:** Kilconly Tower
- Location: 53.7, -9.26
- Country/County: Ireland, County Mayo
- Type: tower house
- Image: https://img.castlecore.uk/kilconly-tower.jpg

**Castle B:** Kilcooly Abbey  
- Location: 52.687, -7.691
- Country/County: Ireland, County Tipperary
- Type: abbey
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Kilcooley_Abbey_-_geograph.org.uk_-_3036013.jpg/500px-Kilcooley_Abbey_-_geograph.org.uk_-_3036013.jpg

**Metrics:**
- Name similarity: 87.5%
- Distance: 153.659km
- Same image: No

**Reasons:** High name similarity (87.5%)

**Recommendation:** **KEEP-BOTH**

---

### 691. KEEP-BOTH (Confidence: 50%)

**Castle A:** Castlebar Castle
- Location: 53.86, -9.3
- Country/County: Ireland, County Mayo
- Type: castle
- Image: https://img.castlecore.uk/castlebar-castle.jpg

**Castle B:** Ayr Castle  
- Location: 55.4667, -4.6333
- Country/County: Scotland, South Ayrshire
- Type: castle
- Image: https://img.castlecore.uk/ayr-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 349.172km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 692. KEEP-BOTH (Confidence: 50%)

**Castle A:** Kinlough Castle
- Location: 53.79, -9.69
- Country/County: Ireland, County Mayo
- Type: tower house
- Image: https://img.castlecore.uk/kinlough-castle.jpg

**Castle B:** Moylough Castle  
- Location: 53.587, -8.568
- Country/County: Ireland, County Galway
- Type: tower house
- Image: https://img.castlecore.uk/moylough-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 77.251km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 693. KEEP-BOTH (Confidence: 50%)

**Castle A:** Moyne Abbey
- Location: 54.17, -9.26
- Country/County: Ireland, County Mayo
- Type: abbey
- Image: https://img.castlecore.uk/moyne-abbey.jpg

**Castle B:** Boyne Castle  
- Location: 57.6833, -2.7333
- Country/County: Scotland, Aberdeenshire
- Type: castle
- Image: https://img.castlecore.uk/boyne-castle-3.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 563.403km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 694. KEEP-BOTH (Confidence: 50%)

**Castle A:** Cabra Castle
- Location: 53.862, -6.872
- Country/County: Ireland, County Cavan
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Kingscourt_-_Cabra_Castle_view_from_entrance_driveway_-_geograph.org.uk_-_1619780.jpg/500px-Kingscourt_-_Cabra_Castle_view_from_entrance_driveway_-_geograph.org.uk_-_1619780.jpg

**Castle B:** Barra Castle  
- Location: 57.185, -2.367
- Country/County: Scotland, Aberdeenshire
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Barra_Castle%2C_Bourtie%2C_Oldmeldrum_side_view.jpg/500px-Barra_Castle%2C_Bourtie%2C_Oldmeldrum_side_view.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 465.558km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 695. KEEP-BOTH (Confidence: 50%)

**Castle A:** Cabra Castle
- Location: 53.862, -6.872
- Country/County: Ireland, County Cavan
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Kingscourt_-_Cabra_Castle_view_from_entrance_driveway_-_geograph.org.uk_-_1619780.jpg/500px-Kingscourt_-_Cabra_Castle_view_from_entrance_driveway_-_geograph.org.uk_-_1619780.jpg

**Castle B:** Carna Castle  
- Location: 53.32, -9.87
- Country/County: Ireland, County Galway
- Type: tower house
- Image: https://img.castlecore.uk/carna-castle.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 206.822km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 696. KEEP-BOTH (Confidence: 50%)

**Castle A:** Cabra Castle
- Location: 53.862, -6.872
- Country/County: Ireland, County Cavan
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Kingscourt_-_Cabra_Castle_view_from_entrance_driveway_-_geograph.org.uk_-_1619780.jpg/500px-Kingscourt_-_Cabra_Castle_view_from_entrance_driveway_-_geograph.org.uk_-_1619780.jpg

**Castle B:** Castlecarra  
- Location: 53.68, -9.332
- Country/County: Ireland, County Mayo
- Type: tower house
- Image: https://img.castlecore.uk/castlecarra.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 162.919km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 697. KEEP-BOTH (Confidence: 50%)

**Castle A:** Rathcline Castle
- Location: 53.682, -7.862
- Country/County: Ireland, County Longford
- Type: castle
- Image: https://img.castlecore.uk/rathcline-castle.jpg

**Castle B:** Rataine Castle  
- Location: 53.542, -6.468
- Country/County: Ireland, County Meath
- Type: tower house
- Image: https://img.castlecore.uk/rataine-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 93.264km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 698. KEEP-BOTH (Confidence: 50%)

**Castle A:** Castle Leslie
- Location: 54.202, -7.087
- Country/County: Ireland, County Monaghan
- Type: castle
- Image: https://img.castlecore.uk/castle-leslie.jpg

**Castle B:** Leslie Castle  
- Location: 57.304, -2.775
- Country/County: Scotland, Aberdeenshire
- Type: tower house
- Image: https://img.castlecore.uk/leslie-castle.jpg

**Metrics:**
- Name similarity: 100.0%
- Distance: 437.751km
- Same image: No

**Reasons:** High name similarity (100.0%)

**Recommendation:** **KEEP-BOTH**

---

### 699. KEEP-BOTH (Confidence: 50%)

**Castle A:** Castle Leslie
- Location: 54.202, -7.087
- Country/County: Ireland, County Monaghan
- Type: castle
- Image: https://img.castlecore.uk/castle-leslie.jpg

**Castle B:** Kellie Castle  
- Location: 56.301, -2.767
- Country/County: Scotland, Fife
- Type: castle
- Image: https://img.castlecore.uk/kellie-castle.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 359.657km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 700. KEEP-BOTH (Confidence: 50%)

**Castle A:** Castle Balfour
- Location: 54.327, -7.462
- Country/County: Ireland, County Fermanagh
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Castle_Balfour%2C_Lisnaskea_-_geograph.org.uk_-_1270799.jpg/500px-Castle_Balfour%2C_Lisnaskea_-_geograph.org.uk_-_1270799.jpg

**Castle B:** Balfluig Castle  
- Location: 57.2, -2.7333
- Country/County: Scotland, Aberdeenshire
- Type: castle
- Image: https://img.castlecore.uk/balfluig-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 435.199km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 701. KEEP-BOTH (Confidence: 50%)

**Castle A:** Castle Balfour
- Location: 54.327, -7.462
- Country/County: Ireland, County Fermanagh
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Castle_Balfour%2C_Lisnaskea_-_geograph.org.uk_-_1270799.jpg/500px-Castle_Balfour%2C_Lisnaskea_-_geograph.org.uk_-_1270799.jpg

**Castle B:** Balfour Castle  
- Location: 59.0833, -2.8333
- Country/County: Scotland, Orkney
- Type: castle
- Image: https://img.castlecore.uk/balfour-castle.jpg

**Metrics:**
- Name similarity: 100.0%
- Distance: 599.285km
- Same image: No

**Reasons:** High name similarity (100.0%)

**Recommendation:** **KEEP-BOTH**

---

### 702. KEEP-BOTH (Confidence: 50%)

**Castle A:** Castle Balfour
- Location: 54.327, -7.462
- Country/County: Ireland, County Fermanagh
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Castle_Balfour%2C_Lisnaskea_-_geograph.org.uk_-_1270799.jpg/500px-Castle_Balfour%2C_Lisnaskea_-_geograph.org.uk_-_1270799.jpg

**Castle B:** Ballybur Castle  
- Location: 52.676, -7.35
- Country/County: Ireland, County Kilkenny
- Type: tower house
- Image: https://img.castlecore.uk/ballybur-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 183.732km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 703. KEEP-BOTH (Confidence: 50%)

**Castle A:** Mountjoy Castle
- Location: 54.522, -6.819
- Country/County: Ireland, County Tyrone
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Mountjoy_castle.JPG/500px-Mountjoy_castle.JPG

**Castle B:** Mountlong Castle  
- Location: 51.618, -8.548
- Country/County: Ireland, County Cork
- Type: fortified house
- Image: https://img.castlecore.uk/mountlong-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 342.923km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 704. KEEP-BOTH (Confidence: 50%)

**Castle A:** Castlecaulfield
- Location: 54.505, -6.918
- Country/County: Ireland, County Tyrone
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Main_Street%2CCastlecaulfield_-_geograph.org.uk_-_1803663.jpg/500px-Main_Street%2CCastlecaulfield_-_geograph.org.uk_-_1803663.jpg

**Castle B:** Caulfield Castle  
- Location: 53.402, -7.388
- Country/County: Ireland, County Westmeath
- Type: tower house
- Image: https://img.castlecore.uk/caulfield-castle.jpg

**Metrics:**
- Name similarity: 93.8%
- Distance: 126.444km
- Same image: No

**Reasons:** High name similarity (93.8%)

**Recommendation:** **KEEP-BOTH**

---

### 705. KEEP-BOTH (Confidence: 50%)

**Castle A:** Navan Fort
- Location: 54.348, -6.698
- Country/County: Ireland, County Armagh
- Type: fort
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Navan_Fort%2C_County_Armagh_-_geograph.org.uk_-_43871.jpg/500px-Navan_Fort%2C_County_Armagh_-_geograph.org.uk_-_43871.jpg

**Castle B:** Navan Castle  
- Location: 53.653, -6.682
- Country/County: Ireland, County Meath
- Type: castle
- Image: https://img.castlecore.uk/navan-castle.jpg

**Metrics:**
- Name similarity: 100.0%
- Distance: 77.288km
- Same image: No

**Reasons:** High name similarity (100.0%)

**Recommendation:** **KEEP-BOTH**

---

### 706. KEEP-BOTH (Confidence: 50%)

**Castle A:** Strangford Castle
- Location: 54.369, -5.655
- Country/County: Ireland, County Down
- Type: tower house
- Image: https://img.castlecore.uk/strangford-castle.jpg

**Castle B:** Frankford Castle  
- Location: 53.208, -7.798
- Country/County: Ireland, County Offaly
- Type: tower house
- Image: https://img.castlecore.uk/frankford-castle.jpg

**Metrics:**
- Name similarity: 82.4%
- Distance: 190.991km
- Same image: No

**Reasons:** High name similarity (82.4%)

**Recommendation:** **KEEP-BOTH**

---

### 707. KEEP-BOTH (Confidence: 50%)

**Castle A:** Cong Abbey
- Location: 53.533, -9.28
- Country/County: Ireland, County Mayo
- Type: abbey
- Image: https://img.castlecore.uk/cong-abbey.jpg

**Castle B:** Iona Abbey  
- Location: 56.3369, -6.3867
- Country/County: Scotland, Argyll and Bute
- Type: abbey
- Image: https://img.castlecore.uk/iona-abbey.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 362.375km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 708. KEEP-BOTH (Confidence: 50%)

**Castle A:** Kilconnell Friary
- Location: 53.422, -8.326
- Country/County: Ireland, County Galway
- Type: friary
- Image: https://img.castlecore.uk/kilconnell-friary.jpg

**Castle B:** Killydonnell Friary  
- Location: 54.958, -7.595
- Country/County: Ireland, County Donegal
- Type: abbey
- Image: https://img.castlecore.uk/killydonnell-friary.jpg

**Metrics:**
- Name similarity: 84.2%
- Distance: 177.291km
- Same image: No

**Reasons:** High name similarity (84.2%)

**Recommendation:** **KEEP-BOTH**

---

### 709. KEEP-BOTH (Confidence: 50%)

**Castle A:** Kindlestown Castle
- Location: 53.135, -6.1
- Country/County: Ireland, County Wicklow
- Type: castle
- Image: https://img.castlecore.uk/kindlestown-castle.jpg

**Castle B:** Candleston Castle  
- Location: 51.4889, -3.7264
- Country/County: Wales, Bridgend
- Type: castle
- Image: https://img.castlecore.uk/candleston-castle.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 243.980km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 710. KEEP-BOTH (Confidence: 50%)

**Castle A:** Barra Castle
- Location: 57.185, -2.367
- Country/County: Scotland, Aberdeenshire
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Barra_Castle%2C_Bourtie%2C_Oldmeldrum_side_view.jpg/500px-Barra_Castle%2C_Bourtie%2C_Oldmeldrum_side_view.jpg

**Castle B:** Carna Castle  
- Location: 53.32, -9.87
- Country/County: Ireland, County Galway
- Type: tower house
- Image: https://img.castlecore.uk/carna-castle.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 640.295km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 711. KEEP-BOTH (Confidence: 50%)

**Castle A:** Barra Castle
- Location: 57.185, -2.367
- Country/County: Scotland, Aberdeenshire
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Barra_Castle%2C_Bourtie%2C_Oldmeldrum_side_view.jpg/500px-Barra_Castle%2C_Bourtie%2C_Oldmeldrum_side_view.jpg

**Castle B:** Castlecarra  
- Location: 53.68, -9.332
- Country/County: Ireland, County Mayo
- Type: tower house
- Image: https://img.castlecore.uk/castlecarra.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 586.841km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 712. KEEP-BOTH (Confidence: 50%)

**Castle A:** Barra Castle
- Location: 57.185, -2.367
- Country/County: Scotland, Aberdeenshire
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Barra_Castle%2C_Bourtie%2C_Oldmeldrum_side_view.jpg/500px-Barra_Castle%2C_Bourtie%2C_Oldmeldrum_side_view.jpg

**Castle B:** Belcarra Castle  
- Location: 53.745, -9.392
- Country/County: Ireland, County Mayo
- Type: tower house
- Image: https://img.castlecore.uk/belcarra-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 584.655km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 713. KEEP-BOTH (Confidence: 50%)

**Castle A:** Cluny Castle
- Location: 57.147, -2.536
- Country/County: Scotland, Aberdeenshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Cluny_Castle_front_view.jpg/500px-Cluny_Castle_front_view.jpg

**Castle B:** Clonyn Castle  
- Location: 53.572, -7.118
- Country/County: Ireland, County Westmeath
- Type: castle
- Image: https://img.castlecore.uk/clonyn-castle.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 491.598km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 714. KEEP-BOTH (Confidence: 50%)

**Castle A:** Cluny Castle
- Location: 57.147, -2.536
- Country/County: Scotland, Aberdeenshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Cluny_Castle_front_view.jpg/500px-Cluny_Castle_front_view.jpg

**Castle B:** Clunie Castle  
- Location: 56.618, -3.428
- Country/County: Scotland, Perthshire
- Type: castle
- Image: https://img.castlecore.uk/clunie-castle.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 79.978km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 715. KEEP-BOTH (Confidence: 50%)

**Castle A:** Leslie Castle
- Location: 57.304, -2.775
- Country/County: Scotland, Aberdeenshire
- Type: tower house
- Image: https://img.castlecore.uk/leslie-castle.jpg

**Castle B:** Kellie Castle  
- Location: 56.301, -2.767
- Country/County: Scotland, Fife
- Type: castle
- Image: https://img.castlecore.uk/kellie-castle.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 111.530km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 716. KEEP-BOTH (Confidence: 50%)

**Castle A:** Craig Castle
- Location: 57.36, -2.708
- Country/County: Scotland, Aberdeenshire
- Type: tower house
- Image: https://img.castlecore.uk/craig-castle.jpg

**Castle B:** Castle Craig  
- Location: 55.7, -3.2667
- Country/County: Scotland, Scottish Borders
- Type: castle
- Image: https://img.castlecore.uk/castle-craig.jpg

**Metrics:**
- Name similarity: 100.0%
- Distance: 187.735km
- Same image: No

**Reasons:** High name similarity (100.0%)

**Recommendation:** **KEEP-BOTH**

---

### 717. KEEP-BOTH (Confidence: 50%)

**Castle A:** Craig Castle
- Location: 57.36, -2.708
- Country/County: Scotland, Aberdeenshire
- Type: tower house
- Image: https://img.castlecore.uk/craig-castle.jpg

**Castle B:** Cregg Castle  
- Location: 53.367, -8.85
- Country/County: Ireland, County Galway
- Type: castle
- Image: https://img.castlecore.uk/cregg-castle.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 589.299km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 718. KEEP-BOTH (Confidence: 50%)

**Castle A:** Grandtully Castle
- Location: 56.625, -3.86
- Country/County: Scotland, Perth and Kinross
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Grandtully_Castle_%28geograph_3890325%29.jpg/500px-Grandtully_Castle_%28geograph_3890325%29.jpg

**Castle B:** Ardtully Castle  
- Location: 51.793, -9.731
- Country/County: Ireland, County Kerry
- Type: tower house
- Image: https://img.castlecore.uk/ardtully-castle.jpg

**Metrics:**
- Name similarity: 82.4%
- Distance: 658.620km
- Same image: No

**Reasons:** High name similarity (82.4%)

**Recommendation:** **KEEP-BOTH**

---

### 719. KEEP-BOTH (Confidence: 50%)

**Castle A:** Balhousie Castle
- Location: 56.405, -3.444
- Country/County: Scotland, Perth and Kinross
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Perth_and_Kinross_Perth_Balhousie_Castle_1.jpg/500px-Perth_and_Kinross_Perth_Balhousie_Castle_1.jpg

**Castle B:** Balgonie Castle  
- Location: 56.2, -3.1333
- Country/County: Scotland, Fife
- Type: castle
- Image: https://img.castlecore.uk/wiki-balgonie-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 29.783km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 720. KEEP-BOTH (Confidence: 50%)

**Castle A:** Balhousie Castle
- Location: 56.405, -3.444
- Country/County: Scotland, Perth and Kinross
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Perth_and_Kinross_Perth_Balhousie_Castle_1.jpg/500px-Perth_and_Kinross_Perth_Balhousie_Castle_1.jpg

**Castle B:** Dalhousie Castle  
- Location: 55.8667, -3.0833
- Country/County: Scotland, Midlothian
- Type: castle
- Image: https://img.castlecore.uk/dalhousie-castle.jpg

**Metrics:**
- Name similarity: 93.8%
- Distance: 63.892km
- Same image: No

**Reasons:** High name similarity (93.8%)

**Recommendation:** **KEEP-BOTH**

---

### 721. KEEP-BOTH (Confidence: 50%)

**Castle A:** Kellie Castle
- Location: 56.301, -2.767
- Country/County: Scotland, Fife
- Type: castle
- Image: https://img.castlecore.uk/kellie-castle.jpg

**Castle B:** Kilclief Castle  
- Location: 54.328, -5.582
- Country/County: Northern Ireland, County Down
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Kilclief_Castle%2C_Geograph.jpg/500px-Kilclief_Castle%2C_Geograph.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 282.548km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 722. KEEP-BOTH (Confidence: 50%)

**Castle A:** Muness Castle
- Location: 60.671, -0.867
- Country/County: Scotland, Shetland
- Type: castle
- Image: https://img.castlecore.uk/muness-castle.jpg

**Castle B:** Luffness Castle  
- Location: 56.013, -2.843
- Country/County: Scotland, East Lothian
- Type: castle
- Image: https://img.castlecore.uk/luffness-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 530.566km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 723. KEEP-BOTH (Confidence: 50%)

**Castle A:** Duntrune Castle
- Location: 56.088, -5.583
- Country/County: Scotland, Argyll and Bute
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Duntrune_Castle_-_geograph.org.uk_-_4669295.jpg/500px-Duntrune_Castle_-_geograph.org.uk_-_4669295.jpg

**Castle B:** Dunure Castle  
- Location: 55.4, -4.75
- Country/County: Scotland, South Ayrshire
- Type: castle
- Image: https://img.castlecore.uk/dunure-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 92.578km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 724. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dunaverty Castle
- Location: 55.307, -5.688
- Country/County: Scotland, Argyll and Bute
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Dunaverty_-_geograph.org.uk_-_735878.jpg/500px-Dunaverty_-_geograph.org.uk_-_735878.jpg

**Castle B:** Dunadry Castle  
- Location: 54.688, -6.178
- Country/County: Northern Ireland, County Antrim
- Type: tower house
- Image: https://img.castlecore.uk/dunadry-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 75.593km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 725. KEEP-BOTH (Confidence: 50%)

**Castle A:** Greenan Castle
- Location: 55.419, -4.662
- Country/County: Scotland, South Ayrshire
- Type: tower house
- Image: https://img.castlecore.uk/greenan-castle.jpg

**Castle B:** Grennan Castle  
- Location: 52.728, -7.258
- Country/County: Ireland, County Kilkenny
- Type: castle
- Image: https://img.castlecore.uk/grennan-castle.jpg

**Metrics:**
- Name similarity: 92.9%
- Distance: 343.779km
- Same image: No

**Reasons:** High name similarity (92.9%)

**Recommendation:** **KEEP-BOTH**

---

### 726. KEEP-BOTH (Confidence: 50%)

**Castle A:** Roch Castle
- Location: 51.833, -5.073
- Country/County: Wales, Pembrokeshire
- Type: castle
- Image: https://img.castlecore.uk/roch-castle.jpg

**Castle B:** Inch Castle  
- Location: 55.068, -7.558
- Country/County: Ireland, County Donegal
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Farland_Bank_and_Inch_Castle_-_panoramio.jpg/500px-Farland_Bank_and_Inch_Castle_-_panoramio.jpg

**Metrics:**
- Name similarity: 81.8%
- Distance: 395.504km
- Same image: No

**Reasons:** High name similarity (81.8%)

**Recommendation:** **KEEP-BOTH**

---

### 727. KEEP-BOTH (Confidence: 50%)

**Castle A:** Roch Castle
- Location: 51.833, -5.073
- Country/County: Wales, Pembrokeshire
- Type: castle
- Image: https://img.castlecore.uk/roch-castle.jpg

**Castle B:** Castle Roy  
- Location: 57.2667, -3.6
- Country/County: Scotland, Highland
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Castle_Roy_-_geograph.org.uk_-_2069401.jpg/500px-Castle_Roy_-_geograph.org.uk_-_2069401.jpg

**Metrics:**
- Name similarity: 81.8%
- Distance: 611.584km
- Same image: No

**Reasons:** High name similarity (81.8%)

**Recommendation:** **KEEP-BOTH**

---

### 728. KEEP-BOTH (Confidence: 50%)

**Castle A:** Roch Castle
- Location: 51.833, -5.073
- Country/County: Wales, Pembrokeshire
- Type: castle
- Image: https://img.castlecore.uk/roch-castle.jpg

**Castle B:** Roche Abbey  
- Location: 53.445, -1.2083
- Country/County: England, Yorkshire
- Type: abbey
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Roche_Abbey_%28211961681%29.jpeg/500px-Roche_Abbey_%28211961681%29.jpeg

**Metrics:**
- Name similarity: 80.0%
- Distance: 316.371km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 729. KEEP-BOTH (Confidence: 50%)

**Castle A:** Upton Castle
- Location: 51.714, -4.901
- Country/County: Wales, Pembrokeshire
- Type: castle
- Image: https://img.castlecore.uk/upton-castle.jpg

**Castle B:** Upton House  
- Location: 52.1067, -1.45
- Country/County: England, Warwickshire
- Type: castle
- Image: https://img.castlecore.uk/upton-house.jpg

**Metrics:**
- Name similarity: 100.0%
- Distance: 240.692km
- Same image: No

**Reasons:** High name similarity (100.0%)

**Recommendation:** **KEEP-BOTH**

---

### 730. KEEP-BOTH (Confidence: 50%)

**Castle A:** Castell Aberlleiniog
- Location: 53.273, -4.121
- Country/County: Wales, Isle of Anglesey
- Type: castle
- Image: https://img.castlecore.uk/castell-aberlleiniog.jpg

**Castle B:** Castell Abereinion  
- Location: 52.358, -3.718
- Country/County: Wales, Ceredigion
- Type: castle
- Image: https://img.castlecore.uk/castell-abereinion.jpg

**Metrics:**
- Name similarity: 85.0%
- Distance: 105.286km
- Same image: No

**Reasons:** High name similarity (85.0%)

**Recommendation:** **KEEP-BOTH**

---

### 731. KEEP-BOTH (Confidence: 50%)

**Castle A:** Rossroe Castle
- Location: 53.126, -9.06
- Country/County: Ireland, County Clare
- Type: tower house
- Image: https://img.castlecore.uk/rossroe-castle.jpg

**Castle B:** Rossbrin Castle  
- Location: 51.535, -9.575
- Country/County: Ireland, County Cork
- Type: tower house
- Image: https://img.castlecore.uk/rossbrin-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 180.338km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 732. KEEP-BOTH (Confidence: 50%)

**Castle A:** Moghane Castle
- Location: 52.748, -8.895
- Country/County: Ireland, County Clare
- Type: tower house
- Image: https://img.castlecore.uk/moghane-castle.jpg

**Castle B:** Cloghane Castle  
- Location: 51.748, -8.615
- Country/County: Ireland, County Cork
- Type: tower house
- Image: https://img.castlecore.uk/cloghane-castle.jpg

**Metrics:**
- Name similarity: 86.7%
- Distance: 112.817km
- Same image: No

**Reasons:** High name similarity (86.7%)

**Recommendation:** **KEEP-BOTH**

---

### 733. KEEP-BOTH (Confidence: 50%)

**Castle A:** Moghane Castle
- Location: 52.748, -8.895
- Country/County: Ireland, County Clare
- Type: tower house
- Image: https://img.castlecore.uk/moghane-castle.jpg

**Castle B:** Monaghan Castle  
- Location: 54.249, -6.968
- Country/County: Ireland, County Monaghan
- Type: castle
- Image: https://img.castlecore.uk/monaghan-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 209.989km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 734. KEEP-BOTH (Confidence: 50%)

**Castle A:** Moghane Castle
- Location: 52.748, -8.895
- Country/County: Ireland, County Clare
- Type: tower house
- Image: https://img.castlecore.uk/moghane-castle.jpg

**Castle B:** Moyglare Castle  
- Location: 53.41, -6.573
- Country/County: Ireland, County Kildare
- Type: tower house
- Image: https://img.castlecore.uk/moyglare-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 171.671km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 735. KEEP-BOTH (Confidence: 50%)

**Castle A:** Ballyallia Castle
- Location: 52.859, -8.99
- Country/County: Ireland, County Clare
- Type: tower house
- Image: https://img.castlecore.uk/ballyallia-castle.jpg

**Castle B:** Ballymalis Castle  
- Location: 52.058, -9.775
- Country/County: Ireland, County Kerry
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/3/34/Castles_of_Munster%2C_Ballymalis%2C_Kerry_-_geograph.org.uk_-_1392738.jpg

**Metrics:**
- Name similarity: 82.4%
- Distance: 103.738km
- Same image: No

**Reasons:** High name similarity (82.4%)

**Recommendation:** **KEEP-BOTH**

---

### 736. KEEP-BOTH (Confidence: 50%)

**Castle A:** Clarecastle Tower
- Location: 52.822, -8.961
- Country/County: Ireland, County Clare
- Type: tower house
- Image: https://img.castlecore.uk/clarecastle-tower.jpg

**Castle B:** Aclare Castle  
- Location: 53.978, -8.758
- Country/County: Ireland, County Sligo
- Type: tower house
- Image: https://img.castlecore.uk/aclare-castle.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 129.244km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 737. KEEP-BOTH (Confidence: 50%)

**Castle A:** Carrigaholt Castle
- Location: 52.61, -9.71
- Country/County: Ireland, County Clare
- Type: tower house
- Image: https://img.castlecore.uk/carrigaholt-castle.jpg

**Castle B:** Carrigart Castle  
- Location: 55.155, -7.725
- Country/County: Ireland, County Donegal
- Type: tower house
- Image: https://img.castlecore.uk/carrigart-castle.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 311.434km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 738. KEEP-BOTH (Confidence: 50%)

**Castle A:** Knockfin Castle
- Location: 52.913, -8.74
- Country/County: Ireland, County Clare
- Type: tower house
- Image: https://img.castlecore.uk/knockfin-castle.jpg

**Castle B:** Knock Castle  
- Location: 57.2472, -5.9333
- Country/County: Scotland, Highland
- Type: castle
- Image: https://img.castlecore.uk/knock-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 513.877km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 739. KEEP-BOTH (Confidence: 50%)

**Castle A:** Kilcornan Castle
- Location: 53.203, -8.808
- Country/County: Ireland, County Galway
- Type: tower house
- Image: https://img.castlecore.uk/kilcornan-castle.jpg

**Castle B:** Kiltinan Castle  
- Location: 52.468, -7.778
- Country/County: Ireland, County Tipperary
- Type: castle
- Image: https://img.castlecore.uk/scraped-kiltinan.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 107.080km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 740. KEEP-BOTH (Confidence: 50%)

**Castle A:** Kilcornan Castle
- Location: 53.203, -8.808
- Country/County: Ireland, County Galway
- Type: tower house
- Image: https://img.castlecore.uk/kilcornan-castle.jpg

**Castle B:** Kilronan Castle  
- Location: 53.975, -8.118
- Country/County: Ireland, County Roscommon
- Type: castle
- Image: https://img.castlecore.uk/kilronan-castle.jpg

**Metrics:**
- Name similarity: 87.5%
- Distance: 97.174km
- Same image: No

**Reasons:** High name similarity (87.5%)

**Recommendation:** **KEEP-BOTH**

---

### 741. KEEP-BOTH (Confidence: 50%)

**Castle A:** Kilcornan Castle
- Location: 53.203, -8.808
- Country/County: Ireland, County Galway
- Type: tower house
- Image: https://img.castlecore.uk/kilcornan-castle.jpg

**Castle B:** Kilcolman Castle  
- Location: 52.252, -8.828
- Country/County: Ireland, County Cork
- Type: tower house
- Image: https://img.castlecore.uk/kilcolman-castle.jpg

**Metrics:**
- Name similarity: 87.5%
- Distance: 105.755km
- Same image: No

**Reasons:** High name similarity (87.5%)

**Recommendation:** **KEEP-BOTH**

---

### 742. KEEP-BOTH (Confidence: 50%)

**Castle A:** Kilcornan Castle
- Location: 53.203, -8.808
- Country/County: Ireland, County Galway
- Type: tower house
- Image: https://img.castlecore.uk/kilcornan-castle.jpg

**Castle B:** Kilcogan Castle  
- Location: 53.218, -8.788
- Country/County: Ireland, County Galway
- Type: tower house
- Image: https://img.castlecore.uk/kilcogan-castle.jpg

**Metrics:**
- Name similarity: 87.5%
- Distance: 2.134km
- Same image: No

**Reasons:** High name similarity (87.5%)

**Recommendation:** **KEEP-BOTH**

---

### 743. KEEP-BOTH (Confidence: 50%)

**Castle A:** Kilcornan Castle
- Location: 53.203, -8.808
- Country/County: Ireland, County Galway
- Type: tower house
- Image: https://img.castlecore.uk/kilcornan-castle.jpg

**Castle B:** Kilcloggan Castle  
- Location: 52.31, -6.86
- Country/County: Ireland, County Wexford
- Type: tower house
- Image: https://img.castlecore.uk/kilcloggan-castle.jpg

**Metrics:**
- Name similarity: 82.4%
- Distance: 164.444km
- Same image: No

**Reasons:** High name similarity (82.4%)

**Recommendation:** **KEEP-BOTH**

---

### 744. KEEP-BOTH (Confidence: 50%)

**Castle A:** Kilcornan Castle
- Location: 53.203, -8.808
- Country/County: Ireland, County Galway
- Type: tower house
- Image: https://img.castlecore.uk/kilcornan-castle.jpg

**Castle B:** Kilcormac Castle  
- Location: 53.187, -7.717
- Country/County: Ireland, County Offaly
- Type: castle
- Image: https://img.castlecore.uk/kilcormac-castle.jpg

**Metrics:**
- Name similarity: 87.5%
- Distance: 72.699km
- Same image: No

**Reasons:** High name similarity (87.5%)

**Recommendation:** **KEEP-BOTH**

---

### 745. KEEP-BOTH (Confidence: 50%)

**Castle A:** Moylough Castle
- Location: 53.587, -8.568
- Country/County: Ireland, County Galway
- Type: tower house
- Image: https://img.castlecore.uk/moylough-castle.jpg

**Castle B:** Monmouth Castle  
- Location: 51.8111, -2.7139
- Country/County: Wales, Monmouthshire
- Type: castle
- Image: https://img.castlecore.uk/monmouth-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 440.956km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 746. KEEP-BOTH (Confidence: 50%)

**Castle A:** Loughrea Castle
- Location: 53.194, -8.57
- Country/County: Ireland, County Galway
- Type: castle
- Image: https://img.castlecore.uk/loughrea-castle.jpg

**Castle B:** Southsea Castle  
- Location: 50.7817, -1.0833
- Country/County: England, Hampshire
- Type: castle
- Image: https://img.castlecore.uk/southsea-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 578.201km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 747. KEEP-BOTH (Confidence: 50%)

**Castle A:** Loughrea Castle
- Location: 53.194, -8.57
- Country/County: Ireland, County Galway
- Type: castle
- Image: https://img.castlecore.uk/loughrea-castle.jpg

**Castle B:** Lough Ree Castle  
- Location: 53.539, -7.959
- Country/County: Ireland, County Westmeath
- Type: castle
- Image: https://img.castlecore.uk/lough-ree-castle.jpg

**Metrics:**
- Name similarity: 87.5%
- Distance: 55.813km
- Same image: No

**Reasons:** High name similarity (87.5%)

**Recommendation:** **KEEP-BOTH**

---

### 748. KEEP-BOTH (Confidence: 50%)

**Castle A:** Clonbrock Castle
- Location: 53.453, -8.295
- Country/County: Ireland, County Galway
- Type: country house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Clonbrock_Castle_2024.png/500px-Clonbrock_Castle_2024.png

**Castle B:** Clonroad Castle  
- Location: 52.847, -8.98
- Country/County: Ireland, County Clare
- Type: castle
- Image: https://img.castlecore.uk/clonroad-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 81.407km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 749. KEEP-BOTH (Confidence: 50%)

**Castle A:** Cloghanower Castle
- Location: 53.455, -9.88
- Country/County: Ireland, County Galway
- Type: tower house
- Image: https://img.castlecore.uk/cloghanower-castle.jpg

**Castle B:** Cloghane Castle  
- Location: 51.748, -8.615
- Country/County: Ireland, County Cork
- Type: tower house
- Image: https://img.castlecore.uk/cloghane-castle.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 208.141km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 750. KEEP-BOTH (Confidence: 50%)

**Castle A:** Hen's Castle
- Location: 53.51, -9.75
- Country/County: Ireland, County Galway
- Type: tower house
- Image: https://img.castlecore.uk/hen-s-castle.jpg

**Castle B:** Shaen Castle  
- Location: 53.028, -7.428
- Country/County: Ireland, County Laois
- Type: castle
- Image: https://img.castlecore.uk/shaen-castle.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 163.443km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 751. KEEP-BOTH (Confidence: 50%)

**Castle A:** Carna Castle
- Location: 53.32, -9.87
- Country/County: Ireland, County Galway
- Type: tower house
- Image: https://img.castlecore.uk/carna-castle.jpg

**Castle B:** Conna Castle  
- Location: 52.068, -8.082
- Country/County: Ireland, County Cork
- Type: tower house
- Image: https://img.castlecore.uk/conna-castle.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 184.110km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 752. KEEP-BOTH (Confidence: 50%)

**Castle A:** Carna Castle
- Location: 53.32, -9.87
- Country/County: Ireland, County Galway
- Type: tower house
- Image: https://img.castlecore.uk/carna-castle.jpg

**Castle B:** Castlecarra  
- Location: 53.68, -9.332
- Country/County: Ireland, County Mayo
- Type: tower house
- Image: https://img.castlecore.uk/castlecarra.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 53.559km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 753. KEEP-BOTH (Confidence: 50%)

**Castle A:** Ballybrit Castle
- Location: 53.285, -8.978
- Country/County: Ireland, County Galway
- Type: tower house
- Image: https://img.castlecore.uk/ballybrit-castle.jpg

**Castle B:** Ballyboy Castle  
- Location: 53.348, -7.498
- Country/County: Ireland, County Offaly
- Type: tower house
- Image: https://img.castlecore.uk/ballyboy-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 98.560km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 754. KEEP-BOTH (Confidence: 50%)

**Castle A:** Ballybrit Castle
- Location: 53.285, -8.978
- Country/County: Ireland, County Galway
- Type: tower house
- Image: https://img.castlecore.uk/ballybrit-castle.jpg

**Castle B:** Ballyquin Castle  
- Location: 52.162, -7.578
- Country/County: Ireland, County Waterford
- Type: tower house
- Image: https://img.castlecore.uk/ballyquin-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 156.463km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 755. KEEP-BOTH (Confidence: 50%)

**Castle A:** Ballybrit Castle
- Location: 53.285, -8.978
- Country/County: Ireland, County Galway
- Type: tower house
- Image: https://img.castlecore.uk/ballybrit-castle.jpg

**Castle B:** Ballybur Castle  
- Location: 52.676, -7.35
- Country/County: Ireland, County Kilkenny
- Type: tower house
- Image: https://img.castlecore.uk/ballybur-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 128.312km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 756. KEEP-BOTH (Confidence: 50%)

**Castle A:** Rahasane Castle
- Location: 53.225, -8.755
- Country/County: Ireland, County Galway
- Type: tower house
- Image: https://img.castlecore.uk/rahasane-castle.jpg

**Castle B:** Rataine Castle  
- Location: 53.542, -6.468
- Country/County: Ireland, County Meath
- Type: tower house
- Image: https://img.castlecore.uk/rataine-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 155.715km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 757. KEEP-BOTH (Confidence: 50%)

**Castle A:** Togher Castle
- Location: 51.812, -8.65
- Country/County: Ireland, County Cork
- Type: tower house
- Image: https://img.castlecore.uk/togher-castle.jpg

**Castle B:** Augher Castle  
- Location: 54.418, -7.178
- Country/County: Northern Ireland, County Tyrone
- Type: castle
- Image: https://img.castlecore.uk/augher-castle.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 305.957km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 758. KEEP-BOTH (Confidence: 50%)

**Castle A:** Castlemagner Castle
- Location: 52.168, -8.862
- Country/County: Ireland, County Cork
- Type: tower house
- Image: https://img.castlecore.uk/castlemagner-castle.jpg

**Castle B:** Castlemaine Castle  
- Location: 52.145, -9.765
- Country/County: Ireland, County Kerry
- Type: castle
- Image: https://img.castlecore.uk/castlemaine-castle.jpg

**Metrics:**
- Name similarity: 89.5%
- Distance: 61.654km
- Same image: No

**Reasons:** High name similarity (89.5%)

**Recommendation:** **KEEP-BOTH**

---

### 759. KEEP-BOTH (Confidence: 50%)

**Castle A:** Castlemagner Castle
- Location: 52.168, -8.862
- Country/County: Ireland, County Cork
- Type: tower house
- Image: https://img.castlecore.uk/castlemagner-castle.jpg

**Castle B:** Castlemartyr Castle  
- Location: 51.915, -8.042
- Country/County: Ireland, County Cork
- Type: castle
- Image: https://img.castlecore.uk/castlemartyr-castle.jpg

**Metrics:**
- Name similarity: 84.2%
- Distance: 62.744km
- Same image: No

**Reasons:** High name similarity (84.2%)

**Recommendation:** **KEEP-BOTH**

---

### 760. KEEP-BOTH (Confidence: 50%)

**Castle A:** Castlepook Castle
- Location: 52.218, -8.728
- Country/County: Ireland, County Cork
- Type: tower house
- Image: https://img.castlecore.uk/castlepook-castle.jpg

**Castle B:** Castlepook Cave Castle  
- Location: 52.207, -8.843
- Country/County: Ireland, County Cork
- Type: tower house
- Image: https://img.castlecore.uk/castlepook-cave-castle.jpg

**Metrics:**
- Name similarity: 82.4%
- Distance: 7.930km
- Same image: No

**Reasons:** High name similarity (82.4%)

**Recommendation:** **KEEP-BOTH**

---

### 761. KEEP-BOTH (Confidence: 50%)

**Castle A:** Castlepook Castle
- Location: 52.218, -8.728
- Country/County: Ireland, County Cork
- Type: tower house
- Image: https://img.castlecore.uk/castlepook-castle.jpg

**Castle B:** Castlecove Castle  
- Location: 51.767, -10.022
- Country/County: Ireland, County Kerry
- Type: tower house
- Image: https://img.castlecore.uk/castlecove-castle.jpg

**Metrics:**
- Name similarity: 82.4%
- Distance: 101.806km
- Same image: No

**Reasons:** High name similarity (82.4%)

**Recommendation:** **KEEP-BOTH**

---

### 762. KEEP-BOTH (Confidence: 50%)

**Castle A:** Drishane Castle
- Location: 52.16, -9.078
- Country/County: Ireland, County Cork
- Type: tower house
- Image: https://img.castlecore.uk/drishane-castle.jpg

**Castle B:** Shane Castle  
- Location: 54.707, -6.31
- Country/County: Ireland, County Antrim
- Type: castle
- Image: https://img.castlecore.uk/shane-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 337.332km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 763. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dromaneen Castle
- Location: 52.125, -8.575
- Country/County: Ireland, County Cork
- Type: tower house
- Image: https://img.castlecore.uk/dromaneen-castle.jpg

**Castle B:** Dromineer Castle  
- Location: 52.855, -8.262
- Country/County: Ireland, County Tipperary
- Type: tower house
- Image: https://img.castlecore.uk/dromineer-castle.jpg

**Metrics:**
- Name similarity: 87.5%
- Distance: 83.893km
- Same image: No

**Reasons:** High name similarity (87.5%)

**Recommendation:** **KEEP-BOTH**

---

### 764. KEEP-BOTH (Confidence: 50%)

**Castle A:** Ballymalis Castle
- Location: 52.058, -9.775
- Country/County: Ireland, County Kerry
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/3/34/Castles_of_Munster%2C_Ballymalis%2C_Kerry_-_geograph.org.uk_-_1392738.jpg

**Castle B:** Ballymahon Castle  
- Location: 53.568, -7.768
- Country/County: Ireland, County Longford
- Type: tower house
- Image: https://img.castlecore.uk/ballymahon-castle.jpg

**Metrics:**
- Name similarity: 82.4%
- Distance: 215.357km
- Same image: No

**Reasons:** High name similarity (82.4%)

**Recommendation:** **KEEP-BOTH**

---

### 765. KEEP-BOTH (Confidence: 50%)

**Castle A:** Ballyheigue Castle
- Location: 52.39, -9.842
- Country/County: Ireland, County Kerry
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Ballyheigue_castle.jpg/500px-Ballyheigue_castle.jpg

**Castle B:** Ballyteague Castle  
- Location: 53.175, -6.975
- Country/County: Ireland, County Kildare
- Type: tower house
- Image: https://img.castlecore.uk/ballyteague-castle.jpg

**Metrics:**
- Name similarity: 88.9%
- Distance: 211.638km
- Same image: No

**Reasons:** High name similarity (88.9%)

**Recommendation:** **KEEP-BOTH**

---

### 766. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dromineer Castle
- Location: 52.855, -8.262
- Country/County: Ireland, County Tipperary
- Type: tower house
- Image: https://img.castlecore.uk/dromineer-castle.jpg

**Castle B:** Druminnor Castle  
- Location: 57.3333, -2.8333
- Country/County: Scotland, Aberdeenshire
- Type: castle
- Image: https://img.castlecore.uk/druminnor-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 605.632km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 767. KEEP-BOTH (Confidence: 50%)

**Castle A:** Kiltinan Castle
- Location: 52.468, -7.778
- Country/County: Ireland, County Tipperary
- Type: castle
- Image: https://img.castlecore.uk/scraped-kiltinan.jpg

**Castle B:** Kilronan Castle  
- Location: 53.975, -8.118
- Country/County: Ireland, County Roscommon
- Type: castle
- Image: https://img.castlecore.uk/kilronan-castle.jpg

**Metrics:**
- Name similarity: 86.7%
- Distance: 169.092km
- Same image: No

**Reasons:** High name similarity (86.7%)

**Recommendation:** **KEEP-BOTH**

---

### 768. KEEP-BOTH (Confidence: 50%)

**Castle A:** Kiltinan Castle
- Location: 52.468, -7.778
- Country/County: Ireland, County Tipperary
- Type: castle
- Image: https://img.castlecore.uk/scraped-kiltinan.jpg

**Castle B:** Kilcogan Castle  
- Location: 53.218, -8.788
- Country/County: Ireland, County Galway
- Type: tower house
- Image: https://img.castlecore.uk/kilcogan-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 107.498km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 769. KEEP-BOTH (Confidence: 50%)

**Castle A:** Ballycahill Castle
- Location: 52.738, -7.948
- Country/County: Ireland, County Tipperary
- Type: tower house
- Image: https://img.castlecore.uk/ballycahill-castle.jpg

**Castle B:** Ballynakill Castle  
- Location: 53.7, -8.298
- Country/County: Ireland, County Roscommon
- Type: tower house
- Image: https://img.castlecore.uk/ballynakill-castle.jpg

**Metrics:**
- Name similarity: 88.9%
- Distance: 109.478km
- Same image: No

**Reasons:** High name similarity (88.9%)

**Recommendation:** **KEEP-BOTH**

---

### 770. KEEP-BOTH (Confidence: 50%)

**Castle A:** Ballylahan Castle
- Location: 53.83, -9.208
- Country/County: Ireland, County Mayo
- Type: tower house
- Image: https://img.castlecore.uk/ballylahan-castle.jpg

**Castle B:** Ballymahon Castle  
- Location: 53.568, -7.768
- Country/County: Ireland, County Longford
- Type: tower house
- Image: https://img.castlecore.uk/ballymahon-castle.jpg

**Metrics:**
- Name similarity: 88.2%
- Distance: 99.169km
- Same image: No

**Reasons:** High name similarity (88.2%)

**Recommendation:** **KEEP-BOTH**

---

### 771. KEEP-BOTH (Confidence: 50%)

**Castle A:** Ballylahan Castle
- Location: 53.83, -9.208
- Country/County: Ireland, County Mayo
- Type: tower house
- Image: https://img.castlecore.uk/ballylahan-castle.jpg

**Castle B:** Ballylaneen Castle  
- Location: 52.17, -7.385
- Country/County: Ireland, County Waterford
- Type: tower house
- Image: https://img.castlecore.uk/ballylaneen-castle.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 221.237km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 772. KEEP-BOTH (Confidence: 50%)

**Castle A:** Ballinrobe Castle
- Location: 53.622, -9.228
- Country/County: Ireland, County Mayo
- Type: castle
- Image: https://img.castlecore.uk/ballinrobe-castle.jpg

**Castle B:** Balintore Castle  
- Location: 56.7167, -3.1333
- Country/County: Scotland, Angus
- Type: castle
- Image: https://img.castlecore.uk/balintore-castle.jpg

**Metrics:**
- Name similarity: 82.4%
- Distance: 517.572km
- Same image: No

**Reasons:** High name similarity (82.4%)

**Recommendation:** **KEEP-BOTH**

---

### 773. KEEP-BOTH (Confidence: 50%)

**Castle A:** Aille Castle
- Location: 53.855, -9.612
- Country/County: Ireland, County Mayo
- Type: tower house
- Image: https://img.castlecore.uk/aille-castle.jpg

**Castle B:** Airlie Castle  
- Location: 56.75, -3.1
- Country/County: Scotland, Angus
- Type: castle
- Image: https://img.castlecore.uk/airlie-castle.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 522.628km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 774. KEEP-BOTH (Confidence: 50%)

**Castle A:** Ballyfarnon Castle
- Location: 53.952, -8.148
- Country/County: Ireland, County Roscommon
- Type: tower house
- Image: https://img.castlecore.uk/ballyfarnon-castle.jpg

**Castle B:** Ballymahon Castle  
- Location: 53.568, -7.768
- Country/County: Ireland, County Longford
- Type: tower house
- Image: https://img.castlecore.uk/ballymahon-castle.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 49.469km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 775. KEEP-BOTH (Confidence: 50%)

**Castle A:** Ballyfarnon Castle
- Location: 53.952, -8.148
- Country/County: Ireland, County Roscommon
- Type: tower house
- Image: https://img.castlecore.uk/ballyfarnon-castle.jpg

**Castle B:** Ballyshannon Castle  
- Location: 54.502, -8.19
- Country/County: Ireland, County Donegal
- Type: castle
- Image: https://img.castlecore.uk/ballyshannon-castle.jpg

**Metrics:**
- Name similarity: 84.2%
- Distance: 61.218km
- Same image: No

**Reasons:** High name similarity (84.2%)

**Recommendation:** **KEEP-BOTH**

---

### 776. KEEP-BOTH (Confidence: 50%)

**Castle A:** Kilronan Castle
- Location: 53.975, -8.118
- Country/County: Ireland, County Roscommon
- Type: castle
- Image: https://img.castlecore.uk/kilronan-castle.jpg

**Castle B:** Kilcolman Castle  
- Location: 52.252, -8.828
- Country/County: Ireland, County Cork
- Type: tower house
- Image: https://img.castlecore.uk/kilcolman-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 197.359km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 777. KEEP-BOTH (Confidence: 50%)

**Castle A:** Kilronan Castle
- Location: 53.975, -8.118
- Country/County: Ireland, County Roscommon
- Type: castle
- Image: https://img.castlecore.uk/kilronan-castle.jpg

**Castle B:** Kilcogan Castle  
- Location: 53.218, -8.788
- Country/County: Ireland, County Galway
- Type: tower house
- Image: https://img.castlecore.uk/kilcogan-castle.jpg

**Metrics:**
- Name similarity: 86.7%
- Distance: 95.079km
- Same image: No

**Reasons:** High name similarity (86.7%)

**Recommendation:** **KEEP-BOTH**

---

### 778. KEEP-BOTH (Confidence: 50%)

**Castle A:** Ardtermon Castle
- Location: 54.348, -8.572
- Country/County: Ireland, County Sligo
- Type: tower house
- Image: https://img.castlecore.uk/ardtermon-castle.jpg

**Castle B:** Termon Castle  
- Location: 53.092, -9.075
- Country/County: Ireland, County Clare
- Type: tower house
- Image: https://img.castlecore.uk/termon-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 143.528km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 779. KEEP-BOTH (Confidence: 50%)

**Castle A:** Kilglass Castle
- Location: 54.198, -8.398
- Country/County: Ireland, County Sligo
- Type: tower house
- Image: https://img.castlecore.uk/kilglass-castle.jpg

**Castle B:** Kilcash Castle  
- Location: 52.388, -7.708
- Country/County: Ireland, County Tipperary
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Kilcash_Castle2.jpg/500px-Kilcash_Castle2.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 206.419km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 780. KEEP-BOTH (Confidence: 50%)

**Castle A:** Jamestown Castle
- Location: 53.925, -8.068
- Country/County: Ireland, County Leitrim
- Type: fortification
- Image: https://img.castlecore.uk/jamestown-castle.jpg

**Castle B:** Annestown Castle  
- Location: 52.142, -7.202
- Country/County: Ireland, County Waterford
- Type: tower house
- Image: https://img.castlecore.uk/annestown-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 206.540km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 781. KEEP-BOTH (Confidence: 50%)

**Castle A:** Mohill Castle
- Location: 53.928, -7.868
- Country/County: Ireland, County Leitrim
- Type: castle
- Image: https://img.castlecore.uk/mohill-castle.jpg

**Castle B:** Coolhill Castle  
- Location: 52.544, -7.06
- Country/County: Ireland, County Kilkenny
- Type: tower house
- Image: https://img.castlecore.uk/coolhill-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 163.015km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 782. KEEP-BOTH (Confidence: 50%)

**Castle A:** Killeen Castle
- Location: 53.498, -6.658
- Country/County: Ireland, County Meath
- Type: castle
- Image: https://img.castlecore.uk/killeen-castle.jpg

**Castle B:** Kilclief Castle  
- Location: 54.328, -5.582
- Country/County: Northern Ireland, County Down
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Kilclief_Castle%2C_Geograph.jpg/500px-Kilclief_Castle%2C_Geograph.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 116.119km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 783. KEEP-BOTH (Confidence: 50%)

**Castle A:** Killeen Castle
- Location: 53.498, -6.658
- Country/County: Ireland, County Meath
- Type: castle
- Image: https://img.castlecore.uk/killeen-castle.jpg

**Castle B:** Kilmeaden Castle  
- Location: 52.238, -7.212
- Country/County: Ireland, County Waterford
- Type: tower house
- Image: https://img.castlecore.uk/kilmeaden-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 144.955km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 784. KEEP-BOTH (Confidence: 50%)

**Castle A:** Rataine Castle
- Location: 53.542, -6.468
- Country/County: Ireland, County Meath
- Type: tower house
- Image: https://img.castlecore.uk/rataine-castle.jpg

**Castle B:** Rattin Castle  
- Location: 53.482, -7.368
- Country/County: Ireland, County Westmeath
- Type: tower house
- Image: https://img.castlecore.uk/rattin-castle.jpg

**Metrics:**
- Name similarity: 85.7%
- Distance: 59.883km
- Same image: No

**Reasons:** High name similarity (85.7%)

**Recommendation:** **KEEP-BOTH**

---

### 785. KEEP-BOTH (Confidence: 50%)

**Castle A:** Kilbeggan Castle
- Location: 53.368, -7.502
- Country/County: Ireland, County Westmeath
- Type: tower house
- Image: https://img.castlecore.uk/kilbeggan-castle.jpg

**Castle B:** Kilcogan Castle  
- Location: 53.218, -8.788
- Country/County: Ireland, County Galway
- Type: tower house
- Image: https://img.castlecore.uk/kilcogan-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 87.083km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 786. KEEP-BOTH (Confidence: 50%)

**Castle A:** Kilbeggan Castle
- Location: 53.368, -7.502
- Country/County: Ireland, County Westmeath
- Type: tower house
- Image: https://img.castlecore.uk/kilbeggan-castle.jpg

**Castle B:** Kilcloggan Castle  
- Location: 52.31, -6.86
- Country/County: Ireland, County Wexford
- Type: tower house
- Image: https://img.castlecore.uk/kilcloggan-castle.jpg

**Metrics:**
- Name similarity: 82.4%
- Distance: 125.297km
- Same image: No

**Reasons:** High name similarity (82.4%)

**Recommendation:** **KEEP-BOTH**

---

### 787. KEEP-BOTH (Confidence: 50%)

**Castle A:** Castlecor House
- Location: 53.688, -7.598
- Country/County: Ireland, County Longford
- Type: country house
- Image: https://img.castlecore.uk/castlecor-house.jpg

**Castle B:** Castlemore  
- Location: 53.862, -8.193
- Country/County: Ireland, County Roscommon
- Type: castle
- Image: https://img.castlecore.uk/scraped-castlemore.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 43.623km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 788. KEEP-BOTH (Confidence: 50%)

**Castle A:** Castlecor House
- Location: 53.688, -7.598
- Country/County: Ireland, County Longford
- Type: country house
- Image: https://img.castlecore.uk/castlecor-house.jpg

**Castle B:** Tor Castle  
- Location: 56.8667, -5.0833
- Country/County: Scotland, Highland
- Type: castle
- Image: https://img.castlecore.uk/tor-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 387.620km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 789. KEEP-BOTH (Confidence: 50%)

**Castle A:** Castlecor House
- Location: 53.688, -7.598
- Country/County: Ireland, County Longford
- Type: country house
- Image: https://img.castlecore.uk/castlecor-house.jpg

**Castle B:** Castlecove Castle  
- Location: 51.767, -10.022
- Country/County: Ireland, County Kerry
- Type: tower house
- Image: https://img.castlecore.uk/castlecove-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 268.802km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 790. KEEP-BOTH (Confidence: 50%)

**Castle A:** Castlecor House
- Location: 53.688, -7.598
- Country/County: Ireland, County Longford
- Type: country house
- Image: https://img.castlecore.uk/castlecor-house.jpg

**Castle B:** Castlecomer Castle  
- Location: 52.806, -7.211
- Country/County: Ireland, County Kilkenny
- Type: castle
- Image: https://img.castlecore.uk/castlecomer-castle.jpg

**Metrics:**
- Name similarity: 81.8%
- Distance: 101.397km
- Same image: No

**Reasons:** High name similarity (81.8%)

**Recommendation:** **KEEP-BOTH**

---

### 791. KEEP-BOTH (Confidence: 50%)

**Castle A:** Ballymahon Castle
- Location: 53.568, -7.768
- Country/County: Ireland, County Longford
- Type: tower house
- Image: https://img.castlecore.uk/ballymahon-castle.jpg

**Castle B:** Ballynafoy Castle  
- Location: 54.405, -5.608
- Country/County: Northern Ireland, County Down
- Type: tower house
- Image: https://img.castlecore.uk/ballynafoy-castle.jpg

**Metrics:**
- Name similarity: 82.4%
- Distance: 169.120km
- Same image: No

**Reasons:** High name similarity (82.4%)

**Recommendation:** **KEEP-BOTH**

---

### 792. KEEP-BOTH (Confidence: 50%)

**Castle A:** Clondra Castle
- Location: 53.698, -7.948
- Country/County: Ireland, County Longford
- Type: tower house
- Image: https://img.castlecore.uk/clondra-castle.jpg

**Castle B:** Clonard Castle  
- Location: 53.518, -6.978
- Country/County: Ireland, County Meath
- Type: castle
- Image: https://img.castlecore.uk/clonard-castle.jpg

**Metrics:**
- Name similarity: 85.7%
- Distance: 67.050km
- Same image: No

**Reasons:** High name similarity (85.7%)

**Recommendation:** **KEEP-BOTH**

---

### 793. KEEP-BOTH (Confidence: 50%)

**Castle A:** Clondra Castle
- Location: 53.698, -7.948
- Country/County: Ireland, County Longford
- Type: tower house
- Image: https://img.castlecore.uk/clondra-castle.jpg

**Castle B:** Clonegal Castle  
- Location: 52.676, -6.658
- Country/County: Ireland, County Carlow
- Type: tower house
- Image: https://img.castlecore.uk/clonegal-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 142.480km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 794. KEEP-BOTH (Confidence: 50%)

**Castle A:** Clondra Castle
- Location: 53.698, -7.948
- Country/County: Ireland, County Longford
- Type: tower house
- Image: https://img.castlecore.uk/clondra-castle.jpg

**Castle B:** Clontarf Castle  
- Location: 53.365, -6.203
- Country/County: Ireland, County Dublin
- Type: castle
- Image: https://img.castlecore.uk/clontarf-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 121.125km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 795. KEEP-BOTH (Confidence: 50%)

**Castle A:** Clondra Castle
- Location: 53.698, -7.948
- Country/County: Ireland, County Longford
- Type: tower house
- Image: https://img.castlecore.uk/clondra-castle.jpg

**Castle B:** Clonroad Castle  
- Location: 52.847, -8.98
- Country/County: Ireland, County Clare
- Type: castle
- Image: https://img.castlecore.uk/clonroad-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 116.888km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 796. KEEP-BOTH (Confidence: 50%)

**Castle A:** Ballyboy Castle
- Location: 53.348, -7.498
- Country/County: Ireland, County Offaly
- Type: tower house
- Image: https://img.castlecore.uk/ballyboy-castle.jpg

**Castle B:** Ballynafoy Castle  
- Location: 54.405, -5.608
- Country/County: Northern Ireland, County Down
- Type: tower house
- Image: https://img.castlecore.uk/ballynafoy-castle.jpg

**Metrics:**
- Name similarity: 82.4%
- Distance: 170.763km
- Same image: No

**Reasons:** High name similarity (82.4%)

**Recommendation:** **KEEP-BOTH**

---

### 797. KEEP-BOTH (Confidence: 50%)

**Castle A:** Ballyboy Castle
- Location: 53.348, -7.498
- Country/County: Ireland, County Offaly
- Type: tower house
- Image: https://img.castlecore.uk/ballyboy-castle.jpg

**Castle B:** Ballylee Castle  
- Location: 53.068, -8.658
- Country/County: Ireland, County Galway
- Type: tower house
- Image: https://img.castlecore.uk/ballylee-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 83.288km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 798. KEEP-BOTH (Confidence: 50%)

**Castle A:** Ballyboy Castle
- Location: 53.348, -7.498
- Country/County: Ireland, County Offaly
- Type: tower house
- Image: https://img.castlecore.uk/ballyboy-castle.jpg

**Castle B:** Ballybur Castle  
- Location: 52.676, -7.35
- Country/County: Ireland, County Kilkenny
- Type: tower house
- Image: https://img.castlecore.uk/ballybur-castle.jpg

**Metrics:**
- Name similarity: 86.7%
- Distance: 75.376km
- Same image: No

**Reasons:** High name similarity (86.7%)

**Recommendation:** **KEEP-BOTH**

---

### 799. KEEP-BOTH (Confidence: 50%)

**Castle A:** Ballyboy Castle
- Location: 53.348, -7.498
- Country/County: Ireland, County Offaly
- Type: tower house
- Image: https://img.castlecore.uk/ballyboy-castle.jpg

**Castle B:** Ballylooby Castle  
- Location: 52.275, -7.938
- Country/County: Ireland, County Tipperary
- Type: castle
- Image: https://img.castlecore.uk/ballylooby-castle.jpg

**Metrics:**
- Name similarity: 82.4%
- Distance: 122.922km
- Same image: No

**Reasons:** High name similarity (82.4%)

**Recommendation:** **KEEP-BOTH**

---

### 800. KEEP-BOTH (Confidence: 50%)

**Castle A:** Durrow Abbey
- Location: 53.348, -7.538
- Country/County: Ireland, County Offaly
- Type: abbey
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Durrow_abbey_A.jpg/500px-Durrow_abbey_A.jpg

**Castle B:** Castle Durrow  
- Location: 52.835, -7.393
- Country/County: Ireland, County Laois
- Type: castle
- Image: https://img.castlecore.uk/castle-durrow.jpg

**Metrics:**
- Name similarity: 100.0%
- Distance: 57.859km
- Same image: No

**Reasons:** High name similarity (100.0%)

**Recommendation:** **KEEP-BOTH**

---

### 801. KEEP-BOTH (Confidence: 50%)

**Castle A:** Lemenaghan Castle
- Location: 53.308, -7.778
- Country/County: Ireland, County Offaly
- Type: tower house
- Image: https://img.castlecore.uk/lemenaghan-castle.jpg

**Castle B:** Monaghan Castle  
- Location: 54.249, -6.968
- Country/County: Ireland, County Monaghan
- Type: castle
- Image: https://img.castlecore.uk/monaghan-castle.jpg

**Metrics:**
- Name similarity: 82.4%
- Distance: 117.390km
- Same image: No

**Reasons:** High name similarity (82.4%)

**Recommendation:** **KEEP-BOTH**

---

### 802. KEEP-BOTH (Confidence: 50%)

**Castle A:** Shaen Castle
- Location: 53.028, -7.428
- Country/County: Ireland, County Laois
- Type: castle
- Image: https://img.castlecore.uk/shaen-castle.jpg

**Castle B:** Shane Castle  
- Location: 54.707, -6.31
- Country/County: Ireland, County Antrim
- Type: castle
- Image: https://img.castlecore.uk/shane-castle.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 200.565km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 803. KEEP-BOTH (Confidence: 50%)

**Castle A:** Inch Castle
- Location: 55.068, -7.558
- Country/County: Ireland, County Donegal
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Farland_Bank_and_Inch_Castle_-_panoramio.jpg/500px-Farland_Bank_and_Inch_Castle_-_panoramio.jpg

**Castle B:** Ince Castle  
- Location: 50.3983, -4.275
- Country/County: England, Cornwall
- Type: castle
- Image: https://img.castlecore.uk/ince-castle.jpg

**Metrics:**
- Name similarity: 90.9%
- Distance: 564.185km
- Same image: No

**Reasons:** High name similarity (90.9%)

**Recommendation:** **KEEP-BOTH**

---

### 804. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dunnaman Castle
- Location: 54.252, -5.898
- Country/County: Northern Ireland, County Down
- Type: motte
- Image: https://img.castlecore.uk/dunnaman-castle.jpg

**Castle B:** Dunraven Castle  
- Location: 51.4486, -3.6081
- Country/County: Wales, Vale of Glamorgan
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Dunraven_Castle_%2816567797823%29.jpg/500px-Dunraven_Castle_%2816567797823%29.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 347.541km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 805. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dunnaman Castle
- Location: 54.252, -5.898
- Country/County: Northern Ireland, County Down
- Type: motte
- Image: https://img.castlecore.uk/dunnaman-castle.jpg

**Castle B:** Dungarvan Castle  
- Location: 52.089, -7.619
- Country/County: Ireland, County Waterford
- Type: castle
- Image: https://img.castlecore.uk/dungarvan-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 266.450km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 806. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dunnaman Castle
- Location: 54.252, -5.898
- Country/County: Northern Ireland, County Down
- Type: motte
- Image: https://img.castlecore.uk/dunnaman-castle.jpg

**Castle B:** Dunmoran Castle  
- Location: 54.235, -8.62
- Country/County: Ireland, County Sligo
- Type: tower house
- Image: https://img.castlecore.uk/dunmoran-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 176.863km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 807. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dunnaman Castle
- Location: 54.252, -5.898
- Country/County: Northern Ireland, County Down
- Type: motte
- Image: https://img.castlecore.uk/dunnaman-castle.jpg

**Castle B:** Dunlavin Castle  
- Location: 53.057, -6.701
- Country/County: Ireland, County Wicklow
- Type: castle
- Image: https://img.castlecore.uk/dunlavin-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 143.025km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 808. KEEP-BOTH (Confidence: 50%)

**Castle A:** Ballynafoy Castle
- Location: 54.405, -5.608
- Country/County: Northern Ireland, County Down
- Type: tower house
- Image: https://img.castlecore.uk/ballynafoy-castle.jpg

**Castle B:** Ballinafad Castle  
- Location: 54.024, -8.309
- Country/County: Ireland, County Sligo
- Type: castle
- Image: https://img.castlecore.uk/ballinafad-castle.jpg

**Metrics:**
- Name similarity: 82.4%
- Distance: 180.648km
- Same image: No

**Reasons:** High name similarity (82.4%)

**Recommendation:** **KEEP-BOTH**

---

### 809. KEEP-BOTH (Confidence: 50%)

**Castle A:** Castle Caldwell
- Location: 54.498, -7.868
- Country/County: Northern Ireland, County Fermanagh
- Type: castle
- Image: https://img.castlecore.uk/castle-caldwell.jpg

**Castle B:** Sadell Castle  
- Location: 55.5833, -5.5667
- Country/County: Scotland, Argyll and Bute
- Type: castle
- Image: https://img.castlecore.uk/sadell-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 189.884km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 810. KEEP-BOTH (Confidence: 50%)

**Castle A:** Castle Caldwell
- Location: 54.498, -7.868
- Country/County: Northern Ireland, County Fermanagh
- Type: castle
- Image: https://img.castlecore.uk/castle-caldwell.jpg

**Castle B:** Barnwell Castle  
- Location: 52.4517, -0.45
- Country/County: England, Northamptonshire
- Type: castle
- Image: https://img.castlecore.uk/barnwell-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 540.740km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 811. KEEP-BOTH (Confidence: 50%)

**Castle A:** Portora Castle
- Location: 54.345, -7.652
- Country/County: Northern Ireland, County Fermanagh
- Type: castle
- Image: https://img.castlecore.uk/portora-castle.jpg

**Castle B:** Gortmore Castle  
- Location: 53.39, -8.64
- Country/County: Ireland, County Galway
- Type: tower house
- Image: https://img.castlecore.uk/gortmore-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 124.388km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 812. KEEP-BOTH (Confidence: 50%)

**Castle A:** Augher Castle
- Location: 54.418, -7.178
- Country/County: Northern Ireland, County Tyrone
- Type: castle
- Image: https://img.castlecore.uk/augher-castle.jpg

**Castle B:** Banagher Castle  
- Location: 53.189, -7.987
- Country/County: Ireland, County Offaly
- Type: castle
- Image: https://img.castlecore.uk/banagher-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 146.619km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 813. KEEP-BOTH (Confidence: 50%)

**Castle A:** Roughan Castle
- Location: 54.498, -6.908
- Country/County: Northern Ireland, County Tyrone
- Type: castle
- Image: https://img.castlecore.uk/scraped-roughan.jpg

**Castle B:** Monaghan Castle  
- Location: 54.249, -6.968
- Country/County: Ireland, County Monaghan
- Type: castle
- Image: https://img.castlecore.uk/monaghan-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 27.959km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 814. KEEP-BOTH (Confidence: 50%)

**Castle A:** Brackagh Castle
- Location: 54.548, -7.098
- Country/County: Northern Ireland, County Tyrone
- Type: tower house
- Image: https://img.castlecore.uk/brackagh-castle.jpg

**Castle B:** Granagh Castle  
- Location: 52.328, -7.532
- Country/County: Ireland, County Kilkenny
- Type: castle
- Image: https://img.castlecore.uk/granagh-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 248.520km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 815. KEEP-BOTH (Confidence: 50%)

**Castle A:** Tynan Castle
- Location: 54.328, -6.808
- Country/County: Northern Ireland, County Armagh
- Type: castle
- Image: https://img.castlecore.uk/tynan-castle.jpg

**Castle B:** Tynagh Castle  
- Location: 53.128, -8.414
- Country/County: Ireland, County Galway
- Type: tower house
- Image: https://img.castlecore.uk/tynagh-castle.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 170.187km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 816. KEEP-BOTH (Confidence: 50%)

**Castle A:** Knockmealdown Abbey
- Location: 52.148, -7.898
- Country/County: Ireland, County Waterford
- Type: abbey
- Image: https://img.castlecore.uk/knockmealdown-abbey.jpg

**Castle B:** Knockmealdown Castle  
- Location: 52.232, -7.86
- Country/County: Ireland, County Waterford
- Type: tower house
- Image: https://img.castlecore.uk/knockmealdown-castle.jpg

**Metrics:**
- Name similarity: 100.0%
- Distance: 9.693km
- Same image: No

**Reasons:** High name similarity (100.0%)

**Recommendation:** **KEEP-BOTH**

---

### 817. KEEP-BOTH (Confidence: 50%)

**Castle A:** Ballyquin Castle
- Location: 52.162, -7.578
- Country/County: Ireland, County Waterford
- Type: tower house
- Image: https://img.castlecore.uk/ballyquin-castle.jpg

**Castle B:** Ballycurrin Castle  
- Location: 53.458, -9.155
- Country/County: Ireland, County Galway
- Type: tower house
- Image: https://img.castlecore.uk/ballycurrin-castle.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 178.882km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 818. KEEP-BOTH (Confidence: 50%)

**Castle A:** Ballyquin Castle
- Location: 52.162, -7.578
- Country/County: Ireland, County Waterford
- Type: tower house
- Image: https://img.castlecore.uk/ballyquin-castle.jpg

**Castle B:** Ballybur Castle  
- Location: 52.676, -7.35
- Country/County: Ireland, County Kilkenny
- Type: tower house
- Image: https://img.castlecore.uk/ballybur-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 59.209km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 819. KEEP-BOTH (Confidence: 50%)

**Castle A:** Udny Castle
- Location: 57.335, -2.228
- Country/County: Scotland, Aberdeenshire
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Udny_Castle_-_geograph.org.uk_-_6213281.jpg/500px-Udny_Castle_-_geograph.org.uk_-_6213281.jpg

**Castle B:** Any Castle  
- Location: 52.365, -8.258
- Country/County: Ireland, County Tipperary
- Type: castle
- Image: https://img.castlecore.uk/any-castle.jpg

**Metrics:**
- Name similarity: 81.8%
- Distance: 673.552km
- Same image: No

**Reasons:** High name similarity (81.8%)

**Recommendation:** **KEEP-BOTH**

---

### 820. KEEP-BOTH (Confidence: 50%)

**Castle A:** Ardiffery Castle
- Location: 57.458, -1.888
- Country/County: Scotland, Aberdeenshire
- Type: tower house
- Image: https://img.castlecore.uk/ardiffery-castle.jpg

**Castle B:** Ardfry Castle  
- Location: 53.238, -8.988
- Country/County: Ireland, County Galway
- Type: country house
- Image: https://img.castlecore.uk/ardfry-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 648.734km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 821. KEEP-BOTH (Confidence: 50%)

**Castle A:** Corse Castle
- Location: 57.178, -2.628
- Country/County: Scotland, Aberdeenshire
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Corse_Castle_-_geograph.org.uk_-_252876.jpg/500px-Corse_Castle_-_geograph.org.uk_-_252876.jpg

**Castle B:** Castle Coole  
- Location: 54.327, -7.582
- Country/County: Ireland, County Fermanagh
- Type: palace
- Image: https://img.castlecore.uk/castle-coole.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 443.187km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 822. KEEP-BOTH (Confidence: 50%)

**Castle A:** Corse Castle
- Location: 57.178, -2.628
- Country/County: Scotland, Aberdeenshire
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Corse_Castle_-_geograph.org.uk_-_252876.jpg/500px-Corse_Castle_-_geograph.org.uk_-_252876.jpg

**Castle B:** Borve Castle  
- Location: 58.1167, -5
- Country/County: Scotland, Highland
- Type: castle
- Image: https://img.castlecore.uk/borve-castle.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 175.529km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 823. KEEP-BOTH (Confidence: 50%)

**Castle A:** Corse Castle
- Location: 57.178, -2.628
- Country/County: Scotland, Aberdeenshire
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Corse_Castle_-_geograph.org.uk_-_252876.jpg/500px-Corse_Castle_-_geograph.org.uk_-_252876.jpg

**Castle B:** Corby Castle  
- Location: 54.905, -2.8
- Country/County: England, Cumbria
- Type: castle
- Image: https://img.castlecore.uk/corby-castle.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 252.972km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 824. KEEP-BOTH (Confidence: 50%)

**Castle A:** Hume Castle
- Location: 55.738, -2.478
- Country/County: Scotland, Scottish Borders
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Hume_Castle_-_geograph.org.uk_-_812984.jpg/500px-Hume_Castle_-_geograph.org.uk_-_812984.jpg

**Castle B:** Castle Hyde  
- Location: 52.125, -8.198
- Country/County: Ireland, County Cork
- Type: castle
- Image: https://img.castlecore.uk/castle-hyde.jpg

**Metrics:**
- Name similarity: 81.8%
- Distance: 548.854km
- Same image: No

**Reasons:** High name similarity (81.8%)

**Recommendation:** **KEEP-BOTH**

---

### 825. KEEP-BOTH (Confidence: 50%)

**Castle A:** Rowallan Castle
- Location: 55.612, -4.508
- Country/County: Scotland, Ayrshire
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Rowallan_castle_ayrshire.jpg/500px-Rowallan_castle_ayrshire.jpg

**Castle B:** Rostellan Castle  
- Location: 51.848, -8.168
- Country/County: Ireland, County Cork
- Type: castle
- Image: https://img.castlecore.uk/rostellan-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 482.691km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 826. KEEP-BOTH (Confidence: 50%)

**Castle A:** Russborough House
- Location: 53.118, -6.538
- Country/County: Ireland, County Wicklow
- Type: country house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Russborough-House_Part-of-the-facade.jpg/500px-Russborough-House_Part-of-the-facade.jpg

**Castle B:** Guisborough Priory  
- Location: 54.5317, -1.0467
- Country/County: England, Yorkshire
- Type: abbey
- Image: https://img.castlecore.uk/guisborough-priory.jpg

**Metrics:**
- Name similarity: 81.8%
- Distance: 393.065km
- Same image: No

**Reasons:** High name similarity (81.8%)

**Recommendation:** **KEEP-BOTH**

---

### 827. KEEP-BOTH (Confidence: 50%)

**Castle A:** Cloyne Round Tower
- Location: 51.862, -8.128
- Country/County: Ireland, County Cork
- Type: round tower
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Round_Tower_of_Cloyne.jpg/500px-Round_Tower_of_Cloyne.jpg

**Castle B:** Clones Round Tower  
- Location: 54.18, -7.229
- Country/County: Ireland, County Monaghan
- Type: abbey
- Image: https://img.castlecore.uk/clones-round-tower.jpg

**Metrics:**
- Name similarity: 88.9%
- Distance: 264.665km
- Same image: No

**Reasons:** High name similarity (88.9%)

**Recommendation:** **KEEP-BOTH**

---

### 828. KEEP-BOTH (Confidence: 50%)

**Castle A:** Cloyne Round Tower
- Location: 51.862, -8.128
- Country/County: Ireland, County Cork
- Type: round tower
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Round_Tower_of_Cloyne.jpg/500px-Round_Tower_of_Cloyne.jpg

**Castle B:** Cloone Round Tower  
- Location: 53.9, -7.85
- Country/County: Ireland, County Leitrim
- Type: abbey
- Image: https://img.castlecore.uk/cloone-round-tower.jpg

**Metrics:**
- Name similarity: 94.4%
- Distance: 227.381km
- Same image: No

**Reasons:** High name similarity (94.4%)

**Recommendation:** **KEEP-BOTH**

---

### 829. KEEP-BOTH (Confidence: 50%)

**Castle A:** Kilcolman Castle
- Location: 52.252, -8.828
- Country/County: Ireland, County Cork
- Type: tower house
- Image: https://img.castlecore.uk/kilcolman-castle.jpg

**Castle B:** Kilcogan Castle  
- Location: 53.218, -8.788
- Country/County: Ireland, County Galway
- Type: tower house
- Image: https://img.castlecore.uk/kilcogan-castle.jpg

**Metrics:**
- Name similarity: 87.5%
- Distance: 107.448km
- Same image: No

**Reasons:** High name similarity (87.5%)

**Recommendation:** **KEEP-BOTH**

---

### 830. KEEP-BOTH (Confidence: 50%)

**Castle A:** Kilcolman Castle
- Location: 52.252, -8.828
- Country/County: Ireland, County Cork
- Type: tower house
- Image: https://img.castlecore.uk/kilcolman-castle.jpg

**Castle B:** Kilcloggan Castle  
- Location: 52.31, -6.86
- Country/County: Ireland, County Wexford
- Type: tower house
- Image: https://img.castlecore.uk/kilcloggan-castle.jpg

**Metrics:**
- Name similarity: 82.4%
- Distance: 134.030km
- Same image: No

**Reasons:** High name similarity (82.4%)

**Recommendation:** **KEEP-BOTH**

---

### 831. KEEP-BOTH (Confidence: 50%)

**Castle A:** Kilcolman Castle
- Location: 52.252, -8.828
- Country/County: Ireland, County Cork
- Type: tower house
- Image: https://img.castlecore.uk/kilcolman-castle.jpg

**Castle B:** Kilcormac Castle  
- Location: 53.187, -7.717
- Country/County: Ireland, County Offaly
- Type: castle
- Image: https://img.castlecore.uk/kilcormac-castle.jpg

**Metrics:**
- Name similarity: 87.5%
- Distance: 128.092km
- Same image: No

**Reasons:** High name similarity (87.5%)

**Recommendation:** **KEEP-BOTH**

---

### 832. KEEP-BOTH (Confidence: 50%)

**Castle A:** Kilcogan Castle
- Location: 53.218, -8.788
- Country/County: Ireland, County Galway
- Type: tower house
- Image: https://img.castlecore.uk/kilcogan-castle.jpg

**Castle B:** Kilcloggan Castle  
- Location: 52.31, -6.86
- Country/County: Ireland, County Wexford
- Type: tower house
- Image: https://img.castlecore.uk/kilcloggan-castle.jpg

**Metrics:**
- Name similarity: 88.2%
- Distance: 164.374km
- Same image: No

**Reasons:** High name similarity (88.2%)

**Recommendation:** **KEEP-BOTH**

---

### 833. KEEP-BOTH (Confidence: 50%)

**Castle A:** Kilcogan Castle
- Location: 53.218, -8.788
- Country/County: Ireland, County Galway
- Type: tower house
- Image: https://img.castlecore.uk/kilcogan-castle.jpg

**Castle B:** Kilcormac Castle  
- Location: 53.187, -7.717
- Country/County: Ireland, County Offaly
- Type: castle
- Image: https://img.castlecore.uk/kilcormac-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 71.416km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 834. KEEP-BOTH (Confidence: 50%)

**Castle A:** Ballylee Castle
- Location: 53.068, -8.658
- Country/County: Ireland, County Galway
- Type: tower house
- Image: https://img.castlecore.uk/ballylee-castle.jpg

**Castle B:** Ballybur Castle  
- Location: 52.676, -7.35
- Country/County: Ireland, County Kilkenny
- Type: tower house
- Image: https://img.castlecore.uk/ballybur-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 98.013km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 835. KEEP-BOTH (Confidence: 50%)

**Castle A:** Ballylee Castle
- Location: 53.068, -8.658
- Country/County: Ireland, County Galway
- Type: tower house
- Image: https://img.castlecore.uk/ballylee-castle.jpg

**Castle B:** Ballylaneen Castle  
- Location: 52.17, -7.385
- Country/County: Ireland, County Waterford
- Type: tower house
- Image: https://img.castlecore.uk/ballylaneen-castle.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 131.737km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 836. KEEP-BOTH (Confidence: 50%)

**Castle A:** Hertford Castle
- Location: 51.798, -0.078
- Country/County: England, Hertfordshire
- Type: castle
- Image: https://img.castlecore.uk/hertford-castle.jpg

**Castle B:** Hereford Castle  
- Location: 52.0533, -2.715
- Country/County: England, Herefordshire
- Type: castle
- Image: https://img.castlecore.uk/hereford-castle.jpg

**Metrics:**
- Name similarity: 93.3%
- Distance: 183.029km
- Same image: No

**Reasons:** High name similarity (93.3%)

**Recommendation:** **KEEP-BOTH**

---

### 837. KEEP-BOTH (Confidence: 50%)

**Castle A:** Aghadoe Castle
- Location: 52.078, -9.548
- Country/County: Ireland, County Kerry
- Type: castle
- Image: https://img.castlecore.uk/aghadoe-castle.jpg

**Castle B:** Aghancon Castle  
- Location: 52.984, -7.861
- Country/County: Ireland, County Offaly
- Type: castle
- Image: https://img.castlecore.uk/aghancon-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 152.213km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 838. KEEP-BOTH (Confidence: 50%)

**Castle A:** Clonard Castle
- Location: 53.518, -6.978
- Country/County: Ireland, County Meath
- Type: castle
- Image: https://img.castlecore.uk/clonard-castle.jpg

**Castle B:** Clontarf Castle  
- Location: 53.365, -6.203
- Country/County: Ireland, County Dublin
- Type: castle
- Image: https://img.castlecore.uk/clontarf-castle.jpg

**Metrics:**
- Name similarity: 86.7%
- Distance: 54.076km
- Same image: No

**Reasons:** High name similarity (86.7%)

**Recommendation:** **KEEP-BOTH**

---

### 839. KEEP-BOTH (Confidence: 50%)

**Castle A:** Clonard Castle
- Location: 53.518, -6.978
- Country/County: Ireland, County Meath
- Type: castle
- Image: https://img.castlecore.uk/clonard-castle.jpg

**Castle B:** Clonroad Castle  
- Location: 52.847, -8.98
- Country/County: Ireland, County Clare
- Type: castle
- Image: https://img.castlecore.uk/clonroad-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 152.844km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 840. KEEP-BOTH (Confidence: 50%)

**Castle A:** Tuam Cathedral
- Location: 53.518, -8.858
- Country/County: Ireland, County Galway
- Type: cathedral
- Image: https://img.castlecore.uk/tuam-cathedral.jpg

**Castle B:** Durham Cathedral  
- Location: 54.7739, -1.5761
- Country/County: England, County Durham
- Type: abbey
- Image: https://img.castlecore.uk/durham-cathedral.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 494.136km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 841. KEEP-BOTH (Confidence: 50%)

**Castle A:** Cahergall Stone Fort
- Location: 51.962, -10.028
- Country/County: Ireland, County Kerry
- Type: stone fort
- Image: https://img.castlecore.uk/cahergall-stone-fort.jpg

**Castle B:** Cahermore Stone Fort  
- Location: 53.045, -9.157
- Country/County: Ireland, County Clare
- Type: fort
- Image: https://img.castlecore.uk/cahermore-stone-fort.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 134.078km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 842. KEEP-BOTH (Confidence: 50%)

**Castle A:** Ballinvard Castle
- Location: 52.728, -9.338
- Country/County: Ireland, County Clare
- Type: tower house
- Image: https://img.castlecore.uk/ballinvard-castle.jpg

**Castle B:** Ballinafad Castle  
- Location: 54.024, -8.309
- Country/County: Ireland, County Sligo
- Type: castle
- Image: https://img.castlecore.uk/ballinafad-castle.jpg

**Metrics:**
- Name similarity: 82.4%
- Distance: 159.453km
- Same image: No

**Reasons:** High name similarity (82.4%)

**Recommendation:** **KEEP-BOTH**

---

### 843. KEEP-BOTH (Confidence: 50%)

**Castle A:** Ardmore Cathedral
- Location: 51.948, -7.728
- Country/County: Ireland, County Waterford
- Type: cathedral
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/01_St._Declan%27s_Monastery%2C_Ardmore.png/500px-01_St._Declan%27s_Monastery%2C_Ardmore.png

**Castle B:** Kilmore Cathedral  
- Location: 53.973, -7.303
- Country/County: Ireland, County Cavan
- Type: abbey
- Image: https://img.castlecore.uk/kilmore-cathedral.jpg

**Metrics:**
- Name similarity: 82.4%
- Distance: 226.961km
- Same image: No

**Reasons:** High name similarity (82.4%)

**Recommendation:** **KEEP-BOTH**

---

### 844. KEEP-BOTH (Confidence: 50%)

**Castle A:** Woodstown Castle
- Location: 52.228, -6.998
- Country/County: Ireland, County Waterford
- Type: tower house
- Image: https://img.castlecore.uk/woodstown-castle.jpg

**Castle B:** Roodstown Castle  
- Location: 53.843, -6.577
- Country/County: Ireland, County Louth
- Type: tower house
- Image: https://img.castlecore.uk/roodstown-castle.jpg

**Metrics:**
- Name similarity: 93.8%
- Distance: 181.772km
- Same image: No

**Reasons:** High name similarity (93.8%)

**Recommendation:** **KEEP-BOTH**

---

### 845. KEEP-BOTH (Confidence: 50%)

**Castle A:** Woodstown Castle
- Location: 52.228, -6.998
- Country/County: Ireland, County Waterford
- Type: tower house
- Image: https://img.castlecore.uk/woodstown-castle.jpg

**Castle B:** Moorstown Castle  
- Location: 52.38, -7.625
- Country/County: Ireland, County Tipperary
- Type: tower house
- Image: https://img.castlecore.uk/wiki-moorstown-castle.jpg

**Metrics:**
- Name similarity: 87.5%
- Distance: 45.859km
- Same image: No

**Reasons:** High name similarity (87.5%)

**Recommendation:** **KEEP-BOTH**

---

### 846. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dungar Castle
- Location: 52.918, -7.748
- Country/County: Ireland, County Tipperary
- Type: tower house
- Image: https://img.castlecore.uk/dungar-castle.jpg

**Castle B:** Dungarvan Castle  
- Location: 52.089, -7.619
- Country/County: Ireland, County Waterford
- Type: castle
- Image: https://img.castlecore.uk/dungarvan-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 92.593km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 847. KEEP-BOTH (Confidence: 50%)

**Castle A:** Castle Kevin
- Location: 53.041, -6.285
- Country/County: Ireland, County Wicklow
- Type: castle
- Image: https://img.castlecore.uk/castle-kevin.jpg

**Castle B:** Castle Levan  
- Location: 55.9333, -4.8
- Country/County: Scotland, Inverclyde
- Type: castle
- Image: https://img.castlecore.uk/castle-levan.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 335.587km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 848. KEEP-BOTH (Confidence: 50%)

**Castle A:** Castlemore
- Location: 53.862, -8.193
- Country/County: Ireland, County Roscommon
- Type: castle
- Image: https://img.castlecore.uk/scraped-castlemore.jpg

**Castle B:** Castlecove Castle  
- Location: 51.767, -10.022
- Country/County: Ireland, County Kerry
- Type: tower house
- Image: https://img.castlecore.uk/castlecove-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 263.373km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 849. KEEP-BOTH (Confidence: 50%)

**Castle A:** Ballyclogh Castle
- Location: 52.208, -8.55
- Country/County: Ireland, County Cork
- Type: tower house
- Image: https://img.castlecore.uk/ballyclogh-castle.jpg

**Castle B:** Ballynaclogh Castle  
- Location: 52.735, -8.183
- Country/County: Ireland, County Tipperary
- Type: tower house
- Image: https://img.castlecore.uk/ballynaclogh-castle.jpg

**Metrics:**
- Name similarity: 89.5%
- Distance: 63.654km
- Same image: No

**Reasons:** High name similarity (89.5%)

**Recommendation:** **KEEP-BOTH**

---

### 850. KEEP-BOTH (Confidence: 50%)

**Castle A:** Roodstown Castle
- Location: 53.843, -6.577
- Country/County: Ireland, County Louth
- Type: tower house
- Image: https://img.castlecore.uk/roodstown-castle.jpg

**Castle B:** Moorstown Castle  
- Location: 52.38, -7.625
- Country/County: Ireland, County Tipperary
- Type: tower house
- Image: https://img.castlecore.uk/wiki-moorstown-castle.jpg

**Metrics:**
- Name similarity: 87.5%
- Distance: 177.074km
- Same image: No

**Reasons:** High name similarity (87.5%)

**Recommendation:** **KEEP-BOTH**

---

### 851. KEEP-BOTH (Confidence: 50%)

**Castle A:** Castle Coole
- Location: 54.327, -7.582
- Country/County: Ireland, County Fermanagh
- Type: palace
- Image: https://img.castlecore.uk/castle-coole.jpg

**Castle B:** Oola Castle  
- Location: 52.489, -8.293
- Country/County: Ireland, County Limerick
- Type: tower house
- Image: https://img.castlecore.uk/oola-castle.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 209.737km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 852. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dunraven Castle
- Location: 51.4486, -3.6081
- Country/County: Wales, Vale of Glamorgan
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Dunraven_Castle_%2816567797823%29.jpg/500px-Dunraven_Castle_%2816567797823%29.jpg

**Castle B:** Dungarvan Castle  
- Location: 52.089, -7.619
- Country/County: Ireland, County Waterford
- Type: castle
- Image: https://img.castlecore.uk/dungarvan-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 284.992km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 853. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dunraven Castle
- Location: 51.4486, -3.6081
- Country/County: Wales, Vale of Glamorgan
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Dunraven_Castle_%2816567797823%29.jpg/500px-Dunraven_Castle_%2816567797823%29.jpg

**Castle B:** Dunderave Castle  
- Location: 56.2167, -5.0167
- Country/County: Scotland, Argyll and Bute
- Type: castle
- Image: https://img.castlecore.uk/wiki-dunderave-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 538.155km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 854. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dunraven Castle
- Location: 51.4486, -3.6081
- Country/County: Wales, Vale of Glamorgan
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Dunraven_Castle_%2816567797823%29.jpg/500px-Dunraven_Castle_%2816567797823%29.jpg

**Castle B:** Dunlavin Castle  
- Location: 53.057, -6.701
- Country/County: Ireland, County Wicklow
- Type: castle
- Image: https://img.castlecore.uk/dunlavin-castle.jpg

**Metrics:**
- Name similarity: 86.7%
- Distance: 276.202km
- Same image: No

**Reasons:** High name similarity (86.7%)

**Recommendation:** **KEEP-BOTH**

---

### 855. KEEP-BOTH (Confidence: 50%)

**Castle A:** St David's Cathedral
- Location: 51.8819, -5.2694
- Country/County: Wales, Pembrokeshire
- Type: abbey
- Image: https://img.castlecore.uk/st-david-s-cathedral.jpg

**Castle B:** St Canice's Cathedral  
- Location: 52.657, -7.257
- Country/County: Ireland, County Kilkenny
- Type: abbey
- Image: https://img.castlecore.uk/st-canice-s-cathedral.jpg

**Metrics:**
- Name similarity: 81.0%
- Distance: 160.366km
- Same image: No

**Reasons:** High name similarity (81.0%)

**Recommendation:** **KEEP-BOTH**

---

### 856. KEEP-BOTH (Confidence: 50%)

**Castle A:** Segontium Roman Fort
- Location: 53.1361, -4.2806
- Country/County: Wales, Gwynedd
- Type: fort
- Image: https://img.castlecore.uk/segontium-roman-fort.jpg

**Castle B:** Segedunum Roman Fort  
- Location: 54.99, -1.5317
- Country/County: England, Tyne and Wear
- Type: castle
- Image: https://img.castlecore.uk/segedunum-roman-fort.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 273.229km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 857. KEEP-BOTH (Confidence: 50%)

**Castle A:** Holt Castle
- Location: 53.0667, -2.8667
- Country/County: Wales, Wrexham
- Type: castle
- Image: https://img.castlecore.uk/holt-castle.jpg

**Castle B:** Oola Castle  
- Location: 52.489, -8.293
- Country/County: Ireland, County Limerick
- Type: tower house
- Image: https://img.castlecore.uk/oola-castle.jpg

**Metrics:**
- Name similarity: 81.8%
- Distance: 370.502km
- Same image: No

**Reasons:** High name similarity (81.8%)

**Recommendation:** **KEEP-BOTH**

---

### 858. KEEP-BOTH (Confidence: 50%)

**Castle A:** Aboyne Castle
- Location: 57.0764, -2.7836
- Country/County: Scotland, Aberdeenshire
- Type: castle
- Image: https://img.castlecore.uk/aboyne-castle.jpg

**Castle B:** Boyne Castle  
- Location: 57.6833, -2.7333
- Country/County: Scotland, Aberdeenshire
- Type: castle
- Image: https://img.castlecore.uk/boyne-castle-3.jpg

**Metrics:**
- Name similarity: 92.3%
- Distance: 67.552km
- Same image: No

**Reasons:** High name similarity (92.3%)

**Recommendation:** **KEEP-BOTH**

---

### 859. KEEP-BOTH (Confidence: 50%)

**Castle A:** Balfluig Castle
- Location: 57.2, -2.7333
- Country/County: Scotland, Aberdeenshire
- Type: castle
- Image: https://img.castlecore.uk/balfluig-castle.jpg

**Castle B:** Balfour Castle  
- Location: 59.0833, -2.8333
- Country/County: Scotland, Orkney
- Type: castle
- Image: https://img.castlecore.uk/balfour-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 209.496km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 860. KEEP-BOTH (Confidence: 50%)

**Castle A:** Ballindalloch Castle
- Location: 57.3419, -3.3625
- Country/County: Scotland, Moray
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Ballindaloch_Castle.jpg/500px-Ballindaloch_Castle.jpg

**Castle B:** Ballynaclogh Castle  
- Location: 52.735, -8.183
- Country/County: Ireland, County Tipperary
- Type: tower house
- Image: https://img.castlecore.uk/ballynaclogh-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 596.955km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 861. KEEP-BOTH (Confidence: 50%)

**Castle A:** Castle Leod
- Location: 57.6833, -4.5667
- Country/County: Scotland, Highland
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Castle_Leod_%28geograph_4176882%29.jpg/500px-Castle_Leod_%28geograph_4176882%29.jpg

**Castle B:** Red Castle  
- Location: 56.7, -2.5833
- Country/County: Scotland, Angus
- Type: castle
- Image: https://img.castlecore.uk/red-castle.jpg

**Metrics:**
- Name similarity: 81.8%
- Distance: 161.959km
- Same image: No

**Reasons:** High name similarity (81.8%)

**Recommendation:** **KEEP-BOTH**

---

### 862. KEEP-BOTH (Confidence: 50%)

**Castle A:** Red Castle
- Location: 56.7, -2.5833
- Country/County: Scotland, Angus
- Type: castle
- Image: https://img.castlecore.uk/red-castle.jpg

**Castle B:** Castle Roy  
- Location: 57.2667, -3.6
- Country/County: Scotland, Highland
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Castle_Roy_-_geograph.org.uk_-_2069401.jpg/500px-Castle_Roy_-_geograph.org.uk_-_2069401.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 88.119km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 863. KEEP-BOTH (Confidence: 50%)

**Castle A:** Red Castle
- Location: 56.7, -2.5833
- Country/County: Scotland, Angus
- Type: castle
- Image: https://img.castlecore.uk/red-castle.jpg

**Castle B:** Redcastle  
- Location: 57.5833, -4.35
- Country/County: Scotland, Highland
- Type: castle
- Image: https://img.castlecore.uk/redcastle.jpg

**Metrics:**
- Name similarity: 90.0%
- Distance: 144.931km
- Same image: No

**Reasons:** High name similarity (90.0%)

**Recommendation:** **KEEP-BOTH**

---

### 864. KEEP-BOTH (Confidence: 50%)

**Castle A:** Kinloss Abbey
- Location: 57.6333, -3.5667
- Country/County: Scotland, Moray
- Type: abbey
- Image: https://img.castlecore.uk/kinloss-abbey.jpg

**Castle B:** Kinross House  
- Location: 56.2028, -3.4264
- Country/County: Scotland, Perth and Kinross
- Type: castle
- Image: https://img.castlecore.uk/kinross-house.jpg

**Metrics:**
- Name similarity: 85.7%
- Distance: 159.292km
- Same image: No

**Reasons:** High name similarity (85.7%)

**Recommendation:** **KEEP-BOTH**

---

### 865. KEEP-BOTH (Confidence: 50%)

**Castle A:** Castle Roy
- Location: 57.2667, -3.6
- Country/County: Scotland, Highland
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Castle_Roy_-_geograph.org.uk_-_2069401.jpg/500px-Castle_Roy_-_geograph.org.uk_-_2069401.jpg

**Castle B:** Tor Castle  
- Location: 56.8667, -5.0833
- Country/County: Scotland, Highland
- Type: castle
- Image: https://img.castlecore.uk/tor-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 100.091km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 866. KEEP-BOTH (Confidence: 50%)

**Castle A:** Castle Roy
- Location: 57.2667, -3.6
- Country/County: Scotland, Highland
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Castle_Roy_-_geograph.org.uk_-_2069401.jpg/500px-Castle_Roy_-_geograph.org.uk_-_2069401.jpg

**Castle B:** Any Castle  
- Location: 52.365, -8.258
- Country/County: Ireland, County Tipperary
- Type: castle
- Image: https://img.castlecore.uk/any-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 621.069km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 867. KEEP-BOTH (Confidence: 50%)

**Castle A:** Borve Castle
- Location: 58.1167, -5
- Country/County: Scotland, Highland
- Type: castle
- Image: https://img.castlecore.uk/borve-castle.jpg

**Castle B:** Boyne Castle  
- Location: 57.6833, -2.7333
- Country/County: Scotland, Aberdeenshire
- Type: castle
- Image: https://img.castlecore.uk/boyne-castle-3.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 142.334km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 868. KEEP-BOTH (Confidence: 50%)

**Castle A:** Tor Castle
- Location: 56.8667, -5.0833
- Country/County: Scotland, Highland
- Type: castle
- Image: https://img.castlecore.uk/tor-castle.jpg

**Castle B:** Ayr Castle  
- Location: 55.4667, -4.6333
- Country/County: Scotland, South Ayrshire
- Type: castle
- Image: https://img.castlecore.uk/ayr-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 158.145km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 869. KEEP-BOTH (Confidence: 50%)

**Castle A:** Castle Craig
- Location: 55.7, -3.2667
- Country/County: Scotland, Scottish Borders
- Type: castle
- Image: https://img.castlecore.uk/castle-craig.jpg

**Castle B:** Cregg Castle  
- Location: 53.367, -8.85
- Country/County: Ireland, County Galway
- Type: castle
- Image: https://img.castlecore.uk/cregg-castle.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 443.698km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 870. KEEP-BOTH (Confidence: 50%)

**Castle A:** Balfour Castle
- Location: 59.0833, -2.8333
- Country/County: Scotland, Orkney
- Type: castle
- Image: https://img.castlecore.uk/balfour-castle.jpg

**Castle B:** Ballybur Castle  
- Location: 52.676, -7.35
- Country/County: Ireland, County Kilkenny
- Type: tower house
- Image: https://img.castlecore.uk/ballybur-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 765.710km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 871. KEEP-BOTH (Confidence: 50%)

**Castle A:** Kilravock Castle
- Location: 57.5167, -4.0667
- Country/County: Scotland, Highland
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Scotland_Kilravock_Castle.jpg/500px-Scotland_Kilravock_Castle.jpg

**Castle B:** Kilmallock Castle  
- Location: 52.399, -8.575
- Country/County: Ireland, County Limerick
- Type: castle
- Image: https://img.castlecore.uk/kilmallock-castle.jpg

**Metrics:**
- Name similarity: 82.4%
- Distance: 637.386km
- Same image: No

**Reasons:** High name similarity (82.4%)

**Recommendation:** **KEEP-BOTH**

---

### 872. KEEP-BOTH (Confidence: 50%)

**Castle A:** Croom Castle
- Location: 52.519, -8.718
- Country/County: Ireland, County Limerick
- Type: castle
- Image: https://img.castlecore.uk/croom-castle.jpg

**Castle B:** Croft Castle  
- Location: 52.3033, -2.805
- Country/County: England, Herefordshire
- Type: castle
- Image: https://img.castlecore.uk/croft-castle.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 401.670km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 873. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dungarvan Castle
- Location: 52.089, -7.619
- Country/County: Ireland, County Waterford
- Type: castle
- Image: https://img.castlecore.uk/dungarvan-castle.jpg

**Castle B:** Dunmoran Castle  
- Location: 54.235, -8.62
- Country/County: Ireland, County Sligo
- Type: tower house
- Image: https://img.castlecore.uk/dunmoran-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 247.773km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 874. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dungarvan Castle
- Location: 52.089, -7.619
- Country/County: Ireland, County Waterford
- Type: castle
- Image: https://img.castlecore.uk/dungarvan-castle.jpg

**Castle B:** Dunlavin Castle  
- Location: 53.057, -6.701
- Country/County: Ireland, County Wicklow
- Type: castle
- Image: https://img.castlecore.uk/dunlavin-castle.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 124.232km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 875. KEEP-BOTH (Confidence: 50%)

**Castle A:** Clonegal Castle
- Location: 52.676, -6.658
- Country/County: Ireland, County Carlow
- Type: tower house
- Image: https://img.castlecore.uk/clonegal-castle.jpg

**Castle B:** Clonroad Castle  
- Location: 52.847, -8.98
- Country/County: Ireland, County Clare
- Type: castle
- Image: https://img.castlecore.uk/clonroad-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 157.388km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 876. KEEP-BOTH (Confidence: 50%)

**Castle A:** Athy Castle
- Location: 52.991, -6.977
- Country/County: Ireland, County Kildare
- Type: tower house
- Image: https://img.castlecore.uk/athy-castle.jpg

**Castle B:** Any Castle  
- Location: 52.365, -8.258
- Country/County: Ireland, County Tipperary
- Type: castle
- Image: https://img.castlecore.uk/any-castle.jpg

**Metrics:**
- Name similarity: 81.8%
- Distance: 110.918km
- Same image: No

**Reasons:** High name similarity (81.8%)

**Recommendation:** **KEEP-BOTH**

---

### 877. KEEP-BOTH (Confidence: 50%)

**Castle A:** Longford Castle
- Location: 53.726, -7.798
- Country/County: Ireland, County Longford
- Type: castle
- Image: https://img.castlecore.uk/longford-castle.jpg

**Castle B:** Gosford Castle  
- Location: 54.288, -6.595
- Country/County: Ireland, County Armagh
- Type: castle
- Image: https://img.castlecore.uk/gosford-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 100.423km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 878. KEEP-BOTH (Confidence: 50%)

**Castle A:** Clones Round Tower
- Location: 54.18, -7.229
- Country/County: Ireland, County Monaghan
- Type: abbey
- Image: https://img.castlecore.uk/clones-round-tower.jpg

**Castle B:** Cloone Round Tower  
- Location: 53.9, -7.85
- Country/County: Ireland, County Leitrim
- Type: abbey
- Image: https://img.castlecore.uk/cloone-round-tower.jpg

**Metrics:**
- Name similarity: 88.9%
- Distance: 51.123km
- Same image: No

**Reasons:** High name similarity (88.9%)

**Recommendation:** **KEEP-BOTH**

---

### 879. KEEP-BOTH (Confidence: 50%)

**Castle A:** Ballycurrin Castle
- Location: 53.458, -9.155
- Country/County: Ireland, County Galway
- Type: tower house
- Image: https://img.castlecore.uk/ballycurrin-castle.jpg

**Castle B:** Ballycullen Castle  
- Location: 52.567, -8.28
- Country/County: Ireland, County Tipperary
- Type: tower house
- Image: https://img.castlecore.uk/ballycullen-castle.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 115.073km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 880. KEEP-BOTH (Confidence: 50%)

**Castle A:** Gortmore Castle
- Location: 53.39, -8.64
- Country/County: Ireland, County Galway
- Type: tower house
- Image: https://img.castlecore.uk/gortmore-castle.jpg

**Castle B:** Bremore Castle  
- Location: 53.588, -6.181
- Country/County: Ireland, County Dublin
- Type: castle
- Image: https://img.castlecore.uk/bremore-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 164.158km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 881. KEEP-BOTH (Confidence: 50%)

**Castle A:** Navan Castle
- Location: 53.653, -6.682
- Country/County: Ireland, County Meath
- Type: castle
- Image: https://img.castlecore.uk/navan-castle.jpg

**Castle B:** Castle Levan  
- Location: 55.9333, -4.8
- Country/County: Scotland, Inverclyde
- Type: castle
- Image: https://img.castlecore.uk/castle-levan.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 280.773km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 882. KEEP-BOTH (Confidence: 50%)

**Castle A:** Castle Durrow
- Location: 52.835, -7.393
- Country/County: Ireland, County Laois
- Type: castle
- Image: https://img.castlecore.uk/castle-durrow.jpg

**Castle B:** Durris Castle  
- Location: 57.0167, -2.45
- Country/County: Scotland, Aberdeenshire
- Type: castle
- Image: https://img.castlecore.uk/durris-castle.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 561.792km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 883. KEEP-BOTH (Confidence: 50%)

**Castle A:** Ely Cathedral
- Location: 52.3986, 0.2633
- Country/County: England, Cambridgeshire
- Type: abbey
- Image: https://img.castlecore.uk/ely-cathedral.jpg

**Castle B:** Wells Cathedral  
- Location: 51.2117, -2.645
- Country/County: England, Somerset
- Type: abbey
- Image: https://img.castlecore.uk/wells-cathedral.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 239.561km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 884. KEEP-BOTH (Confidence: 50%)

**Castle A:** Roche Abbey
- Location: 53.445, -1.2083
- Country/County: England, Yorkshire
- Type: abbey
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Roche_Abbey_%28211961681%29.jpeg/500px-Roche_Abbey_%28211961681%29.jpeg

**Castle B:** Rothe House  
- Location: 52.653, -7.252
- Country/County: Ireland, County Kilkenny
- Type: tower house
- Image: https://img.castlecore.uk/rothe-house.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 413.329km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 885. KEEP-BOTH (Confidence: 50%)

**Castle A:** Gloucester Cathedral
- Location: 51.8678, -2.2464
- Country/County: England, Gloucestershire
- Type: abbey
- Image: https://img.castlecore.uk/gloucester-cathedral.jpg

**Castle B:** Worcester Cathedral  
- Location: 52.1897, -2.2219
- Country/County: England, Worcestershire
- Type: abbey
- Image: https://img.castlecore.uk/worcester-cathedral.jpg

**Metrics:**
- Name similarity: 85.0%
- Distance: 35.833km
- Same image: No

**Reasons:** High name similarity (85.0%)

**Recommendation:** **KEEP-BOTH**

---

### 886. KEEP-BOTH (Confidence: 50%)

**Castle A:** Calder Abbey
- Location: 54.4367, -3.4533
- Country/County: England, Cumbria
- Type: abbey
- Image: https://img.castlecore.uk/calder-abbey.jpg

**Castle B:** Calke Abbey  
- Location: 52.805, -1.4567
- Country/County: England, Derbyshire
- Type: abbey
- Image: https://img.castlecore.uk/calke-abbey.jpg

**Metrics:**
- Name similarity: 83.3%
- Distance: 224.166km
- Same image: No

**Reasons:** High name similarity (83.3%)

**Recommendation:** **KEEP-BOTH**

---

### 887. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dale Abbey
- Location: 52.9133, -1.3417
- Country/County: England, Derbyshire
- Type: abbey
- Image: https://img.castlecore.uk/dale-abbey.jpg

**Castle B:** Calke Abbey  
- Location: 52.805, -1.4567
- Country/County: England, Derbyshire
- Type: abbey
- Image: https://img.castlecore.uk/calke-abbey.jpg

**Metrics:**
- Name similarity: 81.8%
- Distance: 14.305km
- Same image: No

**Reasons:** High name similarity (81.8%)

**Recommendation:** **KEEP-BOTH**

---

### 888. KEEP-BOTH (Confidence: 50%)

**Castle A:** Dale Abbey
- Location: 52.9133, -1.3417
- Country/County: England, Derbyshire
- Type: abbey
- Image: https://img.castlecore.uk/dale-abbey.jpg

**Castle B:** Abbey Dore  
- Location: 51.9467, -2.9167
- Country/County: England, Herefordshire
- Type: abbey
- Image: https://img.castlecore.uk/abbey-dore.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 151.502km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 889. KEEP-BOTH (Confidence: 50%)

**Castle A:** Abingdon Abbey
- Location: 51.6706, -1.2781
- Country/County: England, Oxfordshire
- Type: abbey
- Image: https://img.castlecore.uk/abingdon-abbey.jpg

**Castle B:** Abington Castle  
- Location: 52.607, -8.379
- Country/County: Ireland, County Limerick
- Type: castle
- Image: https://img.castlecore.uk/abington-castle.jpg

**Metrics:**
- Name similarity: 87.5%
- Distance: 495.447km
- Same image: No

**Reasons:** High name similarity (87.5%)

**Recommendation:** **KEEP-BOTH**

---

### 890. KEEP-BOTH (Confidence: 50%)

**Castle A:** Chesters Roman Fort
- Location: 55.0283, -2.135
- Country/County: England, Northumberland
- Type: castle
- Image: https://img.castlecore.uk/chesters-roman-fort.jpg

**Castle B:** Binchester Roman Fort  
- Location: 54.67, -1.6833
- Country/County: England, County Durham
- Type: castle
- Image: https://img.castlecore.uk/binchester-roman-fort.jpg

**Metrics:**
- Name similarity: 81.0%
- Distance: 49.229km
- Same image: No

**Reasons:** High name similarity (81.0%)

**Recommendation:** **KEEP-BOTH**

---

### 891. KEEP-BOTH (Confidence: 50%)

**Castle A:** Chesters Roman Fort
- Location: 55.0283, -2.135
- Country/County: England, Northumberland
- Type: castle
- Image: https://img.castlecore.uk/chesters-roman-fort.jpg

**Castle B:** Ribchester Roman Fort  
- Location: 53.8167, -2.525
- Country/County: England, Lancashire
- Type: castle
- Image: https://img.castlecore.uk/ribchester-roman-fort.jpg

**Metrics:**
- Name similarity: 81.0%
- Distance: 137.065km
- Same image: No

**Reasons:** High name similarity (81.0%)

**Recommendation:** **KEEP-BOTH**

---

### 892. KEEP-BOTH (Confidence: 50%)

**Castle A:** Mannington Hall
- Location: 52.8333, 1.1467
- Country/County: England, Norfolk
- Type: castle
- Image: https://img.castlecore.uk/mannington-hall.jpg

**Castle B:** Nunnington Hall  
- Location: 54.1933, -0.9917
- Country/County: England, Yorkshire
- Type: castle
- Image: https://img.castlecore.uk/nunnington-hall.jpg

**Metrics:**
- Name similarity: 86.7%
- Distance: 207.010km
- Same image: No

**Reasons:** High name similarity (86.7%)

**Recommendation:** **KEEP-BOTH**

---

### 893. KEEP-BOTH (Confidence: 50%)

**Castle A:** Mannington Hall
- Location: 52.8333, 1.1467
- Country/County: England, Norfolk
- Type: castle
- Image: https://img.castlecore.uk/mannington-hall.jpg

**Castle B:** Wallington Hall  
- Location: 55.1517, -1.9483
- Country/County: England, Northumberland
- Type: castle
- Image: https://img.castlecore.uk/wallington-hall.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 327.640km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 894. KEEP-BOTH (Confidence: 50%)

**Castle A:** Mannington Hall
- Location: 52.8333, 1.1467
- Country/County: England, Norfolk
- Type: castle
- Image: https://img.castlecore.uk/mannington-hall.jpg

**Castle B:** Harvington Hall  
- Location: 52.3817, -2.1017
- Country/County: England, Worcestershire
- Type: castle
- Image: https://img.castlecore.uk/harvington-hall.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 225.003km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 895. KEEP-BOTH (Confidence: 50%)

**Castle A:** Brancaster Roman Fort
- Location: 52.9683, 0.6283
- Country/County: England, Norfolk
- Type: castle
- Image: https://img.castlecore.uk/brancaster-roman-fort.jpg

**Castle B:** Binchester Roman Fort  
- Location: 54.67, -1.6833
- Country/County: England, County Durham
- Type: castle
- Image: https://img.castlecore.uk/binchester-roman-fort.jpg

**Metrics:**
- Name similarity: 81.0%
- Distance: 242.520km
- Same image: No

**Reasons:** High name similarity (81.0%)

**Recommendation:** **KEEP-BOTH**

---

### 896. KEEP-BOTH (Confidence: 50%)

**Castle A:** Ayr Castle
- Location: 55.4667, -4.6333
- Country/County: Scotland, South Ayrshire
- Type: castle
- Image: https://img.castlecore.uk/ayr-castle.jpg

**Castle B:** Any Castle  
- Location: 52.365, -8.258
- Country/County: Ireland, County Tipperary
- Type: castle
- Image: https://img.castlecore.uk/any-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 418.568km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 897. KEEP-BOTH (Confidence: 50%)

**Castle A:** Deskford Church
- Location: 57.6333, -2.8167
- Country/County: Scotland, Moray
- Type: abbey
- Image: https://img.castlecore.uk/deskford-church.jpg

**Castle B:** Freshford Church  
- Location: 52.639, -7.402
- Country/County: Ireland, County Kilkenny
- Type: abbey
- Image: https://img.castlecore.uk/freshford-church.jpg

**Metrics:**
- Name similarity: 81.3%
- Distance: 626.842km
- Same image: No

**Reasons:** High name similarity (81.3%)

**Recommendation:** **KEEP-BOTH**

---

### 898. KEEP-BOTH (Confidence: 50%)

**Castle A:** Lennox Castle
- Location: 55.9833, -4.2333
- Country/County: Scotland, East Dunbartonshire
- Type: castle
- Image: https://img.castlecore.uk/lennox-castle.jpg

**Castle B:** Fennor Castle  
- Location: 52.584, -7.973
- Country/County: Ireland, County Tipperary
- Type: tower house
- Image: https://img.castlecore.uk/fennor-castle.jpg

**Metrics:**
- Name similarity: 84.6%
- Distance: 449.077km
- Same image: No

**Reasons:** High name similarity (84.6%)

**Recommendation:** **KEEP-BOTH**

---

### 899. KEEP-BOTH (Confidence: 50%)

**Castle A:** Castleconnell Castle
- Location: 52.712, -8.508
- Country/County: Ireland, County Limerick
- Type: castle
- Image: https://img.castlecore.uk/castleconnell-castle.jpg

**Castle B:** Castlecaldwell Castle  
- Location: 54.49, -7.875
- Country/County: Ireland, County Fermanagh
- Type: castle
- Image: https://img.castlecore.uk/castlecaldwell-castle.jpg

**Metrics:**
- Name similarity: 81.0%
- Distance: 202.066km
- Same image: No

**Reasons:** High name similarity (81.0%)

**Recommendation:** **KEEP-BOTH**

---

### 900. KEEP-BOTH (Confidence: 50%)

**Castle A:** Castleconnell Castle
- Location: 52.712, -8.508
- Country/County: Ireland, County Limerick
- Type: castle
- Image: https://img.castlecore.uk/castleconnell-castle.jpg

**Castle B:** Castlecove Castle  
- Location: 51.767, -10.022
- Country/County: Ireland, County Kerry
- Type: tower house
- Image: https://img.castlecore.uk/castlecove-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 147.199km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 901. KEEP-BOTH (Confidence: 50%)

**Castle A:** Castleconnell Castle
- Location: 52.712, -8.508
- Country/County: Ireland, County Limerick
- Type: castle
- Image: https://img.castlecore.uk/castleconnell-castle.jpg

**Castle B:** Castlecomer Castle  
- Location: 52.806, -7.211
- Country/County: Ireland, County Kilkenny
- Type: castle
- Image: https://img.castlecore.uk/castlecomer-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 87.900km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 902. KEEP-BOTH (Confidence: 50%)

**Castle A:** Lough Hyne Tower
- Location: 51.501, -9.301
- Country/County: Ireland, County Cork
- Type: tower house
- Image: https://img.castlecore.uk/lough-hyne-tower.jpg

**Castle B:** Lough Rynn Castle  
- Location: 53.966, -7.87
- Country/County: Ireland, County Leitrim
- Type: castle
- Image: https://img.castlecore.uk/lough-rynn-castle.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 290.521km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 903. KEEP-BOTH (Confidence: 50%)

**Castle A:** Lough Rynn Castle
- Location: 53.966, -7.87
- Country/County: Ireland, County Leitrim
- Type: castle
- Image: https://img.castlecore.uk/lough-rynn-castle.jpg

**Castle B:** Lough Ree Castle  
- Location: 53.539, -7.959
- Country/County: Ireland, County Westmeath
- Type: castle
- Image: https://img.castlecore.uk/lough-ree-castle.jpg

**Metrics:**
- Name similarity: 82.4%
- Distance: 47.839km
- Same image: No

**Reasons:** High name similarity (82.4%)

**Recommendation:** **KEEP-BOTH**

---

### 904. KEEP-BOTH (Confidence: 50%)

**Castle A:** Binchester Roman Fort
- Location: 54.67, -1.6833
- Country/County: England, County Durham
- Type: castle
- Image: https://img.castlecore.uk/binchester-roman-fort.jpg

**Castle B:** Ribchester Roman Fort  
- Location: 53.8167, -2.525
- Country/County: England, Lancashire
- Type: castle
- Image: https://img.castlecore.uk/ribchester-roman-fort.jpg

**Metrics:**
- Name similarity: 90.5%
- Distance: 109.514km
- Same image: No

**Reasons:** High name similarity (90.5%)

**Recommendation:** **KEEP-BOTH**

---

### 905. KEEP-BOTH (Confidence: 50%)

**Castle A:** Wallington Hall
- Location: 55.1517, -1.9483
- Country/County: England, Northumberland
- Type: castle
- Image: https://img.castlecore.uk/wallington-hall.jpg

**Castle B:** Harvington Hall  
- Location: 52.3817, -2.1017
- Country/County: England, Worcestershire
- Type: castle
- Image: https://img.castlecore.uk/harvington-hall.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 308.175km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 906. KEEP-BOTH (Confidence: 50%)

**Castle A:** Harvington Hall
- Location: 52.3817, -2.1017
- Country/County: England, Worcestershire
- Type: castle
- Image: https://img.castlecore.uk/harvington-hall.jpg

**Castle B:** Berrington Hall  
- Location: 52.2717, -2.7417
- Country/County: England, Herefordshire
- Type: castle
- Image: https://img.castlecore.uk/berrington-hall.jpg

**Metrics:**
- Name similarity: 80.0%
- Distance: 45.180km
- Same image: No

**Reasons:** High name similarity (80.0%)

**Recommendation:** **KEEP-BOTH**

---

### 907. KEEP-BOTH (Confidence: 50%)

**Castle A:** Abbey Dore
- Location: 51.9467, -2.9167
- Country/County: England, Herefordshire
- Type: abbey
- Image: https://img.castlecore.uk/abbey-dore.jpg

**Castle B:** Torre Abbey  
- Location: 50.4633, -3.55
- Country/County: England, Devon
- Type: abbey
- Image: https://img.castlecore.uk/torre-abbey.jpg

**Metrics:**
- Name similarity: 81.8%
- Distance: 170.744km
- Same image: No

**Reasons:** High name similarity (81.8%)

**Recommendation:** **KEEP-BOTH**

---

### 908. KEEP-BOTH (Confidence: 50%)

**Castle A:** Castlecove Castle
- Location: 51.767, -10.022
- Country/County: Ireland, County Kerry
- Type: tower house
- Image: https://img.castlecore.uk/castlecove-castle.jpg

**Castle B:** Castlecomer Castle  
- Location: 52.806, -7.211
- Country/County: Ireland, County Kilkenny
- Type: castle
- Image: https://img.castlecore.uk/castlecomer-castle.jpg

**Metrics:**
- Name similarity: 88.9%
- Distance: 223.373km
- Same image: No

**Reasons:** High name similarity (88.9%)

**Recommendation:** **KEEP-BOTH**

---

### 909. KEEP-BOTH (Confidence: 45%)

**Castle A:** Ravenscraig Castle
- Location: 56.1184, -3.1382
- Country/County: Scotland, Fife
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/View_of_Antrim_Castle_from_the_river_%2813733537463%29.jpg/500px-View_of_Antrim_Castle_from_the_river_%2813733537463%29.jpg

**Castle B:** Inch Abbey  
- Location: 54.3333, -5.7333
- Country/County: Northern Ireland, County Down
- Type: abbey
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/View_of_Antrim_Castle_from_the_river_%2813733537463%29.jpg/500px-View_of_Antrim_Castle_from_the_river_%2813733537463%29.jpg

**Metrics:**
- Name similarity: 22.2%
- Distance: 257.813km
- Same image: Yes

**Reasons:** Identical image URL

**Recommendation:** **KEEP-BOTH**

---

### 910. KEEP-BOTH (Confidence: 45%)

**Castle A:** Ravenscraig Castle
- Location: 56.1184, -3.1382
- Country/County: Scotland, Fife
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/View_of_Antrim_Castle_from_the_river_%2813733537463%29.jpg/500px-View_of_Antrim_Castle_from_the_river_%2813733537463%29.jpg

**Castle B:** Antrim Castle Gardens  
- Location: 54.7167, -6.2167
- Country/County: Northern Ireland, County Antrim
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/View_of_Antrim_Castle_from_the_river_%2813733537463%29.jpg/500px-View_of_Antrim_Castle_from_the_river_%2813733537463%29.jpg

**Metrics:**
- Name similarity: 33.3%
- Distance: 249.045km
- Same image: Yes

**Reasons:** Identical image URL

**Recommendation:** **KEEP-BOTH**

---

### 911. KEEP-BOTH (Confidence: 45%)

**Castle A:** Aberdour Castle
- Location: 56.0546, -3.3004
- Country/County: Scotland, Fife
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Carrick_Castle_tower_from_west.jpg/500px-Carrick_Castle_tower_from_west.jpg

**Castle B:** Carrick Castle  
- Location: 54.45, -6.7833
- Country/County: Northern Ireland, County Armagh
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Carrick_Castle_tower_from_west.jpg/500px-Carrick_Castle_tower_from_west.jpg

**Metrics:**
- Name similarity: 53.3%
- Distance: 283.771km
- Same image: Yes

**Reasons:** Identical image URL

**Recommendation:** **KEEP-BOTH**

---

### 912. KEEP-BOTH (Confidence: 45%)

**Castle A:** Dunblane Cathedral
- Location: 56.188, -3.9658
- Country/County: Scotland, Stirling
- Type: abbey
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Moyry_Castle_1.jpg/500px-Moyry_Castle_1.jpg

**Castle B:** Jordan's Castle  
- Location: 54.1833, -5.85
- Country/County: Northern Ireland, County Down
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Moyry_Castle_1.jpg/500px-Moyry_Castle_1.jpg

**Metrics:**
- Name similarity: 33.3%
- Distance: 252.955km
- Same image: Yes

**Reasons:** Identical image URL

**Recommendation:** **KEEP-BOTH**

---

### 913. KEEP-BOTH (Confidence: 45%)

**Castle A:** Dunblane Cathedral
- Location: 56.188, -3.9658
- Country/County: Scotland, Stirling
- Type: abbey
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Moyry_Castle_1.jpg/500px-Moyry_Castle_1.jpg

**Castle B:** Moyry Castle  
- Location: 54.0667, -6.35
- Country/County: Northern Ireland, County Armagh
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Moyry_Castle_1.jpg/500px-Moyry_Castle_1.jpg

**Metrics:**
- Name similarity: 22.2%
- Distance: 280.345km
- Same image: Yes

**Reasons:** Identical image URL

**Recommendation:** **KEEP-BOTH**

---

### 914. KEEP-BOTH (Confidence: 45%)

**Castle A:** Dunsany Castle
- Location: 53.5556, -6.6556
- Country/County: Ireland, County Meath
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Clogh_Oughter_Castle_Cavan_Ireland_geograph_1405851_by_Oliver_Dixon.jpg/500px-Clogh_Oughter_Castle_Cavan_Ireland_geograph_1405851_by_Oliver_Dixon.jpg

**Castle B:** Cloughoughter Castle  
- Location: 54.0187, -7.4548
- Country/County: Ireland, County Cavan
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Clogh_Oughter_Castle_Cavan_Ireland_geograph_1405851_by_Oliver_Dixon.jpg/500px-Clogh_Oughter_Castle_Cavan_Ireland_geograph_1405851_by_Oliver_Dixon.jpg

**Metrics:**
- Name similarity: 40.0%
- Distance: 73.539km
- Same image: Yes

**Reasons:** Identical image URL

**Recommendation:** **KEEP-BOTH**

---

### 915. KEEP-BOTH (Confidence: 45%)

**Castle A:** Parke's Castle
- Location: 54.2592, -8.2875
- Country/County: Ireland, County Leitrim
- Type: fortified house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Clough_%2811%29%2C_October_2009.JPG/500px-Clough_%2811%29%2C_October_2009.JPG

**Castle B:** Clough Castle  
- Location: 54.2833, -5.8833
- Country/County: Northern Ireland, County Down
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Clough_%2811%29%2C_October_2009.JPG/500px-Clough_%2811%29%2C_October_2009.JPG

**Metrics:**
- Name similarity: 50.0%
- Distance: 156.125km
- Same image: Yes

**Reasons:** Identical image URL

**Recommendation:** **KEEP-BOTH**

---

### 916. KEEP-BOTH (Confidence: 45%)

**Castle A:** Roscommon Castle
- Location: 53.6292, -8.1886
- Country/County: Ireland, County Roscommon
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ruins_of_Olderfleet_Castle%2C_Larne.jpg/500px-Ruins_of_Olderfleet_Castle%2C_Larne.jpg

**Castle B:** Olderfleet Castle  
- Location: 54.8531, -5.7989
- Country/County: Northern Ireland, County Antrim
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ruins_of_Olderfleet_Castle%2C_Larne.jpg/500px-Ruins_of_Olderfleet_Castle%2C_Larne.jpg

**Metrics:**
- Name similarity: 41.2%
- Distance: 206.458km
- Same image: Yes

**Reasons:** Identical image URL

**Recommendation:** **KEEP-BOTH**

---

### 917. KEEP-BOTH (Confidence: 45%)

**Castle A:** Ballintober Castle
- Location: 53.7167, -8.3167
- Country/County: Ireland, County Roscommon
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Shane%27s_Castle%2C_County_Antrim_-_geograph.org.uk_-_155426.jpg/500px-Shane%27s_Castle%2C_County_Antrim_-_geograph.org.uk_-_155426.jpg

**Castle B:** Shane's Castle  
- Location: 54.7167, -6.3167
- Country/County: Northern Ireland, County Antrim
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Shane%27s_Castle%2C_County_Antrim_-_geograph.org.uk_-_155426.jpg/500px-Shane%27s_Castle%2C_County_Antrim_-_geograph.org.uk_-_155426.jpg

**Metrics:**
- Name similarity: 50.0%
- Distance: 171.084km
- Same image: Yes

**Reasons:** Identical image URL

**Recommendation:** **KEEP-BOTH**

---

### 918. KEEP-BOTH (Confidence: 45%)

**Castle A:** Fore Abbey
- Location: 53.6167, -7.2167
- Country/County: Ireland, County Westmeath
- Type: abbey
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/The_ruins_of_Red_Bay_Castle_-_geograph.org.uk_-_3727864.jpg/500px-The_ruins_of_Red_Bay_Castle_-_geograph.org.uk_-_3727864.jpg

**Castle B:** Red Bay Castle  
- Location: 55.0667, -6.05
- Country/County: Northern Ireland, County Antrim
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/The_ruins_of_Red_Bay_Castle_-_geograph.org.uk_-_3727864.jpg/500px-The_ruins_of_Red_Bay_Castle_-_geograph.org.uk_-_3727864.jpg

**Metrics:**
- Name similarity: 40.0%
- Distance: 178.082km
- Same image: Yes

**Reasons:** Identical image URL

**Recommendation:** **KEEP-BOTH**

---

### 919. KEEP-BOTH (Confidence: 45%)

**Castle A:** Athlone Castle
- Location: 53.4233, -7.9444
- Country/County: Ireland, County Westmeath
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/BonamargyFriary.JPG/500px-BonamargyFriary.JPG

**Castle B:** Bonamargy Friary  
- Location: 55.2, -6.2417
- Country/County: Northern Ireland, County Antrim
- Type: abbey
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/BonamargyFriary.JPG/500px-BonamargyFriary.JPG

**Metrics:**
- Name similarity: 18.8%
- Distance: 226.323km
- Same image: Yes

**Reasons:** Identical image URL

**Recommendation:** **KEEP-BOTH**

---

### 920. KEEP-BOTH (Confidence: 45%)

**Castle A:** Roche Castle
- Location: 54.0278, -6.4306
- Country/County: Ireland, County Louth
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Benburb-Castle-1.jpg/500px-Benburb-Castle-1.jpg

**Castle B:** Benburb Castle  
- Location: 54.4, -6.8833
- Country/County: Northern Ireland, County Tyrone
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Benburb-Castle-1.jpg/500px-Benburb-Castle-1.jpg

**Metrics:**
- Name similarity: 50.0%
- Distance: 50.787km
- Same image: Yes

**Reasons:** Identical image URL

**Recommendation:** **KEEP-BOTH**

---

### 921. KEEP-BOTH (Confidence: 45%)

**Castle A:** Killyleagh Castle
- Location: 54.3964, -5.6531
- Country/County: Northern Ireland, County Down
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Tully_Castle%2C_County_Fermanagh_-_geograph.org.uk_-_204216.jpg/500px-Tully_Castle%2C_County_Fermanagh_-_geograph.org.uk_-_204216.jpg

**Castle B:** Tully Castle  
- Location: 54.4333, -7.7333
- Country/County: Northern Ireland, County Fermanagh
- Type: fortified house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Tully_Castle%2C_County_Fermanagh_-_geograph.org.uk_-_204216.jpg/500px-Tully_Castle%2C_County_Fermanagh_-_geograph.org.uk_-_204216.jpg

**Metrics:**
- Name similarity: 58.8%
- Distance: 134.658km
- Same image: Yes

**Reasons:** Identical image URL

**Recommendation:** **KEEP-BOTH**

---

### 922. KEEP-BOTH (Confidence: 45%)

**Castle A:** Greencastle Royal Castle
- Location: 54.0744, -6.1289
- Country/County: Northern Ireland, County Down
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Maghera_Church_-_geograph.org.uk_-_222328.jpg/500px-Maghera_Church_-_geograph.org.uk_-_222328.jpg

**Castle B:** Maghera Old Church  
- Location: 54.85, -6.6667
- Country/County: Northern Ireland, County Londonderry
- Type: abbey
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Maghera_Church_-_geograph.org.uk_-_222328.jpg/500px-Maghera_Church_-_geograph.org.uk_-_222328.jpg

**Metrics:**
- Name similarity: 25.0%
- Distance: 92.983km
- Same image: Yes

**Reasons:** Identical image URL

**Recommendation:** **KEEP-BOTH**

---

### 923. KEEP-BOTH (Confidence: 45%)

**Castle A:** Inch Abbey
- Location: 54.3333, -5.7333
- Country/County: Northern Ireland, County Down
- Type: abbey
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/View_of_Antrim_Castle_from_the_river_%2813733537463%29.jpg/500px-View_of_Antrim_Castle_from_the_river_%2813733537463%29.jpg

**Castle B:** Antrim Castle Gardens  
- Location: 54.7167, -6.2167
- Country/County: Northern Ireland, County Antrim
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/View_of_Antrim_Castle_from_the_river_%2813733537463%29.jpg/500px-View_of_Antrim_Castle_from_the_river_%2813733537463%29.jpg

**Metrics:**
- Name similarity: 28.6%
- Distance: 52.826km
- Same image: Yes

**Reasons:** Identical image URL

**Recommendation:** **KEEP-BOTH**

---

### 924. KEEP-BOTH (Confidence: 45%)

**Castle A:** Jordan's Castle
- Location: 54.1833, -5.85
- Country/County: Northern Ireland, County Down
- Type: tower house
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Moyry_Castle_1.jpg/500px-Moyry_Castle_1.jpg

**Castle B:** Moyry Castle  
- Location: 54.0667, -6.35
- Country/County: Northern Ireland, County Armagh
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Moyry_Castle_1.jpg/500px-Moyry_Castle_1.jpg

**Metrics:**
- Name similarity: 53.3%
- Distance: 35.066km
- Same image: Yes

**Reasons:** Identical image URL

**Recommendation:** **KEEP-BOTH**

---

### 925. KEEP-BOTH (Confidence: 45%)

**Castle A:** Brodie Castle
- Location: 57.5833, -3.7333
- Country/County: Scotland, Moray
- Type: castle
- Image: 

**Castle B:** Castle Loch Heylipol  
- Location: 56.5, -6.8667
- Country/County: Scotland, Argyll and Bute
- Type: castle
- Image: 

**Metrics:**
- Name similarity: 40.0%
- Distance: 224.553km
- Same image: Yes

**Reasons:** Identical image URL

**Recommendation:** **KEEP-BOTH**

---

### 926. KEEP-BOTH (Confidence: 45%)

**Castle A:** Duiske Abbey
- Location: 52.593, -6.937
- Country/County: Ireland, County Kilkenny
- Type: abbey
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Graiguenamanach_Choir_Window_SE_1997_08_27.jpg/500px-Graiguenamanach_Choir_Window_SE_1997_08_27.jpg

**Castle B:** Graiguenamanagh Abbey  
- Location: 52.538, -6.958
- Country/County: Ireland, County Kilkenny
- Type: abbey
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Graiguenamanach_Choir_Window_SE_1997_08_27.jpg/500px-Graiguenamanach_Choir_Window_SE_1997_08_27.jpg

**Metrics:**
- Name similarity: 38.1%
- Distance: 6.278km
- Same image: Yes

**Reasons:** Identical image URL

**Recommendation:** **KEEP-BOTH**

---

### 927. KEEP-BOTH (Confidence: 40%)

**Castle A:** Conwy Castle
- Location: 53.2802, -3.8265
- Country/County: Wales, Conwy
- Type: castle
- Image: https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Conwy_Castle%2C_water_view1.jpg/500px-Conwy_Castle%2C_water_view1.jpg

**Castle B:** Aberconwy House  
- Location: 53.2806, -3.8278
- Country/County: Wales, Conwy
- Type: historic-house
- Image: https://img.castlecore.uk/aberconwy-house.jpg

**Metrics:**
- Name similarity: 58.3%
- Distance: 0.097km
- Same image: No

**Reasons:** Very close proximity (0.1km)

**Recommendation:** **KEEP-BOTH**

---

## Methodology

### Name Matching
- Normalized names (lowercase, removed punctuation)
- Generated variants (removed suffixes like "Castle", "Tower", etc.)
- Tested word order reversals
- Used Levenshtein distance for fuzzy matching

### Proximity Detection  
- Haversine formula for great-circle distance
- Flagged pairs within 2km as suspicious
- Weighted closer pairs higher

### Confidence Scoring
- Name similarity ≥80%: +50 points
- Name similarity ≥60%: +25 points  
- Distance ≤100m: +40 points
- Distance ≤500m: +30 points
- Distance ≤2km: +15 points
- Identical image: +45 points
- Name + proximity combo: +20 points

### Recommendations
- **MERGE (≥80%):** Very likely duplicates - combine entries
- **INVESTIGATE (60-79%):** Suspicious - manual review needed  
- **KEEP-BOTH (<60%):** Possibly legitimate separate entries

