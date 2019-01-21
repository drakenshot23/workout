import React, {Component} from 'react';
import './LoginPage.css';
import logo from '../../_assets/workoutLogo.png';
import {withRouter, Link} from 'react-router-dom';
import Axios from 'axios';



class LoginPage extends Component {

    login() {
        //Axios.post('');
        this.props.history.push('/home');
    }

    componentDidMount()
    {
        // TODO: When user already connected redirect him to the home page
    }

    render ()
    {
        return(
            <div className="container">
                <div className="row justify-content-center">
                    <div className="form-group login justify-content-center">
                        <img src={logo} width="66" height="35" alt="workoutLogo" className="workoutLogo"/><br />
                        <input type="email" className="form-control userMail" placeholder="email@example.com" />
                        <input type="password" className="form-control userPassword" placeholder="Mot de passe" />
                        <button className="btn btn-primary userLoginBtn" onClick={() => this.login()}>Connexion</button>
                        <div className="d-flex justify-content-between login-row">
                            <Link to="/reset_password" className="login-link">Mot de passe oublie ?</Link>
                            <Link to="/sign_in" className="login-link">Inscription</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(LoginPage);
