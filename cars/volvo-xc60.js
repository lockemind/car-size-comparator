registerCar({
  "id": "volvo-xc60",
  "name": "Volvo XC60",
  "subtitle": "2nd gen, 2017+",
  "bodyStyle": "SUV",
  "years": "2017–present",

  "dimensions_mm": {
    "length": 4708,
    "width": 1902,
    "widthWithMirrors": 2117,
    "height": 1651,
    "wheelbase": 2865,
    "groundClearance": 216
  },
  "cargo_l": { "boot": 483, "frunk": null },
  "curbWeight_kg": { "min": 1900, "max": 2200 },
  "price_eur": { "min": 70000, "max": 84000, "basis": "new" },

  "photos": {
    "side": {
      "src": "assets/xc60.png",
      "facing": "left",
      "author": "carsized.com",
      "license": "© carsized.com",
      "sourceUrl": "https://www.carsized.com/en/cars/volvo-xc60-2021-suv/",
      "note": "2nd-gen SPA platform, 2021 facelift render (dimensions unchanged through the 2024 update); orthographic side render from carsized, trimmed to content."
    },
    "front": {
      "src": "assets/xc60_front.png",
      "author": "carsized.com",
      "license": "© carsized.com",
      "sourceUrl": "https://www.carsized.com/en/cars/volvo-xc60-2021-suv/front/",
      "note": "Height-anchored; trimmed to content."
    }
  },

  "silhouette": {
    "wheelRadius_mm": 370,
    "frontOverhang_mm": 900,
    "profile": [
      [0.000, 0.24], [0.000, 0.42], [0.025, 0.480], [0.140, 0.565],
      [0.290, 0.655], [0.420, 0.905], [0.520, 1.000], [0.690, 0.990],
      [0.860, 0.895], [0.955, 0.785], [1.000, 0.690], [1.000, 0.600],
      [1.000, 0.26]
    ],
    "glass": [[0.300, 0.675], [0.430, 0.885], [0.680, 0.945], [0.880, 0.830]]
  },

  "sources": [
    { "label": "Volvo Cars (XC60 specs)", "url": "https://www.volvocars.com/us/cars/xc60/specifications/" }
  ]
});
