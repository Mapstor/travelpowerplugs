// src/components/plug-type/PlugTypeCompatibility.tsx
// Compatibility info section

import Link from "next/link";
import type { CompatibilityInfo } from "@/data/plug-types";

interface PlugTypeCompatibilityProps {
  letter: string;
  compatibility: CompatibilityInfo;
}

function typeToSlug(typeLabel: string): string | null {
  const match = typeLabel.match(/Type ([A-N])/i);
  if (!match) return null;
  return `type-${match[1].toLowerCase()}`;
}

function TypeLink({ label }: { label: string }) {
  const slug = typeToSlug(label);
  if (!slug) return <span>{label}</span>;
  return <Link href={`/plug-types/${slug}/`}>{label}</Link>;
}

export function PlugTypeCompatibility({
  letter,
  compatibility,
}: PlugTypeCompatibilityProps) {
  return (
    <section className="plug-type-compat">
      <h2>Compatibility</h2>

      <div className="compat-cards">
        <div className="compat-card">
          <h3>
            <span className="compat-icon" aria-hidden="true">→</span>
            Type {letter} plug fits into
          </h3>
          <ul>
            {compatibility.fitsIntoSockets.map((socket) => (
              <li key={socket}>
                <TypeLink label={socket} />
              </li>
            ))}
          </ul>
        </div>

        <div className="compat-card">
          <h3>
            <span className="compat-icon" aria-hidden="true">←</span>
            Type {letter} socket accepts
          </h3>
          <ul>
            {compatibility.acceptsPlugTypes.map((plug) => (
              <li key={plug}>
                <TypeLink label={plug} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="compat-notes">
        <p>{compatibility.crossCompatNotes}</p>
      </div>

      <style jsx>{`
        .plug-type-compat {
          margin: 2.5rem 0;
        }
        .plug-type-compat h2 {
          font-family: "DM Sans", sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: #2c2520;
          margin-bottom: 1rem;
        }
        .compat-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 1rem;
        }
        @media (max-width: 600px) {
          .compat-cards {
            grid-template-columns: 1fr;
          }
        }
        .compat-card {
          background: #fff;
          border: 1px solid #e5e0da;
          border-radius: 8px;
          padding: 1.25rem;
        }
        .compat-card h3 {
          font-family: "DM Sans", sans-serif;
          font-size: 0.95rem;
          font-weight: 600;
          color: #2c2520;
          margin: 0 0 0.65rem;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .compat-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          background: #fef6f3;
          border-radius: 50%;
          font-size: 0.8rem;
          color: #c85a3a;
          flex-shrink: 0;
        }
        .compat-card ul {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }
        .compat-card li {
          font-family: "DM Sans", sans-serif;
          font-size: 0.9rem;
        }
        .compat-card li :global(a) {
          display: inline-block;
          background: #f7f5f2;
          color: #2c2520;
          text-decoration: none;
          padding: 0.3rem 0.65rem;
          border-radius: 4px;
          border: 1px solid #e5e0da;
          transition: all 0.15s ease;
        }
        .compat-card li :global(a:hover) {
          background: #fef6f3;
          border-color: #c85a3a;
          color: #c85a3a;
        }
        .compat-notes {
          background: #f7f5f2;
          border-radius: 8px;
          padding: 1rem 1.25rem;
        }
        .compat-notes p {
          font-family: "DM Sans", sans-serif;
          font-size: 0.92rem;
          color: #4a3f37;
          line-height: 1.6;
          margin: 0;
        }
      `}</style>
    </section>
  );
}
