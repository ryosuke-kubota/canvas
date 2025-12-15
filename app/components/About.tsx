"use client";

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
    <section className="py-24 px-6 relative">
      {/* Background layer */}
      <div className="absolute inset-0 bg-white" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-800">
            私たちについて
          </h2>
        </div>

        {/* Parallelogram Container */}
        <div className="relative">
          {/* Main parallelogram shape */}
          <div
            className="bg-zinc-900 overflow-hidden"
            style={{
              clipPath: "polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)",
            }}
          >
            {/* 3-column grid inside */}
            <div className="grid grid-cols-1 md:grid-cols-3">
              {aboutCards.map((card, index) => (
                <div
                  key={card.id}
                  className={`p-8 md:py-12 md:px-14 text-white relative ${
                    index === 0 ? "md:pl-20" : ""
                  } ${
                    index === aboutCards.length - 1 ? "md:pr-20" : ""
                  } ${
                    index < aboutCards.length - 1
                      ? "md:border-r md:border-zinc-700"
                      : ""
                  }`}
                >
                  {/* Number */}
                  <div className="mb-6">
                    <span className="text-5xl md:text-6xl font-bold text-zinc-700">
                      {card.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold mb-4 leading-tight">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {card.description}
                  </p>

                  {/* Decorative line */}
                  <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent md:hidden" />
                </div>
              ))}
            </div>
          </div>

          {/* Decorative accent lines */}
          <div
            className="absolute -top-2 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-amber-500 to-lime-500"
            style={{
              clipPath: "polygon(5% 0%, 100% 0%, 99.8% 100%, 4.8% 100%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
