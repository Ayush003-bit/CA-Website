

import React, { useState } from 'react';


export function Section() {
  const slides = [
    {
      heading: "Account Payable",
      subheading: "Subheading",
      description: "Our connected finance ecosystem is enabling new paths to efficiency and profitability while ensuring 100% compliance. Experience the most advanced",
      buttonText: "Demo"
    },
    {
      heading: "Another Service 1",
      subheading: "",
      description: "",
      buttonText: "Demo"
    },
    {
      heading: "Another Service 2",
      subheading: "",
      description: "",
      buttonText: "Demo"
    },
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handleNext = () => {
    setCurrentSlideIndex((prevIndex) => 
      (prevIndex + 1) % slides.length
    );
  };

  const handlePrev = () => {
    setCurrentSlideIndex((prevIndex) => 
      (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="component-container">

 <div className="slider-wrapper">

        <div className="slide-content">

          <h1 className="main-heading">
            {slides[currentSlideIndex].heading}
          </h1>
          <h2 className="subheading">
            {slides[currentSlideIndex].subheading}
          </h2>
          <p className="description">
            {slides[currentSlideIndex].description}
          </p>
          <button className="demo-button">
            {slides[currentSlideIndex].buttonText}
          </button>
        </div>
        <button className="slider-btn prev" onClick={handlePrev}>
          &#10094;
        </button>
        <button className="slider-btn next" onClick={handleNext}>
          &#10095;
        </button>
      </div>
    </div>
  );
}

export default Section



    