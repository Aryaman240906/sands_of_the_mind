// search/ActiveFilterIndicator.tsx
// Quiet awareness of applied constraints without prominence.
// A subtle "Reset" mechanism for the search state.

import React from 'react';

interface ActiveFilterIndicatorProps {
  count?: number;
  visible?: boolean;
  className?: string;
  onClear?: () => void;
}

export default function ActiveFilterIndicator({
  count = 0,
  visible = true,
  className = '',
  onClear,
}: ActiveFilterIndicatorProps) {
  if (!visible || count === 0) {
    return null;
  }

  return (
    <div
      role="status"
      className={`
        flex items-center gap-4
        text-xs
        animate-in fade-in slide-in-from-top-1 duration-300
        ${className}
      `}
    >
      {/* The Status Text */}
      <span className="font-mono text-stone-400 uppercase tracking-wide">
        {count} {count === 1 ? 'constraint' : 'constraints'} active
      </span>

      {/* The Separator */}
      <span className="h-px w-8 bg-stone-200" aria-hidden="true" />

      {/* The Reset Action */}
      {onClear && (
        <button
          type="button"
          onClick={onClear}
          className={`
            font-serif italic text-stone-500
            hover:text-stone-800
            transition-colors duration-200
            underline decoration-stone-200 underline-offset-4 hover:decoration-stone-400
          `}
          aria-label="Clear all filters"
        >
          Reset view
        </button>
      )}
    </div>
  );
}