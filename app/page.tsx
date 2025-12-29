import Blogs from "@/components/common/Blogs";
import Cta from "@/components/common/Cta";
import Footer2 from "@/components/footers/Footer2";


import Approch from "@/components/common/Approch";


import Services from "@/components/homes/home-software-development-company/Services";
import ServicesStack from "@/components/homes/home-1/ServicesStack";

import Team from "@/components/other-pages/about/Team";


import Hero from "@/components/homes/home-freelancer-portfolio/Hero";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Canvas - Web3コンサルティング・グローバルマーケティング",
  description:
    "Web3への進出を支援するためのコンサルティング・開発・グローバルマーケティングを行なっております。",
};
export default function Home() {
  return (
    <>
      <main id="mxd-page-content" className="mxd-page-content">
        <Hero />
        <Blogs />
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
