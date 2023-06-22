import React, { useState } from "react";
import { Header } from "../../components/Header/Header";
import Girl from "../../../public/assets/pricing/mobile/hero.jpg";
import "./PricingSt.scss";
import { Card } from "../../components/Card/Card";
import { Plan } from "../../components/Plan/Plan";
import { Footer } from "../../components";

interface HeaderProps {
  active: boolean;
  handleActive: () => void;
}

export const Pricing = ({ active, handleActive }: HeaderProps) => {
  const [checked, setChecked] = useState<boolean>(false);
  const handleChecked = () => {
    setChecked(!checked);
  };
  return (
    <>
      {active && (
        <>
          <div className="overlay" onClick={handleActive} />
        </>
      )}
      <Header active={active} handleActive={handleActive} />
      <section className="intro">
        <div className="hero-img-box">
          <img src={Girl} alt="Man with camera" />
        </div>
        <div className="create-box_1">
          <div className="stick"></div>
          <h1 className="title_1">Pricing</h1>
          <p className="text_1">
            Create a your stories, Photosnap is a platform for photographers and
            visual storytellers. It’s the simple way to create and share your
            photos.
          </p>
        </div>
      </section>
      <section className="billing">
        <div className="time-switch-box">
          <p
            className="month"
            style={{
              color: !checked ? "#000000" : "rgba(0, 0, 0, 0.5)",
            }}
          >
            Monthly
          </p>
          <div
            className="rectangle"
            onClick={handleChecked}
            style={{
              backgroundColor: checked ? "#000000" : "#DFDFDF",
            }}
          >
            <div
              className="circle"
              style={{
                transform: checked ? "translateX(130%)" : "translateX(0%)",
                backgroundColor: checked ? "#ffffff" : "#000000",
              }}
            ></div>
          </div>
          <p
            className="year"
            style={{
              color: checked ? "#000000" : "rgba(0, 0, 0, 0.5)",
            }}
          >
            Yearly
          </p>
        </div>
        <Card checked={checked} handleChecked={handleChecked} />
      </section>
      <section className="plan">
        <div className="title-box">
          <h1 className="name">The Features</h1>
          <div className="line"></div>
        </div>
        <Plan />
      </section>
      <section className="beta">
        <div className="stick"></div>
        <h1 className="beta-name">We're in Beta. Get your invite today!</h1>
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
      </section>
      <Footer />
    </>
  );
};
