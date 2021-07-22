import { shallow } from 'enzyme';
import Button from './Button';

const props = {
  planCost: 1,
  selected: true,
  contact: 'string',
  selectionHandler: () => { },
  id: 1,
}

describe('Button Component', () => {
  it('renders <Button /> component', () => {
    const wrapper = shallow(<Button {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});