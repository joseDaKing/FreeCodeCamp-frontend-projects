import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {
    createStore,
    compose,
    applyMiddleware
} 
from "redux";

import { 
    Provider 
} 
from "react-redux";

import reducer from "./store/reducer.js";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware()));

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));