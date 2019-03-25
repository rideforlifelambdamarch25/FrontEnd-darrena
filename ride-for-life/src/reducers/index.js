import { USER_LOGIN_START, USER_LOGIN_SUCCESS } from '../actions';

const initialState = {
    users: [],
    loggingIn: false,
    error: '',
    token: localStorage.getItem('token')
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case USER_LOGIN_START:
            return {
                ...state,
                loggingIn: true
        }
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                token: action.payload
            }
        default:
            return state;
    }
}



export default reducer;