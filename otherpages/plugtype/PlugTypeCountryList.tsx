// src/components/plug-type/PlugTypeCountryList.tsx
// Country list grouped by continent with links to country pages

import Link from "next/link";
import { countrySlug } from "@/data/plug-types";

interface PlugTypeCountryListProps {
  letter: string;
  continentGrouping: Record<string, string[]>;
  phasingOutNote?: string;
}

export function PlugTypeCountryList({
  letter,
  continentGrouping,
  phasingOutNote,
}: PlugTypeCountryListProps) {
  const totalCountries = Object.values(continentGrouping).reduce(
    (sum, list) => sum + list.length,
    0
  );

  return (
    <section className="plug-type-countries">
      <h2>Countries That Use Type {letter}</h2>
      <p className="country-count">
        Type {letter} is used in <strong>{totalCountries} countries and territories</strong> across{" "}
        {Object.keys(continentGrouping).length} regions.
      </p>

      {phasingOutNote && (
        <div className="phasing-out-note">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <circle cx="8" cy="8" r="7" stroke="#c85a3a" strokeWidth="1.5" />
            <path d="M8 4.5v4M8 10.5v.5" stroke="#c85a3a" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span>{phasingOutNote}</span>
        </div>
      )}

      <div className="continent-grid">
        {Object.entries(continentGrouping).map(([continent, countries]) => (
          <div key={continent} className="continent-group">
            <h3>{continent}</h3>
            <ul>
              {countries.map((country) => (
                <li key={country}>
                  <Link href={`/${countrySlug(country)}/`}>{country}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <style jsx>{`
        .plug-type-countries {
          margin: 2.5rem 0;
        }
        .plug-type-countries h2 {
          font-family: "DM Sans", sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: #2c2520;
          margin-bottom: 0.5rem;
        }
        .country-count {
          font-family: "DM Sans", sans-serif;
          color: #6b5e53;
          font-size: 0.95rem;
          margin-bottom: 1rem;
        }
        .phasing-out-note {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          background: #fef6f3;
          border: 1px solid #f0c9bb;
          border-radius: 6px;
          padding: 0.75rem 1rem;
          margin-bottom: 1.25rem;
          font-family: "DM Sans", sans-serif;
          font-size: 0.9rem;
          color: #8b4a2f;
          line-height: 1.45;
        }
        .phasing-out-note svg {
          flex-shrink: 0;
          margin-top: 2px;
        }
        .continent-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 1.25rem;
        }
        .continent-group {
          background: #fff;
          border: 1px solid #e5e0da;
          border-radius: 8px;
          padding: 1rem 1.25rem;
        }
        .continent-group h3 {
          font-family: "DM Sans", sans-serif;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #c85a3a;
          margin: 0 0 0.5rem;
          padding-bottom: 0.4rem;
          border-bottom: 1px solid #f0ebe6;
        }
        .continent-group ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .continent-group li {
          font-family: "DM Sans", sans-serif;
          font-size: 0.9rem;
          line-height: 1.7;
        }
        .continent-group li :global(a) {
          color: #2c2520;
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border-color 0.15s ease;
        }
        .continent-group li :global(a:hover) {
          border-bottom-color: #c85a3a;
          color: #c85a3a;
        }
      `}</style>
    </section>
  );
}
