// ui/feedback/PartialDataState.tsx
// A quiet indicator for incomplete or cached data.
// Frames the content as "Present but evolving" rather than "Broken".

import React from 'react';

interface PartialDataStateProps {
  message?: string;
  children?: React.ReactNode;
  className?: string;
}

export const PartialDataState: React.FC<PartialDataStateProps> = ({
  message = "Syncing latest changes...",
  children,
  className = ''
}) => {
  return (
    <div className={`space-y-6 ${className}`} role="status">
      {/* The Quiet Notice */}
      <div className="flex items-center gap-3 py-2 px-1">
        {/* Subtle Pulse Icon */}
        <div className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-stone-300 opacity-75 duration-[3s]"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-stone-300"></span>
        </div>
        
        <p className="font-serif text-sm italic text-stone-400">
          {message}
        </p>
      </div>

      {/* The Veiled Content */}
      <div className="transition-opacity duration-700 ease-out opacity-60 grayscale-[0.3]">
        {children}
      </div>
    </div>
  );
};