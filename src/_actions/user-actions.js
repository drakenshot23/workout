import {apiURL} from '../_helpers/apiURL';
import axios from 'axios';
import {authActions} from './auth-types';



export const login = (data) => dispatch => {
    axios.post(apiURL + 'token-auth/', data).then(res => {
        dispatch({type: authActions.LOGIN_REQUEST, payload: res, loggedIn: true});
    }).catch(error => {
       dispatch({type: authActions.LOGIN_REQUEST, payload: null, loggedIn: false});
    });
}

export const verifyToken = (token) => dispatch => {
    axios.post(apiURL + 'token-verify/', token).then(res => {
        dispatch({type: authActions.VERIFY_TOKEN, payload: res})
    }).catch(error => {
        dispatch({type: authActions.VERIFY_TOKEN, payload: null})
    });
}

