import AnimatedButton from "@/components/animation/AnimatedButton";
import RevealText from "@/components/animation/RevealText";
import Image from "next/image";

export default function Services() {
  return (
    <div className="mxd-section overflow-hidden padding-pre-title">
      <div className="mxd-container grid-container">
        {/* Block - Section Title Start */}
        <div className="mxd-block">
          <div className="mxd-section-title pre-grid">
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-12 col-xl-5 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrtitle">
                    <RevealText as="h2" className="reveal-type anim-uni-in-up font-ja">
                      サービス
                    </RevealText>
                  </div>
                </div>
                <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrdescr">
                    <p className="anim-uni-in-up font-ja">Canvasのサービス内容は大きく分けて4つのカテゴリーでサービスを提供しております。お気軽にお問い合わせください。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Block - Services Cards #02 Start */}
        <div className="mxd-block">
          <div className="mxd-services-cards-s">
            <div className="container-fluid px-0">
              <div className="row gx-0">
                {/* item */}
                <div className="col-12 col-xl-8 mxd-services-cards-s__item mxd-grid-item anim-uni-scale-in-right">
                  <div className="mxd-services-cards-s__inner justify-between bg-base-tint radius-l padding-4">
                    <div className="mxd-services-cards-s__title">
                      <h3 className="anim-uni-in-up font-ja">
                        マーケティング
                        <br />
                        サポート
                      </h3>
                    </div>
                    <div className="mxd-services-cards-s__info width-50">
                      <p className="anim-uni-in-up font-ja">
                        Web2/Web3マーケティング、ブランディング、KOL・インフルエンサーマーケティングを通じてプロジェクトの成長を支援します
                      </p>
                    </div>
                    <div className="mxd-services-cards-s__image image-right">
                      <Image
                        alt="Illustration"
                        src="/img/services/marketing-support.png"
                        width={910}
                        height={1200}
                      />
                    </div>
                  </div>
                </div>
                {/* item */}
                <div className="col-12 col-xl-4 mxd-services-cards-s__item mxd-grid-item anim-uni-scale-in-left">
                  <div className="mxd-services-cards-s__inner justify-end bg-accent radius-l padding-4">
                    <div className="mxd-services-cards-s__title">
                      <h3 className="opposite anim-uni-in-up font-ja">ウェブ開発</h3>
                    </div>
                    <div className="mxd-services-cards-s__info">
                      <p className="t-opposite anim-uni-in-up font-ja">
                        ウェブサイト制作、業務改善システム開発、Web3関連の導入開発
                      </p>
                    </div>
                    <div className="mxd-services-cards-s__image image-top-right">
                      <Image
                        className="mxd-move"
                        alt="Illustration"
                        src="/img/services/development.png"
                        width={1200}
                        height={1200}
                      />
                    </div>
                  </div>
                </div>
                {/* item */}
                <div className="col-12 col-xl-6 mxd-services-cards-s__item mxd-grid-item anim-uni-scale-in-right">
                  <div className="mxd-services-cards-s__inner bg-additional radius-l padding-4">
                    <div className="mxd-services-cards-s__title">
                      <h3 className="anim-uni-in-up font-ja">アドバイザリーと戦略企画立案</h3>
                    </div>
                    <div className="mxd-services-cards-s__info">
                      <p className="t-bright anim-uni-in-up font-ja">
                        市場環境とプロジェクトの目標に基づいたWeb3戦略の策定
                      </p>
                    </div>
                    <div className="mxd-services-cards-s__image image-bottom">
                      <Image
                        className="mxd-rotate-slow"
                        alt="Illustration"
                        src="/img/services/strategy.png"
                        width={1200}
                        height={1200}
                      />
                    </div>
                  </div>
                </div>
                {/* item */}
                <div className="col-12 col-xl-6 mxd-services-cards-s__item mxd-grid-item anim-uni-scale-in">
                  <div className="mxd-services-cards-s__inner bg-base-opp radius-l padding-4">
                    <div className="mxd-services-cards-s__title">
                      <h3 className="opposite anim-uni-in-up font-ja">アクセラレーター</h3>
                    </div>
                    <div className="mxd-services-cards-s__info">
                      <p className="t-opposite anim-uni-in-up">
                        海外プロジェクトとの連携、国内外のWeb3関連ローンチパッドの活用、パートナーシップ、コラボレーション締結管理と支援
                      </p>
                    </div>
                    <div className="mxd-services-cards-s__image image-bottom image-bottom-2">
                      <Image
                        alt="Illustration"
                        src="/img/services/accelerator.png"
                        width={891}
                        height={1200}
                      />
                    </div>
                  </div>
                </div>
                {/* item */}
                {/* <div className="col-12 col-xl-4 mxd-services-cards-s__item mxd-grid-item anim-uni-scale-in-left">
                  <div className="mxd-services-cards-s__inner justify-end bg-base-tint radius-l padding-4">
                    <div className="mxd-services-cards-s__title">
                      <h3 className="anim-uni-in-up">Gaming</h3>
                    </div>
                    <div className="mxd-services-cards-s__info">
                      <div className="mxd-services-cards-s__tags">
                        <span className="tag tag-default tag-outline anim-uni-in-up">
                          E-Commerce
                        </span>
                        <span className="tag tag-default tag-outline anim-uni-in-up">
                          Maintenance
                        </span>
                        <span className="tag tag-default tag-outline anim-uni-in-up">
                          Support
                        </span>
                      </div>
                      <p className="anim-uni-in-up">
                        Immersive experiences, multiplayer platforms, and game
                        engine development.
                      </p>
                    </div>
                    <div className="mxd-services-cards-s__image image-top">
                      <Image
                        alt="Illustration"
                        src="/img/illustrations/1200x1200_service-image-05.webp"
                        width={1200}
                        height={996}
                      />
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* Block - Services Cards #02 End */}
      </div>
    </div>
  );
}
