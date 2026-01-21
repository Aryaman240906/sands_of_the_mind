// insights/EntryVolumeTimeline.tsx
// Writing frequency over time without encouraging consistency.
// Visualizes activity as a "Landscape" or "Skyline" rather than a scorecard.

import React from 'react';

interface EntryVolumeDataPoint {
  period: string; // e.g., "Mon", "Jan 1"
  count: number;
}

interface EntryVolumeTimelineProps {
  data?: EntryVolumeDataPoint[];
  className?: string;
}

export default function EntryVolumeTimeline({
  data = [],
  className = '',
}: EntryVolumeTimelineProps) {
  if (data.length === 0) {
    return (
      <div className={`flex h-40 items-center justify-center text-xs text-stone-300/60 ${className}`}>
        No timeline data available
      </div>
    );
  }

  const maxCount = Math.max(...data.map((d) => d.count), 1);

  return (
    <div
      className={`
        w-full h-48
        flex flex-col justify-end
        ${className}
      `}
      role="img"
      aria-label="Volume of entries over time"
    >
      {/* The Bars Container */}
      <div className="flex items-end gap-1 h-full w-full px-2">
        {data.map((item, index) => {
          // Calculate height relative to max, but ensure 0-count days 
          // still have a 2px "foundation" so the timeline isn't broken.
          const percentage = (item.count / maxCount) * 100;
          const isZero = item.count === 0;

          return (
            <div
              key={`${item.period}-${index}`}
              className="group relative flex-1 flex flex-col items-center justify-end h-full"
            >
              {/* Tooltip (Hover only) */}
              <div className="
                absolute bottom-full mb-2 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300
                bg-stone-800 text-stone-50 
                text-[10px] px-2 py-1 rounded-sm whitespace-nowrap z-10
              ">
                {item.count} entries on {item.period}
              </div>

              {/* The Bar (Structure) */}
              <div
                className={`
                  w-full min-w-[4px] rounded-t-sm
                  transition-all duration-1000 ease-out
                  ${isZero ? 'bg-stone-200/30' : 'bg-stone-300/80 group-hover:bg-stone-400'}
                `}
                style={{
                  // Animated height entry
                  height: isZero ? '2px' : `${Math.max(percentage, 5)}%`, 
                }}
              />
              
              {/* Axis Label (Period) 
                  Only show periodically (e.g., every 5th or 7th item) to prevent clutter 
                  unless there are very few items.
              */}
              <div className="mt-2 h-4 w-full flex justify-center">
                 {/* Simple logic: Show label if data is sparse (<10 items) or periodically */}
                 {(data.length < 10 || index % 5 === 0) && (
                   <span className="text-[9px] text-stone-400 font-mono">
                     {item.period.slice(0, 3)}
                   </span>
                 )}
              </div>
            </div>
          );
        })}
      </div>
      
      {/* The Baseline: Grounds the landscape */}
      <div className="w-full h-px bg-stone-200/50 mt-px" />
    </div>
  );
}