registerCar({
  "id": "volvo-v90",
  "name": "Volvo V90",
  "subtitle": "2020 facelift, 2016+",
  "bodyStyle": "estate",
  "years": "2016–present",

  "dimensions_mm": {
    "length": 4936,
    "width": 1879,
    "widthWithMirrors": 2019,
    "height": 1475,
    "wheelbase": 2941,
    "groundClearance": 145
  },
  "cargo_l": { "boot": 560, "frunk": null },
  "curbWeight_kg": { "min": 1750, "max": 2020 },
  "price_eur": { "min": 75657, "max": 88000, "basis": "new" },

  "photos": {
    "side": {
      "src": "assets/v90.png",
      "facing": "left",
      "author": "carsized.com",
      "license": "© carsized.com",
      "sourceUrl": "https://www.carsized.com/en/cars/volvo-v90-2020-estate/",
      "note": "SPA platform, 2020 facelift; orthographic side render from carsized, trimmed to content. No front render archived, front view falls back to silhouette."
    }
  },

  "silhouette": {
    "wheelRadius_mm": 345,
    "frontOverhang_mm": 920,
    "profile": [
      [0.000, 0.24], [0.000, 0.42], [0.030, 0.485], [0.150, 0.570],
      [0.300, 0.660], [0.400, 0.920], [0.470, 0.990], [0.700, 1.000],
      [0.860, 0.985], [0.950, 0.920], [0.990, 0.735], [1.000, 0.615],
      [1.000, 0.26]
    ],
    "glass": [[0.315, 0.685], [0.410, 0.900], [0.875, 0.955], [0.960, 0.885]]
  },

  "sources": [
    { "label": "dimensions.com (V90)", "url": "https://www.dimensions.com/element/volvo-v90" }
  ]
});
