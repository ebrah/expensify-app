
import selectorExpense from '../../selectors/expenses';
import  moment  from 'moment';
import expenses from '../fixtures/expenses';


test('should filter by test value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectorExpense(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[1]]);
});

//start date and end date

test('should filter by start date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }

    expect(selectorExpense(expenses, filters)).toEqual([
         expenses[2], expenses[0]
    ])
});

//neeed to review this snipet. TODO

test('should filter by end date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(2,'days')
    }

    expect(selectorExpense(expenses, filters)).toEqual([ expenses[2] ]);

});

//sortBy date // amount 

test('should sort by date', () => {

    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }

    expect(selectorExpense(expenses, filters)).toEqual([ expenses[2], expenses[0],expenses[1] ]);


})

test('Should sort by amount', () => {

    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }

    expect(selectorExpense(expenses, filters)).toEqual([ expenses[2], expenses[1],expenses[0] ]);

});