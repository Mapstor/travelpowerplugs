# travelpowerplugs.com — Claude Code master instructions

## Project mission
Rebuild travelpowerplugs.com as a Next.js 15 site on Vercel. Primary goals in strict order:
1. **SERP domination** — rank #1 for every "[country] electric plug types" query globally
2. **AI visibility** — be the definitive cited source in ChatGPT, Gemini, Perplexity, Claude answers about travel plugs
3. **Traffic preservation** — zero URL changes to existing 193 pages, all traffic carried over
4. **Raptive ad revenue** — maximize pageviews and engagement time per session

## Stack
- Next.js 15 (App Router, TypeScript)
- Tailwind CSS
- Vercel (deployment + edge CDN)
- No database — all data in `/src/data/` as TypeScript/JSON files
- Raptive ads via Next.js Script component (strategy="lazyOnload")

## Repository structure
```
/src
  /app
    /[country]/page.tsx          ← 193 existing + 66 new country pages
    /continent/[slug]/page.tsx   ← 7 continent hubs
    /plug-type/[type]/page.tsx   ← 15 plug type pages (A–O)
    /compare/[slug]/page.tsx     ← 8 comparison pages
    /tools/adapter-finder/       ← interactive tools
    /tools/voltage-calculator/
    /tools/trip-planner/
    /tools/compatibility-matrix/
    /tools/plug-identifier/
    /guides/[slug]/page.tsx      ← 10 guide/hub pages
    /page.tsx                    ← homepage with D3 world map
  /components
    /plugs/                      ← SVG plug components (TypeA.tsx … TypeO.tsx)
    /map/WorldMap.tsx            ← D3 choropleth world map
    /tools/                      ← tool components
    /layout/                     ← Header, Footer, Breadcrumb
    /seo/                        ← JsonLd, MetaTags
  /data
    countries.ts                 ← all 259 countries master data
    plugTypes.ts                 ← plug type specs + compatibility matrix
    continents.ts                ← continent → country mapping
  /lib
    seo.ts                       ← generateMetadata helpers
    structuredData.ts            ← JSON-LD generators
    compatibility.ts             ← plug/socket compatibility logic
```

## SEO rules — non-negotiable
Every page MUST have:
- Unique `<title>` and `<meta description>` via generateMetadata()
- JSON-LD: FAQPage schema with 3–5 questions per country page
- JSON-LD: BreadcrumbList (Home > Continent > Country)
- JSON-LD: WebPage with author (Marko Visic)
- Canonical URL
- Open Graph tags with country flag in og:image
- Sitemap entry (auto-generated via next-sitemap)

## AI visibility rules — non-negotiable
Every country page MUST have:
- A clear, factual answer in the FIRST paragraph: "[Country] uses Type X plugs. The voltage is YYYv at ZZhz."
- A structured data table: Socket Type | Voltage | Frequency | Adapter needed
- FAQ section answering: "do I need an adapter in [country]?", "what plug type does [country] use?", "what voltage is used in [country]?"
- Unique content that is NOT copy-pasted from competitors — rewrite everything

## Content rewrite rules
- Every country page must have a unique opening paragraph (not templated)
- Mention 2–3 real cities/destinations in the country
- Include a personal/practical travel tip angle
- Minimum 800 words per country page
- The SVG plug illustration must be present above the fold
- The adapter finder widget must be embedded on every country page

## URL rules
Keep ALL existing slugs exactly as they are. Do NOT change:
- /vietnam-electric-plug-types-which-adapter-will-you-need-for-vietnam/
- /type-a-vs-type-b-plug/
- Any of the 193 existing post slugs

301 redirects for 7 inconsistent slugs → add to vercel.json:
- /albanian-plug-types/ → /albania-electric-plug-types/
- /algeria-electrical-plug-type/ → /algeria-electric-plug-types/
- /andorra-plug-types-electric-sockets-used-in-andorra-adapter/ → /andorra-electric-plug-types/
- /armenia-electric-socket-types-do-you-need-to-pack-an-adapter/ → /armenia-electric-plug-types/
- /austria-electric-power-plug-types-do-you-need-an-adapter/ → /austria-electric-plug-types/
- /azerbaijan-electric-socket-types-will-you-need-an-adapter/ → /azerbaijan-electric-plug-types/
- /bahamas-electric-socket-types-will-you-need-an-adapter/ → /bahamas-electric-plug-types/

## Performance targets
- LCP < 1.2s (all pages static HTML)
- CLS = 0 (no layout shift from ads — use placeholder divs)
- FID < 100ms
- All pages green in Core Web Vitals

## Plug SVG components
All 15 plug types (A–O) must be React SVG components in /src/components/plugs/
Each component takes props: { size?: number, variant: 'plug' | 'socket', animated?: boolean }
Dark mode via CSS variables — no hardcoded colors
Animated variant: plug descends into socket on mount (CSS transform)

## World map
D3.js choropleth using world-atlas@2 topology from jsdelivr
8 color groups by plug family (see docs/world-map-colors.md)
Click country → navigate to country page
Hover → tooltip with flag, plug types, voltage
Rendered client-side ('use client') with SSR skeleton
