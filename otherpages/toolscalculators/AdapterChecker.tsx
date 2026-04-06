"use client";

import { useState, useMemo } from "react";
import SearchableDropdown from "@/components/SearchableDropdown";
import PlugBadge from "@/components/PlugBadge";
import ResultCard from "@/components/ResultCard";
import {
  checkCompatibility,
  getAdapterRecommendation,
} from "@/lib/plug-compatibility";

interface CountryEntry {
  slug: string;
  name: string;
  plugTypes: string[];
  voltage: string;
  frequency: string;
}

interface AdapterCheckerProps {
  countries: CountryEntry[];
}

export default function AdapterChecker({ countries }: AdapterCheckerProps) {
  const [fromSlug, setFromSlug] = useState("");
  const [toSlug, setToSlug] = useState("");

  const options = useMemo(
    () =>
      countries
        .slice()
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((c) => ({ value: c.slug, label: c.name })),
    [countries]
  );

  const from = countries.find((c) => c.slug === fromSlug);
  const to = countries.find((c) => c.slug === toSlug);

  const result = useMemo(() => {
    if (!from || !to) return null;
    return checkCompatibility(
      from.plugTypes,
      to.plugTypes,
      from.voltage,
      to.voltage,
      from.frequency,
      to.frequency
    );
  }, [from, to]);

  const statusMap = {
    compatible: "safe",
    partial: "caution",
    incompatible: "danger",
  } as const;

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 16,
        }}
        className="adapter-inputs"
      >
        <SearchableDropdown
          label="Traveling from"
          options={options}
          value={fromSlug}
          onChange={setFromSlug}
          placeholder="Select your home country"
        />
        <SearchableDropdown
          label="Going to"
          options={options}
          value={toSlug}
          onChange={setToSlug}
          placeholder="Select your destination"
        />
      </div>

      <style>{`@media(max-width:640px){.adapter-inputs{grid-template-columns:1fr !important}}`}</style>

      {result && from && to && (
        <ResultCard status={statusMap[result.status]}>
          {/* Country summaries */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
              marginBottom: 16,
            }}
            className="adapter-inputs"
          >
            <CountrySummary
              label="From"
              name={from.name}
              plugTypes={from.plugTypes}
              voltage={from.voltage}
            />
            <CountrySummary
              label="To"
              name={to.name}
              plugTypes={to.plugTypes}
              voltage={to.voltage}
            />
          </div>

          {/* Verdict */}
          <div style={{ marginBottom: 12 }}>
            {result.status === "compatible" && (
              <p style={{ fontSize: "1.05rem", fontWeight: 600, color: "#2d8a4e", margin: 0 }}>
                ✅ No adapter needed — {from.name} uses Type{" "}
                {from.plugTypes.join("/")} which fits {to.name}&apos;s Type{" "}
                {to.plugTypes.join("/")} sockets.
              </p>
            )}
            {result.status === "incompatible" && (
              <p style={{ fontSize: "1.05rem", fontWeight: 600, color: "#c85a3a", margin: 0 }}>
                ❌ Adapter required — {from.name}&apos;s Type{" "}
                {from.plugTypes.join("/")} won&apos;t fit {to.name}&apos;s Type{" "}
                {to.plugTypes.join("/")} sockets.
              </p>
            )}
            {result.status === "partial" && (
              <p style={{ fontSize: "1.05rem", fontWeight: 600, color: "#b8860b", margin: 0 }}>
                ⚠️ Partial compatibility — some of your plugs may fit, others
                won&apos;t. Type {result.matchingFromTypes.join("/")} will work,
                but Type {result.nonMatchingFromTypes.join("/")} will not.
              </p>
            )}
          </div>

          {/* Voltage check */}
          <div
            style={{
              padding: "12px 16px",
              background: "rgba(255,255,255,0.6)",
              borderRadius: 8,
              marginBottom: 12,
              fontSize: "0.92rem",
              color: "#4a4540",
            }}
          >
            <strong>Voltage:</strong>{" "}
            {result.voltageOk ? (
              <span>
                {result.fromVoltage} → {result.toVoltage} — compatible. No
                voltage converter needed for dual-voltage devices (most modern
                electronics).
              </span>
            ) : (
              <span style={{ color: "#c85a3a" }}>
                {result.fromVoltage} → {result.toVoltage} — different voltage
                standards (Δ{result.voltageDiff}V). You may need a voltage
                converter for single-voltage devices. Check your device labels.
              </span>
            )}
            {!result.frequencyMatch && (
              <span style={{ display: "block", marginTop: 4, color: "#b8860b" }}>
                Frequency differs ({result.fromFrequency} → {result.toFrequency}).
                Most devices handle this fine, but motorized appliances (clocks,
                record players) may run at wrong speed.
              </span>
            )}
          </div>

          {/* Adapter recommendation */}
          {result.nonMatchingFromTypes.length > 0 && (
            <div
              style={{
                padding: "12px 16px",
                background: "rgba(255,255,255,0.6)",
                borderRadius: 8,
                marginBottom: 12,
                fontSize: "0.92rem",
                color: "#4a4540",
              }}
            >
              <strong>What to buy:</strong>{" "}
              {getAdapterRecommendation(result.nonMatchingFromTypes, to.plugTypes)}
            </div>
          )}

          {/* Links */}
          <div style={{ fontSize: "0.85rem", color: "#7a756e", marginTop: 8 }}>
            Learn more:{" "}
            <a
              href={`/${from.slug}/`}
              style={{ color: "#c85a3a", textDecoration: "underline" }}
            >
              {from.name} power plugs
            </a>{" "}
            •{" "}
            <a
              href={`/${to.slug}/`}
              style={{ color: "#c85a3a", textDecoration: "underline" }}
            >
              {to.name} power plugs
            </a>
          </div>
        </ResultCard>
      )}
    </div>
  );
}

function CountrySummary({
  label,
  name,
  plugTypes,
  voltage,
}: {
  label: string;
  name: string;
  plugTypes: string[];
  voltage: string;
}) {
  return (
    <div>
      <p
        style={{
          margin: "0 0 6px",
          fontSize: "0.78rem",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.04em",
          color: "#7a756e",
        }}
      >
        {label}
      </p>
      <p style={{ margin: "0 0 6px", fontWeight: 600, color: "#2c2824" }}>
        {name}
      </p>
      <div style={{ display: "flex", gap: 4, flexWrap: "wrap", marginBottom: 4 }}>
        {plugTypes.map((t) => (
          <PlugBadge key={t} type={t} size="sm" />
        ))}
      </div>
      <p style={{ margin: 0, fontSize: "0.85rem", color: "#5a554e" }}>
        {voltage}
      </p>
    </div>
  );
}
