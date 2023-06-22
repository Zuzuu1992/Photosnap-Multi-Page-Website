import React, { useState } from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import Bridge from "/assets/home/mobile/create-and-share.jpg";
import BridgeTab from "/assets/home/tablet/create-and-share.jpg";
import Handsome from "/assets/home/mobile/designed-for-everyone.jpg";
import HandsomeTab from "/assets/home/tablet/designed-for-everyone.jpg";
import Notebook from "/assets/home/mobile/beautiful-stories.jpg";
import NotebookTab from "/assets/home/tablet/beautiful-stories.jpg";
import Screens from "/assets/features/desktop/responsive.svg";
import Limit from "/assets/features/desktop/no-limit.svg";
import Embed from "/assets/features/desktop/embed.svg";
import "./HomeSt.scss";
import { Feature } from "../../components/Feature/Feature";

interface HeaderProps {
  active: boolean;

  handleActive: () => void;
}

export const Home = ({ active, handleActive }: HeaderProps) => {
  return (
    <>
      {active && (
        <>
          <div className="overlay" onClick={handleActive} />
        </>
      )}
      <Header active={active} handleActive={handleActive} />
      <section className="introduction">
        <div className="create-and-share">
          <img
            src={Bridge}
            className="bridge-man"
            alt="Man standing on the birdge"
          />
          <img
            src={BridgeTab}
            className="bridge-man-tab"
            alt="Man standing on the birdge"
          />
          <div className="create-box">
            <div className="stick"></div>
            <h1 className="title">Create and share your photo Stories.</h1>
            <p className="text">
              Photosnap is a platform for photographers and visual storytellers.
              We make it easy to share photos, tell stories and connect with
              others.
            </p>
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
          </div>
        </div>
        <div className="beautiful-stories">
          <img
            src={Notebook}
            className="notebook"
            alt="Notebook on the table"
          />
          <img
            src={NotebookTab}
            className="notebook-tablet"
            alt="Notebook on the table"
          />
          <div className="create-box" style={{ backgroundColor: "#ffffff" }}>
            <h1 className="title" style={{ color: "#000000" }}>
              Beautiful stories every time
            </h1>
            <p className="text" style={{ color: "#000000" }}>
              We provide design templates to ensure your stories look terrific.
              Easily add photos, text, embed maps and media from other networks.
              Then share your story with everyone.
            </p>
            <div className="link-box">
              <a className="direction" href="#" style={{ color: "#000000" }}>
                View the stories
              </a>
              <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
                <g fill="none" fillRule="evenodd" stroke="#000000">
                  <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="designed-for">
          <img src={Handsome} className="handsome" alt="Man with camera" />
          <img
            src={HandsomeTab}
            className="handsome-tablet"
            alt="Man with camera"
          />
          <div className="create-box" style={{ backgroundColor: "#ffffff" }}>
            <h1 className="title" style={{ color: "#000000" }}>
              Designed for everyone
            </h1>
            <p className="text" style={{ color: "#000000" }}>
              Photosnap can help you create stories that resonate with your
              audience. Our tool is designed for photographers of all levels,
              brands, businesses you name it.
            </p>
            <div className="link-box">
              <a className="direction" href="#" style={{ color: "#000000" }}>
                View the stories
              </a>
              <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
                <g fill="none" fillRule="evenodd" stroke="#000000">
                  <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>
      <section className="gallery_1">
        <div className="mount-photo box">
          <h1 className="image-name">The mountains</h1>
          <p className="author-name">by John Appleseed</p>
          <div className="line-1"></div>
          <div className="direction-box">
            <a className="direction-1">read story</a>
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
              <g fill="none" fillRule="evenodd" stroke="#ffffff">
                <path d="M0 7h41.864M35.428 1l6 6-6 6" />
              </g>
            </svg>
          </div>
        </div>
        <div className="cityscapes-photo box">
          <h1 className="image-name">Sunset Cityscapes</h1>
          <p className="author-name">by Benjamin Cruz</p>
          <div className="line-1"></div>
          <div className="direction-box">
            <a className="direction-1">read story</a>
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
              <g fill="none" fillRule="evenodd" stroke="#ffffff">
                <path d="M0 7h41.864M35.428 1l6 6-6 6" />
              </g>
            </svg>
          </div>
        </div>
        <div className="voyage-photo box">
          <h1 className="image-name">18 Days Voyage</h1>
          <p className="author-name">by Alexei Borodin</p>
          <div className="line-1"></div>
          <div className="direction-box">
            <a className="direction-1">read story</a>
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
              <g fill="none" fillRule="evenodd" stroke="#ffffff">
                <path d="M0 7h41.864M35.428 1l6 6-6 6" />
              </g>
            </svg>
          </div>
        </div>
        <div className="architecture-photo box">
          <h1 className="image-name">Architecturals</h1>
          <p className="author-name">by Samantha Brooke</p>
          <div className="line-1"></div>
          <div className="direction-box">
            <a className="direction-1">read story</a>
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
              <g fill="none" fillRule="evenodd" stroke="#ffffff">
                <path d="M0 7h41.864M35.428 1l6 6-6 6" />
              </g>
            </svg>
          </div>
        </div>
      </section>
      <section className="highlights">
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
      </section>
      <Footer />
    </>
  );
};
