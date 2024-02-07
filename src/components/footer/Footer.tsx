import React from "react";
import { MdOutlineFacebook } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer
      style={{
        textAlign: "center",
        backgroundColor: "#fcf4ed",
        minHeight: "92vh",
        paddingTop: "15px",
        // backgroundImage: "linear-gradient(to bottom, #fcf4ed, transparent)",
        
      }}
    >
      <div className="footer-page">
        <div className="heading">
          <span style={{ fontSize: "50px", fontWeight: "bold" }}>
            Gain calmness and clarity with the
          </span>
          <span style={{ fontSize: "40px", fontWeight: "bold" }}>
            {" "}
            world’s most beloved productivity app
          </span>
        </div>

        <div
          style={{
            fontSize: "20px",
            maxWidth: "600px",
            color: "gray",
            lineHeight: "30px",
            textAlign: "center", // Center align text for smaller screens
          }}
        >
          337,000+ ★★★★★ reviews on Google Play and App Store
        </div>
        <button
          style={{
            width: "150px",
            height: "50px",
            backgroundColor: "#FF5612",
            color: "white",
            fontWeight: "bold",
            border: "none",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Start Free
        </button>
        <a
          href="download"
          style={{
            color: "gray",
            fontWeight: "bold",
            border: "none",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Download
        </a>

        <div className="group-list">
          <ul className="row-list">
            <li
              style={{ fontSize: "22px", fontWeight: "bold", color: "#FF5612" }}
            >
              Zebralearn
            </li>
            <li>
              Appland is completely creative, lightweight, clean app landing
              page.
            </li>
            <li>Made with byDesigning World</li>
            <li>
              <ul className="social-media-list">
                <li>
                  <a href="https://www.facebook.com">
                    <MdOutlineFacebook size={30} />
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com">
                    <FaLinkedin size={30} />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com">
                    <FaLinkedin size={30} />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com">
                    <FaLinkedin size={30} />
                  </a>
                </li>
                {/* Add more social media icons as needed */}
              </ul>
            </li>

            <li>
              Visit : 5th floor, Iconic , KBC , Citylight, Surat, Gujarat, India
            </li>
          </ul>
          <ul className="row-list">
            <li
              style={{ fontSize: "22px", fontWeight: "bold", color: "#874600" }}
            >
              Features
            </li>
            <li>How It Works</li>
            <li>For Teams</li>
            <li>Pricing</li>
            <li>Templates</li>
          </ul>
          <ul className="row-list">
            <li
              style={{ fontSize: "22px", fontWeight: "bold", color: "#874600" }}
            >
              Resources
            </li>
            <li>Download Apps</li>
            <li>Integrations</li>
            <li>Channel Partners</li>
            <li>Developer API</li>
          </ul>
          <ul className="row-list">
            <li
              style={{ fontSize: "22px", fontWeight: "bold", color: "#874600" }}
            >
              Company
            </li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Inspiration Hub</li>
            <li>Press</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
