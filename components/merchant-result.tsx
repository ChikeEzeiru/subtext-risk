"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import FullReportCard from "./full-report-card";

// ─── Types ────────────────────────────────────────────────────────────────────

type CardData = {
  id: string;
  title: string;
  description: string;
  iconSrc: string;
  position:
    | "top-left"
    | "mid-left"
    | "bottom-left"
    | "top-right"
    | "mid-right"
    | "bottom-right";
};

type Line = { x1: number; y1: number; x2: number; y2: number };

// ─── Card data ────────────────────────────────────────────────────────────────

const cards: CardData[] = [
  {
    id: "business-identity",
    position: "top-left",
    title: "Business identity",
    description: "Verified name, URL, and operating status",
    iconSrc: "/images/Identity_icon.svg",
  },
  {
    id: "risk-level",
    position: "top-right",
    title: "Risk level",
    description: "Low / Medium / High / Critical, with contributing factors",
    iconSrc: "/images/Risk_Level_Icon.svg",
  },
  {
    id: "evidence-links",
    position: "bottom-left",
    title: "Evidence links",
    description:
      "Direct links to the sources Subtext analyzed, so your team can verify anything manually",
    iconSrc: "/images/Evidence_Icon.svg",
  },
  {
    id: "industry-classification",
    position: "mid-left",
    title: "Industry classification",
    description: "AI-determined category based on actual website content",
    iconSrc: "/images/Industry_Class_Icon.svg",
  },
  {
    id: "signal-breakdown",
    position: "mid-right",
    title: "Signal breakdown",
    description:
      "Individual pass/flag status for each data source (website, social, reviews, location, blocklist)",
    iconSrc: "/images/Breakdown_icon.svg",
  },
  {
    id: "recommendation",
    position: "bottom-right",
    title: "Recommendation",
    description:
      "Auto-approve, manual review, or reject — configurable to your rules",
    iconSrc: "/images/Recommendation_icon_2.svg",
  },
];

// ─── Position classes ─────────────────────────────────────────────────────────

const positionClasses: Record<CardData["position"], string> = {
  "top-left": "left-12 top-0",
  "mid-left": "left-12 top-1/2 -translate-y-1/2",
  "bottom-left": "left-12 bottom-0",
  "top-right": "right-12 top-0",
  "mid-right": "right-12 top-1/2 -translate-y-1/2",
  "bottom-right": "right-12 bottom-0",
};

// ─── Floating card ────────────────────────────────────────────────────────────

function FloatingCard({
  card,
  refCallback,
}: {
  card: CardData;
  refCallback: (el: HTMLDivElement | null) => void;
}) {
  return (
    <div
      ref={refCallback}
      className={`absolute flex flex-row p-3 rounded-sm bg-white gap-3 max-w-70 border border-border shadow-[0px_2px_8px_rgba(0,0,0,0.06)] ${
        positionClasses[card.position]
      }`}
    >
      <div className="flex items-center justify-center w-7 h-7 border rounded-sm border-border p-1 shrink-0">
        <Image
          src={card.iconSrc}
          alt=""
          height={20}
          width={20}
          color="#94A3B8"
        />
      </div>
      <p className="text-md text-body font-neue-montreal">
        <span className="font-medium font-neue-montreal text-bg-dark">
          {card.title}.
        </span>{" "}
        {card.description}
      </p>
    </div>
  );
}

// ─── Main section ─────────────────────────────────────────────────────────────

export default function MerchantResult() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reportCardRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // ── ADD 1: path refs and durations state ──────────────────────────────────
  const pathRefs = useRef<Record<string, SVGPathElement | null>>({});
  const [lines, setLines] = useState<Record<string, Line>>({});
  const [durations, setDurations] = useState<Record<string, number>>({});
  const SPEED = 120; // px per second — increase for slower, decrease for faster
  // ─────────────────────────────────────────────────────────────────────────

  const calculateLines = () => {
    const container = containerRef.current;
    const reportCard = reportCardRef.current;
    if (!container || !reportCard) return;

    const containerRect = container.getBoundingClientRect();
    const reportRect = reportCard.getBoundingClientRect();

    const reportLeft = reportRect.left - containerRect.left;
    const reportRight = reportRect.right - containerRect.left;
    const reportTop = reportRect.top - containerRect.top;
    const reportBottom = reportRect.bottom - containerRect.top;

    const newLines: Record<string, Line> = {};

    cards.forEach((card) => {
      const el = cardRefs.current[card.id];
      if (!el) return;

      const cardRect = el.getBoundingClientRect();
      const isRight = card.position.includes("right");

      const cardX = isRight
        ? cardRect.left - containerRect.left // left edge of right-side cards
        : cardRect.right - containerRect.left; // right edge of left-side cards

      const cardY = cardRect.top - containerRect.top + cardRect.height / 2;

      const reportX = isRight ? reportRight : reportLeft;
      const reportY = Math.max(
        reportTop + 8,
        Math.min(reportBottom - 8, cardY)
      );

      newLines[card.id] = { x1: cardX, y1: cardY, x2: reportX, y2: reportY };
    });

    setLines(newLines);
  };

  // ── ADD 2: calculateDurations function ────────────────────────────────────
  const calculateDurations = () => {
    const newDurations: Record<string, number> = {};
    cards.forEach((card) => {
      const pathEl = pathRefs.current[card.id];
      if (!pathEl) return;
      const length = pathEl.getTotalLength();
      newDurations[card.id] = Math.max(0.8, length / SPEED);
    });
    setDurations(newDurations);
  };
  // ─────────────────────────────────────────────────────────────────────────

  useEffect(() => {
    calculateLines();

    const observer = new ResizeObserver(calculateLines);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // ── ADD 3: effect that fires calculateDurations after lines are set ───────
  useEffect(() => {
    if (Object.keys(lines).length === 0) return;
    const timeout = setTimeout(calculateDurations, 0);
    return () => clearTimeout(timeout);
  }, [lines]);
  // ─────────────────────────────────────────────────────────────────────────

  return (
    <section className="flex flex-col gap-24 items-center py-24 w-full bg-bg-primary">
      {/* Title group */}
      <div className="flex flex-col md:flex-col gap-24 items-center max-w-310 px-8 w-full">
        <div className="flex flex-col gap-5 shrink-0 items-center justify-center">
          <h2 className="font-neue-montreal font-medium text-[48px] leading-15 tracking-[-0.96px] text-[#17171C] w-full md:w-184 text-center">
            One API call. One structured report.{" "}
            <span className="text-accent">One risk decision.</span>
          </h2>
        </div>
      </div>

      {/* Layout container */}
      <div
        ref={containerRef}
        className="relative flex md:flex-col gap-24 items-center justify-center max-w-310 px-8 w-full min-h-130"
      >
        {/* ── SVG connector lines — behind everything ── */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ overflow: "visible" }}
        >
          <defs>
            {/* Glow filter for the pulse dot */}
            <filter
              id="pulse-glow"
              x="-100%"
              y="-100%"
              width="300%"
              height="300%"
            >
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {cards.map((card, i) => {
            const line = lines[card.id];
            if (!line) return null;

            const { x1, y1, x2, y2 } = line;
            const midX = (x1 + x2) / 2;

            const dur = durations[card.id] ?? 2.4;

            const d =
              Math.abs(y1 - y2) < 2
                ? `M ${x1} ${y1} H ${x2}`
                : `M ${x1} ${y1} H ${midX} V ${y2} H ${x2}`;

            return (
              <g key={card.id}>
                {/* Static line */}
                <path
                  id={`line-${card.id}`}
                  d={d}
                  stroke="#E3E3E8"
                  strokeWidth="1"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Pulse dot — travels from floating card to report card */}
                <circle
                  r="1.675"
                  fill="#9E9EAD"
                  filter="url(#pulse-glow)"
                  opacity="0.8"
                >
                  <animateMotion
                    dur={`${dur}s`}
                    begin={`${i * 0.4}s`}
                    repeatCount="indefinite"
                    calcMode="linear"
                  >
                    <mpath href={`#line-${card.id}`} />
                  </animateMotion>
                </circle>
              </g>
            );
          })}
        </svg>

        {/* ── Floating cards ── */}
        {cards.map((card) => (
          <FloatingCard
            key={card.id}
            card={card}
            refCallback={(el) => {
              cardRefs.current[card.id] = el;
            }}
          />
        ))}

        {/* ── Report card — center ── */}
        <div ref={reportCardRef} className="relative z-10">
          <FullReportCard />
        </div>
      </div>

      {/* Body copy */}
      <div className="flex flex-col md:flex-col gap-24 items-center max-w-310 px-8 w-full">
        <p className="text-xl text-center leading-7-5 text-[#4F4F5E] max-w-200">
          Every report is structured as JSON, delivered via API or viewable in
          the Subtext portal. Fields are consistent across every merchant, so
          you can build automated decisioning rules on top of Subtext&apos;s
          output without parsing unstructured text.
        </p>
      </div>
    </section>
  );
}
