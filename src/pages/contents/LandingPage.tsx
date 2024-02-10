import React, { useEffect, useState } from "react";
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
        <div>
          <span className="big-heading">
            Publish a book that transforms your expertise
          </span>
          <span className="big-heading"> & impacts millions of learners.</span>
        </div>

        <div className="first-subheading">
          All ZebraLearn books started with an idea. It’s your turn to bring
          your idea to the table and write a book with us!
        </div>
        <button className="big-button">Write with us</button>

        <div
          className="bg-image"
          style={{ backgroundImage: ' url("/images/scroll_banner.png")' }}
        >
          {" "}
          <div
            className={`scroll-triggered-content ${
              showContent ? "visible" : ""
            }`}
            style={{
              transform: `translateY(${showContent ? "0" : "200px"})`,
              opacity: showContent ? 1 : 0,
            }}
          >
            <div className="slide-image">
              <img src={"/images/sliding_image.png"} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
