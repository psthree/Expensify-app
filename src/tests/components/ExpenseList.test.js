import React from 'react';
import { shallow } from 'enzyme';
//import name export not default export
import { ExpenseList } from '../../components/ExpenseList';
import expenses from '../fixtures/expenses';

test('Should render ExpenseList with expenses', () => {
  const wrapper = shallow(<ExpenseList expenses={expenses} />);
  expect(wrapper).toMatchSnapshot();
});

test('Should render ExpenseLIst with empty message', () => {
  const wrapper = shallow(<ExpenseList expenses={[]} />); //testing with an empty array (no data)
  expect(wrapper).toMatchSnapshot();
});

//when making changes to the file to be tested
// press u in the console to update the snapshot
//npm test -- --watch
