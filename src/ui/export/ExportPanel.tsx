// export/ExportPanel.tsx
// Primary container for the export experience.
// Establishes a "clean room" environment for data handling.

import React from 'react';

interface ExportPanelProps {
  children: React.ReactNode;
  className?: string;
}

export default function ExportPanel({
  children,
  className = '',
}: ExportPanelProps) {
  return (
    <section
      className={`
        relative w-full max-w-2xl mx-auto
        /* Calm Surface: Like a clean sheet of paper */
        bg-stone-50
        border border-stone-100
        rounded-sm
        shadow-[0_4px_20px_-12px_rgba(68,64,60,0.05)]
        
        /* Spacing for clarity and breath */
        p-8 md:p-12
        space-y-12
        
        /* Gentle Entrance */
        animate-in fade-in slide-in-from-bottom-2 duration-700 ease-out
        
        ${className}
      `}
      role="region"
      aria-label="Data export options"
    >
      {/* Contextual Header: Frames the action as ownership, not utility */}
      <header className="space-y-4 border-b border-stone-100 pb-8">
        <h2 className="font-serif text-2xl text-stone-800 tracking-tight">
          Data Ownership
        </h2>
        <p className="font-serif italic text-lg text-stone-500 leading-relaxed max-w-prose">
          Your words belong to you. You may retrieve them in open, standard formats at any time.
          This process runs locally and prepares your data for use outside this system.
        </p>
      </header>

      {/* The Control Area */}
      <div className="space-y-10">
        {children}
      </div>
    </section>
  );
}