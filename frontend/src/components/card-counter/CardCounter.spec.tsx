import { shallow } from 'enzyme';
import CardCounter, { Props } from './CardCounter';

const props: Props = {
  subscriptionsData: [{ id: 1 }, { id: 2 }],
  selectionHandler: () => { },
}

describe('CardCounter Component', () => {
  it('renders <CardCounter /> component', () => {
    const wrapper = shallow(<CardCounter {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
