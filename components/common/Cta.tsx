import Link from "next/link";
import Image from "next/image";

import RevealText from "../animation/RevealText";
import AnimatedButton from "../animation/AnimatedButton";

export default function Cta() {
  return (
    <div className="mxd-section overflow-hidden">
      <div className="mxd-container">
        {/* Block - CTA Start */}
        <div className="mxd-block">
          <div className="mxd-promo">
            <div className="mxd-promo__inner anim-zoom-out-container">
              {/* background */}
              <div className="mxd-promo__bg" />
              {/* caption */}
              <div className="mxd-promo__content">
                <p className="mxd-promo__title anim-uni-in-up">
                  <RevealText
                    as="span"
                    className="mxd-promo__caption reveal-type font-ja"
                  >
                    あなたの
                    <br />キャンバスを
                    <br />
                    共に描く
                  </RevealText>
                </p>
                <div className="mxd-promo__controls anim-uni-in-up">
                  <AnimatedButton
                    text="お問い合わせ"
                    className="btn btn-anim btn-default btn-large btn-additional slide-right-up font-ja"
                    href={`/contact`}
                  >
                    <i className="ph-bold ph-arrow-up-right" />
                  </AnimatedButton>
                </div>
              </div>
              {/* parallax images */}
              <div className="mxd-promo__images">
                {/* <Image
                  className="promo-image promo-image-1"
                  alt="Image"
                  src="/img/cta/cta.png"
                  width={800}
                  height={912}
                /> */}
                {/* <Image
                  className="promo-image promo-image-2"
                  alt="Image"
                  src="/img/cta/cta.png"
                  width={600}
                  height={601}
                /> */}
              </div>
            </div>
          </div>
        </div>
        {/* Block - CTA End */}
      </div>
    </div>
  );
}
