import React from "react";

function ExpectsFeatureZl() {
  const zlFeatures = [
    {
      id: 1,
      imageOne: "/images/landing-page/ic_zl_guidance.png",
    },
    {
      id: 2,
      imageOne: "/images/landing-page/ic_zl_promote.svg",
    },
    {
      id: 3,
      imageOne: "/images/landing-page/ic_zl_quality.svg",
    },
    {
      id: 4,
      imageOne: "/images/landing-page/ic_zl_payment.svg",
    },
  ];

  return (
    <section className="py-3 py-md-5 py-xl-8">
      <div className="container text-center mt-5">
        <div className="row">
          <div className="">
            <h2 className="all-page-heading">
              What to Expect When you Work with ZebraLearn.
            </h2>
          </div>
        </div>
      </div>

      <div className="container mt-5 d-flex justify-content-center">
        <div
          className="row row-cols-1 row-cols-md-2 row-cols-xl-2 gap-4 justify-content-center"
          style={{ maxWidth: "90%" }}
        >
          {zlFeatures.map((ic, index) => (
            // <div className="" key={index}>
            <div
              className="bg-white order-card d-flex justify-content-center align-items-center"
              style={{ width: "414px" }}
            >
              <figure className="rounded rounded-3 overflow-hidden bsb-overlay-hover m-0">
                <img
                  className="img-fluid bsb-scale-up bsb-hover-scale"
                  loading="lazy"
                  src={ic.imageOne}
                  alt=""
                  width={400}
                />
              </figure>
            </div>
            // </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExpectsFeatureZl;
