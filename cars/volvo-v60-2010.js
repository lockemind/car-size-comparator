registerCar({
  "id": "volvo-v60-2010",
  "name": "Volvo V60",
  "subtitle": "1st gen, 2010–2018",
  "bodyStyle": "estate",
  "years": "2010–2018",

  "dimensions_mm": {
    "length": 4628,
    "width": 1865,
    "widthWithMirrors": 2097,
    "height": 1484,
    "wheelbase": 2776,
    "groundClearance": 130
  },
  "cargo_l": { "boot": 430, "frunk": null },
  "curbWeight_kg": { "min": 1545, "max": 1750 },
  "price_eur": { "min": 7000, "max": 14000, "basis": "used" },

  "photos": {
    "side": {
      "src": "assets/v60_2010.png",
      "facing": "left",
      "author": "carsized.com",
      "license": "© carsized.com",
      "sourceUrl": "https://www.carsized.com/en/cars/volvo-v60-2010-estate/",
      "note": "First-gen V60 (P3 platform); orthographic side render from carsized, trimmed to content."
    },
    "front": {
      "src": "assets/v60_2010_front.png",
      "author": "carsized.com",
      "license": "© carsized.com",
      "sourceUrl": "https://www.carsized.com/en/cars/volvo-v60-2010-estate/front/",
      "note": "Height-anchored; trimmed to content."
    }
  },

  "silhouette": {
    "wheelRadius_mm": 335,
    "frontOverhang_mm": 900,
    "profile": [
      [0.000, 0.24], [0.000, 0.42], [0.030, 0.485], [0.150, 0.570],
      [0.300, 0.660], [0.400, 0.920], [0.470, 0.990], [0.690, 1.000],
      [0.850, 0.985], [0.945, 0.920], [0.990, 0.735], [1.000, 0.615],
      [1.000, 0.26]
    ],
    "glass": [[0.315, 0.685], [0.410, 0.900], [0.865, 0.955], [0.955, 0.885]]
  },

  "sources": [
    { "label": "auto-data (V60 I)", "url": "https://www.auto-data.net/en/volvo-v60-i-generation-3840" }
  ]
});
