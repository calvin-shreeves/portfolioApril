import React from "react";

const NavbarOption = ({ label, path }) => {
  return (
    <a
      href={path}
      style={{
        margin: "0 15px",
        cursor: "pointer",
        color: "black",
        textDecoration: "none",
      }}
    >
      <h4>{label || "Label"}</h4>
    </a>
  );
};

export default NavbarOption;
