import React from "react";
import Header from "../header/Header";
import LandingPage from "../../pages/contents/LandingPage";
import HomePage from "../../pages/all-pages/HomePage";
import ExploreTodo from "../../pages/all-pages/ExploreTodo";
import Footer from "../footer/Footer";
import VerticalStepper from "../../pages/all-pages/StepperPage";

const AppLayout = () => {
  return (
    // <div style={{overflowX:"hidden"}}>
    <div>
      <Header />

      <LandingPage />

      <HomePage />
      <VerticalStepper />
      <ExploreTodo />

      <Footer />
    </div>
  );
};

export default AppLayout;
