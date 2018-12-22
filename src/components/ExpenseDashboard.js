import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboard = () => (
    <div>This is my dashboard component
    <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashboard;