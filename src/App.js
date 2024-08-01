import React from "react";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import VideoSection from "./components/VideoSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow">
        <AboutSection />
        <VideoSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
