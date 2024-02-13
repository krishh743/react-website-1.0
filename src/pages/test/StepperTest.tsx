// StepperTest.js
import React, { useState } from "react";
import "./StepperTest.css";

function StepperTest() {
  const [activeStep, setActiveStep] = useState(0); // State to keep track of active step

  // Function to handle step change
  const handleStepChange = (step:any) => {
    setActiveStep(step);
  };

  // Data for steps
  const steps = [
    {
      title: "Step 1",
      videoSrc:
        "https://res.cloudinary.com/imagist/video/fetch/q_auto/f_auto/https%3A%2F%2Ftodoist.com%2Fstatic%2Fhome%2Fcomplexity-slider%2Fcomplexity-video.mp4",
    },
    // Add more steps as needed
  ];

  return (
    <section className="stepper-container">
      {/* Left content */}
      <div className="left-content">
        <h2>{steps[activeStep].title}</h2>
        {/* Display video for active step */}
        <video muted playsInline src={steps[activeStep].videoSrc} controls />
      </div>
      {/* Stepper */}
      <div className="stepper">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`step ${index === activeStep ? "active" : ""}`}
            onClick={() => handleStepChange(index)}
          >
            {index + 1}
          </div>
        ))}
      </div>
      {/* Right content */}
      <div className="right-content">
        {/* Add your content here */}
      </div>
    </section>
  );
}

export default StepperTest;
