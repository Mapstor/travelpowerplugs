# Phase 3 prompt — D3 world map + homepage

---

## WorldMap component — /src/components/map/WorldMap.tsx
'use client' component using D3.js + topojson

### Data source
Fetch topology from: https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json
Key country features by numeric ISO id → map to our COUNTRIES array via iso3

### Color groups (8 plug families)
```typescript
const PLUG_FAMILY_COLORS = {
  'A/B':   '#E24B4A',  // North America, Japan — red
  'C/E/F': '#378ADD',  // Europe, Russia — blue
  'G':     '#1D9E75',  // UK, Ireland, SE Asia — teal
  'D/M':   '#BA7517',  // India, South Africa — amber
  'I':     '#639922',  // Australia, NZ — green
  'J':     '#7F77DD',  // Switzerland — purple
  'K':     '#534AB7',  // Denmark — dark purple
  'L':     '#D85A30',  // Italy — coral
  'N':     '#D4537E',  // Brazil — pink
  'O':     '#993C1D',  // Thailand — dark coral
}
```

### Interactions
- Hover: show tooltip (country name + flag emoji + plug types + voltage)
- Click: router.push(`/${country.slug}`)
- Mobile tap: first tap = tooltip, second tap = navigate
- Legend below map: colored squares per family, click to filter/highlight

### SSR skeleton
Render a static placeholder div server-side, hydrate with D3 client-side
Placeholder: light gray rect same dimensions as map, "Loading map..." text

### Performance
- Map renders below fold — use Intersection Observer to defer D3 load
- topology JSON cached by browser after first load

---

## Homepage — /src/app/page.tsx

Structure (top to bottom):
1. Hero: site title + tagline + country search bar (autocomplete from COUNTRIES)
2. WorldMap component (full width, ~500px tall)
3. Plug type quick grid: 15 plug type SVGs in a row, click → /plug-type/type-x/
4. "Most searched countries" section: top 10 by traffic (from GA4 data)
5. Continent navigation: 7 continent cards
6. "How it works" explainer: 3 steps (find country → check plug type → buy adapter)
7. Tools promo: Adapter Finder, Trip Planner, Voltage Calculator

### SEO for homepage
```
title: "World Electric Plug Types & Travel Adapters | travelpowerplugs.com"
description: "Find the electric plug type, voltage and adapter for any country. Interactive world map + adapter finder for 259 countries."
```

JSON-LD on homepage:
- WebSite schema with SearchAction (sitelinks searchbox)
- ItemList of top 20 countries
- Organization schema

### Search bar
Client-side autocomplete against COUNTRIES array
On select: navigate to country page
Placeholder: "Search any country..."
