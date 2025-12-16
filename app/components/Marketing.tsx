"use client";

import HorizontalCarousel from "./HorizontalCarousel";
import ScrollReveal from "./ScrollReveal";
import ParallaxSection from "./ParallaxSection";

// マーケティングサービスデータ
const marketingServices = [
  {
    id: "kol",
    title: "KOLインフルエンサーマネジメント",
    description:
      "海外のKOL/インフルエンサーとのタイアップコミュニティでの反応を調査しながら最適なプロモーションを提供します",
    theme: "dark" as const,
    glowColor: "indigo",
    graphic: "network",
  },
  {
    id: "twitter",
    title: "X（ツイッター）サービス",
    description:
      "X(旧Twitter）のポスト作成から投稿代行、インプレッション増加や最適な投稿時間の分析など、ソーシャルメディアマーケティングをサポートします",
    theme: "dark" as const,
    glowColor: "lime",
    graphic: "chart",
  },
  {
    id: "twitter-detail",
    title: "X運用詳細",
    description:
      "コンテンツ（画像、動画）企画・作成\nフォロワー獲得戦略・施策\nX運用のコンサルティング\nX広告運用のサポート",
    theme: "light" as const,
    glowColor: "zinc",
    graphic: "x-logo",
  },
  {
    id: "discord",
    title: "Discordサービス",
    description:
      "Discordサーバーの立ち上げからコミュニティマネジメントや活性化施策まで一貫してサポートいたします",
    theme: "light" as const,
    glowColor: "discord",
    graphic: "discord",
  },
  {
    id: "content",
    title: "コンテンツ制作",
    description: "SNS向けの画像・動画コンテンツを企画から制作まで一貫して対応",
    theme: "dark" as const,
    glowColor: "pink",
    graphic: "blocks",
  },
  {
    id: "analytics",
    title: "データ分析",
    description: "マーケティング施策の効果測定とレポーティング",
    theme: "light" as const,
    glowColor: "indigo",
    graphic: "bars",
  },
  {
    id: "automation",
    title: "自動化ツール",
    description: "マーケティング業務の効率化を支援するツールの導入・開発",
    theme: "dark" as const,
    glowColor: "cyan",
    graphic: "code",
  },
];

// グラフィックコンポーネント
function NetworkGraphic() {
  return (
    <div className="relative w-32 h-32">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
      >
        <line x1="20" y1="30" x2="50" y2="50" stroke="#6366f1" strokeWidth="1" />
        <line x1="50" y1="50" x2="80" y2="30" stroke="#6366f1" strokeWidth="1" />
        <line x1="50" y1="50" x2="30" y2="80" stroke="#6366f1" strokeWidth="1" />
        <line x1="50" y1="50" x2="70" y2="80" stroke="#6366f1" strokeWidth="1" />
        <line x1="20" y1="30" x2="30" y2="80" stroke="#6366f1" strokeWidth="0.5" />
        <line x1="80" y1="30" x2="70" y2="80" stroke="#6366f1" strokeWidth="0.5" />
      </svg>
      <div className="absolute top-[25%] left-[15%] w-3 h-3 bg-indigo-500 rounded-full" />
      <div className="absolute top-[45%] left-[45%] w-4 h-4 bg-indigo-400 rounded-full" />
      <div className="absolute top-[25%] right-[15%] w-3 h-3 bg-indigo-500 rounded-full" />
      <div className="absolute bottom-[15%] left-[25%] w-2 h-2 bg-indigo-600 rounded-full" />
      <div className="absolute bottom-[15%] right-[25%] w-2 h-2 bg-indigo-600 rounded-full" />
    </div>
  );
}

function ChartGraphic() {
  return (
    <svg className="w-full h-24" viewBox="0 0 120 60">
      <path
        d="M0 55 Q20 50 30 45 T50 35 T70 25 T90 30 T110 15 L120 10"
        fill="none"
        stroke="#a3e635"
        strokeWidth="2"
      />
      <circle cx="110" cy="15" r="3" fill="#a3e635" />
    </svg>
  );
}

function XLogoGraphic() {
  return (
    <svg
      className="w-20 h-20 text-zinc-900"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function DiscordGraphic() {
  return (
    <div className="w-12 h-12 bg-[#5865F2] rounded-xl flex items-center justify-center">
      <svg
        className="w-7 h-7 text-white"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 00-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 00-4.8 0c-.14-.34-.35-.76-.54-1.09-.01-.02-.04-.03-.07-.03-1.5.26-2.93.71-4.27 1.33-.01 0-.02.01-.03.02-2.72 4.07-3.47 8.03-3.1 11.95 0 .02.01.04.03.05 1.8 1.32 3.53 2.12 5.24 2.65.03.01.06 0 .07-.02.4-.55.76-1.13 1.07-1.74.02-.04 0-.08-.04-.09-.57-.22-1.11-.48-1.64-.78-.04-.02-.04-.08-.01-.11.11-.08.22-.17.33-.25.02-.02.05-.02.07-.01 3.44 1.57 7.15 1.57 10.55 0 .02-.01.05-.01.07.01.11.09.22.17.33.26.04.03.04.09-.01.11-.52.31-1.07.56-1.64.78-.04.01-.05.06-.04.09.32.61.68 1.19 1.07 1.74.03.01.06.02.09.01 1.72-.53 3.45-1.33 5.25-2.65.02-.01.03-.03.03-.05.44-4.53-.73-8.46-3.1-11.95-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.83 2.12-1.89 2.12z" />
      </svg>
    </div>
  );
}

function BlocksGraphic() {
  return (
    <div className="grid grid-cols-3 gap-2">
      <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg" />
      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg" />
      <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-red-500 rounded-lg" />
    </div>
  );
}

function BarsGraphic() {
  return (
    <div className="flex items-end gap-2 h-16">
      <div className="w-4 h-8 bg-indigo-300 rounded-t" />
      <div className="w-4 h-12 bg-indigo-400 rounded-t" />
      <div className="w-4 h-10 bg-indigo-500 rounded-t" />
      <div className="w-4 h-16 bg-indigo-600 rounded-t" />
      <div className="w-4 h-14 bg-purple-600 rounded-t" />
    </div>
  );
}

function CodeGraphic() {
  return (
    <div className="bg-zinc-800 rounded-lg p-3 text-xs font-mono w-full">
      <div className="text-green-400">// automation</div>
      <div className="text-blue-400">
        const <span className="text-white">bot</span> ={" "}
        <span className="text-amber-400">new</span> Bot();
      </div>
      <div className="text-blue-400">
        bot.<span className="text-white">run</span>();
      </div>
    </div>
  );
}

function getGraphic(type: string) {
  switch (type) {
    case "network":
      return <NetworkGraphic />;
    case "chart":
      return <ChartGraphic />;
    case "x-logo":
      return <XLogoGraphic />;
    case "discord":
      return <DiscordGraphic />;
    case "blocks":
      return <BlocksGraphic />;
    case "bars":
      return <BarsGraphic />;
    case "code":
      return <CodeGraphic />;
    default:
      return null;
  }
}

export default function Marketing() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Dark background */}
      <div className="absolute inset-0 bg-zinc-900" />

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-purple-900/20" />

      {/* Background decorative elements with parallax */}
      <ParallaxSection
        speed={-0.15}
        className="absolute top-1/4 -left-20 w-96 h-96 opacity-20 pointer-events-none"
      >
        <div className="w-full h-full bg-gradient-to-br from-pink-500 to-purple-500 rounded-full blur-3xl" />
      </ParallaxSection>
      <ParallaxSection
        speed={0.2}
        className="absolute bottom-1/4 -right-20 w-80 h-80 opacity-20 pointer-events-none"
      >
        <div className="w-full h-full bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full blur-3xl" />
      </ParallaxSection>

      {/* Background decorative text with parallax */}
      <ParallaxSection
        speed={-0.1}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-[1]"
      >
        <p className="text-[120px] md:text-[200px] font-light italic text-zinc-800/50 whitespace-nowrap tracking-wider">
          Marketing
        </p>
      </ParallaxSection>

      <div className="relative z-10">
        {/* Section Header */}
        <ScrollReveal animation="blur" className="mb-12 text-center px-6">
          <p className="text-sm tracking-[0.3em] text-zinc-400 mb-3">
            マーケティング支援
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            MARKETING SUPPORT
          </h2>
        </ScrollReveal>

        {/* Carousel - Full width */}
        <ScrollReveal animation="slide-up" delay={200}>
          <HorizontalCarousel
            itemWidth={320}
            gap={24}
            showDots={true}
            showArrows={true}
            fullWidth={true}
            infinite={true}
          >
            {marketingServices.map((service) => (
              <div
                key={service.id}
                className={`h-[380px] rounded-2xl p-6 flex flex-col group relative overflow-hidden transition-all duration-300 ${
                  service.theme === "dark"
                    ? "bg-zinc-800 text-white hover:bg-zinc-700"
                    : "bg-white text-zinc-800 hover:shadow-xl"
                }`}
              >
                {/* Hover glow effect */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    service.glowColor === "indigo"
                      ? "bg-gradient-to-br from-indigo-500/10 to-purple-500/10"
                      : service.glowColor === "lime"
                      ? "bg-gradient-to-br from-lime-500/10 to-green-500/10"
                      : service.glowColor === "pink"
                      ? "bg-gradient-to-br from-pink-500/10 to-purple-500/10"
                      : service.glowColor === "cyan"
                      ? "bg-gradient-to-br from-cyan-500/10 to-blue-500/10"
                      : service.glowColor === "discord"
                      ? "bg-gradient-to-br from-[#5865F2]/10 to-[#5865F2]/20"
                      : "bg-gradient-to-br from-zinc-100/50 to-zinc-200/50"
                  }`}
                />

                {/* Title */}
                <h3
                  className={`text-lg font-bold mb-3 relative z-10 transition-colors duration-300 ${
                    service.theme === "dark"
                      ? "group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-cyan-400"
                      : service.glowColor === "discord"
                      ? "group-hover:text-[#5865F2]"
                      : "group-hover:text-indigo-600"
                  }`}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-sm leading-relaxed mb-4 relative z-10 whitespace-pre-line ${
                    service.theme === "dark" ? "text-zinc-400" : "text-zinc-600"
                  }`}
                >
                  {service.description}
                </p>

                {/* Graphic */}
                <div className="flex-1 flex items-center justify-center relative z-10">
                  {getGraphic(service.graphic)}
                </div>

                {/* Bottom accent line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    service.glowColor === "indigo"
                      ? "bg-gradient-to-r from-indigo-500 to-purple-500"
                      : service.glowColor === "lime"
                      ? "bg-gradient-to-r from-lime-500 to-green-500"
                      : service.glowColor === "pink"
                      ? "bg-gradient-to-r from-pink-500 to-purple-500"
                      : service.glowColor === "cyan"
                      ? "bg-gradient-to-r from-cyan-500 to-blue-500"
                      : service.glowColor === "discord"
                      ? "bg-[#5865F2]"
                      : "bg-gradient-to-r from-zinc-400 to-zinc-600"
                  }`}
                />
              </div>
            ))}
          </HorizontalCarousel>
        </ScrollReveal>

        {/* Service count indicator */}
        <ScrollReveal animation="fade" delay={400} className="mt-8 text-center px-6">
          <p className="text-sm text-zinc-500">
            <span className="text-white font-medium">{marketingServices.length}</span>{" "}
            services available
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
