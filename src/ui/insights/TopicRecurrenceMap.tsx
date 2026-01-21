// insights/TopicRecurrenceMap.tsx
// Abstract representation of recurring themes.
// Visualizes topics as a "Garden of Thoughts" using organic typographic scaling.

import React from 'react';

interface TopicRecurrenceDataPoint {
  topic: string;
  frequency: number;
}

interface TopicRecurrenceMapProps {
  data?: TopicRecurrenceDataPoint[];
  className?: string;
}

export default function TopicRecurrenceMap({
  data = [],
  className = '',
}: TopicRecurrenceMapProps) {
  if (data.length === 0) {
    return (
      <div className={`flex h-48 items-center justify-center text-xs text-stone-300/60 ${className}`}>
        No recurring themes detected yet
      </div>
    );
  }

  const maxFrequency = Math.max(...data.map((d) => d.frequency));
  const minFrequency = Math.min(...data.map((d) => d.frequency));

  return (
    <div
      className={`
        flex flex-wrap items-center justify-center 
        gap-x-6 gap-y-4 md:gap-x-8 md:gap-y-6
        py-8
        ${className}
      `}
      role="img"
      aria-label="Recurring themes map"
    >
      {data.map((item, index) => {
        // Calculate normalized weight (0 to 1)
        const range = maxFrequency - minFrequency || 1;
        const weight = (item.frequency - minFrequency) / range;

        // Map weight to font size (0.875rem to 2.25rem)
        const sizeClass = 
          weight < 0.2 ? 'text-sm' :
          weight < 0.4 ? 'text-base' :
          weight < 0.6 ? 'text-lg' :
          weight < 0.8 ? 'text-xl' :
          'text-2xl';

        // Map weight to opacity/color depth
        const opacityClass = 
          weight < 0.3 ? 'text-stone-400/70 font-normal' :
          weight < 0.7 ? 'text-stone-500/90 font-medium' :
          'text-stone-700 font-semibold';

        return (
          <span
            key={`${item.topic}-${index}`}
            className={`
              /* 1. Base Typography */
              font-serif cursor-default select-none
              
              /* 2. Dynamic Styling */
              ${sizeClass}
              ${opacityClass}
              
              /* 3. Interaction */
              transition-all duration-700 ease-out
              hover:text-stone-900 hover:scale-105
              
              /* 4. Entrance Animation (Randomized delay) */
              animate-in fade-in zoom-in-50 duration-1000 fill-mode-forwards
            `}
            style={{
              animationDelay: `${index * 50}ms`,
            }}
          >
            {item.topic}
          </span>
        );
      })}
    </div>
  );
}