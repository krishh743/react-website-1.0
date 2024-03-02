import React from "react";
import FooterNew from "../footer/Footer";
import "../../styles/globle.css";
import Header from "../header/Header";
import ReachedBooks from "../../pages/all-pages/ReachedBooks";
import FirstLandingPage from "../../pages/all-pages/FirstLandingPage";
import VerticalStepper from "../../pages/all-pages/VerticleStepper";
import RegisterProcess from "../../pages/all-pages/RegisterProcess";
import TestimonialPage from "../../pages/all-pages/TestimonialPage";
import RowsPages from "../../pages/all-pages/RowsPages";
import ExpectsFeatureZl from "../../pages/all-pages/ExpectsFeatureZl";
import AchivedAtZl from "../../pages/all-pages/AchivedAtZl";
import DownloadAppPage from "../../pages/all-pages/DownloadAppPage";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <FirstLandingPage/>
      <VerticalStepper/>
      <ReachedBooks />
      <RowsPages/>
      <ExpectsFeatureZl/>
      <AchivedAtZl/>
      <RegisterProcess/>
      <TestimonialPage/>
      <DownloadAppPage/>
      <FooterNew />
    </div>
  );
};

export default AppLayout;
