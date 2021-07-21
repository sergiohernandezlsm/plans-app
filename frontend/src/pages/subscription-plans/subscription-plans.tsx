import { useEffect, useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import CardCounter from '../../components/card-counter/CardCounter';
import TotalPlans from '../../components/total-plans/TotalPlans';

const SubscriptionPlansPage = () => {
  const [data, setData] = useState([]);
  const testRequest = () => {
    axios.get('http://localhost:5000/subscription-plans')
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        console.log('finish');
      });
  }

  useEffect(() => {
    testRequest();
  }, []);

  if (!data.length) {
    return <p>Loading...</p>
  };

  console.log(data)

  return (
    <>
      <Container>
        <CardCounter cards={data} />
        <TotalPlans />
      </Container>
    </>
  )
};

export default SubscriptionPlansPage;
