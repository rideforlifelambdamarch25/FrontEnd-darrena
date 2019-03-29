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
export const CREATE_RIDE_START = 'CREATE_RIDE_START';
export const CREATE_RIDE_SUCCESS = 'CREATE_RIDE_SUCCESS';
export const CREATE_RIDE_FAILURE = 'CREATE_RIDE_FAILURE';
export const GET_DRIVER_ID_START = 'GET_DRIVER_ID_START';
export const GET_DRIVER_ID_SUCCESS = 'GET_DRIVER_ID_SUCCESS';
export const GET_DRIVER_ID_FAILURE = 'GET_DRIVER_ID_FAILURE';
export const GET_USER_ID_START = 'GET_USER_ID_START';
export const GET_USER_ID_SUCCESS = 'GET_USER_ID_SUCCESS';
export const GET_USER_ID_FAILURE = 'GET_USER_ID_FAILURE';
export const UPDATE_DRIVER_START = 'UPDATE_DRIVER_START';
export const UPDATE_DRIVER_SUCCESS = 'UPDATE_DRIVER_SUCCESS';
export const UPDATE_DRIVER_FAILURE = 'UPDATE_DRIVER_FAILURE';
export const DELETE_DRIVER_START = 'DELETE_DRIVER_START';
export const DELETE_DRIVER_SUCCESS = 'DELETE_DRIVER_SUCCESS';
export const DELETE_DRIVER_FAILURE = 'DELETE_DRIVER_FAILURE';


const baseUrl = 'https://rideforlifemarch25.herokuapp.com';


export const driverRegister = regDriver => dispatch => {
    dispatch({type: DRIVER_REGISTER_START});
    axios
        .post(`${baseUrl}/api/drivers/register`, regDriver)
        .then(res => {
            console.log(res)
            dispatch({type: DRIVER_REGISTER_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: DRIVER_REGISTER_FAILURE, payload: err})
        })
}

export const userRegister = regUser => dispatch => {
    console.log('Action', regUser)
    dispatch({type: USER_REGISTER_START});
    axios
        .post(`${baseUrl}/api/users/register`, regUser)
        .then(res => {
            console.log(res)
            dispatch({type: USER_REGISTER_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: USER_REGISTER_FAILURE, payload: err})
        })
}

export const driverLogin = creds => dispatch => {
    dispatch({type: DRIVER_LOGIN_START});
    axios
        .post(`${baseUrl}/api/drivers/login`, creds)
        .then(res => {
            console.log('driver login res', res.data)
            // localStorage.setItem('token', res.data.token)
            dispatch({type: DRIVER_LOGIN_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: DRIVER_LOGIN_FAILURE, payload: err})
        })
}

export const userLogin = creds => dispatch => {
    dispatch({type: USER_LOGIN_START});
    axios
        .post(`${baseUrl}/api/users/login`, creds)
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.payload);
            dispatch({type: USER_LOGIN_SUCCESS, payload: res.data.payload})
        })
        .catch(err => {
        dispatch({type: USER_LOGIN_FAILURE, payload: err})
        })
}

export const driverData = () => dispatch => {
    dispatch({type: GET_DRIVER_DATA_START});
    axios
        .get(`${baseUrl}/api/drivers`, {
            headers: { Authorization: localStorage.getItem('token') }
        })
        .then(res => {
            console.log(res)
            dispatch({type: GET_DRIVER_DATA_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(err)
            dispatch({type: GET_DRIVER_DATA_FAILURE, payload: err})
        });
}

export const userData = () => dispatch => {
    dispatch({type: GET_USER_DATA_START});
    axios
        .get(`${baseUrl}/api/users`, {
            headers: { Authorization: localStorage.getItem('token') }
        })
        .then(res => {
            console.log(res)
            dispatch({type: GET_USER_DATA_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(err)
            dispatch({type: GET_USER_DATA_FAILURE, payload: err})
        });
}

export const createRide = createRideObj => dispatch => {
    dispatch({type: CREATE_RIDE_START});
    axios
        .post(`${baseUrl}/api/drivers/create-ride`, {
            headers: { Authorization: localStorage.setItem('token')},
            body: createRideObj
        })
        .then(res => {
            console.log(res)
            dispatch({type: CREATE_RIDE_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(err)
            dispatch({type: CREATE_RIDE_FAILURE, payload: err})
        })
}

export const getDriverId = id => dispatch => {
    dispatch({type: GET_DRIVER_ID_START});
    axios
        .post(`${baseUrl}/api/drivers/:id`, id)
        .then(res => {
            console.log(res)
            dispatch({type: GET_DRIVER_ID_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(err)
            dispatch({type: GET_DRIVER_ID_FAILURE, payload: err})
        })
}

export const getUserId = () => dispatch => {
    dispatch({type: GET_USER_ID_START});
    axios
        .post(`${baseUrl}/api/users/:id`, {
            headers: { Authorization: localStorage.getItem('token')}
        })
        .then(res => {
            console.log(res)
            dispatch({type: GET_USER_ID_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(err)
            dispatch({type: GET_USER_ID_FAILURE, payload: err})
        })
}

export const updateDriver = updateDriver => dispatch => {
    dispatch({type: UPDATE_DRIVER_START});
    axios
        .put(`${baseUrl}/api/drivers/:id`, updateDriver)
        .then(res => {
            console.log(res)
            dispatch({type: UPDATE_DRIVER_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(err)
            dispatch({type: UPDATE_DRIVER_FAILURE, payload: err})
        })
}

export const deleteDriver = deleteDriver => dispatch => {
    dispatch({type: DELETE_DRIVER_START});
    axios
        .put(`${baseUrl}/api/drivers/:id`, deleteDriver)
        .then(res => {
            console.log(res)
            dispatch({type: DELETE_DRIVER_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(err)
            dispatch({type: DELETE_DRIVER_FAILURE, payload: err})
        })
}

