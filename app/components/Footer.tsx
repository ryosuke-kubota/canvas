"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white relative z-10">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - CTA */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              あなたのブランドを
              <br />
              再構築する
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8 max-w-md">
              戦略アドバイザリー Web3市場特有の課題とチャンスに合わせた専門的な戦略の策定立案を提供します。市場でのポジショニングからトークノミクスの設計まで、市場参入（GTM）戦略やエコシステムの成長に至るまで、私たちのチームはプロジェクトがWeb3業界の複雑さを乗り越えられるよう支援します。
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 border border-white text-white font-medium hover:bg-white hover:text-zinc-900 transition-colors"
            >
              お問い合わせ
            </Link>
          </div>

          {/* Right Side - Image Grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="aspect-square bg-zinc-800 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center">
                <div className="w-12 h-12 border-2 border-zinc-600 rotate-45" />
              </div>
            </div>
            <div className="aspect-square bg-zinc-800 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center">
                <div className="text-zinc-600 text-4xl">◆</div>
              </div>
            </div>
            <div className="aspect-square bg-zinc-800 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-amber-900/30 to-zinc-800 flex items-center justify-center">
                <div className="w-10 h-10 bg-amber-600/50 rounded-full" />
              </div>
            </div>
            <div className="aspect-square bg-zinc-800 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center">
                <div className="text-zinc-600 text-2xl font-bold">NFT</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            {/* Logo & Legal Links */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <Link href="/terms" className="text-red-500 text-sm hover:underline">
                  利用規約
                </Link>
                <span className="text-zinc-600">+</span>
                <Link href="/privacy" className="text-zinc-400 text-sm hover:underline">
                  プライバシーポリシー
                </Link>
              </div>
              <p className="text-2xl md:text-3xl font-bold tracking-tight">
                Canvas Corp.
              </p>
            </div>

            {/* Navigation Links */}
            <div className="flex gap-16">
              <div>
                <h4 className="text-zinc-500 text-sm mb-4">Navigation</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="text-white text-sm hover:text-zinc-300 transition-colors">
                      ホーム
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-white text-sm hover:text-zinc-300 transition-colors">
                      サービス
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-white text-sm hover:text-zinc-300 transition-colors">
                      会社概要
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-zinc-500 text-sm mb-4">Contact</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/contact" className="text-white text-sm hover:text-zinc-300 transition-colors">
                      お問い合わせ
                    </Link>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-sm hover:text-zinc-300 transition-colors"
                    >
                      X / TWITTER
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <p className="text-zinc-500 text-xs text-center">
            © 2024 Canvas Corp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
