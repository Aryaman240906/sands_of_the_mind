// ui/feedback/PermissionDeniedState.tsx
// A calm indication of boundaries.
// Frames the restriction as "Privacy Protection" rather than "User Error".

import React from 'react';

interface PermissionDeniedStateProps {
  resource?: string;
  message?: string;
  className?: string;
  onGoBack?: () => void;
}

export const PermissionDeniedState: React.FC<PermissionDeniedStateProps> = ({
  resource = "content",
  message,
  className = '',
  onGoBack
}) => {
  const displayMessage = message || `You do not have the key to view this ${resource}.`;
  
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
        {/* Icon: The Lock (Security) */}
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
             <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
             <path d="M7 11V7a5 5 0 0 1 10 0v4" />
           </svg>
        </div>

        {/* Text Block */}
        <div className="space-y-2">
          <h3 className="font-mono text-xs uppercase tracking-widest text-stone-400">
            Access Restricted
          </h3>
          <p className="font-serif text-lg text-stone-600 font-medium leading-relaxed">
            {displayMessage}
          </p>
        </div>

        {/* Optional Navigation */}
        {onGoBack && (
          <button
            onClick={onGoBack}
            className="
              mt-6
              text-sm font-sans text-stone-500 hover:text-stone-800
              underline underline-offset-4 decoration-stone-300 hover:decoration-stone-500
              transition-all duration-200
            "
          >
            Return to safety
          </button>
        )}
      </div>
    </div>
  );
};