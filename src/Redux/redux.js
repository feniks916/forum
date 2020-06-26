import {applyMiddleware, combineReducers, createStore} from "redux";
import userReducer from './userReducer';
import articleReducer from './Article'
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    userData: userReducer,
    articlesData: articleReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;