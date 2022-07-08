import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.scss";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Header from "./components/Header";
import Content from "./components/Content";

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
      <Header />
      <Content />
    </div>
  );
};

export default App;
