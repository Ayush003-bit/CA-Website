
 import React from "react";


const cards = [
  {
    title: "IRP certification",
    description:
      "Seamlessly integrate your SAP ERP workloads across our GST, e-Invoicing and ITC reconciliation modules. We integrate with your ERP, and other data sources too.",
  },
  {
    title: "IRP certification",
    description:
      "Seamlessly integrate your SAP ERP workloads across our GST, e-Invoicing and ITC reconciliation modules. We integrate with your ERP, and other data sources too.",
  },
  {
    title: "IRP certification",
    description:
      "Seamlessly integrate your SAP ERP workloads across our GST, e-Invoicing and ITC reconciliation modules. We integrate with your ERP, and other data sources too.",
  },
];

const StayInformed = () => {
  return (
    <div className="stay-section">
      <h2 className="stay-heading">Stay Informed</h2>
      
      <div className="stay-cards">
        {cards.map((card, index) => (
          <div className="stay-card" key={index}>
            <div className="stay-image">
              <div className="stay-demo">Demo</div>
            </div>
            <h3 className="stay-title">{card.title}</h3>
            <p className="stay-description">{card.description}</p>
            <a href="#" className="stay-link">Know More →</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StayInformed;
