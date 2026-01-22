// privacy/AIBoundaryExplanationBlock.tsx
// Explain what AI can and cannot do without hype.
// Frames AI as a limited tool, not an intelligent agent.

import React from 'react';

interface AIBoundaryExplanationBlockProps {
  className?: string;
}

export default function AIBoundaryExplanationBlock({
  className = '',
}: AIBoundaryExplanationBlockProps) {
  return (
    <section className={`space-y-8 ${className}`} aria-label="AI Boundaries">
      <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-400">
        AI Limits
      </h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        
        {/* Pillar 1: Statelessness */}
        <div className="p-6 bg-stone-100/30 border border-stone-200/50 rounded-sm space-y-4">
          <div className="w-10 h-10 flex items-center justify-center text-stone-400 bg-white rounded-full border border-stone-100 shadow-sm">
            {/* Icon: Disconnect / Broken Link */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M8 12h8" strokeDasharray="2 2" />
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <path d="M16 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
            </svg>
          </div>
          <div className="space-y-2">
            <h3 className="font-serif text-base text-stone-800">No Memory</h3>
            <p className="text-sm text-stone-500 leading-relaxed font-serif">
              The AI processes your current entry to offer specific reflection. Once the session ends, it retains no knowledge of what you wrote.
            </p>
          </div>
        </div>

        {/* Pillar 2: Privacy / Training */}
        <div className="p-6 bg-stone-100/30 border border-stone-200/50 rounded-sm space-y-4">
          <div className="w-10 h-10 flex items-center justify-center text-stone-400 bg-white rounded-full border border-stone-100 shadow-sm">
             {/* Icon: Shield / Block */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10" />
              <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
            </svg>
          </div>
          <div className="space-y-2">
            <h3 className="font-serif text-base text-stone-800">No Training</h3>
            <p className="text-sm text-stone-500 leading-relaxed font-serif">
              Your personal reflections are never used to train future versions of the AI model. Your life is not data fodder.
            </p>
          </div>
        </div>

        {/* Pillar 3: Role / Authority */}
        <div className="p-6 bg-stone-100/30 border border-stone-200/50 rounded-sm space-y-4">
          <div className="w-10 h-10 flex items-center justify-center text-stone-400 bg-white rounded-full border border-stone-100 shadow-sm">
             {/* Icon: Tool / Wrench (Functional) */}
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
               <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
          </div>
          <div className="space-y-2">
            <h3 className="font-serif text-base text-stone-800">Just a Tool</h3>
            <p className="text-sm text-stone-500 leading-relaxed font-serif">
              The AI is a pattern-matching engine, not a moral authority. It offers perspectives, not answers. You are always the expert on your own life.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}