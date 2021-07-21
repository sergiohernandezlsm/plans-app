import React from "react";
import { CardTypes } from '../../types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export interface Props {
  card: CardTypes;
}

const CardPlan: React.FC<Props> = ({ card }) => {
  return (
    <Card>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{card.name}</Card.Title>
        <Card.Text>
          monthlyCost:{''}{card.monthlyCost}
        </Card.Text>
        <Card.Text>
          annualCost: {card.annualCost}
        </Card.Text>
        <Button variant="primary">Plan 1</Button>
        <Button variant="secondary">Plan 2</Button>
      </Card.Body>
    </Card>
  )
};

export default CardPlan;
