import uuid from 'uuid';
import database from '../firebase/firebase';

//component calls action generator
//action generator returns object/function
//component dispatches object/function
//redux store changes - function runs has the ability to dispatch other actions and do what ever it wants
//note redux but default does not allow the dispatch of functions... have to add middle ware

// action generators
//ADD_EXPENSE
export const addExpense = expense => ({
  type: 'ADD_EXPENSE',
  expense: expense
});

//dispatches only allowed by adding thunk
//if not expenseData set to empty object
export const startAddExpense = (expenseData = {}) => {
  return dispatch => {
    //destructuring for defaults
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };
    //write too firebase
    return database
      .ref('expenses')
      .push(expense)
      .then(ref => {
        //dispatch to update redux store
        dispatch(
          addExpense({
            id: ref.key,
            ...expense
          })
        );
      });
  };
};
//REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

//EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});
