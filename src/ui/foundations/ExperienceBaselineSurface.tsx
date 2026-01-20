// ExperienceBaselineSurface.tsx
import React from 'react';

interface ExperienceBaselineSurfaceProps {
  children: React.ReactNode;
  className?: string;
}

export default function ExperienceBaselineSurface({
  children,
  className = '',
}: ExperienceBaselineSurfaceProps) {
  return (
    <div
      className={`
        relative min-h-screen w-full overflow-hidden
        bg-stone-50 text-stone-700 antialiased
        selection:bg-amber-100 selection:text-stone-900
        ${className}
      `}
    >
      {/* Self-contained styles for the specific breathing animation so you 
        don't need to edit tailwind.config.js 
      */}
      <style>
        {`
          @keyframes subtle-breathe {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.02); }
          }
          .animate-breathe-slow {
            animation: subtle-breathe 15s ease-in-out infinite;
          }
        `}
      </style>

      {/* 1. Base Static Gradient: The foundational paper tone */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-stone-50 via-[#f5f2ed] to-stone-100" />

      {/* 2. "Breathing" Ambient Light: 
          This layer pulses gently. It adds warmth (amber-50) that feels like 
          sunlight shifting slightly in the room. */}
      <div className="absolute inset-0 z-0 animate-breathe-slow bg-[radial-gradient(circle_at_50%_0%,_var(--tw-gradient-stops))] from-amber-50/80 via-transparent to-transparent" />

      {/* 3. Texture: Micro-noise (Essential for preventing the 'digital' feel) */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.02] mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 4. Vignette: Very subtle darkening at corners to focus attention */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_60%,rgba(0,0,0,0.01)_100%)] pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}