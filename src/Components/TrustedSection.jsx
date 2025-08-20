
import React from "react";


const sectors = ["Startups", "Startups", "Startups", "Startups"];
const logos = new Array(10).fill("Brand Logo"); 

const TrustedBy = () => {
  return (
    <div className="trusted-section">
      <h2 className="trusted-heading">
        Trusted by <span>4000+</span> enterprises across various sectors
      </h2>

      <div className="sector-tags">
        {sectors.map((sector, index) => (
          <p key={index} className="sector-text">{sector}</p>
        ))}
      </div>

      <div className="brand-logos">
        {logos.map((logo, index) => (
          <div className="logo-box" key={index}>
            {index === 0 ? <span>{logo}</span> : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedBy;
