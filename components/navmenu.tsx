"use client";

import Link from "next/link";

// ─── Illustrations ────────────────────────────────────────────────────────────

function MerchantScreeningIllustration() {
  return (
    <svg
      viewBox="0 0 240 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Dot grid — static snapshot of resolved state */}
      {Array.from({ length: 8 }, (_, row) =>
        Array.from({ length: 12 }, (_, col) => {
          const x = 16 + col * 19;
          const y = 16 + row * 18;
          const isFlagged = [
            "2-3",
            "5-1",
            "8-5",
            "3-6",
            "10-2",
            "7-4",
            "1-5",
            "9-6",
          ].includes(`${col}-${row}`);
          return isFlagged ? (
            // X mark for flagged
            <g key={`${col}-${row}`} className="transition-colors duration-300">
              <line
                x1={x - 3}
                y1={y - 3}
                x2={x + 3}
                y2={y + 3}
                className="stroke-[#EFD25A] group-hover:stroke-[#E5A422] transition-colors duration-300"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
              <line
                x1={x + 3}
                y1={y - 3}
                x2={x - 3}
                y2={y + 3}
                className="stroke-[#EFD25A] group-hover:stroke-[#E5A422] transition-colors duration-300"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </g>
          ) : (
            <circle
              key={`${col}-${row}`}
              cx={x}
              cy={y}
              r="1.8"
              fill="#1A9A6F"
              opacity="0.5"
            />
          );
        })
      )}
    </svg>
  );
}

function DeepInvestigationIllustration() {
  return (
    <svg
      viewBox="0 0 240 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Document */}
      <rect
        x="60"
        y="20"
        width="100"
        height="90"
        rx="6"
        fill="#F4F4F5"
        stroke="#E3E3E8"
        strokeWidth="1.2"
      />
      {/* Document lines */}
      <rect x="74" y="36" width="72" height="4" rx="2" fill="#E3E3E8" />
      <rect x="74" y="48" width="56" height="4" rx="2" fill="#E3E3E8" />
      <rect x="74" y="60" width="64" height="4" rx="2" fill="#E3E3E8" />
      <rect x="74" y="72" width="48" height="4" rx="2" fill="#E3E3E8" />
      {/* Magnifying glass */}
      <circle
        cx="148"
        cy="82"
        r="26"
        fill="white"
        stroke="#E3E3E8"
        strokeWidth="1.5"
      />
      <circle
        cx="148"
        cy="82"
        r="18"
        className="fill-[#FFF7ED] stroke-[#EFD25A] group-hover:fill-[#FFF3E0] group-hover:stroke-[#E5A422] transition-colors duration-300"
        strokeWidth="1.5"
      />
      {/* Document lines visible through magnifier */}
      <rect x="140" y="77" width="16" height="3" rx="1.5" fill="#E3E3E8" />
      <rect x="140" y="84" width="12" height="3" rx="1.5" fill="#E3E3E8" />
      {/* Magnifier handle */}
      <line
        x1="161"
        y1="95"
        x2="172"
        y2="108"
        className="stroke-[#EFD25A] group-hover:stroke-[#E5A422] transition-colors duration-300"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ContinuousMonitoringIllustration() {
  return (
    <svg
      viewBox="0 0 240 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Radar rings */}
      <circle
        cx="120"
        cy="70"
        r="60"
        stroke="#E3E3E8"
        strokeWidth="1"
        strokeDasharray="4 4"
      />
      <circle
        cx="120"
        cy="70"
        r="40"
        stroke="#E3E3E8"
        strokeWidth="1"
        strokeDasharray="4 4"
      />
      <circle cx="120" cy="70" r="20" stroke="#E3E3E8" strokeWidth="1" />
      {/* Center dot */}
      <circle
        cx="120"
        cy="70"
        r="5"
        className="fill-[#EFD25A] group-hover:fill-[#E5A422] transition-colors duration-300"
      />
      {/* Merchant dot 1 — verified */}
      <circle cx="152" cy="38" r="5" fill="#1A9A6F" opacity="0.8" />
      <circle cx="152" cy="38" r="10" fill="#1A9A6F" opacity="0.1" />
      {/* Merchant dot 2 — flagged */}
      <circle
        cx="78"
        cy="90"
        r="5"
        className="fill-[#EFD25A] group-hover:fill-[#E5A422] transition-colors duration-300"
        opacity="0.8"
      />
      <circle
        cx="78"
        cy="90"
        r="10"
        className="fill-[#EFD25A] group-hover:fill-[#E5A422] transition-colors duration-300"
        opacity="0.1"
      />
      {/* Scan line */}
      <line
        x1="120"
        y1="70"
        x2="152"
        y2="38"
        className="stroke-[#EFD25A] group-hover:stroke-[#E5A422] transition-colors duration-300"
        strokeWidth="1"
        opacity="0.4"
      />
    </svg>
  );
}

function ComplianceReportsIllustration() {
  return (
    <svg
      viewBox="0 0 240 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Back document */}
      <rect
        x="76"
        y="28"
        width="100"
        height="110"
        rx="6"
        fill="#F4F4F5"
        stroke="#E3E3E8"
        strokeWidth="1.2"
        transform="rotate(-4 76 28)"
      />
      {/* Middle document */}
      <rect
        x="72"
        y="22"
        width="100"
        height="110"
        rx="6"
        fill="#FAFAFA"
        stroke="#E3E3E8"
        strokeWidth="1.2"
        transform="rotate(-1.5 72 22)"
      />
      {/* Front document */}
      <rect
        x="68"
        y="18"
        width="100"
        height="110"
        rx="6"
        fill="white"
        stroke="#E3E3E8"
        strokeWidth="1.2"
      />
      {/* Document content */}
      <rect x="82" y="34" width="72" height="4" rx="2" fill="#E3E3E8" />
      <rect x="82" y="46" width="56" height="4" rx="2" fill="#E3E3E8" />
      <rect x="82" y="58" width="64" height="4" rx="2" fill="#E3E3E8" />
      <rect x="82" y="70" width="40" height="4" rx="2" fill="#E3E3E8" />
      {/* Status badge */}
      <rect
        x="82"
        y="86"
        width="52"
        height="20"
        rx="10"
        className="fill-[#FFF7ED] stroke-[#EFD25A] group-hover:fill-[#FFF3E0] group-hover:stroke-[#E5A422] transition-colors duration-300"
        strokeWidth="1"
      />
      <circle
        cx="95"
        cy="96"
        r="3"
        className="fill-[#EFD25A] group-hover:fill-[#E5A422] transition-colors duration-300"
      />
      <rect
        x="102"
        y="93"
        width="24"
        height="3"
        rx="1.5"
        className="fill-[#EFD25A] group-hover:fill-[#E5A422] transition-colors duration-300"
      />
      {/* Timestamp line */}
      <rect
        x="82"
        y="114"
        width="48"
        height="3"
        rx="1.5"
        fill="#E3E3E8"
        opacity="0.6"
      />
    </svg>
  );
}

// ─── Nav Menu ─────────────────────────────────────────────────────────────────

type MenuCard = {
  title: string;
  description: string;
  href: string;
  comingSoon?: boolean; // renamed from isNew
  illustration: React.ReactNode;
  tall: boolean;
};

const menuCards: MenuCard[] = [
  {
    title: "Merchant Screening",
    description: "Screen merchants at onboarding — in seconds, not days.",
    href: "/merchant-screening",
    illustration: <MerchantScreeningIllustration />,
    tall: true,
  },
  {
    title: "Deep Investigation",
    description: "When a case needs more than a quick check.",
    href: "/deep-investigation",
    comingSoon: true, // ← was isNew
    illustration: <DeepInvestigationIllustration />,
    tall: false,
  },
  {
    title: "Continuous Monitoring",
    description: "Good merchants today can become risky merchants tomorrow.",
    href: "/continuous-monitoring",
    comingSoon: true,
    illustration: <ContinuousMonitoringIllustration />,
    tall: false,
  },
  {
    title: "Compliance Reports",
    description: "Turn risk findings into audit-ready documentation.",
    href: "/compliance-reports",
    comingSoon: true,
    illustration: <ComplianceReportsIllustration />,
    tall: true,
  },
];

// ─── Nav Card Component ─────────────────────────────────────────────────────────────────

function NavCard({ card }: { card: MenuCard }) {
  const inner = (
    <>
      {/* Illustration — top portion */}
      <div className="absolute inset-0 bottom-18 overflow-clip">
        {card.illustration}
        <div
          className={`absolute bottom-0 left-0 right-0 h-16 bg-linear-to-b from-transparent ${
            card.comingSoon ? "to-white" : "to-white group-hover:to-[#FCFCFC]"
          } transition-colors`}
        />
      </div>

      {/* Copy — bottom anchored */}
      <div className="relative flex flex-col gap-1 w-full z-10">
        {card.comingSoon ? (
          <div className="flex gap-1.5 items-center">
            <p className="font-neue-montreal font-medium text-[14px] leading-5 text-[#17171C] whitespace-nowrap">
              {card.title}
            </p>
            <span className="bg-[#FFF7ED] border border-[#F5E592] text-[#CA7D15] font-medium text-[12px] leading-4.5 px-2 py-0.5 rounded-full whitespace-nowrap">
              Coming soon
            </span>
          </div>
        ) : (
          <p className="font-neue-montreal font-medium text-[14px] leading-5 text-[#17171C] whitespace-nowrap">
            {card.title}
          </p>
        )}
        <p className="font-neue-montreal text-[14px] leading-5 text-[#4F4F5E]">
          {card.description}
        </p>
      </div>
    </>
  );

  const sharedClass = `flex flex-col items-start justify-end w-full overflow-clip p-4 relative transition-colors border-b border-black/5 last:border-b-0 ${
    card.tall ? "min-h-70" : "min-h-50"
  }`;

  // Coming soon — div, not a link. Cursor default, no hover state.
  if (card.comingSoon) {
    return (
      <Link
        href={card.href}
        onClick={(e) => e.preventDefault()}
        className={`group ${sharedClass} hover:bg-[#FCFCFC] cursor-default`}
      >
        {inner}
      </Link>
    );
  }

  // Active — real link with hover
  return (
    <Link
      href={card.href}
      className={`group ${sharedClass} hover:bg-[#FCFCFC]`}
    >
      {inner}
    </Link>
  );
}

export default function NavMenu() {
  return (
    <div className="bg-[#F4F4F5] flex flex-col gap-3 items-start overflow-clip p-1 rounded-xl w-full">
      {/* Four product cards */}
      <div className="bg-white border border-black/10 flex items-start overflow-clip rounded-lg shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] w-full">
        {/* Left column */}
        <div className="flex flex-1 flex-col items-start min-w-0">
          {[menuCards[0], menuCards[1]].map((card) => (
            <NavCard key={card.title} card={card} />
          ))}
        </div>

        {/* Divider */}
        <div className="w-px self-stretch bg-black/5" />

        {/* Right column */}
        <div className="flex flex-1 flex-col items-start min-w-0">
          {[menuCards[2], menuCards[3]].map((card) => (
            <NavCard key={card.title} card={card} />
          ))}
        </div>
      </div>

      {/* API Documentation footer row */}
      <div className="flex items-center justify-between px-5 py-3 rounded-lg w-full">
        <div className="flex gap-3 items-center">
          <div className="bg-[#E3E3E8] border border-black/10 flex items-center justify-center rounded-full size-12 shrink-0">
            <svg
              className="size-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#4F4F5E"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-neue-montreal font-medium text-[14px] leading-5 text-[#17171C] whitespace-nowrap">
              API Documentation
            </p>
            <p className="font-neue-montreal text-[14px] leading-5 text-[#4F4F5E] whitespace-nowrap">
              One endpoint, one call. Everything you need to start screening.
            </p>
          </div>
        </div>

        {/* View API Docs button */}
        <Link
          href="/docs"
          className="flex items-center gap-1 border border-[#D4D4D4] px-3 py-2 rounded-sm shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05),inset_0px_0px_0px_1px_rgba(0,0,0,0.05),inset_0px_-2px_0px_0px_rgba(0,0,0,0.05)] bg-white hover:bg-[#FCFCFC] transition-colors relative"
        >
          <span className="font-medium text-[14px] leading-5 text-[#404040] whitespace-nowrap">
            View API Docs
          </span>
          <svg
            className="size-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#9E9EAD"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
