# Ireland Castle Image Research Results

This document tracks research for verified images of Irish castles that currently share duplicate CDN images on castlecore.uk.

## Research Progress

| Castle | Group With | Wikipedia | Commons | Found | Notes |
|--------|------------|-----------|----------|-------|-------|
| Knockmealdown Castle | Knockelly Castle | - | - | No | Only found Ardfinnan Castle with Knockmealdown Mountains visible |
| Knockelly Castle | Knockmealdown Castle | - | https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Castles_of_Munster%2C_Knockkelly%2C_Tipperary_-_geograph.org.uk_-_1542362.jpg/500px-Castles_of_Munster%2C_Knockkelly%2C_Tipperary_-_geograph.org.uk_-_1542362.jpg | Yes | Good direct image from Geograph via Commons |
| Ballaghmore Castle | Coolbanagher Castle, Sharavogue Castle | - | https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Ballaghmore_Castle%2C_County_Laois_-_geograph-2329546.jpg/500px-Ballaghmore_Castle%2C_County_Laois_-_geograph-2329546.jpg | Yes | Multiple excellent images from Geograph via Commons |
| Coolbanagher Castle | Ballaghmore Castle, Sharavogue Castle | - | https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Castles_of_Leinster-_Coolbanagher%2C_Laois_%28geograph_2493929%29.jpg/500px-Castles_of_Leinster-_Coolbanagher%2C_Laois_%28geograph_2493929%29.jpg | Yes | Direct castle image from Geograph via Commons |
| Sharavogue Castle | Ballaghmore Castle, Coolbanagher Castle | - | - | No | No direct images found in search |
| Kilkea Castle | Kildare Castle | - | https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Kilkea_Castle_Castledermot_Ireland.jpg/500px-Kilkea_Castle_Castledermot_Ireland.jpg | Yes | Multiple excellent images available, hotel/castle |
| Kildare Castle | Kilkea Castle | - | https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Kildare_Castle.jpg/500px-Kildare_Castle.jpg | Yes | Multiple recent photos including 2025 images |
| Castle Leslie | Monaghan Castle | - | https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/CastleLeslieSummer2006.jpg/500px-CastleLeslieSummer2006.jpg | Yes | Multiple high-quality images, famous estate |

## Research Methodology

1. **Wikipedia API**: Checked `https://en.wikipedia.org/api/rest_v1/page/summary/{Castle_Name}` for thumbnail images
2. **Wikimedia Commons**: Searched using `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch={castle name}&gsrnamespace=6&prop=imageinfo&iiprop=url|size&iiurlwidth=500&format=json`
3. **Geograph Integration**: Many castle images found via Commons originated from Geograph.ie
4. **Rate Limiting**: Added 2-second delays between API calls to respect rate limits

## Next Steps

- Continue research for remaining 81 castles across 30 duplicate groups
- Focus on Wikipedia API calls where possible (most reliable)
- Check Geograph.ie directly for castles not found via Commons
- Update findings incrementally in this document

## Notes

- Many castles have excellent documentation via Geograph project, uploaded to Commons
- Wikipedia coverage varies significantly by castle prominence
- Some smaller or ruined castles may require direct Geograph searches
- Historical engravings and maps sometimes available but prefer modern photographs