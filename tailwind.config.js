/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00ADB5",
        secondary: "#EEEEEE",
        background: "#222831",
        accent: "#393E46",
        navbarBackground: "#222c31", // Darker background for Navbar
        aboutBackground: "#222831", // Background for About Section
        aboutText: "#EEEEEE", // Text color for About Section
        linkHover: "#00ADB5", // Color for link hover
      },
    },
  },
  plugins: [],
};
