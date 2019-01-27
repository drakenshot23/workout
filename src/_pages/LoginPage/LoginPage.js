import React, {Component} from 'react';
import './LoginPage.css';
import logo from '../../_assets/workoutLogo.png';
import {withRouter, Link} from 'react-router-dom';
import axios from 'axios';



class LoginPage extends Component {

    loginData = {}

    constructor(props) {
        super(props);
        let token = localStorage.getItem('token');
        let user = localStorage.getItem('user');

        if (token !== null && user !== null) {
            let data = 
                {
                    "token": token, 
                    "user": user
                }
            
            axios.post('http://localhost:8000/token-verify/', data)
            .then(res => {
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('user', res.data.user.id);
                this.props.history.push('/home');
            }).catch(error => {
                localStorage.clear();
                console.log(error.response.status);
            });
        }

        
    }

    login() {
        axios.post('http://localhost:8000/token-auth/', this.loginData)
        .then(res => {
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', res.data.user.id);
            this.props.history.push('/home');
        }).catch(error => {
            console.log(error.response.status);
        });
    }



    handleMail(e) {
        this.loginData['username'] = e.target.value;
    }

    handlePassword(e) {
        this.loginData['password'] = e.target.value;
    }

    componentDidMount()
    {
        // TODO: When user already connected redirect him to the home page
    }

    render ()
    {
        return(
            <div className="container loginForm">
                <div className="row justify-content-center">
                    <div className="form-group login justify-content-center">
                        <img src={logo} width="66" height="35" alt="workoutLogo" className="workoutLogo"/><br />
                        <input type="email" className="form-control userMail" onChange={(e) => this.handleMail(e)} placeholder="email@example.com" />
                        <input type="password" className="form-control userPassword" onChange={(e) => this.handlePassword(e)} placeholder="Mot de passe" />
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
