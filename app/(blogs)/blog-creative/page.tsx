import Blogs2 from "@/components/blogs/Blogs2";
import Cta from "@/components/common/Cta";
import Footer2 from "@/components/footers/Footer2";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Blog Creative || Canvas - Web3コンサルティング・グローバルマーケティング",
  description:
    "Canvas - Web3コンサルティング・グローバルマーケティング",
};
export default function BlogCreativePage() {
  return (
    <>
      <main
        id="mxd-page-content"
        className="mxd-page-content inner-page-content"
      >
        <Blogs2 />
        <Cta />
      </main>
      <Footer2 />
    </>
  );
}
