import {applyMiddleware, combineReducers, createStore} from "redux";
import mainPageReducer from './mainPageReducer';
import articleReducer from './Article'
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    userData: mainPageReducer,
    articlesData: articleReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;