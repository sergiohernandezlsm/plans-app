import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardPlan from '../card';
import { SubscriptionsTypes, SubscriptionSelectedTypes } from '../../types';

interface Props {
  selectionHandler: (x: SubscriptionSelectedTypes) => void;
  subscriptionsData: SubscriptionsTypes[];
}

const CardCounter: React.FC<Props> = ({ subscriptionsData, selectionHandler }) => {
  return (
    <>
      <Row className="justify-content-center">
        {subscriptionsData.map((card, index) => {
          return (
            <Col xs={12} key={`key-${index}`}>
              <CardPlan
                selectionHandler={selectionHandler}
                card={card}
              />
            </Col>
          )
        })}
      </Row>
    </>
  )
};

export default CardCounter;
