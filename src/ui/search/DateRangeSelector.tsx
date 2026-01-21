// search/DateRangeSelector.tsx
// Temporal narrowing without recency bias or urgency.
// Styled to resemble filling out a paper logbook line.

import React from 'react';

interface DateRangeSelectorProps {
  startDate?: string;
  endDate?: string;
  className?: string;
  onStartDateChange?: (date: string) => void;
  onEndDateChange?: (date: string) => void;
}

export default function DateRangeSelector({
  startDate = '',
  endDate = '',
  className = '',
  onStartDateChange,
  onEndDateChange,
}: DateRangeSelectorProps) {
  // Shared input style class to ensure consistency
  const inputStyle = `
    w-full bg-transparent
    border-b border-stone-200
    py-2
    font-serif text-base text-stone-700
    outline-none
    transition-colors duration-300
    focus:border-stone-400
    hover:border-stone-300
    placeholder:text-stone-300
  `;

  return (
    <div className={`flex flex-col sm:flex-row gap-6 sm:items-end ${className}`}>
      
      {/* Start Date */}
      <div className="flex-1 space-y-2">
        <label 
          htmlFor="start-date" 
          className="block font-mono text-[10px] uppercase tracking-wider text-stone-400 font-medium"
        >
          From
        </label>
        <input
          id="start-date"
          type="date"
          value={startDate}
          onChange={(e) => onStartDateChange?.(e.target.value)}
          className={inputStyle}
          aria-label="Start date"
        />
      </div>

      {/* Visual Connector (Desktop only) */}
      <div className="hidden sm:block pb-4 text-stone-300 select-none" aria-hidden="true">
        &rarr;
      </div>

      {/* End Date */}
      <div className="flex-1 space-y-2">
        <label 
          htmlFor="end-date" 
          className="block font-mono text-[10px] uppercase tracking-wider text-stone-400 font-medium"
        >
          Until
        </label>
        <input
          id="end-date"
          type="date"
          value={endDate}
          onChange={(e) => onEndDateChange?.(e.target.value)}
          className={inputStyle}
          aria-label="End date"
        />
      </div>
    </div>
  );
}