// components/DataTable.tsx
import React from "react";

export type ColumnDef<T = Record<string, unknown>> = {
  key: string; // field name in data object
  label: string; // column header
  render?: (value: unknown, row: T) => React.ReactNode; // optional custom cell
};

interface DataTableProps<T> {
  columns: ColumnDef<T>[];
  data: T[];
}

export default function DataTable<T extends Record<string, unknown>>({
  columns,
  data,
}: DataTableProps<T>) {
  return (
    <div className="w-full overflow-x-auto rounded-lg border border-border ">
      <table className="min-w-full text-sm text-zinc-900">
        <thead>
          <tr className="border-b border-zinc-200 bg-zinc-100">
            {columns.map((col) => (
              <th
                key={col.key}
                scope="col"
                className="px-4 py-3 text-left font-medium text-zinc-500 whitespace-nowrap"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white">
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className="px-4 py-8 text-center text-zinc-400"
              >
                No data available.
              </td>
            </tr>
          ) : (
            data.map((row, rowIdx) => (
              <tr
                key={rowIdx}
                className="border-b border-border last:border-b-0 transition-colors hover:bg-bg-primary"
              >
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className="px-4 py-2.5 align-top whitespace-pre-wrap wrap-break-word"
                  >
                    {col.render
                      ? col.render(row[col.key], row)
                      : String(row[col.key] ?? "")}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
