"use client";

import { useState, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";

/**
 * WorldMap component for travelpowerplugs.com
 *
 * This component uses react-simple-maps to render an interactive SVG world map.
 * Install dependency: npm install react-simple-maps
 *
 * If react-simple-maps is not available or you prefer a lighter approach,
 * replace with a custom SVG or a different mapping library.
 *
 * The component expects each country object to have:
 *   - name: string
 *   - slug: string (WordPress URL slug)
 *   - plugTypes: string[] (e.g. ["Type A", "Type B"])
 *   - iso2?: string (ISO 3166-1 alpha-2 code for map matching)
 */

interface Country {
  slug: string;
  name: string;
  plugTypes: string[];
  voltage: string;
  frequency: string;
  iso2?: string;
  iso3?: string;
  [key: string]: unknown;
}

interface WorldMapProps {
  countries: Country[];
}

// ── Color families by dominant plug type ──
const PLUG_FAMILY_COLORS: Record<string, string> = {
  AB: "#3b82f6",    // Blue — Americas, Japan
  CEF: "#22c55e",   // Green — Europe, most of Asia/Africa
  G: "#ef4444",     // Red — UK, Singapore, UAE
  I: "#f97316",     // Orange — Australia, NZ, China
  mixed: "#a855f7", // Purple — mixed/other
};

function getCountryColor(plugTypes: string[]): string {
  if (!plugTypes || plugTypes.length === 0) return "#d4d0cb";

  const types = plugTypes.map((t) =>
    t.replace("Type ", "").trim().toUpperCase()
  );

  // Check dominant family
  const hasAB = types.some((t) => t === "A" || t === "B");
  const hasCEF = types.some((t) => t === "C" || t === "E" || t === "F");
  const hasG = types.some((t) => t === "G");
  const hasI = types.some((t) => t === "I");

  const families = [hasAB, hasCEF, hasG, hasI].filter(Boolean).length;

  if (families > 1) return PLUG_FAMILY_COLORS.mixed;
  if (hasAB) return PLUG_FAMILY_COLORS.AB;
  if (hasCEF) return PLUG_FAMILY_COLORS.CEF;
  if (hasG) return PLUG_FAMILY_COLORS.G;
  if (hasI) return PLUG_FAMILY_COLORS.I;

  return PLUG_FAMILY_COLORS.mixed;
}

export default function WorldMap({ countries }: WorldMapProps) {
  const router = useRouter();
  const [tooltip, setTooltip] = useState<{
    name: string;
    plugTypes: string[];
    x: number;
    y: number;
  } | null>(null);

  // Build lookup maps for ISO codes
  const countryByIso2 = useMemo(() => {
    const map: Record<string, Country> = {};
    countries.forEach((c) => {
      if (c.iso2) map[c.iso2.toUpperCase()] = c;
    });
    return map;
  }, [countries]);

  const countryByIso3 = useMemo(() => {
    const map: Record<string, Country> = {};
    countries.forEach((c) => {
      if (c.iso3) map[c.iso3.toUpperCase()] = c;
    });
    return map;
  }, [countries]);

  const countryByName = useMemo(() => {
    const map: Record<string, Country> = {};
    countries.forEach((c) => {
      map[c.name.toLowerCase()] = c;
    });
    return map;
  }, [countries]);

  const findCountry = useCallback(
    (geo: { properties: Record<string, string> }): Country | undefined => {
      const props = geo.properties;
      // Try ISO-A2
      if (props.ISO_A2 && countryByIso2[props.ISO_A2.toUpperCase()]) {
        return countryByIso2[props.ISO_A2.toUpperCase()];
      }
      // Try ISO-A3
      if (props.ISO_A3 && countryByIso3[props.ISO_A3.toUpperCase()]) {
        return countryByIso3[props.ISO_A3.toUpperCase()];
      }
      // Try name match
      const name = (props.NAME || props.name || "").toLowerCase();
      return countryByName[name];
    },
    [countryByIso2, countryByIso3, countryByName]
  );

  const handleMouseEnter = useCallback(
    (
      geo: { properties: Record<string, string> },
      evt: React.MouseEvent
    ) => {
      const country = findCountry(geo);
      if (country) {
        setTooltip({
          name: country.name,
          plugTypes: country.plugTypes,
          x: evt.clientX,
          y: evt.clientY,
        });
      }
    },
    [findCountry]
  );

  const handleMouseLeave = useCallback(() => {
    setTooltip(null);
  }, []);

  const handleClick = useCallback(
    (geo: { properties: Record<string, string> }) => {
      const country = findCountry(geo);
      if (country) {
        router.push(`/${country.slug}/`);
      }
    },
    [findCountry, router]
  );

  /**
   * This component is designed to work with react-simple-maps.
   * If that library is installed, uncomment the import and the
   * ComposableMap/Geographies/Geography rendering below.
   *
   * For the initial build, we render a placeholder SVG map
   * with a searchable fallback list on mobile.
   *
   * To use react-simple-maps:
   * 1. npm install react-simple-maps @types/react-simple-maps
   * 2. Download world-110m.json to /public/data/
   * 3. Uncomment the react-simple-maps code below
   */

  return (
    <div className="world-map">
      {/* ── Legend ── */}
      <div className="map-legend">
        <div className="legend-item">
          <span
            className="legend-dot"
            style={{ background: PLUG_FAMILY_COLORS.AB }}
          />
          <span>Type A/B</span>
        </div>
        <div className="legend-item">
          <span
            className="legend-dot"
            style={{ background: PLUG_FAMILY_COLORS.CEF }}
          />
          <span>Type C/E/F</span>
        </div>
        <div className="legend-item">
          <span
            className="legend-dot"
            style={{ background: PLUG_FAMILY_COLORS.G }}
          />
          <span>Type G</span>
        </div>
        <div className="legend-item">
          <span
            className="legend-dot"
            style={{ background: PLUG_FAMILY_COLORS.I }}
          />
          <span>Type I</span>
        </div>
        <div className="legend-item">
          <span
            className="legend-dot"
            style={{ background: PLUG_FAMILY_COLORS.mixed }}
          />
          <span>Mixed</span>
        </div>
      </div>

      {/*
       * ── react-simple-maps rendering ──
       * Uncomment once the library is installed:
       *
       * import {
       *   ComposableMap,
       *   Geographies,
       *   Geography,
       *   ZoomableGroup,
       * } from "react-simple-maps";
       *
       * <ComposableMap
       *   projection="geoMercator"
       *   projectionConfig={{ scale: 140, center: [10, 30] }}
       *   style={{ width: "100%", height: "auto" }}
       * >
       *   <ZoomableGroup>
       *     <Geographies geography="/data/world-110m.json">
       *       {({ geographies }) =>
       *         geographies.map((geo) => {
       *           const country = findCountry(geo);
       *           const fill = country
       *             ? getCountryColor(country.plugTypes)
       *             : "#d4d0cb";
       *           return (
       *             <Geography
       *               key={geo.rsmKey}
       *               geography={geo}
       *               fill={fill}
       *               stroke="#f7f5f2"
       *               strokeWidth={0.5}
       *               style={{
       *                 default: { outline: "none" },
       *                 hover: {
       *                   fill: "#c85a3a",
       *                   outline: "none",
       *                   cursor: "pointer",
       *                 },
       *                 pressed: { outline: "none" },
       *               }}
       *               onMouseEnter={(evt) => handleMouseEnter(geo, evt)}
       *               onMouseLeave={handleMouseLeave}
       *               onClick={() => handleClick(geo)}
       *             />
       *           );
       *         })
       *       }
       *     </Geographies>
       *   </ZoomableGroup>
       * </ComposableMap>
       */}

      {/* ── Placeholder until react-simple-maps is wired up ── */}
      <div className="map-placeholder">
        <p className="map-placeholder-text">
          Interactive world map loads here.
          <br />
          <span>
            Install <code>react-simple-maps</code> and add{" "}
            <code>world-110m.json</code> to <code>/public/data/</code> to
            activate.
          </span>
        </p>
        <p className="map-placeholder-hint">
          Use the search bar above to find any country.
        </p>
      </div>

      {/* ── Mobile fallback: country list grouped by region ── */}
      <div className="mobile-country-list">
        <p className="mobile-list-header">
          Or browse all {countries.length} countries:
        </p>
        <div className="mobile-list-cols">
          {countries
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((c) => (
              <a
                key={c.slug}
                href={`/${c.slug}/`}
                className="mobile-country-link"
                style={{
                  borderLeft: `3px solid ${getCountryColor(c.plugTypes)}`,
                }}
              >
                {c.name}
              </a>
            ))}
        </div>
      </div>

      {/* ── Tooltip ── */}
      {tooltip && (
        <div
          className="map-tooltip"
          style={{
            left: tooltip.x + 12,
            top: tooltip.y - 40,
          }}
        >
          <strong>{tooltip.name}</strong>
          <span>{tooltip.plugTypes?.join(", ") || "—"}</span>
        </div>
      )}

      <style jsx>{`
        .world-map {
          position: relative;
        }

        .map-legend {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          justify-content: center;
          margin-bottom: 16px;
          font-size: 0.82rem;
          color: #7a7672;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .legend-dot {
          width: 10px;
          height: 10px;
          border-radius: 3px;
          display: inline-block;
        }

        /* ── Placeholder ── */
        .map-placeholder {
          min-height: 320px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #e8e4df 0%, #f7f5f2 100%);
          border-radius: 8px;
          text-align: center;
          padding: 32px;
        }

        .map-placeholder-text {
          color: #7a7672;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .map-placeholder-text code {
          background: #fff;
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 0.85em;
        }

        .map-placeholder-hint {
          margin-top: 8px;
          font-size: 0.85rem;
          color: #a09c97;
        }

        /* ── Mobile country list ── */
        .mobile-country-list {
          margin-top: 24px;
        }

        .mobile-list-header {
          font-size: 0.9rem;
          color: #7a7672;
          text-align: center;
          margin-bottom: 12px;
        }

        .mobile-list-cols {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          gap: 4px;
        }

        .mobile-country-link {
          display: block;
          padding: 6px 10px;
          font-size: 0.85rem;
          color: #2c2c2c;
          text-decoration: none;
          border-radius: 4px;
          transition: background 0.15s;
        }

        .mobile-country-link:hover {
          background: #f7f5f2;
        }

        /* Desktop: hide mobile list when map is present */
        @media (min-width: 769px) {
          /* Show both for now since placeholder is shown */
        }

        /* ── Tooltip ── */
        .map-tooltip {
          position: fixed;
          background: #2c2c2c;
          color: #fff;
          padding: 8px 12px;
          border-radius: 8px;
          font-size: 0.82rem;
          pointer-events: none;
          z-index: 100;
          display: flex;
          flex-direction: column;
          gap: 2px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .map-tooltip strong {
          font-weight: 600;
        }

        .map-tooltip span {
          font-size: 0.78rem;
          opacity: 0.85;
        }
      `}</style>
    </div>
  );
}
