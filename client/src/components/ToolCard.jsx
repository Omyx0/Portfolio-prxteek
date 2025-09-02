import React from "react";

const ToolCard = ({ icon, name }) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-purple-500/30 transition-transform transform hover:-translate-y-2">
      <div className="text-4xl text-purple-400 mb-3">{icon}</div>
      <h3 className="text-lg font-semibold text-white">{name}</h3>
    </div>
  );
};

export default ToolCard;
