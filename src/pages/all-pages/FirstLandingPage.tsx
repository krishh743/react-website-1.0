import React from "react";
import Button from "../../components/buttons/Button";

function FirstLandingPage() {
  return (
    <section className="first-page-height py-xl-8">
      <div className="container text-center d-flex flex-column gap-4 justify-content-center align-items-center">
        {/* <div className="first-page-logo" >
          <img src="/images/zebra_learn_logo.webp" alt="first_logo" style={{height:"100%"}} />
        </div> */}

        <h3 className="big-heading">
          Publish a book that transforms your expertise & impacts millions of
          learners.
        </h3>
        <h2 className="first-subheading">
          All ZebraLearn books started with an idea. It’s your turn to bring
          your idea to the table and write a book with us!
        </h2>
        <Button variant="primary" className="btn bsb-btn-2xl btn-outline-light">
          Write with us
        </Button>
      <div className="container mobile-screenshot-visible mt-3">
        <div className="row screenshot-for-desktop">
          <img src="/images/landing-page/ic_screenshot_1.svg" alt="" />
        </div>
        <div className="row screenshot-for-mobile">
          <img src="/images/landing-page/ic_mobile_screenshot.png" alt="" />
        </div>
      </div>
      </div>


    </section>
  );
}

export default FirstLandingPage;
