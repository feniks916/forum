import {applyMiddleware, combineReducers, createStore} from "redux";
import mainPageReducer from './mainPageReducer';
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    userData: mainPageReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;