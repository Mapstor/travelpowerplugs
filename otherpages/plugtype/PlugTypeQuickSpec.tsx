// src/components/plug-type/PlugTypeQuickSpec.tsx
// Quick spec card for plug type pages

import type { PlugTypeSpec } from "@/data/plug-types";

interface PlugTypeQuickSpecProps {
  letter: string;
  spec: PlugTypeSpec;
  commonName?: string;
}

export function PlugTypeQuickSpec({
  letter,
  spec,
  commonName,
}: PlugTypeQuickSpecProps) {
  return (
    <div className="plug-type-quick-spec">
      <div className="spec-header">
        <span className="spec-type-badge">Type {letter}</span>
        {commonName && <span className="spec-common-name">{commonName}</span>}
      </div>
      <dl className="spec-grid">
        <div className="spec-item">
          <dt>Pins</dt>
          <dd>
            {spec.pinCount} — {spec.pinShape}
          </dd>
        </div>
        {spec.pinDiameter && (
          <div className="spec-item">
            <dt>Pin size</dt>
            <dd>{spec.pinDiameter}</dd>
          </div>
        )}
        {spec.pinSpacing && (
          <div className="spec-item">
            <dt>Spacing</dt>
            <dd>{spec.pinSpacing}</dd>
          </div>
        )}
        <div className="spec-item">
          <dt>Rated</dt>
          <dd>
            {spec.ratedAmps}
            {spec.maxWatts ? ` / ${spec.maxWatts}` : ""}
          </dd>
        </div>
        <div className="spec-item">
          <dt>Grounded</dt>
          <dd>{spec.grounded ? "Yes" : "No"}</dd>
        </div>
        <div className="spec-item">
          <dt>Voltage</dt>
          <dd>{spec.voltageRange}</dd>
        </div>
      </dl>

      <style jsx>{`
        .plug-type-quick-spec {
          background: #fff;
          border: 1px solid #e5e0da;
          border-left: 4px solid #c85a3a;
          border-radius: 8px;
          padding: 1.5rem;
          margin: 1.5rem 0 2rem;
        }
        .spec-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }
        .spec-type-badge {
          background: #c85a3a;
          color: #fff;
          font-family: "DM Sans", sans-serif;
          font-weight: 700;
          font-size: 0.85rem;
          padding: 0.25rem 0.65rem;
          border-radius: 4px;
          letter-spacing: 0.02em;
          text-transform: uppercase;
        }
        .spec-common-name {
          font-family: "DM Sans", sans-serif;
          color: #6b5e53;
          font-size: 0.9rem;
          font-weight: 500;
        }
        .spec-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 0.75rem 1.5rem;
          margin: 0;
          padding: 0;
        }
        .spec-item {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }
        .spec-item dt {
          font-family: "DM Sans", sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #a09488;
        }
        .spec-item dd {
          font-family: "DM Sans", sans-serif;
          font-size: 0.95rem;
          color: #2c2520;
          margin: 0;
          line-height: 1.4;
        }
      `}</style>
    </div>
  );
}
