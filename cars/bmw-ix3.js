registerCar({
  "id": "bmw-ix3",
  "name": "BMW iX3",
  "subtitle": "Neue Klasse, 2025+",
  "bodyStyle": "SUV",
  "years": "2025–present",

  "dimensions_mm": {
    "length": 4782,
    "width": 1895,
    "height": 1635,
    "wheelbase": 2897,
    "groundClearance": 175
  },
  "cargo_l": { "boot": 520, "frunk": 58 },
  "curbWeight_kg": { "min": 2285, "max": 2360 },
  "price_eur": { "min": 65000, "max": 75000, "basis": "new" },

  "photos": {
    "side": {
      "src": "assets/ix3.png",
      "facing": "left",
      "author": "carsized.com",
      "license": "© carsized.com",
      "sourceUrl": "https://www.carsized.com/en/cars/bmw-ix3-2025-suv/",
      "note": "New Neue Klasse iX3; orthographic side render from carsized, trimmed to content (3x, since the 4x is CDN-blocked). No front render archived, front view falls back to silhouette."
    }
  },

  "silhouette": {
    "wheelRadius_mm": 365,
    "frontOverhang_mm": 880,
    "profile": [
      [0.000, 0.24], [0.000, 0.42], [0.025, 0.480], [0.140, 0.565],
      [0.290, 0.655], [0.420, 0.905], [0.520, 1.000], [0.690, 0.990],
      [0.860, 0.895], [0.955, 0.785], [1.000, 0.690], [1.000, 0.600],
      [1.000, 0.26]
    ],
    "glass": [[0.300, 0.675], [0.430, 0.885], [0.680, 0.945], [0.880, 0.830]]
  },

  "sources": [
    { "label": "automobiledimension (iX3)", "url": "https://www.automobiledimension.com/model/bmw/ix3" }
  ]
});
