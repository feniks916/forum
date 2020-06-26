import { login, register } from '../API/API'

const SET_USER_DATA = 'SET_USER_DATA';
const SET_STATUS = 'SET_STATUS';
const SET_ERROR = 'SET_ERROR';
const SET_LOGGED_IN = 'SET_LOGGED_IN';

let initialState = {
    username: '',
    token: '',
    value: null,
    status: null,
    error: '',
    loggedIn: false
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            };
        case SET_STATUS:
            
            return {
                ...state,
                status: action.status
            };
        case SET_ERROR:
            return {
                ...state,
                error: action.error
            };
            case SET_LOGGED_IN:
                return {
                    ...state,
                    loggedIn: action.status
                };
        default:
            return state;
    }
}

export const setStatusAC = (status) => ({ type: SET_STATUS, status });
export const setUserDataAC = (token, name, status) => ({ type: SET_USER_DATA, payload: {name,token,status}});
export const setErrorAC = (error) => ({ type: SET_ERROR, error });
export const setLoggedin = (status) => ({type: SET_LOGGED_IN, status})

export const thunk = (data) => {
    return async (dispatch) => {
        try {
         const response = await login({
                user: {
                    email: data.email,
                    password: data.password,
                }
            })
            let {token,username} = response.data.user;
            let {status} = response.request;
            dispatch(setUserDataAC(token, username, status));
            localStorage.setItem('cool-jwt', response.data.user.token);
            localStorage.setItem('cool-name', response.data.user.username);
            dispatch(setLoggedin(true))
        } catch (error) {
            dispatch(setErrorAC(error.response.data.errors))
        }
    }

}

export const RegistrationThunk = (data) => {
    return async (dispatch) => {
        try {
        const response = await register({
                user: {
                    email: data.email,
                    password: data.password,
                    username: data.name,
                }
            })
            let {token,username} = response.data.user;
            let {status} = response.request;
            dispatch(setUserDataAC(token, username, status))
            localStorage.setItem('cool-jwt', response.data.user.token);
            localStorage.setItem('cool-name', response.data.user.username);
            dispatch(setLoggedin(true))
        } catch (error) {
            dispatch(setErrorAC(error.response.data.errors))
        }
    }

}



export default mainReducer;