import React from "react";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const projects = [
    { title: "Portfolio Website", description: "A personal portfolio built with React & Tailwind.", link: "#" },
    { title: "E-commerce App", description: "MERN stack app with authentication & payments.", link: "#" },
    { title: "Chat Application", description: "Real-time chat app using Socket.io & MongoDB.", link: "#" },
  ];

  return (
    <section id="projects" className="py-16 px-[7vw] lg:px-[20vw] text-white">
      <h2 className="text-3xl font-bold mb-8 text-purple-400">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, idx) => (
          <ProjectCard key={idx} title={p.title} description={p.description} link={p.link} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
