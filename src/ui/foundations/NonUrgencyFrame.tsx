// NonUrgencyFrame.tsx
// Removes any sense of speed, countdown, or temporal pressure.
// Enforces a "slow-scroll" rhythm by expanding vertical whitespace
// well beyond standard web design patterns.

import React from 'react';

interface NonUrgencyFrameProps {
  children: React.ReactNode;
  className?: string;
}

export default function NonUrgencyFrame({
  children,
  className = '',
}: NonUrgencyFrameProps) {
  return (
    <div
      className={`
        flex flex-col 
        gap-y-12 md:gap-y-20 lg:gap-y-32
        transition-[padding,gap,opacity] duration-[2000ms] ease-in-out
        ${className}
      `}
    >
      {/* The gap sizes (3rem mobile / 5rem tablet / 8rem desktop) are intentional.
        They create "silence" between elements. The user cannot consume 
        content rapidly because the content is physically distant.
      */}
      {children}
    </div>
  );
}