import React from "react";
import ToolCard from "../components/ToolCard";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";

const Tools = () => {
  const tools = [
    { icon: <FaReact />, name: "React" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <FaDatabase />, name: "MongoDB" },
  ];

  return (
    <section id="tools" className="py-16 px-[7vw] lg:px-[20vw] text-white">
      <h2 className="text-3xl font-bold mb-8 text-purple-400">Tools</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {tools.map((t, idx) => (
          <ToolCard key={idx} icon={t.icon} name={t.name} />
        ))}
      </div>
    </section>
  );
};

export default Tools;
