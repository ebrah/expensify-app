import React from 'react';
import {shallow} from 'enzyme';
import  ExpensifyDashboard from '../../components/ExpensifyDashboard';


test('should render the expenses Dashboard page correctly ', () => {
    const wrapper = shallow(<ExpensifyDashboard/>);
    expect(wrapper).toMatchSnapshot() 
})
