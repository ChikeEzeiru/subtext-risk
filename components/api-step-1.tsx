"use client";

import { useState } from "react";

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
      className="flex items-center gap-1.5 shrink-0 transition-colors"
      style={{
        border: "0.75px solid #4F4F5E",
        borderRadius: 6,
        padding: "4px 10px",
        background: "transparent",
      }}
    >
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
      <span
        className="font-neue-montreal text-[11px]"
        style={{ color: "#D3D3D9" }}
      >
        {copied ? "Copied" : "Copy"}
      </span>
    </button>
  );
}

export default function ApiStep1() {
  return (
    <div
      className="flex items-start justify-center overflow-y-clip"
      style={{ width: 358, height: 224 }}
    >
      {/* Card */}
      <div
        style={{
          background: "#0B1221",
          borderRadius: 8,
          width: 304,
          marginTop: 16,
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div
          className="px-3 py-3"
          style={{ borderBottom: "1px solid #1E293B" }}
        >
          <p
            className="font-neue-montreal font-medium text-[12.5px] leading-5 mb-1"
            style={{ color: "#E3E3E8" }}
          >
            Standard Keys
          </p>
          <p
            className="font-neue-montreal text-[10px] leading-3.25"
            style={{ color: "#9E9EAD" }}
          >
            Create a key with full API access, enabling extensive interaction
            with your account.
          </p>
        </div>

        {/* Keys */}
        <div className="px-5 py-5 flex flex-col gap-5">
          {/* Publishable key */}
          <div className="flex flex-col gap-1">
            <div className="flex flex-row gap-1.5 items-center">
              <p
                className="font-neue-montreal text-[10px]"
                style={{ color: "#6E6E7D" }}
              >
                Publishable Key
              </p>

              <span
                className="flex items-center justify-center px-2 py-0.5"
                style={{ background: "#422006", borderRadius: 4 }}
              >
                <p className="font-neue-montreal text-[8px] text-yellow-300">
                  test
                </p>
              </span>
            </div>

            <div className="flex items-center justify-between gap-5">
              <p
                className="font-mono text-[10px] leading-4 break-all"
                style={{ color: "#D3D3D9" }}
              >
                pk_test_j8JIEcwAyd8uWD7NA4SDWISr5AfDKdW12e3D2dqoWA
              </p>
              <CopyButton value="pk_live_j8JIEcwAyd8uWD7NA4SDWISr5AfDKdW12e3D2dqoWA" />
            </div>
          </div>

          {/* Secret key */}
          <div className="flex flex-col gap-1">
            <div className="flex flex-row gap-1.5 items-center">
              <p
                className="font-neue-montreal text-[10px]"
                style={{ color: "#6E6E7D" }}
              >
                Secret Key
              </p>

              <span
                className="flex items-center justify-center px-2 py-0.5"
                style={{ background: "#052E16", borderRadius: 4 }}
              >
                <p className="font-neue-montreal text-[8px] text-green-300">
                  live
                </p>
              </span>
            </div>

            <div className="flex items-center justify-between gap-5">
              <p
                className="font-mono text-[10px] leading-4"
                style={{ color: "#D3D3D9" }}
              >
                sk_live_••••••••••Rd
              </p>
              <CopyButton value="sk_live_••••••••••Rd" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
