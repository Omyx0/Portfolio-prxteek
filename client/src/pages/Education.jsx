import React from "react";

const Education = () => {
  const education = [
    { degree: "B.Tech CSE", year: "2024 - 2028", place: "MITS-DU Gwalior" },
    { degree: "Higher Secondary", year: "2022 - 2023", place: "Govt. JiwajiRao H. S. School Gwalior" },
  ];

  return (
    <section id="education" className="px-[10vw] py-16">
      <h2 className="text-3xl font-bold text-white mb-8">Education</h2>
      <ul className="space-y-4">
        {education.map((edu, index) => (
          <li key={index} className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl text-purple-400">{edu.degree}</h3>
            <p className="text-gray-300">{edu.place}</p>
            <span className="text-sm text-gray-400">{edu.year}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Education;
