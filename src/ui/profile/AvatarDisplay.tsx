// profile/AvatarDisplay.tsx
// Optional symbolic visual anchor without social framing.
// Treats the user image as a framed cameo, not a social signal.

import React from 'react';

interface AvatarDisplayProps {
  src?: string;
  alt?: string;
  initials?: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const sizeMap = {
  small: 'h-10 w-10 text-xs',
  medium: 'h-20 w-20 text-lg',
  large: 'h-32 w-32 text-2xl',
} as const;

export default function AvatarDisplay({
  src,
  alt = 'User avatar',
  initials,
  size = 'medium',
  className = '',
}: AvatarDisplayProps) {
  return (
    <div
      className={`
        relative
        flex items-center justify-center shrink-0
        rounded-full 
        bg-stone-100
        
        /* The "Matting" Effect: White border + subtle ring */
        border-[3px] border-white 
        shadow-[0_0_0_1px_rgba(231,229,228,1)] /* ring-stone-200 equivalent */
        
        ${sizeMap[size]}
        ${className}
      `}
      role="img"
      aria-label={alt}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className="
            h-full w-full rounded-full object-cover
            /* Tame colors slightly to fit the calm palette */
            grayscale-[0.1] contrast-[0.95]
          "
        />
      ) : (
        /* Fallback: Initials or Abstract Geometry */
        <div className="flex items-center justify-center w-full h-full rounded-full bg-stone-100 text-stone-400 font-serif italic">
          {initials ? (
            <span className="uppercase tracking-widest">{initials}</span>
          ) : (
            <svg
              width="40%"
              height="40%"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <circle cx="12" cy="8" r="4" />
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            </svg>
          )}
        </div>
      )}
    </div>
  );
}