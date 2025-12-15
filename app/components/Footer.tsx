"use client";

import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

// Animated link component
const AnimatedLink = ({
  href,
  children,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) => {
  const className =
    "relative text-white text-sm group inline-block overflow-hidden";

  const content = (
    <>
      <span className="relative z-10 group-hover:text-cyan-400 transition-colors duration-300">
        {children}
      </span>
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
};

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white relative z-10 overflow-hidden">
      {/* Background gradient animation */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - CTA */}
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              あなたのブランドを
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">
                再構築する
              </span>
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8 max-w-md">
              戦略アドバイザリー Web3市場特有の課題とチャンスに合わせた専門的な戦略の策定立案を提供します。市場でのポジショニングからトークノミクスの設計まで、市場参入（GTM）戦略やエコシステムの成長に至るまで、私たちのチームはプロジェクトがWeb3業界の複雑さを乗り越えられるよう支援します。
            </p>
            <Link
              href="/contact"
              className="group relative inline-block px-8 py-4 font-medium overflow-hidden"
            >
              <span className="absolute inset-0 border border-white group-hover:border-transparent transition-colors duration-300" />
              <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                お問い合わせ
              </span>
            </Link>
          </AnimatedSection>

          {/* Right Side - Image Grid */}
          <AnimatedSection delay={200} direction="right">
            <div className="grid grid-cols-2 gap-3">
              {[
                { gradient: "from-pink-900/30 to-zinc-800", content: <div className="w-12 h-12 border-2 border-pink-500/50 rotate-45" /> },
                { gradient: "from-purple-900/30 to-zinc-800", content: <div className="text-purple-500/50 text-4xl">◆</div> },
                { gradient: "from-amber-900/30 to-zinc-800", content: <div className="w-10 h-10 bg-amber-500/50 rounded-full" /> },
                { gradient: "from-cyan-900/30 to-zinc-800", content: <div className="text-cyan-500/50 text-2xl font-bold">NFT</div> },
              ].map((item, index) => (
                <div
                  key={index}
                  className="aspect-square bg-zinc-800 rounded-lg overflow-hidden group cursor-pointer"
                >
                  <div className={`w-full h-full bg-gradient-to-br ${item.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                    {item.content}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-zinc-800 relative">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            {/* Logo & Legal Links */}
            <AnimatedSection delay={100}>
              <div className="flex items-center gap-4 mb-4">
                <Link
                  href="/terms"
                  className="text-pink-500 text-sm hover:text-pink-400 transition-colors"
                >
                  利用規約
                </Link>
                <span className="text-zinc-600">+</span>
                <Link
                  href="/privacy"
                  className="text-zinc-400 text-sm hover:text-white transition-colors"
                >
                  プライバシーポリシー
                </Link>
              </div>
              <p className="text-2xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                Canvas Corp.
              </p>
            </AnimatedSection>

            {/* Navigation Links */}
            <div className="flex gap-16">
              <AnimatedSection delay={200}>
                <h4 className="text-zinc-500 text-sm mb-4">Navigation</h4>
                <ul className="space-y-3">
                  <li>
                    <AnimatedLink href="/">ホーム</AnimatedLink>
                  </li>
                  <li>
                    <AnimatedLink href="/services">サービス</AnimatedLink>
                  </li>
                  <li>
                    <AnimatedLink href="/about">会社概要</AnimatedLink>
                  </li>
                </ul>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <h4 className="text-zinc-500 text-sm mb-4">Contact</h4>
                <ul className="space-y-3">
                  <li>
                    <AnimatedLink href="/contact">お問い合わせ</AnimatedLink>
                  </li>
                  <li>
                    <AnimatedLink href="https://twitter.com/" external>
                      X / TWITTER
                    </AnimatedLink>
                  </li>
                </ul>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-zinc-800 relative">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <p className="text-zinc-500 text-xs text-center">
            © 2024 Canvas Corp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
