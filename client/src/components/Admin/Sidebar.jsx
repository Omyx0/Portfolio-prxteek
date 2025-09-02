import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-gray-900 text-white fixed left-0 top-0 shadow-lg">
      <div className="p-6 text-xl font-bold text-purple-500">Admin Panel</div>
      <ul className="space-y-4 px-4">
        <li>
          <Link to="/admin/about" className="hover:text-purple-400">
            Manage About
          </Link>
        </li>
        <li>
          <Link to="/admin/skills" className="hover:text-purple-400">
            Manage Skills
          </Link>
        </li>
        <li>
          <Link to="/admin/projects" className="hover:text-purple-400">
            Manage Projects
          </Link>
        </li>
        <li>
          <Link to="/admin/education" className="hover:text-purple-400">
            Manage Education
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
