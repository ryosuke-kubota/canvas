"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import ParallaxSection from "./ParallaxSection";

// チームメンバーデータの型定義
interface TeamMember {
  id: string;
  name: string;
  avatar: string;
  twitter?: string;
}

// サンプルチームデータ（NFTアバター風）
const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "watacchi",
    avatar: "/team/avatar-1.png",
    twitter: "https://twitter.com/",
  },
  {
    id: "2",
    name: "Dr.Pudding",
    avatar: "/team/avatar-2.png",
    twitter: "https://twitter.com/",
  },
  {
    id: "3",
    name: "moto GA",
    avatar: "/team/avatar-3.png",
    twitter: "https://twitter.com/",
  },
  {
    id: "4",
    name: "CryptoBaby",
    avatar: "/team/avatar-4.png",
    twitter: "https://twitter.com/",
  },
  {
    id: "5",
    name: "shiroiro",
    avatar: "/team/avatar-5.png",
    twitter: "https://twitter.com/",
  },
];

// プレースホルダーアバター生成（ランダムなグラデーション）
const getPlaceholderGradient = (id: string) => {
  const gradients = [
    "from-pink-400 to-purple-500",
    "from-cyan-400 to-blue-500",
    "from-yellow-400 to-orange-500",
    "from-green-400 to-teal-500",
    "from-red-400 to-pink-500",
    "from-indigo-400 to-purple-500",
    "from-amber-400 to-red-500",
    "from-lime-400 to-green-500",
    "from-sky-400 to-indigo-500",
    "from-rose-400 to-red-500",
    "from-violet-400 to-purple-500",
  ];
  const index = parseInt(id) % gradients.length;
  return gradients[index];
};

// ネオンカラー取得
const getNeonColor = (id: string) => {
  const colors = [
    "rgba(236, 72, 153, 0.5)", // pink
    "rgba(6, 182, 212, 0.5)",  // cyan
    "rgba(251, 191, 36, 0.5)", // amber
    "rgba(34, 197, 94, 0.5)",  // green
    "rgba(239, 68, 68, 0.5)",  // red
    "rgba(99, 102, 241, 0.5)", // indigo
    "rgba(245, 158, 11, 0.5)", // amber
    "rgba(132, 204, 22, 0.5)", // lime
    "rgba(14, 165, 233, 0.5)", // sky
    "rgba(244, 63, 94, 0.5)",  // rose
    "rgba(139, 92, 246, 0.5)", // violet
  ];
  const index = parseInt(id) % colors.length;
  return colors[index];
};

export default function Team() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Semi-transparent background layer */}
      <div className="absolute inset-0 bg-white" />

      {/* Background decorative text with parallax - bottom left, slight angle */}
      <ParallaxSection
        speed={0.18}
        className="absolute bottom-16 -left-10 pointer-events-none select-none z-[1]"
        scale={{ from: 0.8, to: 1.15 }}
        opacity={{ from: 0.1, to: 0.4 }}
        rotate={{ from: 2, to: 12 }}
      >
        <p className="text-[100px] md:text-[160px] font-black text-zinc-200 whitespace-nowrap tracking-wider">
          Our Team
        </p>
      </ParallaxSection>

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Section Header */}
        <AnimatedSection className="mb-16 text-center">
          <p className="text-sm tracking-[0.3em] text-zinc-400 mb-3">TEAM</p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-800">
            チーム紹介
          </h2>
        </AnimatedSection>

        {/* Team Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {teamMembers.map((member, index) => (
            <AnimatedSection
              key={member.id}
              delay={index * 50}
              direction="scale"
            >
              <div className="group cursor-pointer">
                <div className="relative">
                  {/* Neon glow effect on hover */}
                  <div
                    className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"
                    style={{ backgroundColor: getNeonColor(member.id) }}
                  />

                  {/* Avatar */}
                  <div className="aspect-square rounded-2xl overflow-hidden bg-zinc-100 shadow-sm group-hover:shadow-xl transition-all duration-300 relative">
                    {/* Border glow */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/50 transition-colors duration-300 z-20 pointer-events-none" />

                    {member.avatar.startsWith("/team/") ? (
                      // Placeholder gradient avatar
                      <div
                        className={`w-full h-full bg-gradient-to-br ${getPlaceholderGradient(member.id)} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}
                      >
                        <span className="text-4xl font-bold text-white/80 group-hover:scale-110 transition-transform duration-300">
                          {member.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                    ) : (
                      <Image
                        src={member.avatar}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    )}

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  </div>

                  {/* Twitter/X Link */}
                  {member.twitter && (
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-2 right-2 w-7 h-7 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm hover:bg-white hover:scale-110 transition-all duration-300 z-30 group-hover:shadow-lg"
                    >
                      <svg
                        className="w-3.5 h-3.5 text-zinc-700"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                  )}
                </div>

                {/* Name */}
                <p className="mt-3 text-sm font-medium text-zinc-700 text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-cyan-500 transition-all duration-300">
                  {member.name}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
