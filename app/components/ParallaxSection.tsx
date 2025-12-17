"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  speed?: number; // -1 to 1, negative = slower, positive = faster
  direction?: "vertical" | "horizontal";
  // Advanced effect options
  scale?: { from: number; to: number }; // Scale effect (e.g., { from: 0.8, to: 1.2 })
  rotate?: { from: number; to: number }; // Rotation in degrees
  opacity?: { from: number; to: number }; // Fade effect (0 to 1)
  blur?: { from: number; to: number }; // Blur in pixels
  skew?: { from: number; to: number }; // Skew in degrees
}

export default function ParallaxSection({
  children,
  className = "",
  speed = 0.5,
  direction = "vertical",
  scale,
  rotate,
  opacity,
  blur,
  skew,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how far through the viewport the element is (0 to 1)
      const scrollProgress = Math.max(
        0,
        Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height))
      );

      setProgress(scrollProgress);

      // Apply parallax offset based on scroll progress
      const parallaxOffset = (scrollProgress - 0.5) * speed * 100;
      setOffset(parallaxOffset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  // Interpolate between from and to values based on progress
  const interpolate = (from: number, to: number) => {
    return from + (to - from) * progress;
  };

  // Build transform string
  let transform =
    direction === "vertical"
      ? `translateY(${offset}px)`
      : `translateX(${offset}px)`;

  if (scale) {
    const currentScale = interpolate(scale.from, scale.to);
    transform += ` scale(${currentScale})`;
  }

  if (rotate) {
    const currentRotate = interpolate(rotate.from, rotate.to);
    transform += ` rotate(${currentRotate}deg)`;
  }

  if (skew) {
    const currentSkew = interpolate(skew.from, skew.to);
    transform += ` skewX(${currentSkew}deg)`;
  }

  // Build filter string
  let filter = "";
  if (blur) {
    const currentBlur = interpolate(blur.from, blur.to);
    filter = `blur(${Math.max(0, currentBlur)}px)`;
  }

  // Calculate opacity
  const currentOpacity = opacity ? interpolate(opacity.from, opacity.to) : 1;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform,
        opacity: currentOpacity,
        filter: filter || undefined,
        transition: "transform 0.15s ease-out, opacity 0.15s ease-out, filter 0.15s ease-out",
        willChange: "transform, opacity, filter",
      }}
    >
      {children}
    </div>
  );
}
