import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";
import gsap from "gsap";

const Slider = ({ items }) => {
  const itemsListRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const fadeIn = (index, { duration }) => {
    const item = itemsListRef.current.children[index].children[1];
    gsap.fromTo(item, { opacity: 0 }, { opacity: 1, duration });
  };

  const handleNextSlideClick = () => {
    const value = currentSlide === items.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(value);
  };

  const handlePrevSlideClick = () => {
    const value = currentSlide === 0 ? items.length - 1 : currentSlide - 1;
    setCurrentSlide(value);
  };

  useEffect(() => {
    fadeIn(currentSlide, { duration: 1.2 });
  }, [currentSlide]);

  return (
    <div className="slider">
      <div ref={itemsListRef} className="slider__wrapper">
        {items &&
          items.length > 0 &&
          items.map((item, index) => (
            <div
              className={cn(
                "slider__item",
                index === currentSlide && "slider__item_active"
              )}
              key={item.id}
            >
              <div className="slider__item-img">
                <img src={item.coverImg} alt="" />
              </div>

              <div className="slider__item-content">
                <h5>{item.text}</h5>
                <div>{item.name}</div>
                <div>{item.post}</div>
              </div>
            </div>
          ))}
      </div>

      <div
        className="slider__btn slider__btn_prev"
        onClick={handlePrevSlideClick}
        role="button"
      >
        Prev
      </div>
      <div
        className="slider__btn slider__btn_next"
        onClick={handleNextSlideClick}
        role="button"
      >
        Next
      </div>
    </div>
  );
};

export default Slider;
