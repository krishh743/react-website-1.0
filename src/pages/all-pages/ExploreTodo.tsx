import React from "react";
import "../../styles/globle.css";
import { Card } from "react-bootstrap";

import { cardsData } from "../../utills/data";
import CarouselPage from "../../components/carousel/Carousel";

function ExploreTodo() {
  
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
          <span style={{ fontSize: "38px" }}>
            Explore all Todoist has to offer
          </span>
          <div className="task-name-row">
            {cardsData.map((card) => (
              <Card
                key={card.id}
                style={{
                  width: "15rem",
                  border: "1px solid grey",
                  borderRadius: "10px",
                }}
              >
                <Card.Img
                  variant="top"
                  src={card.image}
                  height={150}
                  style={{ width: "15rem", borderRadius: "10px" }}
                />
                <Card.Body style={{ padding: "20px" }}>
                  <Card.Title style={{ textAlign: "center", fontSize: "20px" }}>
                    {card.title}
                  </Card.Title>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
       
        <div className="carousel-section">
          <div className="carousel-text-section">
            <span style={{fontSize: "20px",color:"red" }}>In it for the long haul</span>
            <span style={{fontSize: "50px",fontWeight:"bold" }}>A task manager you can trust for life</span>
            <span style={{fontSize: "22px",color:'gray' }}>
              We’ve been building Todoist for 17 years and 9 days. Rest assured
              that we’ll never sell out to the highest bidder.
            </span>
          </div>
          <div>
            <CarouselPage />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreTodo;
