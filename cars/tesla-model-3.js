registerCar({
  "id": "tesla-model-3",
  "name": "Tesla Model 3",
  "subtitle": "Highland, 2024+",
  "bodyStyle": "sedan",
  "years": "2024–present",

  "dimensions_mm": {
    "length": 4720,
    "width": 1850,
    "widthWithMirrors": 1933,
    "height": 1440,
    "wheelbase": 2875,
    "groundClearance": 138
  },
  "cargo_l": { "boot": 594, "frunk": 88 },
  "curbWeight_kg": { "min": 1611, "max": 1765 },

  "photos": {
    "side": {
      "src": "assets/model3.png",
      "facing": "left",
      "author": "carsized.com",
      "license": "© carsized.com",
      "sourceUrl": "https://www.carsized.com/en/cars/tesla-model-3-2023-sedan/",
      "note": "Highland orthographic side render from carsized; trimmed to content."
    },
    "front": {
      "src": "assets/model3_front.png",
      "author": "carsized.com",
      "license": "© carsized.com",
      "sourceUrl": "https://www.carsized.com/en/cars/tesla-model-3-2023-sedan/front/",
      "note": "Width including mirrors; trimmed to content."
    }
  },

  "silhouette": {
    "wheelRadius_mm": 335,
    "frontOverhang_mm": 845,
    "profile": [
      [0.000, 0.24], [0.000, 0.40], [0.020, 0.465], [0.160, 0.555],
      [0.315, 0.645], [0.460, 0.930], [0.555, 1.000], [0.660, 0.975],
      [0.820, 0.800], [0.935, 0.705], [0.975, 0.685], [1.000, 0.560],
      [1.000, 0.25]
    ],
    "glass": [[0.335, 0.665], [0.468, 0.905], [0.660, 0.945], [0.805, 0.785]]
  },

  "sources": [
    { "label": "automobiledimension (Model 3)", "url": "https://www.automobiledimension.com/model/tesla/model-3" }
  ]
});
