import React, { useState, useRef, useEffect } from "react";

const AboutSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef(null);

  const toggleExpanded = () => setIsExpanded(!isExpanded);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isExpanded
        ? `${contentRef.current.scrollHeight}px`
        : "0px";
    }
  }, [isExpanded]);

  return (
    <section className="py-8 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
        <p className="mb-4">
          In this project I detect and track players, referees, and footballs in
          a video clip using YOLO. I trained a model to improve its performance
          in detecting the ball. Additionally, I assigned players to teams based
          on the colors of their jerseys using KMeans for pixel clustering and
          segmentation. Using this information, I was able to calculate a team's
          ball acquisition in a match. I also used optical flow to measure
          camera movement between frames to accurately measure a player's
          movement. Finally, I implemented perspective transformation which
          allowed me to measure a player's movement in meters rather than
          pixels. I used this information to calculate the player's speed and
          the distance covered.
        </p>
        <div
          ref={contentRef}
          className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
            isExpanded ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="mt-4 space-y-6">
            {" "}
            {/* Added spacing here */}
            <h2 className="text-2xl font-semibold">Modules I Used</h2>
            <ul className="list-disc pl-5 mb-4">
              <li>YOLO: AI object detection model</li>
              <li>
                KMeans: Pixel segmentation and clustering to detect t-shirt
                color
              </li>
              <li>Optical Flow: Measure camera movement</li>
              <li>
                Perspective Transformation: Represent scene depth and
                perspective
              </li>
              <li>Speed and distance calculation per player.</li>
            </ul>
            <h2 className="text-2xl font-semibold">
              Requirements and Libraries
            </h2>
            <ul className="list-disc pl-5 mb-4">
              <li>Python 3.x</li>
              <li>Ultralytics</li>
              <li>Supervision</li>
              <li>OpenCV</li>
              <li>NumPy</li>
              <li>Matplotlib</li>
              <li>Pandas</li>
            </ul>
            <h2 className="text-2xl font-semibold">Future Plans</h2>
            <ul className="list-disc pl-5">
              <li>Add backend for user-uploaded clips</li>
              <li>Enhance analysis with additional metrics</li>
            </ul>
          </div>
        </div>
        <button
          onClick={toggleExpanded}
          className={`text-lg font-semibold transition-all duration-500 ease-in-out mt-${
            isExpanded ? "4" : "-4"
          } ${
            isExpanded ? "text-blue-500 hover:text-blue-700" : "text-blue-700"
          }`}
        >
          {isExpanded ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>
  );
};

export default AboutSection;
