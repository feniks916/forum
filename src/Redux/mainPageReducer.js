import { loginData, postData } from '../API/API'

const SET_TOKEN = 'SET_TOKEN';
const SET_VALUE = 'SET_VALUE';
const SET_ERROR = 'SET_ERROR';

let initialState = {
    username: '',
    token: '',
    value: null,
    status: null,
    error: null
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOKEN:
            return {
                ...state,
                token: action.data.data.user.token,
                username: action.data.data.user.username,
                status: action.data.request.status,
            };
        case SET_VALUE:
            
            return {
                ...state,
                status: action.data.data
            };
        case SET_ERROR:
            return {
                ...state,
                error: action.data
            };
        default:
            return state;
    }
}

export const setTokenAC = (data) => ({ type: SET_TOKEN, data });
export const setValueAC = (data) => ({ type: SET_VALUE, data });
export const setErrorAC = (data) => ({ type: SET_ERROR, data });

export const thunkCreator = (data) => {
    return (dispatch) => {
        loginData({
            user: {
                email: data.email,
                password: data.password,
            }
        })
            .then(response => {
                dispatch(setTokenAC(response));
                localStorage.setItem('cool-jwt', response.data.user.token);
                localStorage.setItem('cool-name', response.data.user.username);
            })
            .catch(error => {
                dispatch(setErrorAC(error.response.data.errors))
            })
    }

}

export const RegistrationThunkCreator = (data) => {
    return (dispatch) => {
        postData({
            user: {
                email: data.email,
                password: data.password,
                username: data.name,
            }
        })
            .then(response => {
                dispatch(setTokenAC(response))
            })
            .catch(error => {
                dispatch(setErrorAC(error.response.data.errors))
            })
    }

}



export default mainReducer;