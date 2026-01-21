// archive/ArchiveEmptyState.tsx
// Normalized absence without pressure or missing content framing.
// Acknowledges the clean slate as a "fresh notebook" rather than an error.

import React from 'react';

interface ArchiveEmptyStateProps {
  className?: string;
}

export default function ArchiveEmptyState({
  className = '',
}: ArchiveEmptyStateProps) {
  return (
    <div
      role="status"
      aria-label="Archive is empty"
      className={`
        flex flex-col items-center justify-center
        min-h-[60vh] w-full
        
        /* Gentle Entrance */
        animate-in fade-in duration-1000 ease-out
        
        ${className}
      `}
    >
      {/* Illustration: A simple, abstract "Open Book" or "Horizon" */}
      <div className="mb-8 text-stone-200" aria-hidden="true">
        <svg 
          width="64" 
          height="64" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      </div>

      {/* The Quiet Statement */}
      <h3 className="font-serif text-xl italic text-stone-400 mb-2">
        Unwritten history.
      </h3>
      
      <p className="font-mono text-[10px] uppercase tracking-widest text-stone-300">
        The archive is waiting
      </p>
    </div>
  );
}