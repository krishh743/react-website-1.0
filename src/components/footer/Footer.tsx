import React from "react";
import { MdOutlineFacebook } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import "../../styles/globle.css";
// import { Col, Container, Row } from "react-bootstrap";
import { Container, Row, Col, Card } from "react-bootstrap";
// import { FaTwitter, FaFacebook, FaInstagram,FaLinkedin } from "react-icons/fa";
import { footerTestimonialData } from "../../utills/data";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-page">
        <div className="big-heading">
          <span>Find your book's core audience, author your expertise and</span>
          <span> maximize your book's reach with ZebraLearn</span>
        </div>

        <div className="first-subheading">
          So you can position yourself as a go-to expert in your field and get
          the recognition, opportunities, and success that come with it.
        </div>
        <button className="big-button">Write with us</button>
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

        {/* <div className="group-list">
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
        </div> */}

        <Row className="testimonial-section">
          {footerTestimonialData.map((card) => (
            <Col
              key={card.id}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              xl={2}
              className="mb-4"
            >
              <Card>
                <Card.Img
                  variant="top"
                  src={card.imageUrl}
                  className="rounded-circle"
                />
                <Card.Body>
                  <Card.Title className="first-subheading">
                    {card.title}
                  </Card.Title>
                  <Card.Text className="small-heading-gray-color">
                    {card.description}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <div className="d-flex justify-content-around">
                    {card.socialMediaIcons.map((icon, index) => {
                      const IconComponent = FaLinkedin; // you should replace this with the correct icon component based on the icon name
                      return <IconComponent size={25} key={index} color="#FF5612"/>;
                    })}
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </footer>
  );
}

export default Footer;
