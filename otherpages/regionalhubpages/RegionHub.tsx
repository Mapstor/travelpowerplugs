import { Metadata } from "next";
import Link from "next/link";
import { getAllCountries } from "@/data/countries";
import { RegionConfig, countrySlug } from "@/lib/region-data";

/* ── Types ── */

interface CountryRow {
  name: string;
  plugTypes: string[];
  voltage: string;
  frequency: string;
  adapterFromUS: string;
  adapterFromUK: string;
}

/* ── Helpers ── */

/**
 * Resolve country data from the data files for a given region config.
 * Falls back gracefully if a country file doesn't exist yet.
 */
function getCountryRows(region: RegionConfig): CountryRow[] {
  const all = getAllCountries(); // returns CountryPlugData[]

  const lookup = new Map(
    all.map((c: any) => [c.name?.toLowerCase(), c])
  );

  return region.countries
    .map((name) => {
      const c = lookup.get(name.toLowerCase());
      if (!c) return null;

      const plugTypes: string[] = Array.isArray(c.plugTypes)
        ? c.plugTypes
        : typeof c.plugTypes === "string"
        ? c.plugTypes.split(",").map((s: string) => s.trim())
        : [];

      const voltage =
        typeof c.voltage === "string" ? c.voltage : `${c.voltage} V`;
      const frequency =
        typeof c.frequency === "string" ? c.frequency : `${c.frequency} Hz`;

      // Determine adapter need heuristics
      const usPlugs = ["A", "B"];
      const ukPlugs = ["G"];
      const hasUS = plugTypes.some((p) => usPlugs.includes(p));
      const hasUK = plugTypes.some((p) => ukPlugs.includes(p));

      return {
        name: c.name ?? name,
        plugTypes,
        voltage,
        frequency,
        adapterFromUS: hasUS ? "No" : "Yes",
        adapterFromUK: hasUK ? "No" : "Yes",
      } satisfies CountryRow;
    })
    .filter(Boolean) as CountryRow[];
}

/**
 * Collect all unique plug type letters mentioned in the region
 * so we can link to plug-type pages.
 */
function uniquePlugTypes(rows: CountryRow[]): string[] {
  const set = new Set<string>();
  for (const r of rows) r.plugTypes.forEach((p) => set.add(p));
  return Array.from(set).sort();
}

/* ── FAQ Schema ── */

function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

/* ── Metadata generator (called from each page.tsx) ── */

export function buildRegionMetadata(region: RegionConfig): Metadata {
  return {
    title: region.title,
    description: region.metaDescription,
    alternates: { canonical: `/${region.slug}/` },
  };
}

/* ── Main component ── */

export default function RegionHub({ region }: { region: RegionConfig }) {
  const rows = getCountryRows(region);
  const plugTypes = uniquePlugTypes(rows);

  return (
    <>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(region.faqs)),
        }}
      />

      <article className="region-hub">
        {/* ── H1 ── */}
        <header className="region-hub__header">
          <h1>{region.title}</h1>
          <p className="region-hub__overview">{region.overview}</p>
        </header>

        {/* ── Summary table ── */}
        <section className="region-hub__table-section">
          <h2>
            What plug type does each country in {region.name} use?
          </h2>

          <div className="region-hub__table-wrap">
            <table className="region-hub__table">
              <thead>
                <tr>
                  <th>Country</th>
                  <th>Plug Types</th>
                  <th>Voltage</th>
                  <th>Frequency</th>
                  <th>Adapter from US?</th>
                  <th>Adapter from UK?</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.name}>
                    <td>
                      <Link href={`/${countrySlug(r.name)}/`}>
                        {r.name}
                      </Link>
                    </td>
                    <td>
                      <span className="plug-badges">
                        {r.plugTypes.map((p) => (
                          <Link
                            key={p}
                            href={`/plug-types/type-${p.toLowerCase()}/`}
                            className="plug-badge"
                          >
                            {p}
                          </Link>
                        ))}
                      </span>
                    </td>
                    <td>{r.voltage}</td>
                    <td>{r.frequency}</td>
                    <td
                      className={
                        r.adapterFromUS === "Yes"
                          ? "adapter-yes"
                          : "adapter-no"
                      }
                    >
                      {r.adapterFromUS}
                    </td>
                    <td
                      className={
                        r.adapterFromUK === "Yes"
                          ? "adapter-yes"
                          : "adapter-no"
                      }
                    >
                      {r.adapterFromUK}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Key things to know ── */}
        <section className="region-hub__insights">
          <h2>Key things to know about {region.name} power plugs</h2>
          <ul className="region-hub__insights-list">
            {region.keyInsights.map((insight, i) => (
              <li key={i}>{insight}</li>
            ))}
          </ul>
        </section>

        {/* ── Country cards grid ── */}
        <section className="region-hub__grid-section">
          <h2>Browse every country in {region.name}</h2>
          <div className="region-hub__grid">
            {rows.map((r) => (
              <Link
                key={r.name}
                href={`/${countrySlug(r.name)}/`}
                className="country-card"
              >
                <span className="country-card__name">{r.name}</span>
                <span className="country-card__meta">
                  <span className="plug-badges plug-badges--sm">
                    {r.plugTypes.map((p) => (
                      <span key={p} className="plug-badge plug-badge--sm">
                        {p}
                      </span>
                    ))}
                  </span>
                  <span className="country-card__voltage">{r.voltage}</span>
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="region-hub__faq">
          <h2>Frequently asked questions — {region.name} power plugs</h2>
          <dl className="region-hub__faq-list">
            {region.faqs.map((f, i) => (
              <div key={i} className="faq-item">
                <dt>{f.question}</dt>
                <dd>{f.answer}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ── Internal links footer ── */}
        <nav className="region-hub__links" aria-label="Related resources">
          <h2>Related plug type guides</h2>
          <ul className="region-hub__plug-links">
            {plugTypes.map((p) => (
              <li key={p}>
                <Link href={`/plug-types/type-${p.toLowerCase()}/`}>
                  Type {p} Plug Guide
                </Link>
              </li>
            ))}
          </ul>

          <p className="region-hub__tool-cta">
            Not sure what you need?{" "}
            <Link href="/do-i-need-an-adapter/">
              Try the "Do I Need an Adapter?" tool →
            </Link>
          </p>
        </nav>
      </article>
    </>
  );
}
