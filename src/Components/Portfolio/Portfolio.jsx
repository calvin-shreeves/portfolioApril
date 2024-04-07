import React from "react";
import PortfolioCards from "./PortfolioCards";
import { myProjects } from "../../assets/data/websites";
const Portfolio = () => {
  return (
    <div style={{ margin: 18 }}>
      <div
        style={{
          borderBottom: "solid 2px lightgrey",
          marginBottom: 16,
          width: "50%",
        }}
      >
        Portfolio
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <PortfolioCards
          title={myProjects[0].title}
          img={myProjects[0].img}
          link={myProjects[0].link}
          decription={myProjects[0].description}
        />
        <PortfolioCards />
        <PortfolioCards />
      </div>
    </div>
  );
};

export default Portfolio;
