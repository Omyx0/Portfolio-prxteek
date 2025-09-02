import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  // Smooth scroll to sections
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw] bg-[#050414] bg-opacity-50 backdrop-blur-lg border-t border-gray-800">
      <div className="container mx-auto text-center">
        {/* Logo / Name */}
        <h2 className="text-xl font-semibold text-purple-500">Prateek Amar Batham</h2>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
            { name: "Contact", id: "contact" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaFacebook />, link: "#" },
            { icon: <FaTwitter />, link: "#" },
            { icon: <FaLinkedin />, link: "#" },
            { icon: <FaInstagram />, link: "#" },
            { icon: <FaYoutube />, link: "#" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Contact Details */}
        <div className="mt-4 text-gray-300 space-y-1">
          <p>Email: <a href="Email: om31batham10@gmail.com" className="hover:text-purple-500">om31batham10@gmail.com</a></p>
          <p>Phone: <a href="Phone: +91 94243 16742" className="hover:text-purple-500">+91 94243 16742</a></p>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 mt-6">
          © {new Date().getFullYear()} Prateek Amar Batham. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
