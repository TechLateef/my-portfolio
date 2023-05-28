import React, { useState } from "react";

const Carousel = ({ items }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === items.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? items.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="carousel">
      <button className="prev-button" onClick={prevSlide}>
        Previous
      </button>
      <div className="slide">
        {items.map((item, index) => (
          <div
            key={index}
            className={`item ${index === currentSlide ? "active" : ""}`}
          >
            {item}
          </div>
        ))}
      </div>
      <button className="next-button" onClick={nextSlide}>
        Next
      </button>
    </div>
  );
};

export default Carousel;
