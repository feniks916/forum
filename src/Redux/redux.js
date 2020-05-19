import {applyMiddleware, combineReducers, createStore} from "redux";
import mainPageReducer from './mainPageReducer';
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    mainPage: mainPageReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;