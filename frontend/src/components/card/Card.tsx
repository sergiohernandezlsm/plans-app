import React from "react";
import { CardTypes } from '../../types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export interface Props {
  card: CardTypes;
}

const CardPlan: React.FC<Props> = ({ card }) => {

  return (
    <Card>
      <Card.Body>
        <Container>
          <Row>
            <Col xs={12} md={3}>
              <Card.Title>{card.planCode}</Card.Title>
              <Card.Title>{card.name}</Card.Title>
            </Col>
            <Col xs={12} md={3}>
              <Card.Text>
                <Card.Title>Subscription Plans</Card.Title>
              </Card.Text>
            </Col>
            <Col xs={12} md={3}>
              <Button variant="primary">Monthly: {card.monthlyCost} </Button>

            </Col>
            <Col xs={12} md={3}>
              <Button variant="secondary">Annual: {card.annualCost}</Button>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  )
};

export default CardPlan;
