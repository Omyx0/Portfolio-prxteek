import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// pages as sections
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Tools from "./pages/Tools";
import Education from "./pages/Education";

const App = () => {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <main className="pt-16">
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="tools"><Tools /></section>
        <section id="education"><Education /></section>
      </main>
      <Footer />
    </div>
  );
};

export default App;