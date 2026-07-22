# Car data files

One file per car. Each file is a pure-JSON payload wrapped in a `registerCar({...})`
call — `.js` instead of `.json` so the page also works when opened directly from
`file://`, where browsers block `fetch()` of local JSON.

To add a car:

1. Create `cars/<id>.js` following the schema below.
2. Add a `<script src="cars/<id>.js"></script>` tag to `index.html` (order of the
   tags is the display order in the UI).
3. Optional: drop background-removed side-view / front-view PNGs in `assets/`
   (side view nose facing left, both tightly cropped to the car). Views without
   a photo fall back to the drawn silhouette.

## Schema

| Field | Type | Description |
|---|---|---|
| `id` | string | Unique kebab-case identifier, must match the filename |
| `name` | string | Display name |
| `subtitle` | string | Short qualifier shown after the name (trim/facelift, years) |
| `bodyStyle` | string | Free text: sedan, crossover, shooting brake, … |
| `years` | string | Production years of this generation |
| `dimensions_mm.length` | number | Exterior length |
| `dimensions_mm.width` | number | Width excluding mirrors |
| `dimensions_mm.widthWithMirrors` | number | Width including mirrors |
| `dimensions_mm.height` | number | Overall height |
| `dimensions_mm.wheelbase` | number | Wheelbase |
| `dimensions_mm.groundClearance` | number | Ground clearance |
| `cargo_l.boot` | number\|null | Boot capacity, litres |
| `cargo_l.frunk` | number\|null | Front trunk capacity, litres (null if none) |
| `curbWeight_kg.min` / `.max` | number | Curb-weight range across variants |
| `photos.side` | object\|absent | Cut-out side-view image (transparent PNG); silhouette is drawn when absent |
| `photos.side.src` | string | Path to the image |
| `photos.side.facing` | string | `"left"` — direction the nose points in the image |
| `photos.front` | object\|absent | Cut-out front-view image, mirrors included — it is scaled to `widthWithMirrors`; silhouette is drawn when absent |
| `photos.front.src` | string | Path to the image |
| `photos.*.author` / `.license` / `.sourceUrl` | string | Attribution, rendered in the page footer |
| `photos.*.note` | string | Any caveat about the image (shown nowhere, documentation only) |
| `silhouette.wheelRadius_mm` | number | Tire outer radius, for the drawn wheels |
| `silhouette.frontOverhang_mm` | number | Front-bumper-to-front-axle distance |
| `silhouette.profile` | [x, y][] | Body outline, front-bottom → rear-bottom. x is a fraction of length, y a fraction of height above ground |
| `silhouette.glass` | [x, y][] | Greenhouse outline, same coordinate system |
| `sources` | {label, url}[] | Spec sources, rendered in the page footer |

All dimensions are millimetres (`_mm`), capacities litres (`_l`), weights
kilograms (`_kg`).
