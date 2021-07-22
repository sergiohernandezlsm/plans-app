import { shallow } from 'enzyme';
import TotalPlans from './TotalPlans';

const props = {
  totalPlans: 1
}

describe('<MyComponent />', () => {
  it('renders <TotalPlans /> component', () => {
    const wrapper = shallow(<TotalPlans {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});