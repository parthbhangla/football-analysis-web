import React from "react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-navbarBackground text-secondary py-4 mt-auto">
      <div className="container mx-auto text-center">
        <p className="mb-2">
          Credits &copy;{" "}
          <a
            href="https://parthbhangla.vercel.app/"
            className="hover:text-linkHover"
            target="_blank"
            rel="noopener noreferrer"
          >
            Parth Bhangla
          </a>{" "}
          2024
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://x.com/parthbhangla"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-linkHover"
          >
            <FaTwitter className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/parthbhangla"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-linkHover"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/parthbhangla/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-linkHover"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
