# Phase 6 prompt — SEO infrastructure + Vercel deployment

---

## 1. Structured data library — /src/lib/structuredData.ts

Create generators for all JSON-LD types used across the site:

```typescript
// FAQPage — used on every country page and guide page
export function faqPageSchema(faqs: FAQ[]) { ... }

// BreadcrumbList — used everywhere
export function breadcrumbSchema(crumbs: Crumb[]) { ... }

// WebPage — base for all pages
export function webPageSchema(page: PageMeta) { ... }

// WebSite — homepage only
export function webSiteSchema() { ... }

// ItemList — continent pages, comparison pages
export function itemListSchema(items: Item[]) { ... }

// HowTo — tool pages
export function howToSchema(steps: Step[]) { ... }

// Dataset — compatibility matrix page
export function datasetSchema(meta: DatasetMeta) { ... }
```

All schemas output as <script type="application/ld+json"> via a JsonLd component.

---

## 2. Metadata helpers — /src/lib/seo.ts

```typescript
// Country page title patterns
export function countryPageTitle(country: Country): string {
  return `${country.name} Electric Plug Types: Adapters & Voltage (${country.voltage}V)`
}

// Country page description (unique per country)
export function countryPageDescription(country: Country): string {
  return `${country.name} uses Type ${country.plugTypes.join(' and ')} plugs at ${country.voltage}V/${country.frequency}Hz. Find the right adapter for your trip to ${country.name}.`
}
```

---

## 3. next-sitemap.config.js

```javascript
module.exports = {
  siteUrl: 'https://travelpowerplugs.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
    additionalSitemaps: ['https://travelpowerplugs.com/sitemap-countries.xml']
  },
  transform: async (config, path) => {
    // Country pages: high priority
    if (path.includes('electric-plug-type')) return { loc: path, priority: 0.8, changefreq: 'monthly' }
    // Tools: medium priority
    if (path.includes('/tools/')) return { loc: path, priority: 0.7, changefreq: 'monthly' }
    // Plug type pages
    if (path.includes('/plug-type/')) return { loc: path, priority: 0.9, changefreq: 'monthly' }
    // Homepage
    if (path === '/') return { loc: path, priority: 1.0, changefreq: 'weekly' }
    return { loc: path, priority: 0.6, changefreq: 'monthly' }
  }
}
```

---

## 4. Open Graph image generation

Create /src/app/og/[country]/route.tsx using @vercel/og
Generate OG images dynamically with:
- Country flag (large, centered)
- Country name
- Plug types shown as small labeled badges
- "travelpowerplugs.com" branding
Size: 1200×630px

---

## 5. vercel.json — complete

```json
{
  "redirects": [
    { "source": "/albanian-plug-types", "destination": "/albania-electric-plug-types", "permanent": true },
    { "source": "/algeria-electrical-plug-type", "destination": "/algeria-electric-plug-types", "permanent": true },
    { "source": "/andorra-plug-types-electric-sockets-used-in-andorra-adapter", "destination": "/andorra-electric-plug-types", "permanent": true },
    { "source": "/armenia-electric-socket-types-do-you-need-to-pack-an-adapter", "destination": "/armenia-electric-plug-types", "permanent": true },
    { "source": "/austria-electric-power-plug-types-do-you-need-an-adapter", "destination": "/austria-electric-plug-types", "permanent": true },
    { "source": "/azerbaijan-electric-socket-types-will-you-need-an-adapter", "destination": "/azerbaijan-electric-plug-types", "permanent": true },
    { "source": "/bahamas-electric-socket-types-will-you-need-an-adapter", "destination": "/bahamas-electric-plug-types", "permanent": true }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
      ]
    }
  ]
}
```

---

## 6. Raptive ad integration — /src/components/ads/RaptiveAds.tsx

```tsx
'use client'
export function RaptiveHead() {
  return <Script src="//cdn.adflight.io/..." strategy="lazyOnload" />
}

// Ad slot components for different positions
export function AdSlotLeaderboard() { return <div id="div-gpt-ad-top" style={{ minHeight: 90 }} /> }
export function AdSlotSidebar() { return <div id="div-gpt-ad-sidebar" style={{ minHeight: 250 }} /> }
export function AdSlotInContent() { return <div id="div-gpt-ad-incontent" style={{ minHeight: 250 }} /> }
```

Place ads: after intro paragraph, after plug type table, before FAQ, in sidebar.
Use minHeight placeholder divs to prevent CLS.

---

## 7. Pre-launch checklist
Run these before pointing DNS to Vercel:

```bash
# Verify all 193 existing slugs return 200
node scripts/verify-slugs.js

# Check all 7 redirects work
node scripts/verify-redirects.js

# Validate structured data on 5 sample pages
# Use: https://validator.schema.org/

# Core Web Vitals check
npx lighthouse https://travelpowerplugs.vercel.app/ --view

# Sitemap check
curl https://travelpowerplugs.vercel.app/sitemap.xml | head -50
```
