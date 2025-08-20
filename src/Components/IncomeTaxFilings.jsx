
 import React from "react";


const IncomeTaxFiling = () => {
  return (
    <div className="tax-section">
      <h1 className="tax-heading">Income tax filing for everyone!</h1>
      
      <div className="tax-content">
        {/* Left Content */}
        <div className="tax-text">
          <p className="tax-subtitle">India’s simplest income tax filing platform</p>
          
          <h2 className="tax-title">File your taxes in 3 minutes</h2>
          
          <ul className="tax-features">
            <li>★ No manual data entry</li>
            <li>★ 100% auto-fill in a click</li>
            <li>★ Maximum tax savings</li>
          </ul>
          
          <a href="#" className="tax-link">File with Cleartax →</a>
        </div>

        {/* Right Content */}
        <div className="tax-image">
          <p>Images</p>
        </div>
      </div>
    </div>
  );
};

export default IncomeTaxFiling;
