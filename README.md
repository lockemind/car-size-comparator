# Car Size Comparison

Side-by-side car size comparator, carsized-style: real orthographic side- and
front-view photos scaled to true dimensions, plus a full spec table.

**Live site: <https://lockemind.github.io/car-size-comparator/>**

Currently loaded cars:

- Audi A4 Avant (B8, 2010)
- Opel Meriva B (2010–2017)
- Tesla Model 3 (pre-facelift, 2017–2023)
- Tesla Model 3 (Highland, 2024+)
- BYD Seal (2022+)
- Tesla Model Y (pre-facelift, 2020–2024)
- Tesla Model Y (Juniper, 2025+)
- Kia EV3 (2024+)
- Kia EV6 (pre-facelift, 2021–2024)
- Polestar 4 (2024+)
- Zeekr 7GT (2025+)

## Features

- **Side view** — length & height, with dimension arrows and Δ between cars
- **Front view** — width (incl. mirrors on the photos)
- Align cars at front / center / rear
- Units in mm / cm / in
- Photos or drawn silhouettes (per-car fallback when a photo is missing)
- Spec table: dimensions, boot/frunk, kerb weight, with B−A deltas

## Running locally

No build step, no server needed — open `index.html` in a browser. Car data is
loaded via `<script>` tags instead of `fetch()` so it also works from `file://`.

## Adding a car

Each car is a single file in `cars/` calling `registerCar({...})`, plus optional
cut-out PNGs in `assets/` (side view nose-left, front view including mirrors).
See [`cars/README.md`](cars/README.md) for the full schema and steps.

## Deployment

Pushes to `main` are mirrored to the `gh-pages` branch by
[`.github/workflows/pages.yml`](.github/workflows/pages.yml), which GitHub Pages
serves as the live site.

## Credits

- Spec sources are listed per car in `cars/*.js` and rendered in the page footer.
- Side/front renders are the property of [carsized.com](https://www.carsized.com/),
  used here for personal comparison; the Zeekr photo is a Wikimedia Commons
  cutout (CC0, JustAnotherCarDesigner).
