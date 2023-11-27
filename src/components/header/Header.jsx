import React from "react";
import "./header.css";
import CTA from "./CTA";
import Me from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Strong Muhoti</h1>
        <h5 className="text-light">Your Business Apps Expert</h5>
        <CTA />
        <HeaderSocials />
        <div className="header_me">
          <div className="me">
            <img src={Me} alt="Portfolio Image" />
          </div>
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
