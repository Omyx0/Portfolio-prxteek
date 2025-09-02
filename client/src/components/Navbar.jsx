import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ContactModal from "./ContactModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isContactOpen, setIsContactOpen] = useState(false);

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "tools", label: "Tools" },
    { id: "education", label: "Education" },
  ];

  // Scroll tracking for background + active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      let currentSection = "about";
      menuItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = item.id;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll
  const handleScrollTo = (id) => {
    setIsOpen(false);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition duration-300 px-4 md:px-8 ${
          isScrolled
            ? "bg-[#050414]/60 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="text-white py-5 flex items-center justify-between w-full">
          {/* === Left: Logo === */}
          <div className="flex-shrink-0">
            <button
              onClick={() => handleScrollTo("about")}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <img
                src="/logo.png"
                alt="Logo"
                className="h-10 w-10 object-contain"
              />
              <span className="hidden md:block font-semibold">Portfolio</span>
            </button>
          </div>

          {/* === Center: Menu === */}
          <ul className="hidden md:flex flex-1 justify-center space-x-8 text-gray-300">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleScrollTo(item.id)}
                  className={`cursor-pointer transition ${
                    activeSection === item.id
                      ? "text-[#8245ec] font-semibold"
                      : "hover:text-[#8245ec]"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* === Right: Socials + Contact + Mobile Toggle === */}
          <div className="flex items-center space-x-4 flex-shrink-0">
            {/* Socials + Contact button (desktop) */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="https://github.com/your-github"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#8245ec]"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/your-linkedin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#8245ec]"
              >
                <FaLinkedin size={24} />
              </a>

              <button
                onClick={() => setIsContactOpen(true)}
                className="ml-4 px-4 py-2 bg-[#8245ec] text-white rounded hover:bg-[#9b63ff] transition"
              >
                Contact
              </button>
            </div>

            {/* Mobile toggle */}
            <div className="md:hidden">
              {isOpen ? (
                <FiX
                  className="text-3xl text-[#8245ec] cursor-pointer"
                  onClick={() => setIsOpen(false)}
                />
              ) : (
                <FiMenu
                  className="text-3xl text-[#8245ec] cursor-pointer"
                  onClick={() => setIsOpen(true)}
                />
              )}
            </div>
          </div>
        </div>

        {/* === Mobile Menu === */}
        {isOpen && (
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-80 backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
            <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleScrollTo(item.id)}
                    className={`cursor-pointer transition ${
                      activeSection === item.id
                        ? "text-[#8245ec] font-semibold"
                        : "hover:text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}

              {/* Socials (mobile) */}
              <div className="flex space-x-4 mt-2">
                <a
                  href="https://github.com/your-github"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/your-linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>

              {/* Contact button (mobile) */}
              <button
                onClick={() => setIsContactOpen(true)}
                className="mt-4 px-4 py-2 bg-[#8245ec] text-white rounded hover:bg-[#9b63ff] transition"
              >
                Contact
              </button>
            </ul>
          </div>
        )}
      </nav>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
};

export default Navbar;
