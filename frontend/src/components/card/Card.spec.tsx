import { shallow } from 'enzyme';
import Card, { Props } from './Card';

const props: Props = {
  card: {},
  selectionHandler: () => { },
}

describe('Card Component', () => {
  it('renders <Card /> component', () => {
    const wrapper = shallow(<Card {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
