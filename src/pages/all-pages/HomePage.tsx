import React from "react";
import "../../styles/globle.css";
import { companinesData } from "../../utills/data";

function HomePage() {
  return (
    <div className="main-contents">
      <div className="logos-section">
        <div style={{ fontSize: "20px" }}>
          30 million+ people and teams trust their sanity and productivity to
          Todoist
        </div>
        <div className="logos-group">
          {companinesData.map((logo) => (
            <div
              key={logo.id}
              style={{ display: "flex", alignItems: "center" }}
            >
              <div style={{ height: "40px", width: "40px" }}>
                <img
                  src={logo.imageSrc}
                  alt={logo.name}
                  style={{ height: "100%" }}
                />
              </div>
              <div
                style={{ fontSize: "30px", marginLeft: "10px", color: "gray" }}
              >
                {logo.name}
              </div>
            </div>
          ))}
        </div>
        <div className="main-container">
          <div className="row-contents-section">
            <div className="text-section">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "40px",
                  minHeight: "70vh",
                  alignContent: "center",
                  justifyContent: "center",
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
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "40px",
                  minHeight: "80vh",
                  alignContent: "center",
                  justifyContent: "center",
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
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "40px",
                  minHeight: "80vh",
                  alignContent: "center",
                  justifyContent: "center",
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
            </div>
            <div className="video-container">
              <video width={500} height={500} controls>
                <source
                  src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
