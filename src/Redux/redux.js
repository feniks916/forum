import {applyMiddleware, combineReducers, createStore} from "redux";

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;