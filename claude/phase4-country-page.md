# Phase 4 prompt — country page template (SERP + AI visibility focus)

---

This is the most important file in the project. Every country page must be engineered
to rank #1 AND to be cited by AI assistants. Do not compromise on either.

## /src/app/[country]/page.tsx

### generateStaticParams
Return ALL 259 countries from COUNTRIES array.
Each param: { country: country.slug }

### generateMetadata
```typescript
export async function generateMetadata({ params }): Promise<Metadata> {
  const country = getCountryBySlug(params.country)
  return {
    title: `${country.name} Electric Plug Types: Do You Need an Adapter? (${country.voltage}V)`,
    description: `${country.name} uses Type ${country.plugTypes.join(', ')} plugs at ${country.voltage}V/${country.frequency}Hz. Find out if you need a travel adapter and which one to buy.`,
    alternates: { canonical: `https://travelpowerplugs.com/${country.slug}/` },
    openGraph: {
      title: ...,
      description: ...,
      images: [{ url: `/og/${country.iso2.toLowerCase()}.png` }]
    }
  }
}
```

### JSON-LD structured data (CRITICAL for AI visibility)
Generate ALL of these on every country page:

**1. FAQPage** — the most important for AI citations:
```json
{
  "@type": "FAQPage",
  "mainEntity": [
    { "name": "What plug type does [Country] use?", "acceptedAnswer": { "text": "[Country] uses Type X [and Type Y] electrical outlets..." } },
    { "name": "Do I need a travel adapter for [Country]?", "acceptedAnswer": { "text": "Whether you need an adapter depends on your home country. US travelers need X, UK travelers need Y..." } },
    { "name": "What is the voltage in [Country]?", "acceptedAnswer": { "text": "The standard voltage in [Country] is [V]V at [Hz]Hz..." } },
    { "name": "Do I need a voltage converter for [Country]?", "acceptedAnswer": { "text": "..." } },
    { "name": "What is the best travel adapter for [Country]?", "acceptedAnswer": { "text": "..." } }
  ]
}
```

**2. BreadcrumbList**:
Home > [Continent] > [Country Name]

**3. WebPage** with author (Marko Visic)

### Page structure (order matters for SEO + AI)

```tsx
<article>
  {/* ABOVE THE FOLD — must answer the query immediately */}
  <h1>[Country] Electric Plug Types</h1>
  
  {/* DIRECT ANSWER — first paragraph must state facts clearly */}
  <p className="lead">
    [Country] uses Type [X] electrical outlets. The standard voltage is [V]V 
    at [Hz]Hz. [Travelers from the US / UK / EU] [will / won't] need a travel adapter.
  </p>

  {/* SVG PLUG DISPLAY — animated plugs in sockets */}
  <CountryPlugDisplay country={country} />

  {/* QUICK FACTS TABLE — structured, AI-readable */}
  <table>
    <tr><td>Plug Types</td><td>Type A, Type C, Type F</td></tr>
    <tr><td>Voltage</td><td>220V</td></tr>
    <tr><td>Frequency</td><td>50Hz</td></tr>
    <tr><td>Adapter needed for US travelers</td><td>Yes</td></tr>
    <tr><td>Voltage converter needed from US</td><td>Yes (most devices)</td></tr>
  </table>

  {/* ADAPTER FINDER WIDGET — embedded tool */}
  <AdapterFinder destinationCountry={country} />

  {/* MAIN CONTENT — unique, rewritten, 800+ words */}
  <section id="plug-types">
    <h2>Electric Socket Types in [Country]</h2>
    {/* Detailed per-plug-type explanation with SVG */}
  </section>

  <section id="do-i-need-adapter">
    <h2>Do You Need a Power Adapter in [Country]?</h2>
    {/* Per-origin-region breakdown: USA, UK, EU, AUS, Asia */}
  </section>

  <section id="voltage">
    <h2>Voltage & Frequency in [Country]</h2>
    {/* Dual voltage explanation, hair dryer warning etc. */}
  </section>

  <section id="buy-adapter">
    <h2>Recommended Adapters for [Country]</h2>
    {/* Amazon affiliate cards */}
  </section>

  {/* FAQ SECTION — mirrors JSON-LD FAQPage */}
  <section id="faq">
    <h2>Frequently Asked Questions</h2>
    {faqs.map(faq => <details><summary>{faq.q}</summary><p>{faq.a}</p></details>)}
  </section>

  {/* RELATED COUNTRIES */}
  <section>
    <h2>Other countries using the same plug type</h2>
    {/* Links to countries with same plugTypes */}
  </section>
</article>
```

### Internal linking rules
Every country page must link to:
- Its continent hub page
- 3–5 countries with same plug types ("also uses Type C: Germany, France, Spain...")
- The relevant /plug-type/type-x/ pages
- The /adapter-finder/ tool

### Amazon affiliate integration
Each country page includes 2–3 product cards:
- The correct adapter for that country (from US)
- A universal travel adapter
- A voltage converter (if voltage is different from US)
Use the Amazon affiliate tag: tracked per page category
