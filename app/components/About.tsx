"use client";

import AnimatedSection from "./AnimatedSection";
import ParallaxSection from "./ParallaxSection";
import ScrollReveal from "./ScrollReveal";

// Aboutカードデータの型定義
interface AboutCard {
  id: string;
  number: string;
  title: string;
  description: string;
}

// カードデータ
const aboutCards: AboutCard[] = [
  {
    id: "1",
    number: "01",
    title: "テクノロジーの橋渡し",
    description:
      "私たちは最先端のテクノロジーを活用し、従来のWebサービスから次世代のWeb3ソリューションまで、シームレスな橋渡しを実現します。",
  },
  {
    id: "2",
    number: "02",
    title: "文化のデジタル展開",
    description:
      "デジタルの力で日本の文化やブランドを世界へ発信。グローバル市場に向けた戦略的なマーケティング支援を行います。",
  },
  {
    id: "3",
    number: "03",
    title: "競争力の再構築",
    description:
      "ブロックチェーン技術やNFTを活用し、企業の競争力を高める新しいビジネスモデルの構築をサポートします。",
  },
];

export default function About() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background layer */}
      <div className="absolute inset-0 bg-white" />

      {/* Background decorative text with parallax - right side, vertical */}
      <ParallaxSection
        speed={-0.25}
        direction="horizontal"
        className="absolute top-1/2 -right-20 -translate-y-1/2 pointer-events-none select-none z-[1]"
        scale={{ from: 0.9, to: 1.2 }}
        opacity={{ from: 0.08, to: 0.35 }}
        blur={{ from: 3, to: 0 }}
      >
        <p className="text-[120px] md:text-[180px] font-black text-zinc-200 whitespace-nowrap tracking-wider rotate-90">
          About Us
        </p>
      </ParallaxSection>

      {/* Decorative floating shapes with parallax */}
      <ParallaxSection speed={-0.3} className="absolute top-20 left-10 w-32 h-32 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-br from-pink-500 to-purple-500 rounded-full blur-2xl" />
      </ParallaxSection>
      <ParallaxSection speed={0.4} className="absolute bottom-20 right-10 w-40 h-40 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full blur-2xl" />
      </ParallaxSection>

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Section Header */}
        <ScrollReveal animation="blur" className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-800">
            私たちについて
          </h2>
        </ScrollReveal>

        {/* Parallelogram Container */}
        <AnimatedSection delay={200} direction="flip" duration={800}>
          <div className="relative group">
            {/* Neon glow effect on hover */}
            <div
              className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500"
              style={{
                clipPath: "polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)",
              }}
            />

            {/* Main parallelogram shape */}
            <div
              className="bg-zinc-900 overflow-hidden relative"
              style={{
                clipPath: "polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)",
              }}
            >
              {/* 3-column grid inside */}
              <div className="grid grid-cols-1 md:grid-cols-3">
                {aboutCards.map((card, index) => (
                  <ScrollReveal
                    key={card.id}
                    animation="slide-up"
                    delay={index * 150}
                    duration={500}
                  >
                    <div
                      className={`p-8 md:py-12 md:px-14 text-white relative group/card hover:bg-zinc-800/50 transition-colors duration-300 ${
                        index === 0 ? "md:pl-20" : ""
                      } ${
                        index === aboutCards.length - 1 ? "md:pr-20" : ""
                      } ${
                        index < aboutCards.length - 1
                          ? "md:border-r md:border-zinc-700"
                          : ""
                      }`}
                    >
                      {/* Number with gradient on hover */}
                      <ParallaxSection speed={0.2} className="mb-6">
                        <span className="text-5xl md:text-6xl font-bold text-zinc-700 group-hover/card:text-transparent group-hover/card:bg-clip-text group-hover/card:bg-gradient-to-r group-hover/card:from-pink-500 group-hover/card:to-cyan-500 transition-all duration-300 inline-block">
                          {card.number}
                        </span>
                      </ParallaxSection>

                      {/* Title */}
                      <h3 className="text-xl md:text-2xl font-bold mb-4 leading-tight group-hover/card:text-white transition-colors">
                        {card.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-zinc-400 leading-relaxed group-hover/card:text-zinc-300 transition-colors">
                        {card.description}
                      </p>

                      {/* Decorative line */}
                      <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent md:hidden" />
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Decorative accent lines */}
            <div
              className="absolute -top-2 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500"
              style={{
                clipPath: "polygon(5% 0%, 100% 0%, 99.8% 100%, 4.8% 100%)",
              }}
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
