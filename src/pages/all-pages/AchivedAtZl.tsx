import React from "react";

function AchivedAtZl() {
  const achievedAtZl = [
    {
      id: 1,
      imageOne: "/images/landing-page/ic_achieved_1.svg",
    },
    {
      id: 2,
      imageOne: "/images/landing-page/ic_achieved_2.svg",
    },
    {
      id: 3,
      imageOne: "/images/landing-page/ic_achieved_3.svg",
    },
  ];

  return (
    <section className="bsb-service-6 py-5 py-xl-8 text-center">
      <div className="container text-center mt-5">
        <div className="row">
          {/* <div className=""> */}
          <h2 className="small-heading-red-color">How can ZebraLearn Help?</h2>
          {/* </div> */}
        </div>
      </div>
      <div className="container text-center mt-4">
        <div className="row">
          {/* <div className=""> */}
          <h2 className="small-heading-black-color">
            What we have achieved so far!
          </h2>
          {/* </div> */}
        </div>
      </div>
      <div className="container text-center mt-4 headings-width">
        <div className="row">
          {/* <div className=""> */}
          <h2 className="reach-name">
            ZebraLearn has been creating and selling books for 4+ years now!
            With Multiple Bestsellers & thousands of 5 Star Reviews, we are a
            thriving platform for ambitious authors.
          </h2>
          {/* </div> */}
        </div>
      </div>
      <div className="container overflow-hidden mt-5">
        <div className="row gy-4 gy-md-0 gx-xxl-5 justify-content-center">
          {achievedAtZl.map((ic, index) => (
            <div key={ic.id} className="col-12 col-md-4">
              <figure className="overflow-hidden bsb-overlay-hover m-0">
                <img
                  className="img-fluid bsb-scale-up bsb-hover-scale"
                  loading="lazy"
                  src={ic.imageOne}
                  alt=""
                />
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AchivedAtZl;
