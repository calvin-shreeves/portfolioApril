import React from "react";
import "./portfolioCard.css";
import image from "../../assets/img/dummyPhoto.webp";
const PortfolioCards = ({ decription, title, img, link }) => {
  return (
    <a className="card-container" href={link}>
      <div className="card-img" style={{}}>
        <img
          src={!img ? image : img}
          alt="website poster"
          style={{ width: "100%" }}
        />
      </div>
      <div className="card-title">
        <h4>{title || "Project"}</h4>
        <p>{decription || "decription"}</p>
      </div>
    </a>
  );
};

export default PortfolioCards;
