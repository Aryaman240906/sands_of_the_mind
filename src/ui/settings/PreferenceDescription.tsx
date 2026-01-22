// settings/PreferenceDescription.tsx
// Contextual help text that feels like a margin note.
// Uses the literary voice (Serif) to explain the technical choice.

import React from 'react';

interface PreferenceDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export const PreferenceDescription: React.FC<PreferenceDescriptionProps> = ({
  children,
  className = ''
}) => {
  return (
    <p 
      className={`
        text-sm md:text-base 
        font-serif 
        text-stone-500 
        leading-relaxed 
        max-w-prose 
        ${className}
      `}
    >
      {children}
    </p>
  );
};