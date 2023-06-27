import { Link } from "react-router-dom";
import "./FooterSt.scss";
import Logo from "/assets/shared/desktop/logo-white.svg";
import { Social } from "./Social";

export const Footer = () => {
  return (
    <main>
      <img src={Logo} alt="Photosnap logo" />
      <Social />
      <div className="pages">
        <Link className="page" to="/">
          Home
        </Link>
        <Link className="page" to="/stories">
          Stories
        </Link>
        <Link className="page" to="/features">
          Features
        </Link>
        <Link className="page" to="/pricing">
          Pricing
        </Link>
      </div>
      <div className="link-box">
        <a className="direction" href="#">
          Get an invite
        </a>
        <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
          <g fill="none" fillRule="evenodd" stroke="#FFFFFF">
            <path d="M0 7h41.864M35.428 1l6 6-6 6" />
          </g>
        </svg>
      </div>
      <p className="copyright">Copyright 2019. All Rights Reserved</p>
    </main>
  );
};
