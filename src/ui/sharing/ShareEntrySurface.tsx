// sharing/ShareEntrySurface.tsx
// Primary container for the sharing flow.
// Acts as an "Airlock" ensuring boundaries are reviewed before data leaves.

import React from 'react';

interface ShareEntrySurfaceProps {
  children: React.ReactNode;
  onClose?: () => void;
  className?: string;
}

export default function ShareEntrySurface({
  children,
  onClose,
  className = '',
}: ShareEntrySurfaceProps) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Share entry review"
      className={`
        /* 1. Positioning (Full Screen Overlay) */
        fixed inset-0 z-50
        overflow-y-auto overflow-x-hidden
        
        /* 2. Visual Atmosphere (Opaque to hide private context) */
        bg-stone-50
        
        /* 3. Spacing */
        px-6 py-12 md:px-12 md:py-24
        
        /* 4. Entrance Animation */
        animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out
        
        ${className}
      `}
    >
      <div className="mx-auto max-w-2xl space-y-12">
        {/* Context Header: Explicitly frames the transition */}
        <header className="space-y-4 border-b border-stone-200/50 pb-8">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <h2 className="font-serif text-2xl text-stone-800 tracking-tight">
                Boundary Check
              </h2>
              <p className="font-serif italic text-lg text-stone-500 leading-relaxed max-w-prose">
                You are preparing to move this thought outside your private space.
                Review what remains hidden and what becomes visible.
              </p>
            </div>
            
            {/* Optional Close Button (if not handled by children) */}
            {onClose && (
              <button 
                onClick={onClose}
                className="p-2 text-stone-400 hover:text-stone-600 transition-colors"
                aria-label="Cancel sharing"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            )}
          </div>
        </header>

        {/* The Control Surface */}
        <div className="space-y-10">
          {children}
        </div>
      </div>
    </div>
  );
}