import React, { useEffect, useRef, useState } from "react";
import { companinesData, textData } from "../../utills/data";

const RowsPages = () => {
  const [scrollVideo, setScrollVideo] = useState([
    {
      id: 1,

      vid_1: "/images/landing-page/ic_mid_1.svg",
    },
    {
      id: 2,
      vid_1: "/images/landing-page/ic_mid_2.svg",
    },
    {
      id: 3,
      vid_1: "/images/landing-page/ic_mid_3.svg",
    },
  ]);

  const [currentRow, setCurrentRow] = useState(0);
  // const rowRefs = useRef([]);
  const rowRefs: React.MutableRefObject<any[]> = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    rowRefs.current.forEach((rowRef) => {
      observer.observe(rowRef);
    });

    return () => {
      observer.disconnect();
    };
  }, [rowRefs]);

  const handleIntersection = (entries: any[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const rowId = parseInt(entry.target.getAttribute("data-rowid"));
        setCurrentRow(rowId);
      }
    });
  };

  return (
    <section className="py-3 py-md-5 py-xl-8">
      <div className="container text-center mt-5">
        <div className="main-container">
          <div className="row-contents-section">
            <div className="text-section">
              {textData.map((text, index) => (
                <div
                  key={index}
                  className="sub-texts"
                  ref={(ref) =>
                    (rowRefs.current[index + companinesData.length] = ref)
                  }
                  data-rowid={index + companinesData.length}
                >
                  <span className="small-heading-red-color">
                    {text.heading}
                  </span>
                  <span className="small-heading-black-color">
                    {text.subHeading}
                  </span>
                  <span className="reach-name" style={{ textAlign: "start" }}>
                    <ul>
                      {text.points.map((point, idx) => (
                        <li key={idx} style={{ marginBlock: "10px" }}>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </span>
                  <div className="second-page-column-image-mobile">
                    <img src={text.mobileImage} alt="" />
                  </div>
                </div>
              ))}
            </div>
            <div className="video-container">
              {scrollVideo.map((items, index) => (
                <div
                  key={items.id}
                  className="mid-stopped-image"
                  style={{
                    display:
                      currentRow === index + companinesData.length
                        ? "block"
                        : "none",
                  }}
                >
                  <img
                    src={items.vid_1}
                    alt="Reading Reads Sticker"
                    style={{ height: "100%", width: "100%" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RowsPages;
