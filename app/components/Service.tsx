"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import ParallaxSection from "./ParallaxSection";

export default function Service() {
  return (
    <section className="py-32 md:py-40 px-6 relative z-10 isolate overflow-hidden">
      {/* Solid background to block any bleeding effects from other sections */}
      <div className="absolute inset-0 bg-zinc-100 -z-10" />

      {/* Background decorative text with parallax - diagonal position */}
      <ParallaxSection
        speed={0.2}
        className="absolute top-[60%] -left-20 -translate-y-1/2 pointer-events-none select-none z-0"
        scale={{ from: 0.85, to: 1.15 }}
        opacity={{ from: 0.15, to: 0.5 }}
        rotate={{ from: -15, to: -8 }}
      >
        <p className="text-[140px] md:text-[220px] font-black italic text-zinc-300 whitespace-nowrap tracking-wider">
          Service
        </p>
      </ParallaxSection>
      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Section Header */}
        <ScrollReveal animation="fade" className="mb-12">
          <p className="text-sm tracking-[0.2em] text-zinc-400 mb-2">SERVICE</p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">
            サービス
          </h2>
        </ScrollReveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[280px]">
          {/* Marketing Support - Large card (2 cols) */}
          <ScrollReveal animation="fade" delay={100} className="md:col-span-2">
            <div className="h-full bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 rounded-3xl p-8 border border-purple-200/50 overflow-hidden relative">
              {/* Background image */}
              <div className="absolute right-[6%] bottom-[-8%] w-[80%] h-[120%] opacity-90">
                <Image
                  src="/images/service-marketing.png"
                  alt="Marketing Support"
                  fill
                  className="object-contain object-right-bottom"
                />
              </div>
              {/* Content */}
              <div className="relative z-10 max-w-[50%]">
                <h3 className="text-2xl font-bold text-zinc-900 mb-3">
                  マーケティングサポート
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed mb-6">
                  Web2/Web3マーケティング、ブランディング、KOL・インフルエンサーマーケティングを通じてプロジェクトの成長を支援します
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-3 py-1.5 bg-white/80 text-zinc-600 rounded-full backdrop-blur-sm">X / Twitter</span>
                  <span className="text-xs px-3 py-1.5 bg-white/80 text-zinc-600 rounded-full backdrop-blur-sm">Discord</span>
                  <span className="text-xs px-3 py-1.5 bg-white/80 text-zinc-600 rounded-full backdrop-blur-sm">Telegram</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Web Development */}
          <ScrollReveal animation="fade" delay={150}>
            <div className="h-full bg-[#0b1011] rounded-3xl p-6 overflow-hidden relative">
              {/* Background image */}
              <div className="absolute left-[50%] top-[-15%] transform -translate-x-1/2 w-full h-full opacity-80">
                <Image
                  src="/images/service-development.png"
                  alt="Web Development"
                  fill
                  className="object-contain object-center scale-110"
                />
              </div>
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end">
                <h3 className="text-lg font-bold text-white mb-2">
                  ウェブ開発
                </h3>
                <p className="text-xs text-white leading-relaxed">
                  ウェブサイト制作、業務改善システム開発、Web3関連の導入開発
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Advisory */}
          <ScrollReveal animation="fade" delay={200}>
            <div className="h-full bg-gradient-to-br from-amber-100 via-orange-100 to-yellow-100 rounded-3xl p-6 border border-amber-200/50 overflow-hidden relative">
              {/* Background image */}
              <div className="absolute left-[50%] top-[-15%] transform -translate-x-1/2 w-full h-full opacity-90">
                <Image
                  src="/images/service-advisory.png"
                  alt="Advisory"
                  fill
                  className="object-contain object-center scale-110"
                />
              </div>
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end">
                <h3 className="text-lg font-bold text-zinc-900 mb-2">
                  アドバイザリー
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  市場環境とプロジェクトの目標に基づいたWeb3戦略の策定
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Accelerator - Large card (2 cols) */}
          <ScrollReveal animation="fade" delay={250} className="md:col-span-2">
            <div className="h-full bg-gradient-to-r from-blue-600 via-cyan-500 to-cyan-300 rounded-3xl p-8 overflow-hidden relative">
              {/* Background image */}
              <div className="absolute right-[-3%] top-[-20%] w-[80%] h-[140%] opacity-80">
                <Image
                  src="/images/service-accelerator.png"
                  alt="Accelerator"
                  fill
                  className="object-contain object-right-bottom"
                />
              </div>
              {/* Content */}
              <div className="relative z-10 max-w-[50%]">
                <h3 className="text-2xl font-bold text-white mb-3">
                  アクセレーター
                </h3>
                <p className="text-sm text-white leading-relaxed mb-6">
                  海外プロジェクトとの連携、ローンチパッド活用、パートナーシップ支援を通じてプロジェクトの急成長をサポート
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-3 py-1.5 bg-white/20 text-white rounded-full backdrop-blur-sm">グローバル展開</span>
                  <span className="text-xs px-3 py-1.5 bg-white/20 text-white rounded-full backdrop-blur-sm">資金調達</span>
                  <span className="text-xs px-3 py-1.5 bg-white/20 text-white rounded-full backdrop-blur-sm">パートナーシップ</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom text */}
        <ScrollReveal animation="fade" delay={300} className="mt-8 text-center">
          <p className="text-sm text-zinc-400">+ and much more +</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
