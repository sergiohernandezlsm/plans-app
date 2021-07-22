import { useContext } from 'react';
import SubcriptionsContext from '../../store/subscriptions-context';
import { SubscriptionsTypes, SubscriptionSelectedTypes } from '../../types';
import Container from 'react-bootstrap/Container';
import CardCounter from '../../components/card-counter/CardCounter';
import TotalPlans from '../../components/total-plans/TotalPlans';
import { useState } from 'react';

const SubscriptionPlansPage = () => {
  const { subscriptions, totalPlans, getTotal } = useContext(SubcriptionsContext);
  const [subscriptionPlans, setSubscriptionPlans] = useState(subscriptions);

  const selectionHandler = (newSelectedValue: SubscriptionSelectedTypes) => {
    const newSelection = subscriptionPlans?.map((plan: SubscriptionsTypes) => {
      if (newSelectedValue.id === plan.id) {
        return {
          id: plan.id,
          planCode: plan.planCode,
          name: plan.name,
          monthlyCost: plan.monthlyCost,
          annualCost: plan.annualCost,
          selectedValue: plan.selectedValue === newSelectedValue.planValue ? 0 : newSelectedValue.planValue,
        }
      }
      return plan;
    });

    setSubscriptionPlans(newSelection);

    getTotal(newSelection?.map((value: SubscriptionsTypes) => {
      return value.selectedValue
    }).reduce((total: number, amount: number) => {
      return total + amount
    }, 0));
  }

  return (
    <>
      <Container>
        <CardCounter data-test="card-counter-test" selectionHandler={selectionHandler} subscriptionsData={subscriptionPlans} />
        <TotalPlans totalPlans={totalPlans} />
      </Container>
    </>
  )
};

export default SubscriptionPlansPage;
