// WritingPlaceholderBlock.tsx
// A gentle prompt to overcome the "Fear of the Blank Page".
// Disappears gracefully once momentum is established.

import React from 'react';

interface WritingPlaceholderBlockProps {
  isVisible: boolean;
  prompt?: string;
  className?: string;
}

export default function WritingPlaceholderBlock({
  isVisible,
  prompt = "What is on your mind?",
  className = '',
}: WritingPlaceholderBlockProps) {
  // If the user has started writing, we remove this completely from the DOM
  // to ensure no z-index conflicts or screen reader confusion.
  if (!isVisible) return null;

  return (
    <div 
      className={`
        absolute top-0 left-0 w-full 
        pointer-events-none select-none
        flex flex-col gap-4
        animate-in fade-in duration-1000 fill-mode-forwards
        ${className}
      `}
      aria-hidden="true"
    >
      {/* The Visual Anchor: A small dash to mark the starting line */}
      <div className="w-8 h-px bg-stone-300/60" />

      {/* The Prompt: 
          Uses a serif font to distinguish "The Muse" (system) from "The Writer" (user).
          Italicized to feel like a whisper.
      */}
      <p className="
        text-2xl md:text-3xl font-serif italic text-stone-300/80
        leading-relaxed
      ">
        {prompt}
      </p>
    </div>
  );
}