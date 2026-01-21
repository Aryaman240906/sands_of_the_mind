// insights/InsightLegend.tsx
// Reading guide without interpretation or conclusions.
// A neutral "Map Key" for the data visualizations.

import React from 'react';

interface InsightLegendProps {
  children: React.ReactNode;
  className?: string;
}

export default function InsightLegend({
  children,
  className = '',
}: InsightLegendProps) {
  return (
    <div
      role="note"
      className={`
        /* Layout */
        mt-8 pt-6
        border-t border-stone-200/40
        w-full max-w-prose
        
        /* Typography */
        text-xs leading-relaxed
        text-stone-400
        
        ${className}
      `}
    >
      <div className="flex items-baseline gap-2 mb-2">
        <span className="font-mono text-[10px] uppercase tracking-wider text-stone-300">
          Guide
        </span>
      </div>
      
      {/* We expect children to be plain text or simple <p> tags.
         The container ensures they remain quiet and legible.
      */}
      <div className="font-serif italic opacity-80">
        {children}
      </div>
    </div>
  );
}