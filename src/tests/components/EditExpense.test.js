import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { EditExpense } from '../../components/EditExpense';

let startEditExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
  startEditExpense = jest.fn();
  startRemoveExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpense
      startEditExpense={startEditExpense}
      startRemoveExpense={startRemoveExpense}
      history={history}
      expense={expenses[2]}
    />
  );
});

test('should render EditExpense', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle startEditExpense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startEditExpense).toHaveBeenLastCalledWith(
    expenses[2].id,
    expenses[2]
  );
});

test('should handle startRemoveExpense', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startRemoveExpense).toHaveBeenLastCalledWith({
    id: expenses[2].id
  });
});

// import React from 'react';
// import { shallow } from 'enzyme';
// //import moment from 'moment';
// import { ExpenseListFilters } from '../../components/ExpenseListFilters';
// import { filters, altFilters } from '../fixtures/filters';

// let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

// beforeEach(() => {
//   setTextFilter = jest.fn();
//   sortByDate = jest.fn();
//   sortByAmount = jest.fn();
//   setStartDate = jest.fn();
//   setEndDate = jest.fn();
//   wrapper = shallow(
//     <ExpenseListFilters
//       filters={filters}
//       setTextFilter={setTextFilter}
//       sortByDate={sortByDate}
//       sortByAmount={sortByAmount}
//       setStartDate={setStartDate}
//       setEndDate={setEndDate}
//     />
//   );
// });

// test('should render ExpenseListFilters correctly', () => {
//   expect(wrapper).toMatchSnapshot();
// });

//npm test -- --watch
