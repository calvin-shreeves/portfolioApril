import React from "react";
import image from "../../assets/img/pic2.jpg";
const AboutMe = () => {
  return (
    <div style={{ margin: 25 }}>
      <h3>About Me</h3>
      <div
        style={{
          flexDirection: "row",
          display: "flex",
        }}
      >
        <div style={{ marginRight: 25 }}>
          <img style={{ height: 150, width: 150 }} src={image} alt="" />
        </div>
        <div>
          <div>
            <strong>Fron-End Developer</strong>
          </div>
          <div>
            <p></p>My goal as a Full-Stack Developer is to lead and assist in
            the creation of practical apllications that will help enrich the
            lives of those who use applications im involved in creating whether
            that be in ease of an task, connecting with others who undrstand
            them, or who need assitance or guidance in learning/practicing a new
            skills
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
