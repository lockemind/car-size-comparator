registerCar({
  "id": "mercedes-e300de-w213",
  "name": "Mercedes E300de",
  "subtitle": "W213 facelift, 2020–2023",
  "bodyStyle": "sedan",
  "years": "2020–2023",

  "dimensions_mm": {
    "length": 4935,
    "width": 1852,
    "widthWithMirrors": 2065,
    "height": 1460,
    "wheelbase": 2939,
    "groundClearance": 135
  },
  "cargo_l": { "boot": 370, "frunk": null },
  "curbWeight_kg": { "min": 2055, "max": 2130 },
  "price_eur": { "min": 22000, "max": 39000, "basis": "used" },

  "photos": {
    "side": {
      "src": "assets/e300de.png",
      "facing": "left",
      "author": "carsized.com",
      "license": "© carsized.com",
      "sourceUrl": "https://www.carsized.com/en/cars/mercedes-benz-e-2020-sedan/",
      "note": "W213 facelift sedan (the E300de plug-in hybrid diesel shares this body); orthographic side render from carsized, trimmed to content."
    },
    "front": {
      "src": "assets/e300de_front.png",
      "author": "carsized.com",
      "license": "© carsized.com",
      "sourceUrl": "https://www.carsized.com/en/cars/mercedes-benz-e-2020-sedan/front/",
      "note": "Height-anchored; trimmed to content. Boot is 370 L (PHEV battery; non-hybrid E-Class is 540 L)."
    }
  },

  "silhouette": {
    "wheelRadius_mm": 335,
    "frontOverhang_mm": 900,
    "profile": [
      [0.000, 0.24], [0.000, 0.41], [0.020, 0.465], [0.160, 0.555],
      [0.320, 0.645], [0.455, 0.925], [0.555, 1.000], [0.680, 0.985],
      [0.830, 0.855], [0.930, 0.700], [0.975, 0.615], [1.000, 0.520],
      [1.000, 0.25]
    ],
    "glass": [[0.335, 0.660], [0.465, 0.905], [0.675, 0.945], [0.820, 0.815]]
  },

  "sources": [
    { "label": "auto-data (E300de W213 facelift)", "url": "https://www.auto-data.net/en/mercedes-benz-e-class-w213-facelift-2020-e-300de-306hp-plug-in-hybrid-4matic-9g-tronic-40972" }
  ]
});
