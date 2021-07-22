import { mount, shallow } from 'enzyme';
import SubscriptionPlansPage from './subscription-plans';

const mockSubscriptionsData = [
  {
    id: 1,
    planCode: 'string',
    name: 'string',
    monthlyCost: 1,
    annualCost: 1,
    selectedValue: 110
  },
  {
    id: 2,
    planCode: 'string',
    name: 'string',
    monthlyCost: 1,
    annualCost: 1,
    selectedValue: 110
  }
];
const mockSubscriptions = jest.fn();

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: (initialState: any) => [mockSubscriptionsData, mockSubscriptions],
}));


describe('SubscriptionPlansPage Component', () => {

  it('renders <SubscriptionPlansPage /> component', () => {
    const wrapper = shallow(<SubscriptionPlansPage />);
    expect(wrapper).toMatchSnapshot();
  });

  it('testing method in SubscriptionPlansPage', () => {
    const wrapper = mount(<SubscriptionPlansPage />);
    const button = wrapper.find('.button-styles').at(0);
    button.simulate('click');
    expect(mockSubscriptions).toHaveBeenCalledTimes(1);
  });
});
