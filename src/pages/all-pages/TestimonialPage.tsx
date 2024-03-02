import React from "react";
import Button from "../../components/buttons/Button";
import ContinuesCardSlider from "../../components/slider/SliderCard";
import { footerTestimonialDetails } from "../../utills/data";

const TestimonialPage = () =>{
  // const history = useNavigate();
  const numCards = 200;
  const cardWidth = 220;

  return (
    <section className="py-3 py-md-5 py-xl-8">
      <div className="container text-center mt-5 headings-width">
        <div className="row">
          <h2 className="reach-name">
            Authors who Trust Zebralearn's Approach.
          </h2>
        </div>
      </div>
      <div className="container text-center mt-4 headings-width">
        <div className="row">
          <h2 className="small-heading-black-color">
            We work with Top Experts to build a World-class knowledge base for
            our learners.
          </h2>
        </div>
      </div>

      <div className="container text-center mt-2">
        <ContinuesCardSlider
          cardWidth={cardWidth}
          numCards={numCards}
          reverse={true}
        >
          {Array.from({ length: numCards }).map((_, index) => (
            <div
              key={index}
              className="w-full d-flex"
              style={{ width: `${cardWidth}px`, backgroundColor: "white" }} // Set the width for each card
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingInline: "4px",
                }}
              >
                <span
                  style={{
                    position: "relative",
                    zIndex: "10px",
                    width: "200px",
                  }}
                >
                  <div>
                    <img
                      src={
                        footerTestimonialDetails[
                          index % footerTestimonialDetails.length
                        ]?.imageSrc
                      }
                      alt="Awards"
                      className="shadow-sm rounded"
                      width={200}
                      height={200}
                    />
                  </div>
                  <h2
                    style={{
                      fontSize: "0.9rem",
                      marginTop: "8px",
                    }}
                  >
                    {
                      footerTestimonialDetails[
                        index % footerTestimonialDetails.length
                      ]?.name
                    }
                  </h2>
                  <h2
                    style={{
                      color: "gray",
                      fontSize: "0.9rem",
                    }}
                  >
                    {
                      footerTestimonialDetails[
                        index % footerTestimonialDetails.length
                      ]?.description
                    }
                  </h2>
                </span>
              </div>
            </div>
          ))}
        </ContinuesCardSlider>

        <Button variant="primary" className="btn bsb-btn-2xl btn-outline-light">
          Write with us
        </Button>
      </div>
    </section>
  );
}

export default TestimonialPage;
