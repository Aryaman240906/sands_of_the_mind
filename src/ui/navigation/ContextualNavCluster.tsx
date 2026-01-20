// ContextualNavCluster.tsx
// Grouped navigation relevant to current context.
// Organizes related links under a quiet "Whisper" heading (Map Legend style).

import React from 'react';

interface ContextualNavClusterProps {
  children: React.ReactNode;
  label?: string;
  className?: string;
}

export default function ContextualNavCluster({
  children,
  label,
  className = '',
}: ContextualNavClusterProps) {
  return (
    <div
      className={`
        flex flex-col gap-2 
        py-2
        ${className}
      `}
      role="group"
      aria-label={label}
    >
      {/* The Label: Visualized as a "Map Coordinate".
        - text-[10px]: Extremely small to reduce visual noise.
        - tracking-[0.2em]: Wide spacing improves legibility and adds elegance.
        - uppercase: Distinguishes it from interactive links.
      */}
      {label && (
        <div className="
          px-4 mb-1
          text-[10px] uppercase tracking-[0.2em] font-bold
          text-stone-400/90
          select-none
        ">
          {label}
        </div>
      )}

      {/* The Content Cluster */}
      <div className="flex flex-col gap-0.5">
        {children}
      </div>
    </div>
  );
}