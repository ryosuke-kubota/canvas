import Blogs from "@/components/common/Blogs";
import Cta from "@/components/common/Cta";
import Footer2 from "@/components/footers/Footer2";
import Faqs from "@/components/other-pages/Faqs";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Faqs || Canvas - Web3コンサルティング・グローバルマーケティング",
  description:
    "Canvas - Web3コンサルティング・グローバルマーケティング",
};
export default function FaqsPage() {
  return (
    <>
      <main
        id="mxd-page-content"
        className="mxd-page-content inner-page-content"
      >
        <Faqs />
        <Blogs />
        <Cta />
      </main>
      <Footer2 />
    </>
  );
}
