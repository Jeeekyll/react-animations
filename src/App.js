import "./App.css";
import "./main.scss";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Circles from "./components/Circles";
import Slider from "./components/Slider";
import image from "./unknown.png";
import FadeImage from "./components/FadeImage";
import Todo from "./components/Todo";

const App = () => {
  const items = [
    {
      id: 0,
      text: "Lorem ipsum dolor sit.",
      name: "Alex",
      post: "CEO",
      coverImg: `${require("./images/slider1.jpg")}`,
    },
    {
      id: 1,
      text: "Lorem ipsum dolor sit.2",
      name: "Liza",
      post: "President",
      coverImg: `${require("./images/slider2.jpg")}`,
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit.3",
      name: "Lera",
      post: "Worker",
      coverImg: `${require("./images/slider3.jpg")}`,
    },
  ];


  const mainRef = useRef(null);

  useEffect(() => {
    gsap.to(mainRef.current, { duration: 0, css: { visibility: "visible" } });
  }, []);

  return (
    <div ref={mainRef} className="main">
      {/*<Circles />*/}
      <div className="container">
        <div className="main__row">
          <Todo/>
          {/*<Slider items={items} />*/}
        </div>
      </div>
    </div>
  );
};

export default App;
