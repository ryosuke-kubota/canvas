"use client";

export default function Marketing() {
  return (
    <section className="py-24 px-6 relative">
      {/* Semi-transparent background layer */}
      <div className="absolute inset-0 bg-white" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-800">
            マーケティングサポート
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* KOL Influencer Management */}
          <div className="bg-zinc-900 rounded-2xl p-6 text-white min-h-[320px] flex flex-col">
            <h3 className="text-lg font-bold mb-2">
              KOLインフルエンサーマ
              <br />
              ネジメント
            </h3>
            <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
              海外のKOL/インフルエンサーとのタイアップコミュニティでの反応を調査しながら最適なプロモーションを提供します
            </p>

            {/* Decorative network graphic */}
            <div className="flex-1 flex items-center justify-center">
              <div className="relative w-32 h-32">
                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                  <line x1="20" y1="30" x2="50" y2="50" stroke="#6366f1" strokeWidth="1" />
                  <line x1="50" y1="50" x2="80" y2="30" stroke="#6366f1" strokeWidth="1" />
                  <line x1="50" y1="50" x2="30" y2="80" stroke="#6366f1" strokeWidth="1" />
                  <line x1="50" y1="50" x2="70" y2="80" stroke="#6366f1" strokeWidth="1" />
                  <line x1="20" y1="30" x2="30" y2="80" stroke="#6366f1" strokeWidth="0.5" />
                  <line x1="80" y1="30" x2="70" y2="80" stroke="#6366f1" strokeWidth="0.5" />
                </svg>
                {/* Nodes */}
                <div className="absolute top-[25%] left-[15%] w-3 h-3 bg-indigo-500 rounded-full" />
                <div className="absolute top-[45%] left-[45%] w-4 h-4 bg-indigo-400 rounded-full" />
                <div className="absolute top-[25%] right-[15%] w-3 h-3 bg-indigo-500 rounded-full" />
                <div className="absolute bottom-[15%] left-[25%] w-2 h-2 bg-indigo-600 rounded-full" />
                <div className="absolute bottom-[15%] right-[25%] w-2 h-2 bg-indigo-600 rounded-full" />
              </div>
            </div>
          </div>

          {/* X (Twitter) Service */}
          <div className="bg-zinc-900 rounded-2xl p-6 text-white min-h-[320px] flex flex-col">
            {/* Impressions label */}
            <div className="text-xs text-zinc-500 mb-4">Impressions</div>

            {/* Chart graphic */}
            <div className="flex-1 flex items-end justify-center pb-4">
              <svg className="w-full h-24" viewBox="0 0 120 60">
                <path
                  d="M0 55 Q20 50 30 45 T50 35 T70 25 T90 30 T110 15 L120 10"
                  fill="none"
                  stroke="#a3e635"
                  strokeWidth="2"
                />
                <circle cx="110" cy="15" r="3" fill="#a3e635" />
              </svg>
            </div>

            <div className="mt-auto">
              <h3 className="text-lg font-bold mb-2">X（ツイッター） サービス</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                X(旧Twitter）のポスト作成から投稿代行、インプレッション増加や最適な投稿時間の分析など、ソーシャルメディアマーケティングをサポートします
              </p>
            </div>
          </div>

          {/* X Logo Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm min-h-[320px] flex flex-col">
            {/* X Logo */}
            <div className="flex-1 flex items-center justify-center">
              <svg className="w-24 h-24 text-zinc-900" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </div>

            <div className="mt-auto">
              <h3 className="text-lg font-bold text-zinc-800 mb-2">詳細</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                コンテンツ（画像、動画）企画・作成
                <br />
                フォロワー獲得戦略・施策
                <br />
                X運用のコンサルティング
                <br />
                X広告運用のサポート
              </p>
            </div>
          </div>

          {/* Discord Service */}
          <div className="bg-white rounded-2xl p-6 shadow-sm min-h-[320px] flex flex-col">
            {/* Discord Logo */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#5865F2] rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 00-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 00-4.8 0c-.14-.34-.35-.76-.54-1.09-.01-.02-.04-.03-.07-.03-1.5.26-2.93.71-4.27 1.33-.01 0-.02.01-.03.02-2.72 4.07-3.47 8.03-3.1 11.95 0 .02.01.04.03.05 1.8 1.32 3.53 2.12 5.24 2.65.03.01.06 0 .07-.02.4-.55.76-1.13 1.07-1.74.02-.04 0-.08-.04-.09-.57-.22-1.11-.48-1.64-.78-.04-.02-.04-.08-.01-.11.11-.08.22-.17.33-.25.02-.02.05-.02.07-.01 3.44 1.57 7.15 1.57 10.55 0 .02-.01.05-.01.07.01.11.09.22.17.33.26.04.03.04.09-.01.11-.52.31-1.07.56-1.64.78-.04.01-.05.06-.04.09.32.61.68 1.19 1.07 1.74.03.01.06.02.09.01 1.72-.53 3.45-1.33 5.25-2.65.02-.01.03-.03.03-.05.44-4.53-.73-8.46-3.1-11.95-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.83 2.12-1.89 2.12z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-zinc-800">Discordサービス</h3>
            </div>

            <p className="text-xs text-zinc-600 leading-relaxed mb-4">
              Discordサーバーの立ち上げからコミュニティマネジメントや活性化施策まで一貫してサポートいたします
            </p>

            <div className="mt-auto">
              <h4 className="text-sm font-bold text-zinc-800 mb-2">詳細</h4>
              <p className="text-xs text-zinc-600 leading-relaxed">
                サーバー設計・構築
                <br />
                Bot導入・カスタマイズ
                <br />
                モデレーター育成・管理
                <br />
                エンゲージメント施策
              </p>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {/* Additional Service Card 1 */}
          <div className="bg-zinc-900 rounded-2xl p-6 text-white min-h-[200px] flex flex-col">
            <h3 className="text-lg font-bold mb-2">コンテンツ制作</h3>
            <p className="text-xs text-zinc-400 leading-relaxed mb-4">
              SNS向けの画像・動画コンテンツを企画から制作まで一貫して対応
            </p>
            <div className="flex-1 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg" />
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg" />
                <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-red-500 rounded-lg" />
              </div>
            </div>
          </div>

          {/* Additional Service Card 2 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm min-h-[200px] flex flex-col">
            <h3 className="text-lg font-bold text-zinc-800 mb-2">データ分析</h3>
            <p className="text-xs text-zinc-600 leading-relaxed mb-4">
              マーケティング施策の効果測定とレポーティング
            </p>
            <div className="flex-1 flex items-center justify-center">
              {/* Chart bars */}
              <div className="flex items-end gap-2 h-16">
                <div className="w-4 h-8 bg-indigo-200 rounded-t" />
                <div className="w-4 h-12 bg-indigo-300 rounded-t" />
                <div className="w-4 h-10 bg-indigo-400 rounded-t" />
                <div className="w-4 h-16 bg-indigo-500 rounded-t" />
                <div className="w-4 h-14 bg-indigo-600 rounded-t" />
              </div>
            </div>
          </div>

          {/* Additional Service Card 3 - Code/Tech */}
          <div className="bg-zinc-900 rounded-2xl p-6 text-white min-h-[200px] flex flex-col">
            <h3 className="text-lg font-bold mb-2">自動化ツール</h3>
            <p className="text-xs text-zinc-400 leading-relaxed mb-4">
              マーケティング業務の効率化を支援するツールの導入・開発
            </p>
            <div className="flex-1 flex items-center justify-center">
              {/* Code snippet */}
              <div className="bg-zinc-800 rounded-lg p-3 text-xs font-mono w-full">
                <div className="text-green-400">// automation</div>
                <div className="text-blue-400">
                  const <span className="text-white">bot</span> = <span className="text-amber-400">new</span> Bot();
                </div>
                <div className="text-blue-400">
                  bot.<span className="text-white">run</span>();
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
