
import {addExpense, removeExpense, editExpense} from '../../actions/expenses';


test('should setup remove expense action object', () => {
    const action = removeExpense({id: '12343aa'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '12343aa'
    })
});

test('should setup edit expense', () => {
    const action = editExpense({id:'123'}, {note: 'new Expense note.'});
    expect(action).toEqual({
         type: 'EDIT_EXPENSE',
         id:'123',
         updates: {
             note: 'new Expense note.'
         } 
    });
})

test('should setup add Expense', () => {
    const expenseData = {
         description: 'Rent',
         note:'This rent issued at the end to the month',
         amount:500,
         createdAt: 2000
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense : {
            ...expenseData,
            id: expect.any(String)
        } 
    })
});

test('Should add expense action object with default values', () => {
    const defaultExpense = {
        description : '',
        note : '',
        amount : 0, 
        createdAt : 0
    }
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense : {
          ...defaultExpense,
          id: expect.any(String)
        }
    })
});


