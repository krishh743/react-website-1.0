import React from "react";
import "../../styles/globle.css";
import { companinesData } from "../../utills/data";

function HomePage() {
  
  return (
    <div className="main-contents">
      <div className="logos-section">
        <div className="small-heading">
          We make books in ZebraLearn Style! Our books are immersive, exhaustive
          & actionable!
        </div>
        <div className="logos-group">
          {companinesData.map((logo) => (
            <div key={logo.id} className="company-cards-section">
              <div className="group-logo-size">
                <img
                  src={logo.imageSrc}
                  alt={logo.name}
                  style={{ height: "100%" }}
                />
              </div>
              <div className="small-heading-gray-color">{logo.name}</div>
            </div>
          ))}
        </div>

        <div className="main-container">
          <div className="row-contents-section">
            <div className="text-section">
              <div className="sub-texts">
                <span className="small-heading-red-color">
                  How can ZebraLearn Help?
                </span>
                <span className="medium-heading">
                  Get done everything at one place, without chaos
                </span>
                <span className="small-heading-gray-color">
                  <ul>
                    <li>We write, design, publish and promote your book</li>
                    <li style={{ marginBlock: "10px" }}>
                      Get your book launched in market within 12 weeks
                    </li>
                    <li>No more hit-&-trial, we guide you at every step</li>
                  </ul>
                </span>
              </div>
              <div className="sub-texts">
                <span className="small-heading-red-color">
                  How can ZebraLearn Help?
                </span>
                <span className="medium-heading">
                  World-class book from your expertise
                </span>
                <span className="small-heading-gray-color">
                  <ul>
                    <li>Conceptually design to simplify concepts</li>
                    <li style={{ marginBlock: "10px" }}>
                      Focus on understandability to bring out the best
                    </li>
                    <li>3x increase in Retention with design</li>
                  </ul>
                </span>
              </div>
              <div className="sub-texts">
                <span className="small-heading-red-color">
                  How can ZebraLearn Help?
                </span>
                <span className="medium-heading">We Market, You Monetise</span>
                <span className="small-heading-gray-color">
                  <ul className="d-flex flex-column gap-4">
                    <li>We invest in your book to bring it to life</li>
                    <li style={{ marginBlock: "10px" }}>
                      We promote your book across marketing channels
                    </li>
                    <li>Above Industry Standard commission for you</li>
                  </ul>
                </span>
              </div>
            </div>
            <div className="video-container">
              <video width={500} height={500} controls autoPlay>
                <source
                  src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
