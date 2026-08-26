registerCar({
  "id": "kia-ev4",
  "name": "Kia EV4",
  "subtitle": "Hatchback, 2025+",
  "bodyStyle": "hatchback",
  "years": "2025–present",

  "dimensions_mm": {
    "length": 4430,
    "width": 1860,
    "height": 1485,
    "wheelbase": 2820,
    "groundClearance": 150
  },
  "cargo_l": { "boot": 435, "frunk": null },
  "curbWeight_kg": { "min": 1730, "max": 1811 },
  "price_eur": { "min": 41515, "max": 48000, "basis": "new" },

  "photos": {
    "side": {
      "src": "assets/ev4.png",
      "facing": "left",
      "author": "carsized.com",
      "license": "© carsized.com",
      "sourceUrl": "https://www.carsized.com/en/cars/kia-ev4-2025-hatchback/",
      "note": "European 5-door hatchback; orthographic side render from carsized, trimmed to content (3x, since the 4x is CDN-blocked). No front render archived, front view falls back to silhouette."
    }
  },

  "silhouette": {
    "wheelRadius_mm": 340,
    "frontOverhang_mm": 830,
    "profile": [
      [0.000, 0.24], [0.000, 0.42], [0.025, 0.480], [0.140, 0.560],
      [0.280, 0.650], [0.400, 0.905], [0.500, 1.000], [0.680, 0.990],
      [0.850, 0.900], [0.945, 0.790], [0.995, 0.690], [1.000, 0.600],
      [1.000, 0.26]
    ],
    "glass": [[0.300, 0.670], [0.415, 0.885], [0.675, 0.945], [0.880, 0.840]]
  },

  "sources": [
    { "label": "Kia (EV4 specs)", "url": "https://www.kia.com/ie/new-cars/ev4/specifications/" }
  ]
});
