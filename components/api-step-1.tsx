"use client";

import { useState } from "react";

// ─── Copy button ──────────────────────────────────────────────────────────────

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copy}
      className="flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-colors shrink-0"
      style={{
        border: `0.75px solid ${copied ? "#86EFAC" : "#4F4F5E"}`,
        background: copied ? "#0A1F12" : "transparent",
      }}
    >
      {copied ? (
        <svg
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#86EFAC"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      ) : (
        <svg
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#D3D3D9"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="9" y="9" width="13" height="13" rx="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
      )}
      <span
        className="font-mono text-[10px]"
        style={{ color: copied ? "#86EFAC" : "#D3D3D9" }}
      >
        {copied ? "Copied" : "Copy"}
      </span>
    </button>
  );
}

// ─── Key row ──────────────────────────────────────────────────────────────────

function KeyRow({
  label,
  env,
  value,
  showBorder,
}: {
  label: string;
  env: string;
  value: string;
  showBorder: boolean;
}) {
  return (
    <div
      className="flex items-center justify-between px-4 py-4"
      style={{
        borderBottom: showBorder ? "1px solid #1E293B" : "none",
      }}
    >
      {/* Left — label + masked key */}
      <div className="flex flex-col gap-1.5 min-w-0">
        <div className="flex items-center gap-2">
          <span
            className="font-mono text-[10px] px-1.5 py-0.5 rounded"
            style={{
              background: env === "live" ? "#0A1F12" : "#0F1A2B",
              color: env === "live" ? "#86EFAC" : "#93C5FD",
              border: `0.5px solid ${
                env === "live" ? "#16A34A22" : "#3B82F622"
              }`,
            }}
          >
            {env === "live" ? "live" : "sandbox"}
          </span>
          <span className="font-mono text-[10px]" style={{ color: "#6E6E7D" }}>
            {label}
          </span>
        </div>
        <span
          className="font-mono text-[11px] tracking-wide"
          style={{ color: "#D3D3D9" }}
        >
          {value}
        </span>
      </div>

      {/* Right — copy button */}
      <CopyButton value={value} />
    </div>
  );
}

// ─── Step 1 illustration ──────────────────────────────────────────────────────

export default function ApiStep1() {
  return (
    <div
      className="w-full flex items-center justify-center overflow-clip"
      style={{ width: 358, height: 224 }}
    >
      {/* Card */}
      <div
        className="w-full overflow-hidden shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
        style={{
          background: "#0B1221",
          borderRadius: 6,
          marginLeft: 27,
          marginRight: 27,
          marginTop: 16,
        }}
      >
        {/* Header */}
        <div
          className="px-4 py-4"
          style={{ borderBottom: "1px solid #1E293B" }}
        >
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 mb-1">
            <span
              className="font-mono text-[10px]"
              style={{ color: "#6E6E7D" }}
            >
              Settings
            </span>
            <span
              className="font-mono text-[10px]"
              style={{ color: "#4F4F5E" }}
            >
              /
            </span>
            <span
              className="font-mono text-[10px]"
              style={{ color: "#6E6E7D" }}
            >
              API Keys
            </span>
          </div>
          {/* Title */}
          <p
            className="font-mono text-[13px] font-medium"
            style={{ color: "#E3E3E8" }}
          >
            API Keys
          </p>
          {/* Subtitle */}
          <p
            className="font-mono text-[10px] mt-0.5"
            style={{ color: "#9E9EAD" }}
          >
            Authenticate requests to the Subtext API
          </p>
        </div>

        {/* Key rows */}
        <KeyRow
          label="Secret key"
          env="live"
          value="sk_live_••••••••••••••••••"
          showBorder={false}
        />
        <KeyRow
          label="Secret key"
          env="sandbox"
          value="sk_test_••••••••••••••••••"
          showBorder={false}
        />
      </div>
    </div>
  );
}
