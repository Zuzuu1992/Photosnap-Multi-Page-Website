import React from "react";
import "./PlanSt.scss";
import Check from "/assets/pricing/desktop/check.svg";

export const Plan = () => {
  return (
    <>
      <div className="plan-list">
        <section className="tablet-row">
          <h1 className="compare">Compare</h1>
          <div className="row">
            <div>
              <div className="access">The Features</div>
            </div>
            <div className="check">Basic</div>
            <div className="check">Pro</div>
            <div className="check">Business</div>
          </div>
          <div className="line_3"></div>
          <div className="row">
            <div>
              <div className="access">Unlimited Story Posting</div>
            </div>
            <div className="check">
              <img src={Check} alt="Check icon" />
            </div>
            <div className="check">
              <img src={Check} alt="Check icon" />
            </div>
            <div className="check">
              <img src={Check} alt="Check icon" />
            </div>
          </div>
          <div className="line_2"></div>
          <div className="row">
            <div>
              <div className="access">Unlimited Photo Posting</div>
            </div>
            <div className="check">
              <img src={Check} alt="Check icon" />
            </div>
            <div className="check">
              <img src={Check} alt="Check icon" />
            </div>
            <div className="check">
              <img src={Check} alt="Check icon" />
            </div>
          </div>
          <div className="line_2"></div>
          <div className="row">
            <div>
              <div className="access">Embedding Custom Content</div>
            </div>
            <div className="check"></div>
            <div className="check">
              <img src={Check} alt="Check icon" />
            </div>
            <div className="check">
              <img src={Check} alt="Check icon" />
            </div>
          </div>
          <div className="line_2"></div>
          <div className="row">
            <div>
              <div className="access">Customize Metadata</div>
            </div>
            <div className="check"></div>
            <div className="check">
              <img src={Check} alt="Check icon" />
            </div>
            <div className="check">
              <img src={Check} alt="Check icon" />
            </div>
          </div>
          <div className="line_2"></div>
          <div className="row">
            <div>
              <div className="access">Advanced Metrics</div>
            </div>
            <div className="check"></div>
            <div className="check"></div>
            <div className="check">
              <img src={Check} alt="Check icon" />
            </div>
          </div>
          <div className="line_2"></div>
          <div className="row">
            <div>
              <div className="access">Photo Downloads</div>
            </div>
            <div className="check"></div>
            <div className="check"></div>
            <div className="check">
              <img src={Check} alt="Check icon" />
            </div>
          </div>
          <div className="line_2"></div>
          <div className="row">
            <div>
              <div className="access">Search Engine Indexing</div>
            </div>
            <div className="check"></div>
            <div className="check"></div>
            <div className="check">
              <img src={Check} alt="Check icon" />
            </div>
          </div>
          <div className="line_2"></div>
          <div className="row">
            <div>
              <div className="access">Custom Analytics</div>
            </div>
            <div className="check"></div>
            <div className="check"></div>
            <div className="check">
              <img src={Check} alt="Check icon" />
            </div>
          </div>
          <div className="line_2"></div>
        </section>
        <section className="mobile-row">
          <div className="list">
            <div className="access">Unlimited Story Posting</div>
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
          <div className="list">
            <div className="access">Embedding Custom Content</div>
            <div className="list-box">
              <div className="basic tick-box">
                <div className="type">Basic</div>
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
            <div className="access">Customize Metadata</div>
            <div className="list-box">
              <div className="basic tick-box">
                <div className="type">Basic</div>
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
            <div className="access">Advanced Metrics</div>
            <div className="list-box">
              <div className="basic tick-box">
                <div className="type">Basic</div>
              </div>
              <div className="pro_1 tick-box">
                <div className="type">Pro</div>
              </div>
              <div className="business tick-box">
                <div className="type">Business</div>
                <img src={Check} alt="Check icon" />
              </div>
            </div>
          </div>
          <div className="line_2"></div>
          <div className="list">
            <div className="access">Photo Downloads</div>
            <div className="list-box">
              <div className="basic tick-box">
                <div className="type">Basic</div>
              </div>
              <div className="pro_1 tick-box">
                <div className="type">Pro</div>
              </div>
              <div className="business tick-box">
                <div className="type">Business</div>
                <img src={Check} alt="Check icon" />
              </div>
            </div>
          </div>
          <div className="line_2"></div>
          <div className="list">
            <div className="access">Search Engine Indexing</div>
            <div className="list-box">
              <div className="basic tick-box">
                <div className="type">Basic</div>
              </div>
              <div className="pro_1 tick-box">
                <div className="type">Pro</div>
              </div>
              <div className="business tick-box">
                <div className="type">Business</div>
                <img src={Check} alt="Check icon" />
              </div>
            </div>
          </div>
          <div className="line_2"></div>
          <div className="list">
            <div className="access">Custom Analytics</div>
            <div className="list-box">
              <div className="basic tick-box">
                <div className="type">Basic</div>
              </div>
              <div className="pro_1 tick-box">
                <div className="type">Pro</div>
              </div>
              <div className="business tick-box">
                <div className="type">Business</div>
                <img src={Check} alt="Check icon" />
              </div>
            </div>
          </div>
          <div className="line_2 last"></div>
        </section>
      </div>
    </>
  );
};
