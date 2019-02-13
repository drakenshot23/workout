import {authTypes} from '../_actions/auth-types';

export default function (state = {loggedIn: false}, action) {
    switch(action.type) {
        case authTypes.REGISTER_USER:
            return {
                ...state,
                success: action.success
            }
        case authTypes.LOGIN_REQUEST:
            if (action.payload === null) {
                return state;
            }
            console.log(action.payload);
            localStorage.setItem('user', action.payload.user.id);
            localStorage.setItem('firstName', action.payload.user.user.first_name);
            localStorage.setItem('lastName', action.payload.user.user.last_name);
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