"use client";

import Footer2 from "@/components/footers/Footer2";

export default function TermsPage() {
  return (
    <>
      <style>{`
        .terms-page-wrapper {
          max-width: 100vw;
          overflow-x: hidden;
        }
        .terms-page-wrapper .mxd-section {
          padding-left: 1rem;
          padding-right: 1rem;
          box-sizing: border-box;
          min-width: 0 !important;
        }
        .terms-page-wrapper .mxd-container,
        .terms-page-wrapper .mxd-block,
        .terms-page-wrapper .container-fluid,
        .terms-page-wrapper .row,
        .terms-page-wrapper .col-12,
        .terms-page-wrapper .mxd-block__content,
        .terms-page-wrapper .mxd-block__inner-headline,
        .terms-page-wrapper .terms-content,
        .terms-page-wrapper article {
          min-width: 0 !important;
          max-width: 100% !important;
          box-sizing: border-box;
        }
        .terms-page-wrapper p,
        .terms-page-wrapper li,
        .terms-page-wrapper h1,
        .terms-page-wrapper h2 {
          word-break: break-word;
          overflow-wrap: break-word;
          min-width: 0 !important;
        }
        @media (min-width: 768px) {
          .terms-page-wrapper .mxd-section {
            padding-left: 0;
            padding-right: 0;
          }
        }
        .terms-title {
          font-size: 3.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }
        .terms-description {
          font-size: 1.5rem;
          line-height: 1.6;
          opacity: 0.8;
        }
        .terms-date {
          font-size: 1.2rem;
          opacity: 0.5;
          margin-top: 1rem;
        }
        .terms-content {
          font-size: 1.2rem;
          line-height: 1.8;
        }
        .terms-section {
          margin-bottom: 1.5rem;
          max-width: 100% !important;
          min-width: 0 !important;
          width: 100% !important;
          box-sizing: border-box;
        }
        .terms-section h2 {
          font-size: 1.8rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          max-width: 100% !important;
        }
        .terms-section p,
        .terms-section li {
          opacity: 0.8;
          font-size: 1.2rem;
          max-width: 100% !important;
        }
        .terms-section ul {
          list-style: disc;
          padding-left: 1.25rem;
          margin-top: 0.5rem;
          max-width: 100% !important;
          min-width: 0 !important;
        }
        .terms-section li {
          margin-bottom: 0.25rem;
          max-width: 100% !important;
          min-width: 0 !important;
        }
        .terms-footer {
          margin-top: 2rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        .terms-footer p {
          opacity: 0.5;
          margin-bottom: 0.25rem;
          font-size: 1.2rem;
        }

        @media (min-width: 768px) {
          .terms-title {
            font-size: 3.5rem;
          }
          .terms-description {
            font-size: 1.25rem;
          }
          .terms-date {
            font-size: 1.25rem;
          }
          .terms-content {
            font-size: 1.25rem;
          }
          .terms-section {
            margin-bottom: 2rem;
          }
          .terms-section h2 {
            font-size: 1.5rem;
            margin-bottom: 0.75rem;
          }
        }

        @media (min-width: 1024px) {
          .terms-title {
            font-size: 5.5rem;
          }
          .terms-description {
            font-size: 2rem;
          }
          .terms-date {
            font-size: 2rem;
          }
          .terms-content {
            font-size: 2rem;
          }
          .terms-section {
            margin-bottom: 3rem;
          }
          .terms-section h2 {
            font-size: 2.5rem;
          }
          .terms-section p,
          .terms-section li {
            font-size: 1.8rem;
          }
          .terms-footer p {
            font-size: 1.5rem;
          }
        }
      `}</style>

      <main id="mxd-page-content" className="mxd-page-content inner-page-content terms-page-wrapper">
        {/* Header Section */}
        <div className="mxd-section mxd-section-inner-headline padding-s-text-pre-block">
          <div className="mxd-container grid-container">
            <div className="mxd-block loading-wrap">
              <div className="container-fluid px-0">
                <div className="row gx-0">
                  <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                    <div className="mxd-block__name name-inner-headline loading__item">
                      <p className="mxd-point-subtitle">
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="20px"
                          height="20px"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill="currentColor"
                            d="M19.6,9.6c0,0-3,0-4,0c-0.4,0-1.8-0.2-1.8-0.2c-0.6-0.1-1.1-0.2-1.6-0.6c-0.5-0.3-0.9-0.8-1.2-1.2
                      c-0.3-0.4-0.4-0.9-0.5-1.4c0,0-0.1-1.1-0.2-1.5c-0.1-1.1,0-4.4,0-4.4C10.4,0.2,10.2,0,10,0S9.6,0.2,9.6,0.4c0,0,0.1,3.3,0,4.4
                      c0,0.4-0.2,1.5-0.2,1.5C9.4,6.7,9.2,7.2,9,7.6C8.7,8.1,8.2,8.5,7.8,8.9c-0.5,0.3-1,0.5-1.6,0.6c0,0-1.2,0.1-1.7,0.2
                      c-1,0.1-4.2,0-4.2,0C0.2,9.6,0,9.8,0,10c0,0.2,0.2,0.4,0.4,0.4c0,0,3.1-0.1,4.2,0c0.4,0,1.7,0.2,1.7,0.2c0.6,0.1,1.1,0.2,1.6,0.6
                      c0.4,0.3,0.8,0.7,1.1,1.1c0.3,0.5,0.5,1,0.6,1.6c0,0,0.1,1.3,0.2,1.7c0,1,0,4.1,0,4.1c0,0.2,0.2,0.4,0.4,0.4s0.4-0.2,0.4-0.4
                      c0,0,0-3.1,0-4.1c0-0.4,0.2-1.7,0.2-1.7c0.1-0.6,0.2-1.1,0.6-1.6c0.3-0.4,0.7-0.8,1.1-1.1c0.5-0.3,1-0.5,1.6-0.6
                      c0,0,1.3-0.1,1.8-0.2c1,0,4,0,4,0c0.2,0,0.4-0.2,0.4-0.4C20,9.8,19.8,9.6,19.6,9.6L19.6,9.6z"
                          />
                        </svg>
                        <span>Terms</span>
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                    <div className="mxd-block__content">
                      <div className="mxd-block__inner-headline">
                        <h1 className="terms-title">利用規約</h1>
                        <p className="terms-description">
                          株式会社Canvasが提供するサービスの利用条件を定めた規約です。
                          サービスをご利用いただく前に、必ずお読みください。
                        </p>
                        <p className="terms-date">最終更新日: 2025年1月1日</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Terms Content Section */}
        <div className="mxd-section mxd-section-inner-form padding-default">
          <div className="mxd-container grid-container">
            <div className="mxd-block">
              <div className="container-fluid px-0">
                <div className="row gx-0">
                  <div className="col-12 col-xl-2 mxd-grid-item no-margin" />
                  <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                    <div className="mxd-block__content">
                      <div className="terms-content">
                        <article>
                          <section className="terms-section">
                            <h2>第1条（適用）</h2>
                            <p>
                              本規約は、株式会社Canvas（以下「当社」といいます。）が提供するサービス（以下「本サービス」といいます。）の利用条件を定めるものです。ユーザーの皆様には、本規約に従って本サービスをご利用いただきます。
                            </p>
                          </section>

                          <section className="terms-section">
                            <h2>第2条（定義）</h2>
                            <p>
                              本規約において使用する用語の定義は、以下の通りとします。
                            </p>
                            <ul>
                              <li>「ユーザー」とは、本サービスを利用する個人または法人を指します。</li>
                              <li>「コンテンツ」とは、本サービス上で提供される文章、画像、動画等の情報を指します。</li>
                            </ul>
                          </section>

                          <section className="terms-section">
                            <h2>第3条（禁止事項）</h2>
                            <p>
                              ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。
                            </p>
                            <ul>
                              <li>法令または公序良俗に違反する行為</li>
                              <li>犯罪行為に関連する行為</li>
                              <li>当社のサービスの運営を妨害する行為</li>
                              <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
                              <li>不正アクセスをし、またはこれを試みる行為</li>
                              <li>その他、当社が不適切と判断する行為</li>
                            </ul>
                          </section>

                          <section className="terms-section">
                            <h2>第4条（本サービスの提供の停止等）</h2>
                            <p>
                              当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
                            </p>
                            <ul>
                              <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                              <li>地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
                              <li>その他、当社が本サービスの提供が困難と判断した場合</li>
                            </ul>
                          </section>

                          <section className="terms-section">
                            <h2>第5条（免責事項）</h2>
                            <p>
                              当社は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。
                            </p>
                          </section>

                          <section className="terms-section">
                            <h2>第6条（利用規約の変更）</h2>
                            <p>
                              当社は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。変更後の利用規約は、当社ウェブサイトに掲載したときから効力を生じるものとします。
                            </p>
                          </section>

                          <section className="terms-section">
                            <h2>第7条（準拠法・裁判管轄）</h2>
                            <p>
                              本規約の解釈にあたっては、日本法を準拠法とします。本サービスに関して紛争が生じた場合には、当社の本店所在地を管轄する裁判所を専属的合意管轄とします。
                            </p>
                          </section>

                          <footer className="terms-footer">
                            <p>以上</p>
                            <p>株式会社Canvas</p>
                          </footer>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer2 text="canvas" />
    </>
  );
}
