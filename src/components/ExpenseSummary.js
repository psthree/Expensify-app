import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  const formatedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
  return (
    <div>
      <h1>
        Viewing {expenseCount} {expenseWord} totaling {formatedExpensesTotal}
      </h1>
    </div>
  );
};

export default ExpensesSummary;
