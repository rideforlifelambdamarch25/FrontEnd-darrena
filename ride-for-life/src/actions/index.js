import axios from 'axios';


export const DRIVER_REGISTER_START = 'DRIVER_REGISTER_START';
export const DRIVER_REGISTER_SUCCESS = 'DRIVER_REGISTER_SUCCESS';
export const DRIVER_REGISTER_FAILURE = 'DRIVER_REGISTER_FAILURE';
export const USER_REGISTER_START = 'USER_REGISTER_START';
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS';
export const USER_REGISTER_FAILURE = 'USER_REGISTER_FAILURE';
export const DRIVER_LOGIN_START = 'DRIVER_LOGIN_START';
export const DRIVER_LOGIN_SUCCESS = 'DRIVER_LOGIN_SUCCESS';
export const DRIVER_LOGIN_FAILURE= 'DRIVER_LOGIN_FAILURE';
export const USER_LOGIN_START = 'USER_LOGIN_START';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';
export const GET_DRIVER_DATA_START = 'GET_DRIVER_DATA_START';
export const GET_DRIVER_DATA_SUCCESS = 'GET_DRIVER_DATA_SUCCESS';
export const GET_DRIVER_DATA_FAILURE = 'GET_DRIVER_DATA_FAILURE';
export const GET_USER_DATA_START ='GET_USER_DATA_START';
export const GET_USER_DATA_SUCCESS ='GET_USER_DATA_SUCCESS';
export const GET_USER_DATA_FAILURE ='GET_USER_DATA_FAILURE';

export const driverRegister = regDriver => dispatch => {
    dispatch({type: DRIVER_REGISTER_START});
    return (
        axios
            .post('https://rideforlife.herokuapp.com/api/drivers/register', regDriver)
            .then(res => {
                console.log(res)
                dispatch({type: DRIVER_REGISTER_SUCCESS, payload: res.data})
            })
            .catch(err => {
                dispatch({type: DRIVER_REGISTER_FAILURE, payload: err})
            })
    )
}

export const userRegister = regUser => dispatch => {
    console.log('Action', regUser)
    dispatch({type: USER_REGISTER_START});
    return (
        axios
            .post('https://rideforlifemarch25.herokuapp.com/api/users/register', regUser)
            .then(res => {
                console.log(res)
                dispatch({type: USER_REGISTER_SUCCESS, payload: res.data})
            })
            .catch(err => {
                dispatch({type: USER_REGISTER_FAILURE, payload: err})
            })
    )
}

export const driverLogin = creds => dispatch => {
    dispatch({type: DRIVER_LOGIN_START});
    return (
        axios
            .post('https://rideforlife.herokuapp.com/api/drivers/login', creds)
            .then(res => {
                console.log(res)
                localStorage.setItem('token', res.data.payload)
                dispatch({type: DRIVER_LOGIN_SUCCESS, payload: res.data.payload})
            })
            .catch(err => {
                dispatch({type: DRIVER_LOGIN_FAILURE, payload: err})
            })
    )
}

export const userLogin = creds => dispatch => {
    dispatch({type: USER_LOGIN_START});
    return (
        axios
            .post('https://rideforlife.herokuapp.com/api/users/login', creds)
            .then(res => {
                console.log(res)
                localStorage.setItem('token', res.data.payload);
                dispatch({type: USER_LOGIN_SUCCESS, payload: res.data.payload})
            })
            .catch(err => {
                dispatch({type: USER_LOGIN_FAILURE, payload: err})
            })
    );
}

export const driverData = () => dispatch => {
    dispatch({type: GET_DRIVER_DATA_START});
    axios
        .get('https://rideforlife.herokuapp.com/api/drivers', {
            headers: { Authorization: localStorage.getItem('token') }
        })
        .then(res => {
            console.log(res)
            dispatch({type: GET_DRIVER_DATA_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(err)
            dispatch({type: GET_DRIVER_DATA_FAILURE, payload: err})
        })
}

export const userData = () => dispatch => {
    dispatch({type: GET_USER_DATA_START});
    axios
        .get('https://rideforlife.herokuapp.com/api/users', {
            headers: { Authorization: localStorage.getItem('token') }
        })
        .then(res => {
            console.log(res)
            dispatch({type: GET_USER_DATA_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(err)
            dispatch({type: GET_USER_DATA_FAILURE, payload: err})
        })

}
