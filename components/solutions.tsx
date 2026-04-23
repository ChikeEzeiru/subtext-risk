"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

function ScreeningGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    let W: number = 0;
    let H: number = 0;
    let animationId: number;
    let startTime: number | null = null;

    function resize() {
      if (!canvas) return;
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (!rect) return;
      W = rect.width;
      H = rect.height;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx!.scale(dpr, dpr);
    }

    resize();

    const spacing = 28;
    const dotBaseRadius = 1.8;
    const cols = Math.ceil(W / spacing) + 2;
    const rows = Math.ceil(H / spacing) + 2;
    const offsetX = (W - (cols - 1) * spacing) / 2;
    const offsetY = (H - (rows - 1) * spacing) / 2;

    const dots = Array.from({ length: rows * cols }, (_, i) => {
      const col = i % cols;
      const row = Math.floor(i / cols);
      return {
        x: offsetX + col * spacing,
        y: offsetY + row * spacing,
        baseAlpha: 0.12 + Math.random() * 0.06,
        result: Math.random() < 0.06 ? "flag" : "pass",
        normalizedX: col / cols,
      };
    });

    const sweepDuration = 4500;
    const pauseDuration = 2000;
    const cycleDuration = sweepDuration + pauseDuration;
    const sweepWidth = 0.15;

    const neutral = { r: 200, g: 200, b: 200 };
    const pass = { r: 26, g: 154, b: 111 };
    const flag = { r: 229, g: 164, b: 34 };

    function lerp(a: number, b: number, t: number) {
      return a + (b - a) * t;
    }
    function easeOutCubic(t: number) {
      return 1 - Math.pow(1 - t, 3);
    }
    function easeInOutSine(t: number) {
      return -(Math.cos(Math.PI * t) - 1) / 2;
    }

    function drawX(
      x: number,
      y: number,
      size: number,
      color: string,
      alpha: number
    ) {
      ctx!.beginPath();
      ctx!.moveTo(x - size, y - size);
      ctx!.lineTo(x + size, y + size);
      ctx!.moveTo(x + size, y - size);
      ctx!.lineTo(x - size, y + size);
      ctx!.strokeStyle = color;
      ctx!.globalAlpha = alpha;
      ctx!.lineWidth = 1.2;
      ctx!.lineCap = "round";
      ctx!.stroke();
      ctx!.globalAlpha = 1;
    }

    function draw(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      ctx!.clearRect(0, 0, W, H);

      const cycleTime = elapsed % cycleDuration;
      const sweepProgress = Math.min(cycleTime / sweepDuration, 1);
      const sweepPos = easeInOutSine(sweepProgress);

      for (const dot of dots) {
        const dist = dot.normalizedX - sweepPos;
        const inSweep = dist > -sweepWidth && dist < 0.02;
        const pastSweep = dist <= -sweepWidth;

        let r = neutral.r,
          g = neutral.g,
          b = neutral.b;
        let alpha = dot.baseAlpha;
        let radius = dotBaseRadius;
        let isFlag = false;
        let flagIntensity = 0;

        const target = dot.result === "flag" ? flag : pass;
        const targetAlpha = dot.result === "flag" ? 0.7 : 0.5;
        const targetRadius =
          dotBaseRadius * (dot.result === "flag" ? 1.8 : 1.3);

        if (sweepProgress >= 1) {
          const fadeBack = Math.min(
            (cycleTime - sweepDuration) / pauseDuration,
            1
          );
          r = lerp(target.r, neutral.r, fadeBack);
          g = lerp(target.g, neutral.g, fadeBack);
          b = lerp(target.b, neutral.b, fadeBack);
          alpha = lerp(targetAlpha, dot.baseAlpha, fadeBack);
          radius = lerp(targetRadius, dotBaseRadius, fadeBack);
          if (dot.result === "flag") {
            isFlag = true;
            flagIntensity = 1 - fadeBack;
          }
        } else if (inSweep) {
          const intensity = easeOutCubic(
            Math.min((1 - (dist + sweepWidth) / (sweepWidth + 0.02)) * 2, 1)
          );
          r = lerp(neutral.r, target.r, intensity);
          g = lerp(neutral.g, target.g, intensity);
          b = lerp(neutral.b, target.b, intensity);
          alpha = lerp(dot.baseAlpha, targetAlpha, intensity);
          radius = lerp(dotBaseRadius, targetRadius, intensity);
          if (dot.result === "flag") {
            isFlag = true;
            flagIntensity = intensity;
          }
        } else if (pastSweep) {
          r = target.r;
          g = target.g;
          b = target.b;
          alpha = targetAlpha;
          radius = targetRadius;
          if (dot.result === "flag") {
            isFlag = true;
            flagIntensity = 1;
          }
        }

        const color = `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(
          b
        )})`;

        if (isFlag && flagIntensity > 0.1) {
          drawX(dot.x, dot.y, radius * 0.9, color, alpha);
        } else {
          ctx!.beginPath();
          ctx!.arc(dot.x, dot.y, radius, 0, Math.PI * 2);
          ctx!.fillStyle = `rgba(${Math.round(r)}, ${Math.round(
            g
          )}, ${Math.round(b)}, ${alpha})`;
          ctx!.fill();
        }
      }

      // Sweep gradient band
      if (sweepProgress < 1) {
        const sweepX = sweepPos * W;
        const grad = ctx!.createLinearGradient(sweepX - 30, 0, sweepX + 10, 0);
        grad.addColorStop(0, "rgba(229, 164, 34, 0)");
        grad.addColorStop(0.5, "rgba(229, 164, 34, 0.04)");
        grad.addColorStop(0.8, "rgba(229, 164, 34, 0.02)");
        grad.addColorStop(1, "rgba(229, 164, 34, 0)");
        ctx!.fillStyle = grad;
        ctx!.fillRect(sweepX - 30, 0, 40, H);
      }

      animationId = requestAnimationFrame(draw);
    }

    animationId = requestAnimationFrame(draw);

    const handleResize = () => {
      resize();
      startTime = null;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}

function SolutionCard({
  icon: Icon,
  heading,
  body,
  className = "",
}: {
  icon: React.ElementType;
  heading: string;
  body: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col gap-4 items-start overflow-clip p-6 w-98 h50 ${className}`}
    >
      <div className="bg-[#FAFAFA] border border-[#D3D3D9] rounded-3xl size-12 flex items-center justify-center">
        <Icon className="size-6" />
      </div>
      <p className="text-[#26262B]">
        <span className="font-neue-montreal font-medium text-xl leading-7-5">
          {heading}
        </span>{" "}
        <span className="font-neue-montreal text-xl leading-7-5 text-[#4F4F5E]">
          {body}
        </span>
      </p>
    </div>
  );
}

export default function Solutions() {
  return (
    <section className="bg-[#F4F4F5] flex flex-col gap-16 items-center py-24 w-full">
      {/* Heading */}
      <div className="flex flex-col items-center max-w-310 overflow-clip px-8 w-full">
        <h2 className="font-neue-montreal font-medium text-[48px] leading-15 tracking-[-0.96px] text-[#17171C] text-center">
          Merchant risk doesn&apos;t end
          <br />
          at onboarding. <span className="text-[#CA7D15]">Neither do we.</span>
        </h2>
      </div>

      {/* Bento Grid */}
      <div className="flex flex-col items-start max-w-310 overflow-clip px-8 w-full">
        {/* Primary Card - Merchant Screening */}
        <div className="border-t border-x border-black/10 rounded-t-xl flex gap-2 items-end justify-center min-h-120 overflow-clip p-0 relative w-full">
          {/* Animation container */}
          <div className="absolute inset-0 overflow-clip">
            <ScreeningGrid />
            {/* Fade gradient at bottom */}
            <div className="absolute -bottom-1 left-0 right-0 h-89.25 bg-linear-to-b from-transparent to-[#F4F4F5]" />
          </div>

          {/* Copy overlay */}
          <p
            className="relative z-10 flex-1 w-auto p-6 text-[#26262B] "
            style={{
              backgroundImage:
                "linear-gradient(to bottom, transparent 10%, #f4f4f5 100%)",
            }}
          >
            <span className="font-neue-montreal font-medium text-2xl leading-8">
              Screen merchants at onboarding — in seconds, not days.
            </span>{" "}
            <span className="font-neue-montreal text-2xl leading-8 text-[#4F4F5E]">
              When a new merchant applies, Subtext instantly verifies their
              business exists, confirms what they do, and flags anything that
              doesn&apos;t add up. Your team gets a clear report instead of a
              stack of browser tabs.
            </span>
          </p>
        </div>

        {/* Three bottom cards */}
        <div className="flex items-start w-full">
          <SolutionCard
            icon={() => (
              <Image
                src="/icons/radar-03.svg"
                width={800}
                height={800}
                alt=""
                className="size-6"
              />
            )}
            heading="Good merchants today can become risky merchants tomorrow."
            body="After onboarding, Subtext watches your entire portfolio daily and alerts you when a merchant's website, reviews, or business model changes."
            className="border border-black/10 rounded-bl-xl"
          />
          <SolutionCard
            icon={() => (
              <Image
                src="/icons/global-search.svg"
                width={800}
                height={800}
                alt="Globe icon"
                className="size-6"
              />
            )}
            heading="When a case needs much more than a quick check."
            body="Extended and thorough AI-powered investigation across a merchant's full online presence — the kind of report that used to take an analyst half a day."
            className="border-y border-black/10"
          />
          <SolutionCard
            icon={() => (
              <Image
                src="/icons/file-verified.svg"
                width={800}
                height={800}
                alt="document check icon"
                className="size-6"
              />
            )}
            heading="Turn risk findings into audit-ready documentation."
            body="Every finding from screening, monitoring, and investigation — packaged into formatted, timestamped reports ready for regulators and card networks."
            className="border border-black/10 rounded-br-xl"
          />
        </div>
      </div>
    </section>
  );
}
