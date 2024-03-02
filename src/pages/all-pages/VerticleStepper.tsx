import React, { useEffect, useRef, useState } from "react";
import { FaDotCircle } from "react-icons/fa";
// import { RiExpandUpDownLine } from "react-icons/ri";
// import { PiCheckCircleBold } from "react-icons/pi";
import { FaCircle } from "react-icons/fa";
import { FaRegDotCircle } from "react-icons/fa";
import { stepersData } from "../../utills/data";
import { Zoom } from "react-awesome-reveal";

const VerticalStepper = () => {
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
        const stepIndex = Math.floor((scrollPosition - stepperPosition) / 400);
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
    <section className="py-3 py-md-5 py-xl-8">
      <div className="container stepper-container mt-5">
        {/* <div className="main-ss"> */}
        <div className={`main-ss`}>
          <div className="stepper-headings headings-width">
            <h1 className="all-page-heading">
              Work with our Seamless Process From Day-1 to Selling the 1st Copy.
            </h1>
            <h2 className="all-page-sub-heading">
              {" "}
              - You give us content, we do everything else!
            </h2>
          </div>
          <div className="stepper-section">
            <div className="stepper-left-contents-size">
              {stepersData.map((step, index) => (
                <div
                  key={index}
                  style={{ display: index === activeStep ? "block" : "none" }}
                >
                  <img
                    width={400}
                    height={450}
                    src={step.leftSideImage}
                    alt={step.tooltip}
                  />
                </div>
              ))}
            </div>
            <div className="stepper" ref={stepperRef}>
              {stepersData.map((step, index) => (
                <div
                  key={index}
                  className={`selling-step ${
                    index === activeStep ? "active" : ""
                  }`}
                  onClick={() => handleStepClick(index)}
                >
                  {index <= activeStep - 1 ? (
                    <FaRegDotCircle size={22} color="#ff5612" />
                  ) : index === activeStep ? (
                    <Zoom>
                      <div
                        className="d-flex justify-content-center align-items-center"
                        style={{
                          backgroundColor: "#FF5612",
                          borderRadius: "50%",
                          height: "46px",
                          width: "46px",
                        }}
                      >
                        <FaCircle size={18} color="#ffffff" />
                      </div>
                    </Zoom>
                  ) : (
                    <FaDotCircle size={22} />
                  )}
                  {index !== stepersData.length - 1 && (
                    <div
                      className={`selling-step-line ${
                        index === activeStep ? "active" : ""
                      }`}
                      style={{
                        backgroundColor:
                          index <= activeStep - 1 ? "#FF5612" : "#dad9d8",
                      }}
                    />
                  )}
                  {index === activeStep && (
                    <span className="tooltiptext">{step.tooltip}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="stepper-right-contents-size">
              {activeStep === 0 && (
                <div className="d-flex justify-content-between align-items-start flex-column gap-2">
                  <div className="steppers-content">
                    {/*<Button variant="primary fw-lightly" style={{height: 40, width: 135}}>Start</Button>*/}
                    <div className="steppers-points-font d-flex justify-content-center flex-row gap-3 align-items-center">
                      <span className="stepper-icons-size">
                        <img
                          style={{ height: "100%", width: "100%" }}
                          src={"/images/landing-page/steps/p1.svg"}
                          alt="point1"
                        />
                      </span>{" "}
                      Topic Discovery
                    </div>
                    <div className="steppers-points-font d-flex justify-content-center flex-row gap-3 align-items-center">
                      <span className="stepper-icons-size">
                        <img
                          style={{ height: "100%", width: "100%" }}
                          src={"/images/landing-page/steps/p2.svg"}
                          alt="point2"
                        />
                      </span>
                      Strategy
                    </div>
                  </div>
                  <div className="all-stepper-image-right">
                    <img
                      src="/images/landing-page/ic_step_1.svg"
                      alt=""
                      style={{ height: "100%", width: "100%" }}
                    />
                  </div>
                </div>
              )}
              {activeStep === 1 && (
                <div className="d-flex justify-content-between align-items-start flex-column gap-2">
                  <div className="steppers-content">
                    {/*<Button variant="primary fw-lightly" style={{height: 40, width: 135}}>Write</Button>*/}

                    <div className="steppers-points-font d-flex justify-content-center flex-row gap-3 align-items-center">
                      <span className="stepper-icons-size">
                        <img
                          style={{ height: "100%", width: "100%" }}
                          src={"/images/landing-page/steps/p3.svg"}
                          alt="poin3"
                        />
                      </span>{" "}
                      Content Submission
                    </div>
                    <div className="steppers-points-font d-flex justify-content-center flex-row gap-3 align-items-center">
                      <span className="stepper-icons-size">
                        <img
                          style={{ height: "100%", width: "100%" }}
                          src={"/images/landing-page/steps/p4.svg"}
                          alt="poin4"
                        />
                      </span>{" "}
                      Content Writer Assigned
                    </div>
                    <div className="steppers-points-font d-flex justify-content-center flex-row gap-3 align-items-center">
                      <span className="stepper-icons-size">
                        <img
                          style={{ height: "100%", width: "100%" }}
                          src={"/images/landing-page/steps/p5.svg"}
                          alt="poin5"
                        />
                      </span>{" "}
                      Content Editing
                    </div>
                  </div>
                  <div className="all-stepper-image-right">
                    <img
                      src="/images/landing-page/ic_step_2.svg"
                      alt=""
                      style={{ height: "100%", width: "100%" }}
                    />
                  </div>
                </div>
              )}

              {activeStep === 2 && (
                <div className="d-flex justify-content-between align-items-start flex-column gap-2">
                  <div className="steppers-content">
                    {/*<Button variant="primary fw-lightly" style={{height: 40, width: 135}}>Design</Button>*/}

                    <div className="steppers-points-font d-flex justify-content-center flex-row gap-3 align-items-center">
                      <span className="stepper-icons-size">
                        <img
                          style={{ height: "100%", width: "100%" }}
                          src={"/images/landing-page/steps/p6.svg"}
                          alt="poin6"
                        />
                      </span>{" "}
                      Designer Assigned
                    </div>
                    <div className="steppers-points-font d-flex justify-content-center flex-row gap-3 align-items-center">
                      <span className="stepper-icons-size">
                        <img
                          style={{ height: "100%", width: "100%" }}
                          src={"/images/landing-page/steps/p7.svg"}
                          alt="poin7"
                        />
                      </span>{" "}
                      Conceptualization of the book
                    </div>
                    <div className="steppers-points-font d-flex justify-content-center flex-row gap-3 align-items-center">
                      <span className="stepper-icons-size">
                        <img
                          style={{ height: "100%", width: "100%" }}
                          src={"/images/landing-page/steps/p8.svg"}
                          alt="poin8"
                        />
                      </span>{" "}
                      Design edits completion{" "}
                    </div>
                  </div>
                  <div className="all-stepper-image-right">
                    <img
                      src="/images/landing-page/ic_step_3.svg"
                      alt=""
                      style={{ height: "100%", width: "100%" }}
                    />
                  </div>
                </div>
              )}
              {activeStep === 3 && (
                <div className="d-flex justify-content-between align-items-start flex-column gap-2">
                  <div className="steppers-content">
                    {/*<Button variant="primary fw-lightly" style={{height: 40, width: 135}}>Marketing</Button>*/}

                    <div className="steppers-points-font d-flex justify-content-center flex-row gap-3 align-items-center">
                      <span className="stepper-icons-size">
                        <img
                          style={{ height: "100%", width: "100%" }}
                          src={"/images/landing-page/steps/p1.svg"}
                          alt="poin1"
                        />
                      </span>{" "}
                      Marketing Material creation
                    </div>
                    <div className="steppers-points-font d-flex justify-content-center flex-row gap-3 align-items-center">
                      <span className="stepper-icons-size">
                        <img
                          style={{ height: "100%", width: "100%" }}
                          src={"/images/landing-page/steps/p10.svg"}
                          alt="poin10"
                        />
                      </span>{" "}
                      Strategize Marketing for targeted readers
                    </div>
                    <div className="steppers-points-font d-flex justify-content-center flex-row gap-3 align-items-center">
                      <span className="stepper-icons-size">
                        <img
                          style={{ height: "100%", width: "100%" }}
                          src={"/images/landing-page/steps/p11.svg"}
                          alt="poin11"
                        />
                      </span>{" "}
                      Set up Marketing for Launch
                    </div>
                  </div>
                  <div className="all-stepper-image-right">
                    <img
                      src="/images/landing-page/ic_step_4.svg"
                      alt=""
                      style={{ height: "100%", width: "100%" }}
                    />
                  </div>
                </div>
              )}
              {activeStep === 4 && (
                <div className="d-flex justify-content-between align-items-start flex-column gap-2">
                  <div className="steppers-content">
                    {/*<Button variant="primary fw-lightly" style={{height: 40, width: 135}}>Launch</Button>*/}

                    <div className="steppers-points-font d-flex justify-content-center flex-row gap-3 align-items-center">
                      <span className="stepper-icons-size">
                        <img
                          style={{ height: "100%", width: "100%" }}
                          src={"/images/landing-page/steps/p12.svg"}
                          alt="poin12"
                        />
                      </span>{" "}
                      Printed Books Arrival
                    </div>
                    <div className="steppers-points-font d-flex justify-content-center flex-row gap-3 align-items-center">
                      <span className="stepper-icons-size">
                        <img
                          style={{ height: "100%", width: "100%" }}
                          src={"/images/landing-page/steps/p13.svg"}
                          alt="poin13"
                        />
                      </span>{" "}
                      Live on Marketplace
                    </div>
                    <div className="steppers-points-font d-flex justify-content-center flex-row gap-3 align-items-center">
                      <span className="stepper-icons-size">
                        <img
                          style={{ height: "100%", width: "100%" }}
                          src={"/images/landing-page/steps/p14.png"}
                          alt="poin14"
                        />
                      </span>{" "}
                      Start earning royalty per sale
                    </div>
                  </div>
                  <div className="all-stepper-image-right">
                    <img
                      src="/images/landing-page/ic_step_5.svg"
                      alt=""
                      style={{ height: "100%", width: "100%" }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerticalStepper;
