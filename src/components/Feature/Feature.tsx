import React from "react";

export const Feature = ({ icon, title, paragraph }: any) => {
  return (
    <>
      <div className="responsive-box highlight">
        <img src={icon} />
        <h2 className="responsive-title">{title}</h2>
        <p className="responsive-text">{paragraph}</p>
      </div>
    </>
  );
};
