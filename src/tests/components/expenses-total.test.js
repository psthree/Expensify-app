import selectExpensesTotal from '../../selectors/expenses-total.js';
import expenses from '../fixtures/expenses';
import expensesTotal from '../../selectors/expenses-total.js';

//test to create
//should return 0 if no expenses
test('Should return 0 if no expenses', () => {
  const res = selectExpensesTotal([]);
  expect(res).toBe(0);
});
//should correctly add up a single expense
test('Should correctly total a single expense', () => {
  const res = selectExpensesTotal([expenses[0]]);
  console.warn('test', expenses[0].amount);
  expect(res).toBe(195);
});
//should correctly add up multiple expenses
test('Should correctly total multiple expenses', () => {
  const res = selectExpensesTotal(expenses);
  //   console.log('test', [expenses[0].amount]);
  expect(res).toBe(24195);
});

//when making changes to the file to be tested
// press u in the console to update the snapshot

//npm test -- --watch
