// AutoExpandingTextArea.tsx
// The core input mechanism.
// Invisible physics engine that grows with thought, removing scrollbars.

import React, { useRef, useLayoutEffect } from 'react';

// Extend standard HTML attributes to allow passing standard props (onKeyDown, onBlur, etc.)
interface AutoExpandingTextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  value: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export default function AutoExpandingTextArea({
  value,
  onValueChange,
  placeholder = "Start writing...",
  className = '',
  // Extract specific props we handle manually, pass the rest through
  onChange, 
  style,
  ...props
}: AutoExpandingTextAreaProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // The Physics Engine:
  // Automatically adjusts height to fit content perfectly.
  // uses useLayoutEffect to prevent visual "jumps" during resize paint cycles.
  useLayoutEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    // 1. Reset height to 'auto' to correctly calculate the new shrink size
    //    (otherwise it would never shrink when you delete text)
    textarea.style.height = 'auto';
    
    // 2. Set new height based on scrollHeight (the height of the content)
    textarea.style.height = `${textarea.scrollHeight}px`;
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onValueChange?.(e.target.value);
    onChange?.(e); // Trigger standard onChange if provided
  };

  return (
    <textarea
      ref={textareaRef}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      rows={1}
      
      // Accessibility & UX defaults
      spellCheck={false} // "Red squiggles" break immersion; disable by default
      autoComplete="off"
      autoCorrect="off" // Prevent aggressive autocorrect from changing tone
      aria-label="Writing surface"
      
      // Visual & Layout
      className={`
        block w-full
        resize-none overflow-hidden
        bg-transparent
        
        /* Remove ALL browser chrome */
        outline-none ring-0 border-none focus:ring-0 focus:outline-none
        
        /* Typography: Matches 'PassageBody' for seamless read/write state */
        text-lg md:text-xl
        leading-loose
        text-stone-800
        placeholder:text-stone-300 placeholder:font-light placeholder:italic
        
        /* The Pulse: A custom, softer caret color */
        caret-stone-400
        
        transition-opacity duration-700 ease-out
        ${className}
      `}
      
      // Inline style wrapper for specific overrides if needed
      style={{
        ...style,
      }}
      
      {...props}
    />
  );
}