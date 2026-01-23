// ui/feedback/OfflineStateIndicator.tsx
// Confirms that the environment is stable, even without the cloud.
// Treats "Offline" as a feature (privacy/focus), not a bug.

import React from 'react';

interface OfflineStateIndicatorProps {
  message?: string;
  className?: string;
}

export const OfflineStateIndicator: React.FC<OfflineStateIndicatorProps> = ({
  message = "Local Mode",
  className = ''
}) => {
  return (
    <div 
      className={`
        inline-flex items-center gap-2.5 
        px-3 py-1.5 
        rounded-full 
        bg-stone-100/50 border border-stone-200/50
        backdrop-blur-sm
        ${className}
      `}
      role="status"
      aria-live="polite"
    >
      {/* The Status Light: Hollow = Disconnected but Stable */}
      <div 
        className="h-2 w-2 rounded-full border border-stone-400 bg-transparent" 
        aria-hidden="true"
      />
      
      <span className="font-mono text-[10px] uppercase tracking-widest text-stone-500">
        {message}
      </span>
    </div>
  );
};