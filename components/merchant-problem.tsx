"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

const PROBLEMS = [
  {
    bold: "Your analysts spend 15–20 minutes Googling every merchant.",
    text: "Every application means a browser, a search, a dozen tabs, and a manual write-up.",
  },
  {
    bold: "Two analysts reviewing the same merchant will reach different conclusions.",
    text: "There's no standard process. Just experience, judgment, and whatever they find first.",
  },
  {
    bold: "Meanwhile, legitimate merchants are waiting in your queue — and leaving.",
    text: "Every day in review is a day they're considering your competitor.",
  },
];

function AnimatedLetter({
  char,
  progress,
  threshold,
}: {
  char: string;
  progress: MotionValue<number>;
  threshold: number;
}) {
  const color = useTransform(
    progress,
    [threshold, threshold + 0.012],
    ["#4F4F5E", "#F4F4F5"]
  );
  if (char === " ") return <span> </span>;
  return <motion.span style={{ color }}>{char}</motion.span>;
}

type Problem = { bold: string; text: string };

type ScrollParagraphProps = {
  problem: Problem;
  progress: MotionValue<number>;
  range: [number, number];
  isLast: boolean;
  index: number;
};

function ScrollParagraph({
  problem,
  progress,
  range,
  index,
  isLast,
}: ScrollParagraphProps) {
  const rangeWidth = range[1] - range[0];

  // Phase 1 — fade + slide in (first 12% of range)
  const fadeInEnd = range[0] + rangeWidth * 0.1;

  // Phase 2 — letter highlights start AFTER block is fully visible
  // Spread letters from 12% to 55% of range
  // Block 3 gets extra delay to compensate for early progress from the offset
  const letterStartOffset = index === 2 ? 0.4 : 0.1;
  const letterStart = range[0] + rangeWidth * letterStartOffset;
  const letterEnd = range[0] + rangeWidth * 0.65;
  const letterSpread = letterEnd - letterStart;

  // Phase 3 — exit starts at 70% of range (non-last blocks only)
  const exitStart = range[0] + rangeWidth * 0.85;

  const opacity = useTransform(
    progress,
    isLast ? [range[0], fadeInEnd] : [range[0], fadeInEnd, exitStart, range[1]],
    isLast ? [0, 1] : [0, 1, 1, 0]
  );

  const y = useTransform(
    progress,
    isLast ? [range[0], fadeInEnd] : [range[0], fadeInEnd, exitStart, range[1]],
    isLast ? [48, 0] : [48, 0, 0, -48]
  );

  const letters = problem.bold.split("");

  return (
    <motion.p
      style={{ opacity, y, width: "100%", maxWidth: 720 }}
      className="absolute left-1/2 -translate-x-1/2 font-neue-montreal text-[20px] leading-7 md:text-[32px] md:leading-10.5 text-[#4F4F5E] text-center"
    >
      <span className="font-medium">
        {letters.map((char, i) => (
          <AnimatedLetter
            key={i}
            char={char}
            progress={progress}
            threshold={letterStart + (i / letters.length) * letterSpread}
          />
        ))}
      </span>{" "}
      {problem.text}
    </motion.p>
  );
}

export default function MerchantProblem() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"],
  });

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-bg-dark">
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        <div
          className="relative w-full flex items-center justify-center px-4 md:px-8"
          style={{ minHeight: 200 }}
        >
          {PROBLEMS.map((problem, i) => {
            const start = i / PROBLEMS.length;
            const end = (i + 1) / PROBLEMS.length;
            const isLast = i === PROBLEMS.length - 1;

            return (
              <ScrollParagraph
                key={i}
                index={i}
                problem={problem}
                progress={scrollYProgress}
                range={[start, end]}
                isLast={isLast}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
