import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import ExpenseForm  from '../../components/ExpenseForm';
import moment from 'moment';


test('should render expenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
}) 

test('should render expenseForm with data', () => {
    const wrapper = shallow(<ExpenseForm expenses={ expenses[1] } />);
    expect(wrapper).toMatchSnapshot();
})

test('should render valid form with data', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper).toMatchSnapshot();
   expect(wrapper.state('error').length).toBeGreaterThan(0);

})

test('should set description on input form', () => {
    const value = "New description";
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('input').at(0).simulate('change', {
        target: {value}
    })
    expect(wrapper.state('description')).toBe(value);
})

test('should set note on textarea', ()=> {
    const value = "New note value";
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('textarea').simulate('change', {
        target: {value}
    })
    expect(wrapper.state('note')).toBe(value);
})

//23.55
test('should set amount if is valid input', () => {
    const value = "23.55";
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('input').at(1).simulate('change', {
        target: {value}
    })
    expect(wrapper.state('amount')).toBe(value);
})
//12.122
test('should not set amount if invalid input', () => {
    const value = "12.122";
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('input').at(1).simulate('change', {
        target: {value}
    })
    expect(wrapper.state('amount')).toBe('');
})

test('should call onsubmit prop for valid form submition', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit= {onSubmitSpy} />)
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount ,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
    }); 
})

test('Should set new date on date change', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now)
})

test('Should set boolean on Focus change', () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused});
    expect(wrapper.state('calenderFocused')).toBe(focused)
})

