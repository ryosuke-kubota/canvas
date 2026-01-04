import Link from "next/link";
import Image from "next/image";
import { NewsArticle } from "@/lib/microcms";

type Props = {
  articles: NewsArticle[];
  totalCount: number;
};

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function NewsList({ articles, totalCount }: Props) {
  return (
    <>
      {/* Section - Inner Page Headline Start */}
      <div className="mxd-section mxd-section-inner-headline padding-blog-default-pre-grid">
        <div className="mxd-container grid-container">
          <div className="mxd-block loading-wrap">
            <div className="container-fluid px-0">
              <div className="row gx-0">
                <div className="col-12" />
                <div className="col-12 col-xl-10 mxd-grid-item no-margin">
                  <div className="mxd-block__content">
                    <div className="mxd-block__inner-headline loading__item">
                      <h1 className="inner-headline__title headline-img-before headline-img-06 font-ja">
                        ニュース
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="col-12" />
              </div>

              <div className="row g-0">
                <div className="col-12" />
                <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                  <p className="loading__item font-ja" style={{ opacity: 0.7 }}>
                    Canvasの最新情報をお届けします（{totalCount}件）
                  </p>
                </div>
                <div className="col-12 col-xl-4 mxd-grid-item no-margin">
                  <div className="inner-headline__breadcrumbs loading__fade">
                    <div className="breadcrumbs__nav">
                      <span>
                        <Link href="/">Home</Link>
                      </span>
                      <span className="current-item">News</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section - Inner Page Headline End */}

      {/* Section - News List Start */}
      <div className="mxd-section padding-default">
        <div className="mxd-container grid-container">
          <div className="mxd-posts-area loading__fade">
            <div className="mxd-posts-container mxd-grid-item">
              {articles.length === 0 ? (
                <div className="mxd-block">
                  <p className="font-ja" style={{ textAlign: "center", padding: "4rem 0" }}>
                    現在、ニュース記事はありません。
                  </p>
                </div>
              ) : (
                articles.map((article, idx) => (
                  <article
                    key={article.id}
                    className={`mxd-post ${idx === 0 ? "post-featured" : "post-simple"} radius-m`}
                  >
                    <Link
                      className={idx === 0 ? "post-featured__thumb" : "post-simple__thumb radius-m"}
                      href={`/news/${article.id}`}
                    >
                      {article.thumbnail ? (
                        <Image
                          alt={article.title}
                          src={article.thumbnail.url}
                          width={idx === 0 ? 1400 : 800}
                          height={idx === 0 ? 900 : 680}
                          style={{ objectFit: "cover" }}
                        />
                      ) : (
                        <div
                          style={{
                            width: "100%",
                            height: idx === 0 ? 400 : 200,
                            backgroundColor: "var(--color-base-tint)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <span style={{ opacity: 0.5 }}>No Image</span>
                        </div>
                      )}
                    </Link>

                    {article.category && idx === 0 && (
                      <div className="post-featured__categories">
                        <span className="tag tag-default tag-outline-permanent tag-link-outline-premanent">
                          {article.category}
                        </span>
                      </div>
                    )}

                    <div className={idx === 0 ? "post-featured__content" : "post-simple__content"}>
                      <div className={idx === 0 ? "post-featured__meta" : "post-simple__descr"}>
                        <div className={idx === 0 ? "" : "post-simple__meta"}>
                          <span className="meta-date">{formatDate(article.publishedAt)}</span>
                        </div>

                        <div className={idx === 0 ? "" : "post-simple__title"}>
                          {idx === 0 ? (
                            <h3 className="post-featured__title">
                              <Link href={`/news/${article.id}`}>{article.title}</Link>
                            </h3>
                          ) : (
                            <h5>
                              <Link href={`/news/${article.id}`}>{article.title}</Link>
                            </h5>
                          )}
                        </div>
                      </div>

                      {idx === 0 && article.excerpt && (
                        <div className="post-featured__excerpt">
                          <p>{article.excerpt}</p>
                        </div>
                      )}
                    </div>
                  </article>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Section - News List End */}
    </>
  );
}
