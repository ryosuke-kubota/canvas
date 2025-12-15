"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale" | "rotate" | "blur" | "flip";
  duration?: number;
  distance?: number;
  stagger?: boolean;
  staggerDelay?: number;
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 600,
  distance = 40,
  stagger = false,
  staggerDelay = 100,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  // Add stagger animation CSS variables to children
  useEffect(() => {
    if (stagger && isVisible && ref.current) {
      const children = ref.current.children;
      Array.from(children).forEach((child, index) => {
        const element = child as HTMLElement;
        element.style.transitionDelay = `${index * staggerDelay}ms`;
        element.classList.add("stagger-visible");
      });
    }
  }, [stagger, staggerDelay, isVisible]);

  const getTransformInitial = () => {
    switch (direction) {
      case "up":
        return `translateY(${distance}px)`;
      case "down":
        return `translateY(-${distance}px)`;
      case "left":
        return `translateX(${distance}px)`;
      case "right":
        return `translateX(-${distance}px)`;
      case "scale":
        return "scale(0.9)";
      case "rotate":
        return "rotate(-5deg) scale(0.95)";
      case "blur":
        return "scale(1.02)";
      case "flip":
        return "perspective(1000px) rotateX(20deg)";
      default:
        return `translateY(${distance}px)`;
    }
  };

  const getFilterInitial = () => {
    if (direction === "blur") {
      return "blur(8px)";
    }
    return "none";
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "none" : getTransformInitial(),
        filter: isVisible ? "none" : getFilterInitial(),
        transition: `opacity ${duration}ms cubic-bezier(0.4, 0, 0.2, 1), transform ${duration}ms cubic-bezier(0.4, 0, 0.2, 1), filter ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
        transformOrigin: direction === "flip" ? "top center" : "center",
      }}
    >
      {children}
    </div>
  );
}
