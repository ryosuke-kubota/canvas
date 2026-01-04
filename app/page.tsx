import NewsPreview from "@/components/news/NewsPreview";
import Cta from "@/components/common/Cta";
import Footer2 from "@/components/footers/Footer2";
import Approch from "@/components/common/Approch";
import Services from "@/components/homes/home-software-development-company/Services";
import ServicesStack from "@/components/homes/home-1/ServicesStack";
import Team from "@/components/other-pages/about/Team";
import Hero from "@/components/homes/home-freelancer-portfolio/Hero";
import { Metadata } from "next";
import { getNewsList } from "@/lib/microcms";

export const metadata: Metadata = {
  title: "Canvas - Web3コンサルティング・グローバルマーケティング",
  description:
    "Web3への進出を支援するためのコンサルティング・開発・グローバルマーケティングを行なっております。",
};

export default async function Home() {
  let articles: Awaited<ReturnType<typeof getNewsList>>["contents"] = [];

  try {
    const response = await getNewsList(3);
    articles = response.contents;
  } catch (error) {
    console.error("Failed to fetch news:", error);
  }

  return (
    <>
      <main id="mxd-page-content" className="mxd-page-content">
        <Hero />
        <NewsPreview articles={articles} />
        <Approch />
        <Services />
        <ServicesStack />
        <Team />
        <Cta />
      </main>
      <Footer2 text="canvas" />
    </>
  );
}
