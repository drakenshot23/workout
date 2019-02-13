import jwt_decode from 'jwt-decode';
import {baseURL} from './apiURL';
import store from './store';

export function verifyUserToken(props) {
    var newState = store.getState();
    let token = localStorage.getItem('token');
    // if (token !== null && newState.auth.loggedIn) {
    //     let token_decoded = jwt_decode(token);
    //     console.log(token_decoded.exp * 1000);
    //     if (token_decoded.exp * 1000 < Date.now()) {
    //         console.log("Expired");
    //         localStorage.clear();
    //         props.history.push('/');
    //     } else {
    //         console.log("Not expired");
    //         if (window.location.href === baseURL) {
    //             props.history.push('/home');
    //         }
    //     }
    // } else {
    //     localStorage.clear();
    //     if (window.location.href !== baseURL){
    //         props.history.push('/');
    //     }
    // }
}