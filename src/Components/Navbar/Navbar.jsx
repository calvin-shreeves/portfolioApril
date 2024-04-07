import React from "react";
import NavbarOption from "./NavbarOption";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottom: "solid 2px lightgrey",
      }}
    >
      <div>
        <h1>Calvin Shreeves</h1>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <NavbarOption label={"About Me"} path={"#aboutMe"} />

        <NavbarOption label={"Portfolio"} path={"#projects"} />
        <NavbarOption label={"Skills"} path={"skills"} />

        <NavbarOption label={"Hire Me"} path={"#contactForm"} />
      </div>
    </div>
  );
};

export default Navbar;
