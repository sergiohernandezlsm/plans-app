import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import styles from './TotalPlans.module.css';

interface Props {
  totalPlans: number;
}

const TotalPlans: React.FC<Props> = ({ totalPlans }) => {
  return (
    <Card className={styles['card-styles']}>
      <Card.Body>
        <Container>
          <Row>
            <Col className={`${styles['center-item']} ${styles['extra-style-item']}`} xs={12} sm={10}>
              <Card.Text className={styles['total-text-styles']} >TOTAL SUBSCRIPTION PLANS:</Card.Text>
            </Col>
            <Col className={styles['center-item']} xs={12} sm={2}>
              <Card.Text className={styles['total-cost-styles']}>£{totalPlans}</Card.Text>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card >
  )
}

export default TotalPlans;