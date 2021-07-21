import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardPlan from '../card';
import { CardTypes } from '../../types';

interface Props {
  cards: CardTypes[];
}

const CardCounter: React.FC<Props> = ({ cards }) => {
  return (
    <>
      <Row className="justify-content-center">
        {cards.map((card, index) => {
          return (
            <Col xs={12} key={`key-${index}`}>
              <CardPlan
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
