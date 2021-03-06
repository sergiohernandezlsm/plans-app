import React from "react";
import { SubscriptionsTypes, SubscriptionSelectedTypes } from '../../types';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './CardPlan.module.scss';
import ButtonPlan from '../button';
import 'flag-icon-css/css/flag-icon.min.css';

export interface Props {
  card: SubscriptionsTypes;
  selectionHandler: (x: SubscriptionSelectedTypes) => void;
}

const CardPlan: React.FC<Props> = ({ card, selectionHandler }) => {
  return (
    <Card className={styles['card-styles']}>
      <Card.Body>
        <Container>
          <Row>
            <Col xs={12} md={3}>
              <span className={` ${styles.flag} flag-icon flag-icon-${card.planCode}`}></span>
              <Card.Title className={styles['name-styles']}>{card.name}</Card.Title>
            </Col>
            <Col className={styles['center-item']} xs={12} md={3}>
              <Card.Text className={styles['title-styles']}>
                Subscription Plans:
              </Card.Text>
            </Col>
            <Col className={styles['center-item']} xs={12} sm={6} md={3}>
              <ButtonPlan id={card.id} selectionHandler={selectionHandler} selected={card.selectedValue === card.monthlyCost} contact={'Monthly'} planCost={card.monthlyCost} />
            </Col>
            <Col className={styles['center-item']} xs={12} sm={6} md={3}>
              <ButtonPlan id={card.id} selectionHandler={selectionHandler} selected={card.selectedValue === card.annualCost} contact={'Annual'} planCost={card.annualCost} />
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  )
};

export default CardPlan;
