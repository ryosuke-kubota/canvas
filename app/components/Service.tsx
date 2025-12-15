"use client";

import AnimatedSection from "./AnimatedSection";
import Card3D from "./Card3D";

export default function Service() {
  return (
    <section className="py-24 px-6 relative">
      {/* Semi-transparent background layer */}
      <div className="absolute inset-0 bg-white" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <AnimatedSection className="mb-6">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-800 mb-4">
            サービス
          </h2>
          <p className="text-zinc-600 text-sm leading-relaxed">
            サービス内容 大きく分けて4つのカテゴリーでサービス
            <br />
            を提供しております。お気軽にお問い合わせください。
          </p>
        </AnimatedSection>

        {/* Decorative dot */}
        <AnimatedSection delay={100} className="flex justify-center mb-8">
          <div className="w-2 h-2 bg-zinc-400 rounded-full" />
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Marketing Support */}
          <AnimatedSection delay={200} direction="left">
            <Card3D glowColor="rgba(236, 72, 153, 0.3)">
              <div className="bg-zinc-200/80 rounded-2xl p-6 min-h-[280px] group/card hover:bg-zinc-100 transition-colors duration-300">
                <h3 className="text-xl font-bold text-zinc-800 mb-2 group-hover/card:text-transparent group-hover/card:bg-clip-text group-hover/card:bg-gradient-to-r group-hover/card:from-pink-500 group-hover/card:to-purple-500 transition-all duration-300">
                  マーケティングサポート
                </h3>
                <p className="text-xs text-zinc-600 mb-6">
                  Web2&Web3マーケティング、ブランディング、NFTプロジェクト、ゲーム、DApps、KOLsとインフルエンサーマーケティング
                </p>

                {/* Decorative UI elements */}
                <div className="space-y-4">
                  {/* Project card */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-pink-300 to-purple-400 rounded-lg group-hover/card:scale-110 transition-transform duration-300" />
                    <div>
                      <p className="text-xs text-zinc-500">New NFT Project</p>
                    </div>
                  </div>

                  {/* Social buttons */}
                  <div className="flex flex-wrap gap-2">
                    <div className="flex items-center gap-2 bg-white rounded-full px-3 py-1.5 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                      </svg>
                      <span className="text-xs font-medium">Telegram</span>
                    </div>
                    <div className="flex items-center gap-2 bg-zinc-800 text-white rounded-full px-3 py-1.5 hover:bg-zinc-700 hover:scale-105 transition-all duration-300">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 00-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 00-4.8 0c-.14-.34-.35-.76-.54-1.09-.01-.02-.04-.03-.07-.03-1.5.26-2.93.71-4.27 1.33-.01 0-.02.01-.03.02-2.72 4.07-3.47 8.03-3.1 11.95 0 .02.01.04.03.05 1.8 1.32 3.53 2.12 5.24 2.65.03.01.06 0 .07-.02.4-.55.76-1.13 1.07-1.74.02-.04 0-.08-.04-.09-.57-.22-1.11-.48-1.64-.78-.04-.02-.04-.08-.01-.11.11-.08.22-.17.33-.25.02-.02.05-.02.07-.01 3.44 1.57 7.15 1.57 10.55 0 .02-.01.05-.01.07.01.11.09.22.17.33.26.04.03.04.09-.01.11-.52.31-1.07.56-1.64.78-.04.01-.05.06-.04.09.32.61.68 1.19 1.07 1.74.03.01.06.02.09.01 1.72-.53 3.45-1.33 5.25-2.65.02-.01.03-.03.03-.05.44-4.53-.73-8.46-3.1-11.95-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.83 2.12-1.89 2.12z"/>
                      </svg>
                      <span className="text-xs font-medium">Discord</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white rounded-full px-3 py-1.5 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                      <span className="text-xs font-medium">X / Twitter</span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-sm w-fit hover:shadow-md transition-shadow duration-300">
                    <div className="w-6 h-6 bg-red-500 rounded flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"/>
                      </svg>
                    </div>
                    <span className="text-xs font-medium text-zinc-700">Monthly Statistics</span>
                  </div>
                </div>
              </div>
            </Card3D>
          </AnimatedSection>

          {/* Web Development */}
          <AnimatedSection delay={300} direction="right">
            <Card3D glowColor="rgba(6, 182, 212, 0.3)">
              <div className="bg-white rounded-2xl p-6 min-h-[280px] shadow-sm group/card hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-zinc-800 mb-2 group-hover/card:text-transparent group-hover/card:bg-clip-text group-hover/card:bg-gradient-to-r group-hover/card:from-cyan-500 group-hover/card:to-blue-500 transition-all duration-300">
                  ウェブ開発
                </h3>
                <p className="text-xs text-zinc-600 mb-6">
                  ウェブサイト制作、業務改善システム開発、Web3関連の導入開発
                </p>

                {/* Code editor mockup */}
                <div className="flex gap-4">
                  {/* File tree */}
                  <div className="bg-zinc-100 rounded-lg p-3 text-xs space-y-1 flex-shrink-0 group-hover/card:bg-zinc-50 transition-colors duration-300">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 border border-zinc-400 rounded" />
                      <span className="text-zinc-500">NewWebpage</span>
                    </div>
                    <div className="pl-4 space-y-1 text-zinc-400">
                      <div className="flex items-center gap-1">
                        <span className="text-zinc-300">▶</span> src
                      </div>
                      <div className="pl-4 space-y-1">
                        <div className="flex items-center gap-1">
                          <span className="text-zinc-300">▶</span> pages
                        </div>
                        <div className="pl-4 space-y-0.5 text-zinc-500">
                          <div>◇ main</div>
                          <div>◇ i404</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Code */}
                  <div className="bg-zinc-900 rounded-lg p-3 text-xs font-mono flex-1 overflow-hidden group-hover/card:shadow-lg transition-shadow duration-300">
                    <div className="space-y-0.5">
                      <div>
                        <span className="text-zinc-500">1</span>
                        <span className="text-pink-400 ml-2">&lt;div</span>
                        <span className="text-sky-300"> class=</span>
                        <span className="text-amber-300">&quot;future-web&quot;</span>
                        <span className="text-pink-400">&gt;</span>
                      </div>
                      <div>
                        <span className="text-zinc-500">2</span>
                        <span className="text-sky-300 ml-4">&lt;style&gt;</span>
                      </div>
                      <div>
                        <span className="text-zinc-500">3</span>
                        <span className="text-purple-400 ml-6">.innovation</span>
                        <span className="text-white"> {"{"}</span>
                      </div>
                      <div>
                        <span className="text-zinc-500">4</span>
                        <span className="text-sky-300 ml-8">transform:</span>
                        <span className="text-amber-300"> ideas =&gt; reality;</span>
                      </div>
                      <div>
                        <span className="text-zinc-500">5</span>
                        <span className="text-sky-300 ml-8">animation:</span>
                        <span className="text-amber-300"> infinite possibilities;</span>
                      </div>
                      <div>
                        <span className="text-zinc-500">6</span>
                        <span className="text-white ml-6">{"}"}</span>
                      </div>
                      <div>
                        <span className="text-zinc-500">7</span>
                        <span className="text-sky-300 ml-4">&lt;/style&gt;</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card3D>
          </AnimatedSection>

          {/* Advisory & Strategy */}
          <AnimatedSection delay={400} direction="left">
            <Card3D glowColor="rgba(251, 191, 36, 0.3)">
              <div className="bg-zinc-200/80 rounded-2xl p-6 min-h-[280px] group/card hover:bg-zinc-100 transition-colors duration-300">
                <h3 className="text-xl font-bold text-zinc-800 mb-2 group-hover/card:text-transparent group-hover/card:bg-clip-text group-hover/card:bg-gradient-to-r group-hover/card:from-amber-500 group-hover/card:to-red-500 transition-all duration-300">
                  アドバイザリーと戦略企画立案
                </h3>
                <p className="text-xs text-zinc-600 mb-6">
                  市場環境とプロジェクトの目標に基づいたWeb3戦略の策定
                </p>

                {/* Strategy diagram */}
                <div className="flex items-center justify-center gap-8 mt-8">
                  {/* Connected nodes */}
                  <div className="relative">
                    <div className="flex flex-col items-center gap-4">
                      <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center group-hover/card:shadow-md transition-shadow duration-300">
                        <div className="w-6 h-6 bg-amber-400 rounded group-hover/card:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center group-hover/card:shadow-md transition-shadow duration-300">
                        <svg className="w-6 h-6 text-zinc-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                        </svg>
                      </div>
                    </div>
                    {/* Connection line */}
                    <div className="absolute top-14 left-1/2 w-0.5 h-4 bg-zinc-300" />
                  </div>

                  {/* Arrow */}
                  <svg className="w-8 h-8 text-zinc-400 group-hover/card:text-amber-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>

                  {/* Result node */}
                  <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center shadow-lg group-hover/card:scale-110 group-hover/card:shadow-xl transition-all duration-300">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                    </svg>
                  </div>
                </div>

                {/* Files */}
                <div className="mt-6 flex items-center gap-2">
                  <div className="bg-white rounded-lg px-3 py-2 shadow-sm flex items-center gap-2 hover:shadow-md transition-shadow duration-300">
                    <svg className="w-4 h-4 text-zinc-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-xs text-zinc-600">3 files</span>
                  </div>
                  <div className="text-xs text-zinc-500 space-y-0.5">
                    <div>◇ source1</div>
                    <div>◇ automation</div>
                  </div>
                </div>
              </div>
            </Card3D>
          </AnimatedSection>

          {/* Accelerator */}
          <AnimatedSection delay={500} direction="right">
            <Card3D glowColor="rgba(239, 68, 68, 0.3)">
              <div className="bg-white rounded-2xl p-6 min-h-[280px] shadow-sm group/card hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-zinc-800 mb-2 group-hover/card:text-transparent group-hover/card:bg-clip-text group-hover/card:bg-gradient-to-r group-hover/card:from-amber-500 group-hover/card:to-red-500 transition-all duration-300">
                  アクセレーター
                </h3>
                <p className="text-xs text-zinc-600 mb-6">
                  海外プロジェクトとの連携、国内外のWeb3関連ローンチパッドの活用、パートナーシップ、コラボレーション締結管理と支援
                </p>

                {/* Accelerator visual */}
                <div className="flex items-center justify-center gap-3 mt-8">
                  {/* Speed indicators */}
                  <div className="flex flex-col gap-2">
                    <div className="w-20 h-2 bg-zinc-200 rounded-full overflow-hidden">
                      <div className="w-3/4 h-full bg-gradient-to-r from-amber-400 to-red-500 rounded-full group-hover/card:animate-pulse" />
                    </div>
                    <div className="w-20 h-2 bg-zinc-200 rounded-full overflow-hidden">
                      <div className="w-1/2 h-full bg-gradient-to-r from-amber-400 to-red-500 rounded-full group-hover/card:animate-pulse" />
                    </div>
                    <div className="w-20 h-2 bg-zinc-200 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-r from-amber-400 to-red-500 rounded-full group-hover/card:animate-pulse" />
                    </div>
                  </div>

                  {/* Rocket icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-red-500 rounded-2xl flex items-center justify-center shadow-lg group-hover/card:scale-110 group-hover/card:shadow-xl transition-all duration-300">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
                    </svg>
                  </div>

                  {/* Connection dots */}
                  <div className="flex flex-col gap-3">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-zinc-300 rounded-full group-hover/card:bg-zinc-400 transition-colors duration-300" />
                      <div className="w-3 h-3 bg-zinc-400 rounded-full group-hover/card:bg-zinc-500 transition-colors duration-300" />
                      <div className="w-3 h-3 bg-zinc-500 rounded-full group-hover/card:bg-zinc-600 transition-colors duration-300" />
                    </div>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-amber-400 rounded-full group-hover/card:scale-125 transition-transform duration-300" />
                      <div className="w-3 h-3 bg-red-400 rounded-full group-hover/card:scale-125 transition-transform duration-300 delay-75" />
                      <div className="w-3 h-3 bg-red-500 rounded-full group-hover/card:scale-125 transition-transform duration-300 delay-150" />
                    </div>
                  </div>
                </div>
              </div>
            </Card3D>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
