import axios from 'axios';

export const USER_LOGIN_START = 'USER_LOGIN_START';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';

export const userLogin = creds => dispatch => {
    dispatch({type: USER_LOGIN_START});
    return (
        axios
            .post('https://rideforlife.herokuapp.com/api/users/login', creds)
            .then(res => {
                localStorage.setItem('token, res.data.payload');
                dispatch({type: USER_LOGIN_SUCCESS, payload: res.data.payload})
            })
    )
}


