import React from "react";
import Navbar from "./components/Navbar";
import VideoSection from "./components/VideoSection";
import AboutSection from "./components/AboutSection";

const App = () => {
  return (
    <div>
      <Navbar />
      <AboutSection />
      <VideoSection />
    </div>
  );
};

export default App;
