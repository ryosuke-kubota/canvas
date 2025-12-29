import Blogs1 from "@/components/blogs/Blogs1";
import Cta from "@/components/common/Cta";
import Footer2 from "@/components/footers/Footer2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "News | Canvas - Web3コンサルティング",
  description: "株式会社Canvasの最新ニュース・お知らせ",
};

export default function NewsPage() {
  return (
    <>
      <main
        id="mxd-page-content"
        className="mxd-page-content inner-page-content"
      >
        <Blogs1 />
        <Cta />
      </main>
      <Footer2 text="canvas" />
    </>
  );
}
