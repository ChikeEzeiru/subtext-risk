export default function ApiStep3() {
  return (
    <div
      className="flex items-start justify-center overflow-y-clip"
      style={{ width: 358, height: 224 }}
    >
      {/* Card — overflows right and bottom to match Figma positioning */}
      <div
        className="overflow-clip rounded-sm flex flex-col items-start ml-4 mt-4"
        style={{
          background: "#0B1221",
          width: 360,
          bottom: -14,
          right: -26.67,
        }}
      >
        {/* ── Section 1 — top-level fields ── */}
        <div
          className="flex flex-col items-start w-full shrink-0 overflow-clip"
          style={{
            paddingTop: 20,
            paddingBottom: 12,
            paddingLeft: 20,
            paddingRight: 20,
            gap: 2,
          }}
        >
          {/* Opening brace */}
          <p
            className="font-mono text-[8px] leading-3 w-full"
            style={{ color: "#9E9EAD" }}
          >
            {"{"}
          </p>

          {/* Indented fields */}
          <div
            className="flex flex-col items-start w-full"
            style={{ paddingLeft: 8, gap: 2 }}
          >
            {/* screening_id */}
            <p
              className="font-mono text-[8px] leading-3 w-full"
              style={{ color: "#86EFAC" }}
            >
              <span style={{ color: "#93C5FD" }}>
                &quot;screening_id&quot;:
              </span>
              {` "scr_01HXKJ9M4P",`}
            </p>

            {/* status */}
            <p
              className="font-mono text-[8px] leading-3 w-full"
              style={{ color: "#86EFAC" }}
            >
              <span style={{ color: "#93C5FD" }}>&quot;status&quot;:</span>
              {` "complete",`}
            </p>

            {/* completed_at */}
            <p
              className="font-mono text-[8px] leading-3 w-full"
              style={{ color: "#86EFAC" }}
            >
              <span style={{ color: "#93C5FD" }}>
                &quot;completed_at&quot;:
              </span>
              {` "2025-04-12T09:14:03Z",`}
            </p>

            {/* duration_ms — number, amber */}
            <p
              className="font-mono text-[8px] leading-3 w-full"
              style={{ color: "#FACC15" }}
            >
              <span style={{ color: "#93C5FD" }}>&quot;duration_ms&quot;:</span>
              {` 17400,`}
            </p>
          </div>
        </div>

        {/* ── Section 2 — decision object ── */}
        <div
          className="flex flex-col items-start w-full shrink-0 overflow-clip"
          style={{
            paddingTop: 12,
            paddingBottom: 20,
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <div
            className="flex flex-col items-start w-full"
            style={{ paddingLeft: 8, gap: 2 }}
          >
            {/* "decision": { */}
            <p
              className="font-mono text-[8px] leading-3 w-full"
              style={{ color: "#9E9EAD" }}
            >
              <span style={{ color: "#93C5FD" }}>&quot;decision&quot;:</span>
              {" {"}
            </p>

            {/* Double-indented fields */}
            <div
              className="flex flex-col items-start w-full"
              style={{ paddingLeft: 8, gap: 2 }}
            >
              {/* recommendation */}
              <p
                className="font-mono text-[8px] leading-3 w-full"
                style={{ color: "#86EFAC" }}
              >
                <span style={{ color: "#93C5FD" }}>
                  &quot;recommendation&quot;:
                </span>
                {` "approve",`}
              </p>

              {/* risk_level */}
              <p
                className="font-mono text-[8px] leading-3 w-full"
                style={{ color: "#86EFAC" }}
              >
                <span style={{ color: "#93C5FD" }}>
                  &quot;risk_level&quot;:
                </span>
                {` "low",`}
              </p>

              {/* score — amber number */}
              <p
                className="font-mono text-[8px] leading-3 w-full"
                style={{ color: "#FACC15" }}
              >
                <span style={{ color: "#93C5FD" }}>&quot;score&quot;:</span>
                {` 82,`}
              </p>

              {/* confidence — amber number */}
              <p
                className="font-mono text-[8px] leading-3 w-full"
                style={{ color: "#FACC15" }}
              >
                <span style={{ color: "#93C5FD" }}>
                  &quot;confidence&quot;:
                </span>
                {` 0.94`}
              </p>
            </div>

            {/* Closing brace */}
            <p
              className="font-mono text-[8px] leading-3 w-full"
              style={{ color: "#9E9EAD" }}
            >
              {"}"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
