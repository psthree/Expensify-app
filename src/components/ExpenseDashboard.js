import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseSummary from './ExpenseSummary';

const ExpenseDashboard = () => (
  <div>
    This is my dashboard component
    <ExpenseSummary expenseCount={1} expensesTotal={239} />
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboard;
