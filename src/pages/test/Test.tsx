import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Test.css"; // Import your CSS file for styling

const TestPage: React.FC = () => {
  const [allVideos, setVideos] = useState([
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
  ]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const videoContainer = document.querySelector(".video-container");
      if (!videoContainer) return;

      const videoContainerRect = videoContainer.getBoundingClientRect();
      const rows = document.querySelectorAll(".text-section > div");

      let maxVisiblePercentage = 0;
      let maxVisibleIndex = 0;

      rows.forEach((row, index) => {
        const rowRect = row.getBoundingClientRect();
        // Calculate the visible percentage of the row in the viewport
        const visiblePercentage =
          (Math.min(videoContainerRect.bottom, rowRect.bottom) - Math.max(videoContainerRect.top, rowRect.top)) /
          rowRect.height; // No need to handle division by zero as height won't be zero

        if (visiblePercentage > maxVisiblePercentage) {
          maxVisiblePercentage = visiblePercentage;
          maxVisibleIndex = index;
        }
      });

      setCurrentVideoIndex(maxVisibleIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Load and play the video when the currentVideoIndex changes
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  }, [currentVideoIndex]);

  return (
    <div className="App">
      <div className="main-container">
        <div className="row-contents-section">
          <div className="text-section">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "40px",
                  minHeight: "100vh", // Change minHeight to 100vh to cover the entire viewport height
                  alignContent: "center",
                  justifyContent: "center"
                }}
              >
                <span style={{ fontSize: "18px", color: "red" }}>
                  Clear your mind
                </span>
                <span style={{ fontSize: "40px", fontWeight: "bold" }}>
                  The fastest way to get tasks out of your head.
                </span>
                <span style={{ fontSize: "18px", color: "gray" }}>
                  Type just about anything into the task field and Todoist’s
                  one-of-its-kind natural language recognition will instantly
                  fill your to-do list.
                </span>
              </div>
            ))}
          </div>
          <div className="video-container">
            <video ref={videoRef} width={500} height={500} controls>
              <source src={allVideos[currentVideoIndex]} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
