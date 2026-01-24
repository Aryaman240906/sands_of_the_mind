// ui/feedback/GentleParallaxLayer.tsx
// Adds subtle depth by moving layers at different speeds.
// Creates a "Paper Stack" feeling rather than a flat web page.

import React, { useEffect, useState, useRef } from 'react';

interface GentleParallaxLayerProps {
  children: React.ReactNode;
  speed?: number; // Lower is more subtle (0.02 - 0.1)
  className?: string;
  disabled?: boolean;
}

export const GentleParallaxLayer: React.FC<GentleParallaxLayerProps> = ({
  children,
  speed = 0.05,
  className = '',
  disabled = false
}) => {
  const [offset, setOffset] = useState(0);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  // 1. Accessibility Check
  useEffect(() => {
    const checkMotion = () => {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      setShouldAnimate(!prefersReduced && !disabled);
    };
    
    checkMotion();
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    // Modern event listener handling
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', checkMotion);
      return () => mediaQuery.removeEventListener('change', checkMotion);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(checkMotion);
      return () => mediaQuery.removeListener(checkMotion);
    }
  }, [disabled]);

  // 2. The Physics Loop
  useEffect(() => {
    if (!shouldAnimate) {
      setOffset(0);
      return;
    }

    const handleScroll = () => {
      if (!ref.current) return;

      // Calculate relative position to viewport
      const rect = ref.current.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const elementCenter = rect.top + (rect.height / 2);
      
      // Calculate distance from center of screen
      const distanceFromCenter = elementCenter - viewportCenter;
      
      // Apply the speed factor (inverted for background feel)
      // We limit the calculation to visual range to avoid huge numbers
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setOffset(distanceFromCenter * speed * -1);
      }
    };

    const onScroll = () => {
      // Debounce via RequestAnimationFrame for 60fps smoothness
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    
    // Initial calculation
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [shouldAnimate, speed]);

  return (
    <div
      ref={ref}
      className={`will-change-transform ${className}`}
      style={{
        transform: shouldAnimate ? `translate3d(0, ${offset}px, 0)` : 'none',
        // Note: No transition property here! 
        // Instant updates are required for smooth scroll-linked animation.
      }}
      aria-hidden="true" // Usually purely decorative
    >
      {children}
    </div>
  );
};