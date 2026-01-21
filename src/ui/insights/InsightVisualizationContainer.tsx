// insights/InsightVisualizationContainer.tsx
// Neutral frame hosting insight visualizations without hierarchy.
// Frames data as "illustration" rather than "metric".

import React from 'react';

interface InsightVisualizationContainerProps {
  children: React.ReactNode;
  title?: string; // Renamed from 'label' for semantic clarity in headings
  description?: string; // Optional context helper
  className?: string;
}

export default function InsightVisualizationContainer({
  children,
  title,
  description,
  className = '',
}: InsightVisualizationContainerProps) {
  return (
    <section
      className={`
        relative w-full 
        flex flex-col gap-8
        py-8 md:py-12
        /* Entrance animation for the entire block */
        animate-in fade-in slide-in-from-bottom-4 duration-1000
        ${className}
      `}
      aria-label={title || "Data Visualization"}
    >
      {/* Header Cluster */}
      {(title || description) && (
        <header className="space-y-2 max-w-prose">
          {title && (
            <h2 className="
              font-mono text-[10px] uppercase tracking-[0.2em] 
              text-stone-400 font-medium
            ">
              {title}
            </h2>
          )}
          
          {description && (
            <p className="text-sm text-stone-500/80 leading-relaxed font-serif italic">
              {description}
            </p>
          )}
        </header>
      )}

      {/* The Canvas */}
      <div className="w-full relative">
        {children}
      </div>
      
      {/* Subtle Separator (optional, usually handled by parent spacing, 
          but can be added here if distinct sections are needed) 
      */}
      <div className="w-12 h-px bg-stone-200/50 mt-8" aria-hidden="true" />
    </section>
  );
}