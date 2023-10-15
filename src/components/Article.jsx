import React from "react";

export const Article = ({ title, text, click, imgurl }) => {
  return (
    <container className="content-box">
      <div className="text-content">
        <h2>{title}</h2>
        <p>{text}</p>
        <button>{click}</button>
      </div>
      <div className="img-container">
        <img src={imgurl} alt="" />
      </div>
    </container>
  );
};
