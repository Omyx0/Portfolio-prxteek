import React from "react";
import { Typewriter } from "react-simple-typewriter";
import profileImage from "../assets/profile.jpg"; // replace with your image

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-[7vw] lg:px-[20vw] py-12 bg-gray-900"
    >
      {/* Left Side */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
          Hi, I am
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Prateek Amar Batham
        </h2>

        <h3 className="text-xl md:text-2xl font-semibold text-[#8245ec] mb-6">
          <span className="text-white">I am a </span>
          <Typewriter
            words={[
              "Fullstack Developer",
              "App Developer",
              "UI/UX Designer",
              "Coder",
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </h3>

        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
          I am a full-stack developer passionate about building modern,
          scalable web applications. Skilled in the MERN stack and other
          technologies, I love creating seamless user experiences and efficient
          solutions.
        </p>

        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-purple-600 to-fuchsia-500 text-white py-3 px-8 rounded-full font-bold hover:scale-105 transition-transform shadow-lg"
        >
          DOWNLOAD CV
        </a>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0">
        <img
          src={profileImage}
          alt="Profile"
          className="w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 rounded-full border-4 border-purple-700 shadow-[0_10px_20px_rgba(130,69,236,0.5)] object-cover"
        />
      </div>
    </section>
  );
};

export default About;
