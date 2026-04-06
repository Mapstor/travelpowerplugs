"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import WorldMap from "./WorldMap";

interface Country {
  slug: string;
  name: string;
  plugTypes: string[];
  voltage: string;
  frequency: string;
  [key: string]: unknown;
}

const PLUG_TYPES = [
  {
    type: "A",
    subtitle: "Two flat parallel pins",
    countries: 0,
    href: "/plug-type/type-a/",
  },
  {
    type: "B",
    subtitle: "Two flat parallel pins + grounding",
    countries: 0,
    href: "/plug-type/type-b/",
  },
  {
    type: "C",
    subtitle: "Two round pins (Europlug)",
    countries: 0,
    href: "/plug-type/type-c/",
  },
  {
    type: "D",
    subtitle: "Three large round pins",
    countries: 0,
    href: "/plug-type/type-d/",
  },
  {
    type: "E",
    subtitle: "Two round pins + grounding pin",
    countries: 0,
    href: "/plug-type/type-e/",
  },
  {
    type: "F",
    subtitle: "Two round pins + grounding clips (Schuko)",
    countries: 0,
    href: "/plug-type/type-f/",
  },
  {
    type: "G",
    subtitle: "Three rectangular pins",
    countries: 0,
    href: "/plug-type/type-g/",
  },
  {
    type: "H",
    subtitle: "Three pins in V-shape",
    countries: 0,
    href: "/plug-type/type-h/",
  },
  {
    type: "I",
    subtitle: "Two angled flat pins + grounding",
    countries: 0,
    href: "/plug-type/type-i/",
  },
  {
    type: "J",
    subtitle: "Three round pins (Swiss)",
    countries: 0,
    href: "/plug-type/type-j/",
  },
  {
    type: "K",
    subtitle: "Three round pins (Danish)",
    countries: 0,
    href: "/plug-type/type-k/",
  },
  {
    type: "L",
    subtitle: "Three round pins in a row (Italian)",
    countries: 0,
    href: "/plug-type/type-l/",
  },
  {
    type: "M",
    subtitle: "Three large round pins (South African)",
    countries: 0,
    href: "/plug-type/type-m/",
  },
  {
    type: "N",
    subtitle: "Three round pins (Brazilian)",
    countries: 0,
    href: "/plug-type/type-n/",
  },
];

const REGIONS = [
  { name: "Europe", href: "/region/europe/", emoji: "🇪🇺" },
  { name: "Asia", href: "/region/asia/", emoji: "🌏" },
  { name: "Americas", href: "/region/americas/", emoji: "🌎" },
  { name: "Africa", href: "/region/africa/", emoji: "🌍" },
  { name: "Oceania", href: "/region/oceania/", emoji: "🏝️" },
  { name: "Middle East", href: "/region/middle-east/", emoji: "🕌" },
];

const TOOLS = [
  {
    title: "Do I Need an Adapter?",
    description:
      "Select where you're from and where you're going — instant answer.",
    href: "/adapter-checker/",
    icon: "🔌",
  },
  {
    title: "Voltage Compatibility",
    description: "Check if your device can handle the local voltage safely.",
    href: "/voltage-checker/",
    icon: "⚡",
  },
  {
    title: "Power Bank Calculator",
    description: "Find out if your power bank meets airline carry-on rules.",
    href: "/power-bank-calculator/",
    icon: "🔋",
  },
];

export default function HomeClient({ countries }: { countries: Country[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const plugTypeCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    countries.forEach((c) => {
      c.plugTypes?.forEach((pt: string) => {
        const letter = pt.replace("Type ", "").trim().toUpperCase();
        counts[letter] = (counts[letter] || 0) + 1;
      });
    });
    return counts;
  }, [countries]);

  const filteredCountries = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    return countries
      .filter((c) => c.name.toLowerCase().includes(q))
      .slice(0, 8);
  }, [searchQuery, countries]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsSearchFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <main>
      {/* ── Hero Section ── */}
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title">
            Travel Power Plugs
            <span className="hero-title-sub">
              World Power Outlet Guide & Adapter Checker
            </span>
          </h1>
          <p className="hero-intro">
            Find out which power plugs and outlets are used in every country,
            whether you need an adapter, and what voltage to expect. Click any
            country on the map or search below.
          </p>
        </div>
      </section>

      {/* ── World Map ── */}
      <section className="map-section">
        <div className="container">
          <div className="map-wrapper">
            <WorldMap countries={countries} />
          </div>
        </div>
      </section>

      {/* ── Search ── */}
      <section className="search-section">
        <div className="container container--narrow">
          <div className="search-wrapper" ref={searchRef}>
            <div className={`search-bar ${isSearchFocused ? "focused" : ""}`}>
              <svg
                className="search-icon"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <input
                type="text"
                placeholder="Search for a country..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                className="search-input"
                aria-label="Search for a country"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="search-clear"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
            {isSearchFocused && filteredCountries.length > 0 && (
              <ul className="search-results">
                {filteredCountries.map((c) => (
                  <li key={c.slug}>
                    <Link href={`/${c.slug}/`} className="search-result-link">
                      <span className="search-result-name">{c.name}</span>
                      <span className="search-result-plugs">
                        {c.plugTypes?.join(", ")}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            {isSearchFocused &&
              searchQuery.trim() &&
              filteredCountries.length === 0 && (
                <div className="search-no-results">
                  No countries found for &quot;{searchQuery}&quot;
                </div>
              )}
          </div>
        </div>
      </section>

      {/* ── Plug Types Grid ── */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Plug Types Around the World</h2>
          <p className="section-subtitle">
            There are 14 different plug and outlet types used across the globe.
          </p>
          <div className="plug-grid">
            {PLUG_TYPES.map((pt) => (
              <Link href={pt.href} key={pt.type} className="plug-card">
                <div className="plug-card-letter">
                  <span>{pt.type}</span>
                </div>
                <div className="plug-card-body">
                  <h3 className="plug-card-title">Type {pt.type}</h3>
                  <p className="plug-card-subtitle">{pt.subtitle}</p>
                  <span className="plug-card-count">
                    Used in {plugTypeCounts[pt.type] || "—"} countries
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Region Quick Links ── */}
      <section className="section section--alt">
        <div className="container">
          <h2 className="section-title">Browse by Region</h2>
          <div className="region-grid">
            {REGIONS.map((r) => (
              <Link href={r.href} key={r.name} className="region-card">
                <span className="region-emoji">{r.emoji}</span>
                <span className="region-name">{r.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tools ── */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Travel Power Tools</h2>
          <p className="section-subtitle">
            Quick tools to prepare your electronics for your next trip.
          </p>
          <div className="tools-grid">
            {TOOLS.map((tool) => (
              <Link href={tool.href} key={tool.title} className="tool-card">
                <span className="tool-icon">{tool.icon}</span>
                <h3 className="tool-card-title">{tool.title}</h3>
                <p className="tool-card-desc">{tool.description}</p>
                <span className="tool-card-cta">Try it →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── About Teaser ── */}
      <section className="section section--alt">
        <div className="container container--narrow">
          <div className="about-teaser">
            <h2 className="section-title">About Travel Power Plugs</h2>
            <p>
              This site started as a personal spreadsheet after one too many
              dead-battery emergencies abroad. Today it helps thousands of
              travellers prepare the right adapter before every trip. Built and
              maintained by{" "}
              <Link href="/about-me/" className="inline-link">
                Marko Visic
              </Link>
              , a traveller who learned the hard way.
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* ── Tokens ── */
        :root {
          --accent: #c85a3a;
          --accent-hover: #b04e32;
          --bg: #f7f5f2;
          --card: #ffffff;
          --text: #2c2c2c;
          --text-muted: #7a7672;
          --border: #e8e4df;
          --radius: 12px;
          --shadow: 0 1px 3px rgba(0, 0, 0, 0.06),
            0 4px 12px rgba(0, 0, 0, 0.04);
          --shadow-hover: 0 2px 8px rgba(0, 0, 0, 0.1),
            0 8px 24px rgba(0, 0, 0, 0.06);
        }

        main {
          font-family: "DM Sans", sans-serif;
          color: var(--text);
          background: var(--bg);
        }

        .container {
          max-width: 1120px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .container--narrow {
          max-width: 720px;
        }

        /* ── Hero ── */
        .hero-section {
          padding: 56px 0 24px;
          text-align: center;
        }

        .hero-title {
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.02em;
          color: var(--text);
        }

        .hero-title-sub {
          display: block;
          font-size: clamp(1rem, 2vw, 1.25rem);
          font-weight: 400;
          color: var(--text-muted);
          margin-top: 4px;
        }

        .hero-intro {
          margin-top: 16px;
          font-size: 1.05rem;
          color: var(--text-muted);
          line-height: 1.6;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        /* ── Map ── */
        .map-section {
          padding: 8px 0 32px;
        }

        .map-wrapper {
          background: var(--card);
          border-radius: var(--radius);
          box-shadow: var(--shadow);
          padding: 16px;
          overflow: hidden;
        }

        /* ── Search ── */
        .search-section {
          padding: 0 0 48px;
        }

        .search-wrapper {
          position: relative;
        }

        .search-bar {
          display: flex;
          align-items: center;
          gap: 10px;
          background: var(--card);
          border: 2px solid var(--border);
          border-radius: var(--radius);
          padding: 12px 16px;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .search-bar.focused {
          border-color: var(--accent);
          box-shadow: 0 0 0 3px rgba(200, 90, 58, 0.12);
        }

        .search-icon {
          color: var(--text-muted);
          flex-shrink: 0;
        }

        .search-input {
          flex: 1;
          border: none;
          outline: none;
          font-size: 1rem;
          font-family: inherit;
          background: transparent;
          color: var(--text);
        }

        .search-input::placeholder {
          color: var(--text-muted);
        }

        .search-clear {
          background: none;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          font-size: 0.9rem;
          padding: 4px;
        }

        .search-results {
          position: absolute;
          top: calc(100% + 4px);
          left: 0;
          right: 0;
          background: var(--card);
          border-radius: var(--radius);
          box-shadow: var(--shadow-hover);
          border: 1px solid var(--border);
          list-style: none;
          padding: 4px;
          margin: 0;
          z-index: 50;
        }

        .search-result-link {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 14px;
          border-radius: 8px;
          text-decoration: none;
          color: var(--text);
          transition: background 0.15s;
        }

        .search-result-link:hover {
          background: var(--bg);
        }

        .search-result-name {
          font-weight: 500;
        }

        .search-result-plugs {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .search-no-results {
          position: absolute;
          top: calc(100% + 4px);
          left: 0;
          right: 0;
          background: var(--card);
          border-radius: var(--radius);
          box-shadow: var(--shadow-hover);
          border: 1px solid var(--border);
          padding: 16px;
          color: var(--text-muted);
          text-align: center;
          z-index: 50;
        }

        /* ── Sections ── */
        .section {
          padding: 56px 0;
        }

        .section--alt {
          background: var(--card);
        }

        .section-title {
          font-size: 1.5rem;
          font-weight: 700;
          text-align: center;
          letter-spacing: -0.01em;
          margin-bottom: 6px;
        }

        .section-subtitle {
          text-align: center;
          color: var(--text-muted);
          margin-bottom: 32px;
          font-size: 1rem;
        }

        /* ── Plug Grid ── */
        .plug-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 16px;
        }

        .plug-card {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 16px;
          text-decoration: none;
          color: var(--text);
          transition: box-shadow 0.2s, transform 0.2s;
        }

        .plug-card:hover {
          box-shadow: var(--shadow-hover);
          transform: translateY(-2px);
        }

        .plug-card-letter {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: var(--bg);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--accent);
          flex-shrink: 0;
        }

        .plug-card-body {
          min-width: 0;
        }

        .plug-card-title {
          font-size: 1rem;
          font-weight: 600;
          margin: 0;
        }

        .plug-card-subtitle {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin: 2px 0 6px;
          line-height: 1.35;
        }

        .plug-card-count {
          font-size: 0.78rem;
          color: var(--accent);
          font-weight: 500;
        }

        /* ── Region Grid ── */
        .region-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          gap: 12px;
          margin-top: 24px;
        }

        .region-card {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 16px 20px;
          background: var(--bg);
          border-radius: var(--radius);
          text-decoration: none;
          color: var(--text);
          font-weight: 500;
          transition: box-shadow 0.2s, transform 0.2s;
          border: 1px solid transparent;
        }

        .region-card:hover {
          border-color: var(--border);
          box-shadow: var(--shadow);
          transform: translateY(-1px);
        }

        .region-emoji {
          font-size: 1.5rem;
        }

        .region-name {
          font-size: 1rem;
        }

        /* ── Tools Grid ── */
        .tools-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 16px;
        }

        .tool-card {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 24px;
          text-decoration: none;
          color: var(--text);
          transition: box-shadow 0.2s, transform 0.2s;
        }

        .tool-card:hover {
          box-shadow: var(--shadow-hover);
          transform: translateY(-2px);
        }

        .tool-icon {
          font-size: 2rem;
          display: block;
          margin-bottom: 12px;
        }

        .tool-card-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0 0 6px;
        }

        .tool-card-desc {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.5;
          margin: 0 0 14px;
        }

        .tool-card-cta {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--accent);
        }

        /* ── About Teaser ── */
        .about-teaser {
          text-align: center;
        }

        .about-teaser p {
          color: var(--text-muted);
          line-height: 1.7;
          font-size: 1rem;
        }

        .inline-link {
          color: var(--accent);
          text-decoration: underline;
          text-underline-offset: 2px;
        }

        .inline-link:hover {
          color: var(--accent-hover);
        }

        /* ── Mobile ── */
        @media (max-width: 640px) {
          .hero-section {
            padding: 40px 0 16px;
          }

          .section {
            padding: 40px 0;
          }

          .plug-grid {
            grid-template-columns: 1fr;
          }

          .tools-grid {
            grid-template-columns: 1fr;
          }

          .region-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </main>
  );
}
