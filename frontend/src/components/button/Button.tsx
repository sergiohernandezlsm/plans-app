import React from "react";
import Button from 'react-bootstrap/Button';
import styles from './Button.module.css';

export interface Props {
  planCost: number | undefined;
  selected: boolean;
  contact: string;
  handleContact: any;
  id: number | undefined;
}

const CardPlan: React.FC<Props> = ({ planCost, selected, contact, handleContact, id }) => {
  return (
    <Button onClick={() => handleContact({ planValue: planCost, id: id, planType: contact })} className={styles['button-styles']} variant={`${selected ? 'primary' : 'secondary'}`}>{`${contact}: £${planCost}`}</Button>
  )
};

export default CardPlan;
