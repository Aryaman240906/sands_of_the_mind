// VoiceEntrySurface.tsx
// Container establishing the emotional and spatial context for voice journaling.
// Creates a "Quiet Room" atmosphere when active.

import React from 'react';

interface VoiceEntrySurfaceProps {
  children: React.ReactNode;
  recording?: boolean;
  className?: string;
}

export default function VoiceEntrySurface({
  children,
  recording = false,
  className = '',
}: VoiceEntrySurfaceProps) {
  return (
    <div
      className={`
        relative w-full
        flex flex-col items-center justify-center
        /* Height ensures isolation from other content */
        min-h-[60vh] md:min-h-[70vh]
        transition-all duration-1000 ease-in-out
        ${className}
      `}
      role="region"
      aria-label="Voice entry surface"
    >
      {/* Ambient State Layer:
        Instead of changing the container's bg directly, we overlay a gradient.
        This allows for smoother mixing and prevents layout shifts.
      */}
      <div 
        className={`
          absolute inset-0 pointer-events-none
          bg-gradient-to-b from-transparent 
          ${recording ? 'via-rose-50/40 to-stone-50/50' : 'via-stone-50/0 to-transparent'}
          transition-opacity duration-1000
        `} 
      />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center gap-8 md:gap-12">
        {children}
      </div>
    </div>
  );
}