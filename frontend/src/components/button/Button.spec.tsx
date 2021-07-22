import { shallow } from 'enzyme';
import Button, { Props } from './Button';

const props: Props = {
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

  it('test if button exist', () => {
    const wrapper = shallow(<Button {...props} />);
    const button = wrapper.find('.button-styles');
    expect(button.length).toBe(1);
  });

  it('test if button NOT select style exist', () => {
    const propsNew: Props = {
      planCost: 1,
      selected: false,
      contact: 'string',
      selectionHandler: () => { },
      id: 1,
    }
    const wrapper = shallow(<Button {...propsNew} />);
    const button = wrapper.find('.button-styles');
    expect(button.length).toBe(1);
  });

  it('test onClick', () => {
    const wrapper = shallow(<Button {...props} />);
    wrapper.find('.button-styles').simulate('click');
    expect(wrapper.find('.button-styles').length).toBe(1);
  });
});
