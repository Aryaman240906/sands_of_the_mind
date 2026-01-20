// TrustFirstViewport.tsx
// Constrains layout for readability and psychological safety.
// Enforces the "Golden Measure" (optimal line length) to prevent eye strain.

import React from 'react';

interface TrustFirstViewportProps {
  children: React.ReactNode;
  className?: string;
}

export default function TrustFirstViewport({
  children,
  className = '',
}: TrustFirstViewportProps) {
  return (
    <div 
      className={`
        mx-auto w-full max-w-2xl
        px-6 md:px-12
        min-h-[40vh]
        flex flex-col justify-center
        ${className}
      `}
    >
      <div className="
        text-lg md:text-xl 
        text-stone-700 
        leading-loose 
        tracking-wide
        subpixel-antialiased
      ">
        {/* Typography Logic:
          - text-lg/xl: Larger text reduces cognitive load (easier to parse).
          - leading-loose: Generous line height slows the reading pace intentionally.
          - subpixel-antialiased: Ensures font rendering is crisp on the textured background.
        */}
        {children}
      </div>
    </div>
  );
}