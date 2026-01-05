"use client";

import { useEffect } from "react";
import MobileMenu from "@/components/headers/MobileMenu";
import Header1 from "@/components/headers/Header1";
import InitScroll from "@/components/scroll/InitScroll";
import LenisSmoothScroll from "@/components/scroll/LenisSmoothScroll";
import ScrollTop from "@/components/scroll/ScrollTop";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  // ページロード時にスクロール位置をトップにリセット
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <MobileMenu />
      <Header1 />
      {children}
      <InitScroll />
      <ScrollTop />
      <LenisSmoothScroll />
    </>
  );
}
