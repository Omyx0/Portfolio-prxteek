import React from "react";
import skillIcons from "../lib/skillIcons";

const SkillCard = ({ skill, level }) => {
  const Icon = skillIcons[skill.toLowerCase()]; // Match from stock

  return (
    <div className="flex items-center justify-between bg-[#1a1a2e] p-4 rounded-lg shadow-md mb-4">
      {/* Icon + Skill */}
      <div className="flex items-center space-x-3">
        {Icon && <Icon className="text-2xl text-purple-400" />}
        <span className="text-lg font-semibold capitalize">{skill}</span>
      </div>

      {/* Progress bar */}
      <div className="flex-1 ml-6">
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div
            className="bg-purple-500 h-2 rounded-full"
            style={{ width: `${level}%` }}
          ></div>
        </div>
      </div>

      {/* Level text */}
      <span className="ml-3 text-sm text-gray-400">{level}%</span>
    </div>
  );
};

export default SkillCard;
