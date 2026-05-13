"use client";

import { useState } from "react";

export default function ApiStep2() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(
      `POST /v1/merchant/screen\n{\n  "url": "https://crestwoodsupply.com",\n  "rules": "default",\n  "jurisdiction": "US-DE",\n  "phone": "+1 302 555 0174",\n  "registration_number": "EIN-82-4917263",\n  "duration_ms": 17400,\n{`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="flex items-center justify-center overflow-y-clip"
      style={{ width: 358, height: 224 }}
    >
      {/* Card — centered, bottom-offset matching Figma */}
      <div
        className="center -mb-5 overflow-clip rounded-sm flex flex-col items-start"
        style={{
          background: "#0B1221",
          width: 304,
          bottom: -14,
          minHeight: 214,
        }}
      >
        {/* ── Header bar ── */}
        <div
          className="flex items-center justify-between w-full px-3 py-2 shrink-0"
          style={{ borderBottom: "1px solid #1E293B" }}
        >
          {/* REQUEST label */}
          <p
            className="font-mono text-[8px] leading-3 whitespace-nowrap"
            style={{ color: "#D3D3D9" }}
          >
            REQUEST
          </p>

          {/* Copy button */}
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 px-2.5 py-1 rounded-sm transition-colors"
            style={{
              border: `0.75px solid ${copied ? "#86EFAC" : "#4F4F5E"}`,
              background: "transparent",
            }}
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke={copied ? "#86EFAC" : "#D3D3D9"}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="9" y="9" width="13" height="13" rx="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
            <span
              className="font-mono text-[8px] leading-3 whitespace-nowrap"
              style={{ color: copied ? "#86EFAC" : "#D3D3D9" }}
            >
              {copied ? "copied" : "copy"}
            </span>
          </button>
        </div>

        {/* ── Code body ── */}
        <div
          className="flex flex-col items-start w-full shrink-0 overflow-clip"
          style={{ padding: 20, gap: 2 }}
        >
          {/* POST /v1/merchant/screen */}
          <p
            className="font-mono text-[8px] leading-3 w-full"
            style={{ color: "#9E9EAD" }}
          >
            POST /v1/merchant/screen
          </p>

          {/* Opening brace */}
          <p
            className="font-mono text-[8px] leading-3 w-full"
            style={{ color: "#9E9EAD" }}
          >
            {"{"}
          </p>

          {/* Indented fields */}
          <div
            className="flex flex-col items-start w-full"
            style={{ paddingLeft: 8, gap: 2 }}
          >
            {/* "url" */}
            <p
              className="font-mono text-[8px] leading-3 w-full"
              style={{ color: "#86EFAC" }}
            >
              <span style={{ color: "#93C5FD" }}>&quot;url&quot;:</span>
              {` "https://crestwoodsupply.com",`}
            </p>

            {/* "rules" */}
            <p
              className="font-mono text-[8px] leading-3 w-full"
              style={{ color: "#86EFAC" }}
            >
              <span style={{ color: "#93C5FD" }}>&quot;rules&quot;:</span>
              {` "default",`}
            </p>

            {/* "jurisdiction" */}
            <p
              className="font-mono text-[8px] leading-3 w-full"
              style={{ color: "#86EFAC" }}
            >
              <span style={{ color: "#93C5FD" }}>
                &quot;jurisdiction&quot;:
              </span>
              {` "US-DE",`}
            </p>

            {/* "phone" */}
            <p
              className="font-mono text-[8px] leading-3 w-full"
              style={{ color: "#86EFAC" }}
            >
              <span style={{ color: "#93C5FD" }}>&quot;phone&quot;:</span>
              {` "+1 302 555 0174",`}
            </p>

            {/* "registration_number" */}
            <p
              className="font-mono text-[8px] leading-3 w-full"
              style={{ color: "#86EFAC" }}
            >
              <span style={{ color: "#93C5FD" }}>
                &quot;registration_number&quot;:
              </span>
              {` "EIN-82-4917263",`}
            </p>

            {/* "duration_ms" — number, amber */}
            <p
              className="font-mono text-[8px] leading-3 w-full"
              style={{ color: "#FACC15" }}
            >
              <span style={{ color: "#93C5FD" }}>&quot;duration_ms&quot;:</span>
              {` 17400,`}
            </p>
          </div>

          {/* Closing brace */}
          <p
            className="font-mono text-[8px] leading-3 w-full"
            style={{ color: "#9E9EAD" }}
          >
            {"{"}
          </p>
        </div>
      </div>
    </div>
  );
}
