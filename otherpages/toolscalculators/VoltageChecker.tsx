"use client";

import { useState, useMemo } from "react";
import SearchableDropdown from "@/components/SearchableDropdown";
import ResultCard from "@/components/ResultCard";
import { parseVoltageRange } from "@/lib/plug-compatibility";

interface CountryEntry {
  slug: string;
  name: string;
  voltage: string;
  frequency: string;
}

interface VoltageCheckerProps {
  countries: CountryEntry[];
}

type Preset = {
  label: string;
  min: number;
  max: number;
};

const PRESETS: Preset[] = [
  { label: "100-240V (dual voltage)", min: 100, max: 240 },
  { label: "120V (US/Japan)", min: 120, max: 120 },
  { label: "230V (Europe/AU)", min: 230, max: 230 },
];

export default function VoltageChecker({ countries }: VoltageCheckerProps) {
  const [countrySlug, setCountrySlug] = useState("");
  const [activePreset, setActivePreset] = useState<number | null>(null);
  const [customVoltage, setCustomVoltage] = useState("");
  const [showCustom, setShowCustom] = useState(false);

  const options = useMemo(
    () =>
      countries
        .slice()
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((c) => ({ value: c.slug, label: c.name })),
    [countries]
  );

  const dest = countries.find((c) => c.slug === countrySlug);
  const [destMin, destMax] = dest ? parseVoltageRange(dest.voltage) : [0, 0];

  // Determine user's device voltage range
  let deviceMin = 0;
  let deviceMax = 0;
  if (activePreset !== null) {
    deviceMin = PRESETS[activePreset].min;
    deviceMax = PRESETS[activePreset].max;
  } else if (showCustom && customVoltage) {
    const [a, b] = parseVoltageRange(customVoltage);
    deviceMin = a;
    deviceMax = b;
  }

  const hasResult = dest && deviceMin > 0;

  // Logic: device handles dest voltage if dest voltage falls within device range
  let status: "safe" | "danger" | "caution" = "safe";
  let message = "";

  if (hasResult) {
    const deviceHandlesDest = deviceMin <= destMin && deviceMax >= destMax;
    const closeEnough =
      !deviceHandlesDest && Math.abs(deviceMin - destMin) <= 20;

    if (deviceHandlesDest) {
      status = "safe";
      message = `Safe — your device handles ${dest.voltage} (${dest.frequency}). No voltage converter needed.`;
    } else if (closeEnough) {
      status = "caution";
      message = `Check carefully — your device is rated for ${deviceMin}${deviceMax !== deviceMin ? `–${deviceMax}` : ""}V, and the destination uses ${dest.voltage}. The difference is small, but verify your specific device's tolerance.`;
    } else {
      status = "danger";
      message = `NOT safe — your ${deviceMin}${deviceMax !== deviceMin ? `–${deviceMax}` : ""}V device cannot handle ${dest.voltage}. You need a voltage converter.`;
    }
  }

  const statusIcon =
    status === "safe" ? "✅" : status === "caution" ? "⚠️" : "❌";

  return (
    <div>
      {/* Country selection */}
      <div style={{ marginBottom: 20 }}>
        <SearchableDropdown
          label="Destination country"
          options={options}
          value={countrySlug}
          onChange={setCountrySlug}
          placeholder="Where are you going?"
        />
      </div>

      {dest && (
        <div
          style={{
            background: "#f0ece7",
            borderRadius: 10,
            padding: "14px 18px",
            marginBottom: 20,
            fontSize: "0.93rem",
            color: "#4a4540",
          }}
        >
          <strong>{dest.name}</strong> uses <strong>{dest.voltage}</strong> at{" "}
          <strong>{dest.frequency}</strong>.
        </div>
      )}

      {/* Device voltage input */}
      <div style={{ marginBottom: 8 }}>
        <label
          style={{
            display: "block",
            fontSize: "0.8rem",
            fontWeight: 600,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            color: "#7a756e",
            marginBottom: 8,
          }}
        >
          Your device&apos;s voltage
        </label>
        <div
          style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 10 }}
        >
          {PRESETS.map((p, i) => (
            <button
              key={i}
              onClick={() => {
                setActivePreset(i);
                setShowCustom(false);
              }}
              style={{
                padding: "10px 16px",
                border:
                  activePreset === i
                    ? "2px solid #c85a3a"
                    : "2px solid #e0ddd8",
                borderRadius: 10,
                background: activePreset === i ? "#faf3f0" : "#fff",
                color: activePreset === i ? "#c85a3a" : "#4a4540",
                fontWeight: activePreset === i ? 600 : 400,
                fontSize: "0.9rem",
                cursor: "pointer",
                fontFamily: "inherit",
                transition: "all 0.15s",
              }}
            >
              {p.label}
            </button>
          ))}
          <button
            onClick={() => {
              setShowCustom(true);
              setActivePreset(null);
            }}
            style={{
              padding: "10px 16px",
              border: showCustom ? "2px solid #c85a3a" : "2px solid #e0ddd8",
              borderRadius: 10,
              background: showCustom ? "#faf3f0" : "#fff",
              color: showCustom ? "#c85a3a" : "#4a4540",
              fontWeight: showCustom ? 600 : 400,
              fontSize: "0.9rem",
              cursor: "pointer",
              fontFamily: "inherit",
              transition: "all 0.15s",
            }}
          >
            Custom…
          </button>
        </div>

        {showCustom && (
          <input
            type="text"
            value={customVoltage}
            onChange={(e) => setCustomVoltage(e.target.value)}
            placeholder="e.g. 110 or 100-240"
            style={{
              border: "2px solid #e0ddd8",
              borderRadius: 10,
              padding: "12px 14px",
              width: "100%",
              maxWidth: 240,
              fontSize: "1rem",
              fontFamily: "inherit",
              outline: "none",
              color: "#2c2824",
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "#c85a3a")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "#e0ddd8")}
          />
        )}
      </div>

      {/* Result */}
      {hasResult && (
        <ResultCard status={status}>
          <p style={{ fontSize: "1.05rem", fontWeight: 600, margin: 0, color: status === "safe" ? "#2d8a4e" : status === "caution" ? "#b8860b" : "#c85a3a" }}>
            {statusIcon} {message}
          </p>
        </ResultCard>
      )}

      {/* Visual guide — always visible */}
      <div
        style={{
          marginTop: 32,
          background: "#fff",
          borderRadius: 14,
          padding: "24px",
          border: "1px solid #e8e5e0",
        }}
      >
        <h3 style={{ fontSize: "1.1rem", fontWeight: 700, margin: "0 0 12px", color: "#2c2824" }}>
          How to Find Your Device&apos;s Voltage
        </h3>

        {/* Annotated diagram */}
        <div
          style={{
            background: "#f7f5f2",
            borderRadius: 10,
            padding: "20px 24px",
            fontFamily: "monospace",
            fontSize: "0.85rem",
            lineHeight: 1.6,
            color: "#5a554e",
            marginBottom: 16,
            border: "1px dashed #d5d0c9",
          }}
        >
          <div style={{ marginBottom: 8, fontFamily: "'DM Sans', sans-serif", fontWeight: 600, color: "#2c2824" }}>
            Look for a label like this on your charger:
          </div>
          <div>
            ┌─────────────────────────────────┐<br />
            │ <span style={{ color: "#c85a3a", fontWeight: 700 }}>INPUT: 100-240V ~ 50/60Hz 0.5A</span>{"  "}│<br />
            │ OUTPUT: 5V ⎓ 2.4A{"               "}│<br />
            └─────────────────────────────────┘<br />
            <span style={{ color: "#c85a3a" }}>↑ This is what matters</span>
          </div>
        </div>

        <ul style={{ paddingLeft: 20, margin: 0, color: "#4a4540", fontSize: "0.92rem", lineHeight: 1.8 }}>
          <li>
            <strong>100-240V</strong> = dual-voltage (works worldwide, just need
            an adapter)
          </li>
          <li>
            <strong>120V</strong> = single-voltage (US/Japan only; needs a
            converter for 220-240V countries)
          </li>
          <li>
            <strong>220-240V</strong> = single-voltage (Europe/Asia; needs a
            converter for 110-120V countries)
          </li>
          <li>
            The <strong>OUTPUT</strong> line is for your device&apos;s battery —
            it doesn&apos;t affect compatibility
          </li>
        </ul>
      </div>
    </div>
  );
}
