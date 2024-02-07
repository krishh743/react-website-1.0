import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import "../../styles/globle.css";

const SecondPage = () => {
  return (
    <Container fluid>
      <Row style={{ minHeight: '100vh' }}>
        <Col md={6}>
          {/* Contents Section */}
          <div style={{ backgroundColor: 'lightblue', height: '100%' }}>
            Contents Section  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam earum cupiditate a iusto, quo doloribus tempore, consequatur beatae minima, ex inventore! A recusandae ea eligendi cupiditate excepturi fugit est perferendis?
          </div>
        </Col>
        <Col md={6}>
          {/* Video Section */}
          <div style={{ backgroundColor: 'lightgreen', height: '100%' }}>
            Video Section   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est repudiandae ad itaque, animi odio autem recusandae, ea totam sequi, harum laudantium temporibus ut aut architecto et! Nemo, iste. Dicta, molestias.
          </div>
        </Col>
      </Row>
      <Row style={{ minHeight: '100vh' }}>
        <Col md={6}>
          {/* Contents Section */}
          <div style={{ backgroundColor: 'lightblue', height: '100%' }}>
            Contents Section Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque ipsum ad distinctio accusamus quia, beatae qui aliquam laudantium eligendi architecto earum voluptate numquam facilis, magni laboriosam repellendus maxime delectus itaque.
          </div>
        </Col>
        <Col md={6}></Col> {/* Empty space */}
      </Row>
      <Row style={{ minHeight: '100vh' }}>
        <Col md={6}>
          {/* Contents Section */}
          <div style={{ backgroundColor: 'lightblue', height: '100%' }}>
            Contents Section
          </div>
        </Col>
        <Col md={6}></Col> {/* Empty space */}
      </Row>
    </Container>
  );
}

export default SecondPage;
