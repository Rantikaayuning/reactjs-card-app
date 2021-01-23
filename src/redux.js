// const redux = require('redux');
// const createStore = redux.createStore;

// const initState = {
//     value: 0,
//     age: 18 
// }

// // Reducer
// const rootReducer = (state = initState, action) => {
//     // console.log(action);
//     if(action.type === 'ADD_AGE'){
//         return {
//             ...state,
//             age: state.age + 1
//         }
//     }
//     if(action.type === 'ADD_Value'){
//         return {
//             ...state,
//             value: state.value + action.newValue
//             }
//         }
    
//     return state;
// }

// // Store
// const store = createStore(rootReducer);
// console.log(store.getState());


// // Subscription
// store.subscribe(() => {
//     console.log('store change: ', store.getState());
// })

// // Dispatching Action
// store.dispatch({type: 'ADD_AGE'})
// store.dispatch({type: 'ADD_VALUE', newValue: 12})
// console.log(store.getState());

const redux = require('redux');
const createStore = redux.createStore;

// initial state
const initialState = {
    age: 25,
    value: 10
}

// buat variablenya
const ADD_AGE = 'ADD_AGE';
const ADD_VALUE = 'ADD_VAlUE';

// reducer
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_AGE:
            return {
                ...state,
                age: state.age + 10,
            };
        case ADD_VALUE:
            return {
                ...state,
                value: state.value + 100,
            };
        default:
            return state;
    }
};

// store
const store = createStore(rootReducer);
// console.log('store =>', store);
console.log('get State =>', store.getState());

// action
store.dispatch({type: ADD_AGE});
store.dispatch({type: ADD_VALUE});
console.log('get state =>', store.getState())
