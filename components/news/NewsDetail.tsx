import Link from "next/link";
import Image from "next/image";
import { NewsArticle } from "@/lib/microcms";

type Props = {
  article: NewsArticle;
};

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function NewsDetail({ article }: Props) {
  return (
    <div className="mxd-section">
      <div className="mxd-container grid-container">
        <div className="mxd-article-area loading-wrap">
          {/* Article Container Start */}
          <div className="mxd-article-container mxd-grid-item no-margin">
            {/* Article Start */}
            <article className="mxd-article">
              {/* Article Headline Start */}
              <div className="mxd-article__headline">
                <div className="mxd-article__meta">
                  <div className="mxd-article__breadcrumbs loading__item">
                    <span>
                      <Link href="/">Home</Link>
                    </span>
                    <span>
                      <Link href="/news">News</Link>
                    </span>
                    <span className="current-item">{article.title}</span>
                  </div>
                  <div className="mxd-article__data loading__item">
                    <span className="meta-date">
                      {formatDate(article.publishedAt)}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        viewBox="0 0 20 20"
                      >
                        <path d="M19.6,9.6h-3.9c-.4,0-1.8-.2-1.8-.2-.6,0-1.1-.2-1.6-.6-.5-.3-.9-.8-1.2-1.2-.3-.4-.4-.9-.5-1.4,0,0,0-1.1-.2-1.5V.4c0-.2-.2-.4-.4-.4s-.4.2-.4.4v4.4c0,.4-.2,1.5-.2,1.5,0,.5-.2,1-.5,1.4-.3.5-.7.9-1.2,1.2s-1,.5-1.6.6c0,0-1.2,0-1.7.2H.4c-.2,0-.4.2-.4.4s.2.4.4.4h4.1c.4,0,1.7.2,1.7.2.6,0,1.1.2,1.6.6.4.3.8.7,1.1,1.1.3.5.5,1,.6,1.6,0,0,0,1.3.2,1.7v4.1c0,.2.2.4.4.4s.4-.2.4-.4v-4.1c0-.4.2-1.7.2-1.7,0-.6.2-1.1.6-1.6.3-.4.7-.8,1.1-1.1.5-.3,1-.5,1.6-.6,0,0,1.3,0,1.8-.2h3.9c.2,0,.4-.2.4-.4s-.2-.4-.4-.4h0Z" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="mxd-article__title loading__item">
                  <h1 className="h1-small font-ja">{article.title}</h1>
                </div>
                {article.tags && article.tags.length > 0 && (
                  <div className="mxd-article__tags loading__item">
                    {article.tags.map((t) => (
                      <span
                        key={t.tag}
                        className="tag tag-default tag-outline tag-link-outline"
                      >
                        {t.tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              {/* Article Headline End */}

              {/* Article Thumb Start */}
              {article.thumbnail && (
                <div className="mxd-article__thumb loading__fade">
                  <Image
                    alt={article.title}
                    src={article.thumbnail.url}
                    width={article.thumbnail.width || 1920}
                    height={article.thumbnail.height || 1280}
                    style={{ objectFit: "cover" }}
                  />
                </div>
              )}
              {/* Article Thumb End */}

              {/* Article Content Start */}
              <div className="mxd-article__content">
                <div
                  className="mxd-article__block font-ja"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              </div>
              {/* Article Content End */}
            </article>
            {/* Article End */}

            {/* Article Navigation Start */}
            <div className="mxd-article-navigation">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-12" style={{ textAlign: "center", padding: "2rem 0" }}>
                    <Link
                      href="/news"
                      className="btn btn-anim btn-default btn-outline"
                    >
                      <span className="font-ja">ニュース一覧に戻る</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Article Navigation End */}
          </div>
          {/* Article Container End */}
        </div>
      </div>
    </div>
  );
}
