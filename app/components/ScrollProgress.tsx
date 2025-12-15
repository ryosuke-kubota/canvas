"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollProgressProps {
  children: (progress: number) => ReactNode;
  className?: string;
  start?: number; // 0-1, when to start tracking (0 = top of viewport)
  end?: number; // 0-1, when to end tracking (1 = bottom of viewport)
}

export default function ScrollProgress({
  children,
  className = "",
  start = 0,
  end = 1,
}: ScrollProgressProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate normalized scroll progress (0 to 1)
      const elementTop = rect.top;
      const elementHeight = rect.height;

      // Start tracking when element enters viewport at 'start' position
      // End tracking when element leaves at 'end' position
      const startPoint = windowHeight * (1 - start);
      const endPoint = windowHeight * (1 - end) - elementHeight;

      const scrollRange = startPoint - endPoint;
      const currentPosition = startPoint - elementTop;

      const rawProgress = currentPosition / scrollRange;
      const clampedProgress = Math.max(0, Math.min(1, rawProgress));

      setProgress(clampedProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [start, end]);

  return (
    <div ref={ref} className={className}>
      {children(progress)}
    </div>
  );
}
