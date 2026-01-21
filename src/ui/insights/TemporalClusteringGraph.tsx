// insights/TemporalClusteringGraph.tsx
// Time clustering as shape without trajectory or direction.
// Visualizes history as a "Density Ribbon" or "Heatmap".

import React from 'react';

interface TemporalClusterDataPoint {
  period: string;
  density: number;
}

interface TemporalClusteringGraphProps {
  data?: TemporalClusterDataPoint[];
  className?: string;
}

export default function TemporalClusteringGraph({
  data = [],
  className = '',
}: TemporalClusteringGraphProps) {
  if (data.length === 0) {
    return (
      <div className={`flex h-32 items-center justify-center text-xs text-stone-300/60 ${className}`}>
        Insufficient data for clustering
      </div>
    );
  }

  const maxDensity = Math.max(...data.map((d) => d.density), 1);

  return (
    <div
      className={`relative w-full py-4 ${className}`}
      role="img"
      aria-label="Temporal density map"
    >
      {/* The Density Ribbon */}
      <div className="flex h-16 w-full items-stretch overflow-hidden rounded-md border border-stone-100">
        {data.map((item, index) => {
          // Calculate opacity based on density relative to max
          // Base opacity 0.05 ensures even empty days have a tiny presence
          const opacity = 0.05 + (item.density / maxDensity) * 0.8;
          
          return (
            <div
              key={`${item.period}-${index}`}
              className="group relative flex-1 transition-all duration-700 hover:z-10"
              style={{
                backgroundColor: `rgb(87, 83, 78)`, // stone-600
                opacity: opacity,
              }}
            >
               {/* Tooltip (Hover only) */}
               <div className="
                 absolute bottom-full mb-2 left-1/2 -translate-x-1/2
                 opacity-0 group-hover:opacity-100 transition-opacity duration-200
                 bg-stone-800 text-stone-50 
                 text-[10px] px-2 py-1 rounded-sm whitespace-nowrap pointer-events-none
               ">
                 {item.period}: {item.density}
               </div>
            </div>
          );
        })}
      </div>

      {/* The Temporal Anchors (Start & End) */}
      <div className="mt-3 flex justify-between font-mono text-[10px] uppercase tracking-wider text-stone-400">
        <span>{data[0].period}</span>
        <span>{data[data.length - 1].period}</span>
      </div>
    </div>
  );
}