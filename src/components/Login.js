import React, {Component} from 'react';
import './login.css';
import logo from '../assets/workoutLogo.png';

class Login extends Component {
    render ()
    {
        return(
            <div className="container">
                <div className="row justify-content-center">
                    <div className="form-group login justify-content-center">
                        <img src={logo} width="66" height="35" alt="workoutLogo" className="workoutLogo"/><br />
                        <input type="email" className="form-control userMail" placeholder="email@example.com" />
                        <input type="password" className="form-control userPassword" placeholder="Password" />
                        <button className="btn btn-primary userLoginBtn" >Sign In</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
