// profile/AccessibilityPreferencesPanel.tsx
// First-class comfort and inclusion settings without medical framing.
// Frames accessibility as "Sensory Tuning" for individual preference.

import React from 'react';

interface AccessibilityPreferencesPanelProps {
  children: React.ReactNode;
  className?: string;
}

export default function AccessibilityPreferencesPanel({
  children,
  className = '',
}: AccessibilityPreferencesPanelProps) {
  return (
    <section
      className={`
        w-full
        /* Surface: Distinct region, clean and technical */
        bg-stone-50/30
        border border-stone-200/60
        rounded-sm
        
        /* Spacing */
        p-6 md:p-10
        space-y-8
        
        ${className}
      `}
      role="region"
      aria-label="Sensory and interaction tuning"
    >
      <header className="space-y-3 border-b border-stone-200/40 pb-6">
        <div className="flex items-center gap-2">
           <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-400">
             Sensory & Motion
           </h3>
        </div>
        
        <p className="font-serif text-base text-stone-600 max-w-prose leading-relaxed">
          Tune the interface physics to match your preferred pace. 
          Reduce motion or increase contrast to create a steadier environment.
        </p>
      </header>

      {/* Control Surface */}
      <div className="space-y-6">
        {children}
      </div>
    </section>
  );
}