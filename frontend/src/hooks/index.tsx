import { useState, useCallback } from "react";
import axios from 'axios';
import { SubscriptionsTypes, SelectedValue } from '../types';

const useHttpGetSubcriptions = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [totalPlans, setTotalPlans] = useState(0);

  const sendRequest = useCallback(() => {
    axios.get('http://localhost:5000/subscription-plans')
      .then(function (response) {
        const newFullObj = response.data.map((plan: SubscriptionsTypes) => {
          return {
            ...plan,
            selectedValue: plan.annualCost
          }
        });
        const initialTotal = newFullObj.map((value: SelectedValue) => {
          return value.selectedValue
        }).reduce(function (total: number, amount: number) {
          return total + amount
        }, 0);
        setSubscriptions(newFullObj);
        setTotalPlans(initialTotal);
      })
      .catch(function (error) {
        console.log(error);
      })
  }, []);

  return {
    subscriptions,
    totalPlans,
    sendRequest
  }
}

export default useHttpGetSubcriptions;
