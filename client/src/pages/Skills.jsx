import React from "react";
import SkillCard from "../components/SkillCard";

const Skills = () => {
  const skills = [
    { skill: "JavaScript", level: 85 },
    { skill: "React", level: 80 },
    { skill: "Node.js", level: 75 },
    { skill: "MongoDB", level: 70 },
    { skill: "Python", level: 65 },
  ];

  return (
    <section id="skills" className="py-16 px-[7vw] lg:px-[20vw] text-white">
      <h2 className="text-3xl font-bold mb-8 text-purple-400">Skills</h2>
      <div>
        {skills.map((s, idx) => (
          <SkillCard key={idx} skill={s.skill} level={s.level} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
