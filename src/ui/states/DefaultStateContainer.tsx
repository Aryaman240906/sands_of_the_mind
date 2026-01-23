// layout/DefaultStateContainer.tsx
// The "Zero State" canvas.
// Represents potential rather than emptiness.

import React from 'react';

interface DefaultStateContainerProps {
  children?: React.ReactNode;
  className?: string;
}

export const DefaultStateContainer: React.FC<DefaultStateContainerProps> = ({
  children,
  className = ''
}) => {
  return (
    <div 
      className={`
        w-full h-full min-h-[60vh]
        flex flex-col items-center justify-center
        p-8 md:p-12
        text-center
        
        /* Entrance Physics */
        animate-in fade-in zoom-in-[0.98] duration-700 ease-out
        
        ${className}
      `}
      role="status"
    >
      <div className="max-w-md w-full space-y-6">
        {children}
      </div>
    </div>
  );
};