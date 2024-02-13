import React, { useEffect, useState } from "react";
import "../../styles/globle.css";

function LandingPage() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ paddingTop: "4rem",height:"100vh" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "3rem",
        }}
      >
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
      </div>
      <div className="main-container-sliding">
        <div className="first-div">
          <div className="second-div">
            <video
              className="video-sliding"
              height={900}
              width={1600}
              autoPlay
              muted
              playsInline
              src={
                "https://res.cloudinary.com/imagist/video/fetch/q_auto/f_auto/https%3A%2F%2Ftodoist.com%2Fstatic%2Fhome-teams%2Fintro%2Fbackground-video.mp4"
              }
            />
          </div>
          <div className="third-div">
            <div className="fourth-div">
              <img
                src={"/images/sliding_image.png"}
                alt=""
                style={{
                  // transform: `translateY(${scrollPosition+20}px)`,
                  transform: `translateY(calc(${800.889 - scrollPosition}px))`,

                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
