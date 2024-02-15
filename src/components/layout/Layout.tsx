import React from "react";
import Header from "../header/Header";
import LandingPage from "../../pages/contents/LandingPage";
import HomePage from "../../pages/all-pages/HomePage";
import ExploreTodo from "../../pages/all-pages/ExploreTodo";
import Footer from "../footer/Footer";
import VerticalStepper from "../../pages/all-pages/StepperPage";
import TestPage from "../../pages/test/Test";
import SlidingTest from "../../pages/test/SlidingTest";
import StepperTest from "../../pages/test/StepperTest";

const AppLayout = () => {
  return (
    // <div style={{overflowX:"hidden"}}>
    <div>
      <Header />
      {/* <SlidingTest /> */}
      <LandingPage />
      <StepperTest />
      {/* <TestPage/> */}
      {/* <HomePage />
      <VerticalStepper />
      <ExploreTodo /> */}

      <Footer />
    </div>
  );
};

export default AppLayout;
