// AudioWaveformVisualizer.tsx
// Abstract, organic indication of sound presence.
// Simulates "grass blowing in the wind" rather than a technical frequency graph.

import React from 'react';

interface AudioWaveformVisualizerProps {
  isRecording: boolean;
  intensity?: number; // 0.0 to 1.0 (Represents volume level)
  className?: string;
}

export default function AudioWaveformVisualizer({
  isRecording,
  intensity = 0.5,
  className = '',
}: AudioWaveformVisualizerProps) {
  // We use 5 bars for a balanced, centered visual anchor.
  const bars = [1, 2, 3, 4, 5];

  return (
    <div
      className={`
        flex items-center justify-center gap-1.5 
        h-12
        transition-opacity duration-700
        ${isRecording ? 'opacity-100' : 'opacity-0'} 
        ${className}
      `}
      role="presentation"
      aria-hidden="true"
    >
      {bars.map((i) => (
        <div
          key={i}
          className={`
            w-1.5 rounded-full bg-stone-400/80
            origin-bottom
            transition-transform duration-100
            ${isRecording ? 'animate-sound-wave' : 'h-1.5'}
          `}
          style={{
            // 1. Height Base: Scale based on intensity input
            transform: `scaleY(${Math.max(1, intensity * 2.5)})`,
            
            // 2. Organic Variation:
            // Staggered delays create a "wave" effect.
            // Different durations prevent them from syncing up robotically.
            animationDelay: `${i * 0.15}s`,
            animationDuration: `${0.8 + (i % 2) * 0.4}s` // alternates between 0.8s and 1.2s
          }}
        />
      ))}

      {/* Embed the keyframe locally to ensure the "breathing" physics 
        work without external CSS dependencies. 
      */}
      <style>{`
        @keyframes sound-wave {
          0%, 100% { height: 6px; opacity: 0.5; }
          50% { height: 24px; opacity: 1; }
        }
        .animate-sound-wave {
          animation-name: sound-wave;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
}