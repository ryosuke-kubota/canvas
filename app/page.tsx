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
    "Preview || Rayo - Digital Agency & Personal Portfolio React Nextjs Template",
  description:
    "Rayo - Digital Agency & Personal Portfolio React Nextjs Template",
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
