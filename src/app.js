//install import use
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';
// import './playground/promises';

const store = configureStore();

//add expense = Water bill

// store.dispatch(addExpense({ description: 'Water Bill', amount: 45 }));
// //add expense = gas bill
// store.dispatch(addExpense({ description: 'Gas Bill', createdAt: 1000 }));
// store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));

//getVisibleExpenses print list
// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);
// console.log(store.getState());

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));
store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'));
});
