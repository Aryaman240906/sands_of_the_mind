// privacy/TrustReassuranceCopyBlock.tsx
// Calm reassurance about privacy practices without marketing language.
// Presents trust as a matter of fact, not a promise.

import React from 'react';

interface TrustReassuranceCopyBlockProps {
  children: React.ReactNode;
  emphasis?: boolean;
  className?: string;
}

export default function TrustReassuranceCopyBlock({
  children,
  emphasis = false,
  className = '',
}: TrustReassuranceCopyBlockProps) {
  return (
    <div
      className={`
        flex gap-4 items-baseline
        transition-all duration-300 ease-out
        ${emphasis 
          ? 'bg-stone-50 border-l-4 border-stone-800 p-6 md:p-8' 
          : 'border-l border-stone-300 pl-4 py-1'
        }
        ${className}
      `}
      role="note"
    >
      <p 
        className={`
          font-serif leading-relaxed
          ${emphasis 
            ? 'text-lg md:text-xl text-stone-800 font-medium' 
            : 'text-sm text-stone-500'
          }
        `}
      >
        {children}
      </p>
    </div>
  );
}