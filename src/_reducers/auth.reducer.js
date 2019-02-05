import {authTypes} from '../_actions/auth-types';

export default function (state = {loggedIn: false}, action) {
    switch(action.type) {
        case authTypes.LOGIN_REQUEST:
            if (action.payload === null) {
                return state;
            }
            localStorage.setItem('user', action.payload.user.id);
            localStorage.setItem('token', action.payload.token);
            return {
                ...state, 
                loggedIn: action.loggedIn,
                user: action.payload.user.id
            };
        case authTypes.VERIFY_TOKEN:
            if (action.payload === null) {
                return state;
            }
            return {
                ...state,
                loggedIn: action.loggedIn,
            };
        case authTypes.LOGOUT:
            return {
                ...state,
                loggedIn: action.loggedIn
            }
        default:
            return state;
    }
}