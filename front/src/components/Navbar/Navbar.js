import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <>
      <nav className="navbar">
        <ul
          className={isMobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setIsMobile(false)}
        >
          <li className="list drop">Home</li>
          <li className="list">Features</li>
          <li className="list drop">Pages</li>
          <li className="list">Screenshots</li>
          <li className="list">Pricing</li>
          <li className="list">Contact</li>

          <button
            className="mobile-menu-icon"
            onClick={() => setIsMobile(!isMobile)}
          >
            {isMobile ? (
              <i className="fas fa-times"></i>
            ) : (
              <i className="fas fa-bars"></i>
            )}
          </button>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
