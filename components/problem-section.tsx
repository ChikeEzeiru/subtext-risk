"use client";

import { useEffect, useRef, useState } from "react";

export default function ProblemSection() {
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#17171c] w-full py-24 flex justify-center">
      <div ref={ref} className="flex flex-col gap-8 max-w-[1240px] w-full px-8">

        <p className="text-[30px] leading-[38px] text-[#9e9ead]">
          <span
            style={{
              fontWeight: triggered ? 500 : 400,
              color: triggered ? "#f4f4f5" : "#9e9ead",
              transition: "color 0.5s ease, font-weight 0.5s ease",
              transitionDelay: triggered ? "0.15s" : "0s",
            }}
          >
            20 minutes.
          </span>
          {` That's how long your analysts spend manually reviewing each merchant; Googling the business, reading reviews, checking social profiles, piecing together a risk picture from browser tabs.`}
        </p>

        <p
          className="text-[24px] leading-[32px] font-medium text-[#e5a422]"
          style={{
            opacity: triggered ? 1 : 0,
            transform: triggered ? "translateY(0)" : "translateY(10px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
            transitionDelay: triggered ? "0.7s" : "0s",
          }}
        >
          Subtext does it in 30 seconds.
        </p>

      </div>
    </section>
  );
}
