const SET_NAME = 'SET_NAME';
const SET_TOKEN = 'SET_TOKEN';
const SET_VALUE = 'SET_VALUE';

let initialState = {
    username: '',
    token: '',
    value: '',
}

const mainReducer = (state = initialState, action) => {
    debugger
    switch (action.type) {
        case SET_NAME:
            return {
                ...state,
                username: action.data.user.username
            };
        case SET_TOKEN:
            return {
                ...state,
                token: action.data.user.token
            };
        case SET_VALUE:
            return {
                ...state,
                value: action.data
            };
        default:
            return state;
    }
}

export const setNameAC = (data) => ({ type: SET_NAME, data: data });
export const setTokenAC = (data) => ({ type: SET_TOKEN, data: data });
export const setValueAC = (data) => ({ type: SET_VALUE, data: data });

export default mainReducer;