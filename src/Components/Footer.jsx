
 import React from "react";
import { FaInstagram, FaLinkedin, FaYoutube, FaXTwitter } from "react-icons/fa6";
import { FaFigma } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Section with Logo + Icons */}

        <div className="footer-left">
          <FaFigma className="footer-logo" />
          <div className="footer-icons">
            <FaXTwitter className="footer-icon" />
            <FaInstagram className="footer-icon" />
            <FaYoutube className="footer-icon" />
            <FaLinkedin className="footer-icon" />
          </div>
        </div>

       

        <div className="footer-column">
          <h4>Use cases</h4>
          <ul>
            <li>UI design</li>
            <li>UX design</li>
            <li>Wireframing</li>
            <li>Diagramming</li>
            <li>Brainstorming</li>
            <li>Online whiteboard</li>
            <li>Team collaboration</li>
          </ul>
        </div>

        {/* Middle Section: Explore */}

        <div className="footer-column">
          <h4>Explore</h4>
          <ul>
            <li>Design</li>
            <li>Prototyping</li>
            <li>Development features</li>
            <li>Design systems</li>
            <li>Collaboration features</li>
            <li>Design process</li>
            <li>FigJam</li>
          </ul>
        </div>

        {/* Middle Section: Resources */}
        
        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li>Blog</li>
            <li>Best practices</li>
            <li>Colors</li>
            <li>Color wheel</li>
            <li>Support</li>
            <li>Developers</li>
            <li>Resource library</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
