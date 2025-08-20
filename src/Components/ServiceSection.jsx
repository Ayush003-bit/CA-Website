
 import React from "react";


const services = [
  "Incorporation",
  "Incorporation",
  "Incorporation",
  "Incorporation",
  "Incorporation",
  "Incorporation",
];

const Services = () => {
  return (
    <div className="services-section">
      <h2 className="services-heading">Explore our digital services stack</h2>
      <p className="services-subtext">
        Grow your business and remain compliant by partnering with IndiaFilings for a range of high quality, 
        business services from incorporation to payroll delivered through a seamless online platform.
      </p>

      <div className="services-box">
        {services.slice(0,3).map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon"></div>
            <p className="service-title">{service}</p>
          </div>
        ))}
      </div>

      <div className="services-box-2">
         {services.slice(3,6).map((service, index) => (
          <div className="service-card-2" key={index}>
            <div className="service-icon-2"></div>
            <p className="service-title-2">{service}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
