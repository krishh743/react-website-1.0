import React, { useState, useEffect } from "react";
import "./SlidingTest.css";

function SlidingTest() {
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
    <div style={{ padding: "30px" }}>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, eaque
        dolorem assumenda pariatur ducimus voluptatem eos facilis laboriosam
        blanditiis nulla ipsum nemo perspiciatis magnam eum fugiat labore quasi
        odio neque?
      </h1>

      <div className="main-container">
        <div className="first-div">
          <div className="second-div">
            <video
              height={1000}
              width={1500}
              autoPlay
              muted
              playsInline
              src={
                "https://res.cloudinary.com/imagist/video/fetch/q_auto/f_auto/https%3A%2F%2Ftodoist.com%2Fstatic%2Fhome-teams%2Fintro%2Fbackground-video.mp4"
              }
              // src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
            />
          </div>
          <div className="third-div">
            <div className="fourth-div">
              <img
                src={"/images/sliding_image.png"}
                alt=""
                style={{
                    transform: `translateY(calc(${888.889 - scrollPosition}px))`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlidingTest;
