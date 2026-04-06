"use client";

import { ReactNode } from "react";

type Status = "safe" | "danger" | "caution";

const BORDER_COLORS: Record<Status, string> = {
  safe: "#2d8a4e",
  danger: "#c85a3a",
  caution: "#b8860b",
};

const BG_COLORS: Record<Status, string> = {
  safe: "#f2faf5",
  danger: "#fdf4f1",
  caution: "#fdf9f0",
};

interface ResultCardProps {
  status: Status;
  children: ReactNode;
}

export default function ResultCard({ status, children }: ResultCardProps) {
  return (
    <div
      style={{
        borderLeft: `5px solid ${BORDER_COLORS[status]}`,
        background: BG_COLORS[status],
        borderRadius: "0 12px 12px 0",
        padding: "20px 24px",
        marginTop: 20,
        animation: "resultFadeIn 0.3s ease",
      }}
    >
      <style>{`@keyframes resultFadeIn { from { opacity:0; transform:translateY(8px) } to { opacity:1; transform:translateY(0) } }`}</style>
      {children}
    </div>
  );
}
