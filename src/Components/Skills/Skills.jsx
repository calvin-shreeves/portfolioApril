import React from "react";
import SkillTags from "./SkillTags";
import { skills } from "../../assets/data/websites";
const Skills = () => {
  return (
    <div style={{ margin: 18 }}>
      <div>
        <strong>Skills</strong>
      </div>
      <div
        style={{
          display: "flex",
        }}
      >
        {skills.map((skill) => (
          <SkillTags
            skill={skill.skill}
            icon={skill.icon}
            color={skill.color}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
