import { SubcriptionsContextProvider } from './store/subscriptions-context';
import SubscriptionPlansPage from './pages/subscription-plans';
import './App.css';

const App = () => {
  return (
    <SubcriptionsContextProvider>
      <SubscriptionPlansPage />
    </SubcriptionsContextProvider>
  );
}

export default App;
