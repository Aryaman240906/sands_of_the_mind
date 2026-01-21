// sharing/RedactionControlPanel.tsx
// Manual redaction interface without automation or suggestions.
// A distinct "Tool Tray" for applying privacy layers.

import React from 'react';

interface RedactionControlPanelProps {
  children: React.ReactNode;
  className?: string;
}

export default function RedactionControlPanel({
  children,
  className = '',
}: RedactionControlPanelProps) {
  return (
    <fieldset
      className={`space-y-4 ${className}`}
      role="group"
      aria-label="Privacy redaction controls"
    >
      <div className="flex items-baseline justify-between px-1">
        <legend className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-400">
          Privacy Filters
        </legend>
        <span className="font-serif text-[10px] italic text-stone-400/80">
          Manual overrides
        </span>
      </div>

      <div
        className={`
          w-full
          /* Surface: Distinct from the content paper, feels like a tool tray */
          bg-stone-50/80 
          border border-stone-200/60
          rounded-sm
          
          /* Layout */
          p-5 md:p-6
          flex flex-col gap-4
        `}
      >
        {children}
      </div>
    </fieldset>
  );
}