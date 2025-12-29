"use client";

import Footer2 from "@/components/footers/Footer2";

export default function PrivacyPage() {
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
                        <span>Privacy</span>
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                    <div className="mxd-block__content">
                      <div className="mxd-block__inner-headline">
                        <h1 className="terms-title">プライバシーポリシー</h1>
                        <p className="terms-description">
                          株式会社Canvasは、お客様の個人情報保護の重要性を認識し、
                          適切な管理・保護に努めます。
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

        {/* Privacy Content Section */}
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
                            <h2>第1条（個人情報の定義）</h2>
                            <p>
                              本プライバシーポリシーにおいて「個人情報」とは、個人情報保護法に定める個人情報を指し、生存する個人に関する情報であって、氏名、生年月日、住所、電話番号、メールアドレス等により特定の個人を識別できるものをいいます。
                            </p>
                          </section>

                          <section className="terms-section">
                            <h2>第2条（個人情報の収集方法）</h2>
                            <p>
                              当社は、以下の方法により個人情報を収集することがあります。
                            </p>
                            <ul>
                              <li>お問い合わせフォームからのご連絡</li>
                              <li>サービスのお申し込み</li>
                              <li>メールマガジンの登録</li>
                              <li>その他、当社サービスのご利用</li>
                            </ul>
                          </section>

                          <section className="terms-section">
                            <h2>第3条（個人情報の利用目的）</h2>
                            <p>
                              当社が個人情報を収集・利用する目的は、以下のとおりです。
                            </p>
                            <ul>
                              <li>当社サービスの提供・運営のため</li>
                              <li>お問い合わせに対する回答のため</li>
                              <li>メールマガジン等の配信のため</li>
                              <li>サービスの改善・新サービス開発のため</li>
                              <li>利用規約に違反した場合の対応のため</li>
                            </ul>
                          </section>

                          <section className="terms-section">
                            <h2>第4条（個人情報の第三者提供）</h2>
                            <p>
                              当社は、以下の場合を除き、あらかじめお客様の同意を得ることなく、第三者に個人情報を提供することはありません。
                            </p>
                            <ul>
                              <li>法令に基づく場合</li>
                              <li>人の生命、身体または財産の保護のために必要な場合</li>
                              <li>公衆衛生の向上または児童の健全な育成の推進のために必要な場合</li>
                              <li>国の機関もしくは地方公共団体等が法令の定める事務を遂行するため協力する必要がある場合</li>
                            </ul>
                          </section>

                          <section className="terms-section">
                            <h2>第5条（個人情報の安全管理）</h2>
                            <p>
                              当社は、個人情報の正確性及び安全性を確保するため、セキュリティ対策をはじめとする安全対策を実施し、個人情報の漏洩、滅失、毀損の防止及び是正に努めます。
                            </p>
                          </section>

                          <section className="terms-section">
                            <h2>第6条（個人情報の開示・訂正・削除）</h2>
                            <p>
                              お客様は、当社が保有する自己の個人情報について、開示、訂正、削除を請求することができます。ご請求があった場合、当社は本人確認を行った上で、合理的な期間内に対応いたします。
                            </p>
                          </section>

                          <section className="terms-section">
                            <h2>第7条（Cookieの使用について）</h2>
                            <p>
                              当社のウェブサイトでは、サービス向上のためCookieを使用することがあります。Cookieはお客様のブラウザ設定により無効にすることも可能ですが、一部機能がご利用いただけなくなる場合があります。
                            </p>
                          </section>

                          <section className="terms-section">
                            <h2>第8条（プライバシーポリシーの変更）</h2>
                            <p>
                              当社は、必要に応じて本プライバシーポリシーを変更することがあります。変更後のプライバシーポリシーは、当社ウェブサイトに掲載したときから効力を生じるものとします。
                            </p>
                          </section>

                          <section className="terms-section">
                            <h2>第9条（お問い合わせ窓口）</h2>
                            <p>
                              本プライバシーポリシーに関するお問い合わせは、当社ウェブサイトのお問い合わせフォームよりご連絡ください。
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
