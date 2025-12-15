"use client";

import { useEffect, useRef, useState } from "react";

export default function WatercolorBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const blobsRef = useRef<Blob[]>([]);
  const scrollYRef = useRef(0);
  const animationFrameRef = useRef<number>();
  const [isReady, setIsReady] = useState(false);

  interface Blob {
    x: number;
    y: number;
    targetRadius: number;
    currentRadius: number;
    color: string;
    triggerY: number; // Y座標でトリガー
    opacity: number;
    blur: number;
    seed: number; // 形状のシード値
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    // 水彩ブロブを初期化
    const initBlobs = () => {
      const colors = [
        "rgba(255, 107, 107, 0.4)",  // coral - より濃く
        "rgba(78, 205, 196, 0.4)",   // teal
        "rgba(69, 183, 209, 0.4)",   // sky blue
        "rgba(150, 206, 180, 0.35)", // sage
        "rgba(255, 234, 167, 0.35)", // pale yellow
        "rgba(221, 160, 221, 0.4)",  // plum
        "rgba(255, 179, 71, 0.35)",  // orange
        "rgba(152, 216, 200, 0.4)",  // mint
      ];

      const blobs: Blob[] = [];
      const pageHeight = document.documentElement.scrollHeight;
      const blobCount = 12;

      for (let i = 0; i < blobCount; i++) {
        const side = i % 2 === 0 ? "left" : "right";
        const x = side === "left"
          ? width * 0.1 + Math.random() * width * 0.25
          : width * 0.65 + Math.random() * width * 0.25;

        const triggerY = (i / blobCount) * pageHeight;

        blobs.push({
          x,
          y: triggerY + Math.random() * 200,
          targetRadius: 200 + Math.random() * 300,
          currentRadius: 0,
          color: colors[i % colors.length],
          triggerY,
          opacity: 0,
          blur: 50 + Math.random() * 30,
          seed: Math.random() * 1000,
        });
      }

      blobsRef.current = blobs;
      setIsReady(true);
    };

    // シードベースの乱数
    const seededRandom = (seed: number, index: number) => {
      const x = Math.sin(seed + index) * 10000;
      return x - Math.floor(x);
    };

    // 水彩ブロブを描画
    const drawBlob = (blob: Blob, scrollY: number) => {
      if (blob.currentRadius <= 0) return;

      // スクロール位置に対する相対Y座標
      const relativeY = blob.y - scrollY;

      // 画面外なら描画しない
      if (relativeY < -blob.targetRadius * 2 || relativeY > height + blob.targetRadius * 2) {
        return;
      }

      ctx.save();
      ctx.filter = `blur(${blob.blur}px)`;
      ctx.globalAlpha = blob.opacity;

      // 水彩の不規則な形を描画（シードベースで固定）
      ctx.beginPath();
      const points = 10;
      for (let i = 0; i <= points; i++) {
        const angle = (i / points) * Math.PI * 2;
        const variation = 0.7 + seededRandom(blob.seed, i) * 0.5;
        const radiusVariation = blob.currentRadius * variation;
        const x = blob.x + Math.cos(angle) * radiusVariation;
        const y = relativeY + Math.sin(angle) * radiusVariation;

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          const prevAngle = ((i - 1) / points) * Math.PI * 2;
          const cpVariation = 0.9 + seededRandom(blob.seed, i + 10) * 0.3;
          const cpRadius = blob.currentRadius * cpVariation;
          const cpAngle = (prevAngle + angle) / 2;
          const cpX = blob.x + Math.cos(cpAngle) * cpRadius * 1.1;
          const cpY = relativeY + Math.sin(cpAngle) * cpRadius * 1.1;
          ctx.quadraticCurveTo(cpX, cpY, x, y);
        }
      }
      ctx.closePath();
      ctx.fillStyle = blob.color;
      ctx.fill();

      // 内側にもう一層（より濃く）
      ctx.globalAlpha = blob.opacity * 0.7;
      ctx.beginPath();
      ctx.arc(blob.x, relativeY, blob.currentRadius * 0.5, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    };

    // アニメーションループ
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      const scrollY = scrollYRef.current;

      blobsRef.current.forEach((blob) => {
        // スクロール位置がトリガーを超えたらアニメーション開始
        const scrollPastTrigger = scrollY + height * 0.7 - blob.triggerY;

        if (scrollPastTrigger > 0) {
          const progress = Math.min(scrollPastTrigger / 300, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          blob.currentRadius = blob.targetRadius * eased;
          blob.opacity = eased;
        } else {
          blob.currentRadius = 0;
          blob.opacity = 0;
        }

        drawBlob(blob, scrollY);
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // スクロールイベント
    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
    };

    resize();
    initBlobs();
    window.addEventListener("resize", () => {
      resize();
      initBlobs();
    });
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none transition-opacity duration-500 ${
        isReady ? "opacity-100" : "opacity-0"
      }`}
      style={{
        zIndex: 0,
      }}
    />
  );
}
