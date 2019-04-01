import React from 'react';
import { shallow } from 'enzyme';
import numeral from 'numeral';
import { ExpensesSummary } from '../../components/ExpenseSummary';

test('Should correctly render expensesSummary with one expense', () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={1} expensesTotal={239} />
  );
  expect(wrapper).toMatchSnapshot();
});

test('Should correctly render expensesSummary with multiple expense', () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={15} expensesTotal={23998897} />
  );
  expect(wrapper).toMatchSnapshot();
});

// u updates snapshot
// npm test-- - u
