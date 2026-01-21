// export/ExportPreviewSummary.tsx
// Show what will be included before action.
// Read-only confirmation manifest; no optimization language.

import React from 'react';

interface ExportPreviewSummaryProps {
  entryCount: number;
  format: string;
  dateRange?: string; // e.g. "Oct 2023 - Nov 2023"
  estimatedSize?: string;
  className?: string;
}

export default function ExportPreviewSummary({
  entryCount,
  format,
  dateRange,
  estimatedSize = 'Calculated locally',
  className = '',
}: ExportPreviewSummaryProps) {
  return (
    <div 
      className={`
        /* Layout: A quiet manifest block, like a shipping label */
        border-y border-stone-100
        py-6 my-8
        w-full
        
        ${className}
      `}
      role="status"
      aria-label="Export manifest summary"
    >
      <dl className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4">
        
        {/* Item 1: Count */}
        <div className="flex flex-col gap-1.5">
          <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-400">
            Quantity
          </dt>
          <dd className="font-serif text-stone-800 text-base">
            {entryCount} {entryCount === 1 ? 'entry' : 'entries'}
          </dd>
        </div>

        {/* Item 2: Format */}
        <div className="flex flex-col gap-1.5">
          <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-400">
            Format
          </dt>
          <dd className="font-mono text-xs text-stone-700 uppercase pt-1">
            {format}
          </dd>
        </div>

        {/* Item 3: Range (Optional) */}
        {dateRange && (
          <div className="flex flex-col gap-1.5 col-span-2 md:col-span-1">
            <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-400">
              Range
            </dt>
            <dd className="font-serif text-stone-700 text-sm pt-0.5 truncate">
              {dateRange}
            </dd>
          </div>
        )}

        {/* Item 4: Size Estimate */}
        <div className="flex flex-col gap-1.5">
          <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-400">
            Est. Size
          </dt>
          <dd className="font-mono text-xs text-stone-500 pt-1">
            {estimatedSize}
          </dd>
        </div>

      </dl>
    </div>
  );
}