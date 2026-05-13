// lib/responseTableConfig.ts
import { ColumnDef } from "@/components/data-table";

export type ResponseRow = {
  field: string;
  type: string;
  description: string;
  example: string;
};

const typeColorMap: Record<string, { bg: string; text: string }> = {
  string: { bg: "#DBEAFE", text: "#1E40AF" }, // soft blue
  enum: { bg: "#FEF3C7", text: "#92400E" }, // amber
  boolean: { bg: "#F3E8FF", text: "#6B21A8" }, // purple
  array: { bg: "#DCFCE7", text: "#166534" }, // green
};

const fallbackColors = { bg: "#F4F4F5", text: "#3F3F46" };

export const responseColumns: ColumnDef<ResponseRow>[] = [
  {
    key: "field",
    label: "Field",
    render: (value) => (
      <span className="font-mono text-body-xs text-body">
        {value as string}
      </span>
    ),
  },
  {
    key: "type",
    label: "Type",
    render: (value) => {
      const t = String(value ?? "").toLowerCase();
      const colors = typeColorMap[t] ?? fallbackColors;
      return (
        <span
          className="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-neue-montreal font-medium"
          style={{
            backgroundColor: colors.bg,
            color: colors.text,
          }}
        >
          {value as string}
        </span>
      );
    },
  },
  { key: "description", label: "Description" },
  {
    key: "example",
    label: "Example",
    render: (value) => (
      <span className="font-mono text-body-xs text-body">
        {value as string}
      </span>
    ),
  },
];

export const responseData: ResponseRow[] = [
  {
    field: "merchant",
    type: "string",
    description: "Verified business name",
    example: "Crestwood Distribution LLC",
  },
  {
    field: "url",
    type: "string",
    description: "Analyzed URL",
    example: "https://crestwoodsupply.com",
  },
  {
    field: "risk_level",
    type: "enum",
    description: "low · medium · high · critical",
    example: "low",
  },
  {
    field: "verified",
    type: "boolean",
    description: "Whether the business existence is confirmed",
    example: "true",
  },
  {
    field: "industry",
    type: "string",
    description: "AI-classified industry based on web content",
    example: "wholesale_electronics",
  },
  {
    field: "signals.website",
    type: "string",
    description: "Website operational status and age",
    example: "reachable · ssl_valid · 1847 days",
  },
  {
    field: "signals.reviews",
    type: "string",
    description: "Review sentiment summary and count",
    example: "4.3/5 · 214 reviews · positive",
  },
  {
    field: "signals.social",
    type: "string",
    description: "Social profile consistency assessment",
    example: "linkedin · instagram · consistent",
  },
  {
    field: "signals.location",
    type: "string",
    description: "Location verification result",
    example: "verified · coordinates_match",
  },
  {
    field: "signals.blocklist",
    type: "string",
    description: "Blocklist screening result",
    example: "clear · OFAC · EU · UN",
  },
  {
    field: "recommendation",
    type: "enum",
    description: "auto_approve · manual_review · reject",
    example: "auto_approve",
  },
  {
    field: "evidence",
    type: "array",
    description: "Links to sources analyzed",
    example: "https://crestwoodsupply.com, https://reviews.com/crestwood",
  },
  {
    field: "analyzed_in",
    type: "string",
    description: "Processing time",
    example: "19.8s",
  },
];
