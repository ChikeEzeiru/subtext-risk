"use client";

import { useState } from "react";
import Image from "next/image";

// ── Categories ───────────────────────────────────────────────────────────────
type Category = "Compliance" | "Product" | "Industry" | "Engineering";

// ── Author type ──────────────────────────────────────────────────────────────
interface Author {
  name: string;
  picUrl: string; // path to avatar image
}

// ── Card data shape ──────────────────────────────────────────────────────────
interface CardData {
  id: number;
  status: Category;
  title: string;
  description: string;
  authors: Author[]; // one or more
}

// ── Static card content ─────────────────────────────────────────────────────
const CARDS: CardData[] = [
  {
    id: 1,
    status: "Compliance",
    title: "The real cost of slow merchant onboarding (and how to measure it)",
    description:
      "Every day a legitimate merchant spends in your review queue is a day they're considering your competitor. Here's how to calculate the revenue impact of onboarding delays — and where automation makes the biggest difference. ",
    authors: [
      { name: "Daniel Okafor", picUrl: "/images/authors/daniel-okafor.png" },
    ],
  },
  {
    id: 2,
    status: "Product",
    title:
      "Introducing Compliance Reports: from risk detection to audit-ready documentation",
    description:
      "Detecting merchant risk is one problem. Documenting it for regulators and card networks is another. Compliance Reports bridge that gap — packaging every finding from screening, monitoring, and investigation into formatted, timestamped reports.",
    authors: [
      { name: "Wade Warren", picUrl: "/images/authors/wade-warren.png" },
      { name: "Esther Howard", picUrl: "/images/authors/esther-howard.png" },
    ],
  },
  {
    id: 3,
    status: "Industry",
    title:
      "KYB in 2026: what's changed and what payment providers should do about it ",
    description:
      "Merchant verification used to mean checking registry data and calling it done. New card network rules, evolving fraud patterns, and AI-powered tools have changed what 'sufficient' due diligence looks like. Here's what's shifted.",
    authors: [
      {
        name: "Brooklyn Simmons",
        picUrl: "/images/authors/brooklyn-simmons.png",
      },
    ],
  },
  {
    id: 4,
    status: "Engineering",
    title: "Designing an API that returns a risk decision in 30 seconds",
    description:
      "Under the hood of Subtext's screening engine: how we analyze 2,000+ web sources, run sentiment analysis, and deliver a structured report in a single API call — and the tradeoffs we made to hit a 30-second SLA.",
    authors: [
      { name: "James Liu", picUrl: "/images/authors/james-liu.png" },
      { name: "Albert Flores", picUrl: "/images/authors/albert-flores.png" },
    ],
  },
  {
    id: 5,
    status: "Compliance",
    title:
      "Transaction laundering is getting harder to detect. Here's what compliance teams are missing.",
    description:
      "The most sophisticated laundering schemes don't look like fraud at first glance — they look like normal businesses with real websites and real customers. The signals are in the details that manual review consistently overlooks.",
    authors: [
      { name: "Daniel Okafor", picUrl: "/images/authors/daniel-okafor.png" },
    ],
  },
  // Add more cards here ...
];

// ── Category filter options ──────────────────────────────────────────────────
const FILTERS: { label: string; value: Category | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Compliance", value: "Compliance" },
  { label: "Product", value: "Product" },
  { label: "Industry", value: "Industry" },
  { label: "Engineering", value: "Engineering" },
];

// ── Status badge colors (light theme, matching existing pill palette) ────────
const statusStyles: Record<Category, { text: string }> = {
  Compliance: { text: "#166534" }, // green
  Product: { text: "#1E40AF" }, // blue
  Industry: { text: "#92400E" }, // amber
  Engineering: { text: "#6B21A8" }, // purple
};

export default function FilterableCardList() {
  const [activeFilter, setActiveFilter] = useState<Category | "all">("all");

  const filteredCards =
    activeFilter === "all"
      ? CARDS
      : CARDS.filter((card) => card.status === activeFilter);

  return (
    <section className="flex flex-col items-center justify-center py-24 w-full bg-bg-primary">
      <div className="space-y-6 max-w-310 px-8 w-full">
        {/* ── Filter pills ─────────────────────────────────── */}
        <div className="flex flex-wrap gap-2 max">
          {FILTERS.map(({ label, value }) => {
            const isActive = activeFilter === value;
            return (
              <button
                key={value}
                onClick={() => setActiveFilter(value)}
                className={`px-3 py-1.5 text-sm font-medium rounded-xl border transition-colors ${
                  isActive
                    ? "border-zinc-800 bg-zinc-800 text-white"
                    : "border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* ── Card grid ─────────────────────────────────────── */}
        <div className="grid grid-cols-1  gap-4">
          {filteredCards.map((card) => (
            <div
              key={card.id}
              className="group relative rounded-xl border border-border bg-white p-6 transition-all duration-300 hover:border-[rgba(202,125,21,0.3)] hover:shadow-sm"
            >
              {/* Status badge */}
              <div className="mb-2.5">
                <span
                  className="inline-flex items-center rounded-full py-0.5 text-xs font-medium font-mono"
                  style={{
                    color: statusStyles[card.status].text,
                    font: "input-mono",
                  }}
                >
                  {card.status}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-body-2xl text-bg-dark font-medium font-neue-montreal text-balance mb-1.75">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-lg leading-6.5 text-body mb-5 text-balance">
                {card.description}
              </p>

              {/* Author(s) */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {card.authors.map((author, idx) => (
                    <Image
                      key={idx}
                      src={author.picUrl}
                      alt={author.name}
                      className="rounded-full border-2 border-white object-cover"
                      width={40}
                      height={40}
                    />
                  ))}
                </div>
                <span className="text-sm text-body font-medium font-neue-montreal">
                  {card.authors.map((a) => a.name).join(", ")}
                </span>
              </div>

              {/* ── Floating top‑right icon ── */}
              {/* Change w-5 h-5 here to any size — the icon scales with it */}
              <div className="absolute top-0 right-0 mt-4 mr-4 w-4.5 h-4.5">
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  width="100%"
                  height="100%"
                  aria-hidden="true"
                >
                  {/* Bracket — always visible. This is the chevron. */}
                  <path
                    d="M9 4H16V11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Stem — draws FROM bracket corner TOWARD bottom-left on hover.
        Path starts at the bracket's inner corner so the tail grows outward. */}
                  <path
                    d="M12 8L5 15"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="
        [stroke-dasharray:10]
        [stroke-dashoffset:10]
        group-hover:[stroke-dashoffset:0]
        [transition:stroke-dashoffset_0.3s_ease-out]
      "
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
