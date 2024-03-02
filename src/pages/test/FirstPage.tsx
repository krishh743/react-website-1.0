import React from "react";
import "./FirstPage.css";

function FirstPage() {
  return (
    <div className="first-div">
      <div>
        <div
          className="div-3"
          style={{
            translate: "none",
            rotate: "none",
            scale: "none",
            transform: "translate(0px, 0px)",
          }}
        >
          <video
            width="1500"
            height="690"
            muted
            playsInline
            src="https://res.cloudinary.com/imagist/video/fetch/q_auto/f_auto/https%3A%2F%2Ftodoist.com%2Fstatic%2Fhome-teams%2Fintro%2Fbackground-video.mp4"
          />
        </div>
        <div className="div-4">
          <div
            className="div-5"
            style={{
              translate: "none",
              rotate: "none",
              scale: "none",
              transform: "translate(0px, 0px)",
            }}
          >
            <img
              alt=""
              width="1200"
              height="700"
              decoding="async"
              data-nimg="1"
              style={{ color: "transparent" }}
              sizes="(max-width: 1200px) 100vw, 1200px"
              src="https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_360/https%3A%2F%2Ftodoist.com%2Fstatic%2Fhome-teams%2Fintro%2Fdesktop-layout%2Fbackground.en.png 360w, https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_384/https%3A%2F%2Ftodoist.com%2Fstatic%2Fhome-teams%2Fintro%2Fdesktop-layout%2Fbackground.en.png 384w, https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_480/https%3A%2F%2Ftodoist.com%2Fstatic%2Fhome-teams%2Fintro%2Fdesktop-layout%2Fbackground.en.png 480w, https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_768/https%3A%2F%2Ftodoist.com%2Fstatic%2Fhome-teams%2Fintro%2Fdesktop-layout%2Fbackground.en.png 768w, https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_960/https%3A%2F%2Ftodoist.com%2Fstatic%2Fhome-teams%2Fintro%2Fdesktop-layout%2Fbackground.en.png 960w, https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_1120/https%3A%2F%2Ftodoist.com%2Fstatic%2Fhome-teams%2Fintro%2Fdesktop-layout%2Fbackground.en.png 1120w, https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_1536/https%3A%2F%2Ftodoist.com%2Fstatic%2Fhome-teams%2Fintro%2Fdesktop-layout%2Fbackground.en.png 1536w, https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_2240/https%3A%2F%2Ftodoist.com%2Fstatic%2Fhome-teams%2Fintro%2Fdesktop-layout%2Fbackground.en.png 2240w, https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_2624/https%3A%2F%2Ftodoist.com%2Fstatic%2Fhome-teams%2Fintro%2Fdesktop-layout%2Fbackground.en.png 2624w"
              // src="https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_2624/https%3A%2F%2Ftodoist.com%2Fstatic%2Fhome-teams%2Fintro%2Fdesktop-layout%2Fbackground.en.png"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
