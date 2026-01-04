import NewsList from "@/components/news/NewsList";
import Cta from "@/components/common/Cta";
import Footer2 from "@/components/footers/Footer2";
import { Metadata } from "next";
import { getNewsList } from "@/lib/microcms";

export const metadata: Metadata = {
  title: "News | Canvas - Web3コンサルティング",
  description: "株式会社Canvasの最新ニュース・お知らせ",
};

export default async function NewsPage() {
  const { contents: articles, totalCount } = await getNewsList(10);

  return (
    <>
      <main
        id="mxd-page-content"
        className="mxd-page-content inner-page-content news-page-content"
      >
        <NewsList articles={articles} totalCount={totalCount} />
        <Cta />
      </main>
      <Footer2 text="canvas" />
    </>
  );
}
