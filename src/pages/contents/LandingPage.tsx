import React, { useEffect, useState } from "react";
import SLIDUNG_IMAGE from "../../assets/sliding_image.png";
import "../../styles/globle.css";

function LandingPage() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 100;
      setShowContent(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="first-landing-page">
      <div className="main-heading-section">
        <div className="heading">
          <span style={{ fontSize: "60px", fontWeight: "bold" }}>
            Organize your work
          </span>
          <span style={{ fontSize: "60px", fontWeight: "bold" }}>
            {" "}
            and life, finally.
          </span>
        </div>

        <div
          style={{
            fontSize: "20px",
            maxWidth: "600px",
            color: "gray",
            lineHeight: "30px",
            textAlign: "center", // Center align text for smaller screens
          }}
        >
          Become focused, organized, and calm with Todoist. The world’s #1 task
          manager and to-do list app.
        </div>
        <button
          style={{
            width: "150px",
            height: "50px",
            backgroundColor: "#FF5612",
            color: "white",
            fontWeight: "bold",
            border: "none",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Start Free
        </button>

        <div className="bg-image">
          <div
            className={`scroll-triggered-content ${
              showContent ? "visible" : ""
            }`}
            style={{
              transform: `translateY(${showContent ? "0" : "200px"})`,
              opacity: showContent ? 1 : 0,
            }}
          >
            <div style={{ width: "800px" }}>
              <img
                src={SLIDUNG_IMAGE}
                alt=""
                style={{ width: "800px", height: "500px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
