import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Thing from '../../../components/thing/thing.js';

describe('<Thing />', () => {
  it('exists after my application has loaded', () => {
    let app = shallow(<Thing />);
    expect(app.find('p').exists()).toBeTruthy();
    expect(app.find('button').exists()).toBeTruthy();
  });

  it('changes the state of our component on click', () => {
    let app = mount(<Thing />);
    let button = app.find('button');
    button.simulate('click');

    expect(app.state('stuff')).toBe(false);
    expect(app.find('p').text()).toContain('false');
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Thing />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});