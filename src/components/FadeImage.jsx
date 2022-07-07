import React, { useEffect, useRef } from "react";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import gsap from "gsap";

const FadeImage = ({ src }) => {
  const imageRef = useRef(null);
  const imageReveal = CSSRulePlugin.getRule(".image:before");

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(imageReveal, {
      duration: 1,
      width: "0%",
      ease: "power2.in",
    }).from(imageRef.current, {
      duration: 1,
      delay: -1,
      scale: 1.6,
      ease: "power2.in",
    });
  }, []);

  return (
    <div className="container">
      <div className="main__row">
        <div className="image">
          <img ref={imageRef} src={src} alt="#" />
        </div>
      </div>
    </div>
  );
};

export default FadeImage;
