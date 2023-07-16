import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import logger from "redux-logger";

// Feedback reducer
const feedbackReducer = (state = {
    feeling: '', 
    understanding: '',
    support: '',
    comments: ''},
    action) => {
    if (action.type === 'ADD_FEELING') {
        return { ...state, feeling: action.payload }; 
    } else if (action.type === 'ADD_UNDERSTAND'){
        return { ...state, understanding: action.payload };
    } else if (action.type === 'ADD_SUPPORT') {
        return { ...state, support: action.payload };
    } else if (action.type === 'ADD_COMMENT') {
        return { ...state, comments: action.payload };
    } else if (action.type === 'RESET_FEEDBACK') {
        return { feeling: '', understanding: '',support: '', comments: '' };
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

// Render to DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   
    <React.StrictMode>
        <Provider store={store}>
        <App />
        </Provider>
    </React.StrictMode>
);