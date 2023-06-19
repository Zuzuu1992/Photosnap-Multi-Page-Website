import React from "react";
import { useState } from "react";
import "./HeaderSt.scss";
import Logo from "/assets/shared/desktop/logo.svg";
import Hamburger from "/assets/shared/mobile/menu.svg";
import Cross from "/assets/shared/mobile/close.svg";

export const Header = () => {
  const [active, setActive] = useState(false);
  const handleActive = () => {
    setActive(!active);
  };
  return (
    <div className="header">
      <img src={Logo} alt="Logo" />
      <div onClick={handleActive} className="hamburger-box">
        {!active ? (
          <img src={Hamburger} alt="Hamburger" />
        ) : (
          <img src={Cross} alt="Cross" />
        )}
      </div>
      {active && (
        <div className="menu-overlay">
          <h2>Stories</h2>
          <h2>Features</h2>
          <h2>Pricing</h2>
          <div className="line"></div>
          <button>Get an invite</button>
        </div>
      )}
    </div>
  );
};
