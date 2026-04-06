"use client";

import { useState, useRef, useEffect, useCallback } from "react";

interface Option {
  value: string;
  label: string;
}

interface SearchableDropdownProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  label: string;
}

export default function SearchableDropdown({
  options,
  value,
  onChange,
  placeholder,
  label,
}: SearchableDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = options.filter((o) =>
    o.label.toLowerCase().includes(search.toLowerCase())
  );

  const selectedLabel = options.find((o) => o.value === value)?.label ?? "";

  const close = useCallback(() => {
    setIsOpen(false);
    setSearch("");
  }, []);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        close();
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [close]);

  return (
    <div ref={wrapperRef} style={{ position: "relative", width: "100%" }}>
      <label
        style={{
          display: "block",
          fontSize: "0.8rem",
          fontWeight: 600,
          letterSpacing: "0.04em",
          textTransform: "uppercase",
          color: "#7a756e",
          marginBottom: 6,
        }}
      >
        {label}
      </label>
      <div
        onClick={() => {
          setIsOpen(true);
          setTimeout(() => inputRef.current?.focus(), 0);
        }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          border: isOpen ? "2px solid #c85a3a" : "2px solid #e0ddd8",
          borderRadius: 10,
          padding: "12px 14px",
          background: "#fff",
          cursor: "pointer",
          transition: "border-color 0.15s",
          fontSize: "1rem",
        }}
      >
        {isOpen ? (
          <input
            ref={inputRef}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={value ? selectedLabel : placeholder}
            style={{
              border: "none",
              outline: "none",
              flex: 1,
              fontSize: "1rem",
              fontFamily: "inherit",
              background: "transparent",
              color: "#2c2824",
            }}
          />
        ) : (
          <span
            style={{
              flex: 1,
              color: value ? "#2c2824" : "#a09a93",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {value ? selectedLabel : placeholder}
          </span>
        )}
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
          <path
            d="M4 6l4 4 4-4"
            stroke="#7a756e"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {isOpen && (
        <ul
          style={{
            position: "absolute",
            top: "calc(100% + 4px)",
            left: 0,
            right: 0,
            maxHeight: 260,
            overflowY: "auto",
            background: "#fff",
            border: "1px solid #e0ddd8",
            borderRadius: 10,
            boxShadow: "0 8px 24px rgba(0,0,0,0.10)",
            zIndex: 50,
            listStyle: "none",
            margin: 0,
            padding: 4,
          }}
        >
          {filtered.length === 0 && (
            <li style={{ padding: "10px 14px", color: "#a09a93", fontSize: "0.9rem" }}>
              No results found
            </li>
          )}
          {filtered.map((o) => (
            <li
              key={o.value}
              onClick={() => {
                onChange(o.value);
                close();
              }}
              style={{
                padding: "10px 14px",
                borderRadius: 8,
                cursor: "pointer",
                fontSize: "0.95rem",
                color: o.value === value ? "#c85a3a" : "#2c2824",
                fontWeight: o.value === value ? 600 : 400,
                background: o.value === value ? "#faf3f0" : "transparent",
                transition: "background 0.1s",
              }}
              onMouseEnter={(e) => {
                if (o.value !== value)
                  (e.currentTarget as HTMLLIElement).style.background = "#f7f5f2";
              }}
              onMouseLeave={(e) => {
                if (o.value !== value)
                  (e.currentTarget as HTMLLIElement).style.background = "transparent";
              }}
            >
              {o.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
