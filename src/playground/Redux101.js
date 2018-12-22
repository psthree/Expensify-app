import { createStore } from 'redux';

// Action generators  are functions that return action objects
//descucture incrementBy if value exsits use it otherwize default to 1
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy: incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy: decrementBy
});

const resetCount = () => ({
    type: 'RESET'
})

const setCount = ({ setCount = 1 } = {}) => ({
    type: 'SET',
    count: setCount
})

//reducers
//1 reducers are pure functions output is determained by input
//2 never change state or action
const countReducer = ((state = { count: 0 }, action) => {

    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            }
        default:
            return state;
    }
    console.log('running');
    console.log(action.type);
    return state;
});

const store = createStore(countReducer);


//store.subscribe() fires everytie the store changes
const unsubscribe = store.subscribe(() => {
    // console.log('store fired')
    console.log(store.getState());
})

//actions are a object that gets sent to the store


//send to store
store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 15 }));

store.dispatch(setCount({ setCount: 100 }));
// console.table(store.getState());

