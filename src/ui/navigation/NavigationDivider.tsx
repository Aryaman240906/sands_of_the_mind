// NavigationDivider.tsx
// Subtle separation through whitespace and optical fading.
// Avoids hard cuts; uses gradients to mimic a gentle ridge in the sand.

import React from 'react';

interface NavigationDividerProps {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

export default function NavigationDivider({
  orientation = 'horizontal',
  className = '',
}: NavigationDividerProps) {
  const isHorizontal = orientation === 'horizontal';

  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={`
        shrink-0 opacity-60
        ${isHorizontal 
          ? 'w-full h-px my-6 bg-gradient-to-r' 
          : 'h-8 w-px mx-4 bg-gradient-to-b' // h-8 typically fits well inside a h-20 nav bar
        }
        from-transparent via-stone-300/50 to-transparent
        ${className}
      `}
    />
  );
}