# travelpowerplugs.com — project overview

## The goal
Rebuild travelpowerplugs.com in Next.js 15. Achieve SERP domination + AI visibility
for all "[country] electric plug types" queries globally. Keep all traffic. Add tools
no competitor has. Monetize via Raptive ads + Amazon affiliate.

## Current state (WordPress)
- 193 published country pages (keep all slugs)
- 11 pages (6 continent hubs + about/contact/privacy/terms)
- GeneratePress theme, Interactive Geo Maps plugin for world map
- Yoast SEO (default templates — no custom meta per post)
- Raptive display ads

## Target state (Next.js)
- 259 country/territory pages (193 existing + 66 new)
- 7 continent hubs
- 15 plug type pages (A–O)
- 8 comparison pages
- 10 guide/hub pages
- 5 interactive tools
- Custom SVG plug components
- D3 world map
- ~307 total pages

## Key constraints
- ZERO URL changes to existing 193 pages
- All Raptive ad placements preserved
- Sub-1.2s LCP target
- Every page unique content — no templates that produce identical text

## File locations
```
/Users/markovisic/Desktop/travelpowerplugs/
├── CLAUDE.md                    ← Claude Code reads this first
├── docs/
│   ├── overview.md              ← this file
│   ├── sitemap.md               ← full URL list
│   └── world-map-colors.md      ← plug family color guide
├── prompts/
│   ├── code/
│   │   ├── phase1-scaffold.md   ← Next.js setup + data layer
│   │   ├── phase2-svg-plugs.md  ← SVG plug components
│   │   ├── phase3-worldmap-homepage.md
│   │   ├── phase4-country-page.md  ← most important
│   │   ├── phase5-tools.md      ← 5 interactive tools
│   │   └── phase6-seo-deploy.md ← structured data + deployment
│   └── content/
│       ├── country-rewrite-prompt.md   ← for Claude Desktop batch
│       └── plug-type-page-prompt.md    ← for Claude Desktop batch
└── content/                     ← generated MDX files go here
    ├── countries/               ← one .mdx per country
    └── plug-types/              ← one .mdx per plug type A–O
```

## Phase order

| Phase | What | Tool | Weeks |
|-------|------|------|-------|
| 1 | Next.js scaffold + all data JSON | Claude Code | 1 |
| 2 | SVG plug components (A–O) | Claude Code | 1 |
| 3 | D3 world map + homepage | Claude Code | 1 |
| 4 | Country page template + SEO | Claude Code | 1 |
| 4b | Content rewrites (193 countries) | Claude Desktop × 5 | 2 |
| 5 | 5 interactive tools | Claude Code | 1 |
| 6 | SEO infrastructure + deployment | Claude Code | 0.5 |
| 7 | New pages (66 territories + 15 plug types + 10 guides) | Claude Code + Desktop | 2 |
| 8 | QA, Core Web Vitals, pre-launch | Claude Code | 0.5 |

Total: ~10 weeks to full launch

## SEO/AI visibility checklist (every page)
- [ ] Unique title + meta description
- [ ] First paragraph states the core fact directly
- [ ] FAQPage JSON-LD with 5 questions
- [ ] BreadcrumbList JSON-LD
- [ ] WebPage JSON-LD with author
- [ ] Canonical URL
- [ ] Open Graph tags
- [ ] Internal links to continent, plug types, related countries
- [ ] Amazon affiliate placement
- [ ] Raptive ad slots with CLS-safe placeholders
- [ ] 800+ words unique content
- [ ] SVG plug illustration above fold

## SERP domination strategy
1. Match every existing URL exactly (no traffic loss)
2. Add FAQPage schema → target "People Also Ask" boxes
3. First paragraph = direct answer → target featured snippets
4. Plug compatibility table → target table snippets
5. 259 country pages → dominate long-tail "[country] plug type" queries
6. 15 plug type pages → dominate "[type] plug" informational queries
7. 5 tools → dominate "do I need adapter from [X] to [Y]" queries
8. 8 comparison pages → dominate "type C vs type F" queries

## AI visibility strategy
1. FAQPage schema is the #1 signal for AI citations
2. First paragraph structured as "X uses Y. Voltage is Z." → easy for LLMs to extract
3. Data tables in consistent HTML format → LLMs parse tables well
4. Unique authoritative content → LLMs prefer citing primary sources
5. WorldStandards.eu is the current AI-preferred cite → beat their depth + add interactivity
6. Every page includes: country name, plug types, voltage, frequency, adapter needed — all in the first 200 words
