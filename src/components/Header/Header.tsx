import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./HeaderSt.scss";
import Logo from "/assets/shared/desktop/logo.svg";
import Hamburger from "/assets/shared/mobile/menu.svg";
import Cross from "/assets/shared/mobile/close.svg";

interface HeaderProps {
  active: boolean;
  handleActive: () => void;
}

export const Header = ({ active, handleActive }: HeaderProps) => {
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
        <>
          <div className="menu-overlay">
            <Link to="/stories" className="link">
              Stories
            </Link>
            <Link to="/features" className="link">
              Features
            </Link>
            <Link to="/pricing" className="link">
              Pricing
            </Link>
            <div className="line"></div>
            <button>Get an invite</button>
          </div>
        </>
      )}
    </div>
  );
};