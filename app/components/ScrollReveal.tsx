"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?:
    | "fade"
    | "slide-up"
    | "slide-down"
    | "slide-left"
    | "slide-right"
    | "zoom-in"
    | "zoom-out"
    | "flip-up"
    | "flip-left"
    | "rotate"
    | "blur"
    | "bounce";
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  className = "",
  animation = "fade",
  delay = 0,
  duration = 600,
  threshold = 0.1,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin: "0px 0px -30px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay, threshold, once]);

  const getInitialStyles = (): React.CSSProperties => {
    const base: React.CSSProperties = {
      opacity: 0,
      transition: `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
    };

    switch (animation) {
      case "fade":
        return base;
      case "slide-up":
        return { ...base, transform: "translateY(60px)" };
      case "slide-down":
        return { ...base, transform: "translateY(-60px)" };
      case "slide-left":
        return { ...base, transform: "translateX(60px)" };
      case "slide-right":
        return { ...base, transform: "translateX(-60px)" };
      case "zoom-in":
        return { ...base, transform: "scale(0.8)" };
      case "zoom-out":
        return { ...base, transform: "scale(1.2)" };
      case "flip-up":
        return {
          ...base,
          transform: "perspective(1000px) rotateX(45deg)",
          transformOrigin: "bottom",
        };
      case "flip-left":
        return {
          ...base,
          transform: "perspective(1000px) rotateY(-45deg)",
          transformOrigin: "right",
        };
      case "rotate":
        return { ...base, transform: "rotate(-10deg) scale(0.9)" };
      case "blur":
        return { ...base, filter: "blur(10px)", transform: "scale(1.05)" };
      case "bounce":
        return { ...base, transform: "translateY(80px)" };
      default:
        return base;
    }
  };

  const getVisibleStyles = (): React.CSSProperties => {
    const base: React.CSSProperties = {
      opacity: 1,
      transform: "none",
      filter: "none",
      transition: `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
    };

    if (animation === "bounce") {
      return {
        ...base,
        transition: `all ${duration}ms cubic-bezier(0.34, 1.56, 0.64, 1)`,
      };
    }

    return base;
  };

  return (
    <div
      ref={ref}
      className={className}
      style={isVisible ? getVisibleStyles() : getInitialStyles()}
    >
      {children}
    </div>
  );
}
