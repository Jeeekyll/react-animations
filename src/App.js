import "./App.css";
import "./main.scss";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const App = () => {
  const mainRef = useRef(null);

  const circleRedRef = useRef(null);
  const circleBlueRef = useRef(null);
  const circleGreenRef = useRef(null);

  const [isActive, setIsActive] = useState(false);

  const handleExpand = () => {
    gsap.to(circleBlueRef.current, {
      height: 200,
      width: 200,
      duration: 0.4,
      x: 60,
      ease: "power3.easeOut",
    });

    setIsActive(true);
  };

  const handleShrink = () => {
    gsap.to(circleBlueRef.current, {
      height: 80,
      width: 80,
      duration: 0.4,
      x: 0,
      ease: "power3.easeOut",
    });

    setIsActive(false);
  };

  useEffect(() => {
    gsap.to(mainRef.current, { duration: 0, css: { visibility: "visible" } });

    const circles = [
      circleRedRef.current,
      circleBlueRef.current,
      circleGreenRef.current,
    ];

    gsap.fromTo(
      circles,
      { x: -100, opacity: 0, duration: 0.8, ease: "power3.easeOut" },
      { x: 0, opacity: 1, stagger: 0.2 }
    );
  }, []);

  return (
    <div ref={mainRef} className="main">
      <div className="container">
        <div className="main__row">
          <div ref={circleRedRef} className="circle circle_red" />
          <div
            onClick={!isActive ? handleExpand : handleShrink}
            ref={circleBlueRef}
            className="circle circle_blue"
          />
          <div ref={circleGreenRef} className="circle circle_green" />
        </div>
      </div>
    </div>
  );
};

export default App;
