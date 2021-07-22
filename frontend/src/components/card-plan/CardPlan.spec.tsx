import { shallow } from 'enzyme';
import CardPlan, { Props } from './CardPlan';

const props: Props = {
  card: {},
  selectionHandler: () => { },
}

describe('Card Component', () => {
  it('renders <Card /> component', () => {
    const wrapper = shallow(<CardPlan {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
