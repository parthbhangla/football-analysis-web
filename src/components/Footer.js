import React from "react";

const Footer = () => {
  return (
    <footer className="bg-neutral-100 text-neutral-800 py-4">
      <div className="container mx-auto flex flex-col items-center">
        <p className="text-sm mb-2">
          Credits ©{" "}
          <a
            href="https://parthbhangla.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 transition-all duration-300"
          >
            Parth Bhangla
          </a>{" "}
          2024
        </p>
        <div className="flex space-x-6">
          <a
            href="https://x.com/parthbhangla"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 transition-all duration-300"
          >
            Twitter
          </a>
          <a
            href="https://github.com/parthbhangla"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 transition-all duration-300"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/parthbhangla/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 transition-all duration-300"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
