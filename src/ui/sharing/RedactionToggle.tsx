// sharing/RedactionToggle.tsx
// Binary visibility control for specific content segments.
// Visualizes "Redaction" by physically crossing out the label text.

import React from 'react';

interface RedactionToggleProps {
  label: string;
  redacted?: boolean;
  onToggle?: (redacted: boolean) => void;
  className?: string;
}

export default function RedactionToggle({
  label,
  redacted = false,
  onToggle,
  className = '',
}: RedactionToggleProps) {
  return (
    <div
      className={`
        flex items-center justify-between 
        py-1
        ${className}
      `}
    >
      {/* Label: Crosses out when redacted to mimic physical redaction */}
      <span 
        className={`
          text-sm font-serif transition-all duration-300
          ${redacted 
            ? 'text-stone-400 line-through decoration-stone-300 decoration-1' 
            : 'text-stone-700'
          }
        `}
      >
        {label}
      </span>

      {/* The Toggle Switch */}
      <button
        type="button"
        onClick={() => onToggle?.(!redacted)}
        className={`
          group relative 
          h-7 w-12 
          rounded-full 
          transition-colors duration-300 ease-out
          focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 focus-visible:ring-offset-2
          ${redacted ? 'bg-stone-200' : 'bg-stone-600'}
        `}
        role="switch"
        aria-checked={!redacted}
        aria-label={`Toggle visibility of ${label}`}
      >
        <span className="sr-only">
          {redacted ? 'Show' : 'Hide'} {label}
        </span>

        {/* The Thumb */}
        <span
          className={`
            absolute top-1
            h-5 w-5 
            rounded-full 
            bg-white 
            shadow-[0_1px_2px_rgba(0,0,0,0.1)]
            transition-transform duration-300 cubic-bezier(0.34, 1.56, 0.64, 1)
            flex items-center justify-center
            ${redacted ? 'translate-x-1' : 'translate-x-6'}
          `}
        >
          {/* Micro-Icon inside thumb for double-confirmation */}
          {redacted ? (
             <span className="block w-2.5 h-px bg-stone-300 rotate-45" /> // Simple slash
          ) : (
             <span className="block w-1.5 h-1.5 rounded-full bg-stone-600/20" /> // Open dot
          )}
        </span>
      </button>
    </div>
  );
}