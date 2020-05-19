const SET_TOKEN = 'SET_TOKEN';
const SET_VALUE = 'SET_VALUE';

let initialState = {
    username: '',
    token: '',
    value: '',
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOKEN:
            return {
                ...state,
                token: action.data.user.token,
                username: action.data.user.username
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

export const setTokenAC = (data) => ({ type: SET_TOKEN, data: data });
export const setValueAC = (data) => ({ type: SET_VALUE, data: data });

export default mainReducer;