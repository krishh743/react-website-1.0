import React, { useEffect, useRef } from "react";
import "../../styles/globle.css";
import { Card } from "react-bootstrap";
import { carouselCardData } from "../../utills/data";

function CarouselPage() {
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
    <div className="gallery-container">
      <div ref={galleryRef} className="gallery">
      {carouselCardData.map((card) => (
        <Card key={card.id} className="m-2">
          <Card.Img variant="top" src={card.imageSrc} />
          <Card.Body style={{textAlign:"center"}}>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>{card.text}</Card.Text>
          </Card.Body>
        </Card>
      ))}
      </div>
    </div>
  );
}

export default CarouselPage;
