import React from 'react';
import {shallow} from 'enzyme';
import { AddExpensePage } from '../../components/createExpense';
import expenses  from '../fixtures/expenses';
// import { addExpense } from '../../actions/expenses';


let addExpense, history, wrapper;

beforeEach(() => {
     addExpense = jest.fn();
     history = { push : jest.fn() };
     wrapper = shallow(<AddExpensePage addExpense = {addExpense} history ={ history }/>);
})

test('should match snapShot', () => {
    expect(wrapper).toMatchSnapshot();
 })

test('should render AddExpense page correctly', () => {
 
   wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
   expect(history.push).toHaveBeenLastCalledWith('/');
   expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);

})
