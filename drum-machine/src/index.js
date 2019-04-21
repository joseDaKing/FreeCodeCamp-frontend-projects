import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose
}
from "redux";

import * as reducers from "./store/reducers";

import {
    Provider
}
from "react-redux"

const rootReducer = combineReducers({
    power: reducers.togglePower,
    bank: reducers.toggleBank,
    volume: reducers.setVolume,
    soundType: reducers.soundType
});

//Redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware()));

ReactDOM.render(<Provider store={store}> <App/> </Provider>, document.getElementById('root'));