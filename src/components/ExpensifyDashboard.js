import React from 'react';
import ExpenseList from './expenseList';
import ExpenseListFilters from './ExpenseListFilters';
const ExpensifyDashboard = () => (
    <div>
     <p> This is ExpensifyDashboard page.. </p>
      <ExpenseListFilters/>
      <ExpenseList/>
    </div>
);

export default ExpensifyDashboard;