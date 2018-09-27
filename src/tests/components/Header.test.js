
import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

test('should render Header component', () => {
    // const renderer = new ReactShallowRenderer();

    // renderer.render(<Header/>);

    // expect(renderer.getRenderOutput()).toMatchSnapshot();

    const wrapper = shallow(<Header/>);

    expect(wrapper).toMatchSnapshot();

    // expect(wrapper.find('h2').text()).toBe('Expensify app')

})