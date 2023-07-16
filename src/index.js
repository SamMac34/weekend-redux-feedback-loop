import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import logger from "redux-logger";


// Feedback reducer
// { feeling: , understanding: , support: , comments: }
const feedbackReducer = (state = {
    feeling: '', 
    understanding: '',
    support: '',
    comments: ''},
    action) => {
    if (action.type === 'ADD_FEELING') {
        console.log('In feedback reducer:', action.payload, state)
        return { ...state, feeling: action.payload }; 
    } else if (action.type === 'ADD_UNDERSTAND'){
        return { ...state, understanding: action.payload }
    } else if (action.type === 'ADD_SUPPORT') {
        return { ...state, support: action.payload }
    } else if (action.type === 'ADD_COMMENT') {
        return { ...state, comments: action.payload }
    }
    return state;
};

// Store
const store = createStore(
    combineReducers({
        feedbackReducer
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
