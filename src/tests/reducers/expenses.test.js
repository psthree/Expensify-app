// npm test -- --watch

import expensesReducer from '../../reducers/expenses';
//test data for the use cases
import expenses from '../fixtures/expenses';

test('should set default state (array', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('Should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('Should no remove expense if id is not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1' //anything random as long as its not a real id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses); //the whole array
});

test('should add an expense', () => {
  const expense = {
    id: '109',
    description: 'It was a good test',
    note: '',
    createdAt: 20000,
    amount: 29500
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense: expense
  };
  const state = expensesReducer(expense, action);
  expect(state).toEqual([...expense, expense]);
});

test('should edit an expense', () => {
  const amount = 122000;
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      amount
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].amount).toBe(amount);
});

test('should not edit an expense if id not found', () => {
  const amount = 122000;
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      amount
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('Should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: [expenses[1]]
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1]]);
});
