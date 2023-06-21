import { Image } from "../../components/Image/Image";
import React from "react";
import { Header } from "../../components/Header/Header";
import "./StoriesSt.scss";
import Wood from "/assets/stories/mobile/moon-of-appalacia.jpg";
import { Footer } from "../../components/Footer/Footer";

interface HeaderProps {
  active: boolean;
  handleActive: () => void;
}

export const Stories = ({ active, handleActive }: HeaderProps) => {
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
          <img src={Wood} alt="Foogy mountains" />
        </div>
        <div className="create-box">
          <h2 className="featured-story"> Last month's featured story</h2>
          <h1 className="title">Hazy full moon of Appalachia</h1>
          <p className="author">
            March 2nd 2020 <span>by John Appleseed</span>
          </p>
          <p className="text">
            The dissected plateau area, while not actually made up of geological
            mountains, is popularly called "mountains," especially in eastern
            Kentucky and West Virginia, and while the ridges are not high, the
            terrain is extremely rugged.
          </p>
          <div className="link-box">
            <a className="direction" href="#">
              View the stories
            </a>
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
              <g fill="none" fillRule="evenodd" stroke="#FFFFFF">
                <path d="M0 7h41.864M35.428 1l6 6-6 6" />
              </g>
            </svg>
          </div>
        </div>
      </section>
      <section className="gallery">
        <div className="mount-photo box">
          <Image
            day={"April 16th 2020"}
            title={"The mountains"}
            author={"by John Appleseed"}
          />
        </div>
        <div className="cityscapes-photo box">
          <Image
            day={"April 14th 2020"}
            title={"Sunset Cityscapes"}
            author={"by Benjamin Cruz"}
          />
        </div>
        <div className="voyage-photo box">
          <Image
            day={"April 11th 2020"}
            title={"18 Days Voyage"}
            author={"by Alexei Borodin"}
          />
        </div>
        <div className="architecture-photo box">
          <Image
            day={"April 9th 2020"}
            title={"Architecturals"}
            author={"by Samantha Brooke"}
          />
        </div>
        <div className="lake-photo box">
          <Image
            day={"April 7th 2020"}
            title={"World Tour 2019"}
            author={"by Timothy Wagner"}
          />
        </div>
        <div className="tree-photo box">
          <Image
            day={"April 3rd 2020"}
            title={"Unforeseen Corners"}
            author={"by William Malcolm"}
          />
        </div>
        <div className="lion-photo box">
          <Image
            day={"March 29th 2020"}
            title={" King on Africa: Part II"}
            author={"by Tim Hillenburg"}
          />
        </div>
        <div className="nowhere-photo box">
          <Image
            day={" March 21st 2020"}
            title={" The Trip to Nowhere"}
            author={"by Felicia Rourke"}
          />
        </div>
        <div className="sea-photo box">
          <Image
            day={"March 19th 2020"}
            title={"Rage of The Sea"}
            author={"by Mohammed Abdul"}
          />
        </div>
        <div className="horse-photo box">
          <Image
            day={"March 16th 2020"}
            title={"Running Free"}
            author={"by Michelle"}
          />
        </div>
        <div className="waves-photo box">
          <Image
            day={"March 11th 2020"}
            title={"Behind the Waves"}
            author={"by Lamarr Wilson"}
          />
        </div>
        <div className="cliff-photo box">
          <Image
            day={"March 9th 2020"}
            title={"Calm Waters"}
            author={"by Samantha Brooke"}
          />
        </div>
        <div className="galaxy-photo box">
          <Image
            day={"March 5th 2020"}
            title={"The Milky Way"}
            author={"by Benjamin Cruz"}
          />
        </div>
        <div className="forrest-photo box">
          <Image
            day={"March 4th 2020"}
            title={"Night at The Dark Forest"}
            author={"by  Mohammed Abdul"}
          />
        </div>
        <div className="flower-photo box">
          <Image
            day={"March 1st 2020"}
            title={"Somwarpet’s Beauty"}
            author={"by Michelle"}
          />
        </div>
        <div className="tower-photo box">
          <Image
            day={" February 25th 2020"}
            title={"Land of Dreams"}
            author={"by William Malcolm"}
          />
        </div>
      </section>
      <Footer />
    </>
  );
};
