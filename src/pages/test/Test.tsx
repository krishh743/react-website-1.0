import React, { useState, useEffect } from "react";
import "./Test.css";
import { companinesData } from "../../utills/data";

const TestPage = () => {
  const [centerRow, setCenterRow] = useState(0); // Initialize with the second row

  const rowData = [
    {
      rowNumber: 0,
      content: {
        title: "  How can ZebraLearn Help?",
        heding: "Get done everything at one place, without chaos",

        list_1: "We write, design, publish and promote your book",
        list_2: "Get your book launched in market within 12 weeks",
        list_3: "No more hit-&-trial, we guide you at every step",
        list_4: "",
      },
      image:
        "https://cdn.pixabay.com/photo/2023/03/26/11/40/woman-7878192_1280.jpg",
    },
    {
      rowNumber: 1,
      content: {
        title: "  How can ZebraLearn Help?",
        heding: " World-class book from your expertise",

        list_1: "Conceptually design to simplify concepts",
        list_2: "Focus on understandability to bring out the best",
        list_3: "3x increase in Retention with design",
        list_4: "",
      },
      image:
        "https://media.istockphoto.com/id/878677532/photo/moment-for-myself.jpg?s=2048x2048&w=is&k=20&c=oGHN0nPSG5GOdeoQbiGXCXWBw660D4Dk7vO8kHAUO3k=",
    },
    {
      rowNumber: 2,
      content: {
        title: "  How can ZebraLearn Help?",
        heding: "We Market, You Monetise",

        list_1: "We invest in your book to bring it to life",
        list_2: "Above Industry Standard commission for you",
        list_3: "We promote your book across marketing channels",
        list_4: "",
      },
      image:
        "https://cdn.pixabay.com/photo/2023/10/17/09/37/honey-bee-8320764_1280.jpg",
    },
  ];

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const rowHeight = windowHeight; // Each row takes 100vh height

    // Calculate the row number at the center of the screen
    const centerRowNumber = Math.floor(
      (scrollPosition + windowHeight / 2) / rowHeight
    );
    setCenterRow(centerRowNumber);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="second-page-container">
      {rowData.map((row, index) => (
        <div className="second-page-row" key={index}>
          <div className="main-content">
            <div className="row-content-section">
              <span className="small-heading-red-color">
                {row.content.title}
              </span>
              <span className="medium-heading">{row.content.heding}</span>
              <span className="small-heading-gray-color">
                <ul>
                  <li>{row.content.list_1}</li>
                  <li style={{ marginBlock: "10px" }}>{row.content.list_2}</li>
                  <li>{row.content.list_3}</li>
                </ul>
              </span>
            </div>
          </div>
          <div className="row-images">
            {centerRow === row.rowNumber && (
              <img src={row.image} alt={`Image for Row ${row.rowNumber + 1}`} />
            )}
          </div>
          <div className="image-mobile">
            {centerRow === row.rowNumber && (
              <img src={row.image} alt={`Image for Row ${row.rowNumber + 1}`} />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestPage;
