import BlogDetails from "@/components/blogs/BlogDetails";
import Blogs from "@/components/common/Blogs";
import Cta from "@/components/common/Cta";
import Footer2 from "@/components/footers/Footer2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "News Detail | Canvas - Web3コンサルティング",
  description: "株式会社Canvasのニュース詳細",
};

export default function NewsDetailPage() {
  return (
    <>
      <main
        id="mxd-page-content"
        className="mxd-page-content inner-page-content"
      >
        <BlogDetails />
        <Blogs desc="" title="関連ニュース" />
        <Cta />
      </main>
      <Footer2 text="canvas" />
    </>
  );
}
