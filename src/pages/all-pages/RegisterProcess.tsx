import React from "react";
import { registerProcesses } from "../../utills/data";

const RegisterProcess = () => {
  return (
    <section className="py-5 py-xl-8">
      <div className="container text-center mt-5 headings-width">
        <div className="row">
          <h2 className="reach-name">
            Find your book's core audience and maximize your book's reach with
            ZebraLearn.
          </h2>
        </div>
      </div>
      <div className="container text-center mt-4 headings-width">
        <div className="row">
          <h2 className="small-heading-black-color">
            So you can position yourself as a go-to expert in your field and get
            the recognition, opportunities, and success that come with it.
          </h2>
        </div>
      </div>

      <div className="container overflow-hidden mt-4">
        <div className="row gy-4 gy-xl-0">
          {registerProcesses.map((card, index) => (
            <div className="col-md-6 col-lg-3 p-4" key={index}>
              <div
                className=" bg-white px-3 order-card d-flex justify-content-center align-items-center"
                style={{
                  height: "200px",
                  borderRadius: "10px",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Adding box shadow
                }}
              >
                <div className="card-body">
                  <div className="row  d-flex align-items-center justify-content-center gy-4">
                    <div className="col-12 col-lg-2">
                      <img src={card.icon} alt={card.icon} />
                    </div>
                    <div className="col-12 col-lg-10">
                      <h4 className="small-heading-red-color text-left">
                        {card.title}
                      </h4>
                    </div>
                    <div>
                      <p
                        className="process-description-size"
                        style={{
                          fontSize: "1rem",
                          fontWeight: "500",
                          lineHeight: "1.5rem",
                          color: "#727272",
                        }}
                      >
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegisterProcess;
