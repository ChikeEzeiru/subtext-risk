import React from "react";

export default function MerchantAnalysis() {
  return (
    <section className="flex flex-col gap-16 items-center px-8 py-24 w-full max-w-310 mx-auto">
      {/* Section heading */}
      <h2 className="font-neue-montreal font-medium text-[48px] leading-15 tracking-[-0.96px] text-[#17171C] text-center">
        <span className="block">We read what your analysts would find</span>
        <span className="block">and what they&apos;d miss.</span>
      </h2>

      {/* Bento grid — 3 cols desktop, 1 col mobile */}
      <div className="flex flex-col md:flex-row gap-3 w-full">
        {/* Column 1 */}
        <div className="flex flex-col gap-3 flex-1 min-w-0">
          {/* Card 1 — Website Verification (tall) */}
          <div className="group relative flex flex-col overflow-hidden rounded-xl border border-black/10 min-h-146 md:min-h-146 bg-white p-5">
            <div className="absolute inset-0 pointer-events-none rounded-[inherit] " />
            {/* Copy */}
            <p className="font-neue-montreal text-[20px] leading-7-5 text-[#26262B] relative z-10">
              <span className="font-medium">
                Is the business real and operational?
              </span>{" "}
              <span className="text-[#4F4F5E]">
                We verify the merchant&apos;s website is live, has real content,
                and matches what they claim to be. Not a parked domain. Not a
                template. An actual operating business.
              </span>
            </p>
            {/* Illustration */}
            <div className="flex-1 flex items-end justify-center mt-6 overflow-hidden">
              <svg
                viewBox="0 0 280 180"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full"
              >
                {/* Browser frame */}
                <path
                  d="M20 24H260V168H20V24Z"
                  stroke="#D9D9DE"
                  strokeWidth="1.5"
                />
                {/* Title bar divider */}
                <path d="M20 42H260" stroke="#D9D9DE" strokeWidth="1.5" />
                {/* Window dots */}
                <circle
                  cx="34"
                  cy="33"
                  r="3"
                  stroke="#D9D9DE"
                  strokeWidth="1.5"
                />
                <circle
                  cx="46"
                  cy="33"
                  r="3"
                  stroke="#D9D9DE"
                  strokeWidth="1.5"
                />
                <circle
                  cx="58"
                  cy="33"
                  r="3"
                  stroke="#D9D9DE"
                  strokeWidth="1.5"
                />
                {/* URL bar */}
                <path
                  d="M72 27H228V39H72V27Z"
                  stroke="#D9D9DE"
                  strokeWidth="1.5"
                />
                {/* Lock symbol — two lines */}
                <path
                  d="M82 36V31M82 31C84.2 31 86 29.2 86 27M82 31C79.8 31 78 29.2 78 27"
                  stroke="#D9D9DE"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M78 33H86V37H78V33Z"
                  stroke="#D9D9DE"
                  strokeWidth="1.5"
                />
                {/* URL text line */}
                <path d="M92 32H180" stroke="#D9D9DE" strokeWidth="1.5" />
                {/* Layout grid inside browser */}
                {/* Sidebar */}
                <path d="M20 42H72V168" stroke="#D9D9DE" strokeWidth="1.5" />
                {/* Content rows */}
                <path d="M84 56H252" stroke="#D9D9DE" strokeWidth="1.5" />
                <path d="M84 68H252" stroke="#D9D9DE" strokeWidth="1.5" />
                <path d="M84 80H252" stroke="#D9D9DE" strokeWidth="1.5" />
                <path d="M84 92H252" stroke="#D9D9DE" strokeWidth="1.5" />
                {/* Sidebar nav lines */}
                <path d="M30 54H62" stroke="#D9D9DE" strokeWidth="1.5" />
                <path d="M30 64H62" stroke="#D9D9DE" strokeWidth="1.5" />
                <path d="M30 74H62" stroke="#D9D9DE" strokeWidth="1.5" />
                <path d="M30 84H62" stroke="#D9D9DE" strokeWidth="1.5" />
                {/* Verified block — accent fill */}
                <path
                  d="M84 102H180V124H84V102Z"
                  className="fill-[#EEF5FF] group-hover:fill-[#FFF7ED] transition-colors duration-300"
                  stroke="#D9D9DE"
                  strokeWidth="1.5"
                />
                {/* Checkmark in verified block */}
                <path
                  d="M104 113l8 8 16-16"
                  className="stroke-[#D9D9DE] group-hover:stroke-[#CA7D15] transition-colors duration-300"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* SSL block — subtle */}
                <path
                  d="M188 102H252V124H188V102Z"
                  fill="#F7F7F8"
                  stroke="#D9D9DE"
                  strokeWidth="1.5"
                />
                <path d="M198 110H242" stroke="#D9D9DE" strokeWidth="1.5" />
                <path d="M198 116H228" stroke="#D9D9DE" strokeWidth="1.5" />
                {/* Footer rows */}
                <path d="M84 136H252" stroke="#D9D9DE" strokeWidth="1.5" />
                <path d="M84 148H252" stroke="#D9D9DE" strokeWidth="1.5" />
                <path d="M84 160H252" stroke="#D9D9DE" strokeWidth="1.5" />
              </svg>
            </div>
          </div>

          {/* Card 4 — Review Sentiment (short) */}
          <div className="group relative flex flex-col overflow-hidden rounded-xl border border-black/10  min-h-106 md:min-h-106 bg-white p-5">
            <div className="absolute inset-0 pointer-events-none rounded-[inherit] " />
            <p className="font-neue-montreal text-[20px] leading-7-5 text-[#26262B] relative z-10">
              <span className="font-medium">What do their customers say?</span>{" "}
              <span className="text-[#4F4F5E]">
                We scan third-party review sites for sentiment, complaint
                patterns, and volume trends. A business with 300 positive
                reviews and a sudden spike in complaints tells a different story
                than the website alone.
              </span>
            </p>
            <div className="flex-1 flex items-end justify-center mt-6 overflow-hidden">
              <svg
                viewBox="0 0 280 140"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full"
              >
                {/* Review card */}
                <rect
                  x="24"
                  y="10"
                  width="232"
                  height="80"
                  rx="8"
                  fill="white"
                  stroke="#E3E3E8"
                  strokeWidth="1.2"
                />
                {/* Stars */}
                {[40, 58, 76, 94, 112].map((x, i) => (
                  <rect
                    key={i}
                    x={x}
                    y="24"
                    width="12"
                    height="12"
                    rx="2"
                    className={
                      i < 4
                        ? "fill-[#E5A422] group-hover:fill-[#CA7D15] transition-colors duration-300"
                        : "fill-[#F4F4F5]"
                    }
                  />
                ))}
                <rect
                  x="130"
                  y="24"
                  width="24"
                  height="12"
                  rx="3"
                  fill="#F4F4F5"
                />
                {/* Review lines */}
                <rect
                  x="40"
                  y="46"
                  width="192"
                  height="5"
                  rx="2.5"
                  fill="#E3E3E8"
                />
                <rect
                  x="40"
                  y="58"
                  width="160"
                  height="5"
                  rx="2.5"
                  fill="#E3E3E8"
                />
                <rect
                  x="40"
                  y="70"
                  width="120"
                  height="5"
                  rx="2.5"
                  fill="#E3E3E8"
                />
                {/* Sentiment bar */}
                <rect
                  x="24"
                  y="106"
                  width="232"
                  height="20"
                  rx="6"
                  fill="#F4F4F5"
                />
                <rect
                  x="24"
                  y="106"
                  width="180"
                  height="20"
                  rx="6"
                  className="fill-[#DCFCE7] group-hover:fill-[#FFF7ED] transition-colors duration-300"
                />
                <rect
                  x="34"
                  y="113"
                  width="44"
                  height="6"
                  rx="3"
                  className="fill-[#1A9A6F] group-hover:fill-[#CA7D15] transition-colors duration-300"
                />
                {/* Spike warning */}
                <rect
                  x="204"
                  y="106"
                  width="52"
                  height="20"
                  rx="0 6 6 0"
                  className="fill-[#FFF7ED] group-hover:fill-[#FFEDD5] transition-colors duration-300"
                />
                <rect
                  x="210"
                  y="113"
                  width="34"
                  height="6"
                  rx="3"
                  className="fill-[#E5A422] group-hover:fill-[#CA7D15] transition-colors duration-300"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-3 shrink-0 w-full md:w-95.25">
          {/* Card 2 — Industry Classification (short) */}
          <div className="group relative flex flex-col overflow-hidden rounded-xl border border-black/10  min-h-106 md:min-h-106 bg-white p-5">
            <div className="absolute inset-0 pointer-events-none rounded-[inherit] " />
            <p className="font-neue-montreal text-[20px] leading-7-5 text-[#26262B] relative z-10">
              <span className="font-medium">
                What does this business actually do?
              </span>{" "}
              <span className="text-[#4F4F5E]">
                We analyze website content, product pages, and service
                descriptions to classify the merchant&apos;s industry — and flag
                mismatches between what they say and what they sell.
              </span>
            </p>
            <div className="flex-1 flex items-end justify-center mt-6 overflow-hidden">
              <svg
                viewBox="0 0 320 160"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full"
              >
                {/* Central card */}
                <rect
                  x="88"
                  y="10"
                  width="144"
                  height="140"
                  rx="8"
                  fill="white"
                  stroke="#E3E3E8"
                  strokeWidth="1"
                />
                {/* Card header */}
                <rect
                  x="88"
                  y="10"
                  width="144"
                  height="32"
                  rx="8"
                  fill="#F4F4F5"
                />
                <rect x="88" y="30" width="144" height="12" fill="#F4F4F5" />
                <rect
                  x="100"
                  y="20"
                  width="64"
                  height="6"
                  rx="3"
                  fill="#E3E3E8"
                />
                {/* Content rows */}
                <rect
                  x="100"
                  y="52"
                  width="120"
                  height="5"
                  rx="2.5"
                  fill="#E3E3E8"
                />
                <rect
                  x="100"
                  y="63"
                  width="96"
                  height="5"
                  rx="2.5"
                  fill="#E3E3E8"
                />
                <rect
                  x="100"
                  y="74"
                  width="108"
                  height="5"
                  rx="2.5"
                  fill="#E3E3E8"
                />
                {/* Industry classification tag */}
                <rect
                  x="100"
                  y="90"
                  width="120"
                  height="24"
                  rx="12"
                  className="fill-[#FFF7ED] group-hover:fill-[#FFF3E0] transition-colors duration-300"
                />
                <rect
                  x="100"
                  y="90"
                  width="120"
                  height="24"
                  rx="12"
                  className="stroke-[#E5A422] group-hover:stroke-[#CA7D15] transition-colors duration-300"
                  fill="none"
                  strokeWidth="1"
                />
                <rect
                  x="112"
                  y="99"
                  width="52"
                  height="6"
                  rx="3"
                  className="fill-[#E5A422] group-hover:fill-[#CA7D15] transition-colors duration-300"
                />
                <rect
                  x="168"
                  y="99"
                  width="40"
                  height="6"
                  rx="3"
                  className="fill-[#E5A422] group-hover:fill-[#CA7D15] transition-colors duration-300"
                  opacity="0.35"
                />
                {/* Confidence score */}
                <rect
                  x="100"
                  y="122"
                  width="120"
                  height="16"
                  rx="4"
                  fill="#F4F4F5"
                />
                <rect
                  x="100"
                  y="122"
                  width="88"
                  height="16"
                  rx="4"
                  className="fill-[#DCFCE7] group-hover:fill-[#FFF7ED] transition-colors duration-300"
                />
                {/* Floating category chips */}
                <rect
                  x="6"
                  y="40"
                  width="72"
                  height="22"
                  rx="11"
                  fill="white"
                  stroke="#E3E3E8"
                  strokeWidth="1"
                />
                <rect
                  x="14"
                  y="47"
                  width="48"
                  height="5"
                  rx="2.5"
                  fill="#D4D4D4"
                />
                <rect
                  x="6"
                  y="72"
                  width="72"
                  height="22"
                  rx="11"
                  fill="white"
                  stroke="#E3E3E8"
                  strokeWidth="1"
                />
                <rect
                  x="14"
                  y="79"
                  width="36"
                  height="5"
                  rx="2.5"
                  fill="#D4D4D4"
                />
                <rect
                  x="6"
                  y="104"
                  width="72"
                  height="22"
                  rx="11"
                  fill="white"
                  stroke="#E3E3E8"
                  strokeWidth="1"
                />
                <rect
                  x="14"
                  y="111"
                  width="44"
                  height="5"
                  rx="2.5"
                  fill="#D4D4D4"
                />
                <rect
                  x="242"
                  y="40"
                  width="72"
                  height="22"
                  rx="11"
                  fill="white"
                  stroke="#E3E3E8"
                  strokeWidth="1"
                />
                <rect
                  x="250"
                  y="47"
                  width="48"
                  height="5"
                  rx="2.5"
                  fill="#D4D4D4"
                />
                <rect
                  x="242"
                  y="72"
                  width="72"
                  height="22"
                  rx="11"
                  fill="white"
                  stroke="#E3E3E8"
                  strokeWidth="1"
                />
                <rect
                  x="250"
                  y="79"
                  width="36"
                  height="5"
                  rx="2.5"
                  fill="#D4D4D4"
                />
                <rect
                  x="242"
                  y="104"
                  width="72"
                  height="22"
                  rx="11"
                  fill="white"
                  stroke="#E3E3E8"
                  strokeWidth="1"
                />
                <rect
                  x="250"
                  y="111"
                  width="44"
                  height="5"
                  rx="2.5"
                  fill="#D4D4D4"
                />
                {/* Connector lines */}
                <line
                  x1="78"
                  y1="51"
                  x2="88"
                  y2="62"
                  stroke="#E3E3E8"
                  strokeWidth="0.8"
                  strokeDasharray="3 2"
                />
                <line
                  x1="78"
                  y1="83"
                  x2="88"
                  y2="79"
                  stroke="#E3E3E8"
                  strokeWidth="0.8"
                  strokeDasharray="3 2"
                />
                <line
                  x1="78"
                  y1="115"
                  x2="88"
                  y2="104"
                  stroke="#E3E3E8"
                  strokeWidth="0.8"
                  strokeDasharray="3 2"
                />
                <line
                  x1="242"
                  y1="51"
                  x2="232"
                  y2="62"
                  stroke="#E3E3E8"
                  strokeWidth="0.8"
                  strokeDasharray="3 2"
                />
                <line
                  x1="242"
                  y1="83"
                  x2="232"
                  y2="79"
                  stroke="#E3E3E8"
                  strokeWidth="0.8"
                  strokeDasharray="3 2"
                />
                <line
                  x1="242"
                  y1="115"
                  x2="232"
                  y2="104"
                  stroke="#E3E3E8"
                  strokeWidth="0.8"
                  strokeDasharray="3 2"
                />
              </svg>
            </div>
          </div>

          {/* Card 5 — Location Validation (tall) */}
          <div className="group relative flex flex-col overflow-hidden rounded-xl border border-black/10  min-h-146 md:min-h-146 bg-white p-5">
            <div className="absolute inset-0 pointer-events-none rounded-[inherit] " />
            <p className="font-neue-montreal text-[20px] leading-7-5 text-[#26262B] relative z-10">
              <span className="font-medium">
                Is the business where they say they are?
              </span>{" "}
              <span className="text-[#4F4F5E]">
                We cross-reference registered addresses with physical location
                signals — Google Maps listings, directory registrations,
                delivery zones, and service area claims.
              </span>
            </p>
            <div className="flex-1 flex items-end justify-center mt-6 overflow-hidden">
              <svg
                viewBox="0 0 280 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full"
              >
                {/* Map surface */}
                <rect
                  x="20"
                  y="10"
                  width="240"
                  height="160"
                  rx="8"
                  fill="#F4F4F5"
                  stroke="#E3E3E8"
                  strokeWidth="1.2"
                />
                {/* Grid lines */}
                {[20, 68, 116, 164, 212, 260].map((x) => (
                  <line
                    key={x}
                    x1={x}
                    y1="10"
                    x2={x}
                    y2="170"
                    stroke="#E3E3E8"
                    strokeWidth="0.6"
                  />
                ))}
                {[10, 50, 90, 130, 170].map((y) => (
                  <line
                    key={y}
                    x1="20"
                    y1={y}
                    x2="260"
                    y2={y}
                    stroke="#E3E3E8"
                    strokeWidth="0.6"
                  />
                ))}
                {/* Roads */}
                <path
                  d="M20 90 Q80 75 140 100 Q200 120 260 110"
                  stroke="white"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
                <path
                  d="M20 90 Q80 75 140 100 Q200 120 260 110"
                  stroke="#D4D4D4"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeDasharray="8 5"
                />
                <path
                  d="M120 10 Q132 60 138 100 Q144 130 140 170"
                  stroke="white"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
                <path
                  d="M120 10 Q132 60 138 100 Q144 130 140 170"
                  stroke="#D4D4D4"
                  strokeWidth="0.8"
                  strokeLinecap="round"
                  strokeDasharray="8 5"
                />
                {/* Pin shadow */}
                <ellipse
                  cx="140"
                  cy="164"
                  rx="12"
                  ry="4"
                  className="fill-[#E5A422] group-hover:fill-[#CA7D15] transition-colors duration-300"
                  opacity="0.2"
                />
                {/* Pin */}
                <path
                  d="M140 60 C128 60 118 70 118 82 C118 96 140 116 140 116 C140 116 162 96 162 82 C162 70 152 60 140 60Z"
                  className="fill-[#E5A422] group-hover:fill-[#CA7D15] transition-colors duration-300"
                />
                <circle cx="140" cy="82" r="9" fill="white" />
                <path
                  d="M136 82l2.5 2.5 5-5"
                  className="stroke-[#E5A422] group-hover:stroke-[#CA7D15] transition-colors duration-300"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Tooltip */}
                <rect
                  x="154"
                  y="54"
                  width="80"
                  height="28"
                  rx="6"
                  fill="white"
                  stroke="#E3E3E8"
                  strokeWidth="0.8"
                />
                <rect
                  x="164"
                  y="62"
                  width="48"
                  height="4"
                  rx="2"
                  fill="#E3E3E8"
                />
                <rect
                  x="164"
                  y="70"
                  width="30"
                  height="4"
                  rx="2"
                  className="fill-[#1A9A6F] group-hover:fill-[#CA7D15] transition-colors duration-300"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-3 flex-1 min-w-0">
          {/* Card 3 — Social Presence (tall) */}
          <div className="group relative flex flex-col overflow-hidden rounded-xl border border-black/10  min-h-146 md:min-h-146 bg-white p-5">
            <div className="absolute inset-0 pointer-events-none rounded-[inherit] " />
            <p className="font-neue-montreal text-[20px] leading-7-5 text-[#26262B] relative z-10">
              <span className="font-medium">
                Are they consistent across platforms?
              </span>{" "}
              <span className="text-[#4F4F5E]">
                We check social profiles for consistency with the
                business&apos;s claimed identity — activity levels, follower
                patterns, content alignment, and account age.
              </span>
            </p>
            <div className="flex-1 flex items-end justify-center mt-6 overflow-hidden">
              <svg
                viewBox="0 0 280 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full"
              >
                {/* Three profile cards */}
                {[28, 110, 192].map((x, i) => (
                  <g key={i}>
                    <rect
                      x={x}
                      y="30"
                      width="60"
                      height="80"
                      rx="6"
                      fill="white"
                      stroke="#E3E3E8"
                      strokeWidth="1"
                    />
                    <circle
                      cx={x + 30}
                      cy="58"
                      r="16"
                      fill="#F4F4F5"
                      stroke="#E3E3E8"
                      strokeWidth="0.8"
                    />
                    <rect
                      x={x + 10}
                      y="80"
                      width="40"
                      height="5"
                      rx="2.5"
                      fill="#E3E3E8"
                    />
                    <rect
                      x={x + 16}
                      y="90"
                      width="28"
                      height="4"
                      rx="2"
                      fill="#F4F4F5"
                    />
                    {/* Platform dot */}
                    <circle
                      cx={x + 30}
                      cy="22"
                      r="6"
                      fill={["#1877F2", "#E1306C", "#1DA1F2"][i]}
                      opacity="0.7"
                    />
                  </g>
                ))}
                {/* Connector lines */}
                <line
                  x1="88"
                  y1="70"
                  x2="110"
                  y2="70"
                  className="stroke-[#E5A422] group-hover:stroke-[#CA7D15] transition-colors duration-300"
                  strokeWidth="1.2"
                  strokeDasharray="3 2"
                />
                <line
                  x1="170"
                  y1="70"
                  x2="192"
                  y2="70"
                  className="stroke-[#E5A422] group-hover:stroke-[#CA7D15] transition-colors duration-300"
                  strokeWidth="1.2"
                  strokeDasharray="3 2"
                />
                {/* Consistency badge */}
                <rect
                  x="76"
                  y="132"
                  width="128"
                  height="32"
                  rx="16"
                  className="fill-[#DCFCE7] stroke-[#1A9A6F] group-hover:fill-[#FFF7ED] group-hover:stroke-[#CA7D15] transition-colors duration-300"
                  strokeWidth="1"
                />
                <circle
                  cx="96"
                  cy="148"
                  r="6"
                  className="fill-[#1A9A6F] group-hover:fill-[#CA7D15] transition-colors duration-300"
                />
                <path
                  d="M94 148l1.5 1.5 3-3"
                  stroke="white"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect
                  x="108"
                  y="144"
                  width="80"
                  height="8"
                  rx="4"
                  className="fill-[#1A9A6F] group-hover:fill-[#CA7D15] transition-colors duration-300"
                  opacity="0.3"
                />
                <rect
                  x="108"
                  y="144"
                  width="48"
                  height="8"
                  rx="4"
                  className="fill-[#1A9A6F] group-hover:fill-[#CA7D15] transition-colors duration-300"
                />
              </svg>
            </div>
          </div>

          {/* Card 6 — Blocklist Screening (short) */}
          <div className="group relative flex flex-col overflow-hidden rounded-xl border border-black/10  min-h-106 md:min-h-106 bg-white p-5">
            <div className="absolute inset-0 pointer-events-none rounded-[inherit] " />
            <p className="font-neue-montreal text-[20px] leading-7-5 text-[#26262B] relative z-10">
              <span className="font-medium">
                Have we seen this merchant before?
              </span>{" "}
              <span className="text-[#4F4F5E]">
                Every merchant is checked against our proprietary database of
                known fraudulent businesses, MATCH-listed entities, and
                previously flagged merchants across our network.
              </span>
            </p>
            <div className="flex-1 flex items-end justify-center mt-6 overflow-hidden">
              <svg
                viewBox="0 0 280 140"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full"
              >
                {/* Database stack */}
                <ellipse
                  cx="110"
                  cy="38"
                  rx="52"
                  ry="14"
                  fill="#F4F4F5"
                  stroke="#E3E3E8"
                  strokeWidth="1.2"
                />
                <rect
                  x="58"
                  y="38"
                  width="104"
                  height="48"
                  fill="#F4F4F5"
                  stroke="#E3E3E8"
                  strokeWidth="1.2"
                />
                <ellipse
                  cx="110"
                  cy="86"
                  rx="52"
                  ry="14"
                  fill="#F4F4F5"
                  stroke="#E3E3E8"
                  strokeWidth="1.2"
                />
                <ellipse
                  cx="110"
                  cy="38"
                  rx="36"
                  ry="8"
                  fill="none"
                  stroke="#E3E3E8"
                  strokeWidth="0.6"
                />
                {/* DB content lines */}
                <rect
                  x="80"
                  y="54"
                  width="60"
                  height="4"
                  rx="2"
                  fill="#E3E3E8"
                />
                <rect
                  x="80"
                  y="66"
                  width="44"
                  height="4"
                  rx="2"
                  fill="#E3E3E8"
                />
                {/* Scan beam */}
                <rect
                  x="58"
                  y="60"
                  width="104"
                  height="4"
                  rx="2"
                  className="fill-[#E5A422] group-hover:fill-[#CA7D15] transition-colors duration-300"
                  opacity="0.4"
                />
                {/* Arrow */}
                <path
                  d="M166 62 L186 62"
                  stroke="#E3E3E8"
                  strokeWidth="1.2"
                  strokeDasharray="4 3"
                />
                <path
                  d="M183 58 L188 62 L183 66"
                  stroke="#E3E3E8"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Result card */}
                <rect
                  x="188"
                  y="40"
                  width="72"
                  height="56"
                  rx="8"
                  fill="white"
                  stroke="#E3E3E8"
                  strokeWidth="1.2"
                />
                <circle
                  cx="224"
                  cy="62"
                  r="16"
                  className="fill-[#DCFCE7] stroke-[#1A9A6F] group-hover:fill-[#FFF7ED] group-hover:stroke-[#CA7D15] transition-colors duration-300"
                  strokeWidth="1"
                />
                <path
                  d="M218 62l3.5 3.5 7-7"
                  className="stroke-[#1A9A6F] group-hover:stroke-[#CA7D15] transition-colors duration-300"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect
                  x="196"
                  y="84"
                  width="56"
                  height="6"
                  rx="3"
                  className="fill-[#1A9A6F] group-hover:fill-[#CA7D15] transition-colors duration-300"
                  opacity="0.3"
                />
                <rect
                  x="204"
                  y="84"
                  width="40"
                  height="6"
                  rx="3"
                  className="fill-[#1A9A6F] group-hover:fill-[#CA7D15] transition-colors duration-300"
                />
                {/* Network nodes */}
                <circle
                  cx="30"
                  cy="118"
                  r="7"
                  fill="#F4F4F5"
                  stroke="#E3E3E8"
                  strokeWidth="1"
                />
                <line
                  x1="37"
                  y1="112"
                  x2="66"
                  y2="94"
                  stroke="#E3E3E8"
                  strokeWidth="0.8"
                  strokeDasharray="3 2"
                />
                <circle
                  cx="110"
                  cy="126"
                  r="7"
                  fill="#F4F4F5"
                  stroke="#E3E3E8"
                  strokeWidth="1"
                />
                <line
                  x1="110"
                  y1="119"
                  x2="110"
                  y2="100"
                  stroke="#E3E3E8"
                  strokeWidth="0.8"
                  strokeDasharray="3 2"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
