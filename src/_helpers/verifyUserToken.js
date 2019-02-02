import jwt_decode from 'jwt-decode';
import {baseURL} from './apiURL';

export function verifyUserToken(props) {
    let token = localStorage.getItem('token');
    if (token !== null) {
        let tokenExp = jwt_decode(token);
        if (tokenExp < Date.now()) {
            console.log("The token has expired !");
            props.verifyToken(token);
        } else {
            if (window.location.href === baseURL) {
                props.history.push('/home');
            }
        }
    } else {
        if (window.location.href !== baseURL){
            props.history.push('/');
        }
    }
}