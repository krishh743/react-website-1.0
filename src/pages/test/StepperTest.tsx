import React, { useEffect, useRef, useState } from "react";
import { FaCheckCircle, FaDotCircle } from "react-icons/fa";
import "./StepperTest.css";
import { Button } from "react-bootstrap";

const steps = [
  { title: "0" },
  { title: "1" },
  { title: "2" },
  { title: "3" },
  { title: "4" },
];

function StepperTest() {
  const [activeStep, setActiveStep] = useState(0);
  const stepperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (stepperRef.current) {
        const stepperPosition =
          stepperRef.current.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        const scrollPosition = window.scrollY;

        // Calculate which step should be active based on scroll position
        const stepIndex = Math.floor((scrollPosition - stepperPosition) / 2000);
        setActiveStep(stepIndex >= 0 ? stepIndex : 0);

        // Seek video to appropriate timestamp based on active step
        if (videoRef.current) {
          videoRef.current.currentTime = stepIndex >= 0 ? stepIndex : 0;
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
          <h1 className="sub-heading">
            Work with our Seamless Process From Day-1 to Selling the 1st Copy.
          </h1>
          <h2 className="stepper-subheading">
            {" "}
            - You give us content, we do everything else!
          </h2>
        </div>
        <div className="stepper-section">
          <div className="stepper-left-contents-size">
            <video
              ref={videoRef}
              src={
                "https://res.cloudinary.com/imagist/video/fetch/q_auto/f_auto/https%3A%2F%2Ftodoist.com%2Fstatic%2Fhome%2Fcomplexity-slider%2Fcomplexity-video.mp4"
              }
              // src={'https://zebralearn-content-studio.s3.ap-south-1.amazonaws.com/training/Revised+Videos/Welcome%C2%A0to%C2%A0ZebraLearn.mp4'}
              height={500}
              width={500}
              autoPlay
              muted
            />
          </div>
          <div className="stepper" ref={stepperRef}>
            {steps.map((step, index) => (
              <div
                key={index}
                className={`selling-step ${
                  index === activeStep ? "active" : ""
                }`}
                onClick={() => handleStepClick(index)}
              >
                {index <= activeStep ? (
                  <FaCheckCircle color="#ff5612" />
                ) : (
                  <FaDotCircle />
                )}
                {index !== steps.length - 1 && (
                  <div
                    className={`selling-step-line ${
                      index === activeStep ? "active" : ""
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="stepper-right-contents-size">
            {activeStep === 0 && (
              <div className="steppers-content">
                <Button
                  variant="primary fw-lightly"
                  style={{ height: 40, width: 135 }}
                >
                  Start
                </Button>
                <span className="small-heading-gray-color">
                  Topic Discovery
                </span>
                <span className="small-heading-gray-color">Strategy</span>
              </div>
            )}
            {activeStep === 1 && (
              <div className="steppers-content">
                <Button
                  variant="primary fw-lightly"
                  style={{ height: 40, width: 135 }}
                >
                  Write
                </Button>

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
                <Button
                  variant="primary fw-lightly"
                  style={{ height: 40, width: 135 }}
                >
                  Design
                </Button>

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
                <Button
                  variant="primary fw-lightly"
                  style={{ height: 40, width: 135 }}
                >
                  Marketing
                </Button>

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
                <Button
                  variant="primary fw-lightly"
                  style={{ height: 40, width: 135 }}
                >
                  Launch
                </Button>

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
}

export default StepperTest;
