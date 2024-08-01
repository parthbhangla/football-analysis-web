import React from "react";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import VideoSection from "./components/VideoSection";
import Footer from "./components/Footer"; // Import the Footer component

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <AboutSection />
        <VideoSection />
      </main>
      <Footer /> {/* Add the Footer component here */}
    </div>
  );
}

export default App;
