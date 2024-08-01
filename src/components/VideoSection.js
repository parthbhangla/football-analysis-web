import React from "react";
import INPUT from "../assets/input.mp4";
import OUTPUT from "../assets/output.mp4";

const VideoSection = () => {
  return (
    <section className="py-8 px-4 bg-background text-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Input Video */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4">Input Video</h2>
            <div
              className="relative w-full rounded-lg overflow-hidden shadow-lg"
              style={{ paddingTop: "56.25%" }}
            >
              <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                controls
                src={INPUT}
                title="Input Video"
              />
            </div>
          </div>

          {/* Output Video */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4">Output Video</h2>
            <div
              className="relative w-full rounded-lg overflow-hidden shadow-lg"
              style={{ paddingTop: "56.25%" }}
            >
              <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                controls
                src={OUTPUT}
                title="Output Video"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
