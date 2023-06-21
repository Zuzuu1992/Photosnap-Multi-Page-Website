import React from "react";
import "./CardSt.scss";

export const Card = () => {
  return (
    <section className="cards-box">
      <div className="basic package">
        <div className="text-box">
          <h1 className="type">Basic</h1>
          <p className="include">
            Includes basic usage of our platform. Recommended for new and
            aspiring photographers.
          </p>
        </div>
        <div className="price-box">
          <h2 className="price"> $19.00</h2>
          <p className="per">per month</p>
        </div>
        <button className="pick-btn">Pick Plan</button>
      </div>
      <div className="pro package">
        <div className="stick"></div>
        <div className="text-box">
          <h1 className="type">Pro</h1>
          <p className="include">
            More advanced features available. Recommended for photography
            veterans and professionals.
          </p>
        </div>
        <div className="price-box">
          <h2 className="price">$39.00</h2>
          <p className="per">per month</p>
        </div>
        <button className="pick-btn">Pick Plan</button>
      </div>
      <div className="basic package">
        <div className="text-box">
          <h1 className="type">Business</h1>
          <p className="include">
            Additional features available such as more detailed metrics.
            Recommended for business owners.
          </p>
        </div>
        <div className="price-box">
          <h2 className="price">$99.00</h2>
          <p className="per">per month</p>
        </div>
        <button className="pick-btn">Pick Plan</button>
      </div>
    </section>
  );
};