"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  speed?: number; // -1 to 1, negative = slower, positive = faster
  direction?: "vertical" | "horizontal";
}

export default function ParallaxSection({
  children,
  className = "",
  speed = 0.5,
  direction = "vertical",
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how far through the viewport the element is
      const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height);

      // Apply parallax offset based on scroll progress
      const parallaxOffset = (scrollProgress - 0.5) * speed * 100;
      setOffset(parallaxOffset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  const transform =
    direction === "vertical"
      ? `translateY(${offset}px)`
      : `translateX(${offset}px)`;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform,
        transition: "transform 0.1s ease-out",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}
