registerCar({
  "id": "vw-polo-6r",
  "name": "VW Polo",
  "subtitle": "Mk5 (6R), 2009–2014",
  "bodyStyle": "hatchback",
  "years": "2009–2014",

  "dimensions_mm": {
    "length": 3970,
    "width": 1682,
    "widthWithMirrors": 1940,
    "height": 1462,
    "wheelbase": 2470,
    "groundClearance": 140
  },
  "cargo_l": { "boot": 280, "frunk": null },
  "curbWeight_kg": { "min": 1051, "max": 1230 },
  "price_eur": { "min": 4500, "max": 9000, "basis": "used" },

  "photos": {
    "side": {
      "src": "assets/polo.png",
      "facing": "left",
      "author": "carsized.com",
      "license": "© carsized.com",
      "sourceUrl": "https://www.carsized.com/en/cars/volkswagen-polo-2009-hatchback/",
      "note": "6R pre-facelift (the 2011 Polo); orthographic side render from carsized, trimmed to content."
    },
    "front": {
      "src": "assets/polo_front.png",
      "author": "carsized.com",
      "license": "© carsized.com",
      "sourceUrl": "https://www.carsized.com/en/cars/volkswagen-polo-2009-hatchback/front/",
      "note": "Height-anchored; trimmed to content."
    }
  },

  "silhouette": {
    "wheelRadius_mm": 300,
    "frontOverhang_mm": 800,
    "profile": [
      [0.000, 0.26], [0.000, 0.44], [0.030, 0.510], [0.150, 0.600],
      [0.300, 0.700], [0.400, 0.930], [0.490, 1.000], [0.680, 0.995],
      [0.840, 0.930], [0.950, 0.820], [0.995, 0.700], [1.000, 0.610],
      [1.000, 0.28]
    ],
    "glass": [[0.320, 0.720], [0.410, 0.905], [0.675, 0.955], [0.835, 0.810]]
  },

  "sources": [
    { "label": "cars-data (Polo 6R)", "url": "https://cars-data.com/en/volkswagen/polo/6r-2009-hatchback-8083" }
  ]
});
