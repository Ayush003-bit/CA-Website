

import React, { useState } from "react";


export function Navbar() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const menuItems = ["Products", "Products", "Products", "Products"];
  const dropdownOptions = ["Option 1", "Option 2", "Option 3"];

  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <div className="nav-links">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="nav-item"
            onMouseEnter={() => toggleDropdown(index)}
            onMouseLeave={() => toggleDropdown(null)}
          >
            <button className="nav-button">
              {item}
              <span className="arrow">▼</span>
            </button>
            <div
              className={`dropdown ${openIndex === index ? "open" : ""}`}
            >
              {dropdownOptions.map((opt, i) => (
                <a href="#" key={i} className="dropdown-item">
                  {opt}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button className="demo-btn">Demo</button>
    </nav>
  );
};

export default Navbar;
