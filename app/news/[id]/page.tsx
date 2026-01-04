import NewsDetail from "@/components/news/NewsDetail";
import Cta from "@/components/common/Cta";
import Footer2 from "@/components/footers/Footer2";
import { Metadata } from "next";
import { getNewsDetail, getAllNewsIds } from "@/lib/microcms";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  try {
    const article = await getNewsDetail(id);
    return {
      title: `${article.title} | Canvas - Web3コンサルティング`,
      description: article.excerpt || "株式会社Canvasのニュース詳細",
    };
  } catch {
    return {
      title: "News | Canvas - Web3コンサルティング",
      description: "株式会社Canvasのニュース詳細",
    };
  }
}

// Static export用に生成するページのIDを指定
export async function generateStaticParams() {
  try {
    const ids = await getAllNewsIds();
    return ids.map((id) => ({ id }));
  } catch {
    return [];
  }
}

export default async function NewsDetailPage({ params }: Props) {
  const { id } = await params;
  const article = await getNewsDetail(id);

  return (
    <>
      <main
        id="mxd-page-content"
        className="mxd-page-content inner-page-content"
      >
        <NewsDetail article={article} />
        <Cta />
      </main>
      <Footer2 text="canvas" />
    </>
  );
}
