import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// initial global state
const globalState = {
  count: 0,
};

// buat variabel action
const PLUS = 'PLUS_COUNT';
const MINUS = 'MINUS_COUNT';

// create reducer
const rootReducer = (state = globalState, action) => {
    //   switch (action.type) {
    //     case 'PLUS_COUNT':
    //         return {
    //             ...state,
    //             count: state.count + 1,
    //         };
    //     case 'MINUS_COUNT':
    //         return {
    //             ...state,
    //             count: state.count - 1,
    //         };
    //     default:
    //         return state;
    // }
    if(action.type === PLUS) {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    if(action.type === MINUS) {
      return {
        ...state,
        count: state.count - 1,
      }
    }
    return state;
};

// create store
const globalStore = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={globalStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
