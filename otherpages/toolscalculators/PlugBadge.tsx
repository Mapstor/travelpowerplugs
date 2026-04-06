"use client";

interface PlugBadgeProps {
  type: string;
  size?: "sm" | "md";
}

export default function PlugBadge({ type, size = "md" }: PlugBadgeProps) {
  const dim = size === "sm" ? 28 : 36;
  const font = size === "sm" ? "0.7rem" : "0.8rem";
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: dim,
        height: dim,
        borderRadius: 8,
        background: "#f0ece7",
        border: "1px solid #e0ddd8",
        fontWeight: 700,
        fontSize: font,
        color: "#5a554e",
        letterSpacing: "0.02em",
        flexShrink: 0,
      }}
      title={`Plug Type ${type}`}
    >
      {type}
    </span>
  );
}
