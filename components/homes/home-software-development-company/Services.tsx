import AnimatedButton from "@/components/animation/AnimatedButton";
import RevealText from "@/components/animation/RevealText";
import Image from "next/image";

export default function Services() {
  return (
    <div id="services" className="mxd-section overflow-hidden padding-pre-title">
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
                    <p className="anim-uni-in-up font-ja">Canvasでは、お客様の課題に合わせて主に4つの領域でソリューションを提供しています。詳細はお気軽にご相談ください。</p>
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
                        支援
                      </h3>
                    </div>
                    <div className="mxd-services-cards-s__info width-50">
                      <p className="anim-uni-in-up font-ja">
                        Web2/Web3双方の視点を取り入れたブランディングや、KOL・インフルエンサーを活用した施策で、プロジェクトの知名度向上と成長を加速させます。
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
                      <h3 className="opposite anim-uni-in-up font-ja">Web開発</h3>
                    </div>
                    <div className="mxd-services-cards-s__info">
                      <p className="t-opposite anim-uni-in-up font-ja">
                        Webサイトの構築から社内業務システムの改善、さらにWeb3関連技術の実装・開発まで幅広く対応します。
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
                      <h3 className="anim-uni-in-up font-ja">戦略コンサルティング・企画</h3>
                    </div>
                    <div className="mxd-services-cards-s__info">
                      <p className="t-bright anim-uni-in-up font-ja">
                        市場動向の分析とプロジェクトのゴールを見据え、最適なWeb3参入戦略および事業計画を策定します。
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
                      <h3 className="opposite anim-uni-in-up font-ja">事業アクセラレーション</h3>
                    </div>
                    <div className="mxd-services-cards-s__info">
                      <p className="t-opposite anim-uni-in-up">
                        海外有力プロジェクトとの提携や、国内外のローンチパッド活用支援、パートナーシップ締結の交渉・管理など、事業拡大を多角的にサポートします。
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
