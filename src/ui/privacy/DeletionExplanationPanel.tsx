// privacy/DeletionExplanationPanel.tsx
// Explain deletion clearly and calmly.
// Frames deletion as a "Hygiene Feature" and a guarantee of erasure.

import React from 'react';

interface DeletionExplanationPanelProps {
  className?: string;
}

export default function DeletionExplanationPanel({
  className = '',
}: DeletionExplanationPanelProps) {
  return (
    <section className={`space-y-8 ${className}`} aria-label="Deletion Mechanics">
      <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-400">
        Erasure Protocol
      </h2>

      <div className="bg-white border border-stone-200 rounded-sm p-8 md:p-10 shadow-sm">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          
          {/* Icon: The Shredder (Mechanical, not emotional) */}
          <div className="shrink-0 w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-stone-500">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 6h18" />
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
              <path d="M10 11v6" />
              <path d="M14 11v6" />
            </svg>
          </div>

          <div className="space-y-6 flex-1">
            <h3 className="font-serif text-xl text-stone-800">
              When you delete, it is gone.
            </h3>
            
            <div className="space-y-4 text-stone-600 font-serif leading-relaxed">
              <p>
                We do not use "soft deletes" or hidden archives. 
                When you request deletion, the data is removed from your local device immediately.
              </p>
              <p>
                Because this system is offline-first, there are no cloud backups for us to scrub. 
                The only copy exists on your device. Once you destroy it, it cannot be recovered by anyone—including us.
              </p>
            </div>

            {/* Reassurance Note */}
            <div className="pt-4 border-t border-stone-100 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-stone-400" />
              <span className="font-mono text-xs uppercase tracking-wider text-stone-500">
                True deletion, not just hiding
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}