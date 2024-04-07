import React from "react";
import { FaReact, FaCss3, FaJs, FaHtml5, FaPython } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
const SkillTags = ({ skill, color, icon }) => {
  const icons = {
    react: <FaReact />,
    css: <FaCss3 />,
    html: <FaHtml5 />,
    js: <FaJs />,
    python: <FaPython />,
    redux: <SiRedux />,
  };
  return (
    <div
      style={{
        display: "flex",
        width: "20%",
        padding: 10,
        boxShadow: "0px 0px 5px black",
        margin: "18px 10px",
        justifyContent: "center",
        backgroundColor: `${color}`,
      }}
    >
      <p> {skill}</p>

      <div>{icons[icon]}</div>
    </div>
  );
};

export default SkillTags;
