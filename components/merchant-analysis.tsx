"use client";

import Image from "next/image";

// ─── Card Component ───────────────────────────────────────────────────────────

function AnalysisCard({
  heading,
  body,
  illustration,
  className = "",
}: {
  heading: string;
  body: string;
  illustration?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`group relative flex flex-col gap-8 overflow-hidden rounded-xl border border-black/10 p-5 ${className}`}
    >
      <p className="font-neue-montreal text-[20px] leading-7-5 text-[#26262B] relative z-10 shrink-0">
        <span className="font-medium">{heading}</span>{" "}
        <span className="text-[#4F4F5E]">{body}</span>
      </p>
      <div className="relative flex-1 min-h-0 overflow-hidden rounded-md">
        {illustration}
      </div>
    </div>
  );
}

function IndustryIllustration() {
  return (
    <div className="relative w-full h-full">
      <svg
        width="100%"
        viewBox="0 0 341 392"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <filter
            id="ind-f0"
            x="50"
            y="169"
            width="60"
            height="65"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.1 0"
            />
            <feBlend mode="normal" in2="BackgroundImageFix" result="e1" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="3" />
            <feGaussianBlur stdDeviation="1.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.1 0"
            />
            <feBlend mode="normal" in2="e1" result="e2" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="1" dy="8" />
            <feGaussianBlur stdDeviation="2.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.05 0"
            />
            <feBlend mode="normal" in2="e2" result="e3" />
            <feBlend mode="normal" in="SourceGraphic" in2="e3" result="shape" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="-2" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.1 0"
            />
            <feBlend mode="normal" in2="shape" result="effect4_innerShadow" />
          </filter>
          <filter
            id="ind-f1"
            x="234"
            y="289"
            width="60"
            height="65"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.1 0"
            />
            <feBlend mode="normal" in2="BackgroundImageFix" result="e1" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="3" />
            <feGaussianBlur stdDeviation="1.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.1 0"
            />
            <feBlend mode="normal" in2="e1" result="e2" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="1" dy="8" />
            <feGaussianBlur stdDeviation="2.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.05 0"
            />
            <feBlend mode="normal" in2="e2" result="e3" />
            <feBlend mode="normal" in="SourceGraphic" in2="e3" result="shape" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="-2" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.1 0"
            />
            <feBlend mode="normal" in2="shape" result="effect4_innerShadow" />
          </filter>
          <filter
            id="ind-f2"
            x="142"
            y="169"
            width="60"
            height="65"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.1 0"
            />
            <feBlend mode="normal" in2="BackgroundImageFix" result="e1" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="3" />
            <feGaussianBlur stdDeviation="1.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.1 0"
            />
            <feBlend mode="normal" in2="e1" result="e2" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="1" dy="8" />
            <feGaussianBlur stdDeviation="2.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.05 0"
            />
            <feBlend mode="normal" in2="e2" result="e3" />
            <feBlend mode="normal" in="SourceGraphic" in2="e3" result="shape" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="-2" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.1 0"
            />
            <feBlend mode="normal" in2="shape" result="effect4_innerShadow" />
          </filter>
          <filter
            id="ind-f3"
            x="234"
            y="169"
            width="60"
            height="65"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.1 0"
            />
            <feBlend mode="normal" in2="BackgroundImageFix" result="e1" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="3" />
            <feGaussianBlur stdDeviation="1.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.1 0"
            />
            <feBlend mode="normal" in2="e1" result="e2" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="1" dy="8" />
            <feGaussianBlur stdDeviation="2.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.05 0"
            />
            <feBlend mode="normal" in2="e2" result="e3" />
            <feBlend mode="normal" in="SourceGraphic" in2="e3" result="shape" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="-2" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.1 0"
            />
            <feBlend mode="normal" in2="shape" result="effect4_innerShadow" />
          </filter>
          <filter
            id="ind-f4"
            x="142"
            y="49"
            width="60"
            height="65"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.1 0"
            />
            <feBlend mode="normal" in2="BackgroundImageFix" result="e1" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="3" />
            <feGaussianBlur stdDeviation="1.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.1 0"
            />
            <feBlend mode="normal" in2="e1" result="e2" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="1" dy="8" />
            <feGaussianBlur stdDeviation="2.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.05 0"
            />
            <feBlend mode="normal" in2="e2" result="e3" />
            <feBlend mode="normal" in="SourceGraphic" in2="e3" result="shape" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="-2" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.1 0"
            />
            <feBlend mode="normal" in2="shape" result="effect4_innerShadow" />
          </filter>
          <filter
            id="ind-f5"
            x="50"
            y="289"
            width="60"
            height="65"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.25098 0 0 0 0 0.117647 0 0 0 0 0.0313726 0 0 0 0.125 0"
            />
            <feBlend mode="normal" in2="BackgroundImageFix" result="e1" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="3" />
            <feGaussianBlur stdDeviation="1.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.25098 0 0 0 0 0.117647 0 0 0 0 0.0313726 0 0 0 0.12 0"
            />
            <feBlend mode="normal" in2="e1" result="e2" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="1" dy="8" />
            <feGaussianBlur stdDeviation="2.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.25098 0 0 0 0 0.117647 0 0 0 0 0.0313726 0 0 0 0.08 0"
            />
            <feBlend mode="normal" in2="e2" result="e3" />
            <feBlend mode="normal" in="SourceGraphic" in2="e3" result="shape" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="-2" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.25098 0 0 0 0 0.117647 0 0 0 0 0.0313726 0 0 0 0.15 0"
            />
            <feBlend mode="normal" in2="shape" result="effect4_innerShadow" />
          </filter>
          <filter
            id="ind-f6"
            x="142"
            y="289"
            width="60"
            height="65"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.1 0"
            />
            <feBlend mode="normal" in2="BackgroundImageFix" result="e1" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="3" />
            <feGaussianBlur stdDeviation="1.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.1 0"
            />
            <feBlend mode="normal" in2="e1" result="e2" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="1" dy="8" />
            <feGaussianBlur stdDeviation="2.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.05 0"
            />
            <feBlend mode="normal" in2="e2" result="e3" />
            <feBlend mode="normal" in="SourceGraphic" in2="e3" result="shape" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="-2" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0392157 0 0 0 0 0.0496732 0 0 0 0 0.0705882 0 0 0 0.1 0"
            />
            <feBlend mode="normal" in2="shape" result="effect4_innerShadow" />
          </filter>

          {/* Hidden path for pulse to follow: center-horizontal → left → down to active node */}
          <path
            id="ind-pulse-path"
            d="M171,224 L171,255.5 L79,255.5 L79,288"
            fill="none"
            stroke="none"
          />
        </defs>

        {/* Background */}
        <rect width="341" height="392" fill="#FAFAFA" />

        {/* ── L2 left node ── */}
        <rect
          x="51.5"
          y="168.5"
          width="55"
          height="55"
          rx="13.5"
          fill="white"
        />
        <rect
          x="51.5"
          y="168.5"
          width="55"
          height="55"
          rx="13.5"
          stroke="#D4D4D4"
        />
        <g filter="url(#ind-f0)">
          <path
            d="M55 182C55 176.477 59.4772 172 65 172H93C98.5228 172 103 176.477 103 182V210C103 215.523 98.5228 220 93 220H65C59.4772 220 55 215.523 55 210V182Z"
            fill="white"
          />
          <path
            d="M93 171.5C98.799 171.5 103.5 176.201 103.5 182V210C103.5 215.799 98.799 220.5 93 220.5H65C59.201 220.5 54.5 215.799 54.5 210V182C54.5 176.201 59.201 171.5 65 171.5H93Z"
            stroke="black"
            strokeOpacity="0.1"
          />
          <path
            d="M76.0832 190.167H81.9165M76.0832 194.833H81.9165M76.0832 199.5H81.9165M85.9998 206.5V189.233C85.9998 187.927 85.9998 187.273 85.7455 186.774C85.5218 186.335 85.1649 185.978 84.7258 185.754C84.2267 185.5 83.5733 185.5 82.2665 185.5H75.7332C74.4264 185.5 73.773 185.5 73.2739 185.754C72.8348 185.978 72.4779 186.335 72.2542 186.774C71.9998 187.273 71.9998 187.927 71.9998 189.233V206.5M88.3332 206.5H69.6665"
            stroke="#334155"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* ── L3 right node (bottom right) ── */}
        <rect
          x="235.5"
          y="288.5"
          width="55"
          height="55"
          rx="13.5"
          fill="white"
        />
        <rect
          x="235.5"
          y="288.5"
          width="55"
          height="55"
          rx="13.5"
          stroke="#D4D4D4"
        />
        <g filter="url(#ind-f1)">
          <path
            d="M239 302C239 296.477 243.477 292 249 292H277C282.523 292 287 296.477 287 302V330C287 335.523 282.523 340 277 340H249C243.477 340 239 335.523 239 330V302Z"
            fill="white"
          />
          <path
            d="M277 291.5C282.799 291.5 287.5 296.201 287.5 302V330C287.5 335.799 282.799 340.5 277 340.5H249C243.201 340.5 238.5 335.799 238.5 330V302C238.5 296.201 243.201 291.5 249 291.5H277Z"
            stroke="black"
            strokeOpacity="0.1"
          />
          <path
            d="M261.833 314.833H256.233C254.927 314.833 254.273 314.833 253.774 315.088C253.335 315.311 252.978 315.668 252.754 316.107C252.5 316.606 252.5 317.26 252.5 318.567V326.5M273.5 326.5V309.233C273.5 307.927 273.5 307.273 273.246 306.774C273.022 306.335 272.665 305.978 272.226 305.754C271.727 305.5 271.074 305.5 269.767 305.5H265.567C264.26 305.5 263.607 305.5 263.108 305.754C262.668 305.978 262.312 306.335 262.088 306.774C261.833 307.273 261.833 307.927 261.833 309.233V326.5M274.667 326.5H251.333M265.917 310.167H269.417M265.917 314.833H269.417M265.917 319.5H269.417"
            stroke="#334155"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* ── L2 center node ── */}
        <rect
          x="143.5"
          y="168.5"
          width="55"
          height="55"
          rx="13.5"
          fill="white"
        />
        <rect
          x="143.5"
          y="168.5"
          width="55"
          height="55"
          rx="13.5"
          stroke="#D4D4D4"
        />
        <g filter="url(#ind-f2)">
          <path
            d="M147 182C147 176.477 151.477 172 157 172H185C190.523 172 195 176.477 195 182V210C195 215.523 190.523 220 185 220H157C151.477 220 147 215.523 147 210V182Z"
            fill="white"
          />
          <path
            d="M185 171.5C190.799 171.5 195.5 176.201 195.5 182V210C195.5 215.799 190.799 220.5 185 220.5H157C151.201 220.5 146.5 215.799 146.5 210V182C146.5 176.201 151.201 171.5 157 171.5H185Z"
            stroke="black"
            strokeOpacity="0.1"
          />
          <path
            d="M165.75 194.833H162.367C161.713 194.833 161.387 194.833 161.137 194.96C160.918 195.072 160.739 195.251 160.627 195.47C160.5 195.72 160.5 196.047 160.5 196.7V206.5M176.25 194.833H179.633C180.287 194.833 180.614 194.833 180.863 194.96C181.083 195.072 181.261 195.251 181.373 195.47C181.5 195.72 181.5 196.047 181.5 196.7V206.5M176.25 206.5V189.233C176.25 187.927 176.25 187.273 175.996 186.774C175.772 186.335 175.415 185.978 174.976 185.754C174.477 185.5 173.824 185.5 172.517 185.5H169.483C168.177 185.5 167.523 185.5 167.024 185.754C166.585 185.978 166.228 186.335 166.004 186.774C165.75 187.273 165.75 187.927 165.75 189.233V206.5M182.667 206.5H159.333M169.833 190.167H172.167M169.833 194.833H172.167M169.833 199.5H172.167"
            stroke="#334155"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* ── L2 right node ── */}
        <rect
          x="235.5"
          y="168.5"
          width="55"
          height="55"
          rx="13.5"
          fill="white"
        />
        <rect
          x="235.5"
          y="168.5"
          width="55"
          height="55"
          rx="13.5"
          stroke="#D4D4D4"
        />
        <g filter="url(#ind-f3)">
          <path
            d="M239 182C239 176.477 243.477 172 249 172H277C282.523 172 287 176.477 287 182V210C287 215.523 282.523 220 277 220H249C243.477 220 239 215.523 239 210V182Z"
            fill="white"
          />
          <path
            d="M277 171.5C282.799 171.5 287.5 176.201 287.5 182V210C287.5 215.799 282.799 220.5 277 220.5H249C243.201 220.5 238.5 215.799 238.5 210V182C238.5 176.201 243.201 171.5 249 171.5H277Z"
            stroke="black"
            strokeOpacity="0.1"
          />
          <path
            d="M252.5 206.5H273.5M256 203V193.667M260.667 203V193.667M265.333 203V193.667M270 203V193.667M272.333 190.167L263.495 184.643C263.315 184.53 263.225 184.474 263.129 184.452C263.044 184.433 262.956 184.433 262.871 184.452C262.775 184.474 262.685 184.53 262.505 184.643L253.667 190.167H272.333Z"
            stroke="#334155"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* ── Top bank node ── */}
        <rect
          x="143.5"
          y="48.5"
          width="55"
          height="55"
          rx="13.5"
          fill="white"
        />
        <rect
          x="143.5"
          y="48.5"
          width="55"
          height="55"
          rx="13.5"
          stroke="#D4D4D4"
        />
        <g filter="url(#ind-f4)">
          <path
            d="M147 62C147 56.4772 151.477 52 157 52H185C190.523 52 195 56.4772 195 62V90C195 95.5228 190.523 100 185 100H157C151.477 100 147 95.5228 147 90V62Z"
            fill="white"
          />
          <path
            d="M185 51.5C190.799 51.5 195.5 56.201 195.5 62V90C195.5 95.799 190.799 100.5 185 100.5H157C151.201 100.5 146.5 95.799 146.5 90V62C146.5 56.201 151.201 51.5 157 51.5H185Z"
            stroke="black"
            strokeOpacity="0.1"
          />
          <path
            d="M162.833 72.5001V81.8334M168.083 72.5001V81.8334M173.917 72.5001V81.8334M179.167 72.5001V81.8334M160.5 83.7001L160.5 84.6334C160.5 85.2868 160.5 85.6135 160.627 85.8631C160.739 86.0826 160.917 86.2611 161.137 86.3729C161.387 86.5001 161.713 86.5001 162.367 86.5001H179.633C180.287 86.5001 180.613 86.5001 180.863 86.3729C181.083 86.2611 181.261 86.0826 181.373 85.8631C181.5 85.6135 181.5 85.2868 181.5 84.6334V83.7001C181.5 83.0467 181.5 82.72 181.373 82.4704C181.261 82.2509 181.083 82.0724 180.863 81.9606C180.613 81.8334 180.287 81.8334 179.633 81.8334H162.367C161.713 81.8334 161.387 81.8334 161.137 81.9606C160.917 82.0724 160.739 82.2509 160.627 82.4704C160.5 82.72 160.5 83.0467 160.5 83.7001ZM170.595 65.5901L161.962 67.5086C161.44 67.6245 161.179 67.6825 160.985 67.8227C160.813 67.9464 160.678 68.1145 160.595 68.3089C160.5 68.5294 160.5 68.7965 160.5 69.3308L160.5 70.6334C160.5 71.2868 160.5 71.6135 160.627 71.8631C160.739 72.0826 160.917 72.2611 161.137 72.3729C161.387 72.5001 161.713 72.5001 162.367 72.5001H179.633C180.287 72.5001 180.613 72.5001 180.863 72.3729C181.083 72.2611 181.261 72.0826 181.373 71.8631C181.5 71.6135 181.5 71.2868 181.5 70.6334V69.3308C181.5 68.7965 181.5 68.5294 181.405 68.3089C181.322 68.1145 181.187 67.9464 181.015 67.8227C180.821 67.6825 180.56 67.6245 180.038 67.5086L171.405 65.5901C171.254 65.5565 171.178 65.5397 171.102 65.533C171.034 65.5271 170.966 65.5271 170.898 65.533C170.822 65.5397 170.746 65.5565 170.595 65.5901Z"
            stroke="#334155"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* ── Neutral connector lines ── */}
        <path d="M263 135L263 168" stroke="black" strokeOpacity="0.1" />
        <path d="M79 135L79 168" stroke="black" strokeOpacity="0.1" />
        <line
          x1="79"
          y1="135.5"
          x2="263"
          y2="135.5"
          stroke="black"
          strokeOpacity="0.1"
        />
        <path d="M171.5 255.5V288" stroke="black" strokeOpacity="0.1" />
        <path d="M263 255L263 288" stroke="black" strokeOpacity="0.1" />
        <path d="M171 104V168" stroke="black" strokeOpacity="0.1" />
        <line
          x1="171"
          y1="224"
          x2="171"
          y2="255.5"
          className="stroke-[#CA7D15] group-hover:stroke-[#16A34A] transition-colors duration-300"
        />

        {/* ── Active lower-left node ── */}
        <rect x="51" y="288" width="56" height="56" rx="14" fill="white" />
        <rect
          x="51.5"
          y="288.5"
          width="55"
          height="55"
          rx="13.5"
          className="stroke-[#894717] group-hover:stroke-[#052E16] transition-colors duration-300"
          strokeOpacity="0.375"
        />
        <g filter="url(#ind-f5)">
          <path
            d="M55 302C55 296.477 59.4772 292 65 292H93C98.5228 292 103 296.477 103 302V330C103 335.523 98.5228 340 93 340H65C59.4772 340 55 335.523 55 330V302Z"
            fill="white"
          />
          <path
            d="M93 291.5C98.799 291.5 103.5 296.201 103.5 302V330C103.5 335.799 98.799 340.5 93 340.5H65C59.201 340.5 54.5 335.799 54.5 330V302C54.5 296.201 59.201 291.5 65 291.5H93Z"
            className="stroke-[#894717] group-hover:stroke-[#052E16] transition-colors duration-300"
            strokeOpacity="0.25"
          />
          <path
            d="M82.5 326.5V320.2C82.5 319.547 82.5 319.22 82.3728 318.97C82.261 318.751 82.0825 318.572 81.863 318.46C81.6134 318.333 81.2867 318.333 80.6333 318.333H77.3667C76.7133 318.333 76.3866 318.333 76.137 318.46C75.9175 318.572 75.739 318.751 75.6272 318.97C75.5 319.22 75.5 319.547 75.5 320.2V326.5M68.5 310.167C68.5 312.1 70.067 313.667 72 313.667C73.933 313.667 75.5 312.1 75.5 310.167C75.5 312.1 77.067 313.667 79 313.667C80.933 313.667 82.5 312.1 82.5 310.167C82.5 312.1 84.067 313.667 86 313.667C87.933 313.667 89.5 312.1 89.5 310.167M72.2333 326.5H85.7667C87.0735 326.5 87.7268 326.5 88.226 326.246C88.665 326.022 89.022 325.665 89.2457 325.226C89.5 324.727 89.5 324.073 89.5 322.767V309.233C89.5 307.927 89.5 307.273 89.2457 306.774C89.022 306.335 88.665 305.978 88.226 305.754C87.7268 305.5 87.0735 305.5 85.7667 305.5H72.2333C70.9265 305.5 70.2731 305.5 69.774 305.754C69.335 305.978 68.978 306.335 68.7543 306.774C68.5 307.273 68.5 307.927 68.5 309.233V322.767C68.5 324.073 68.5 324.727 68.7543 325.226C68.978 325.665 69.335 326.022 69.774 326.246C70.2731 326.5 70.9265 326.5 72.2333 326.5Z"
            className="stroke-[#CA7D15] group-hover:stroke-[#16A34A] transition-colors duration-300"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* ── L3 center node ── */}
        <rect
          x="143.5"
          y="288.5"
          width="55"
          height="55"
          rx="13.5"
          fill="white"
        />
        <rect
          x="143.5"
          y="288.5"
          width="55"
          height="55"
          rx="13.5"
          stroke="#D4D4D4"
        />
        <g filter="url(#ind-f6)">
          <path
            d="M147 302C147 296.477 151.477 292 157 292H185C190.523 292 195 296.477 195 302V330C195 335.523 190.523 340 185 340H157C151.477 340 147 335.523 147 330V302Z"
            fill="white"
          />
          <path
            d="M185 291.5C190.799 291.5 195.5 296.201 195.5 302V330C195.5 335.799 190.799 340.5 185 340.5H157C151.201 340.5 146.5 335.799 146.5 330V302C146.5 296.201 151.201 291.5 157 291.5H185Z"
            stroke="black"
            strokeOpacity="0.1"
          />
          <path
            d="M174.5 326.5V320.2C174.5 319.547 174.5 319.22 174.373 318.97C174.261 318.751 174.083 318.572 173.863 318.46C173.613 318.333 173.287 318.333 172.633 318.333H169.367C168.713 318.333 168.387 318.333 168.137 318.46C167.917 318.572 167.739 318.751 167.627 318.97C167.5 319.22 167.5 319.547 167.5 320.2V326.5M160.5 310.167C160.5 312.1 162.067 313.667 164 313.667C165.933 313.667 167.5 312.1 167.5 310.167C167.5 312.1 169.067 313.667 171 313.667C172.933 313.667 174.5 312.1 174.5 310.167C174.5 312.1 176.067 313.667 178 313.667C179.933 313.667 181.5 312.1 181.5 310.167M164.233 326.5H177.767C179.073 326.5 179.727 326.5 180.226 326.246C180.665 326.022 181.022 325.665 181.246 325.226C181.5 324.727 181.5 324.073 181.5 322.767V309.233C181.5 307.927 181.5 307.273 181.246 306.774C181.022 306.335 180.665 305.978 180.226 305.754C179.727 305.5 179.073 305.5 177.767 305.5H164.233C162.927 305.5 162.273 305.5 161.774 305.754C161.335 305.978 160.978 306.335 160.754 306.774C160.5 307.273 160.5 307.927 160.5 309.233V322.767C160.5 324.073 160.5 324.727 160.754 325.226C160.978 325.665 161.335 326.022 161.774 326.246C162.273 326.5 162.927 326.5 164.233 326.5Z"
            stroke="#334155"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* ── Accent path — amber default, green on hover ── */}
        <path
          d="M79 255L79 288"
          className="stroke-[#CA7D15] group-hover:stroke-[#16A34A] transition-colors duration-300"
        />
        <line
          x1="79"
          y1="255.5"
          x2="172"
          y2="255.5"
          className="stroke-[#CA7D15] group-hover:stroke-[#16A34A] transition-colors duration-300"
        />

        <filter id="ind-glow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* ── Pulse dot — travels center → left → down ── */}
        <circle
          r="2"
          filter="url(#ind-glow)"
          className="fill-[#F6C76A] group-hover:fill-[#6EE7B7] transition-colors duration-300"
        >
          <animateMotion dur="2s" repeatCount="indefinite" calcMode="linear">
            <mpath href="#ind-pulse-path" />
          </animateMotion>
        </circle>
      </svg>
    </div>
  );
}

function LocationIllustration() {
  return (
    <div className="relative w-full h-full">
      <svg
        width="100%"
        viewBox="0 0 341 404"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <style>{`
              .loc-check {
                transform-origin: 50% 50%;
                transform-box: fill-box;
                transform: scale(0);
                opacity: 0;
              }
              .group\\/loc:hover .loc-check {
                animation: locCheckPop 0.45s cubic-bezier(0.34,1.56,0.64,1) forwards;
              }
              @keyframes locCheckPop {
                0%   { transform: scale(0);    opacity: 0; }
                60%  { transform: scale(1.25); opacity: 1; }
                100% { transform: scale(1);    opacity: 1; }
              }
            `}</style>

          <clipPath id="loc-clip">
            <rect width="341" height="404" fill="white" />
          </clipPath>

          {/* Popup shadow — widened to fit hover card */}
          <filter
            id="loc-f0"
            x="88"
            y="104"
            width="252"
            height="90"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
            />
            <feBlend mode="normal" in2="BackgroundImageFix" result="e1" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="2" dy="2" />
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
            />
            <feBlend mode="normal" in2="e1" result="e2" />
            <feBlend mode="normal" in="SourceGraphic" in2="e2" result="shape" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="-2" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
            />
            <feBlend mode="normal" in2="shape" result="e3" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="1"
              operator="erode"
              in="SourceAlpha"
              result="e4"
            />
            <feOffset />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
            />
            <feBlend mode="normal" in2="e3" result="effect4" />
          </filter>
        </defs>

        <g clipPath="url(#loc-clip)">
          {/* ── Background wedge shape ── */}
          <mask id="loc-bg-mask" fill="white">
            <path d="M-92.7869 180.069C15.0523 171.09 123.312 191.442 220.529 238.971C317.745 286.499 400.297 359.434 459.444 450.052L-43 778L-92.7869 180.069Z" />
          </mask>
          <path
            d="M-92.7869 180.069C15.0523 171.09 123.312 191.442 220.529 238.971C317.745 286.499 400.297 359.434 459.444 450.052L-43 778L-92.7869 180.069Z"
            fill="#F7F7F7"
            stroke="black"
            strokeOpacity="0.1"
            strokeWidth="2"
            mask="url(#loc-bg-mask)"
          />

          {/* ── Map terrain shape — fill transitions on hover ── */}
          <path
            d="M87.5007 207.5C87.3642 195.074 70.7513 198.213 63.0005 188.5C66.0005 187.5 138.501 200 214.001 236.5C289.501 273 340.501 317.5 340.501 317.5C340.501 317.5 363.036 380.283 340.501 407C317.965 433.717 232.009 404.586 232.001 404L231.999 403.903C231.992 403.376 231.987 403.052 232.001 402.5C232.006 402.263 239.817 399.961 249.5 396.792C253.964 395.332 258.825 393.687 263.502 391.977C273.766 388.223 283.145 384.15 285.501 381C291.259 373.299 294.202 368.027 295.501 358.5C295.974 355.025 289.035 362.293 277 361C269.751 360.221 259.196 356.956 250.5 356.5C243.204 356.118 214.31 363.883 207.5 363.5C198.961 363.02 187.343 352.601 182 351.751C171.26 350.043 183.568 339.553 174.5 339.5C164.054 339.439 154.937 338.74 145.5 330.5C140.29 325.951 178.501 313.5 163.5 295C168.43 293.882 189.159 307.315 196 306.5C206.881 305.204 209.308 286.776 220.5 285.5C226.496 284.816 218.639 305.88 223.5 305C230.177 303.791 238.88 315.395 241.501 313.5C248.137 308.702 235.722 291.436 242.5 286.5C250.695 280.532 269.746 283.817 266 277C263.044 271.622 259.231 271.093 252 271C242.485 270.878 231.113 276.324 232.001 273.297C233.563 267.971 239.16 266.048 239 260.5C238.84 254.952 246.08 250.836 237.001 250.5C227.921 250.164 210.242 275.778 199 282C193.497 285.045 184.077 270.334 173.5 273.297C162.47 276.388 155.637 285.607 143 286.5C136 284 129.367 277.792 120.5 277C112.17 276.256 101.881 285.618 93.5 284C89 277 80.373 274.034 72 272C63.8183 270.012 51.1315 272.331 47.5 270C41.2948 266.017 54.3287 257.097 47.5 252.5C37.0664 245.477 31 248.5 31 236.5C47 234 54.1637 236.918 65.5007 231.5C71.3719 228.694 68.7328 220.711 73.0007 217C76.9739 213.545 87.5666 213.491 87.5007 207.5Z"
            fill="#E2E8F0"
            stroke="black"
            strokeOpacity="0.1"
            strokeWidth="0.5"
            className="transition-colors duration-300 group-hover:fill-[rgba(137,71,23,0.10)]"
          />

          {/* ── Popup card — always visible, border + text change on hover ── */}
          {/* Card background rect — sized for hover (wider) at all times */}
          <g filter="url(#loc-f0)">
            <rect
              x="96"
              y="112"
              width="229"
              height="68"
              rx="6"
              fill="#FAFAFA"
            />
            {/* Default border */}
            <rect
              x="96.5"
              y="112.5"
              width="228"
              height="67"
              rx="5.5"
              fill="none"
              strokeWidth="1"
              className="stroke-black/10 group-hover:stroke-transparent transition-colors duration-300"
            />
            {/* Hover border — rgba(21,128,61,0.24) */}
            <rect
              x="96.5"
              y="112.5"
              width="228"
              height="67"
              rx="5.5"
              fill="none"
              strokeWidth="1"
              className="stroke-transparent group-hover:stroke-[rgba(21,128,61,0.24)] transition-colors duration-300"
            />
            {/* Bottom inset shadow — only on hover */}
            <rect
              x="96"
              y="178"
              width="229"
              height="2"
              fill="rgba(0,0,0,0.025)"
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </g>

          {/* Default text — fades out on hover */}
          <foreignObject
            x="96"
            y="112"
            width="229"
            height="60"
            className="transition-opacity duration-300 opacity-100 group-hover:opacity-0 pointer-events-none"
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                padding: "12px 16px",
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                boxSizing: "border-box",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-neue-montreal), sans-serif",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#17171C",
                  lineHeight: "20px",
                  whiteSpace: "nowrap",
                }}
              >
                Verifying Location
              </span>
              <span
                style={{
                  fontFamily: "var(--font-neue-montreal), sans-serif",
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "#4F4F5E",
                  lineHeight: "20px",
                  whiteSpace: "nowrap",
                }}
              >
                Checking data....
              </span>
            </div>
          </foreignObject>

          {/* Hover text — fades in on hover */}
          <foreignObject
            x="96"
            y="112"
            width="229"
            height="60"
            className="transition-opacity duration-300 opacity-0 group-hover:opacity-100 pointer-events-none"
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                padding: "12px 16px",
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-neue-montreal), sans-serif",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#17171C",
                    lineHeight: "20px",
                    whiteSpace: "nowrap",
                  }}
                >
                  Location Verified!
                </span>
                {/* Check circle — pop animation */}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="loc-check shrink-0"
                  style={{ flexShrink: 0 }}
                >
                  <circle cx="10" cy="10" r="10" fill="#DCFCE7" />
                  <path
                    d="M6.5 10l2.5 2.5 5-5"
                    stroke="#16A34A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span
                style={{
                  fontFamily: "var(--font-neue-montreal), sans-serif",
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "#4F4F5E",
                  lineHeight: "20px",
                  whiteSpace: "nowrap",
                }}
              >
                The provided address is accurate
              </span>
            </div>
          </foreignObject>

          {/* ── Map pin — #94A3B8 default → #0F172A hover ── */}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M160 205.412C160 212.819 154 215.843 146.5 230C139.75 215.843 133 212.819 133 205.412C133 198.005 139.044 192 146.5 192C153.956 192 160 198.005 160 205.412ZM139.5 205.427C139.54 201.582 142.654 198.5 146.5 198.5C150.346 198.5 153.46 201.582 153.5 205.427C153.54 209.273 150.386 212.5 146.5 212.5C142.614 212.5 139.46 209.273 139.5 205.427Z"
            className="fill-[#94A3B8] group-hover:fill-[#0F172A] transition-colors duration-300"
            stroke="black"
            strokeOpacity="0.1"
          />
        </g>
      </svg>
    </div>
  );
}

function SocialIllustration() {
  return (
    <div className="relative w-full h-full">
      <svg
        width="100%"
        viewBox="0 0 341 392"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          {/* Side card shadow (LinkedIn + Instagram share same filter values) */}
          <filter
            id="soc-f-side-l"
            x="-8"
            y="80"
            width="224"
            height="256"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="1"
              operator="erode"
              in="SourceAlpha"
              result="e1"
            />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
            />
            <feBlend mode="normal" in2="BackgroundImageFix" result="s1" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="2"
              operator="erode"
              in="SourceAlpha"
              result="e2"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="3" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
            />
            <feBlend mode="normal" in2="s1" result="s2" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="4"
              operator="erode"
              in="SourceAlpha"
              result="e3"
            />
            <feOffset dy="12" />
            <feGaussianBlur stdDeviation="8" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
            />
            <feBlend mode="normal" in2="s2" result="s3" />
            <feBlend mode="normal" in="SourceGraphic" in2="s3" result="shape" />
          </filter>
          <filter
            id="soc-f-side-r"
            x="125"
            y="80"
            width="224"
            height="256"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="1"
              operator="erode"
              in="SourceAlpha"
              result="e1"
            />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
            />
            <feBlend mode="normal" in2="BackgroundImageFix" result="s1" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="2"
              operator="erode"
              in="SourceAlpha"
              result="e2"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="3" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
            />
            <feBlend mode="normal" in2="s1" result="s2" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="4"
              operator="erode"
              in="SourceAlpha"
              result="e3"
            />
            <feOffset dy="12" />
            <feGaussianBlur stdDeviation="8" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
            />
            <feBlend mode="normal" in2="s2" result="s3" />
            <feBlend mode="normal" in="SourceGraphic" in2="s3" result="shape" />
          </filter>

          {/* X card default shadow */}
          <filter
            id="soc-f-x-default"
            x="50"
            y="80"
            width="240"
            height="272"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="1.5"
              operator="erode"
              in="SourceAlpha"
              result="e1"
            />
            <feOffset dy="3" />
            <feGaussianBlur stdDeviation="1.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
            />
            <feBlend mode="normal" in2="BackgroundImageFix" result="s1" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="4"
              operator="erode"
              in="SourceAlpha"
              result="e2"
            />
            <feOffset dy="8" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
            />
            <feBlend mode="normal" in2="s1" result="s2" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="4"
              operator="erode"
              in="SourceAlpha"
              result="e3"
            />
            <feOffset dy="20" />
            <feGaussianBlur stdDeviation="12" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.117647 0 0 0 0 0.227451 0 0 0 0 0.541176 0 0 0 0.12 0"
            />
            <feBlend mode="normal" in2="s2" result="s3" />
            <feBlend mode="normal" in="SourceGraphic" in2="s3" result="shape" />
          </filter>

          {/* Instagram gradients */}
          <radialGradient
            id="soc-ig0"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(301 119) rotate(-55.3758) scale(25.5196)"
          >
            <stop stopColor="#B13589" />
            <stop offset="0.79309" stopColor="#C62F94" />
            <stop offset="1" stopColor="#8A3AC8" />
          </radialGradient>
          <radialGradient
            id="soc-ig1"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(300 127) rotate(-65.1363) scale(22.5942)"
          >
            <stop stopColor="#E0E8B7" />
            <stop offset="0.444662" stopColor="#FB8A2E" />
            <stop offset="0.71474" stopColor="#E2425C" />
            <stop offset="1" stopColor="#E2425C" stopOpacity="0" />
          </radialGradient>
          <radialGradient
            id="soc-ig2"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(289.5 99) rotate(-8.1301) scale(38.8909 8.31836)"
          >
            <stop offset="0.156701" stopColor="#406ADC" />
            <stop offset="0.467799" stopColor="#6A45BE" />
            <stop offset="1" stopColor="#6A45BE" stopOpacity="0" />
          </radialGradient>

          {/* X card hover border gradient: dark navy → amber */}
          <linearGradient
            id="soc-x-border-grad"
            x1="69.9969"
            y1="334.998"
            x2="334.222"
            y2="145.589"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#020617" />
            <stop offset="1" stopColor="#EFD25A" />
          </linearGradient>

          {/* Clip paths */}
          <clipPath id="soc-clip0">
            <rect width="341" height="392" fill="white" />
          </clipPath>
          <clipPath id="soc-clip-x-default">
            <rect
              width="28"
              height="25"
              fill="white"
              transform="translate(156 96)"
            />
          </clipPath>
          <clipPath id="soc-clip-x-hover">
            <rect
              width="28"
              height="25"
              fill="white"
              transform="translate(156 72)"
            />
          </clipPath>
        </defs>

        <g clipPath="url(#soc-clip0)">
          <rect width="341" height="392" fill="#FAFAFA" />

          {/* ── LinkedIn card (left) — static ─── */}
          <g filter="url(#soc-f-side-l)">
            <rect x="4" y="80" width="200" height="232" rx="6" fill="white" />
            <rect
              x="4.5"
              y="80.5"
              width="199"
              height="231"
              rx="5.5"
              stroke="black"
              strokeOpacity="0.1"
            />
            <g opacity="0.5">
              <rect
                x="22"
                y="98"
                width="28"
                height="28"
                rx="14"
                fill="#1275B1"
              />
              <path
                d="M32.6186 105.692C32.6186 106.627 31.8085 107.384 30.8093 107.384C29.81 107.384 29 106.627 29 105.692C29 104.758 29.81 104 30.8093 104C31.8085 104 32.6186 104.758 32.6186 105.692Z"
                fill="white"
              />
              <path
                d="M29.2474 108.628L32.3402 108.628L32.3402 118L29.2474 118L29.2474 108.628Z"
                fill="white"
              />
              <path
                d="M37.3196 108.628L34.2268 108.628L34.2268 118L37.3196 118C37.3196 118 37.3196 115.05 37.3196 113.205C37.3196 112.098 37.6977 110.986 39.2062 110.986C40.911 110.986 40.9008 112.435 40.8928 113.557C40.8824 115.024 40.9072 116.522 40.9072 118L44 118L44 113.054C43.9738 109.895 43.1508 108.44 40.4433 108.44C38.8354 108.44 37.8387 109.17 37.3196 109.83L37.3196 108.628Z"
                fill="white"
              />
            </g>
            <path
              d="M142 140L22 140C20.8954 140 20 140.895 20 142L20 146C20 147.105 20.8954 148 22 148L142 148C143.105 148 144 147.105 144 146L144 142C144 140.895 143.105 140 142 140Z"
              fill="#9E9EAD"
            />
            <path
              d="M186 160L22 160C20.8954 160 20 160.895 20 162L20 164C20 165.105 20.8954 166 22 166L186 166C187.105 166 188 165.105 188 164L188 162C188 160.895 187.105 160 186 160Z"
              fill="#E3E3E8"
            />
            <path
              d="M142 170L22 170C20.8954 170 20 170.895 20 172L20 174C20 175.105 20.8954 176 22 176L142 176C143.105 176 144 175.105 144 174L144 172C144 170.895 143.105 170 142 170Z"
              fill="#E3E3E8"
            />
            <path
              d="M186 192L22 192C20.8954 192 20 192.895 20 194L20 196C20 197.105 20.8954 198 22 198L186 198C187.105 198 188 197.105 188 196L188 194C188 192.895 187.105 192 186 192Z"
              fill="#E3E3E8"
            />
            <path
              d="M142 202L22 202C20.8954 202 20 202.895 20 204L20 206C20 207.105 20.8954 208 22 208L142 208C143.105 208 144 207.105 144 206L144 204C144 202.895 143.105 202 142 202Z"
              fill="#E3E3E8"
            />
            <path
              d="M186 212L22 212C20.8954 212 20 212.895 20 214L20 216C20 217.105 20.8954 218 22 218L186 218C187.105 218 188 217.105 188 216L188 214C188 212.895 187.105 212 186 212Z"
              fill="#E3E3E8"
            />
            <path
              d="M186 222L22 222C20.8954 222 20 222.895 20 224L20 226C20 227.105 20.8954 228 22 228L186 228C187.105 228 188 227.105 188 226L188 224C188 222.895 187.105 222 186 222Z"
              fill="#E3E3E8"
            />
            <path
              d="M142 232L22 232C20.8954 232 20 232.895 20 234L20 236C20 237.105 20.8954 238 22 238L142 238C143.105 238 144 237.105 144 236L144 234C144 232.895 143.105 232 142 232Z"
              fill="#E3E3E8"
            />
            <path
              d="M186 242L22 242C20.8954 242 20 242.895 20 244L20 246C20 247.105 20.8954 248 22 248L186 248C187.105 248 188 247.105 188 246L188 244C188 242.895 187.105 242 186 242Z"
              fill="#E3E3E8"
            />
            <path
              d="M186 268L22 268C20.8954 268 20 268.895 20 270L20 272C20 273.105 20.8954 274 22 274L186 274C187.105 274 188 273.105 188 272L188 270C188 268.895 187.105 268 186 268Z"
              fill="#E3E3E8"
            />
            <path
              d="M142 278L22 278C20.8954 278 20 278.895 20 280L20 282C20 283.105 20.8954 284 22 284L142 284C143.105 284 144 283.105 144 282L144 280C144 278.895 143.105 278 142 278Z"
              fill="#E3E3E8"
            />
            <path
              d="M186 288L22 288C20.8954 288 20 288.895 20 290L20 292C20 293.105 20.8954 294 22 294L186 294C187.105 294 188 293.105 188 292L188 290C188 288.895 187.105 288 186 288Z"
              fill="#E3E3E8"
            />
          </g>

          {/* ── Instagram card (right) — static ─── */}
          <g filter="url(#soc-f-side-r)">
            <rect x="137" y="80" width="200" height="232" rx="6" fill="white" />
            <rect
              x="137.5"
              y="80.5"
              width="199"
              height="231"
              rx="5.5"
              stroke="black"
              strokeOpacity="0.1"
            />
            <g opacity="0.5">
              <rect
                x="291"
                y="98"
                width="28"
                height="28"
                rx="6"
                fill="url(#soc-ig0)"
              />
              <rect
                x="291"
                y="98"
                width="28"
                height="28"
                rx="6"
                fill="url(#soc-ig1)"
              />
              <rect
                x="291"
                y="98"
                width="28"
                height="28"
                rx="6"
                fill="url(#soc-ig2)"
              />
              <path
                d="M312 106.5C312 107.328 311.328 108 310.5 108C309.672 108 309 107.328 309 106.5C309 105.672 309.672 105 310.5 105C311.328 105 312 105.672 312 106.5Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M305 117C307.761 117 310 114.761 310 112C310 109.239 307.761 107 305 107C302.239 107 300 109.239 300 112C300 114.761 302.239 117 305 117ZM305 115C306.657 115 308 113.657 308 112C308 110.343 306.657 109 305 109C303.343 109 302 110.343 302 112C302 113.657 303.343 115 305 115Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M295 111.6C295 108.24 295 106.56 295.654 105.276C296.229 104.147 297.147 103.229 298.276 102.654C299.56 102 301.24 102 304.6 102L305.4 102C308.76 102 310.44 102 311.724 102.654C312.853 103.229 313.771 104.147 314.346 105.276C315 106.56 315 108.24 315 111.6L315 112.4C315 115.76 315 117.44 314.346 118.724C313.771 119.853 312.853 120.771 311.724 121.346C310.44 122 308.76 122 305.4 122L304.6 122C301.24 122 299.56 122 298.276 121.346C297.147 120.771 296.229 119.853 295.654 118.724C295 117.44 295 115.76 295 112.4L295 111.6ZM304.6 104L305.4 104C307.113 104 308.278 104.002 309.178 104.075C310.055 104.147 310.503 104.277 310.816 104.436C311.569 104.819 312.181 105.431 312.564 106.184C312.723 106.497 312.853 106.945 312.925 107.822C312.998 108.722 313 109.887 313 111.6L313 112.4C313 114.113 312.998 115.278 312.925 116.178C312.853 117.055 312.723 117.503 312.564 117.816C312.181 118.569 311.569 119.181 310.816 119.564C310.503 119.723 310.055 119.853 309.178 119.925C308.278 119.998 307.113 120 305.4 120L304.6 120C302.887 120 301.722 119.998 300.822 119.925C299.945 119.853 299.497 119.723 299.184 119.564C298.431 119.181 297.819 118.569 297.436 117.816C297.277 117.503 297.147 117.055 297.075 116.178C297.002 115.278 297 114.113 297 112.4L297 111.6C297 109.887 297.002 108.722 297.075 107.822C297.147 106.945 297.277 106.497 297.436 106.184C297.819 105.431 298.431 104.819 299.184 104.436C299.497 104.277 299.945 104.147 300.822 104.075C301.722 104.002 302.887 104 304.6 104Z"
                fill="white"
              />
            </g>
            <path
              d="M319 140L199 140C197.895 140 197 140.895 197 142L197 146C197 147.105 197.895 148 199 148L319 148C320.105 148 321 147.105 321 146L321 142C321 140.895 320.105 140 319 140Z"
              fill="#9E9EAD"
            />
            <path
              d="M319 160L155 160C153.895 160 153 160.895 153 162L153 164C153 165.105 153.895 166 155 166L319 166C320.105 166 321 165.105 321 164L321 162C321 160.895 320.105 160 319 160Z"
              fill="#E3E3E8"
            />
            <path
              d="M319 170L199 170C197.895 170 197 170.895 197 172L197 174C197 175.105 197.895 176 199 176L319 176C320.105 176 321 175.105 321 174L321 172C321 170.895 320.105 170 319 170Z"
              fill="#E3E3E8"
            />
            <path
              d="M319 192L155 192C153.895 192 153 192.895 153 194L153 196C153 197.105 153.895 198 155 198L319 198C320.105 198 321 197.105 321 196L321 194C321 192.895 320.105 192 319 192Z"
              fill="#E3E3E8"
            />
            <path
              d="M275 202L155 202C153.895 202 153 202.895 153 204L153 206C153 207.105 153.895 208 155 208L275 208C276.105 208 277 207.105 277 206L277 204C277 202.895 276.105 202 275 202Z"
              fill="#E3E3E8"
            />
            <path
              d="M319 212L155 212C153.895 212 153 212.895 153 214L153 216C153 217.105 153.895 218 155 218L319 218C320.105 218 321 217.105 321 216L321 214C321 212.895 320.105 212 319 212Z"
              fill="#E3E3E8"
            />
            <path
              d="M319 222L155 222C153.895 222 153 222.895 153 224L153 226C153 227.105 153.895 228 155 228L319 228C320.105 228 321 227.105 321 226L321 224C321 222.895 320.105 222 319 222Z"
              fill="#E3E3E8"
            />
            <path
              d="M275 232L155 232C153.895 232 153 232.895 153 234L153 236C153 237.105 153.895 238 155 238L275 238C276.105 238 277 237.105 277 236L277 234C277 232.895 276.105 232 275 232Z"
              fill="#E3E3E8"
            />
            <path
              d="M319 242L155 242C153.895 242 153 242.895 153 244L153 246C153 247.105 153.895 248 155 248L319 248C320.105 248 321 247.105 321 246L321 244C321 242.895 320.105 242 319 242Z"
              fill="#E3E3E8"
            />
            <path
              d="M319 268L155 268C153.895 268 153 268.895 153 270L153 272C153 273.105 153.895 274 155 274L319 274C320.105 274 321 273.105 321 272L321 270C321 268.895 320.105 268 319 268Z"
              fill="#E3E3E8"
            />
            <path
              d="M275 278L155 278C153.895 278 153 278.895 153 280L153 282C153 283.105 153.895 284 155 284L275 284C276.105 284 277 283.105 277 282L277 280C277 278.895 276.105 278 275 278Z"
              fill="#E3E3E8"
            />
            <path
              d="M319 288L155 288C153.895 288 153 288.895 153 290L153 292C153 293.105 153.895 294 155 294L319 294C320.105 294 321 293.105 321 292L321 290C321 288.895 320.105 288 319 288Z"
              fill="#E3E3E8"
            />
          </g>

          {/* ── X card — single group, scaleY(1.2) on hover ── */}
          <g
            filter="url(#soc-f-x-default)"
            style={{
              transformBox: "fill-box",
              transformOrigin: "center center",
              transition: "transform 0.35s ease",
            }}
            className="group-hover:transform-[scaleY(1.2)]"
          >
            <rect x="70" y="80" width="200" height="232" rx="6" fill="white" />

            {/* Default border — fades out on hover */}
            <rect
              x="70.5"
              y="80.5"
              width="199"
              height="231"
              rx="5.5"
              stroke="#94A3B8"
              className="transition-opacity duration-300 opacity-100 group-hover:opacity-0"
            />
            {/* Gradient border — fades in on hover */}
            <rect
              x="70.5"
              y="80.5"
              width="199"
              height="231"
              rx="5.5"
              stroke="url(#soc-x-border-grad)"
              className="transition-opacity duration-300 opacity-0 group-hover:opacity-100"
            />

            <g clipPath="url(#soc-clip-x-default)">
              <path
                d="M178.04 96H182.313L172.98 106.611L184 121H175.341L168.594 112.278L160.835 121H156.562L166.57 109.667L156 96H164.884L171.012 104L178.04 96ZM176.522 118.444H178.884L163.59 98.3889H161.004L176.522 118.444Z"
                fill="black"
              />
            </g>
            <path
              d="M230 133H110C108.895 133 108 133.895 108 135V139C108 140.105 108.895 141 110 141H230C231.105 141 232 140.105 232 139V135C232 133.895 231.105 133 230 133Z"
              fill="#9E9EAD"
            />
            <path
              d="M252 153H88C86.8954 153 86 153.895 86 155V157C86 158.105 86.8954 159 88 159H252C253.105 159 254 158.105 254 157V155C254 153.895 253.105 153 252 153Z"
              fill="#E3E3E8"
            />
            <path
              d="M230 163H110C108.895 163 108 163.895 108 165V167C108 168.105 108.895 169 110 169H230C231.105 169 232 168.105 232 167V165C232 163.895 231.105 163 230 163Z"
              fill="#E3E3E8"
            />
            <path
              d="M252 185H88C86.8954 185 86 185.895 86 187V189C86 190.105 86.8954 191 88 191H252C253.105 191 254 190.105 254 189V187C254 185.895 253.105 185 252 185Z"
              fill="#E3E3E8"
            />
            <path
              d="M208 195H88C86.8954 195 86 195.895 86 197V199C86 200.105 86.8954 201 88 201H208C209.105 201 210 200.105 210 199V197C210 195.895 209.105 195 208 195Z"
              fill="#E3E3E8"
            />
            <path
              d="M252 205H88C86.8954 205 86 205.895 86 207V209C86 210.105 86.8954 211 88 211H252C253.105 211 254 210.105 254 209V207C254 205.895 253.105 205 252 205Z"
              fill="#E3E3E8"
            />
            <path
              d="M252 215H88C86.8954 215 86 215.895 86 217V219C86 220.105 86.8954 221 88 221H252C253.105 221 254 220.105 254 219V217C254 215.895 253.105 215 252 215Z"
              fill="#E3E3E8"
            />
            <path
              d="M208 225H88C86.8954 225 86 225.895 86 227V229C86 230.105 86.8954 231 88 231H208C209.105 231 210 230.105 210 229V227C210 225.895 209.105 225 208 225Z"
              fill="#E3E3E8"
            />
            <path
              d="M252 235H88C86.8954 235 86 235.895 86 237V239C86 240.105 86.8954 241 88 241H252C253.105 241 254 240.105 254 239V237C254 235.895 253.105 235 252 235Z"
              fill="#E3E3E8"
            />
            <path
              d="M252 261H88C86.8954 261 86 261.895 86 263V265C86 266.105 86.8954 267 88 267H252C253.105 267 254 266.105 254 265V263C254 261.895 253.105 261 252 261Z"
              fill="#E3E3E8"
            />
            <path
              d="M252 271H88C86.8954 271 86 271.895 86 273V275C86 276.105 86.8954 277 88 277H252C253.105 277 254 276.105 254 275V273C254 271.895 253.105 271 252 271Z"
              fill="#E3E3E8"
            />
            <path
              d="M208 281H88C86.8954 281 86 281.895 86 283V285C86 286.105 86.8954 287 88 287H208C209.105 287 210 286.105 210 285V283C210 281.895 209.105 281 208 281Z"
              fill="#E3E3E8"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function VerificationIllustration() {
  return (
    <div className="group relative w-full h-full">
      <svg
        width="100%"
        viewBox="0 0 731 404"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <style>{`
              .ver-badge {
                transform-box: fill-box;
                transform-origin: center center;
                transform: scale(1);
              }
              .group:hover .ver-badge {
                animation: verBadgePop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
              }
              @keyframes verBadgePop {
                0%   { transform: scale(1);   }
                60%  { transform: scale(1.2); }
                100% { transform: scale(1.1); }
              }
            `}</style>
          <clipPath id="ver-clip">
            <rect width="731" height="404" fill="white" />
          </clipPath>
          <mask id="ver-toolbar-mask" fill="white">
            <path d="M75 66H654V90H75V66Z" />
          </mask>
        </defs>

        <g clipPath="url(#ver-clip)">
          {/* Background — warms on hover */}
          <rect
            width="731"
            height="404"
            className="fill-[#F7F7F7] group-hover:fill-[#FEFCFA] transition-colors duration-500"
          />

          {/* Browser outer frame */}
          <path
            d="M114 49H624C633.928 49 641.273 49.002 646.909 49.7598C652.517 50.5137 656.284 51.9988 659.143 54.8574C662.001 57.716 663.486 61.4831 664.24 67.0908C664.998 72.7273 665 80.0724 665 90V447.353C665 449.266 664.998 450.601 664.862 451.608C664.731 452.587 664.49 453.106 664.121 453.475C663.752 453.843 663.234 454.084 662.256 454.216C661.249 454.351 659.914 454.353 658 454.353H74C72.0861 454.353 70.7513 454.351 69.7441 454.216C68.766 454.084 68.2479 453.843 67.8789 453.475C67.5099 453.106 67.2692 452.587 67.1377 451.608C67.0023 450.601 67 449.266 67 447.353V96C67 84.6581 67.0025 76.2522 67.8701 69.7988C68.7339 63.3742 70.4384 59.0343 73.7363 55.7363C77.0343 52.4384 81.3742 50.7339 87.7988 49.8701C93.4456 49.1109 100.587 49.0142 109.883 49.002L114 49Z"
            fill="#E2E8F0"
            stroke="#CBD5E0"
            strokeWidth="2"
          />

          {/* Dark title bar */}
          <path
            d="M69.6768 87.6764C69.6768 70.7058 69.6768 62.2205 74.9488 56.9485C80.2209 51.6764 88.7062 51.6764 105.677 51.6764H626.324C643.294 51.6764 651.78 51.6764 657.052 56.9485C662.324 62.2205 662.324 70.7058 662.324 87.6764V439.912H69.6768V87.6764Z"
            fill="#1E293B"
          />

          {/* Browser content area */}
          <path
            d="M74.9111 81.8216C74.9111 76.2211 74.9111 73.4209 76.0011 71.2818C76.9598 69.4001 78.4896 67.8703 80.3712 66.9116C82.5103 65.8217 85.3106 65.8217 90.9111 65.8217H638.116C643.717 65.8217 646.517 65.8217 648.656 66.9116C650.538 67.8703 652.067 69.4001 653.026 71.2818C654.116 73.4209 654.116 76.2211 654.116 81.8217V434.985H74.9111V81.8216Z"
            fill="white"
          />

          {/* Browser inner border */}
          <path
            d="M90.9111 66.3217H638.116C640.925 66.3217 643.001 66.3222 644.644 66.4564C646.28 66.5901 647.442 66.8539 648.429 67.3568C650.216 68.2676 651.67 69.7216 652.581 71.5092C653.084 72.4964 653.348 73.658 653.481 75.2943C653.616 76.9367 653.616 79.0131 653.616 81.8217V434.486H75.4111V81.8217C75.4111 79.0131 75.4117 76.9367 75.5459 75.2943C75.6796 73.658 75.9434 72.4964 76.4463 71.5092C77.3571 69.7216 78.8111 68.2676 80.5986 67.3568C81.5858 66.8539 82.7475 66.5901 84.3838 66.4564C86.0262 66.3222 88.1026 66.3217 90.9111 66.3217Z"
            stroke="black"
            strokeOpacity="0.1"
          />

          {/* Page content placeholder - hero image area */}
          <rect
            x="90.1865"
            y="111.649"
            width="548.653"
            height="81.47"
            rx="3"
            fill="#F7F7F7"
            stroke="black"
            strokeOpacity="0.1"
            strokeWidth="0.5"
          />

          {/* Text line placeholders */}
          <rect
            x="90.1865"
            y="218.579"
            width="332"
            height="8"
            rx="4"
            fill="#9E9EAD"
          />
          <rect
            x="90.1865"
            y="236.401"
            width="415"
            height="5.092"
            rx="2.5"
            fill="#E2E8F0"
          />
          <rect
            x="90.1865"
            y="246.584"
            width="458.273"
            height="5.092"
            rx="2.5"
            fill="#E2E8F0"
          />
          <rect
            x="90.1865"
            y="256.768"
            width="497.735"
            height="5.092"
            rx="2.5"
            fill="#E2E8F0"
          />
          <rect
            x="90.1865"
            y="266.952"
            width="316.972"
            height="5.092"
            rx="2.5"
            fill="#E2E8F0"
          />
          <rect
            x="90.1865"
            y="277.136"
            width="374.256"
            height="5.092"
            rx="2.5"
            fill="#E2E8F0"
          />
          <rect
            x="90.1865"
            y="307.688"
            width="437.905"
            height="50.919"
            rx="3"
            fill="#F7F7F7"
            stroke="black"
            strokeOpacity="0.1"
            strokeWidth="0.5"
          />
          <rect
            x="90.1865"
            y="371.336"
            width="437.905"
            height="5.092"
            rx="2.5"
            fill="#E2E8F0"
          />
          <rect
            x="90.1865"
            y="381.52"
            width="403.535"
            height="5.092"
            rx="2.5"
            fill="#E2E8F0"
          />

          {/* Toolbar background */}
          <path
            d="M75 76C75 70.4772 79.4772 66 85 66H644C649.523 66 654 70.4772 654 76V90H75V76Z"
            fill="#F1F5F9"
          />
          <path
            d="M75 66H654H75M654 90.75H75V89.25H654V90.75Z"
            fill="black"
            fillOpacity="0.1"
          />

          {/* Traffic lights */}
          <circle cx="91.9669" cy="78" r="4.5245" fill="#EF4444" />
          <circle cx="106.672" cy="78" r="4.5245" fill="#EAB308" />
          <circle cx="121.376" cy="78" r="4.5245" fill="#22C55E" />

          {/* URL bar */}
          <rect
            x="292.176"
            y="72"
            width="180.824"
            height="12"
            rx="1"
            fill="white"
          />

          {/* Lock icon body — gray → green on hover */}
          <path
            d="M299.964 77.2855V80.4283H304.089V77.2855H303.745H300.308H299.964Z"
            className="fill-[#6E6E7D] group-hover:fill-[#16A34A] transition-colors duration-300"
          />
          {/* Lock icon shackle — gray → green on hover */}
          <path
            d="M300.308 77.2855H299.964V80.4283H304.089V77.2855H303.745M300.308 77.2855C300.308 77.2855 299.964 74.9283 302.026 74.9283C304.089 74.9283 303.745 77.2855 303.745 77.2855M300.308 77.2855H303.745"
            className="stroke-[#6E6E7D] group-hover:stroke-[#16A34A] transition-colors duration-300"
            strokeWidth="0.75"
          />

          {/* URL bar text placeholder */}
          <rect
            x="313.15"
            y="75.9189"
            width="137.51"
            height="2.6128"
            rx="1"
            fill="#CBD5E1"
          />

          {/* Badge / shield — animates and recolors on hover */}
          <g className="ver-badge">
            {/* Shield fill — gray → green */}
            <path
              d="M652.441 363.255C653.253 363.728 653.659 363.965 654.231 364.088C654.676 364.183 655.325 364.183 655.769 364.088C656.342 363.965 656.748 363.728 657.56 363.255C664.702 359.087 684.334 345.998 684.334 328V310.465C684.334 307.533 684.334 306.067 683.854 304.807C683.431 303.694 682.742 302.701 681.849 301.914C680.838 301.022 679.465 300.508 676.72 299.478L657.06 292.106C656.298 291.82 655.917 291.677 655.525 291.62C655.177 291.57 654.824 291.57 654.476 291.62C654.084 291.677 653.703 291.82 652.94 292.106L633.28 299.478C630.536 300.508 629.163 301.022 628.152 301.914C627.258 302.701 626.57 303.694 626.146 304.807C625.667 306.067 625.667 307.533 625.667 310.465V328C625.667 345.998 645.298 359.087 652.441 363.255Z"
              className="fill-[#E3E3E8] group-hover:fill-[#DCFCE7] transition-colors duration-300"
            />
            {/* Shield stroke + checkmark — gray → green */}
            <path
              d="M644 326.167L651.334 333.5L667.834 317M684.334 328C684.334 345.998 664.702 359.087 657.56 363.255C656.748 363.728 656.342 363.965 655.769 364.088C655.325 364.183 654.676 364.183 654.231 364.088C653.659 363.965 653.253 363.728 652.441 363.255C645.298 359.087 625.667 345.998 625.667 328V310.465C625.667 307.533 625.667 306.067 626.146 304.807C626.57 303.694 627.258 302.701 628.152 301.914C629.163 301.022 630.536 300.508 633.28 299.478L652.94 292.106C653.703 291.82 654.084 291.677 654.476 291.62C654.824 291.57 655.177 291.57 655.525 291.62C655.917 291.677 656.298 291.82 657.06 292.106L676.72 299.478C679.465 300.508 680.838 301.022 681.849 301.914C682.742 302.701 683.431 303.694 683.854 304.807C684.334 306.067 684.334 307.533 684.334 310.465V328Z"
              className="stroke-[#94A3B8] group-hover:stroke-[#16A34A] transition-colors duration-300"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function BlocklistIllustration() {
  return (
    <div className="group relative w-full h-full">
      <svg
        width="100%"
        viewBox="0 0 1136 524"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <radialGradient
            id="bl-bg"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(568 524) rotate(90) scale(439)"
          >
            <stop stopColor="#F4F4F5" />
            <stop offset="1" stopColor="#FAFAFA" />
          </radialGradient>
          <linearGradient
            id="bl-sweep"
            x1="712.5"
            y1="325"
            x2="417"
            y2="259"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#CA7D15" stopOpacity="0.12" />
            <stop offset="0.384615" stopColor="#CA7D15" stopOpacity="0" />
          </linearGradient>
          <filter
            id="bl-shadow"
            x="735"
            y="148"
            width="82"
            height="82"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="4" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0196078 0 0 0 0 0.180392 0 0 0 0 0.0862745 0 0 0 0.125 0"
            />
            <feBlend mode="normal" in2="BackgroundImageFix" result="shadow" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="shadow"
              result="shape"
            />
          </filter>
          <clipPath id="bl-clip">
            <rect width="1136" height="524" fill="white" />
          </clipPath>
        </defs>

        <g clipPath="url(#bl-clip)">
          <rect width="1136" height="524" fill="#FAFAFA" />

          {/* ── Outer radar circle ── */}
          <path
            d="M129 524C129 281.547 325.547 85 568 85C810.453 85 1007 281.547 1007 524C1007 766.453 810.453 963 568 963C325.547 963 129 766.453 129 524Z"
            fill="url(#bl-bg)"
            stroke="black"
            strokeOpacity="0.06"
          />

          {/* ── Concentric rings ── */}
          <path
            d="M201 522.5C201 320.64 365.311 157 568 157C770.689 157 935 320.64 935 522.5C935 724.36 770.689 888 568 888C365.311 888 201 724.36 201 522.5Z"
            stroke="black"
            strokeOpacity="0.06"
          />
          <path
            d="M278 522C278 360.733 407.837 230 568 230C728.163 230 858 360.733 858 522C858 683.267 728.163 814 568 814C407.837 814 278 683.267 278 522Z"
            stroke="black"
            strokeOpacity="0.06"
          />
          <path
            d="M353 522.5C353 402.93 449.259 306 568 306C686.741 306 783 402.93 783 522.5C783 642.07 686.741 739 568 739C449.259 739 353 642.07 353 522.5Z"
            stroke="black"
            strokeOpacity="0.06"
          />
          <path
            d="M423 523C423 443.471 487.919 379 568 379C648.081 379 713 443.471 713 523C713 602.529 648.081 667 568 667C487.919 667 423 602.529 423 523Z"
            stroke="black"
            strokeOpacity="0.06"
          />
          <path
            d="M500 522C500 483.34 530.445 452 568 452C605.555 452 636 483.34 636 522C636 560.66 605.555 592 568 592C530.445 592 500 560.66 500 522Z"
            stroke="black"
            strokeOpacity="0.06"
          />

          {/* ── Scanner — sweeps west to east (234.8° → 414.8°) over 8s ── */}
          <g>
            <path
              d="M821.508 165.594C748.114 113.681 660.551 85.5516 570.654 85.008C480.758 84.4644 392.861 111.533 318.844 162.555C244.828 213.577 188.259 286.093 156.785 370.301C125.311 454.51 120.448 546.351 142.853 633.413L568 524L821.508 165.594Z"
              fill="url(#bl-sweep)"
            />
            <path d="M821 165L568 524" stroke="#CA7D15" strokeOpacity="0.25" />
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="234.8 568 524"
              to="414.8 568 524"
              dur="8s"
              repeatCount="indefinite"
            />
          </g>

          {/* ── Icon D — (343, 329) — scanned at 22.7% ── */}
          <g>
            <path
              d="M345.5 336.5V332C345.5 331.533 345.5 331.3 345.409 331.122C345.329 330.965 345.202 330.837 345.045 330.757C344.867 330.667 344.633 330.667 344.167 330.667H341.833C341.367 330.667 341.133 330.667 340.955 330.757C340.798 330.837 340.671 330.965 340.591 331.122C340.5 331.3 340.5 331.533 340.5 332V336.5M335.5 324.833C335.5 326.214 336.619 327.333 338 327.333C339.381 327.333 340.5 326.214 340.5 324.833C340.5 326.214 341.619 327.333 343 327.333C344.381 327.333 345.5 326.214 345.5 324.833C345.5 326.214 346.619 327.333 348 327.333C349.381 327.333 350.5 326.214 350.5 324.833M338.167 336.5H347.833C348.767 336.5 349.233 336.5 349.59 336.318C349.904 336.159 350.159 335.904 350.318 335.59C350.5 335.233 350.5 334.767 350.5 333.833V324.167C350.5 323.233 350.5 322.767 350.318 322.41C350.159 322.096 349.904 321.841 349.59 321.682C349.233 321.5 348.767 321.5 347.833 321.5H338.167C337.233 321.5 336.767 321.5 336.41 321.682C336.096 321.841 335.841 322.096 335.682 322.41C335.5 322.767 335.5 323.233 335.5 324.167V333.833C335.5 334.767 335.5 335.233 335.682 335.59C335.841 335.904 336.096 336.159 336.41 336.318C336.767 336.5 337.233 336.5 338.167 336.5Z"
              fill="none"
              strokeWidth="1.67"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <animate
                attributeName="stroke"
                dur="8s"
                repeatCount="indefinite"
                calcMode="discrete"
                keyTimes="0;0.227"
                values="#94A3B8;#E5C6C6"
              />
            </path>
            <path
              d="M351 333L347 337M347 333L351 337"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0"
            >
              <animate
                attributeName="stroke"
                dur="8s"
                repeatCount="indefinite"
                calcMode="discrete"
                keyTimes="0;0.227"
                values="#00000000;#EF4444"
              />
              <animate
                attributeName="opacity"
                dur="8s"
                repeatCount="indefinite"
                calcMode="discrete"
                keyTimes="0;0.227"
                values="0;1"
              />
            </path>
          </g>

          {/* ── Icon E — (323, 201) — scanned at 29.3% ── */}
          <g>
            <path
              d="M325.5 208.5V204C325.5 203.533 325.5 203.3 325.409 203.122C325.329 202.965 325.202 202.837 325.045 202.757C324.867 202.667 324.633 202.667 324.167 202.667H321.833C321.367 202.667 321.133 202.667 320.955 202.757C320.798 202.837 320.671 202.965 320.591 203.122C320.5 203.3 320.5 203.533 320.5 204V208.5M315.5 196.833C315.5 198.214 316.619 199.333 318 199.333C319.381 199.333 320.5 198.214 320.5 196.833C320.5 198.214 321.619 199.333 323 199.333C324.381 199.333 325.5 198.214 325.5 196.833C325.5 198.214 326.619 199.333 328 199.333C329.381 199.333 330.5 198.214 330.5 196.833M318.167 208.5H327.833C328.767 208.5 329.233 208.5 329.59 208.318C329.904 208.159 330.159 207.904 330.318 207.59C330.5 207.233 330.5 206.767 330.5 205.833V196.167C330.5 195.233 330.5 194.767 330.318 194.41C330.159 194.096 329.904 193.841 329.59 193.682C329.233 193.5 328.767 193.5 327.833 193.5H318.167C317.233 193.5 316.767 193.5 316.41 193.682C316.096 193.841 315.841 194.096 315.682 194.41C315.5 194.767 315.5 195.233 315.5 196.167V205.833C315.5 206.767 315.5 207.233 315.682 207.59C315.841 207.904 316.096 208.159 316.41 208.318C316.767 208.5 317.233 208.5 318.167 208.5Z"
              fill="none"
              strokeWidth="1.67"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <animate
                attributeName="stroke"
                dur="8s"
                repeatCount="indefinite"
                calcMode="discrete"
                keyTimes="0;0.293"
                values="#94A3B8;#E5C6C6"
              />
            </path>
            <path
              d="M331 205L327 209M327 205L331 209"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0"
            >
              <animate
                attributeName="stroke"
                dur="8s"
                repeatCount="indefinite"
                calcMode="discrete"
                keyTimes="0;0.293"
                values="#00000000;#EF4444"
              />
              <animate
                attributeName="opacity"
                dur="8s"
                repeatCount="indefinite"
                calcMode="discrete"
                keyTimes="0;0.293"
                values="0;1"
              />
            </path>
          </g>

          {/* ── Icon F — (530, 309) — scanned at 44.4% ── */}
          <g>
            <path
              d="M532.5 316.5V312C532.5 311.533 532.5 311.3 532.409 311.122C532.329 310.965 532.202 310.837 532.045 310.757C531.867 310.667 531.633 310.667 531.167 310.667H528.833C528.367 310.667 528.133 310.667 527.955 310.757C527.798 310.837 527.671 310.965 527.591 311.122C527.5 311.3 527.5 311.533 527.5 312V316.5M522.5 304.833C522.5 306.214 523.619 307.333 525 307.333C526.381 307.333 527.5 306.214 527.5 304.833C527.5 306.214 528.619 307.333 530 307.333C531.381 307.333 532.5 306.214 532.5 304.833C532.5 306.214 533.619 307.333 535 307.333C536.381 307.333 537.5 306.214 537.5 304.833M525.167 316.5H534.833C535.767 316.5 536.233 316.5 536.59 316.318C536.904 316.159 537.159 315.904 537.318 315.59C537.5 315.233 537.5 314.767 537.5 313.833V304.167C537.5 303.233 537.5 302.767 537.318 302.41C537.159 302.096 536.904 301.841 536.59 301.682C536.233 301.5 535.767 301.5 534.833 301.5H525.167C524.233 301.5 523.767 301.5 523.41 301.682C523.096 301.841 522.841 302.096 522.682 302.41C522.5 302.767 522.5 303.233 522.5 304.167V313.833C522.5 314.767 522.5 315.233 522.682 315.59C522.841 315.904 523.096 316.159 523.41 316.318C523.767 316.5 524.233 316.5 525.167 316.5Z"
              fill="none"
              strokeWidth="1.67"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <animate
                attributeName="stroke"
                dur="8s"
                repeatCount="indefinite"
                calcMode="discrete"
                keyTimes="0;0.444"
                values="#94A3B8;#E5C6C6"
              />
            </path>
            <path
              d="M538 313L534 317M534 313L538 317"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0"
            >
              <animate
                attributeName="stroke"
                dur="8s"
                repeatCount="indefinite"
                calcMode="discrete"
                keyTimes="0;0.444"
                values="#00000000;#EF4444"
              />
              <animate
                attributeName="opacity"
                dur="8s"
                repeatCount="indefinite"
                calcMode="discrete"
                keyTimes="0;0.444"
                values="0;1"
              />
            </path>
          </g>

          {/* ── Special icon — (776, 187) — scanned at 67.6% ── */}
          <g
            filter="url(#bl-shadow)"
            style={{ transformOrigin: "776px 187px" }}
          >
            <animateTransform
              attributeName="transform"
              type="scale"
              calcMode="spline"
              keyTimes="0; 0.674; 0.676; 0.690; 0.950; 1.0"
              keySplines="0 0 1 1; 0 0 1 1; 0.34 1.56 0.64 1; 0 0 1 1; 0 0 1 1"
              values="1 1; 1 1; 1.25 1.25; 1.25 1.25; 1 1; 1 1"
              dur="8s"
              repeatCount="indefinite"
              additive="replace"
            />

            {/* Bg circle — scan: transparent. Hover only: #DCFCE7 */}
            <rect
              x="748"
              y="159"
              width="56"
              height="56"
              rx="28"
              className="fill-transparent group-hover:fill-[#DCFCE7] transition-colors duration-300"
            />

            {/* Outer ring — scan: transparent. Hover only: #F0FDF4 */}
            <rect
              x="748"
              y="159"
              width="56"
              height="56"
              rx="28"
              fill="none"
              strokeWidth="10"
              className="stroke-transparent group-hover:stroke-[#F0FDF4] transition-colors duration-300"
            />

            {/* Store icon — grey default → muted green at scan → vibrant green on hover */}
            <path
              d="M772.5 197.5V191.2C772.5 190.547 772.5 190.22 772.627 189.97C772.739 189.751 772.917 189.572 773.137 189.46C773.387 189.333 773.713 189.333 774.367 189.333H777.633C778.287 189.333 778.613 189.333 778.863 189.46C779.083 189.572 779.261 189.751 779.373 189.97C779.5 190.22 779.5 190.547 779.5 191.2V192.775M765.5 181.167C765.5 183.1 767.067 184.667 769 184.667C770.933 184.667 772.5 183.1 772.5 181.167C772.5 183.1 774.067 184.667 776 184.667C777.933 184.667 779.5 183.1 779.5 181.167C779.5 183.1 781.067 184.667 783 184.667C784.933 184.667 786.5 183.1 786.5 181.167M779.383 197.5H776H769.233C767.927 197.5 767.273 197.5 766.774 197.246C766.335 197.022 765.978 196.665 765.754 196.226C765.5 195.727 765.5 195.073 765.5 193.767V180.233C765.5 178.927 765.5 178.273 765.754 177.774C765.978 177.335 766.335 176.978 766.774 176.754C767.273 176.5 767.927 176.5 769.233 176.5H782.767C784.073 176.5 784.727 176.5 785.226 176.754C785.665 176.978 786.022 177.335 786.246 177.774C786.5 178.273 786.5 178.927 786.5 180.233V187V188.692V190.383"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <animate
                attributeName="stroke"
                dur="8s"
                repeatCount="indefinite"
                calcMode="discrete"
                keyTimes="0; 0.676; 0.950; 1.0"
                values="#94A3B8; #86EFAC; #86EFAC; #94A3B8"
              />
            </path>
            {/* Hover override — always vibrant green on card hover */}
            <path
              d="M772.5 197.5V191.2C772.5 190.547 772.5 190.22 772.627 189.97C772.739 189.751 772.917 189.572 773.137 189.46C773.387 189.333 773.713 189.333 774.367 189.333H777.633C778.287 189.333 778.613 189.333 778.863 189.46C779.083 189.572 779.261 189.751 779.373 189.97C779.5 190.22 779.5 190.547 779.5 191.2V192.775M765.5 181.167C765.5 183.1 767.067 184.667 769 184.667C770.933 184.667 772.5 183.1 772.5 181.167C772.5 183.1 774.067 184.667 776 184.667C777.933 184.667 779.5 183.1 779.5 181.167C779.5 183.1 781.067 184.667 783 184.667C784.933 184.667 786.5 183.1 786.5 181.167M779.383 197.5H776H769.233C767.927 197.5 767.273 197.5 766.774 197.246C766.335 197.022 765.978 196.665 765.754 196.226C765.5 195.727 765.5 195.073 765.5 193.767V180.233C765.5 178.927 765.5 178.273 765.754 177.774C765.978 177.335 766.335 176.978 766.774 176.754C767.273 176.5 767.927 176.5 769.233 176.5H782.767C784.073 176.5 784.727 176.5 785.226 176.754C785.665 176.978 786.022 177.335 786.246 177.774C786.5 178.273 786.5 178.927 786.5 180.233V187V188.692V190.383"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="stroke-transparent group-hover:stroke-[#16A34A] transition-colors duration-300"
            />

            {/* Checkmark — hidden default → appears at scan → always on hover */}
            <path
              d="M789.066 192.6L783.933 197.733L781.6 195.4"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0"
            >
              <animate
                attributeName="opacity"
                dur="8s"
                repeatCount="indefinite"
                calcMode="discrete"
                keyTimes="0; 0.676; 0.950; 1.0"
                values="0; 1; 1; 0"
              />
              <animate
                attributeName="stroke"
                dur="8s"
                repeatCount="indefinite"
                calcMode="discrete"
                keyTimes="0; 0.676; 0.950; 1.0"
                values="transparent; black; black; transparent"
              />
            </path>
            {/* Checkmark hover override */}
            <path
              d="M789.066 192.6L783.933 197.733L781.6 195.4"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="stroke-transparent group-hover:stroke-black transition-colors duration-300"
            />
          </g>

          {/* ── Icon B — (811, 295) — scanned at 75.9% ── */}
          <g>
            <path
              d="M813.5 302.5V298C813.5 297.533 813.5 297.3 813.409 297.122C813.329 296.965 813.202 296.837 813.045 296.757C812.867 296.667 812.633 296.667 812.167 296.667H809.833C809.367 296.667 809.133 296.667 808.955 296.757C808.798 296.837 808.671 296.965 808.591 297.122C808.5 297.3 808.5 297.533 808.5 298V302.5M803.5 290.833C803.5 292.214 804.619 293.333 806 293.333C807.381 293.333 808.5 292.214 808.5 290.833C808.5 292.214 809.619 293.333 811 293.333C812.381 293.333 813.5 292.214 813.5 290.833C813.5 292.214 814.619 293.333 816 293.333C817.381 293.333 818.5 292.214 818.5 290.833M806.167 302.5H815.833C816.767 302.5 817.233 302.5 817.59 302.318C817.904 302.159 818.159 301.904 818.318 301.59C818.5 301.233 818.5 300.767 818.5 299.833V290.167C818.5 289.233 818.5 288.767 818.318 288.41C818.159 288.096 817.904 287.841 817.59 287.682C817.233 287.5 816.767 287.5 815.833 287.5H806.167C805.233 287.5 804.767 287.5 804.41 287.682C804.096 287.841 803.841 288.096 803.682 288.41C803.5 288.767 803.5 289.233 803.5 290.167V299.833C803.5 300.767 803.5 301.233 803.682 301.59C803.841 301.904 804.096 302.159 804.41 302.318C804.767 302.5 805.233 302.5 806.167 302.5Z"
              fill="none"
              strokeWidth="1.67"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <animate
                attributeName="stroke"
                dur="8s"
                repeatCount="indefinite"
                calcMode="discrete"
                keyTimes="0;0.759"
                values="#94A3B8;#E5C6C6"
              />
            </path>
            <path
              d="M819 299L815 303M815 299L819 303"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0"
            >
              <animate
                attributeName="stroke"
                dur="8s"
                repeatCount="indefinite"
                calcMode="discrete"
                keyTimes="0;0.759"
                values="#00000000;#EF4444"
              />
              <animate
                attributeName="opacity"
                dur="8s"
                repeatCount="indefinite"
                calcMode="discrete"
                keyTimes="0;0.759"
                values="0;1"
              />
            </path>
          </g>

          {/* ── Icon A — (875, 424) — scanned at 89.9% ── */}
          <g>
            <path
              d="M877.5 431.5V427C877.5 426.533 877.5 426.3 877.409 426.122C877.329 425.965 877.202 425.837 877.045 425.757C876.867 425.667 876.633 425.667 876.167 425.667H873.833C873.367 425.667 873.133 425.667 872.955 425.757C872.798 425.837 872.671 425.965 872.591 426.122C872.5 426.3 872.5 426.533 872.5 427V431.5M867.5 419.833C867.5 421.214 868.619 422.333 870 422.333C871.381 422.333 872.5 421.214 872.5 419.833C872.5 421.214 873.619 422.333 875 422.333C876.381 422.333 877.5 421.214 877.5 419.833C877.5 421.214 878.619 422.333 880 422.333C881.381 422.333 882.5 421.214 882.5 419.833M870.167 431.5H879.833C880.767 431.5 881.233 431.5 881.59 431.318C881.904 431.159 882.159 430.904 882.318 430.59C882.5 430.233 882.5 429.767 882.5 428.833V419.167C882.5 418.233 882.5 417.767 882.318 417.41C882.159 417.096 881.904 416.841 881.59 416.682C881.233 416.5 880.767 416.5 879.833 416.5H870.167C869.233 416.5 868.767 416.5 868.41 416.682C868.096 416.841 867.841 417.096 867.682 417.41C867.5 417.767 867.5 418.233 867.5 419.167V428.833C867.5 429.767 867.5 430.233 867.682 430.59C867.841 430.904 868.096 431.159 868.41 431.318C868.767 431.5 869.233 431.5 870.167 431.5Z"
              fill="none"
              strokeWidth="1.67"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <animate
                attributeName="stroke"
                dur="8s"
                repeatCount="indefinite"
                calcMode="discrete"
                keyTimes="0;0.899"
                values="#94A3B8;#E5C6C6"
              />
            </path>
            <path
              d="M883 428L879 432M879 428L883 432"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0"
            >
              <animate
                attributeName="stroke"
                dur="8s"
                repeatCount="indefinite"
                calcMode="discrete"
                keyTimes="0;0.899"
                values="#00000000;#EF4444"
              />
              <animate
                attributeName="opacity"
                dur="8s"
                repeatCount="indefinite"
                calcMode="discrete"
                keyTimes="0;0.899"
                values="0;1"
              />
            </path>
          </g>

          {/* ── Icon C — (969, 460) — scanned at 94.9% ── */}
          <g>
            <path
              d="M971.5 467.5V463C971.5 462.533 971.5 462.3 971.409 462.122C971.329 461.965 971.202 461.837 971.045 461.757C970.867 461.667 970.633 461.667 970.167 461.667H967.833C967.367 461.667 967.133 461.667 966.955 461.757C966.798 461.837 966.671 461.965 966.591 462.122C966.5 462.3 966.5 462.533 966.5 463V467.5M961.5 455.833C961.5 457.214 962.619 458.333 964 458.333C965.381 458.333 966.5 457.214 966.5 455.833C966.5 457.214 967.619 458.333 969 458.333C970.381 458.333 971.5 457.214 971.5 455.833C971.5 457.214 972.619 458.333 974 458.333C975.381 458.333 976.5 457.214 976.5 455.833M964.167 467.5H973.833C974.767 467.5 975.233 467.5 975.59 467.318C975.904 467.159 976.159 466.904 976.318 466.59C976.5 466.233 976.5 465.767 976.5 464.833V455.167C976.5 454.233 976.5 453.767 976.318 453.41C976.159 453.096 975.904 452.841 975.59 452.682C975.233 452.5 974.767 452.5 973.833 452.5H964.167C963.233 452.5 962.767 452.5 962.41 452.682C962.096 452.841 961.841 453.096 961.682 453.41C961.5 453.767 961.5 454.233 961.5 455.167V464.833C961.5 465.767 961.5 466.233 961.682 466.59C961.841 466.904 962.096 467.159 962.41 467.318C962.767 467.5 963.233 467.5 964.167 467.5Z"
              fill="none"
              strokeWidth="1.67"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <animate
                attributeName="stroke"
                dur="8s"
                repeatCount="indefinite"
                calcMode="discrete"
                keyTimes="0;0.949"
                values="#94A3B8;#E5C6C6"
              />
            </path>
            <path
              d="M977 464L973 468M973 464L977 468"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0"
            >
              <animate
                attributeName="stroke"
                dur="8s"
                repeatCount="indefinite"
                calcMode="discrete"
                keyTimes="0;0.949"
                values="#00000000;#EF4444"
              />
              <animate
                attributeName="opacity"
                dur="8s"
                repeatCount="indefinite"
                calcMode="discrete"
                keyTimes="0;0.949"
                values="0;1"
              />
            </path>
          </g>
        </g>
      </svg>
    </div>
  );
}

function ReviewsIllustration() {
  return (
    <div className="group relative w-full h-full overflow-hidden">
      {/* ── Static base — stripped SVG (no JPEG, 419KB) ── */}
      {/* Save reviews-base.svg to /public/images/illustrations/ */}
      <Image
        src="/images/illustrations/reviews-base.svg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        height={480}
        width={360}
      />

      {/* ── Hover overlay — only the two changing elements ── */}
      {/* Same viewBox as the base SVG. Pointer-events none so it's invisible to interaction. */}
      <svg
        viewBox="0 0 341 404"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        {/* ── Center card border ── */}
        {/* Default: rgba(0,0,0,0.1) — matches base SVG */}
        {/* Hover: #894717 at 40% opacity — warm amber border */}
        <rect
          x="0.41"
          y="0.21"
          width="236"
          height="272"
          rx="3.5"
          transform="matrix(1 0 0.34202 0.939693 -4.1914 98.329)"
          fill="none"
          className="stroke-black/10 group-hover:stroke-[#894717] transition-colors duration-300"
          strokeOpacity="0.4"
        />

        {/* Check circle — adjust translate(x, y) to move, scale() to resize */}
        <g transform="translate(200, 322) scale(1.5) translate(-191, -286)">
          <path
            d="M191.026 293.686C195.168 293.686 197.377 290.531 195.961 286.639C194.544 282.746 190.038 279.591 185.896 279.591C181.753 279.591 179.544 282.746 180.961 286.639C182.377 290.531 186.884 293.686 191.026 293.686Z"
            className="fill-[#E2E8F0] group-hover:fill-[#DCFCE7] transition-colors duration-300"
          />
          <path
            d="M185.086 286.639L188.105 288.753L191.066 284.524M195.961 286.639C197.377 290.531 195.168 293.686 191.026 293.686C186.884 293.686 182.377 290.531 180.961 286.639C179.544 282.746 181.753 279.591 185.896 279.591C190.038 279.591 194.544 282.746 195.961 286.639Z"
            strokeWidth="1.67"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="stroke-[#94A3B8] group-hover:stroke-[#16A34A] transition-colors duration-300"
          />
        </g>
      </svg>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function WhatSubtextAnalyses() {
  return (
    <section className="flex flex-col gap-16 items-center py-24 w-full">
      {/* Heading */}
      <div className="flex items-center justify-center max-w-310 px-8 w-full">
        <h2 className="font-neue-montreal font-medium text-[48px] leading-15 tracking-[-0.96px] text-[#17171C] text-center max-w-180">
          We read what your analysts would find, and what they&apos;d miss.
        </h2>
      </div>

      {/* Bento grid */}
      <div className="flex flex-col gap-4 max-w-310 px-8 w-full">
        {/* Row 1 */}
        <div className="flex flex-col lg:flex-row gap-4 w-full">
          {/* Card 1 — Website Verification */}
          <AnalysisCard
            heading="Is the business real and operational?"
            body="We verify the merchant's website is live, has real content, and matches what they claim to be. Not a parked domain. Not a template. An actual operating business."
            illustration={<VerificationIllustration />}
            className="flex-1 min-h-142.25"
          />
          {/* Card 2 — Review Sentiment */}
          <AnalysisCard
            heading="What do their customers say?"
            body="We scan third-party review sites for sentiment, complaint patterns, and volume trends. A business with 300 positive reviews and a sudden spike in complaints tells a different story than the website alone."
            illustration={<ReviewsIllustration />}
            className="lg:w-96.25 min-h-142.25"
          />
        </div>

        {/* Row 2 */}
        <div className="flex flex-col lg:flex-row gap-4 w-full">
          {/* Card 3 — Industry Classification */}
          <AnalysisCard
            heading="What does this business actually do?"
            body="We analyze website content, product pages, and service descriptions to classify the merchant's industry — and flag mismatches between what they say and what they sell."
            illustration={<IndustryIllustration />}
            className="flex-1 min-h-161"
          />
          {/* Card 4 — Location Validation */}
          <AnalysisCard
            heading="Is the business where they say they are?"
            body="We cross-reference registered addresses with physical location signals — Google Maps listings, directory registrations, delivery zones, and service area claims."
            illustration={<LocationIllustration />}
            className="flex-1 min-h-161"
          />
          {/* Card 5 — Social Presence */}
          <AnalysisCard
            heading="Are they consistent across platforms?"
            body="We check multiple social profiles for consistency with the business's claimed identity — activity levels, follower patterns, content alignment, and account age."
            illustration={<SocialIllustration />}
            className="flex-1 min-h-161"
          />
        </div>

        {/* Row 3 — Blocklist (full width) */}
        <AnalysisCard
          heading="Have we seen this merchant before?"
          body="Every merchant is checked against our proprietary database of known fraudulent businesses, MATCH-listed entities, and previously flagged merchants across our network."
          illustration={<BlocklistIllustration />}
          className="w-full min-h-100"
        />
      </div>
    </section>
  );
}
