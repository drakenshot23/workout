import React, {Component} from 'react';
import logo from '../../_assets/workoutLogo.png';
import './SignInPage.css'

class SignInPage extends Component {

    register() {
        this.props.history.push('/');
    }

    render ()
    {
        return(
            <div className="container">
                <div className="row justify-content-center">
                    <div className="form-group login justify-content-center">
                        <img src={logo} width="66" height="35" alt="workoutLogo" className="workoutLogo"/><br />                 
                        <input type="text" className="form-control first-input" placeholder="First Name" />
                        <input type="text" className="form-control in-between-input" placeholder="Last Name" />
                        <input type="email" className="form-control in-between-input" placeholder="email@example.com" />
                        <input type="password" className="form-control userPassword" placeholder="Password" />
                        <button className="btn btn-primary userLoginBtn" onClick={() => this.register()}>Sign In</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignInPage;