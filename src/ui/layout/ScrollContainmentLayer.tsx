// ScrollContainmentLayer.tsx
// Manages scroll behavior with smooth kinetics and overflow control.
// Hides system scrollbars to maintain immersion ("The Desert has no scrollbars").

import React from 'react';

interface ScrollContainmentLayerProps {
  children: React.ReactNode;
  direction?: 'vertical' | 'horizontal' | 'both';
  className?: string;
}

const scrollMap = {
  vertical: 'overflow-y-auto overflow-x-hidden',
  horizontal: 'overflow-x-auto overflow-y-hidden',
  both: 'overflow-auto',
} as const;

export default function ScrollContainmentLayer({
  children,
  direction = 'vertical',
  className = '',
}: ScrollContainmentLayerProps) {
  return (
    <div
      className={`
        w-full h-full
        ${scrollMap[direction]} 
        overscroll-contain 
        ${className}
      `}
      // Inline styles are used here to forcefully hide scrollbars cross-browser
      // without relying on external CSS plugins or global styles.
      style={{ 
        scrollBehavior: 'smooth',
        scrollbarWidth: 'none',  /* Firefox */
        msOverflowStyle: 'none', /* IE/Edge */
      }}
    >
      {/* Chrome/Safari/Opera scrollbar hiding hack */}
      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
      
      {/* Wrapper to apply the class cleanly */}
      <div className="min-h-full hide-scrollbar">
        {children}
      </div>
    </div>
  );
}