registerCar({
  "id": "skoda-enyaq",
  "name": "Škoda Enyaq",
  "subtitle": "Facelift, 2025+",
  "bodyStyle": "crossover",
  "years": "2025–present",

  "dimensions_mm": {
    "length": 4658,
    "width": 1879,
    "height": 1622,
    "wheelbase": 2766,
    "groundClearance": 160
  },
  "cargo_l": { "boot": 585, "frunk": null },
  "curbWeight_kg": { "min": 2002, "max": 2304 },
  "price_eur": { "min": 41758, "max": 55368, "basis": "new" },

  "photos": {
    "side": {
      "src": "assets/enyaq.png",
      "facing": "left",
      "author": "carsized.com",
      "license": "© carsized.com",
      "sourceUrl": "https://www.carsized.com/en/cars/skoda-enyaq-iv-2025-suv/",
      "note": "Facelift orthographic side render from carsized; trimmed to content."
    },
    "front": {
      "src": "assets/enyaq_front.png",
      "author": "carsized.com",
      "license": "© carsized.com",
      "sourceUrl": "https://www.carsized.com/en/cars/skoda-enyaq-iv-2025-suv/front/",
      "note": "Height-anchored; trimmed to content."
    }
  },

  "silhouette": {
    "wheelRadius_mm": 350,
    "frontOverhang_mm": 875,
    "profile": [
      [0.000, 0.24], [0.000, 0.42], [0.025, 0.480], [0.140, 0.560],
      [0.290, 0.650], [0.420, 0.905], [0.520, 1.000], [0.690, 0.985],
      [0.860, 0.890], [0.955, 0.780], [1.000, 0.680], [1.000, 0.600],
      [1.000, 0.26]
    ],
    "glass": [[0.300, 0.670], [0.430, 0.890], [0.680, 0.945], [0.885, 0.835]]
  },

  "sources": [
    { "label": "auto-data (Enyaq facelift 2025)", "url": "https://www.auto-data.net/en/skoda-enyaq-facelift-2025-85-82-kwh-286hp-53496" }
  ]
});
