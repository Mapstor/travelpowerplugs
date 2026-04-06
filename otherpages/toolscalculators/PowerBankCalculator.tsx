"use client";

import { useState } from "react";
import ResultCard from "@/components/ResultCard";

const MAH_PRESETS = [5000, 10000, 20000, 26800, 30000];
const VOLTAGE_OPTIONS = [3.6, 3.7, 3.8];

interface PopularBank {
  name: string;
  mah: number;
  wh: number;
  status: "safe" | "caution" | "danger";
  note: string;
}

const POPULAR_BANKS: PopularBank[] = [
  { name: "Apple MagSafe Battery", mah: 1460, wh: 11.13, status: "safe", note: "Carry-on OK" },
  { name: "Anker 622 MagGo", mah: 5000, wh: 18.5, status: "safe", note: "Carry-on OK" },
  { name: "Anker PowerCore 10000", mah: 10000, wh: 37, status: "safe", note: "Carry-on OK" },
  { name: "Samsung 10,000 mAh", mah: 10000, wh: 37, status: "safe", note: "Carry-on OK" },
  { name: "Anker 737 PowerCore", mah: 24000, wh: 86.4, status: "safe", note: "Carry-on OK" },
  { name: "Anker PowerCore III Elite", mah: 25600, wh: 94.72, status: "safe", note: "Carry-on OK" },
  { name: "Anker 737 PowerCore 26K", mah: 26800, wh: 99.16, status: "safe", note: "Just under 100 Wh" },
  { name: "Typical 30,000 mAh", mah: 30000, wh: 111, status: "caution", note: "Needs airline approval" },
  { name: "Jackery Explorer 300", mah: 0, wh: 293, status: "danger", note: "Prohibited" },
];

const STATUS_ICON: Record<string, string> = {
  safe: "✅",
  caution: "⚠️",
  danger: "❌",
};

export default function PowerBankCalculator() {
  const [mahInput, setMahInput] = useState("");
  const [voltage, setVoltage] = useState(3.7);

  const mah = parseFloat(mahInput);
  const isValid = !isNaN(mah) && mah > 0;
  const wh = isValid ? (mah * voltage) / 1000 : 0;

  let status: "safe" | "caution" | "danger" = "safe";
  let message = "";

  if (isValid) {
    if (wh < 100) {
      status = "safe";
      message = `${wh.toFixed(1)} Wh — Allowed in carry-on. No restrictions. No airline approval needed.`;
    } else if (wh <= 160) {
      status = "caution";
      message = `${wh.toFixed(1)} Wh — Allowed in carry-on WITH airline approval. Contact your airline before flying. Most airlines allow 2 per person.`;
    } else {
      status = "danger";
      message = `${wh.toFixed(1)} Wh — Prohibited on all commercial flights. Cannot be carried in carry-on or checked luggage.`;
    }
  }

  const statusIcon = STATUS_ICON[status];

  return (
    <div>
      {/* mAh input */}
      <div style={{ marginBottom: 20 }}>
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
          Power bank capacity (mAh)
        </label>
        <input
          type="number"
          inputMode="numeric"
          value={mahInput}
          onChange={(e) => setMahInput(e.target.value)}
          placeholder="e.g. 20000"
          style={{
            border: "2px solid #e0ddd8",
            borderRadius: 10,
            padding: "12px 14px",
            width: "100%",
            maxWidth: 260,
            fontSize: "1rem",
            fontFamily: "inherit",
            outline: "none",
            color: "#2c2824",
          }}
          onFocus={(e) => (e.currentTarget.style.borderColor = "#c85a3a")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "#e0ddd8")}
        />
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 8 }}>
          {MAH_PRESETS.map((p) => (
            <button
              key={p}
              onClick={() => setMahInput(String(p))}
              style={{
                padding: "6px 12px",
                border:
                  mahInput === String(p)
                    ? "2px solid #c85a3a"
                    : "1px solid #d5d0c9",
                borderRadius: 8,
                background: mahInput === String(p) ? "#faf3f0" : "#f7f5f2",
                color: mahInput === String(p) ? "#c85a3a" : "#5a554e",
                fontWeight: mahInput === String(p) ? 600 : 400,
                fontSize: "0.82rem",
                cursor: "pointer",
                fontFamily: "inherit",
                transition: "all 0.15s",
              }}
            >
              {p.toLocaleString()} mAh
            </button>
          ))}
        </div>
      </div>

      {/* Voltage select */}
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
          Nominal voltage
        </label>
        <div style={{ display: "flex", gap: 8 }}>
          {VOLTAGE_OPTIONS.map((v) => (
            <button
              key={v}
              onClick={() => setVoltage(v)}
              style={{
                padding: "10px 18px",
                border:
                  voltage === v ? "2px solid #c85a3a" : "2px solid #e0ddd8",
                borderRadius: 10,
                background: voltage === v ? "#faf3f0" : "#fff",
                color: voltage === v ? "#c85a3a" : "#4a4540",
                fontWeight: voltage === v ? 600 : 400,
                fontSize: "0.9rem",
                cursor: "pointer",
                fontFamily: "inherit",
                transition: "all 0.15s",
              }}
            >
              {v}V
            </button>
          ))}
        </div>
        <p style={{ fontSize: "0.8rem", color: "#a09a93", marginTop: 6, marginBottom: 0 }}>
          Most power banks use 3.7V. Check your label if unsure.
        </p>
      </div>

      {/* Result */}
      {isValid && (
        <ResultCard status={status}>
          <p
            style={{
              fontSize: "1.05rem",
              fontWeight: 600,
              margin: 0,
              color:
                status === "safe"
                  ? "#2d8a4e"
                  : status === "caution"
                    ? "#b8860b"
                    : "#c85a3a",
            }}
          >
            {statusIcon} {message}
          </p>
          <p
            style={{
              fontSize: "0.88rem",
              color: "#5a554e",
              marginTop: 10,
              marginBottom: 0,
            }}
          >
            <strong>Formula:</strong> {mah.toLocaleString()} mAh × {voltage}V ÷
            1000 = <strong>{wh.toFixed(2)} Wh</strong>
          </p>
        </ResultCard>
      )}

      {/* Carry-on warning — always shown */}
      <div
        style={{
          marginTop: 24,
          background: "#fdf4f1",
          border: "1px solid #edc9bd",
          borderRadius: 10,
          padding: "16px 20px",
          fontSize: "0.92rem",
          color: "#8a3d27",
          fontWeight: 500,
        }}
      >
        ⚠️ <strong>Important:</strong> Power banks must ALWAYS go in carry-on
        luggage, NEVER in checked bags. This is an international aviation safety
        rule due to lithium battery fire risk.
      </div>

      {/* Formula explainer */}
      <div
        style={{
          marginTop: 24,
          background: "#fff",
          borderRadius: 14,
          padding: "20px 24px",
          border: "1px solid #e8e5e0",
        }}
      >
        <h3 style={{ fontSize: "1rem", fontWeight: 700, margin: "0 0 8px", color: "#2c2824" }}>
          mAh to Wh Conversion
        </h3>
        <p style={{ margin: 0, fontSize: "0.92rem", color: "#5a554e", lineHeight: 1.6 }}>
          Airlines use <strong>watt-hours (Wh)</strong>, not mAh, to determine
          whether a power bank is allowed.{" "}
          <strong>Wh = mAh × V ÷ 1000</strong>. The nominal voltage for most
          lithium-ion power banks is 3.7V.
        </p>
      </div>

      {/* Popular power banks table */}
      <div
        style={{
          marginTop: 24,
          background: "#fff",
          borderRadius: 14,
          padding: "20px 24px",
          border: "1px solid #e8e5e0",
          overflowX: "auto",
        }}
      >
        <h3 style={{ fontSize: "1rem", fontWeight: 700, margin: "0 0 14px", color: "#2c2824" }}>
          Popular Power Banks — Quick Reference
        </h3>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: "0.88rem",
            color: "#4a4540",
          }}
        >
          <thead>
            <tr
              style={{
                borderBottom: "2px solid #e8e5e0",
                textAlign: "left",
              }}
            >
              <th style={{ padding: "8px 10px", fontWeight: 600 }}>Power Bank</th>
              <th style={{ padding: "8px 10px", fontWeight: 600 }}>Capacity</th>
              <th style={{ padding: "8px 10px", fontWeight: 600 }}>Wh</th>
              <th style={{ padding: "8px 10px", fontWeight: 600 }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {POPULAR_BANKS.map((bank, i) => (
              <tr
                key={i}
                style={{
                  borderBottom: "1px solid #f0ece7",
                }}
              >
                <td style={{ padding: "10px 10px" }}>{bank.name}</td>
                <td style={{ padding: "10px 10px", whiteSpace: "nowrap" }}>
                  {bank.mah > 0 ? `${bank.mah.toLocaleString()} mAh` : "—"}
                </td>
                <td style={{ padding: "10px 10px" }}>{bank.wh} Wh</td>
                <td style={{ padding: "10px 10px", whiteSpace: "nowrap" }}>
                  {STATUS_ICON[bank.status]} {bank.note}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
