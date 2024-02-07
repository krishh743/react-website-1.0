import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../header/Header";
import LandingPage from "../../pages/contents/LandingPage";
import HomePage from "../../pages/all-pages/HomePage";
import ExploreTodo from "../../pages/all-pages/ExploreTodo";
import Footer from "../footer/Footer";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Container fluid>
        <Row>
          <Col>
            <LandingPage />
          </Col>
        </Row>
        <Row>
          <Col>
            <HomePage />
          </Col>
        </Row>
        <Row>
          <Col>
            <ExploreTodo />
          </Col>
        </Row>
      </Container>
     <Footer/>
    </div>
  );
};

export default AppLayout;
