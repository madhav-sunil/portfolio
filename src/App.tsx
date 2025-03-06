import React from "react";

const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Navbar */}
      <nav className="w-full bg-blue-600 p-4 text-white fixed top-0 left-0 shadow-md ">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">My Portfolio</h1>
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#projects" className="hover:underline">Projects</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-16 flex-1 overflow-y-auto p-4">
        <section id="about" className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6 mt-6">
          <h2 className="text-2xl font-bold text-gray-800">About Me</h2>
          <p className="text-gray-600 mt-2">Welcome to my portfolio. Here you'll find my projects and experiences.</p>
        </section>

        <section id="projects" className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6 mt-6">
          <h2 className="text-2xl font-bold text-gray-800">Projects</h2>
          <p className="text-gray-600 mt-2">A showcase of my work.</p>
        </section>

        <section id="contact" className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6 mt-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Contact</h2>
          <p className="text-gray-600 mt-2">Get in touch with me.</p>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
