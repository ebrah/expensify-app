import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const res = selectExpensesTotal([]);
    expect(res).toBe(0);
})


test('should correctly add up a sigle expense', () => {
    const res = selectExpensesTotal([expense[0]]);
    expect(res).toBe(200);
})

test('should correctly add up multiple expenses', () => {
    const res = selectExpensesTotal(expenses);
    expect(rest).toBe(9000);
})