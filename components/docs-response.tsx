"use client";

import DataTable from "./data-table";
import {
  responseColumns,
  responseData,
} from "@/components/responseTableConfig";

export default function DocsResponse() {
  return (
    <section className="flex flex-col gap-16 items-center justify-center py-24 w-full bg-bg-primary">
      {/* isdfisdfidsksdis */}
      <div className="flex flex-col gap-5 items-start px-8 w-full max-w-310">
        <h2 className="text-[32px] leading-10 md:text-[48px] md:leading-15 font-medium tracking-[-0.96px] text-[#17171c] text-balance">
          Everything your team needs to make a decision.{" "}
          <span className="text-accent">Nothing they don&apos;t.</span>
        </h2>

        <p className="text-body-xl text-balance font-neue-montreal">
          The response is designed to be acted on, not analyzed. Each field
          tells your system exactly what it needs to know — and nothing else.
          Pipe it directly into your decisioning logic, store it for audit, or
          surface it to your risk team.
        </p>
      </div>

      {/* isdfisdfidsksdis */}
      <div className="flex flex-col gap-5 items-start px-8 w-full max-w-310">
        <DataTable columns={responseColumns} data={responseData} />
      </div>
    </section>
  );
}
