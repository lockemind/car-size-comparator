registerCar({
  "id": "volvo-v60",
  "name": "Volvo V60",
  "subtitle": "2nd gen, 2018+",
  "bodyStyle": "estate",
  "years": "2018–present",

  "dimensions_mm": {
    "length": 4761,
    "width": 1850,
    "widthWithMirrors": 2040,
    "height": 1432,
    "wheelbase": 2872,
    "groundClearance": 132
  },
  "cargo_l": { "boot": 529, "frunk": null },
  "curbWeight_kg": { "min": 1683, "max": 1950 },
  "price_eur": { "min": 59797, "max": 72000, "basis": "new" },

  "photos": {
    "side": {
      "src": "assets/v60.png",
      "facing": "left",
      "author": "carsized.com",
      "license": "© carsized.com",
      "sourceUrl": "https://www.carsized.com/en/cars/volvo-v60-2018-estate/",
      "note": "2nd-gen SPA platform; orthographic side render from carsized, trimmed to content."
    },
    "front": {
      "src": "assets/v60_front.png",
      "author": "carsized.com",
      "license": "© carsized.com",
      "sourceUrl": "https://www.carsized.com/en/cars/volvo-v60-2018-estate/front/",
      "note": "Height-anchored; trimmed to content."
    }
  },

  "silhouette": {
    "wheelRadius_mm": 340,
    "frontOverhang_mm": 900,
    "profile": [
      [0.000, 0.24], [0.000, 0.42], [0.030, 0.485], [0.150, 0.570],
      [0.300, 0.660], [0.400, 0.920], [0.470, 0.990], [0.690, 1.000],
      [0.850, 0.985], [0.945, 0.925], [0.990, 0.740], [1.000, 0.620],
      [1.000, 0.26]
    ],
    "glass": [[0.315, 0.685], [0.410, 0.900], [0.865, 0.955], [0.955, 0.890]]
  },

  "sources": [
    { "label": "automobiledimension (V60)", "url": "https://www.automobiledimension.com/model/volvo/v60" }
  ]
});
