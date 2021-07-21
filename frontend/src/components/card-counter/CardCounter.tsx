import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardPlan from '../card';
import { SubscriptionsTypes } from '../../types';

interface Props {
  handleContact: any;
  subscriptionsData: SubscriptionsTypes[];
}

const CardCounter: React.FC<Props> = ({ subscriptionsData, handleContact }) => {
  return (
    <>
      <Row className="justify-content-center">
        {subscriptionsData.map((card, index) => {
          return (
            <Col xs={12} key={`key-${index}`}>
              <CardPlan
                handleContact={handleContact}
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
