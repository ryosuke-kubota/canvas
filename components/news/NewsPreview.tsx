import Link from "next/link";
import Image from "next/image";
import { NewsArticle } from "@/lib/microcms";
import RevealText from "../animation/RevealText";
import AnimatedButton from "../animation/AnimatedButton";

type Props = {
  articles: NewsArticle[];
  title?: string;
  desc?: string;
};

const defaultDesc = "Canvasの最新情報をお届けします。";

export default function NewsPreview({
  articles,
  title = "ニュース",
  desc = defaultDesc,
}: Props) {
  return (
    <div id="news" className="mxd-section padding-blog">
      <div className="mxd-container grid-container">
        {/* Block - Section Title Start */}
        <div className="mxd-block">
          <div className="mxd-section-title pre-grid">
            <div className="container-fluid p-0">
              <div className="row g-0 align-items-center">
                <div className="col-12 col-xl-5 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrtitle">
                    <RevealText as="h2" className="reveal-type anim-uni-in-up">
                      {title}
                    </RevealText>
                  </div>
                </div>
                <div className="col-12 col-xl-4 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrdescr">
                    <p className="anim-uni-in-up font-ja">{desc}</p>
                  </div>
                </div>
                <div className="col-12 col-xl-3 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrcontrols anim-uni-in-up">
                    <AnimatedButton
                      text="ニュース一覧"
                      className="btn btn-anim btn-default btn-outline slide-right-up"
                      href="/news"
                    >
                      <i className="ph-bold ph-arrow-up-right" />
                    </AnimatedButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Block - Section Title End */}

        {/* Block - News Preview Cards Start */}
        <div className="mxd-block">
          <div className="mxd-blog-preview">
            <div className="container-fluid p-0">
              <div className="row g-0">
                {articles.length === 0 ? (
                  <div className="col-12 mxd-grid-item">
                    <p className="font-ja" style={{ textAlign: "center", padding: "2rem 0", opacity: 0.7 }}>
                      現在、ニュース記事はありません。
                    </p>
                  </div>
                ) : (
                  articles.slice(0, 3).map((article) => (
                    <div
                      key={article.id}
                      className="col-12 col-xl-4 mxd-blog-preview__item mxd-grid-item animate-card-3"
                    >
                      <Link
                        className="mxd-blog-preview__media"
                        href={`/news/${article.id}`}
                      >
                        {article.thumbnail ? (
                          <div
                            className="mxd-blog-preview__image parallax-img-small"
                            style={{
                              backgroundImage: `url(${article.thumbnail.url})`,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                            }}
                          />
                        ) : (
                          <div
                            className="mxd-blog-preview__image"
                            style={{
                              backgroundColor: "var(--color-base-tint)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <span style={{ opacity: 0.5 }}>No Image</span>
                          </div>
                        )}
                        <div className="mxd-preview-hover">
                          <i className="mxd-preview-hover__icon">
                            <Image
                              alt="Eye Icon"
                              src="/img/icons/icon-eye.svg"
                              width={38}
                              height={21}
                            />
                          </i>
                        </div>
                        {article.tags && article.tags.length > 0 && (
                          <div className="mxd-blog-preview__tags">
                            {article.tags.slice(0, 2).map((t) => (
                              <span
                                key={t.tag}
                                className="tag tag-default tag-permanent font-ja"
                              >
                                {t.tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </Link>

                      <div className="mxd-blog-preview__data">
                        <Link
                          className="anim-uni-in-up font-ja"
                          href={`/news/${article.id}`}
                        >
                          {article.title}
                        </Link>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Block - News Preview Cards End */}
      </div>
    </div>
  );
}
