import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-navbarBackground text-secondary shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-6 px-8">
        <div className="text-3xl font-extrabold font-sans">
          Football Analysis Project
        </div>
        <div className="space-x-8 hidden md:flex">
          <a
            href="https://github.com/parthbhangla/football-analysis"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg hover:text-linkHover transition-all duration-300 transform hover:scale-105"
          >
            Code
          </a>
        </div>
        <button className="md:hidden text-secondary focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
