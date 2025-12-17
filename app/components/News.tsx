"use client";

import Link from "next/link";
import Image from "next/image";
import Card3D from "./Card3D";
import ParallaxSection from "./ParallaxSection";
import ScrollReveal from "./ScrollReveal";

// ニュースデータの型定義
interface NewsItem {
  id: string;
  date: string;
  category: string;
  title: string;
  href: string;
  image?: string;
}

// サンプルニュースデータ
const newsData: NewsItem[] = [
  {
    id: "1",
    date: "2025/01/10",
    category: "お知らせ",
    title: "年末年始休業のお知らせについて",
    href: "/news/1",
  },
  {
    id: "2",
    date: "2024/12/15",
    category: "プレスリリース",
    title: "新サービス「Canvas Studio」をリリースしました",
    href: "/news/2",
  },
  {
    id: "3",
    date: "2024/11/28",
    category: "メディア掲載",
    title: "日経新聞に当社の取り組みが掲載されました",
    href: "/news/3",
  },
  {
    id: "4",
    date: "2024/11/01",
    category: "イベント",
    title: "Tech Conference 2024 に登壇します",
    href: "/news/4",
  },
];

export default function News() {
  return (
    <section className="py-32 md:py-40 px-6 relative overflow-hidden">
      {/* Semi-transparent background layer */}
      <div className="absolute inset-0 bg-white" />

      {/* Background decorative text with parallax */}
      <ParallaxSection
        speed={-0.2}
        direction="horizontal"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-[1]"
        scale={{ from: 0.75, to: 1.05 }}
        opacity={{ from: 0.1, to: 0.35 }}
        blur={{ from: 4, to: 0 }}
      >
        <p className="text-[180px] md:text-[280px] font-light italic text-zinc-200 whitespace-nowrap tracking-wider">
          The latest Information
        </p>
      </ParallaxSection>

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Section Header */}
        <ScrollReveal animation="zoom-in" className="mb-16 text-center">
          <p className="text-sm tracking-[0.3em] text-zinc-400 mb-3">ニュース</p>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-800 tracking-wide">
            NEWS
          </h2>
        </ScrollReveal>

        {/* News Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsData.map((news, index) => (
            <ScrollReveal
              key={news.id}
              animation="bounce"
              delay={index * 100}
              duration={700}
            >
              <Card3D glowColor="rgba(239, 68, 68, 0.2)">
                <Link href={news.href} className="group block h-full">
                  <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-zinc-100">
                    {/* Thumbnail */}
                    <div className="aspect-[4/3] bg-zinc-200 relative overflow-hidden">
                      {news.image ? (
                        <Image
                          src={news.image}
                          alt={news.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-zinc-100 to-zinc-200 group-hover:from-zinc-50 group-hover:to-zinc-150 transition-colors duration-300">
                          <svg
                            className="w-12 h-12 text-zinc-300 group-hover:text-zinc-400 group-hover:scale-110 transition-all duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                            />
                          </svg>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-4 flex-1 flex flex-col">
                      {/* Date & Category */}
                      <div className="flex items-center gap-3 mb-2">
                        <time
                          dateTime={news.date.replace(/\//g, "-")}
                          className="text-sm text-zinc-400"
                        >
                          {news.date}
                        </time>
                        <span className="px-2 py-0.5 text-xs font-medium text-white bg-red-500 rounded group-hover:bg-red-600 transition-colors">
                          {news.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-sm text-zinc-700 leading-relaxed line-clamp-2 group-hover:text-zinc-900 transition-colors flex-1">
                        {news.title}
                      </h3>
                    </div>
                  </article>
                </Link>
              </Card3D>
            </ScrollReveal>
          ))}
        </div>

        {/* View All Button */}
        <ScrollReveal animation="slide-up" className="mt-14 text-center" delay={400}>
          <Link
            href="/news"
            className="group inline-flex items-center gap-3 px-10 py-4 bg-red-500 text-white rounded-full font-medium hover:bg-red-600 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300"
          >
            ニュース一覧
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
