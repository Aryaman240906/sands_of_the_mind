// insights/EmotionalLanguageFrequencyChart.tsx
// Frequency of user-written emotional language without interpretation.
// Visualizes words as "Sediment Layers" rather than competitive bars.

import React from 'react';

interface EmotionalLanguageDataPoint {
  word: string;
  frequency: number;
}

interface EmotionalLanguageFrequencyChartProps {
  data?: EmotionalLanguageDataPoint[];
  className?: string;
}

export default function EmotionalLanguageFrequencyChart({
  data = [],
  className = '',
}: EmotionalLanguageFrequencyChartProps) {
  // Graceful degradation: "Silence is also a pattern"
  if (!data || data.length === 0) {
    return (
      <div
        className={`flex h-48 items-center justify-center ${className}`}
        aria-hidden="true"
      >
        <span className="h-px w-12 bg-stone-300/30" />
      </div>
    );
  }

  // Normalize data for relative widths
  const maxFrequency = Math.max(...data.map((d) => d.frequency));

  return (
    <div
      className={`flex flex-col gap-3 ${className}`}
      role="graphics-document"
      aria-label="Word frequency visualization"
    >
      {data.map((item, index) => {
        const widthPercent = (item.frequency / maxFrequency) * 100;

        return (
          <div
            key={`${item.word}-${index}`}
            className="group relative flex items-center justify-between py-1"
            style={{
              // Staggered animation: each line slides in slightly later
              animation: `slide-in-right 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards`,
              animationDelay: `${index * 100}ms`,
              opacity: 0, // Start invisible for animation to work
            }}
          >
            {/* The Bar (Background Layer) 
                Sits behind the text to act as a subtle highlighter/meter.
            */}
            <div
              className="absolute left-0 top-0 bottom-0 -z-10 rounded-r-sm bg-stone-200/40 transition-all duration-1000 ease-out"
              style={{ width: `${widthPercent}%` }}
            />

            {/* The Word (Human Voice) */}
            <span className="pl-2 font-serif text-lg text-stone-700">
              {item.word}
            </span>

            {/* The Count (System Data) */}
            <span className="pr-2 font-mono text-xs text-stone-400 tabular-nums">
              {item.frequency}
            </span>
          </div>
        );
      })}

      {/* Local Keyframes for the stagger effect */}
      <style>{`
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(-10px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}