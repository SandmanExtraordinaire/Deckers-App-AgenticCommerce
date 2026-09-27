# HOKA Agentic Commerce Prototype

An internal concept prototype exploring what agentic commerce could look
like for HOKA (Deckers Brands). Not affiliated with or endorsed by
Deckers. Product imagery belongs to HOKA/Deckers and is used here for
illustration only. All customer data is invented.

**Live:** <add your GitHub Pages URL>

## Running it

Open `index.html` in a browser, or serve the folder
(`python3 -m http.server 8000`).

## The premise

Maya Ellison, 35, Brooklyn. A hobbyist marathoner and HOKA member with
Strava connected. Ten pairs tracked, five of them HOKA. Racing the TCS
NYC Marathon in 34 days, goal sub-3:45. Her Clifton 10 is at 480 miles
and won't survive race week — that's the hook the whole flow hangs on.

The argument: Google knows the catalogue, HOKA knows her collection.

## The seven screens

1. **Google AI Mode** — interactive. Mixed-retailer results, then
   HOKA-only, then the CTA into the store.
2. **Your store** — hero, intent switch, profile strip with gait, and
   product clusters grouped by reason rather than department. Right rail
   holds the collection widget and the race-day list.
3. **PDP** — gallery, real specs, and a "why this, for your race" block
   tying intent to product.
4. **Category** — the same pattern, reached via "Show all".
5. **Bag** — readiness scorecard that counts what she already owns.
6. **Store pickup** — an agent checks owned and partner stores in
   parallel, with per-store freshness and a pickup slot.
7. **After the race** — the storefront switches to recovery mode.

Three things are genuinely interactive: the intent switch, the pickup
agent trace, and add-to-bag updating the readiness score.

## Design decisions that look like bugs but aren't

- **The readiness score can reach complete.** It counts items she already
  owns and is not engineered to always show a gap. Urgency comes from
  real facts — race date, shipping cutoff, break-in miles — not
  manufactured scarcity.
- **No colour-coding on the scorecard**, by request.
- **The NYC26 promo is cohort-based** and identical on every channel.
  Per-user pricing was deliberately avoided: it conflicts with Deckers'
  full-price model and carries regulatory exposure.
- **No AI reasoning touches Strava data.** Strava's June 2026 API policy
  bars using its data to operate any AI application. So the site displays
  her mileage and runs plain rules on it (480 miles = replace), while
  recommendations come from HOKA's own data: purchase history, fit
  profile, gait, race entry. This shapes the architecture and shouldn't
  be "fixed".

## Data accuracy

Verified specs: Clifton 11 ($154.95, 38/30 mm, 8 mm drop, 8.18 oz,
CMEVA + MetaRocker), Arahi 8 ($150, H-Frame, 36.8/29.6 mm, 7.2 mm drop,
7.72 oz), Rocket X Trail ($250, 45/39 mm, H-shaped carbon plate, A-TPU).
Apparel, accessories and nutrition are illustrative.

## Known gaps

- The Rocket X 2 (her race pair) has no photography yet.
- Apparel, accessories, nutrition and recovery items fall back to drawn
  SVG silhouettes. The `IMAGES` map returns a silhouette for any missing
  key — keep that behaviour.
