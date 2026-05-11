"use client";

import { useState, useCallback } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type Language = "cURL" | "Node.js" | "Python" | "Go";
type Tab = "request" | "response";

// ─── Token types + colors ────────────────────────────────────────────────────

const C = {
  key: "#93C5FD", // object keys   → blue
  string: "#6EE7B7", // string values → green
  number: "#FCD34D", // numbers       → amber-yellow
  bool: "#C084FC", // booleans      → purple
  null: "#F87171", // null          → red
  punct: "#64748B", // { } [ ] , :  → muted
  comment: "#334155", // comments      → very muted
  method: "#E5A422", // HTTP method   → brand amber
  url: "#CBD5E1", // URL           → light gray
  header: "#7DD3FC", // header names  → light blue
  flag: "#94A3B8", // cURL flags    → gray
  keyword: "#C084FC", // import/from   → purple
  type: "#6EE7B7", // TypeScript types → green
  plain: "#E2E8F0", // default text  → near white
  lineNum: "#1E293B", // line numbers  → dark
  lineNumTx: "#334155", // line number text
};

// ─── Request code per language ───────────────────────────────────────────────

type Segment = { text: string; color: string };
type Line = Segment[];

const CURL_REQUEST: Line[] = [
  [
    { text: "POST ", color: C.method },
    { text: "https://api.subtext.com/v1/screen \\", color: C.url },
  ],
  [
    { text: "  -H ", color: C.flag },
    { text: '"Authorization: ', color: C.string },
    { text: "Bearer", color: C.keyword },
    { text: ' sk_live_••••••••••••" \\', color: C.string },
  ],
  [
    { text: "  -H ", color: C.flag },
    { text: '"Content-Type: application/json" \\', color: C.string },
  ],
  [
    { text: "  -H ", color: C.flag },
    { text: '"X-API-Version: 2025-01" \\', color: C.string },
  ],
  [
    { text: "  -H ", color: C.flag },
    {
      text: '"X-Idempotency-Key: 550e8400-e29b-41d4-a716-446655440000" \\',
      color: C.string,
    },
  ],
  [{ text: "  -d '{", color: C.plain }],
  [
    { text: '    "merchant_id": ', color: C.key },
    { text: '"mer_8f2k9d",', color: C.string },
  ],
  [{ text: '    "business": {', color: C.key }],
  [
    { text: '      "legal_name": ', color: C.key },
    { text: '"Crestwood Distribution LLC",', color: C.string },
  ],
  [
    { text: '      "dba": ', color: C.key },
    { text: '"Crestwood Supply Co.",', color: C.string },
  ],
  [
    { text: '      "registration_number": ', color: C.key },
    { text: '"EIN-82-4917263",', color: C.string },
  ],
  [
    { text: '      "jurisdiction": ', color: C.key },
    { text: '"US-DE",', color: C.string },
  ],
  [
    { text: '      "website": ', color: C.key },
    { text: '"https://crestwoodsupply.com",', color: C.string },
  ],
  [
    { text: '      "phone": ', color: C.key },
    { text: '"+1 302 555 0174",', color: C.string },
  ],
  [
    { text: '      "mcc": ', color: C.key },
    { text: '"5065"', color: C.string },
  ],
  [{ text: "    },", color: C.plain }],
  [{ text: '    "options": {', color: C.key }],
  [
    { text: '      "depth": ', color: C.key },
    { text: '"full",', color: C.string },
  ],
  [
    { text: '      "include": ', color: C.key },
    {
      text: '["blocklist", "social", "reviews", "industry", "location"],',
      color: C.string,
    },
  ],
  [
    { text: '      "webhook_url": ', color: C.key },
    { text: '"https://yourplatform.com/webhooks/subtext"', color: C.string },
  ],
  [{ text: "    }", color: C.plain }],
  [{ text: "  }'", color: C.plain }],
];

const NODE_REQUEST: Line[] = [
  [
    { text: "import ", color: C.keyword },
    { text: "Subtext ", color: C.plain },
    { text: "from ", color: C.keyword },
    { text: '"@subtext/node"', color: C.string },
    { text: ";", color: C.plain },
  ],
  [],
  [
    { text: "// merchant: ", color: C.comment },
    { text: "ScreenParams", color: C.type },
  ],
  [
    { text: "const ", color: C.keyword },
    { text: "client ", color: C.plain },
    { text: "= new ", color: C.keyword },
    { text: "Subtext", color: C.type },
    { text: "({", color: C.plain },
  ],
  [
    { text: "  apiKey: ", color: C.key },
    { text: "process.env.", color: C.plain },
    { text: "SUBTEXT_API_KEY", color: C.header },
    { text: ",", color: C.plain },
  ],
  [
    { text: "  version: ", color: C.key },
    { text: '"2025-01"', color: C.string },
    { text: ",", color: C.plain },
  ],
  [{ text: "});", color: C.plain }],
  [],
  [
    { text: "const ", color: C.keyword },
    { text: "result", color: C.plain },
    { text: ": ", color: C.plain },
    { text: "ScreenResult ", color: C.type },
    { text: "= ", color: C.plain },
    { text: "await ", color: C.keyword },
    { text: "client.", color: C.plain },
    { text: "screen", color: C.method },
    { text: "({", color: C.plain },
  ],
  [
    { text: "  merchantId: ", color: C.key },
    { text: '"mer_8f2k9d"', color: C.string },
    { text: ",", color: C.plain },
  ],
  [{ text: "  business: {", color: C.key }],
  [
    { text: "    legalName: ", color: C.key },
    { text: '"Crestwood Distribution LLC"', color: C.string },
    { text: ",", color: C.plain },
  ],
  [
    { text: "    dba: ", color: C.key },
    { text: '"Crestwood Supply Co."', color: C.string },
    { text: ",", color: C.plain },
  ],
  [
    { text: "    registrationNumber: ", color: C.key },
    { text: '"EIN-82-4917263"', color: C.string },
    { text: ",", color: C.plain },
  ],
  [
    { text: "    jurisdiction: ", color: C.key },
    { text: '"US-DE"', color: C.string },
    { text: ",", color: C.plain },
  ],
  [
    { text: "    website: ", color: C.key },
    { text: '"https://crestwoodsupply.com"', color: C.string },
    { text: ",", color: C.plain },
  ],
  [
    { text: "    phone: ", color: C.key },
    { text: '"+1 302 555 0174"', color: C.string },
    { text: ",", color: C.plain },
  ],
  [
    { text: "    mcc: ", color: C.key },
    { text: '"5065"', color: C.string },
    { text: ",", color: C.plain },
  ],
  [{ text: "  },", color: C.plain }],
  [{ text: "  options: {", color: C.key }],
  [
    { text: "    depth: ", color: C.key },
    { text: '"full"', color: C.string },
    { text: ",", color: C.plain },
  ],
  [
    { text: "    include: ", color: C.key },
    {
      text: '["blocklist", "social", "reviews", "industry", "location"]',
      color: C.string,
    },
    { text: ",", color: C.plain },
  ],
  [
    { text: "    webhookUrl: ", color: C.key },
    { text: '"https://yourplatform.com/webhooks/subtext"', color: C.string },
    { text: ",", color: C.plain },
  ],
  [{ text: "  },", color: C.plain }],
  [{ text: "});", color: C.plain }],
];

const PYTHON_REQUEST: Line[] = [
  [
    { text: "import ", color: C.keyword },
    { text: "os", color: C.plain },
  ],
  [
    { text: "import ", color: C.keyword },
    { text: "subtext", color: C.plain },
  ],
  [
    { text: "from ", color: C.keyword },
    { text: "subtext.types ", color: C.plain },
    { text: "import ", color: C.keyword },
    { text: "Business, ScreenOptions", color: C.type },
  ],
  [],
  [
    { text: "client ", color: C.plain },
    { text: "= ", color: C.plain },
    { text: "subtext.", color: C.plain },
    { text: "Client", color: C.type },
    { text: "(", color: C.plain },
  ],
  [
    { text: "    api_key", color: C.key },
    { text: "=os.environ[", color: C.plain },
    { text: '"SUBTEXT_API_KEY"', color: C.string },
    { text: "],", color: C.plain },
  ],
  [
    { text: "    version", color: C.key },
    { text: '="2025-01"', color: C.string },
    { text: ",", color: C.plain },
  ],
  [{ text: ")", color: C.plain }],
  [],
  [
    { text: "result", color: C.plain },
    { text: ": ", color: C.plain },
    { text: "ScreenResult ", color: C.type },
    { text: "= client.", color: C.plain },
    { text: "screen", color: C.method },
    { text: "(", color: C.plain },
  ],
  [
    { text: "    merchant_id", color: C.key },
    { text: '="mer_8f2k9d"', color: C.string },
    { text: ",", color: C.plain },
  ],
  [
    { text: "    business", color: C.key },
    { text: "=", color: C.plain },
    { text: "Business", color: C.type },
    { text: "(", color: C.plain },
  ],
  [
    { text: "        legal_name", color: C.key },
    { text: '="Crestwood Distribution LLC"', color: C.string },
    { text: ",", color: C.plain },
  ],
  [
    { text: "        dba", color: C.key },
    { text: '="Crestwood Supply Co."', color: C.string },
    { text: ",", color: C.plain },
  ],
  [
    { text: "        registration_number", color: C.key },
    { text: '="EIN-82-4917263"', color: C.string },
    { text: ",", color: C.plain },
  ],
  [
    { text: "        jurisdiction", color: C.key },
    { text: '="US-DE"', color: C.string },
    { text: ",", color: C.plain },
  ],
  [
    { text: "        website", color: C.key },
    { text: '="https://crestwoodsupply.com"', color: C.string },
    { text: ",", color: C.plain },
  ],
  [
    { text: "        phone", color: C.key },
    { text: '="+1 302 555 0174"', color: C.string },
    { text: ",", color: C.plain },
  ],
  [
    { text: "        mcc", color: C.key },
    { text: '="5065"', color: C.string },
    { text: ",", color: C.plain },
  ],
  [{ text: "    ),", color: C.plain }],
  [
    { text: "    options", color: C.key },
    { text: "=", color: C.plain },
    { text: "ScreenOptions", color: C.type },
    { text: "(", color: C.plain },
  ],
  [
    { text: "        depth", color: C.key },
    { text: '="full"', color: C.string },
    { text: ",", color: C.plain },
  ],
  [
    { text: "        include", color: C.key },
    {
      text: '=["blocklist", "social", "reviews", "industry", "location"]',
      color: C.string,
    },
    { text: ",", color: C.plain },
  ],
  [
    { text: "        webhook_url", color: C.key },
    { text: '="https://yourplatform.com/webhooks/subtext"', color: C.string },
    { text: ",", color: C.plain },
  ],
  [{ text: "    ),", color: C.plain }],
  [{ text: ")", color: C.plain }],
];

const GO_REQUEST: Line[] = [
  [
    { text: "package ", color: C.keyword },
    { text: "main", color: C.plain },
  ],
  [],
  [
    { text: "import ", color: C.keyword },
    { text: "(", color: C.plain },
  ],
  [{ text: '  "context"', color: C.string }],
  [{ text: '  "os"', color: C.string }],
  [
    { text: "  subtext ", color: C.plain },
    { text: '"github.com/subtextai/subtext-go"', color: C.string },
  ],
  [{ text: ")", color: C.plain }],
  [],
  [
    { text: "client ", color: C.plain },
    { text: ":= ", color: C.plain },
    { text: "subtext.", color: C.plain },
    { text: "NewClient", color: C.method },
    { text: "(os.", color: C.plain },
    { text: "Getenv", color: C.method },
    { text: '("SUBTEXT_API_KEY"),', color: C.string },
  ],
  [
    { text: "  subtext.", color: C.plain },
    { text: "WithVersion", color: C.method },
    { text: '("2025-01"),', color: C.string },
  ],
  [{ text: ")", color: C.plain }],
  [],
  [
    { text: "result, err ", color: C.plain },
    { text: ":= ", color: C.plain },
    { text: "client.", color: C.plain },
    { text: "Screen", color: C.method },
    { text: "(context.", color: C.plain },
    { text: "Background", color: C.method },
    { text: "(),", color: C.plain },
  ],
  [
    { text: "  &subtext.", color: C.plain },
    { text: "ScreenParams", color: C.type },
    { text: "{", color: C.plain },
  ],
  [
    { text: "    MerchantID: ", color: C.key },
    { text: '"mer_8f2k9d"', color: C.string },
    { text: ",", color: C.plain },
  ],
  [
    { text: "    Business: &subtext.", color: C.plain },
    { text: "Business", color: C.type },
    { text: "{", color: C.plain },
  ],
  [
    { text: "      LegalName: ", color: C.key },
    { text: '"Crestwood Distribution LLC"', color: C.string },
    { text: ",", color: C.plain },
  ],
  [
    { text: "      DBA: ", color: C.key },
    { text: '"Crestwood Supply Co."', color: C.string },
    { text: ",", color: C.plain },
  ],
  [
    { text: "      RegistrationNumber: ", color: C.key },
    { text: '"EIN-82-4917263"', color: C.string },
    { text: ",", color: C.plain },
  ],
  [
    { text: "      Jurisdiction: ", color: C.key },
    { text: '"US-DE"', color: C.string },
    { text: ",", color: C.plain },
  ],
  [
    { text: "      Website: ", color: C.key },
    { text: '"https://crestwoodsupply.com"', color: C.string },
    { text: ",", color: C.plain },
  ],
  [
    { text: "      Phone: ", color: C.key },
    { text: '"+1 302 555 0174"', color: C.string },
    { text: ",", color: C.plain },
  ],
  [
    { text: "      MCC: ", color: C.key },
    { text: '"5065"', color: C.string },
    { text: ",", color: C.plain },
  ],
  [{ text: "    },", color: C.plain }],
  [
    { text: "    Options: &subtext.", color: C.plain },
    { text: "ScreenOptions", color: C.type },
    { text: "{", color: C.plain },
  ],
  [
    { text: "      Depth: ", color: C.key },
    { text: '"full"', color: C.string },
    { text: ",", color: C.plain },
  ],
  [
    { text: "      Include: []string{", color: C.plain },
    {
      text: '"blocklist", "social", "reviews", "industry", "location"',
      color: C.string,
    },
    { text: "},", color: C.plain },
  ],
  [
    { text: "      WebhookURL: ", color: C.key },
    { text: '"https://yourplatform.com/webhooks/subtext"', color: C.string },
    { text: ",", color: C.plain },
  ],
  [{ text: "    },", color: C.plain }],
  [{ text: "  },", color: C.plain }],
  [{ text: ")", color: C.plain }],
];

const RESPONSE: Line[] = [
  [{ text: "{", color: C.punct }],
  [
    { text: '  "screening_id": ', color: C.key },
    { text: '"scr_01HXKJ9M4P"', color: C.string },
    { text: ",", color: C.punct },
  ],
  [
    { text: '  "status": ', color: C.key },
    { text: '"complete"', color: C.string },
    { text: ",", color: C.punct },
  ],
  [
    { text: '  "completed_at": ', color: C.key },
    { text: '"2025-04-12T09:14:03Z"', color: C.string },
    { text: ",", color: C.punct },
  ],
  [
    { text: '  "duration_ms": ', color: C.key },
    { text: "17400", color: C.number },
    { text: ",", color: C.punct },
  ],
  [],
  [
    { text: '  "decision": ', color: C.key },
    { text: "{", color: C.punct },
  ],
  [
    { text: '    "recommendation": ', color: C.key },
    { text: '"approve"', color: C.string },
    { text: ",", color: C.punct },
  ],
  [
    { text: '    "risk_level": ', color: C.key },
    { text: '"low"', color: C.string },
    { text: ",", color: C.punct },
  ],
  [
    { text: '    "score": ', color: C.key },
    { text: "82", color: C.number },
    { text: ",", color: C.punct },
  ],
  [
    { text: '    "confidence": ', color: C.key },
    { text: "0.94", color: C.number },
  ],
  [{ text: "  },", color: C.punct }],
  [],
  [
    { text: '  "signals": ', color: C.key },
    { text: "{", color: C.punct },
  ],
  [
    { text: '    "website": ', color: C.key },
    { text: "{", color: C.punct },
  ],
  [
    { text: '      "status": ', color: C.key },
    { text: '"pass"', color: C.string },
    { text: ",", color: C.punct },
  ],
  [
    { text: '      "score": ', color: C.key },
    { text: "88", color: C.number },
    { text: ",", color: C.punct },
  ],
  [
    { text: '      "findings": ', color: C.key },
    { text: "{", color: C.punct },
  ],
  [
    { text: '        "reachable": ', color: C.key },
    { text: "true", color: C.bool },
    { text: ",", color: C.punct },
  ],
  [
    { text: '        "ssl_valid": ', color: C.key },
    { text: "true", color: C.bool },
    { text: ",", color: C.punct },
  ],
  [
    { text: '        "domain_age_days": ', color: C.key },
    { text: "1847", color: C.number },
    { text: ",", color: C.punct },
  ],
  [
    { text: '        "contact_info_present": ', color: C.key },
    { text: "true", color: C.bool },
    { text: ",", color: C.punct },
  ],
  [
    { text: '        "policy_pages_found": ', color: C.key },
    { text: '["privacy", "terms", "returns"]', color: C.string },
  ],
  [{ text: "      }", color: C.punct }],
  [{ text: "    },", color: C.punct }],
  [
    { text: '    "industry": ', color: C.key },
    { text: "{", color: C.punct },
  ],
  [
    { text: '      "status": ', color: C.key },
    { text: '"pass"', color: C.string },
    { text: ",", color: C.punct },
  ],
  [
    { text: '      "classified_as": ', color: C.key },
    { text: '"wholesale_electronics"', color: C.string },
    { text: ",", color: C.punct },
  ],
  [
    { text: '      "mcc_match": ', color: C.key },
    { text: "true", color: C.bool },
    { text: ",", color: C.punct },
  ],
  [
    { text: '      "confidence": ', color: C.key },
    { text: "0.91", color: C.number },
  ],
  [{ text: "    },", color: C.punct }],
  [
    { text: '    "reviews": ', color: C.key },
    { text: "{", color: C.punct },
  ],
  [
    { text: '      "status": ', color: C.key },
    { text: '"pass"', color: C.string },
    { text: ",", color: C.punct },
  ],
  [
    { text: '      "score": ', color: C.key },
    { text: "79", color: C.number },
    { text: ",", color: C.punct },
  ],
  [
    { text: '      "sources": ', color: C.key },
    { text: '["google", "trustpilot"]', color: C.string },
    { text: ",", color: C.punct },
  ],
  [
    { text: '      "aggregate_rating": ', color: C.key },
    { text: "4.3", color: C.number },
    { text: ",", color: C.punct },
  ],
  [
    { text: '      "review_count": ', color: C.key },
    { text: "214", color: C.number },
    { text: ",", color: C.punct },
  ],
  [
    { text: '      "sentiment": ', color: C.key },
    { text: '"positive"', color: C.string },
  ],
  [{ text: "    },", color: C.punct }],
  [
    { text: '    "location": ', color: C.key },
    { text: "{", color: C.punct },
  ],
  [
    { text: '      "status": ', color: C.key },
    { text: '"pass"', color: C.string },
    { text: ",", color: C.punct },
  ],
  [
    { text: '      "address_verified": ', color: C.key },
    { text: "true", color: C.bool },
    { text: ",", color: C.punct },
  ],
  [
    { text: '      "coordinates_match": ', color: C.key },
    { text: "true", color: C.bool },
  ],
  [{ text: "    },", color: C.punct }],
  [
    { text: '    "social": ', color: C.key },
    { text: "{", color: C.punct },
  ],
  [
    { text: '      "status": ', color: C.key },
    { text: '"pass"', color: C.string },
    { text: ",", color: C.punct },
  ],
  [
    { text: '      "platforms_found": ', color: C.key },
    { text: '["linkedin", "instagram"]', color: C.string },
    { text: ",", color: C.punct },
  ],
  [
    { text: '      "presence_score": ', color: C.key },
    { text: "71", color: C.number },
  ],
  [{ text: "    },", color: C.punct }],
  [
    { text: '    "blocklist": ', color: C.key },
    { text: "{", color: C.punct },
  ],
  [
    { text: '      "status": ', color: C.key },
    { text: '"pass"', color: C.string },
    { text: ",", color: C.punct },
  ],
  [
    { text: '      "sanctions_match": ', color: C.key },
    { text: "false", color: C.bool },
    { text: ",", color: C.punct },
  ],
  [
    { text: '      "pep_match": ', color: C.key },
    { text: "false", color: C.bool },
    { text: ",", color: C.punct },
  ],
  [
    { text: '      "adverse_media": ', color: C.key },
    { text: "false", color: C.bool },
    { text: ",", color: C.punct },
  ],
  [
    { text: '      "sources_checked": ', color: C.key },
    { text: '["OFAC", "EU-Consolidated", "UN-Sanctions"]', color: C.string },
  ],
  [{ text: "    }", color: C.punct }],
  [{ text: "  },", color: C.punct }],
  [],
  [
    { text: '  "evidence": ', color: C.key },
    { text: "{", color: C.punct },
  ],
  [
    { text: '    "website_url": ', color: C.key },
    { text: '"https://crestwoodsupply.com"', color: C.string },
    { text: ",", color: C.punct },
  ],
  [
    { text: '    "linkedin_url": ', color: C.key },
    {
      text: '"https://linkedin.com/company/crestwood-supply"',
      color: C.string,
    },
    { text: ",", color: C.punct },
  ],
  [
    { text: '    "registration_doc": ', color: C.key },
    {
      text: '"https://evidence.subtext.com/scr_01HXKJ9M4P/reg.pdf"',
      color: C.string,
    },
  ],
  [{ text: "  }", color: C.punct }],
  [{ text: "}", color: C.punct }],
];

const REQUEST_CODE: Record<Language, Line[]> = {
  cURL: CURL_REQUEST,
  "Node.js": NODE_REQUEST,
  Python: PYTHON_REQUEST,
  Go: GO_REQUEST,
};

// ─── Code panel ───────────────────────────────────────────────────────────────

function CodePanel({
  label,
  lines,
  maxHeight = "480px",
}: {
  label: string;
  lines: Line[];
  maxHeight?: string;
}) {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(() => {
    const text = lines
      .map((line) => line.map((s) => s.text).join(""))
      .join("\n");
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [lines]);

  return (
    <div className="flex flex-col h-full min-h-0">
      {/* Panel header */}
      <div
        className="flex items-center justify-between px-5 py-3 border-b shrink-0"
        style={{ borderColor: "#1E293B" }}
      >
        <span
          className="font-mono text-[11px] uppercase tracking-widest"
          style={{ color: "#64748B" }}
        >
          {label}
        </span>
        <button
          onClick={copy}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded transition-colors"
          style={{
            background: copied ? "#1A3B2A" : "transparent",
            color: copied ? "#34D399" : "#64748B",
            border: `1px solid ${copied ? "#16A34A33" : "#1E293B"}`,
          }}
        >
          {copied ? (
            <>
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="font-mono text-[10px]">Copied</span>
            </>
          ) : (
            <>
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              <span className="font-mono text-[10px]">Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code body */}
      <div
        className="overflow-auto flex-1 min-h-0 min-w-0 w-full custom-scrollbar"
        style={{ maxHeight }}
      >
        <table className="w-full border-collapse">
          <tbody>
            {lines.map((line, i) => (
              <tr key={i} className="group hover:bg-white/2 transition-colors">
                {/* Line number */}
                <td
                  className="select-none text-right pr-5 pl-5 font-mono text-[12px] leading-5.5 align-top w-12 shrink-0"
                  style={{ color: C.lineNumTx }}
                >
                  {i + 1}
                </td>
                {/* Code */}
                <td className="pr-6 font-mono text-[13px] leading-5.5 whitespace-pre">
                  {line.length === 0 ? (
                    <span>&nbsp;</span>
                  ) : (
                    line.map((seg, j) => (
                      <span key={j} style={{ color: seg.color }}>
                        {seg.text}
                      </span>
                    ))
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

const LANGUAGES: Language[] = ["cURL", "Node.js", "Python", "Go"];

export default function ApiCodeBlock() {
  const [lang, setLang] = useState<Language>("Node.js");
  const [tab, setTab] = useState<Tab>("request"); // mobile only

  return (
    <div
      className="w-full rounded-xl overflow-hidden border"
      style={{ background: "#0B1221", borderColor: "#1E293B" }}
    >
      {/* ── Top bar — language tabs + mobile request/response toggle ── */}
      <div
        className="flex items-center justify-between px-4 py-0 border-b"
        style={{ borderColor: "#1E293B", minHeight: "44px" }}
      >
        {/* Language tabs */}
        <div className="flex items-center">
          {LANGUAGES.map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className="px-4 py-3 font-mono text-[12px] transition-colors border-b-2 -mb-px"
              style={{
                color: lang === l ? "#E5A422" : "#64748B",
                borderColor: lang === l ? "#E5A422" : "transparent",
              }}
            >
              {l}
            </button>
          ))}
        </div>

        {/* Mobile-only: request / response tabs */}
        <div
          className="flex items-center gap-1 lg:hidden"
          style={{ background: "#0F1A2B", borderRadius: "6px", padding: "3px" }}
        >
          {(["request", "response"] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className="px-3 py-1 rounded font-mono text-[11px] capitalize transition-colors"
              style={{
                background: tab === t ? "#1E293B" : "transparent",
                color: tab === t ? "#CBD5E1" : "#64748B",
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* ── Code panels ── */}
      <div
        className="flex flex-col lg:flex-row lg:divide-x"
        style={{ borderColor: "#1E293B" }}
      >
        {/* Request panel */}
        <div
          className={`lg:w-1/2 min-w-0 ${
            tab === "response" ? "hidden lg:block" : "block"
          }`}
        >
          <CodePanel
            label="Request"
            lines={REQUEST_CODE[lang]}
            maxHeight="520px"
          />
        </div>

        {/* Divider (desktop only) */}
        <div
          className="hidden lg:block w-px shrink-0"
          style={{ background: "#1E293B" }}
        />

        {/* Response panel */}
        <div
          className={`lg:w-1/2 min-w-0 ${
            tab === "request" ? "hidden lg:block" : "block"
          }`}
        >
          <CodePanel label="Response" lines={RESPONSE} maxHeight="520px" />
        </div>
      </div>

      {/* ── Status bar ── */}
      <div
        className="flex items-center gap-6 px-5 py-2.5 border-t"
        style={{ borderColor: "#1E293B" }}
      >
        <span
          className="flex items-center gap-2 font-mono text-[11px]"
          style={{ color: "#34D399" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#34D399] inline-block" />
          200 OK
        </span>
        <span className="font-mono text-[11px]" style={{ color: "#334155" }}>
          17,400ms
        </span>
        <span className="font-mono text-[11px]" style={{ color: "#334155" }}>
          POST /v1/screen
        </span>
      </div>
    </div>
  );
}
