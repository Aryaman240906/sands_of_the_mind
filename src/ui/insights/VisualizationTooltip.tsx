// insights/VisualizationTooltip.tsx
// Contextual clarification appearing only on interaction.
// Uses "Dark Mode" contrast to separate metadata from the visualization.

import React from 'react';

interface VisualizationTooltipProps {
  children: React.ReactNode;
  visible?: boolean;
  className?: string;
  style?: React.CSSProperties; // Allow dynamic positioning (top/left) from parent
}

export default function VisualizationTooltip({
  children,
  visible = false,
  className = '',
  style,
}: VisualizationTooltipProps) {
  if (!visible) {
    return null;
  }

  return (
    <div
      role="tooltip"
      style={style}
      className={`
        /* 1. Positioning & Layering */
        absolute z-50 
        pointer-events-none /* Allows mouse to pass through to data points */
        
        /* 2. Visuals (System Dark Mode) */
        bg-stone-800/95 
        backdrop-blur-[2px]
        text-stone-50
        rounded-sm
        shadow-xl
        
        /* 3. Geometry */
        px-3 py-1.5
        min-w-max
        
        /* 4. Typography (Technical) */
        text-[10px] font-mono tracking-wide
        
        /* 5. Entrance Animation */
        animate-in fade-in zoom-in-95 duration-200 ease-out
        
        ${className}
      `}
    >
      {children}
    </div>
  );
}