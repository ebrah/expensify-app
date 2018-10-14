import React from 'react';
import ExpenseList from './expenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';
const ExpensifyDashboard = () => (
    <div>
     <p> This is ExpensifyDashboard page.. </p>
      <ExpensesSummary/>
      <ExpenseListFilters/>
      <ExpenseList/>
    </div>
);

export default ExpensifyDashboard;