import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import logger from "redux-logger";


// Response reducer
// { feeling: , understanding: , support: , comments: }
const responseReducer = (state = {
    feeling: '', 
    understanding: '',
    support: '',
    comments: ''},
    action) => {
    if (action.type === 'ADD_FEELING') {
        console.log('In responses reducer:', action.payload, state)
        return { ...state, feeling: action.payload }; 
    } else if (action.type === 'ADD_UNDERSTAND'){
        return { ...state, understanding: action.payload }
    }
    return state;
}

// Store
const store = createStore(
    combineReducers({
        responseReducer
    }),
    applyMiddleware(logger)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   
    <React.StrictMode>
        <Provider store={store}>
        <App />
        </Provider>
    </React.StrictMode>
);
