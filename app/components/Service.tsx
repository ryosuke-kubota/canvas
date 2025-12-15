"use client";

import ParallaxSection from "./ParallaxSection";
import ScrollReveal from "./ScrollReveal";

export default function Service() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background layer */}
      <div className="absolute inset-0 bg-white" />

      {/* Decorative floating shapes */}
      <ParallaxSection speed={0.3} className="absolute top-40 right-20 w-48 h-48 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-br from-pink-500 to-red-500 rounded-full blur-3xl" />
      </ParallaxSection>
      <ParallaxSection speed={-0.4} className="absolute bottom-40 left-20 w-64 h-64 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full blur-3xl" />
      </ParallaxSection>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <ScrollReveal animation="blur" className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-800 mb-4">
            サービス
          </h2>
          <p className="text-zinc-600 text-sm leading-relaxed max-w-md">
            大きく分けて4つのカテゴリーでサービスを提供しております。お気軽にお問い合わせください。
          </p>
        </ScrollReveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
          {/* Marketing Support - Large card (2 cols) */}
          <ScrollReveal animation="slide-up" delay={100} className="md:col-span-2">
            <div className="h-full bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 rounded-3xl p-8 text-white relative overflow-hidden group hover:shadow-2xl hover:shadow-pink-500/25 transition-all duration-500">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />

              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-xs font-medium text-white/60 uppercase tracking-wider">Featured</span>
                    <h3 className="text-2xl md:text-3xl font-bold mt-1">
                      マーケティングサポート
                    </h3>
                  </div>
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"/>
                    </svg>
                  </div>
                </div>

                <p className="text-sm text-white/80 leading-relaxed mb-6 max-w-lg">
                  Web2&Web3マーケティング、ブランディング、NFTプロジェクト、ゲーム、DApps、KOLsとインフルエンサーマーケティング
                </p>

                {/* Social icons row */}
                <div className="flex items-center gap-3 mt-auto">
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/30 transition-colors cursor-pointer">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                    <span className="text-xs font-medium">X / Twitter</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/30 transition-colors cursor-pointer">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 00-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 00-4.8 0c-.14-.34-.35-.76-.54-1.09-.01-.02-.04-.03-.07-.03-1.5.26-2.93.71-4.27 1.33-.01 0-.02.01-.03.02-2.72 4.07-3.47 8.03-3.1 11.95 0 .02.01.04.03.05 1.8 1.32 3.53 2.12 5.24 2.65.03.01.06 0 .07-.02.4-.55.76-1.13 1.07-1.74.02-.04 0-.08-.04-.09-.57-.22-1.11-.48-1.64-.78-.04-.02-.04-.08-.01-.11.11-.08.22-.17.33-.25.02-.02.05-.02.07-.01 3.44 1.57 7.15 1.57 10.55 0 .02-.01.05-.01.07.01.11.09.22.17.33.26.04.03.04.09-.01.11-.52.31-1.07.56-1.64.78-.04.01-.05.06-.04.09.32.61.68 1.19 1.07 1.74.03.01.06.02.09.01 1.72-.53 3.45-1.33 5.25-2.65.02-.01.03-.03.03-.05.44-4.53-.73-8.46-3.1-11.95-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.83 2.12-1.89 2.12z"/>
                    </svg>
                    <span className="text-xs font-medium">Discord</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/30 transition-colors cursor-pointer">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                    </svg>
                    <span className="text-xs font-medium">Telegram</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Web Development - Tall card (2 rows) */}
          <ScrollReveal animation="slide-left" delay={200} className="md:row-span-2">
            <div className="h-full bg-zinc-900 rounded-3xl p-6 text-white relative overflow-hidden group hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500">
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">ウェブ開発</h3>
                </div>

                <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                  ウェブサイト制作、業務改善システム開発、Web3関連の導入開発
                </p>

                {/* Code mockup */}
                <div className="flex-1 bg-zinc-800/50 rounded-xl p-4 font-mono text-xs overflow-hidden">
                  <div className="space-y-1">
                    <div>
                      <span className="text-zinc-500">1</span>
                      <span className="text-pink-400 ml-3">&lt;div</span>
                      <span className="text-sky-300"> class=</span>
                      <span className="text-amber-300">&quot;web3&quot;</span>
                      <span className="text-pink-400">&gt;</span>
                    </div>
                    <div>
                      <span className="text-zinc-500">2</span>
                      <span className="text-sky-300 ml-6">&lt;style&gt;</span>
                    </div>
                    <div>
                      <span className="text-zinc-500">3</span>
                      <span className="text-purple-400 ml-9">.innovation</span>
                      <span className="text-white"> {"{"}</span>
                    </div>
                    <div>
                      <span className="text-zinc-500">4</span>
                      <span className="text-sky-300 ml-12">transform:</span>
                      <span className="text-amber-300"> future;</span>
                    </div>
                    <div>
                      <span className="text-zinc-500">5</span>
                      <span className="text-sky-300 ml-12">scale:</span>
                      <span className="text-amber-300"> infinite;</span>
                    </div>
                    <div>
                      <span className="text-zinc-500">6</span>
                      <span className="text-white ml-9">{"}"}</span>
                    </div>
                    <div>
                      <span className="text-zinc-500">7</span>
                      <span className="text-sky-300 ml-6">&lt;/style&gt;</span>
                    </div>
                    <div>
                      <span className="text-zinc-500">8</span>
                      <span className="text-pink-400 ml-3">&lt;/div&gt;</span>
                    </div>
                  </div>
                </div>

                {/* Bottom stats */}
                <div className="flex items-center gap-4 mt-4 pt-4 border-t border-zinc-800">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-xs text-zinc-500">React / Next.js</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                    <span className="text-xs text-zinc-500">Web3</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Advisory & Strategy */}
          <ScrollReveal animation="slide-up" delay={300}>
            <div className="h-full bg-gradient-to-br from-amber-50 to-orange-100 rounded-3xl p-6 relative overflow-hidden group hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-500 border border-amber-200/50">
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-red-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-zinc-800">アドバイザリー</h3>
                </div>

                <p className="text-xs text-zinc-600 leading-relaxed mb-4">
                  市場環境とプロジェクトの目標に基づいたWeb3戦略の策定
                </p>

                {/* Visual elements */}
                <div className="flex-1 flex items-center justify-center">
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col gap-2">
                      <div className="w-8 h-8 bg-white rounded-lg shadow-sm flex items-center justify-center">
                        <div className="w-4 h-4 bg-amber-400 rounded" />
                      </div>
                      <div className="w-8 h-8 bg-white rounded-lg shadow-sm flex items-center justify-center">
                        <svg className="w-4 h-4 text-zinc-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                        </svg>
                      </div>
                    </div>
                    <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-red-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Accelerator */}
          <ScrollReveal animation="slide-up" delay={400}>
            <div className="h-full bg-white rounded-3xl p-6 relative overflow-hidden group hover:shadow-xl transition-all duration-500 border border-zinc-200">
              {/* Gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-red-500 to-pink-500" />

              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-red-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-zinc-800">アクセレーター</h3>
                </div>

                <p className="text-xs text-zinc-600 leading-relaxed mb-4">
                  海外プロジェクトとの連携、ローンチパッド活用、パートナーシップ支援
                </p>

                {/* Progress bars */}
                <div className="flex-1 flex flex-col justify-center gap-3">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-zinc-500">
                      <span>成長速度</span>
                      <span>95%</span>
                    </div>
                    <div className="h-2 bg-zinc-100 rounded-full overflow-hidden">
                      <div className="h-full w-[95%] bg-gradient-to-r from-amber-400 to-red-500 rounded-full group-hover:animate-pulse" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-zinc-500">
                      <span>パートナー</span>
                      <span>80%</span>
                    </div>
                    <div className="h-2 bg-zinc-100 rounded-full overflow-hidden">
                      <div className="h-full w-[80%] bg-gradient-to-r from-amber-400 to-red-500 rounded-full group-hover:animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
