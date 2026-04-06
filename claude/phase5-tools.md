# Phase 5 prompt — interactive tools

---

## Tool 1: Adapter Finder — /src/app/tools/adapter-finder/page.tsx
Also exported as a component for embedding on country pages.

### Logic
```
origin country plugTypes + destination country plugTypes
→ intersection = no adapter needed
→ no intersection = adapter needed, show which type
→ voltage difference → converter warning
```

### UI
- Two searchable dropdowns: "I'm from" + "I'm traveling to"
- Live result updates as user types
- Result shows:
  - PlugInSocket SVG animation (does it fit?)
  - "You need / don't need an adapter"
  - If needed: "Buy [Adapter Type] adapter" → Amazon affiliate link
  - Voltage warning if different
- Result is shareable URL: /tools/adapter-finder?from=us&to=vietnam

### SEO
- generateMetadata with dynamic title based on query params
- JSON-LD: WebApplication + HowTo schema
- Pre-render popular combinations as static pages:
  /tools/adapter-finder/us-to-vietnam/ etc. for top 50 routes

---

## Tool 2: Voltage Calculator — /src/app/tools/voltage-calculator/page.tsx

### Inputs
- Device wattage: slider 1–3000W + text input
- Origin country: searchable dropdown
- Destination country: searchable dropdown

### Logic
```
same voltage (±10%) + same frequency → SAFE, no converter
same voltage, different frequency → WARN (motors may be affected)
different voltage, device is dual-voltage → SAFE
different voltage, device is NOT dual-voltage → NEED CONVERTER
show: max safe wattage for typical converter sizes
```

### Output
- Green/amber/red status card
- Explanation of why
- Amazon affiliate: recommended converter for that wattage
- "How to check if your device is dual voltage" explainer link

---

## Tool 3: Trip Planner — /src/app/tools/trip-planner/page.tsx

### UI
- "Home country" dropdown
- "Add destination" (up to 8 countries, autocomplete)
- Add/remove countries with + / × buttons

### Output
- All unique plug types you'll encounter
- "Universal adapter X covers N/M of your destinations"
- Packing list:
  - [x] Universal travel adapter (covers: Vietnam, Italy, Ireland...)
  - [x] US-to-UK adapter (for: United Kingdom)
  - [ ] Voltage converter (for: Japan — 100V)
- "Buy everything for this trip" → Amazon list affiliate link

### SEO
- Pre-render: /tools/trip-planner/europe-trip/, /tools/trip-planner/southeast-asia-trip/

---

## Tool 4: Compatibility Matrix — /src/app/tools/compatibility-matrix/page.tsx

### UI
- 15×15 grid table (rows = plug types A–O, cols = socket types A–O)
- Cell colors: green = fits, red = doesn't fit, amber = fits with caveat
- Click cell = popover explaining the compatibility
- "Highlight my plug type" button — dims all rows except selected

### Data
Import from COMPATIBILITY_MATRIX in /src/data/plugTypes.ts

### SEO
- title: "Plug Type Compatibility Matrix: Which Plugs Fit Which Sockets?"
- JSON-LD: Dataset schema
- This page is a linkbait asset — unique in the industry

---

## Tool 5: Plug Identifier — /src/app/tools/plug-identifier/page.tsx

### UI (stepper, 3 steps)
Step 1: "How many pins does your plug have?" → 2 or 3
Step 2: "What shape are the pins?" → flat blades / round pins / rectangular
Step 3: "What's the arrangement?" → show SVG options to click

### Output
"You have a Type X plug"
- SVG of the identified plug
- Countries where it works natively
- Link to /plug-type/type-x/
- "Need an adapter?" → AdapterFinder embedded

### SEO
- title: "What Plug Type Do I Have? Identify Your Power Plug"
- Targets: "what type of plug do i have" — high volume, zero competition
