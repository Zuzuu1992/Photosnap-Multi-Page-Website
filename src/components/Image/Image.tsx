import React from "react";

export const Image = ({ day, title, author }: any) => {
  return (
    <>
      <p className="date">{day}</p>
      <h1 className="image-name">{title}</h1>
      <p className="author-name">{author}</p>
      <div className="line-1"></div>
      <div className="direction-box">
        <a className="direction-1">read story</a>
        <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
          <g fill="none" fillRule="evenodd" stroke="#ffffff">
            <path d="M0 7h41.864M35.428 1l6 6-6 6" />
          </g>
        </svg>
      </div>
    </>
  );
};
