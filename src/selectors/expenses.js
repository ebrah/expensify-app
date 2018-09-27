import moment  from "moment";

//Get Visible expenses

export default (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
      
        const momentCreatedAt = moment(expense.createdAt);

       // const startDateMatch =  typeof startDate !== 'number' || expense.createdAt >= startDate;
        const startDateMatch = startDate ? startDate.isSameOrBefore(momentCreatedAt, 'day') : true;
        //const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const endDateMatch = endDate ? endDate.isSameOrBefore(momentCreatedAt, 'day') : true;

        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
         if(sortBy === 'date'){
             return a.createdAt < b.createdAt ? 1 : -1 ;  
         }else if( sortBy === 'amount'){
             return a.amount > b.amount ? -1 : 1 ;
         }
    });
}