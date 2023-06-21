import React from "react";
import "./PlanSt.scss";
import Check from "../../../public/assets/pricing/desktop/check.svg";

export const Plan = () => {
  return (
    <>
      <div className="plan-list">
        <div className="list">
          <div className="access">Unlimited Photo Posting</div>
          <div className="list-box">
            <div className="basic tick-box">
              <div className="type">Basic</div>
              <img src={Check} alt="Check icon" />
            </div>
            <div className="pro_1 tick-box">
              <div className="type">Pro</div>
              <img src={Check} alt="Check icon" />
            </div>
            <div className="business tick-box">
              <div className="type">Business</div>
              <img src={Check} alt="Check icon" />
            </div>
          </div>
        </div>
        <div className="line_2"></div>
        <div className="list">
          <div className="access">Unlimited Photo Posting</div>
          <div className="list-box">
            <div className="basic tick-box">
              <div className="type">Basic</div>
              <img src={Check} alt="Check icon" />
            </div>
            <div className="pro_1 tick-box">
              <div className="type">Pro</div>
              <img src={Check} alt="Check icon" />
            </div>
            <div className="business tick-box">
              <div className="type">Business</div>
              <img src={Check} alt="Check icon" />
            </div>
          </div>
        </div>
        <div className="line_2"></div>
      </div>
    </>
  );
};
