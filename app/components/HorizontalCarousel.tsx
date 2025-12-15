"use client";

import { useRef, useState, useEffect, ReactNode } from "react";

interface HorizontalCarouselProps {
  children: ReactNode[];
  itemWidth?: number;
  gap?: number;
  showDots?: boolean;
  showArrows?: boolean;
  className?: string;
}

export default function HorizontalCarousel({
  children,
  itemWidth = 320,
  gap = 24,
  showDots = true,
  showArrows = true,
  className = "",
}: HorizontalCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemCount, setItemCount] = useState(0);

  // スクロール状態をチェック
  const checkScroll = () => {
    if (!containerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    // 現在のインデックスを計算
    const index = Math.round(scrollLeft / (itemWidth + gap));
    setCurrentIndex(index);
  };

  useEffect(() => {
    setItemCount(children.length);
    checkScroll();

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScroll, { passive: true });
      return () => container.removeEventListener("scroll", checkScroll);
    }
  }, [children.length, itemWidth, gap]);

  // スクロール関数
  const scroll = (direction: "left" | "right") => {
    if (!containerRef.current) return;

    const scrollAmount = itemWidth + gap;
    const newScrollLeft =
      containerRef.current.scrollLeft +
      (direction === "left" ? -scrollAmount : scrollAmount);

    containerRef.current.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });
  };

  // 特定のインデックスへスクロール
  const scrollToIndex = (index: number) => {
    if (!containerRef.current) return;

    const scrollLeft = index * (itemWidth + gap);
    containerRef.current.scrollTo({
      left: scrollLeft,
      behavior: "smooth",
    });
  };

  return (
    <div className={`relative ${className}`}>
      {/* スクロールコンテナ */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 -mx-6 px-6"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
          gap: `${gap}px`,
        }}
      >
        <style>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {children.map((child, index) => (
          <div
            key={index}
            className="flex-shrink-0 snap-center"
            style={{ width: `${itemWidth}px` }}
          >
            {child}
          </div>
        ))}
      </div>

      {/* 左矢印ボタン */}
      {showArrows && (
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-20 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl disabled:opacity-0 disabled:pointer-events-none transition-all duration-300 flex items-center justify-center group"
          aria-label="前へ"
        >
          <svg
            className="w-5 h-5 text-zinc-600 group-hover:text-zinc-900 transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      )}

      {/* 右矢印ボタン */}
      {showArrows && (
        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-20 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl disabled:opacity-0 disabled:pointer-events-none transition-all duration-300 flex items-center justify-center group"
          aria-label="次へ"
        >
          <svg
            className="w-5 h-5 text-zinc-600 group-hover:text-zinc-900 transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      )}

      {/* ドットインジケーター */}
      {showDots && itemCount > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: itemCount }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 bg-gradient-to-r from-pink-500 to-cyan-500"
                  : "w-2 bg-zinc-300 hover:bg-zinc-400"
              }`}
              aria-label={`スライド ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
