"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import AnimatedButton from "../animation/AnimatedButton";
import { usePathname } from "next/navigation";
import ThemeSwitcherButton from "./ColorSwitcher";

export default function Header1() {
  const pathname = usePathname();
  const [isHidden, setIsHidden] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsHidden(currentScrollPos > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header id="header" className={`mxd-header ${isHidden ? "is-hidden" : ""}`}>
      {/* header logo */}
      <div className="mxd-header__logo loading__fade">
        <Link href={`/`} className="mxd-logo">
          {/* logo icon */}
          <Image
            src="/img/canvas-logo.png"
            className="mxd-logo__image"
            alt="Canvas Logo"
            width={240}
            height={60}
          />
        </Link>
      </div>
      {/* header controls */}
      <div className="mxd-header__controls loading__fade">
        {/* <ThemeSwitcherButton /> */}

        <AnimatedButton
          text="お問い合わせ"
          className="btn btn-anim btn-default btn-mobile-icon btn-outline slide-right font-ja"
          href="/contact"
        >
          <i className="ph-bold ph-arrow-up-right" />
        </AnimatedButton>
      </div>
    </header>
  );
}
