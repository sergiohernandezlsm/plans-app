import React, { useEffect } from 'react';
import { useState } from 'react';
import useHttpGetSubcriptions from '../hooks';

const SubcriptionsContext = React.createContext<any>({
  subscriptions: [],
  totalPlans: 0,
  getTotal: () => { }
});

export const SubcriptionsContextProvider = (props: any) => {
  const { sendRequest, subscriptions, totalPlans } = useHttpGetSubcriptions();
  const [total, setTotal] = useState(totalPlans);
  useEffect(() => {
    sendRequest();
    setTotal(totalPlans);
  }, [sendRequest, totalPlans]);

  if (!subscriptions.length) {
    return <p>No data found...</p>;
  }

  return (
    <SubcriptionsContext.Provider
      value={{
        subscriptions: subscriptions,
        totalPlans: total,
        getTotal: setTotal,
      }}
    >{props.children}
    </SubcriptionsContext.Provider>
  );
};

export default SubcriptionsContext;
