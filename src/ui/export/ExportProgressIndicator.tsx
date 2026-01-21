// export/ExportProgressIndicator.tsx
// Communicate status without urgency.
// Calm motion only; no percentages or countdowns.

import React from 'react';

interface ExportProgressIndicatorProps {
  progress?: number;
  active?: boolean;
  statusMessage?: string;
  className?: string;
}

export default function ExportProgressIndicator({
  progress = 0,
  active = false,
  statusMessage = 'Preparing data structure...',
  className = '',
}: ExportProgressIndicatorProps) {
  if (!active) {
    return null;
  }

  return (
    <div
      className={`w-full py-4 space-y-4 ${className}`}
      role="status"
      aria-live="polite"
    >
      {/* Visual Bar: Ultra-thin, non-aggressive */}
      <div className="h-0.5 w-full bg-stone-100 overflow-hidden rounded-full">
        <div
          className="h-full bg-stone-400 rounded-full transition-all duration-[1500ms] ease-out relative overflow-hidden"
          style={{ width: `${Math.min(100, Math.max(5, progress))}%` }} // Min 5% to show visibility
        >
            {/* Subtle internal shimmer to show life even when progress stalls */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-stone-200/40 to-transparent animate-shimmer" />
        </div>
      </div>

      {/* Status Text: Monospace, calm, pulsing */}
      <div className="text-center">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-400 animate-pulse duration-[3000ms]">
            {progress >= 100 ? 'Finalizing...' : statusMessage}
        </span>
      </div>
      
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite linear;
        }
      `}</style>
    </div>
  );
}