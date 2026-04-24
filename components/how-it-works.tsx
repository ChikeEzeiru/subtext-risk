"use client";

import { useState, useEffect, useRef } from "react";

// Design system tokens
const AMBER = "#e5a422";
const AMBER_ACCENT = "#ca7d15";
const AMBER_SOFT = "rgba(229,164,34,0.08)";
const AMBER_BORDER = "rgba(229,164,34,0.25)";
const GREEN = "#16a34a";
const GREEN_SOFT = "rgba(22,163,74,0.08)";
const GREEN_BORDER = "rgba(22,163,74,0.2)";
const TEXT_PRIMARY = "#17171c";
const TEXT_SECONDARY = "#4f4f5e";
const TEXT_MUTED = "#9e9ead";
const BORDER = "rgba(0,0,0,0.1)";
const SURFACE = "#ffffff";

// Delays triggering by `startDelay` ms after the parent `triggered` fires
function useDelayedTrigger(triggered: boolean, startDelay: number) {
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (!triggered) return;
    const t = setTimeout(() => setActive(true), startDelay);
    return () => clearTimeout(t);
  }, [triggered, startDelay]);
  return active;
}

// ─── Shared utilities ───

type FadeInProps = {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  triggered: boolean;
  style?: React.CSSProperties;
};

function FadeIn({ children, delay = 0, duration = 450, triggered, style = {} }: FadeInProps) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!triggered) return;
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay, triggered]);

  return (
    <div style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(6px)",
      transition: `opacity ${duration}ms ease, transform ${duration}ms ease`,
      ...style,
    }}>
      {children}
    </div>
  );
}

type TypingTextProps = {
  text: string;
  delay?: number;
  speed?: number;
  triggered: boolean;
  onComplete?: () => void;
  style?: React.CSSProperties;
};

function TypingText({ text, delay = 0, speed = 45, triggered, onComplete, style }: TypingTextProps) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!triggered) return;
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [delay, triggered]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length >= text.length) { onComplete?.(); return; }
    const t = setTimeout(() => setDisplayed(text.slice(0, displayed.length + 1)), speed);
    return () => clearTimeout(t);
  }, [started, displayed, text, speed, onComplete]);

  return (
    <span style={style}>
      {displayed}
      {started && displayed.length < text.length && (
        <span style={{
          display: "inline-block",
          width: 1.5,
          height: "1.1em",
          background: TEXT_PRIMARY,
          marginLeft: 1,
          animation: "cursorBlink 0.7s ease infinite",
          verticalAlign: "text-bottom",
        }} />
      )}
    </span>
  );
}

// ─── Step 1: Submit a URL ───

function StepOneAnimation({ triggered, startDelay }: { triggered: boolean; startDelay: number }) {
  const active = useDelayedTrigger(triggered, startDelay);
  const [urlDone, setUrlDone] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!urlDone) return;
    const t1 = setTimeout(() => setClicking(true), 400);
    const t2 = setTimeout(() => setClicking(false), 550);
    const t3 = setTimeout(() => setSubmitted(true), 600);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [urlDone]);

  return (
    <div style={{
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      padding: "8px 8px 8px 12px",
      gap: 8,
      width: "100%",
      height: 44,
      background: "#FFFFFF",
      border: `1px solid ${urlDone ? "#E5A422" : "#D4D4D4"}`,
      boxShadow: urlDone
        ? "0px 1px 2px rgba(0,0,0,0.05), 0 0 0 3px rgba(229,164,34,0.08)"
        : "0px 1px 2px rgba(0,0,0,0.05)",
      borderRadius: 8,
      transition: "border-color 0.3s ease, box-shadow 0.3s ease",
    }}>
      {/* Search icon */}
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A3A3A3" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>

      {/* Text area */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", height: 20 }}>
        <TypingText
          text="meridian-coffee.com"
          delay={800}
          speed={55}
          triggered={active}
          onComplete={() => setUrlDone(true)}
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "20px",
            color: "#737373",
          }}
        />
      </div>

      {/* Shortcut badge */}
      <div style={{
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "4px 8px",
        gap: 4,
        border: `1px solid ${submitted ? "rgba(26,154,111,0.2)" : "#E5E5E5"}`,
        borderRadius: 4,
        background: submitted ? "rgba(26,154,111,0.08)" : "transparent",
        transform: clicking ? "scale(0.92)" : "scale(1)",
        transition: "all 0.15s ease, background 0.3s ease, border-color 0.3s ease",
        minWidth: submitted ? 70 : 46,
      }}>
        {submitted ? (
          <>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1A9A6F" strokeWidth="2.5" strokeLinecap="round"
              style={{ animation: "checkPop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)" }}>
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: 12, lineHeight: "18px", color: "#1A9A6F" }}>
              Done
            </span>
          </>
        ) : (
          <span style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: 12, lineHeight: "18px", color: "#737373" }}>
            Return
          </span>
        )}
      </div>
    </div>
  );
}

// ─── Step 2: Scanning ───

const SOURCES = [
  { name: "Website content",      icon: "globe",    delay: 600  },
  { name: "Social profiles",      icon: "share",    delay: 1200 },
  { name: "Review sites",         icon: "star",     delay: 1800 },
  { name: "Business directories", icon: "building", delay: 2400 },
  { name: "Blocklists",           icon: "shield",   delay: 3000 },
  { name: "2,000+ sources",       icon: "layers",   delay: 3600 },
] as const;

type SourceIcon = (typeof SOURCES)[number]["icon"];

const SCAN_ICONS: Record<SourceIcon, React.ReactNode> = {
  globe: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  share: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  ),
  star: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  building: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <rect x="4" y="2" width="16" height="20" rx="1" />
      <line x1="9" y1="6" x2="9" y2="6.01" /><line x1="15" y1="6" x2="15" y2="6.01" />
      <line x1="9" y1="10" x2="9" y2="10.01" /><line x1="15" y1="10" x2="15" y2="10.01" />
      <line x1="9" y1="14" x2="9" y2="14.01" /><line x1="15" y1="14" x2="15" y2="14.01" />
      <path d="M9 22v-4h6v4" />
    </svg>
  ),
  shield: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  layers: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" />
    </svg>
  ),
};

function ScanRow({ source, triggered }: { source: (typeof SOURCES)[number]; triggered: boolean }) {
  const [visible, setVisible] = useState(false);
  const [scanning, setScanning] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!triggered) return;
    const t1 = setTimeout(() => setVisible(true), source.delay);
    const t2 = setTimeout(() => setScanning(true), source.delay + 100);
    const t3 = setTimeout(() => setDone(true), source.delay + 800);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [source.delay, triggered]);

  return (
    <div style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateX(0)" : "translateX(-8px)",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "7px 12px", borderRadius: 8,
      background: done ? GREEN_SOFT : scanning ? AMBER_SOFT : "transparent",
      border: `1px solid ${done ? GREEN_BORDER : scanning ? AMBER_BORDER : "transparent"}`,
      transition: "all 0.4s ease", marginBottom: 3,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ color: done ? GREEN : TEXT_MUTED, display: "flex", transition: "color 0.3s ease" }}>
          {SCAN_ICONS[source.icon]}
        </span>
        <span style={{ fontSize: 12, color: done ? TEXT_PRIMARY : TEXT_SECONDARY, transition: "color 0.3s ease", fontWeight: done ? 500 : 400 }}>
          {source.name}
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "center", minWidth: 20 }}>
        {scanning && !done && (
          <div style={{ width: 13, height: 13, border: `2px solid ${AMBER_BORDER}`, borderTopColor: AMBER, borderRadius: "50%", animation: "spin 0.7s linear infinite" }} />
        )}
        {done && (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="2.5" strokeLinecap="round"
            style={{ animation: "checkPop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)" }}>
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </div>
    </div>
  );
}

function ProgressBar({ allDone, triggered }: { allDone: boolean; triggered: boolean }) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (!triggered) return;
    const steps = [
      { delay: 600, value: 8 }, { delay: 1200, value: 22 }, { delay: 1800, value: 40 },
      { delay: 2400, value: 62 }, { delay: 3000, value: 82 }, { delay: 3600, value: 94 },
      { delay: 4400, value: 100 },
    ];
    const timers = steps.map(s => setTimeout(() => setWidth(s.value), s.delay));
    return () => timers.forEach(clearTimeout);
  }, [triggered]);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <div style={{ flex: 1, height: 3, borderRadius: 2, background: BORDER, overflow: "hidden" }}>
        <div style={{
          height: "100%", width: `${width}%`, borderRadius: 2,
          background: allDone ? GREEN : AMBER,
          transition: "width 0.5s cubic-bezier(0.16, 1, 0.3, 1), background 0.4s ease",
        }} />
      </div>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: allDone ? GREEN : TEXT_MUTED, minWidth: 32, textAlign: "right", transition: "color 0.4s ease" }}>
        {width}%
      </span>
    </div>
  );
}

function StepTwoAnimation({ triggered, startDelay }: { triggered: boolean; startDelay: number }) {
  const active = useDelayedTrigger(triggered, startDelay);
  const [allDone, setAllDone] = useState(false);

  useEffect(() => {
    if (!active) return;
    const t = setTimeout(() => setAllDone(true), 4600);
    return () => clearTimeout(t);
  }, [active]);

  return (
    <div style={{ width: "100%" }}>
      <FadeIn delay={200} triggered={active} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10, paddingLeft: 2 }}>
        <div style={{
          width: 7, height: 7, borderRadius: "50%",
          background: allDone ? GREEN : AMBER,
          transition: "background 0.4s ease",
          boxShadow: allDone ? `0 0 8px ${GREEN_BORDER}` : `0 0 8px ${AMBER_BORDER}`,
        }} />
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.05em", textTransform: "uppercase", fontWeight: 500, color: allDone ? GREEN : AMBER, transition: "color 0.4s ease" }}>
          {allDone ? "Scan Complete" : "Scanning..."}
        </span>
      </FadeIn>

      <div style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "6px 4px", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
        {SOURCES.map((source) => (
          <ScanRow key={source.name} source={source} triggered={active} />
        ))}
      </div>

      <FadeIn delay={400} triggered={active} style={{ marginTop: 10 }}>
        <ProgressBar allDone={allDone} triggered={active} />
      </FadeIn>
    </div>
  );
}

// ─── Step 3: Risk Report ───

const REPORT_FIELDS = [
  { label: "Website",   value: "Active since 2019",       delay: 1200 },
  { label: "Industry",  value: "Food & Beverage",          delay: 1500 },
  { label: "Reviews",   value: "4.6★ · 312 reviews",      delay: 1800 },
  { label: "Social",    value: "3 profiles · Consistent",  delay: 2100 },
  { label: "Blocklist", value: "Clear",                    delay: 2400 },
];

function ReportBadge({ triggered }: { triggered: boolean }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (!triggered) return;
    const t = setTimeout(() => setShow(true), 2800);
    return () => clearTimeout(t);
  }, [triggered]);

  return (
    <div style={{
      opacity: show ? 1 : 0, transform: show ? "scale(1)" : "scale(0.8)",
      transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
      padding: "2px 8px", borderRadius: 100,
      background: "#dcfce7", border: "1px solid #4ade80",
      display: "flex", alignItems: "center", gap: 4,
    }}>
      <div style={{ width: 4, height: 4, borderRadius: "50%", background: GREEN }} />
      <span style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, color: "#15803d", fontWeight: 500, letterSpacing: "0.04em" }}>
        LOW RISK
      </span>
    </div>
  );
}

function MiniRiskBar({ triggered }: { triggered: boolean }) {
  const [filled, setFilled] = useState(false);
  useEffect(() => {
    if (!triggered) return;
    const t = setTimeout(() => setFilled(true), 1100);
    return () => clearTimeout(t);
  }, [triggered]);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <div style={{ flex: 1, height: 3, borderRadius: 2, background: BORDER, overflow: "hidden" }}>
        <div style={{
          height: "100%", width: filled ? "18%" : "0%", borderRadius: 2,
          background: `linear-gradient(90deg, ${GREEN}, #2bbf8a)`,
          transition: "width 1s cubic-bezier(0.16, 1, 0.3, 1)",
        }} />
      </div>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: filled ? GREEN : TEXT_MUTED, transition: "color 0.4s ease" }}>
        {filled ? "LOW" : "···"}
      </span>
    </div>
  );
}

function MiniFieldRow({ field, triggered }: { field: (typeof REPORT_FIELDS)[number]; triggered: boolean }) {
  const [resolved, setResolved] = useState(false);
  useEffect(() => {
    if (!triggered) return;
    const t = setTimeout(() => setResolved(true), field.delay + 400);
    return () => clearTimeout(t);
  }, [field.delay, triggered]);

  return (
    <FadeIn delay={field.delay} triggered={triggered} style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "5px 0", borderBottom: `1px solid ${BORDER}`,
    }}>
      <span style={{ fontSize: 11.5, color: TEXT_SECONDARY }}>{field.label}</span>
      <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
        <span style={{ fontSize: 11.5, fontWeight: 500, color: resolved ? TEXT_PRIMARY : "transparent", transition: "color 0.3s ease" }}>
          {field.value}
        </span>
        <span style={{ opacity: resolved ? 1 : 0, transform: resolved ? "scale(1)" : "scale(0.5)", transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)", display: "flex" }}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="2.5" strokeLinecap="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </span>
      </div>
    </FadeIn>
  );
}

function StepThreeAnimation({ triggered, startDelay }: { triggered: boolean; startDelay: number }) {
  const active = useDelayedTrigger(triggered, startDelay);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!active) return;
    const t = setTimeout(() => setShow(true), 400);
    return () => clearTimeout(t);
  }, [active]);

  return (
    <div style={{ width: "100%" }}>
      <div style={{
        background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden",
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0) scale(1)" : "translateY(12px) scale(0.97)",
        transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04)",
      }}>
        {/* Header */}
        <div style={{ padding: "10px 14px", borderBottom: `1px solid ${BORDER}`, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
            <div style={{ width: 5, height: 5, borderRadius: "50%", background: AMBER_ACCENT }} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 500, color: TEXT_MUTED, letterSpacing: "0.07em", textTransform: "uppercase" }}>
              Merchant Risk Report
            </span>
          </div>
          <ReportBadge triggered={active} />
        </div>

        {/* Merchant info */}
        <div style={{ padding: "10px 14px 8px" }}>
          <FadeIn delay={700} triggered={active}>
            <div style={{ fontSize: 14, fontWeight: 600, color: TEXT_PRIMARY, letterSpacing: "-0.01em", marginBottom: 2 }}>
              Meridian Coffee Co.
            </div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: TEXT_MUTED, letterSpacing: "0.02em" }}>
              meridian-coffee.com
            </div>
          </FadeIn>
        </div>

        {/* Risk bar */}
        <div style={{ padding: "0 14px 10px" }}>
          <FadeIn delay={850} triggered={active}>
            <span style={{ fontSize: 10, color: TEXT_MUTED, letterSpacing: "0.04em", textTransform: "uppercase", display: "block", marginBottom: 4 }}>
              Risk Level
            </span>
            <MiniRiskBar triggered={active} />
          </FadeIn>
        </div>

        <div style={{ height: 1, background: BORDER, margin: "0 14px" }} />

        {/* Fields */}
        <div style={{ padding: "2px 14px" }}>
          {REPORT_FIELDS.map((field) => (
            <MiniFieldRow key={field.label} field={field} triggered={active} />
          ))}
        </div>

        {/* Footer */}
        <div style={{ padding: "8px 14px 10px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <FadeIn delay={3000} triggered={active}>
            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={AMBER} strokeWidth="2" strokeLinecap="round">
                <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
              </svg>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: AMBER, letterSpacing: "0.03em" }}>28s</span>
            </div>
          </FadeIn>
          <FadeIn delay={3000} triggered={active}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, color: TEXT_MUTED, letterSpacing: "0.03em" }}>SUBTEXT</span>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}

// ─── Cards config ───

const cards = [
  {
    title: "Submit a URL or business name",
    body: "Send a merchant's website through our API or paste it into the dashboard. No documents to collect, no forms to fill out, no back-and-forth with applicants. One input is all we need to start.",
    bg: "radial-gradient(ellipse at 50% 39%, #fefbec 28%, #fafafa 100%)",
    Animation: StepOneAnimation,
    startDelay: 0,
    fade: false,
    fadeColor: "",
  },
  {
    title: "Subtext reads their entire web presence",
    body: "Our AI scans the merchant's website, social profiles, review sites, business directories, and 2,000+ web sources. It analyzes what the business claims to be, what it actually does, and how the internet sees it.",
    bg: "#ffffff",
    Animation: StepTwoAnimation,
    startDelay: 600,
    fade: true,
    fadeColor: "#ffffff",
  },
  {
    title: "Get a decision-ready risk report",
    body: "In under 30 seconds, you receive a structured report — business verification, industry classification, risk flags, sentiment analysis, and a clear recommendation. Configured to your rules, ready for your team to act on.",
    bg: "linear-gradient(214deg, #fefbec 2.5%, #ffffff 95.8%)",
    Animation: StepThreeAnimation,
    startDelay: 2000,
    fade: true,
    fadeColor: "#fffdf5",
  },
];

// ─── Main component ───

// Card 3 startDelay(2000) + last FadeIn delay(3000) + duration(450) = 5450ms
// Plus 6000ms pause between loops
const LOOP_INTERVAL = 5450 + 6000;

export default function HowItWorks() {
  const [triggered, setTriggered] = useState(false);
  const [loopKey, setLoopKey] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setTriggered(true); observer.disconnect(); }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!triggered) return;
    const interval = setInterval(() => setLoopKey(k => k + 1), LOOP_INTERVAL);
    return () => clearInterval(interval);
  }, [triggered]);

  return (
    <section ref={sectionRef} className="w-full py-24 flex flex-col items-center gap-16">

      <div className="max-w-[1240px] w-full px-4 md:px-8 flex justify-center">
        <h2 className="text-[32px] leading-[40px] md:text-[48px] md:leading-[60px] font-medium tracking-[-0.96px] text-[#17171c] text-center">
          Here&apos;s what happens
          <br />
          in those 30 seconds
        </h2>
      </div>

      <div className="max-w-[1240px] w-full px-4 md:px-8 flex flex-col md:flex-row gap-4 items-stretch">
        {cards.map(({ title, body, bg, Animation, startDelay, fade, fadeColor }) => (
          <div
            key={title}
            className="flex-1 flex flex-col justify-end border border-[rgba(0,0,0,0.1)] rounded-[6px] overflow-clip"
            style={{ background: bg, minHeight: "506px" }}
          >
            {/* Animation area */}
            <div
              className="flex-1 relative overflow-hidden flex items-center justify-center px-6 pt-6 pb-8"
              style={{ minHeight: "288px" }}
            >
              <Animation key={loopKey} triggered={triggered} startDelay={startDelay} />
              {fade && (
                <div
                  className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
                  style={{ background: `linear-gradient(to bottom, transparent, ${fadeColor})` }}
                />
              )}
            </div>

            {/* Text */}
            <div className="p-6 shrink-0">
              <p className="text-[20px] leading-[30px] text-[#17171c]">
                <span className="font-medium text-[#26262b]">{title}</span>
                <span className="text-[#26262b]">. </span>
                <span className="font-normal text-[#6e6e7d]">{body}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
