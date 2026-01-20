// ContentSafeZone.tsx
// Padding that protects content from viewport edges across devices.
// Acts as the "Matte" in a picture frame—giving content the dignity of distance.

import React from 'react';

interface ContentSafeZoneProps {
  children: React.ReactNode;
  /* Density Levels:
     - compact:     Utility areas, footer links, small notes.
     - comfortable: The standard reading experience.
     - spacious:    Hero sections, major emotional pivots.
  */
  density?: 'compact' | 'comfortable' | 'spacious';
  className?: string;
}

const densityMap = {
  // Mobile: px-5 (20px) / Desktop: px-6 (24px)
  compact: 'px-5 py-6 md:px-6 md:py-8',
  
  // Mobile: px-6 (24px) / Desktop: px-12 (48px) - The "Golden" reading zone
  comfortable: 'px-6 py-8 md:px-12 md:py-16',
  
  // Mobile: px-8 (32px) / Desktop: px-24 (96px) - "Museum" style spacing
  spacious: 'px-8 py-16 md:px-24 md:py-32',
} as const;

export default function ContentSafeZone({
  children,
  density = 'comfortable',
  className = '',
}: ContentSafeZoneProps) {
  return (
    <div 
      className={`
        w-full
        ${densityMap[density]}
        /* Essential for mobile devices with home bars (iOS): */
        pb-[env(safe-area-inset-bottom)] 
        ${className}
      `}
    >
      {children}
    </div>
  );
}