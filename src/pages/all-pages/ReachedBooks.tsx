import React from "react";
import { companinesData } from "../../utills/data";
import { Slide } from "react-awesome-reveal";

function ReachedBooks() {
  return (
    <section className="py-3 py-md-5 py-xl-8 te">
      <div className="container text-center mt-5 headings-width">
        <div className="row">
          {/* <div className=""> */}
          <h2 className="all-page-heading">
            From captivating websites to breathtaking visual identities, our
            portfolio is a testament to our dedication.
          </h2>
          {/* </div> */}
        </div>
      </div>

      <div className="container mt-5 d-flex justify-content-center">
        <div
          className="row row-cols-1 row-cols-md-2 row-cols-xl-2 gap-5 justify-content-center"
          style={{ maxWidth: "80%" }}
        >
          {companinesData.map((logo, index) => (
            // <div className="" key={index}>
            <div
              className=" bg-white  order-card d-flex justify-content-center align-items-center"
              style={{
                height: "170px",
                width: "360px",
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Adding box shadow
              }}
            >
              <div className="media">
                <div className="media-body text-center">
                  <Slide direction="down" delay={0.2}>
                    <h3 className="reach-count">{logo.reachCount}</h3>
                  </Slide>
                  <span className="reach-name">
                    {logo.name}
                    <span className="underline-animation" />
                  </span>
                </div>
              </div>
            </div>
            // </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReachedBooks;
