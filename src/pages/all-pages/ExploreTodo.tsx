import React, { useEffect, useRef } from "react";
import "../../styles/globle.css";
// import { Card } from "react-bootstrap";

import { cardsData, carouselCardData } from "../../utills/data";
import { Card } from "react-bootstrap";

function ExploreTodo() {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gallery = galleryRef.current;

    const handleAnimationEnd = () => {
      if (gallery) {
        gallery.style.transition = "none";
        gallery.style.transform = "translateX(0)";
        void gallery.offsetWidth; // Trigger reflow
        gallery.style.transition = "transform 15s linear infinite";
      }
    };

    if (gallery) {
      gallery.addEventListener("animationend", handleAnimationEnd);
    }

    return () => {
      if (gallery) {
        gallery.removeEventListener("animationend", handleAnimationEnd);
      }
    };
  }, []);
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          padding: "20px",
        }}
      >
        <div className="explore-heading">
          <span className="medium-heading">
            What to Expect When you Work with ZebraLearn
          </span>
          <div className="task-name-row">
            {cardsData.map((card) => (
              <div className="expect-zebralearn">
               
                <span className="small-heading-gray-color">{card.title}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="carousel-section">
          <div className="carousel-text-section">
            <span className="small-heading-red-color">
              How can ZebraLearn Help?
            </span>
            <span className="medium-heading">
              What we have achieved so far!
            </span>
            <span
              className="small-heading-gray-color"
              style={{ lineHeight: "35px" }}
            >
              ZebraLearn has been creating and selling books for 4+ years now!
              With Multiple Bestsellers & thousands of 5 Star Reviews, we are a
              thriving platform for ambitious authors.
            </span>
          </div>
          <div>
            <div className="gallery-container">
              <div ref={galleryRef} className="gallery">
                {carouselCardData.map((card) => (
                  //    <div className="expect-zebralearn">
                  //    <span>{card.text}</span>
                  //    <span className="small-heading-gray-color">
                  //      {card.title}
                  //    </span>
                  //  </div>
                  <Card key={card.id} className="m-2">
                    <Card.Img variant="top" src={card.imageSrc} />
                    <Card.Body style={{ textAlign: "center" }}>
                      <Card.Title className="small-heading-gray-color"></Card.Title>
                      <Card.Text className="small-heading-gray-color">
                        {card.text}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreTodo;
