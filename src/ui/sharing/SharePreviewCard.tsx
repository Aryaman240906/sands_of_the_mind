// sharing/SharePreviewCard.tsx
// Literal preview of content exactly as it will be shared.
// Visualizes the "Payload" to ensure total transparency before transmission.

import React from 'react';

interface SharePreviewCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function SharePreviewCard({
  children,
  className = '',
}: SharePreviewCardProps) {
  return (
    <section
      className={`space-y-4 ${className}`}
      role="region"
      aria-label="Content preview"
    >
      <header className="flex items-center justify-between px-1">
        <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-400">
          Visible Payload
        </h3>
        {/* Subtle indicator that this is a read-only snapshot */}
        <span className="font-mono text-[10px] text-stone-300 select-none">
          READ ONLY
        </span>
      </header>
      
      <div 
        className={`
          relative w-full
          /* Material: High-contrast paper look against the background */
          bg-white 
          border border-stone-200 
          rounded-sm
          shadow-[0_2px_12px_-6px_rgba(68,64,60,0.05)]
          
          /* Spacing */
          p-6 md:p-10
        `}
      >
        {/* The Content: Rendered to look exactly like the output text */
        /* whitespace-pre-wrap is critical here to show actual line breaks */
        }
        <div className="
          font-serif text-base md:text-lg leading-relaxed 
          text-stone-800
          whitespace-pre-wrap break-words
        ">
          {children}
        </div>

        {/* Decorative corner fold to imply "Object" status */}
        <div 
          className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-stone-50 via-stone-50/20 to-transparent opacity-50 pointer-events-none" 
          aria-hidden="true"
        />
      </div>
    </section>
  );
}