// src/components/plug-type/PlugTypeRelated.tsx
// Related plug types navigation section

import Link from "next/link";
import { plugTypes } from "@/data/plug-types";

interface PlugTypeRelatedProps {
  currentLetter: string;
  relatedSlugs: string[];
}

export function PlugTypeRelated({
  currentLetter,
  relatedSlugs,
}: PlugTypeRelatedProps) {
  const relatedData = relatedSlugs
    .map((slug) => plugTypes[slug])
    .filter(Boolean);

  if (relatedData.length === 0) return null;

  return (
    <section className="plug-type-related">
      <h2>Related Plug Types</h2>
      <p className="related-intro">
        These plug types are commonly confused with or compared to Type{" "}
        {currentLetter}.
      </p>
      <div className="related-grid">
        {relatedData.map((pt) => (
          <Link
            key={pt.slug}
            href={`/plug-types/${pt.slug}/`}
            className="related-card"
          >
            <span className="related-badge">Type {pt.letter}</span>
            <span className="related-subtitle">{pt.subtitle}</span>
            {pt.commonName && (
              <span className="related-common">{pt.commonName}</span>
            )}
          </Link>
        ))}
      </div>

      <style jsx>{`
        .plug-type-related {
          margin: 2.5rem 0;
        }
        .plug-type-related h2 {
          font-family: "DM Sans", sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: #2c2520;
          margin-bottom: 0.4rem;
        }
        .related-intro {
          font-family: "DM Sans", sans-serif;
          font-size: 0.92rem;
          color: #6b5e53;
          margin-bottom: 1rem;
        }
        .related-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 0.75rem;
        }
        .related-grid :global(.related-card) {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          background: #fff;
          border: 1px solid #e5e0da;
          border-radius: 8px;
          padding: 1rem 1.1rem;
          text-decoration: none;
          transition: all 0.15s ease;
        }
        .related-grid :global(.related-card:hover) {
          border-color: #c85a3a;
          box-shadow: 0 2px 8px rgba(200, 90, 58, 0.08);
        }
        .related-badge {
          font-family: "DM Sans", sans-serif;
          font-weight: 700;
          font-size: 1.1rem;
          color: #c85a3a;
        }
        .related-subtitle {
          font-family: "DM Sans", sans-serif;
          font-size: 0.88rem;
          color: #2c2520;
          font-weight: 500;
          line-height: 1.35;
        }
        .related-common {
          font-family: "DM Sans", sans-serif;
          font-size: 0.8rem;
          color: #a09488;
        }
      `}</style>
    </section>
  );
}
