# Phase 1 prompt — project scaffold + data layer

Paste this into Claude Code terminal at /Users/markovisic/Desktop/travelpowerplugs

---

Initialize a Next.js 15 project for travelpowerplugs.com. Do everything in this exact order:

## Step 1 — Create Next.js project
```
npx create-next-app@latest . --typescript --tailwind --app --src-dir --import-alias "@/*" --no-git
```

## Step 2 — Install dependencies
```
npm install d3 topojson-client
npm install next-sitemap
npm install @types/d3 @types/topojson-client
```

## Step 3 — Create /src/data/countries.ts
Create a TypeScript file exporting a `COUNTRIES` array. Each entry must have:
```typescript
export interface Country {
  slug: string           // URL slug — EXACTLY as used on current WP site
  name: string
  iso2: string           // ISO 3166-1 alpha-2 (for flags)
  iso3: string           // ISO 3166-1 alpha-3 (for D3 map topology)
  continent: 'europe' | 'asia' | 'africa' | 'north-america' | 'south-america' | 'oceania' | 'middle-east'
  plugTypes: PlugType[]  // e.g. ['A', 'C', 'F']
  voltage: number        // e.g. 220
  frequency: 50 | 60
  hasAdapter: boolean    // does a US traveler need an adapter?
}
```

Populate ALL 193 existing countries from the WordPress data PLUS the 66 missing territories.
Critical: slugs for the 193 existing pages must match EXACTLY (e.g. "vietnam-electric-plug-types-which-adapter-will-you-need-for-vietnam").

## Step 4 — Create /src/data/plugTypes.ts
```typescript
export interface PlugTypeSpec {
  id: PlugType           // 'A' | 'B' | 'C' ... 'O'
  name: string
  aka: string            // common name e.g. "Europlug", "Schuko", "British Standard"
  pins: number
  pinShape: 'flat' | 'round' | 'rectangular'
  grounded: boolean
  voltage: string        // e.g. "100-127V" or "220-240V"
  amperage: number
  compatibleSockets: PlugType[]  // which socket types this plug fits
  primaryCountries: string[]     // top 5 countries
  mapColor: string       // hex for world map choropleth
}

// Also export the full 15x15 compatibility matrix
export const COMPATIBILITY_MATRIX: Record<PlugType, PlugType[]> = { ... }
```

## Step 5 — Create /src/app/[country]/page.tsx
Static country page template using generateStaticParams() for all 259 countries.
- Import country data from COUNTRIES array
- Use the existing WP content structure as template
- Include placeholder for SVG plug component (we'll add real ones in Phase 3)
- Include JSON-LD structured data (FAQPage + BreadcrumbList + WebPage)
- generateMetadata() with unique title + description per country

## Step 6 — Create vercel.json with all 7 redirects
```json
{
  "redirects": [
    { "source": "/albanian-plug-types", "destination": "/albania-electric-plug-types", "permanent": true },
    { "source": "/albania-electric-plug-types/", "destination": "/albania-electric-plug-types", "permanent": true },
    ...all 7 redirects...
  ]
}
```

## Step 7 — Create next-sitemap.config.js
Auto-generate sitemap.xml with all country pages, continent pages, plug type pages, tool pages.
Priority: country pages = 0.8, homepage = 1.0, tools = 0.7, guides = 0.7

## Step 8 — Test
Run `npm run dev` and verify:
- Homepage loads at localhost:3000
- /vietnam-electric-plug-types-which-adapter-will-you-need-for-vietnam/ loads
- /albania-electric-plug-types/ redirects from /albanian-plug-types/
- Page source includes JSON-LD structured data
