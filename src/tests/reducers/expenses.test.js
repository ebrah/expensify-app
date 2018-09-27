import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT'});
    expect(state).toEqual([]);  
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([
        expenses[0], expenses[2]
    ])
});
 
test('should not remove expense if id equal to -1', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: -1
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add Expense', () => {
    const expense = {
        id: 3,
        description: 'New Expense',
        amount: 6000,
        note: 'It is new Expense added',
        createdAt: 5000
    }
  const action = { type: 'ADD_EXPENSE', expense }
  const state = expensesReducer(expenses,action );

  expect(state).toEqual([ ...expenses, expense ]);
});

test('should edit expense', () => {
    const updates = {
        description: 'Edited Expense',
        amount: 30000,
        note: 'It is new Edited Expense',
        createdAt: 9000
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: 1,
        updates
    }

  const state = expensesReducer(expenses, action);

    expect(state[0]).toEqual({ id: action.id, ...updates });
});


test('should not edit expense if id not found ', () => {
    const updates = {
        description: 'Edited Expense',
        amount: 30000,
        note: 'It is new Edited Expense',
        createdAt: 9000
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: -1,
        updates
    }

  const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
});