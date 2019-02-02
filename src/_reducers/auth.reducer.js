import {authActions} from '../_actions/auth-types';

export default function (state = {loggedIn: false}, action) {
    switch(action.type) {
        case authActions.LOGIN_REQUEST:
            if (action.payload === null) {
                return state;
            }
            localStorage.setItem('user', action.payload.data.user.id);
            localStorage.setItem('token', action.payload.data.token);
            return {
                ...state, 
                loggedIn: action.loggedIn,
                user: action.payload.data.user.id
            };
        case authActions.VERIFY_TOKEN:
            if (action.payload === null) {
                return state;
            }
            return {
                ...state, 
                loggedIn: action.loggedIn,
            };
        default:
            return state;
    }
}