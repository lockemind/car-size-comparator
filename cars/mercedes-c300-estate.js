registerCar({
  "id": "mercedes-c300-estate",
  "name": "Mercedes C300 Estate",
  "subtitle": "S206, 2021+",
  "bodyStyle": "estate",
  "years": "2021–present",

  "dimensions_mm": {
    "length": 4751,
    "width": 1820,
    "widthWithMirrors": 2033,
    "height": 1455,
    "wheelbase": 2865,
    "groundClearance": 135
  },
  "cargo_l": { "boot": 490, "frunk": null },
  "curbWeight_kg": { "min": 1710, "max": 1850 },
  "price_eur": { "min": 62000, "max": 72150, "basis": "new" },

  "photos": {
    "side": {
      "src": "assets/c300.png",
      "facing": "left",
      "author": "carsized.com",
      "license": "© carsized.com",
      "sourceUrl": "https://www.carsized.com/en/cars/mercedes-benz-c-2021-estate/",
      "note": "S206 C-Class estate (T-Modell); orthographic side render from carsized, trimmed to content. No front render archived, front view falls back to silhouette."
    }
  },

  "silhouette": {
    "wheelRadius_mm": 335,
    "frontOverhang_mm": 900,
    "profile": [
      [0.000, 0.24], [0.000, 0.42], [0.025, 0.480], [0.150, 0.570],
      [0.300, 0.660], [0.400, 0.920], [0.470, 0.990], [0.690, 1.000],
      [0.850, 0.985], [0.945, 0.925], [0.990, 0.740], [1.000, 0.620],
      [1.000, 0.26]
    ],
    "glass": [[0.315, 0.685], [0.410, 0.900], [0.865, 0.955], [0.955, 0.890]]
  },

  "sources": [
    { "label": "automobiledimension (C Estate 2021)", "url": "https://www.automobiledimension.com/model/mercedes-benz/c-estate" }
  ]
});
