import React, {Component} from 'react';
import logo from '../../_assets/workoutLogo.png';
import './ResetPasswordPage.css';

class ResetPasswordPage extends Component {

    resetPassword() {
        this.props.history.push('/');
    }


    render ()
    {
        return(
            <div className="container resetPasswordForm">
                <div className="row justify-content-center">
                    <div className="form-group login justify-content-center">
                        <img src={logo} width="66" height="35" alt="workoutLogo" className="workoutLogo"/><br />
                        <input type="email" className="form-control" placeholder="email@example.com" />
                        <button className="btn btn-primary userLoginBtn" onClick={() => this.resetPassword()}>Reset password</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ResetPasswordPage;