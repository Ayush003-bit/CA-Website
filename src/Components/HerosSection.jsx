
import React from "react";


const HerosSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        
        <div className="hero-logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            width="40"
            height="40"
            fill="none"
            stroke="white"
            strokeWidth="2"
          >
            <path d="M32 2 L2 16 L32 30 L62 16 Z" /> 
            <path d="M2 16 V48 L32 62 V30 Z" /> 
            <path d="M62 16 V48 L32 62" /> 
          </svg>
        </div>

        
        <h1>
          Building a <br /> connected <br /> finance <br /> ecosystem
        </h1>

        
        <a href="#" className="hero-link">
          Know More <span className="arrow">→</span>
        </a>
      </div>
    </section>
  );
};

export default HerosSection;

