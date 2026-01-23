// ui/feedback/ErrorStateBlock.tsx
// A calm, non-accusatory error display.
// Avoids "Danger Red" to maintain the application's peaceful atmosphere.

import React from 'react';

interface ErrorStateBlockProps {
  message?: string;
  details?: string;
  onRetry?: () => void;
  className?: string;
}

export const ErrorStateBlock: React.FC<ErrorStateBlockProps> = ({
  message = "We encountered a hiccup.",
  details,
  onRetry,
  className = ''
}) => {
  return (
    <div 
      className={`
        flex flex-col items-center justify-center 
        min-h-[16rem] w-full
        p-8
        text-center
        animate-in fade-in duration-500 ease-out
        ${className}
      `}
      role="alert"
    >
      <div className="max-w-md w-full space-y-6">
        {/* Icon: Mechanical Disconnect */}
        <div className="flex justify-center text-stone-300">
           <svg 
             width="32" 
             height="32" 
             viewBox="0 0 24 24" 
             fill="none" 
             stroke="currentColor" 
             strokeWidth="1.5"
             strokeLinecap="round" 
             strokeLinejoin="round"
           >
             <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
             <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
             <line x1="4" y1="20" x2="20" y2="4" className="opacity-50" />
           </svg>
        </div>

        {/* Text Block */}
        <div className="space-y-2">
          <p className="font-serif text-lg text-stone-600 font-medium">
            {message}
          </p>
          {details && (
            <p className="font-mono text-xs text-stone-400 leading-relaxed uppercase tracking-wide">
              Code: {details}
            </p>
          )}
        </div>

        {/* Optional Action */}
        {onRetry && (
          <button
            onClick={onRetry}
            className="
              mt-4
              inline-flex items-center gap-2
              px-4 py-2
              text-xs font-mono uppercase tracking-wider
              text-stone-500 hover:text-stone-800
              border border-stone-200 hover:border-stone-400
              rounded-sm
              transition-all duration-200
            "
          >
            <span>Retry Connection</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M23 4v6h-6" />
              <path d="M1 20v-6h6" />
              <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};