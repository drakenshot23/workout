import {apiURL} from '../_helpers/apiURL';
import axios from 'axios';
import {authTypes} from './auth-types';


export const register = (data) => dispatch => {
    axios.post(apiURL + 'auth/create_profile/', data).then(res => {
        dispatch({type: authTypes.REGISTER, payload: res.data, success: res.data.success});
    }).catch(error => {
        dispatch({type: authTypes.REGISTER, payload: null, success: false});
    })
}


export const login = (data) => dispatch => {
    axios.post(apiURL + 'token-auth/', data).then(res => {
        dispatch({type: authTypes.LOGIN_REQUEST, payload: res.data, loggedIn: true});
    }).catch(error => {
       dispatch({type: authTypes.LOGIN_REQUEST, payload: null, loggedIn: false});
    });
}

export const verifyToken = (token) => dispatch => {
    axios.post(apiURL + 'token-verify/', token).then(res => {
        dispatch({type: authTypes.VERIFY_TOKEN, payload: res.data, loggedIn: true});
    }).catch(error => {
        dispatch({type: authTypes.VERIFY_TOKEN, payload: null, loggedIn: false});
    });
}

export const logout = (token) => dispatch => {
    axios.post(apiURL + 'auth/logout_user/', token).then(res => {
        dispatch({type: authTypes.LOGOUT, payload: res.data, loggedIn: false});
    }).catch(error => {
        dispatch({type: authTypes.LOGOUT, payload: null, loggedIn: false});
    })
}
