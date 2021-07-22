import React from "react";
import { SubscriptionSelectedTypes } from '../../types';
import Button from 'react-bootstrap/Button';
import styles from './Button.module.css';

export interface Props {
  planCost: number | undefined;
  selected: boolean;
  contact: string;
  selectionHandler: (x: SubscriptionSelectedTypes) => void;
  id: number | undefined;
}

const CardPlan: React.FC<Props> = ({ planCost, selected, contact, selectionHandler, id }) => {
  return (
    <Button onClick={() => selectionHandler({ planValue: planCost, id: id, planType: contact })} className={styles['button-styles']} variant={`${selected ? 'primary' : 'secondary'}`}>{`${contact}: £${planCost}`}</Button>
  )
};

export default CardPlan;
