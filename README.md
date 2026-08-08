# Car Size Comparison

Side-by-side car size comparator, carsized-style: real orthographic side- and
front-view photos scaled to true dimensions, plus a full spec table.

**Live site: <https://lockemind.github.io/car-size-comparator/>**

Currently loaded cars:

- Audi A4 Avant (B6, 2001–2004)
- Audi A4 Avant (B8, 2010)
- VW Polo (Mk5 / 6R, 2009–2014)
- Opel Meriva B (2010–2017)
- Hyundai i30 (FD, 2007–2012)
- Tesla Model 3 (pre-facelift, 2017–2023)
- Tesla Model 3 (Highland, 2024+)
- BYD Seal (2022+)
- Tesla Model Y (pre-facelift, 2020–2024)
- Tesla Model Y (Juniper, 2025+)
- Kia EV3 (2024+)
- Kia EV6 (pre-facelift, 2021–2024)
- VW ID.4 (2020+)
- Škoda Elroq (2025+)
- Škoda Enyaq (facelift, 2025+)
- Hyundai Kauai / Kona (SX2, 2023+)
- Hyundai Tucson (NX4 facelift, 2024+)
- Hyundai Ioniq 5 (pre-facelift, 2021–2024)
- Hyundai Ioniq 5 (facelift, 2025+)
- Hyundai Ioniq 6 (2022+)
- Polestar 4 (2024+)
- XPeng P7 (2020+)
- XPeng G6 (2023+)
- XPeng G9 (2022+)
- Zeekr 7GT (2025+)
- Zeekr 7X (2024+)

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
