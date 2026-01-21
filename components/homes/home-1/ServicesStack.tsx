import Link from "next/link";
import Image from "next/image";

import StackCards from "@/components/animation/StackCards";
import RevealText from "@/components/animation/RevealText";

export default function ServicesStack() {
  return (
    <div id="marketing-support" className="mxd-section padding-stacked-section">
      <h2 className="reveal-type reveal-type anim-uni-in-up text-center font-ja">マーケティングサポート</h2>
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
                    Web3市場特有の課題とチャンスに合わせた専門的な戦略の企画立案を提供します。<br />
                    市場でのポジショニングやトークノミクスの設計から、市場参入（GTM）戦略やエコシステムの成長に至るまで、私たちのチームはプロジェクトがWeb3業界の複雑さを乗り越えられるよう支援します。
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
                    <span className="font-ja">インフルエンサーマネジメント</span>
                  </h3>
                </div>
                <div className="mxd-services-stack__info width-60">
                  <p className="t-small-mobile t-opposite">
                    世界中のソーシャルメディアやコミュニティ内での拡散と口コミによる推薦を促進することで、オーガニックにブランドの存在感を高め、リーチを広げ、売上を向上させます。
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
                    X<span className="font-ja">(ツイッター)サービス</span>
                  </h3>
                </div>
                <div className="mxd-services-stack__info width-60">
                  <p className="t-small-mobile">
                    戦略的なコンテンツプランニングと高品質な画像、動画制作から実践的なX（Twitter）管理まで、顧客獲得、ブランド認知、プロジェクト認知を促進する包括的なマーケティングソリューションを提供します。<br />
                    ツイッターアカウントの運用管理も行っています。
                  </p>
                </div>
                <div className="mxd-services-stack__info width-60">
                  <h6>詳細</h6>
                  <p className="t-small-mobile">
                    コンテンツ（画像、動画）企画・作成・戦略立案<br />
                    フォロワー獲得施策<br />
                    エンゲージメント向上施策<br />
                    投稿スケジュール管理<br />
                    X（Twitter）スペースの実施・発信
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
                    Discord<span className="font-ja">サービス</span>
                  </h3>
                </div>
                <div className="mxd-services-stack__info width-60">
                  <p className="t-small-mobile">
                    Web3で最も重要なコミュニティ構築ツール、Discordのデザイン設計から戦略立案、運用まで包括的にご支援します。
                  </p>
                </div>
                <div className="mxd-services-stack__info width-60">
                  <h6 className="t-small-mobil">詳細</h6>
                  <ul className="list-decoration-dot">
                    <li className="t-small-mobil">サーバー全体のセットアップとカスタムBotの制作</li>
                    <li className="t-small-mobil">DiscordとTelegramのセキュリティ監査</li>
                    <li className="t-small-mobil">コミュニティ管理（日英中を中心に複数言語に対応、コミュニティ・マネージャーやモデレーターなどの人員用意と配置）</li>
                    <li className="t-small-mobil">ツール活用に関するベストプラクティス提供</li> 
                    <li className="t-small-mobil">コミュニティ内での発信に関するコピーライティング</li> 
                  </ul>
                  <p className="t-small-mobile">
                    ※モデレーターはチャットでユーザーの質問に答え、メンバーを関連チャンネルに誘導しエンゲージメント向上をサポート。コミュニティ・マネージャーは、コミュニティ内でのイベントを企画運営し、コミュニティにプロジェクトの最新情報を提供します
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
                    世界中の企業/ブランドとの連携
                  </h3>
                </div>
                <div className="mxd-services-stack__info width-60">
                  <p className="t-small-mobile t-opposite">
                    私たちの提供するパートナーシップとコラボレーション戦略では、世界的な企業やブランドとの連携を可能にし、大規模なユーザーオンボーディングを促進します。 グローバルトップクラスのコミュニティからニッチなコミュニティまで広範なネットワークと、世界中のWeb2、Web3プロジェクトとのコラボレーションをご支援します。
                  </p>
                </div>
                <div className="mxd-services-stack__info width-60">
                  <p className="t-small-mobile t-opposite">
                    すべてのコラボレーションは、AlphabotやPremintなどのWeb3特有のツール提供会社と連携することや、OpenSea、MagicEdenなどNFT取引高でトップシェアを誇るサービスなどのグローバル企業と連携し行います
                  </p>
                  <p className="t-small-mobile t-opposite">
                    これらのコラボレーションにより、DiscordやXを迅速かつ自然に成長させながら、商品販売のためのユーザーデータを収集し、オウンドネットワークに働きかけ、Web3市場の圧倒的なグローバルオーディエンスに情報を広めることができます。<br />
                    また、コラボレーションにおける海外企業との交渉やSNSでプロモーションするためのコンテンツについても日本語と英語など多言語でのサポートやレビューも可能です。
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
