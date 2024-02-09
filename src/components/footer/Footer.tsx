import React from "react";
import { MdOutlineFacebook } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import '../../styles/globle.css'

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
        <div className="big-heading">
          <span>
            Find your book's core audience, author your expertise and
          </span>
          <span>
            {" "}
            maximize your book's reach with ZebraLearn
          </span>
        </div>

        <div
         className="first-subheading"
        >
          So you can position yourself as a go-to expert in your field and get
          the recognition, opportunities, and success that come with it.
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
          Write with us
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
                    <MdOutlineFacebook size={30} color="#FF5612" />
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com">
                    <FaLinkedin size={30} color="#FF5612" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com">
                    <FaLinkedin size={30} color="#FF5612" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com">
                    <FaLinkedin size={30} color="#FF5612" />
                  </a>
                </li>
              </ul>
            </li>

            <li>
              Visit : 5th floor, Iconic , KBC , Citylight, Surat, Gujarat, India
            </li>
          </ul>
          <ul className="row-list">
            <li
              style={{ fontSize: "22px", fontWeight: "bold", color: "#FF5612" }}
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
              style={{ fontSize: "22px", fontWeight: "bold", color: "#FF5612" }}
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
              style={{ fontSize: "22px", fontWeight: "bold", color: "#FF5612" }}
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
