"use client";

type SignalStatus = "pass" | "flag" | "pending";

type Signal = {
  label: string;
  detail: string;
  status: SignalStatus;
  source?: string;
};

type EvidenceSource = {
  name: string;
  icon: React.ReactNode;
};

const signals: Signal[] = [
  {
    label: "Website",
    detail: "Active since 2019 · 4 pages indexed · SSL valid",
    status: "pass",
    source: "meridian-coffee.com",
  },
  {
    label: "Reviews",
    detail: "4.6 · 312 reviews · Sentiment positive",
    status: "pass",
    source: "Google · Yelp",
  },
  {
    label: "Social",
    detail: "3 profiles · Consistent identity",
    status: "pass",
    source: "Instagram · Facebook · X",
  },
  {
    label: "Location",
    detail: "Matched · Google Maps verified",
    status: "pass",
    source: "742 Evergreen Terrace, Portland OR",
  },
  {
    label: "Industry",
    detail: "Food & Beverage · Low risk category",
    status: "pass",
  },
  {
    label: "Blocklist",
    detail: "Clear · MATCH screened · No prior flags",
    status: "pass",
  },
];

const riskBreakdown = [
  { label: "Business signals", value: 60, color: "#1A9A6F" },
  { label: "Review signals", value: 30, color: "#34D399" },
  { label: "Social signals", value: 10, color: "#6EE7B7" },
];

const evidenceSources: EvidenceSource[] = [
  {
    name: "Google",
    icon: (
      <svg viewBox="0 0 24 24" className="size-4" fill="none">
        <path
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          fill="#4285F4"
        />
        <path
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          fill="#34A853"
        />
        <path
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
          fill="#FBBC05"
        />
        <path
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
          fill="#EA4335"
        />
      </svg>
    ),
  },
  {
    name: "Yelp",
    icon: (
      <svg viewBox="0 0 24 24" className="size-4" fill="#FF1A1A">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    icon: (
      <svg viewBox="0 0 24 24" className="size-4" fill="#1877F2">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Maps",
    icon: (
      <svg viewBox="0 0 24 24" className="size-4" fill="none">
        <path
          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
          fill="#EA4335"
        />
        <circle cx="12" cy="9" r="2.5" fill="white" />
      </svg>
    ),
  },
];

function StatusIcon({ status }: { status: SignalStatus }) {
  if (status === "pass") {
    return (
      <svg className="size-4 shrink-0" viewBox="0 0 16 16" fill="none">
        <circle
          cx="8"
          cy="8"
          r="7"
          fill="#DCFCE7"
          stroke="#1A9A6F"
          strokeWidth="1"
        />
        <path
          d="M5 8l2 2 4-4"
          stroke="#1A9A6F"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (status === "flag") {
    return (
      <svg className="size-4 shrink-0" viewBox="0 0 16 16" fill="none">
        <circle
          cx="8"
          cy="8"
          r="7"
          fill="#FFF7ED"
          stroke="#E5A422"
          strokeWidth="1"
        />
        <path
          d="M8 5v3M8 10.5v.5"
          stroke="#E5A422"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  return (
    <svg
      className="size-4 shrink-0 animate-spin"
      viewBox="0 0 16 16"
      fill="none"
    >
      <circle cx="8" cy="8" r="7" stroke="#E3E3E8" strokeWidth="1.5" />
      <path
        d="M8 1a7 7 0 0 1 7 7"
        stroke="#94A3B8"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function DetailedReportCard() {
  return (
    <div className="bg-white border border-[#E3E3E8] rounded-2xl shadow-[0px_4px_24px_0px_rgba(0,0,0,0.08)] w-full max-w-140 overflow-hidden font-neue-montreal">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-[#F4F4F5]">
        <div className="flex items-center gap-3">
          {/* Favicon placeholder */}
          <div className="size-8 rounded-md bg-[#FFF7ED] border border-[#F5E592] flex items-center justify-center shrink-0">
            <span className="text-[10px] font-medium text-[#CA7D15]">MC</span>
          </div>
          <div className="flex flex-col gap-0.5">
            <p className="font-medium text-[14px] leading-5 text-[#17171C]">
              Meridian Coffee Co.
            </p>
            <p className="text-[12px] leading-4 text-[#9E9EAD]">
              meridian-coffee.com · LLC · Registered 2019
            </p>
          </div>
        </div>
        {/* Status badge */}
        <div className="flex items-center gap-1.5 bg-[#DCFCE7] border border-[#1A9A6F]/20 px-2.5 py-1 rounded-full">
          <div className="size-1.5 rounded-full bg-[#1A9A6F]" />
          <span className="text-[11px] font-medium text-[#1A9A6F] uppercase tracking-wide">
            Verified
          </span>
        </div>
      </div>

      {/* Risk Score */}
      <div className="px-5 py-4 border-b border-[#F4F4F5]">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-baseline gap-2">
            <span className="font-medium text-[28px] leading-none text-[#17171C]">
              18
            </span>
            <span className="text-[13px] text-[#9E9EAD]">/ 100 risk score</span>
          </div>
          <div className="flex items-center gap-1.5 bg-[#DCFCE7] px-2.5 py-1 rounded-md">
            <span className="text-[12px] font-medium text-[#1A9A6F]">
              LOW RISK
            </span>
          </div>
        </div>

        {/* Segmented risk bar */}
        <div className="flex gap-0.5 rounded-full overflow-hidden h-2 mb-2">
          {riskBreakdown.map((segment) => (
            <div
              key={segment.label}
              className="h-full rounded-full"
              style={{
                width: `${segment.value}%`,
                backgroundColor: segment.color,
              }}
            />
          ))}
          {/* Remaining unfilled */}
          <div className="h-full rounded-full flex-1 bg-[#F4F4F5]" />
        </div>

        {/* Risk breakdown legend */}
        <div className="flex gap-4">
          {riskBreakdown.map((segment) => (
            <div key={segment.label} className="flex items-center gap-1.5">
              <div
                className="size-2 rounded-full shrink-0"
                style={{ backgroundColor: segment.color }}
              />
              <span className="text-[11px] text-[#9E9EAD]">
                {segment.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Signal rows */}
      <div className="px-5 py-3 border-b border-[#F4F4F5] flex flex-col gap-0.5">
        {signals.map((signal) => (
          <div key={signal.label} className="flex items-start gap-3 py-2">
            <StatusIcon status={signal.status} />
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline gap-2 flex-wrap">
                <span className="text-[13px] font-medium text-[#17171C]">
                  {signal.label}
                </span>
                <span className="text-[12px] text-[#9E9EAD] truncate">
                  {signal.detail}
                </span>
              </div>
              {signal.source && (
                <p className="text-[11px] text-[#C4C4CF] mt-0.5 font-input-mono">
                  {signal.source}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Evidence sources */}
      <div className="px-5 py-3 border-b border-[#F4F4F5]">
        <p className="text-[11px] text-[#9E9EAD] uppercase tracking-wide mb-2.5">
          Sources analyzed
        </p>
        <div className="flex items-center gap-2 flex-wrap">
          {evidenceSources.map((source) => (
            <div
              key={source.name}
              className="flex items-center gap-1.5 bg-[#F4F4F5] border border-[#E3E3E8] px-2 py-1 rounded-md"
            >
              {source.icon}
              <span className="text-[11px] text-[#4F4F5E]">{source.name}</span>
            </div>
          ))}
          <div className="flex items-center gap-1.5 bg-[#F4F4F5] border border-[#E3E3E8] px-2 py-1 rounded-md">
            <span className="text-[11px] text-[#9E9EAD]">+2,000 more</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-5 py-3">
        <div className="flex items-center gap-1.5">
          <svg className="size-3.5" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="7" stroke="#9E9EAD" strokeWidth="1.2" />
            <path
              d="M8 5v3.5l2 2"
              stroke="#9E9EAD"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
          <span className="font-input-mono text-[11px] text-[#9E9EAD]">
            Analyzed in 28s
          </span>
        </div>
        <div className="flex items-center gap-2">
          {/* Export */}
          <button className="flex items-center gap-1 text-[12px] text-[#4F4F5E] hover:text-[#17171C] transition-colors px-2.5 py-1.5 rounded-md hover:bg-[#F4F4F5]">
            <svg
              className="size-3.5"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <path d="M8 2v8M5 7l3 3 3-3M3 12h10" />
            </svg>
            Export
          </button>
          {/* Copy */}
          <button className="flex items-center gap-1 text-[12px] text-[#4F4F5E] hover:text-[#17171C] transition-colors px-2.5 py-1.5 rounded-md hover:bg-[#F4F4F5]">
            <svg
              className="size-3.5"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <rect x="5" y="5" width="8" height="8" rx="1.5" />
              <path d="M11 5V3.5A1.5 1.5 0 0 0 9.5 2h-6A1.5 1.5 0 0 0 2 3.5v6A1.5 1.5 0 0 0 3.5 11H5" />
            </svg>
            Copy
          </button>
        </div>
      </div>
    </div>
  );
}
