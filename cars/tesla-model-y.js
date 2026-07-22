registerCar({
  "id": "tesla-model-y",
  "name": "Tesla Model Y",
  "subtitle": "Juniper, 2025+",
  "bodyStyle": "crossover",
  "years": "2025–present",

  "dimensions_mm": {
    "length": 4790,
    "width": 1920,
    "widthWithMirrors": 2129,
    "height": 1624,
    "wheelbase": 2890,
    "groundClearance": 167
  },
  "cargo_l": { "boot": 854, "frunk": 117 },
  "curbWeight_kg": { "min": 1901, "max": 1997 },

  "photo": {
    "src": "assets/modely.png",
    "facing": "left",
    "author": "Bretwa",
    "license": "CC BY-SA 4.0",
    "sourceUrl": "https://commons.wikimedia.org/wiki/File:Left_view_of_Tesla_Model_Y_in_Courbevoie_-_2021-09-20.jpg",
    "note": "Pre-facelift car (Juniper profile is nearly identical); background removed, scaled to Juniper dimensions."
  },

  "silhouette": {
    "wheelRadius_mm": 356,
    "frontOverhang_mm": 870,
    "profile": [
      [0.000, 0.20], [0.000, 0.36], [0.020, 0.415], [0.150, 0.505],
      [0.300, 0.590], [0.440, 0.895], [0.550, 1.000], [0.670, 0.975],
      [0.830, 0.830], [0.900, 0.760], [0.985, 0.660], [1.000, 0.600],
      [1.000, 0.22]
    ],
    "glass": [[0.318, 0.610], [0.452, 0.875], [0.665, 0.940], [0.870, 0.755]]
  },

  "sources": [
    { "label": "EV Database (Model Y Juniper)", "url": "https://ev-database.org/car/3103/Tesla-Model-Y-RWD" }
  ]
});
