import React from "react";
import "./FeaturesSt.scss";
import { Header } from "../../components/Header/Header";
import Hero from "../../../public/assets/features/mobile/hero.jpg";
import HeroTab from "../../../public/assets/features/tablet/hero.jpg";
import HeroDesk from "../../../public/assets/features/desktop/hero.jpg";
import { Feature } from "../../components/Feature/Feature";
import Screens from "/assets/features/desktop/responsive.svg";
import Limit from "/assets/features/desktop/no-limit.svg";
import Embed from "/assets/features/desktop/embed.svg";
import Search from "/assets/features/desktop/custom-domain.svg";
import Boost from "/assets/features/desktop/custom-domain.svg";
import Drag from "/assets/features/desktop/boost-exposure.svg";
import { Footer } from "../../components";

interface HeaderProps {
  active: boolean;
  handleActive: () => void;
}

export const Features = ({ active, handleActive }: HeaderProps) => {
  return (
    <>
      {active && (
        <>
          <div className="overlay" onClick={handleActive} />
        </>
      )}
      <Header active={active} handleActive={handleActive} />
      <section className="intro_2">
        <img className="hero-img" src={Hero} alt="Man with camera" />
        <img className="hero-img-tablet" src={HeroTab} alt="Man with camera" />
        <img
          className="hero-img-desktop"
          src={HeroDesk}
          alt="Man with camera"
        />
        <div className="create-box_1">
          <div className="stick"></div>
          <h1 className="title_1">Features</h1>
          <p className="text_1">
            We make sure all of our features are designed to be loved by every
            aspiring and even professional photograpers who wanted to share
            their stories.
          </p>
        </div>
      </section>
      <section className="highlights_2">
        <Feature
          icon={Screens}
          title={"100% Responsive"}
          paragraph={
            "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen."
          }
        />
        <Feature
          icon={Limit}
          title={"No Photo Upload Limit"}
          paragraph={
            "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go."
          }
        />
        <Feature
          icon={Embed}
          title={" Available to Embed"}
          paragraph={
            "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more."
          }
        />
        <Feature
          icon={Search}
          title={"Custom Domain"}
          paragraph={
            "With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!"
          }
        />
        <Feature
          icon={Boost}
          title={"Boost Your Exposure"}
          paragraph={
            "Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list."
          }
        />
        <Feature
          icon={Drag}
          title={"Drag & Drop Image"}
          paragraph={
            "Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories."
          }
        />
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
