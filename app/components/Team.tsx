"use client";

import Image from "next/image";

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
  {
    id: "6",
    name: "neko",
    avatar: "/team/avatar-6.png",
    twitter: "https://twitter.com/",
  },
  {
    id: "7",
    name: "CryptoHoney",
    avatar: "/team/avatar-7.png",
    twitter: "https://twitter.com/",
  },
  {
    id: "8",
    name: "kenjii",
    avatar: "/team/avatar-8.png",
    twitter: "https://twitter.com/",
  },
  {
    id: "9",
    name: "kiyo",
    avatar: "/team/avatar-9.png",
  },
  {
    id: "10",
    name: "gunugunu",
    avatar: "/team/avatar-10.png",
    twitter: "https://twitter.com/",
  },
  {
    id: "11",
    name: "tacrew",
    avatar: "/team/avatar-11.png",
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

export default function Team() {
  return (
    <section className="py-24 px-6 relative">
      {/* Semi-transparent background layer */}
      <div className="absolute inset-0 bg-white" />
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="text-sm tracking-[0.3em] text-zinc-400 mb-3">TEAM</p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-800">
            チーム紹介
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {teamMembers.map((member) => (
            <div key={member.id} className="group">
              <div className="relative">
                {/* Avatar */}
                <div className="aspect-square rounded-2xl overflow-hidden bg-zinc-100 shadow-sm group-hover:shadow-md transition-shadow">
                  {member.avatar.startsWith("/team/") ? (
                    // Placeholder gradient avatar
                    <div
                      className={`w-full h-full bg-gradient-to-br ${getPlaceholderGradient(member.id)} flex items-center justify-center`}
                    >
                      <span className="text-4xl font-bold text-white/80">
                        {member.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  ) : (
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>

                {/* Twitter/X Link */}
                {member.twitter && (
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-2 right-2 w-7 h-7 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm hover:bg-white transition-colors"
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
              <p className="mt-3 text-sm font-medium text-zinc-700 text-center">
                {member.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
