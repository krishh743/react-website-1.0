import React, { useEffect, useRef, useState } from "react";
import { FaCheckCircle, FaDotCircle } from "react-icons/fa";
// import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/globle.css";

const steps = [
  {
    title: "1",
  },
  {
    title: "2",
  },
  {
    title: "3",
  },
  {
    title: "4",
  },
  {
    title: "5",
  },
];

const VerticalStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const stepperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (stepperRef.current) {
        const stepperPosition =
          stepperRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Calculate which step should be active based on scroll position
        const stepIndex = Math.floor((windowHeight - stepperPosition) / windowHeight);
        setActiveStep(stepIndex);
        // Seek video to appropriate timestamp based on active step
        if (videoRef.current) {
          videoRef.current.currentTime = stepIndex;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    if (videoRef.current) {
      videoRef.current.currentTime = index;
    }
  };

  return (
    <div className="stepper-container">
      {/* <div className="main-ss"> */}
      <div className={`main-ss`}>
        <div className="stepper-headings">
          <span className="medium-heading">
            Work with our Seamless Process From Day-1 to Selling the 1st Copy.
          </span>
          <span className="stepper-subheading">
            {" "}
            - You give us content, we do everything else!
          </span>
        </div>
        <div className="stepper-section">
          <div className="stepper-left-contents-size">
            <video
              ref={videoRef}
              src={"/images/stepper.webm"}
              // src={'https://zebralearn-content-studio.s3.ap-south-1.amazonaws.com/training/Revised+Videos/Welcome%C2%A0to%C2%A0ZebraLearn.mp4'}
              height={400}
              width={350}
              autoPlay
            />
          </div>
          <div className="stepper" ref={stepperRef}>
            {steps.map((step, index) => (
              <div
                key={index}
                className={`step ${index === activeStep ? "active" : ""}`}
                onClick={() => handleStepClick(index)}
              >
                {index <= activeStep ? (
                  <FaCheckCircle color="#ff5612" />
                ) : (
                  <FaDotCircle />
                )}
                {index !== steps.length - 1 && (
                  <div
                    className={`line ${index === activeStep ? "active" : ""}`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="stepper-right-contents-size">
            {activeStep === 0 && (
              <div className="steppers-content">
                <button className="big-button">Start</button>
                <span className="small-heading-gray-color">
                  Topic Discovery
                </span>
                <span className="small-heading-gray-color">Strategy</span>
              </div>
            )}
            {activeStep === 1 && (
              <div className="steppers-content">
                <button className="big-button">Write</button>

                <span className="small-heading-gray-color">
                  {" "}
                  Content Submission
                </span>
                <span className="small-heading-gray-color">
                  Content Writer Assigned
                </span>
                <span className="small-heading-gray-color">
                  Content Editing
                </span>
              </div>
            )}

            {activeStep === 2 && (
              <div className="steppers-content">
                <button className="big-button">Design</button>

                <span className="small-heading-gray-color">
                  {" "}
                  Designer Assigned
                </span>
                <span className="small-heading-gray-color">
                  Conceptualization of the book
                </span>
                <span className="small-heading-gray-color">
                  Design edits completion{" "}
                </span>
              </div>
            )}
            {activeStep === 3 && (
              <div className="steppers-content">
                <button className="big-button">Marketing</button>

                <span className="small-heading-gray-color">
                  {" "}
                  Marketing Material creation
                </span>
                <span className="small-heading-gray-color">
                  Strategize Marketing for targeted readers
                </span>
                <span className="small-heading-gray-color">
                  Set up Marketing for Launch
                </span>
              </div>
            )}
            {activeStep === 4 && (
              <div className="steppers-content">
                <button className="big-button">Launch</button>

                <span className="small-heading-gray-color">
                  {" "}
                  Printed Books Arrival
                </span>
                <span className="small-heading-gray-color">
                  Live on Marketplace
                </span>
                <span className="small-heading-gray-color">
                  Start earning royalty per sale
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalStepper;
