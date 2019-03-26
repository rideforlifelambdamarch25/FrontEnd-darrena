import { DRIVER_REGISTER_START, DRIVER_REGISTER_SUCCESS, DRIVER_REGISTER_FAILURE, USER_REGISTER_START, USER_REGISTER_SUCCESS, USER_REGISTER_FAILURE, DRIVER_LOGIN_START, DRIVER_LOGIN_SUCCESS, DRIVER_LOGIN_FAILURE, USER_LOGIN_START, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE, GET_DRIVER_DATA_START, GET_DRIVER_DATA_SUCCESS, GET_DRIVER_DATA_FAILURE, GET_USER_DATA_START, GET_USER_DATA_SUCCESS, GET_USER_DATA_FAILURE} from '../actions';

const initialState = {
    users: [],
    drivers: [],
    driverRegistering: false,
    userRegistering: false,
    driverRegistered: false,
    userRegistered: false,
    driverLoggingIn: false,
    userLoggingIn: false,
    getDriverData: false,
    getUserData: false,
    error: '',
    token: localStorage.getItem('token')
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case DRIVER_REGISTER_START:
            return {
                ...state,
                driverRegistering: true
            }
        case DRIVER_REGISTER_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                driverRegistered: true,
                drivers: [action.payload]
            }
        case DRIVER_REGISTER_FAILURE:
            return {
                ...state,
                driverRegistered: false,
                error: ''
            }
        case USER_REGISTER_START:
            return {
                ...state,
                userRegistering: true
            }
        case USER_REGISTER_SUCCESS:
            return {
                ...state,
                userRegistered: true,
                users: [action.payload]
            }
        case USER_REGISTER_FAILURE:
            return {
                ...state,
                userRegistered: false
            }
        case DRIVER_LOGIN_START:
            return {
                ...state,
                driverLoggingIn: true
            }
        case DRIVER_LOGIN_SUCCESS:
            return {
                ...state,

            }
        case DRIVER_LOGIN_FAILURE:
            return {
                ...state,
                error: '',
            }
        case USER_LOGIN_START:
            return {
                ...state,
                userLoggingIn: true
        }
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                error: '',
                users: [action.payload]
            }
        case USER_LOGIN_FAILURE:
            return {
                ...state,
                error: '',
            }
        case GET_DRIVER_DATA_START:
            return {
                ...state,
                getDriverData: true,
            }
        case GET_DRIVER_DATA_SUCCESS:
            return {
                ...state,
                getDriverData: false,
                drivers: [action.payload]
            }
        case GET_DRIVER_DATA_FAILURE:
            return {
                ...state,
                error: ''
            }
        case GET_USER_DATA_START:
            return {
                ...state,
                getUserData: true
            }
        case GET_USER_DATA_SUCCESS:
            return {
                ...state,
                users: [action.payload],
                getUserData: false
            }
        case GET_USER_DATA_FAILURE:
            return {
                ...state,
                error: ''
            }
        default:
            return state;
    }
}



export default reducer;