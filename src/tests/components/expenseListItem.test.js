import React from 'react';
import {shallow} from 'enzyme';
import  ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('should render the expense item in the component ', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]}/>);
    expect(wrapper).toMatchSnapshot() 
})
 
test("should render expenseList with empty message", () => {
    const wrapper = shallow(<ExpenseListItem  expenses = {[]}/>);
    expect(wrapper).toMatchSnapshot()
});