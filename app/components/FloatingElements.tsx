"use client";

import { useEffect, useState } from "react";

interface FloatingElement {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  speed: number;
  delay: number;
}

interface FloatingElementsProps {
  count?: number;
  colors?: string[];
  className?: string;
}

export default function FloatingElements({
  count = 6,
  colors = [
    "rgba(236, 72, 153, 0.15)", // pink
    "rgba(6, 182, 212, 0.15)", // cyan
    "rgba(139, 92, 246, 0.15)", // violet
    "rgba(251, 191, 36, 0.15)", // amber
  ],
  className = "",
}: FloatingElementsProps) {
  const [elements, setElements] = useState<FloatingElement[]>([]);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Generate random floating elements
    const newElements: FloatingElement[] = [];
    for (let i = 0; i < count; i++) {
      newElements.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 100 + Math.random() * 200,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: 0.2 + Math.random() * 0.5,
        delay: Math.random() * 2,
      });
    }
    setElements(newElements);
  }, [count, colors]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed inset-0 pointer-events-none overflow-hidden ${className}`}>
      {elements.map((el) => (
        <div
          key={el.id}
          className="absolute rounded-full blur-3xl"
          style={{
            left: `${el.x}%`,
            top: `${el.y}%`,
            width: el.size,
            height: el.size,
            backgroundColor: el.color,
            transform: `translateY(${scrollY * el.speed * -0.1}px)`,
            transition: "transform 0.3s ease-out",
            animationDelay: `${el.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
