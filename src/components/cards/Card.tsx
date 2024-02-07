import React from 'react';
import { Card } from 'react-bootstrap';

interface CardProps {
  image: any;
  name: string;
}

const Cards: React.FC<CardProps> = ({ image, name }) => {
  return (
    <Card className="shadow-lg rounded-xl" style={{ width: '10rem' }}>
      <Card.Img variant="top" src={image} alt="Awards" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default Cards;
