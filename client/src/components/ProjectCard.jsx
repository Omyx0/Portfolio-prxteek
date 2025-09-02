import React from "react";

const ProjectCard = ({ title, description, link }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-purple-500/30 transition-transform transform hover:-translate-y-2">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-purple-400 hover:text-purple-300 font-semibold"
      >
        View Project →
      </a>
    </div>
  );
};

export default ProjectCard;
