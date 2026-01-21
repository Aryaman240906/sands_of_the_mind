// search/NoResultsStateBlock.tsx
// Normalized absence without failure or pressure.
// Treats an empty result set as "Open Space" rather than an error.

import React from 'react';

interface NoResultsStateBlockProps {
  className?: string;
  onClear?: () => void;
}

export default function NoResultsStateBlock({
  className = '',
  onClear,
}: NoResultsStateBlockProps) {
  return (
    <div
      role="status"
      aria-label="No results found"
      className={`
        flex flex-col items-center justify-center
        w-full min-h-[30vh]
        text-center
        /* Gentle entrance to avoid jarring the user when results vanish */
        animate-in fade-in zoom-in-95 duration-500
        ${className}
      `}
    >
      {/* Abstract Icon: A hollow, dashed space representing "The Unwritten" */}
      <div 
        className="w-16 h-16 rounded-full border-2 border-dashed border-stone-200 mb-6 opacity-60"
        aria-hidden="true"
      />

      {/* The Message */}
      <p className="font-serif italic text-xl text-stone-400 mb-2">
        No echoes found.
      </p>
      
      <p className="text-xs text-stone-300 font-mono tracking-widest uppercase">
        This space is silent
      </p>

      {/* The Recovery Action */}
      {onClear && (
        <button
          onClick={onClear}
          className={`
            mt-8 
            text-xs font-medium text-stone-400 
            hover:text-stone-600 
            transition-colors duration-300
            underline decoration-stone-200 underline-offset-4 hover:decoration-stone-400
          `}
        >
          Clear search
        </button>
      )}
    </div>
  );
}