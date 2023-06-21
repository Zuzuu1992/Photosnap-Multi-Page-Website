import React from "react";
import { Header } from "../../components/Header/Header";
import Girl from "../../../public/assets/pricing/mobile/hero.jpg";
import "./PricingSt.scss";
import { Card } from "../../components/Card/Card";
import { Plan } from "../../components/Plan/Plan";

interface HeaderProps {
  active: boolean;
  handleActive: () => void;
}

export const Pricing = ({ active, handleActive }: HeaderProps) => {
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
          <p className="month">Monthly</p>
          <div className="rectangle">
            <div className="circle"></div>
          </div>
          <p className="year">Yearly</p>
        </div>
        <Card />
      </section>
      <section className="plan">
        <div className="title-box">
          <h1 className="name">The Features</h1>
          <div className="line"></div>
        </div>
        <Plan />
      </section>
    </>
  );
};
