"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// ── Types & Data ──────────────────────────────────────────────
type CaseStudy = {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
  logo: string;
  logoWidth: number;
  logoHeight: number;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "mastercard",
    title: "Selected for Start Path Security Solutions",
    description:
      "Mastercard chose Subtext for their global innovation program, recognizing AI-powered web presence analysis as a critical gap in how payment providers assess merchant risk.",
    href: "/customers/mastercard",
    image: "/images/lightspeed_bg.avif",
    logo: "/images/logos/mastercard.svg",
    logoWidth: 100,
    logoHeight: 60,
  },
  {
    id: "parafin",
    title: "Screening 4,000 merchants without adding a single risk analyst",
    description:
      "Parafin embedded Subtext into their merchant cash advance underwriting flow to verify business legitimacy before any capital decision is made, reducing risk while scaling operations.",
    href: "/customers/parafin",
    image: "/images/parafin_bg.avif",
    logo: "/images/logos/parafin_logo.svg.svg",
    logoWidth: 112,
    logoHeight: 32,
  },
  {
    id: "moodys",
    title: "50% faster merchant underwriting timeline",
    description:
      "Moody's combined Subtext's real-time web presence analysis with their existing data and decision solutions, cutting the time it takes to underwrite a merchant by half.",
    href: "/customers/moody's",
    image: "/images/moody's_bg.avif",
    logo: "/images/logos/moody's.svg",
    logoWidth: 141,
    logoHeight: 60,
  },
  {
    id: "globalbank",
    title: "73% reduction in manual merchant reviews",
    description:
      "GlobalBank automated first-pass screening entirely — cutting manual reviews from 8,400 to 2,200 per quarter and reducing onboarding time from 6 days to 18 hours.",
    href: "/customers/globalbank",
    image: "/images/globalbank_bg.avif",
    logo: "/images/logos/globalbank.svg",
    logoWidth: 99,
    logoHeight: 60,
  },
];

// ── Icons ──────────────────────────────────────────────────────
function ChevronIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 10 10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="transition-all duration-200 group-hover:opacity-0 group-hover:translate-x-1"
    >
      <path d="M3.5 1.5l4 3.5-4 3.5" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 10 10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="absolute opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
    >
      <path d="M0.5 5.5h7" />
      <path d="M5 1.5l4 4-4 4" />
    </svg>
  );
}

// ── Card ───────────────────────────────────────────────────────
function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <li className="shrink-0 w-85 transition-[width] duration-500 ease-out hover:w-90">
      <Link href={study.href} className="group block">
        {/* Image container — fixed height, image fills it */}
        <div className="relative w-full h-95 rounded-xl overflow-hidden bg-neutral-100 mb-5">
          <Image
            src={study.image}
            alt=""
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            sizes="360px"
          />
          {/* Logo — centered */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-30 h-10">
              <Image
                src={study.logo}
                alt=""
                fill
                className="object-contain brightness-0 invert"
                sizes="120px"
              />
            </div>
          </div>
        </div>

        {/* Title — fixed width, never changes */}
        <h4 className="text-body-lg leading-6 font-medium text-neutral-900 mb-3 pr-4 max-w-[320px]">
          {study.title}
        </h4>

        {/* Description — fixed width */}
        <p className="text-body-md leading-6 text-neutral-600 mb-4 pr-4 max-w-[320px] text-pretty">
          {study.description}
        </p>

        {/* CTA Link — chevron swaps to arrow on hover */}
        <div className="inline-flex items-center gap-1 text-[15px] text-amber-900 group-hover:text-amber-950 transition-colors">
          Read {study.id.charAt(0).toUpperCase() + study.id.slice(1)}
          &apos;s story
          <span className="relative inline-flex items-center w-3 h-3">
            <ChevronIcon />
            <ArrowIcon />
          </span>
        </div>
      </Link>
    </li>
  );
}

// ── Carousel ──────────────────────────────────────────────────
export default function CaseStudyCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateButtons = () => {
    const el = scrollRef.current;
    if (!el) return;

    const hasLeftScroll = el.scrollLeft > 1;
    const hasRightScroll = el.scrollLeft + el.clientWidth < el.scrollWidth - 2;

    setCanScrollLeft(hasLeftScroll);
    setCanScrollRight(hasRightScroll);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const observer = new ResizeObserver(() => {
      updateButtons();
    });

    observer.observe(el);
    el.addEventListener("scroll", updateButtons, { passive: true });

    return () => {
      observer.disconnect();
      el.removeEventListener("scroll", updateButtons);
    };
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = 340 + 16; // card width + gap
    el.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="max-w-310 mx-auto px-8">
      {/* Navigation arrows */}
      <div className="flex items-center justify-end gap-2 mb-6">
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className="p-2.5 rounded-full border border-neutral-400 text-neutral-900 hover:bg-neutral-200 disabled:opacity-25 disabled:cursor-not-allowed transition-all"
          aria-label="Previous customer story"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M9.613 2.62 5.107 7.124h9.137v1.75H5.107l4.506 4.506-1.238 1.238-6-6L1.756 8l.619-.62 6-6 1.238 1.24Z" />
          </svg>
        </button>
        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className="p-2.5 rounded-full border border-neutral-400 text-neutral-900 hover:bg-neutral-200 disabled:opacity-25 disabled:cursor-not-allowed transition-all"
          aria-label="Next customer story"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="m6.387 2.62 4.506 4.505H1.756v1.75h9.137l-4.506 4.506 1.238 1.238 6-6L14.245 8l-.618-.62-6-6-1.239 1.24Z" />
          </svg>
        </button>
      </div>

      {/* Scrollable track */}
      <div ref={scrollRef} className="overflow-x-auto scrollbar-hide">
        <ul className="flex gap-4 pb-4" role="list">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </ul>
      </div>
    </div>
  );
}
