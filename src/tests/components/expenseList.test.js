
import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/expenseList';
import expenses from '../fixtures/expenses';

test('should render expenses components', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses}/>);
    expect(wrapper).toMatchSnapshot(); 
});

test('should render components with no expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={ [] }/>);
    expect(wrapper).toMatchSnapshot();
})