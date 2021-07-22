import { shallow } from 'enzyme';
import SubscriptionPlansPage from './subscription-plans';

describe('SubscriptionPlansPage Component', () => {
  it('renders <SubscriptionPlansPage /> component', () => {
    const wrapper = shallow(<SubscriptionPlansPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
