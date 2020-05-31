import { login, register } from '../API/API'

const SET_USER_DATA = 'SET_USER_DATA';
const SET_STATUS = 'SET_STATUS';
const SET_ERROR = 'SET_ERROR';

let initialState = {
    username: '',
    token: '',
    value: null,
    status: null,
    error: null
}

const mainReducer = (state = initialState, action) => {
    debugger
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            };
        case SET_STATUS:
            
            return {
                ...state,
                status: action.payload.data
            };
        case SET_ERROR:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}

export const setStatusAC = (data) => ({ type: SET_STATUS, payload:data });
export const setUserDataAC = (name, token, status) => ({ type: SET_USER_DATA, payload: {name,token,status}});
export const setErrorAC = (data) => ({ type: SET_ERROR, payload:data });

export const thunk = (data) => {
    return (dispatch) => {
        login({
            user: {
                email: data.email,
                password: data.password,
            }
        })
            .then(response => {
                let {token,username} = response.data;
                let {status} = response.request;
                dispatch(setUserDataAC(token, username, status));
                sessionStorage.setItem('cool-jwt', response.data.user.token);
                sessionStorage.setItem('cool-name', response.data.user.username);
            })
            .catch(error => {
                dispatch(setErrorAC(error.response.data.errors))
            })
    }

}

export const RegistrationThunk = (data) => {
    return (dispatch) => {
        register({
            user: {
                email: data.email,
                password: data.password,
                username: data.name,
            }
        })
            .then(response => {
                dispatch(setUserDataAC(response))
            })
            .catch(error => {
                dispatch(setErrorAC(error.response.data.errors))
            })
    }

}



export default mainReducer;