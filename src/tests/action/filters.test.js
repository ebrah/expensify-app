import { 
    setTextFilter,
    sortByDate, 
    sortByAmount, 
    setStartDate,
    setEndDate 
} from '../../actions/filters';

import moment from 'moment';

test('Should generate start date object', () => {
     const action = setStartDate(moment(0));
     expect(action).toEqual({
         type: 'SET_START_DATE',
         startDate: moment(0)
     })
});

test('should generate end date object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
      type: 'SET_END_DATE',
      endDate: moment(0)
  })
});

test('should generate set test filter with object value', () => {
    const text = 'some value in';
    const action = setTextFilter(text);
    expect(action).toEqual({
        type : 'SET_TEXT_FILTER',
        text
    })
});

test('Should generate set text filter with default', () => {

    const action = setTextFilter();
    expect(action).toEqual({
        type : 'SET_TEXT_FILTER',
        text : ''
    })
});

test('should generate action object for sort by date', () => {
   expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE'})
});

test('should generate action object for sort by amount', () => {
   expect(sortByAmount()).toEqual({
       type: 'SORT_BY_AMOUNT'
   });
});