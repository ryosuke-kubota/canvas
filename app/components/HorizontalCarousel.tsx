"use client";

import { useRef, useState, useEffect, ReactNode, useCallback } from "react";

interface HorizontalCarouselProps {
  children: ReactNode[];
  itemWidth?: number;
  gap?: number;
  showDots?: boolean;
  showArrows?: boolean;
  className?: string;
  fullWidth?: boolean;
  infinite?: boolean;
}

export default function HorizontalCarousel({
  children,
  itemWidth = 320,
  gap = 24,
  showDots = true,
  showArrows = true,
  className = "",
  fullWidth = false,
  infinite = false,
}: HorizontalCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemCount, setItemCount] = useState(0);

  const totalItems = children.length;

  // 無限スクロール用に複製（十分な数を確保）
  const displayItems = infinite
    ? [...children, ...children, ...children, ...children, ...children]
    : children;

  // スクロール状態をチェック
  const checkScroll = useCallback(() => {
    if (!containerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;

    if (!infinite) {
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }

    // 現在のインデックスを計算
    const index = Math.round(scrollLeft / (itemWidth + gap)) % totalItems;
    setCurrentIndex(index >= 0 ? index : totalItems + index);
  }, [infinite, itemWidth, gap, totalItems]);

  // 無限スクロールのシームレスな位置調整
  const handleInfiniteScroll = useCallback(() => {
    if (!containerRef.current || !infinite) return;

    const container = containerRef.current;
    const { scrollLeft, scrollWidth, clientWidth } = container;
    const singleSetWidth = totalItems * (itemWidth + gap);

    // 2セット目の開始位置と3セット目の終了位置を基準に調整
    // スクロールがスムーズに見えるように、ユーザーがスクロールを止めた後に調整
    if (scrollLeft < singleSetWidth) {
      // 左端に近づいたら、瞬時に中央に移動（ユーザーには見えない）
      container.style.scrollBehavior = 'auto';
      container.scrollLeft = scrollLeft + singleSetWidth * 2;
      container.style.scrollBehavior = 'smooth';
    } else if (scrollLeft > singleSetWidth * 3) {
      // 右端に近づいたら、瞬時に中央に移動
      container.style.scrollBehavior = 'auto';
      container.scrollLeft = scrollLeft - singleSetWidth * 2;
      container.style.scrollBehavior = 'smooth';
    }
  }, [infinite, totalItems, itemWidth, gap]);

  useEffect(() => {
    setItemCount(children.length);

    const container = containerRef.current;
    if (container) {
      // 無限スクロールの場合、中央のセットから開始
      if (infinite) {
        const singleSetWidth = totalItems * (itemWidth + gap);
        container.style.scrollBehavior = 'auto';
        container.scrollLeft = singleSetWidth * 2;
        container.style.scrollBehavior = 'smooth';
      }

      checkScroll();
      container.addEventListener("scroll", checkScroll, { passive: true });

      // スクロール終了時に位置調整
      let scrollTimeout: NodeJS.Timeout;
      const handleScrollEnd = () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          handleInfiniteScroll();
        }, 150);
      };

      if (infinite) {
        container.addEventListener("scroll", handleScrollEnd, { passive: true });
      }

      return () => {
        container.removeEventListener("scroll", checkScroll);
        if (infinite) {
          container.removeEventListener("scroll", handleScrollEnd);
          clearTimeout(scrollTimeout);
        }
      };
    }
  }, [children.length, itemWidth, gap, infinite, totalItems, checkScroll, handleInfiniteScroll]);

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

    if (infinite) {
      // 現在のスクロール位置から最も近いセット内の該当位置を探す
      const currentScrollLeft = containerRef.current.scrollLeft;
      const singleSetWidth = totalItems * (itemWidth + gap);
      const currentSet = Math.floor(currentScrollLeft / singleSetWidth);
      const scrollLeft = currentSet * singleSetWidth + index * (itemWidth + gap);
      containerRef.current.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    } else {
      const scrollLeft = index * (itemWidth + gap);
      containerRef.current.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* スクロールコンテナ */}
      <div
        ref={containerRef}
        className={`flex overflow-x-auto snap-x snap-mandatory pb-4 ${
          fullWidth ? "px-6 md:px-12 lg:px-20" : "-mx-6 px-6"
        }`}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
          gap: `${gap}px`,
          scrollBehavior: "smooth",
        }}
      >
        <style>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {displayItems.map((child, index) => (
          <div
            key={`carousel-item-${index}`}
            className="flex-shrink-0 snap-center"
            style={{ width: `${itemWidth}px` }}
          >
            {child}
          </div>
        ))}
      </div>

      {/* 左矢印ボタン - 無限スクロールでは常に表示 */}
      {showArrows && (
        <button
          onClick={() => scroll("left")}
          disabled={!infinite && !canScrollLeft}
          className={`absolute top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl disabled:opacity-0 disabled:pointer-events-none transition-all duration-300 flex items-center justify-center group ${
            fullWidth ? "left-2 md:left-6 lg:left-10" : "left-0 -translate-x-2"
          }`}
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

      {/* 右矢印ボタン - 無限スクロールでは常に表示 */}
      {showArrows && (
        <button
          onClick={() => scroll("right")}
          disabled={!infinite && !canScrollRight}
          className={`absolute top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl disabled:opacity-0 disabled:pointer-events-none transition-all duration-300 flex items-center justify-center group ${
            fullWidth ? "right-2 md:right-6 lg:right-10" : "right-0 translate-x-2"
          }`}
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
