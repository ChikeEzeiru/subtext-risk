"use client";

import { useState, useEffect } from "react";

type CodeLine = {
  key?: string;
  value?: string;
  isComment?: boolean;
  isBracket?: boolean;
  isNested?: boolean;
  color?: "green" | "amber" | "gray" | "muted" | "white";
};

type CodeTabContent = {
  label: string;
  status?: string;
  statusCode?: string;
  duration?: string;
  lines: CodeLine[];
};

const codeData: CodeTabContent[] = [
  {
    label: "REQUEST",
    lines: [
      { key: "POST", value: "/v1/merchant/screen", color: "gray" },
      { isComment: true, value: "// Headers" },
      {
        key: "Authorization",
        value: '"Bearer sk_live_•••••••"',
        color: "white",
      },
      { key: "Content-Type", value: '"application/json"', color: "white" },
      { isComment: true, value: "// Body" },
      { isBracket: true, value: "{" },
      { key: "url", value: '"meridian-coffee.com"', color: "amber" },
      { key: "rules", value: '"default"', color: "amber" },
      { isBracket: true, value: "}" },
    ],
  },
  {
    label: "RESPONSE",
    statusCode: "200",
    status: "OK",
    duration: "28s",
    lines: [
      { key: "merchant", value: '"Meridian Coffee Co."', color: "amber" },
      { key: "url", value: '"meridian-coffee.com"', color: "amber" },
      { key: "risk_level", value: '"low"', color: "green" },
      { key: "verified", value: "true", color: "green" },
      { key: "industry", value: '"food_and_beverage"', color: "amber" },
      { key: "signals", value: "{", isNested: false },
      {
        key: "website",
        value: '"active_since_2019"',
        color: "amber",
        isNested: true,
      },
      {
        key: "reviews",
        value: '"4.6 · 312 reviews"',
        color: "amber",
        isNested: true,
      },
      {
        key: "social",
        value: '"3 profiles · consistent"',
        color: "amber",
        isNested: true,
      },
      { key: "location", value: '"matched"', color: "amber", isNested: true },
      { key: "blocklist", value: '"clear"', color: "amber", isNested: true },
      { isBracket: true, value: "}," },
      { key: "url", value: '"meridian-coffee.com"', color: "amber" },
      { isBracket: true, value: "}" },
    ],
  },
];

function CodeBlock({ data }: { data: CodeTabContent }) {
  return (
    <div className="flex flex-col gap-3 text-[11px] leading-4 font-mono text-bg-alt p-4">
      {/* Status line for RESPONSE */}
      {data.statusCode && (
        <div className="flex gap-2 items-center whitespace-nowrap pb-2 border-white/10">
          <span className="text-[#4ADE80]">{data.statusCode}</span>
          <span className="text-[#9E9EAD]">{data.status}</span>
          <div className="w-1 h-1 bg-[#4F4F5E] rounded-full" />
          <span className="text-[#4F4F5E]">{data.duration}</span>
        </div>
      )}

      {/* Code lines */}
      <div className="flex flex-col gap-1">
        {data.lines.map((line, idx) => {
          if (line.isComment) {
            return (
              <div key={idx} className="text-[#4F4F5E]">
                {line.value}
              </div>
            );
          }

          if (line.isBracket) {
            return (
              <div key={idx} className="text-[#4F4F5E]">
                {line.value}
              </div>
            );
          }

          const colorMap = {
            green: "#4ADE80",
            amber: "#ECBF33",
            gray: "#9E9EAD",
            muted: "#4F4F5E",
            white: "#F4F4F5",
          };

          const padding = line.isNested ? "pl-3" : "";

          return (
            <div key={idx} className={`flex gap-2 ${padding}`}>
              <span className="text-[#9E9EAD]">{line.key}:</span>
              <span style={{ color: colorMap[line.color || "muted"] }}>
                {line.value}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function ApiSection() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const activeTab = codeData[activeTabIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTabIndex((prev) => (prev + 1) % codeData.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="flex items-center justify-center py-24 w-full">
      <div className="flex gap-16 items-center max-w-310 w-full px-8">
        {/* Left: Grey container with code block */}
        <div className="flex-1 bg-[#F4F4F5] rounded-xl px-14 py-12 flex items-center justify-center">
          <div className="bg-[#17171C] border border-[#3D3D48] rounded-xl shadow-lg overflow-hidden flex flex-col h-100 w-full">
            {/* Tabs */}
            <div className="flex border-b border-white/10">
              {codeData.map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTabIndex(idx)}
                  className={`px-4 py-3 text-[11px] font-mono font-medium transition-colors ${
                    activeTabIndex === idx
                      ? "text-[#ECBF33] border-b-2 border-[#ECBF33]"
                      : "text-[#FAFAFA] hover:text-[#ECBF33]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Code Content */}
            <div className="flex-1 overflow-auto">
              <CodeBlock data={activeTab} />
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="flex-1 flex flex-col gap-12">
          <div className="flex flex-col gap-8">
            {/* Heading */}
            <h2 className="font-neue-montreal font-medium text-[30px] leading-9.5 text-[#17171C]">
              Plug in, don&apos;t rebuild.{" "}
              <span className="font-neue-montreal font-normal text-[#4F4F5E]">
                Subtext is API-first. One endpoint, one call, structured JSON
                response. Integrate into your existing onboarding flow, risk
                engine, or case management system without changing how your team
                works.
              </span>
            </h2>

            {/* Features */}
            <p className="font-mono text-[14px] text-[#894717]">
              REST API · Webhook alerts · Configurable risk rules · Batch
              processing · Portal + API access
            </p>
          </div>

          {/* CTA Button */}
          <button className="flex items-center gap-1 text-body-sm font-medium text-white px-3 py-2.5 rounded-sm border-2 border-[rgba(255,255,255,0.12)] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] hover:opacity-90 transition-opacity [background:linear-gradient(32.5deg,#17171c,#525252)] w-fit relative overflow-clip">
            <span className="pointer-events-none">View API Documentation</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="rgb(255,255,255,0.6)"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
            <span className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(0,0,0,0.18),inset_0px_-2px_0px_0px_rgba(0,0,0,0.05)]" />
          </button>
        </div>
      </div>
    </section>
  );
}
