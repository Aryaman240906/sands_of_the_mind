// ui/feedback/LoadingSkeleton.tsx
// A calm, breathing placeholder that implies emergence.
// Slow pulse prevents the "hurry up" feeling of fast loaders.

import React from 'react';

interface LoadingSkeletonProps {
  lines?: number;
  className?: string;
  variant?: 'text' | 'block';
}

export const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
  lines = 3,
  className = '',
  variant = 'text'
}) => {
  return (
    <div 
      className={`space-y-4 w-full ${className}`} 
      role="status" 
      aria-live="polite" 
      aria-label="Content loading"
    >
      {Array.from({ length: lines }).map((_, index) => {
        // Deterministic variation to mimic paragraph flow without hydration mismatch
        // Pattern: 100% -> 92% -> 96% -> 60% (repeat)
        let width = '100%';
        if (variant === 'text') {
           if (index === lines - 1) width = '60%';
           else if (index % 3 === 1) width = '92%';
           else if (index % 3 === 2) width = '96%';
        }

        return (
          <div
            key={index}
            className="h-4 bg-stone-100 rounded-sm animate-pulse"
            style={{
              width,
              // Offset animation slightly for a "wave" effect, 
              // but keep it slow (2s) for calmness
              animationDuration: '2.5s',
              animationDelay: `${index * 150}ms`, 
              animationFillMode: 'both'
            }}
          />
        );
      })}
      
      <span className="sr-only">Loading...</span>
    </div>
  );
};