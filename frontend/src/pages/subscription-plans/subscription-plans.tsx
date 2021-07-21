import { useContext } from 'react';
import SubcriptionsContext from '../../store/subscriptions-context';
import Container from 'react-bootstrap/Container';
import CardCounter from '../../components/card-counter/CardCounter';
import TotalPlans from '../../components/total-plans/TotalPlans';
import { useState } from 'react';

const SubscriptionPlansPage = () => {
  const { subscriptions, totalPlans, getTotal } = useContext(SubcriptionsContext);
  const [subscriptionPlans, setSubscriptionPlans] = useState(subscriptions);
  const handleContact = (newPlanCost: any) => {
    const newStuff = subscriptionPlans.map((x: any) => {
      if (newPlanCost.id === x.id) {
        return {
          id: x.id,
          planCode: x.planCode,
          name: x.name,
          monthlyCost: x.monthlyCost,
          annualCost: x.annualCost,
          selectedValue: x.selectedValue === newPlanCost.planValue ? 0 : newPlanCost.planValue,
        }
      }
      return x;
    });
    setSubscriptionPlans(newStuff);
    getTotal(newStuff.map((value: any) => {
      return value.selectedValue
    }).reduce(function (total: number, amount: number) {
      return total + amount
    }, 0));
  }

  return (
    <>
      <Container>
        <CardCounter handleContact={handleContact} subscriptionsData={subscriptionPlans} />
        <TotalPlans totalPlans={totalPlans} />
      </Container>
    </>
  )
};

export default SubscriptionPlansPage;
