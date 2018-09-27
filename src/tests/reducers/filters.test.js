 
import filterReducer from '../../reducers/filters';
import  moment  from 'moment';

 test('should setup default values', () => {
    const state = filterReducer(undefined, { type: '@@INIT'});

    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
 });

 test('should set sortBy amount', () => {
    const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
 });

 test('should set sortBy amount', () => {
     const currentState = {
         text: '',
         startDate: undefined,
         endDate: undefined,
         sortBy: 'amount'
     }
    const state = filterReducer(currentState, { type: 'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date');
 });

 test('should set text filter', () => {
    const text = 'this is my filter';
    const state = filterReducer(undefined, { type: 'SET_TEXT_FILTER', text });
    expect(state.text).toBe(text);
 })

 test('should set start date filter', () => {
     const startDate = moment().startOf('month');
     const action = {
         type: 'SET_START_DATE',
         startDate
     }
   const state = filterReducer(undefined, action);
   expect(state.startDate).toBe(startDate);

 });

 test('should set end date filter', () => {
    const endDate = moment().endOf('month');
    const action = {
        type: 'SET_END_DATE',
        endDate
    }
  const state = filterReducer(undefined, action);
  expect(state.endDate).toBe(endDate);
});