"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);

  useEffect(() => {
    if (!imageLoaded) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(dpr, dpr);

    // Animate white brush stroke
    const animateWhiteBrush = () => {
      const centerY = height / 2;
      const strokeHeight = Math.min(320, height * 0.4);
      const startX = -100;
      const endX = width + 100;
      const duration = 800;
      const startTime = performance.now();

      // Pre-generate bristle properties (fixed values to prevent flickering)
      const bristleCount = 120;
      const bristles = Array.from({ length: bristleCount }, (_, i) => ({
        y: -strokeHeight / 2 + (i / bristleCount) * strokeHeight,
        thickness: 3 + (Math.sin(i * 0.7) * 0.5 + 0.5) * 5,
        yOffset: Math.sin(i * 0.4) * 6,
        alpha: 0.7 + (Math.cos(i * 0.5) * 0.5 + 0.5) * 0.3,
        phase: i * 0.3,
      }));

      // Pre-render text
      const textCanvas = document.createElement("canvas");
      textCanvas.width = width * dpr;
      textCanvas.height = height * dpr;
      const textCtx = textCanvas.getContext("2d");
      if (!textCtx) return;
      textCtx.scale(dpr, dpr);

      const fontSize = Math.min(width * 0.13, 150);
      textCtx.font = `700 ${fontSize}px "Geist", system-ui, sans-serif`;
      textCtx.textAlign = "center";
      textCtx.textBaseline = "middle";
      textCtx.fillStyle = "#222";
      textCtx.fillText("Canvas", width / 2, centerY);

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const currentX = startX + (endX - startX) * easeProgress;

        // Clear canvas
        ctx.clearRect(0, 0, width, height);

        // Draw white brush stroke with bristle texture
        ctx.save();

        const baseY = centerY;

        // Draw individual bristle lines (using pre-generated values)
        bristles.forEach((bristle) => {
          const bristleY = baseY + bristle.y;

          ctx.globalAlpha = bristle.alpha;
          ctx.strokeStyle = "#FFFFFF";
          ctx.lineWidth = bristle.thickness;
          ctx.lineCap = "round";

          ctx.beginPath();
          ctx.moveTo(startX, bristleY + bristle.yOffset);

          // Smooth wavy bristle path
          for (let x = startX; x <= currentX; x += 40) {
            const wave = Math.sin(x * 0.008 + bristle.phase) * 3;
            ctx.lineTo(x, bristleY + bristle.yOffset + wave);
          }
          ctx.lineTo(currentX, bristleY + bristle.yOffset);
          ctx.stroke();
        });

        // Solid white center for better text contrast
        ctx.globalAlpha = 0.95;
        ctx.fillStyle = "#FFFFFF";
        ctx.beginPath();
        ctx.rect(startX, centerY - strokeHeight * 0.3, currentX - startX, strokeHeight * 0.6);
        ctx.fill();

        // Paint buildup at brush head
        if (progress < 1) {
          ctx.globalAlpha = 0.9;
          ctx.fillStyle = "#FAFAFA";
          ctx.beginPath();
          ctx.ellipse(currentX, centerY, strokeHeight * 0.15, strokeHeight * 0.45, 0, 0, Math.PI * 2);
          ctx.fill();
        }

        // Feathered top edge
        const topGradient = ctx.createLinearGradient(0, centerY - strokeHeight / 2 - 15, 0, centerY - strokeHeight / 2 + 25);
        topGradient.addColorStop(0, "rgba(255,255,255,0)");
        topGradient.addColorStop(1, "rgba(255,255,255,0.7)");
        ctx.globalAlpha = 1;
        ctx.fillStyle = topGradient;
        ctx.fillRect(startX, centerY - strokeHeight / 2 - 15, currentX - startX, 40);

        // Feathered bottom edge
        const bottomGradient = ctx.createLinearGradient(0, centerY + strokeHeight / 2 - 25, 0, centerY + strokeHeight / 2 + 15);
        bottomGradient.addColorStop(0, "rgba(255,255,255,0.7)");
        bottomGradient.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = bottomGradient;
        ctx.fillRect(startX, centerY + strokeHeight / 2 - 25, currentX - startX, 40);

        ctx.restore();

        // Draw text clipped to brush stroke area
        ctx.save();
        ctx.beginPath();
        ctx.rect(startX, centerY - strokeHeight / 2 + 5, currentX - startX, strokeHeight - 10);
        ctx.clip();
        ctx.drawImage(textCanvas, 0, 0, width, height);
        ctx.restore();

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setTimeout(() => {
            setShowSubtitle(true);
          }, 400);
        }
      };

      requestAnimationFrame(animate);
    };

    // Start animation after a short delay
    const timer = setTimeout(() => {
      animateWhiteBrush();
    }, 500);

    return () => clearTimeout(timer);
  }, [imageLoaded]);

  return (
    <section className="relative h-screen w-full overflow-hidden z-10">
      {/* Background image */}
      <Image
        src="/paint-background.jpg"
        alt="Colorful painted background"
        fill
        className="object-cover"
        priority
        onLoad={() => setImageLoaded(true)}
      />

      {/* Canvas for brush animation */}
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 z-10 transition-opacity duration-500 ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Subtitle */}
      <div
        className={`absolute left-1/2 top-[63%] -translate-x-1/2 z-20 transition-all duration-1000 ${
          showSubtitle ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <p
          className="text-lg md:text-2xl font-medium tracking-[0.3em] text-zinc-800 px-6 py-3 rounded-full"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.85)",
            backdropFilter: "blur(8px)",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          }}
        >
          Create Your Future
        </p>
      </div>


      {/* Subtle frame */}
      <div className="absolute inset-4 border border-white/20 pointer-events-none z-10 rounded" />
    </section>
  );
}
