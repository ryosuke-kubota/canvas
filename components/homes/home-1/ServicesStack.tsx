import Link from "next/link";
import Image from "next/image";

import StackCards from "@/components/animation/StackCards";
import RevealText from "@/components/animation/RevealText";

export default function ServicesStack() {
  return (
    <div id="marketing-support" className="mxd-section padding-stacked-section">
      <h2 className="reveal-type reveal-type anim-uni-in-up text-center font-ja">マーケティング支援詳細</h2>
      <div className="mxd-container grid-container">
        {/* Block - Services/Features Stacking Cards Start */}
        <div className="mxd-block mxd-grid-item no-margin">
          <div className="content__block">
            <StackCards className="stack-wrapper in-content-stack">
              {/* services stack single item */}

              <div className="mxd-services-stack__inner justify-start bg-base-opp services-stack-1">
                <div className="mxd-services-stack__title width-60">
                  <h3 className="opposite font-ja">戦略アドバイザリー</h3>
                </div>
                <div className="mxd-services-stack__info width-60">
                  <p className="t-small-mobile t-opposite">
                    Web3業界特有の複雑な課題に対し、専門的な知見に基づいた解決策を提案します。<br />
                    市場での立ち位置の確立、トークンエコノミクスの設計、Go-To-Market（市場参入）戦略、エコシステムの拡大まで、プロジェクトを成功に導くための伴走型支援を行います。
                  </p>
                </div>
                <div className="services-stack__image">
                  <Image
                    className="service-img service-img-s"
                    alt="Service/Feature Image"
                    src="/img/marketing-support/strategy.webp"
                    width={800}
                    height={800}
                  />
                  <Image
                    className="service-img service-img-m"
                    alt="Service/Feature Image"
                    src="/img/marketing-support/strategy.webp"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>

              {/* services stack single item */}

              <div className="mxd-services-stack__inner justify-start bg-accent services-stack-2">
                <div className="mxd-services-stack__title width-60">
                  <h3 className="opposite">
                    KOL, 
                    <span className="font-ja">インフルエンサーマーケティング</span>
                  </h3>
                </div>
                <div className="mxd-services-stack__info width-60">
                  <p className="t-small-mobile t-opposite">
                    世界各国のSNSやコミュニティで影響力を持つ人物（KOL）を通じて、口コミや情報の拡散を促進。オーガニックな手法でブランド認知を広げ、リーチ数と売上の最大化を図ります。
                  </p>
                </div>
                <div className="services-stack__image">
                  <Image
                    className="service-img service-img-s"
                    alt="Service/Feature Image"
                    src="/img/marketing-support/kol.png"
                    width={800}
                    height={800}
                  />
                  <Image
                    className="service-img service-img-m"
                    alt="Service/Feature Image"
                    src="/img/marketing-support/kol.png"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>

              {/* services stack single item */}

              <div className="mxd-services-stack__inner radius-dark justify-start bg-base-tint services-stack-3">
                <div className="mxd-services-stack__title width-60">
                  <h3>
                    X(<span className="font-ja">旧</span>Twitter)<span className="font-ja">運用ソリューション</span>
                  </h3>
                </div>
                <div className="mxd-services-stack__info width-60">
                  <p className="t-small-mobile">
                    ターゲットに響くコンテンツ企画、高品質なクリエイティブ（動画・画像）制作、そしてアカウントの実践的な運用代行までをワンストップで提供。顧客獲得とブランド力向上に貢献します。
                  </p>
                </div>
                <div className="mxd-services-stack__info width-60">
                  <h6>詳細</h6>
                  <p className="t-small-mobile">
                    コンテンツ（画像・動画）の企画・制作・戦略設計<br />
                    フォロワー増加のための施策実行<br />
                    エンゲージメント（反応率）を高める施策<br />
                    投稿管理・スケジュール調整<br />
                    X Spaces（音声配信）の企画・運営
                  </p>
                </div>
                <div className="services-stack__image">
                  <Image
                    className="service-img service-img-s"
                    alt="Service/Feature Image"
                    src="/img/marketing-support/x-mobile.png"
                    width={800}
                    height={800}
                  />
                  <Image
                    className="service-img service-img-m"
                    alt="Service/Feature Image"
                    src="/img/marketing-support/x.jpg"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>

              {/* services stack single item */}

              <div className="mxd-services-stack__inner justify-start bg-additional services-stack-4">
                <div className="mxd-services-stack__title width-60">
                  <h3 className="">
                    Discord<span className="font-ja">コミュニティ運営</span>
                  </h3>
                </div>
                <div className="mxd-services-stack__info width-60">
                  <p className="t-small-mobile">
                    Web3プロジェクトの要となるDiscordのサーバー設計から戦略立案、日々の運営までをトータルサポートします。
                  </p>
                </div>
                <div className="mxd-services-stack__info width-60">
                  <h6 className="t-small-mobil">主な支援内容</h6>
                  <ul className="list-decoration-dot">
                    <li className="t-small-mobil">サーバー構築およびカスタムBotの開発</li>
                    <li className="t-small-mobil">Discord/Telegramのセキュリティ診断・対策</li>
                    <li className="t-small-mobil">多言語対応（日・英・中など）のコミュニティ管理および人材配置</li>
                    <li className="t-small-mobil">運営ツールの最適化ノウハウの提供</li> 
                    <li className="t-small-mobil">コミュニティ内での効果的なコピーライティング</li> 
                  </ul>
                  <p className="t-small-mobile">
                    ※モデレーターによるユーザー対応や誘導、マネージャーによるイベント企画を通じて、コミュニティの熱量を維持・向上させます。
                  </p>
                </div>
                <div className="services-stack__image">
                  <Image
                    className="service-img service-img-s"
                    alt="Service/Feature Image"
                    src="/img/marketing-support/discord-mobile.png"
                    width={800}
                    height={800}
                  />
                  <Image
                    className="service-img service-img-m"
                    alt="Service/Feature Image"
                    src="/img/marketing-support/discord.jpg"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>

              {/* services stack single item */}

              <div className="mxd-services-stack__inner justify-start bg-base-opp services-stack-5">
                <div className="mxd-services-stack__title width-60">
                  <h3 className="opposite">
                    グローバルパートナーシップ・コラボレーション
                  </h3>
                </div>
                <div className="mxd-services-stack__info width-60">
                  <p className="t-small-mobile t-opposite">
                    世界的な有力企業やブランドとの提携を戦略的に推進し、大規模なユーザー獲得を実現します。トップティアのコミュニティからニッチな層まで、幅広いネットワークを活用し、Web2・Web3問わず世界中のプロジェクトとのコラボレーションを支援します。
                  </p>
                </div>
                <div className="mxd-services-stack__info width-60">
                  <p className="t-small-mobile t-opposite">
                    AlphabotやPremintといったWeb3主要ツール、OpenSeaやMagicEdenなどの大手NFTマーケットプレイスとも連携し、効果的な施策を展開します。
                  </p>
                  <p className="t-small-mobile t-opposite">
                    これらの提携を通じて、DiscordやXのフォロワーを自然かつ急速に増加させると同時に、見込み顧客のデータを蓄積。自社ネットワークを活用し、Web3市場の巨大なグローバルユーザー層へ情報を届けます。<br />
                    また、海外企業との交渉代行や、多言語（日・英ほか）でのプロモーションコンテンツ作成・監修も可能です。
                  </p>
                </div>
                <div className="services-stack__image">
                  <Image
                    className="service-img service-img-s"
                    alt="Service/Feature Image"
                    src="/img/marketing-support/brand.jpg"
                    width={800}
                    height={800}
                  />
                  <Image
                    className="service-img service-img-m"
                    alt="Service/Feature Image"
                    src="/img/marketing-support/brand.jpg"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
            </StackCards>
          </div>
        </div>
        {/* Block - Services/Features Stacking Cards End */}
      </div>
    </div>
  );
}
