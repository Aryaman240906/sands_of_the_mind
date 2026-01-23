// layout/EmptyStateBlock.tsx
// A quiet, distinct placeholder.
// Frames the absence of content as "Clarity" rather than "Missing".

import React from 'react';

interface EmptyStateBlockProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
}

export const EmptyStateBlock: React.FC<EmptyStateBlockProps> = ({
  title = "All clear",
  description = "There is nothing here yet.",
  icon,
  className = ''
}) => {
  return (
    <div 
      className={`
        flex flex-col items-center justify-center 
        min-h-[16rem] w-full
        text-center space-y-4
        animate-in fade-in duration-700 ease-out
        ${className}
      `}
      role="status"
    >
      {/* Icon: Abstract Geometry or Custom */}
      <div className="text-stone-300 mb-2">
        {icon || (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <circle cx="12" cy="12" r="8" opacity="0.5" />
            <path d="M12 8v8" opacity="0.2" />
            <path d="M8 12h8" opacity="0.2" />
          </svg>
        )}
      </div>

      <div className="space-y-1 max-w-xs mx-auto">
        <h3 className="font-serif text-lg text-stone-500 font-medium">
          {title}
        </h3>
        <p className="font-sans text-sm text-stone-400 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};