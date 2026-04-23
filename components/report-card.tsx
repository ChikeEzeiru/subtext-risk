"use client";

import { Globe, Tag, Star, Share2, MapPin, Shield, Clock, Check } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import type { ComponentType } from "react";

const rows = [
  { Icon: Globe,   label: "Website",   value: "Active since 2019" },
  { Icon: Tag,     label: "Industry",  value: "Food & Beverage" },
  { Icon: Star,    label: "Reviews",   value: "4.6★", extra: "312 reviews" },
  { Icon: Share2,  label: "Social",    value: "3 profiles", extra: "Consistent" },
  { Icon: MapPin,  label: "Location",  value: "Matched to registration" },
  { Icon: Shield,  label: "Blocklist", value: "Clear" },
];

function useFadeIn(delay: number, triggered: boolean) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!triggered) return;
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay, triggered]);
  return visible;
}

function FadeIn({ children, delay = 0, triggered, className = "" }: { children: React.ReactNode; delay?: number; triggered: boolean; className?: string }) {
  const visible = useFadeIn(delay, triggered);
  return (
    <div
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(8px)",
        transition: "opacity 500ms ease, transform 500ms ease",
      }}
    >
      {children}
    </div>
  );
}

function ScanLine({ delay = 0, triggered }: { delay?: number; triggered: boolean }) {
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (!triggered) return;
    const t = setTimeout(() => setActive(true), delay);
    return () => clearTimeout(t);
  }, [delay, triggered]);
  if (!active) return null;
  return (
    <div
      className="absolute left-0 right-0 h-px opacity-85 z-[2]"
      style={{
        background: "linear-gradient(90deg, transparent 10%, #ca7d15 40%, #e5a422 50%, #ca7d15 60%, transparent 90%)",
        animation: "scanDown 1.8s ease-out forwards",
      }}
    />
  );
}

function TypingText({ text, delay = 0, speed = 40, triggered, onComplete }: { text: string; delay?: number; speed?: number; triggered: boolean; onComplete?: () => void }) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!triggered) return;
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [delay, triggered]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length >= text.length) {
      onComplete?.();
      return;
    }
    const t = setTimeout(() => setDisplayed(text.slice(0, displayed.length + 1)), speed);
    return () => clearTimeout(t);
  }, [started, displayed, text, speed, onComplete]);

  return (
    <p className="text-[17px] leading-6 font-medium text-[#17171c]">
      {displayed || "\u00A0"}
      {started && displayed.length < text.length && (
        <span
          className="inline-block ml-[1px] align-bottom"
          style={{ width: 1.5, height: "1em", background: "#17171c", animation: "cursorBlink 0.8s ease infinite" }}
        />
      )}
    </p>
  );
}

function RiskBar({ delay = 0, triggered }: { delay?: number; triggered: boolean }) {
  const [filled, setFilled] = useState(false);
  useEffect(() => {
    if (!triggered) return;
    const t = setTimeout(() => setFilled(true), delay);
    return () => clearTimeout(t);
  }, [delay, triggered]);

  return (
    <div className="flex items-center gap-2 w-full">
      <div className="flex-1 relative h-1 rounded-[8px]">
        <div className="absolute inset-0 bg-[#f4f4f5] rounded-[4px]" />
        <div
          className="absolute left-0 top-0 bottom-0 bg-[#16a34a] rounded-[4px]"
          style={{ width: filled ? "17.9%" : "0%", transition: "width 1.2s cubic-bezier(0.16, 1, 0.3, 1)" }}
        />
      </div>
      <span
        className="font-mono font-medium text-[10px] leading-4"
        style={{ color: filled ? "#16a34a" : "#9e9ead", transition: "color 0.5s ease", minWidth: 24 }}
      >
        {filled ? "LOW" : "···"}
      </span>
    </div>
  );
}

function AnalysisTimer({ startDelay = 0, triggered }: { startDelay?: number; triggered: boolean }) {
  const [counting, setCounting] = useState(false);
  const [current, setCurrent] = useState(0);
  const frameRef = useRef<number | undefined>(undefined);
  const startRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (!triggered) return;
    const t = setTimeout(() => setCounting(true), startDelay);
    return () => clearTimeout(t);
  }, [startDelay, triggered]);

  useEffect(() => {
    if (!counting) return;
    startRef.current = performance.now();
    const tick = (now: number) => {
      const elapsed = now - (startRef.current ?? now);
      const progress = Math.min(elapsed / 2800, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(eased * 28));
      if (progress < 1) frameRef.current = requestAnimationFrame(tick);
    };
    frameRef.current = requestAnimationFrame(tick);
    return () => { if (frameRef.current) cancelAnimationFrame(frameRef.current); };
  }, [counting]);

  return (
    <div className="flex items-center gap-2" style={{ opacity: counting ? 1 : 0, transition: "opacity 0.5s ease" }}>
      <Clock size={14} className="text-[#ca7d15] shrink-0" />
      <span className="font-mono font-medium text-[11px] leading-4 text-[#ca7d15]">
        Analysed in {current}s
      </span>
    </div>
  );
}

function AnimatedRow({ Icon, label, value, extra, delay = 0, triggered }: {
  Icon: ComponentType<{ size?: number; className?: string }>;
  label: string;
  value: string;
  extra?: string;
  delay?: number;
  triggered: boolean;
}) {
  const visible = useFadeIn(delay, triggered);
  const [resolved, setResolved] = useState(false);

  useEffect(() => {
    if (!triggered) return;
    const t = setTimeout(() => setResolved(true), delay + 600);
    return () => clearTimeout(t);
  }, [delay, triggered]);

  return (
    <div
      className="flex items-center justify-between py-[10px] border-b border-[rgba(0,0,0,0.1)]"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(8px)",
        transition: "opacity 500ms ease, transform 500ms ease",
      }}
    >
      <div className="flex items-center gap-2">
        <Icon size={14} className="text-[#4f4f5e] shrink-0" />
        <span className="text-[12px] leading-[18px] text-[#4f4f5e]">{label}</span>
      </div>
      <div className="flex items-center gap-2">
        {extra ? (
          <div className="flex items-center gap-1" style={{ opacity: resolved ? 1 : 0, transition: "opacity 0.4s ease" }}>
            <span className="text-[12px] leading-[18px] font-medium text-[#17171c]">{value}</span>
            <div className="size-[2px] rounded-full bg-[#17171c] shrink-0" />
            <span className="text-[12px] leading-[18px] font-medium text-[#17171c]">{extra}</span>
          </div>
        ) : (
          <span
            className="text-[12px] leading-[18px] font-medium text-[#17171c]"
            style={{ opacity: resolved ? 1 : 0, transition: "opacity 0.4s ease" }}
          >
            {value}
          </span>
        )}
        <span
          style={{
            opacity: resolved ? 1 : 0,
            transform: resolved ? "scale(1)" : "scale(0.5)",
            transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Check size={14} className="text-[#16a34a] shrink-0" />
        </span>
      </div>
    </div>
  );
}

export default function ReportCard() {
  const [triggered, setTriggered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[6px] min-w-[420px] flex flex-col overflow-clip relative"
      style={{ boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.05)", animation: triggered ? "subtlePulse 4s ease infinite 4s" : "none" }}
    >
      <ScanLine delay={800} triggered={triggered} />

      {/* Title bar */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-[rgba(0,0,0,0.1)]">
        <FadeIn delay={200} triggered={triggered}>
          <div className="flex items-center gap-[10px]">
            <div className="size-[6px] rounded-full bg-[#ca7d15] shrink-0" />
            <span className="text-[11px] leading-4 tracking-[0.33px] text-[#4f4f5e]">
              MERCHANT RISK REPORT
            </span>
          </div>
        </FadeIn>
        <FadeIn delay={3800} triggered={triggered}>
          <div className="flex items-center gap-[6px] bg-[#dcfce7] border border-[#4ade80] rounded-[12px] px-[10px] pb-1 pt-[5px]">
            <div className="size-[6px] rounded-full bg-[#16a34a] shrink-0" />
            <span className="font-mono text-[10px] leading-[10px] tracking-[-0.1px] text-[#15803d]">
              VERIFIED
            </span>
          </div>
        </FadeIn>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-2 px-5 py-4">

        {/* Business + risk level */}
        <div className="flex flex-col gap-3 pb-2">
          <div className="flex flex-col gap-3">
            <TypingText text="Meridian Coffee Co." delay={600} speed={40} triggered={triggered} />
            <FadeIn delay={1200} triggered={triggered}>
              <p className="font-mono text-[11.5px] leading-4 tracking-[0.115px] text-[#4f4f5e]">
                meridian-coffee.com
              </p>
            </FadeIn>
          </div>
          <FadeIn delay={1500} triggered={triggered} className="flex flex-col gap-1 w-full">
            <span className="text-[11px] leading-4 tracking-[0.33px] text-[#4f4f5e]">RISK LEVEL</span>
            <RiskBar delay={1800} triggered={triggered} />
          </FadeIn>
        </div>

        {/* Breakdown rows */}
        <div className="flex flex-col border-t border-[rgba(0,0,0,0.1)]">
          {rows.map(({ Icon, label, value, extra }, i) => (
            <AnimatedRow
              key={label}
              Icon={Icon}
              label={label}
              value={value}
              extra={extra}
              delay={1800 + i * 350}
              triggered={triggered}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 pb-2">
          <AnalysisTimer startDelay={1000} triggered={triggered} />
          <FadeIn delay={4200} triggered={triggered}>
            <div className="flex items-center gap-2 font-mono text-[10px] leading-4 tracking-[0.1px] text-[#9e9ead]">
              <span>SUBTEXT</span>
              <span>v1.02</span>
            </div>
          </FadeIn>
        </div>

      </div>
    </div>
  );
}
