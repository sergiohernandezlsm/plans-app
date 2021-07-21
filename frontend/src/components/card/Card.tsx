import React from "react";
import { CardTypes } from '../../types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './Card.module.css';

export interface Props {
  card: CardTypes;
}

const CardPlan: React.FC<Props> = ({ card }) => {
  return (
    <Card className={styles['card-styles']}>
      <Card.Body>
        <Container>
          <Row>
            <Col xs={12} md={3}>
              <Card.Title>{card.planCode}</Card.Title>
              <Card.Title className={styles['name-styles']}>{card.name}</Card.Title>
            </Col>
            <Col className={styles['center-item']} xs={12} md={3}>
              <Card.Text className={styles['title-styles']}>
                Subscription Plans:
              </Card.Text>
            </Col>
            <Col className={styles['center-item']} xs={12} sm={6} md={3}>
              <Button className={styles['button-styles']} variant="primary">Monthly: {`£${card.monthlyCost}`} </Button>
            </Col>
            <Col className={styles['center-item']} xs={12} sm={6} md={3}>
              <Button className={styles['button-styles']} variant="secondary">Annual: {`£${card.annualCost}`}</Button>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  )
};

export default CardPlan;
