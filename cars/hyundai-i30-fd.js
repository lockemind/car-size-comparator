registerCar({
  "id": "hyundai-i30-fd",
  "name": "Hyundai i30",
  "subtitle": "FD, 2007–2012",
  "bodyStyle": "hatchback",
  "years": "2007–2012",

  "dimensions_mm": {
    "length": 4245,
    "width": 1775,
    "widthWithMirrors": 1990,
    "height": 1480,
    "wheelbase": 2650,
    "groundClearance": 140
  },
  "cargo_l": { "boot": 340, "frunk": null },
  "curbWeight_kg": { "min": 1157, "max": 1377 },
  "price_eur": { "min": 3000, "max": 6500, "basis": "used" },

  "photos": {
    "side": {
      "src": "assets/i30.png",
      "facing": "left",
      "author": "carsized.com",
      "license": "© carsized.com",
      "sourceUrl": "https://www.carsized.com/en/cars/hyundai-i30-2006-hatchback/",
      "note": "First-gen FD 5-door hatchback; orthographic side render from carsized, trimmed to content. No front render archived, front view falls back to silhouette."
    }
  },

  "silhouette": {
    "wheelRadius_mm": 300,
    "frontOverhang_mm": 870,
    "profile": [
      [0.000, 0.26], [0.000, 0.44], [0.030, 0.510], [0.150, 0.600],
      [0.290, 0.700], [0.390, 0.930], [0.480, 1.000], [0.680, 0.995],
      [0.830, 0.930], [0.940, 0.820], [0.990, 0.700], [1.000, 0.610],
      [1.000, 0.28]
    ],
    "glass": [[0.310, 0.720], [0.400, 0.905], [0.670, 0.955], [0.825, 0.810]]
  },

  "sources": [
    { "label": "auto-data (i30 FD)", "url": "https://www.auto-data.net/en/hyundai-i30-model-1474" }
  ]
});
