import React, {Component} from 'react';
import { connect } from 'react-redux';
import './LoginPage.css';
import logo from '../../_assets/workoutLogo.png';
import {withRouter, Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {login, verifyToken} from '../../_actions/user-actions';
import {verifyUserToken} from '../../_helpers/verifyUserToken';
import { Formik, Field, Form, ErrorMessage } from 'formik';

class LoginPage extends Component {

    loginData = {}

    handleMail(e) {
        this.loginData['username'] = e.target.value;
    }

    handlePassword(e) {
        this.loginData['password'] = e.target.value;
    }

    componentWillMount()
    {
        verifyUserToken(this.props);
    }

    componentDidUpdate() {
        if (this.props.loggedIn) {
            this.props.history.push('/home');
        }
    }

    render ()
    {
        return(
            <div className="container loginForm">
                <div className="row justify-content-center">
                    <div className="form-group login justify-content-center">
                        <img src={logo} width="66" height="35" alt="workoutLogo" className="workoutLogo"/><br />
                        <Formik
                            initialValues={{email: '', password: ''}}
                            onSubmit={(values) => {
                                if (values.email !== '' && values.password !== ''){
                                    let data = {"username": values.email, "password": values.password}
                                    this.props.login(data);
                                    this.props.history.push('/home');
                                }
                            }}
                            render={(props, errors) => (
                                <Form>
                                  <Field type="email" name="email" className="form-control userMail" placeholder="email@example.com" value={props.values.email}/>
                                  <ErrorMessage name="email" />
                                  <Field type="password" name="password" className="form-control userPassword" placeholder="Mot de passe" value={props.values.password}/>
                                  <ErrorMessage name="password" />
                                  <button type="submit" className="btn btn-primary userLoginBtn">
                                    Submit
                                  </button>
                                </Form>
                              )}
                        />
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

LoginPage.propTypes = {
    login: PropTypes.func.isRequired,
    loggedIn: PropTypes.bool,
    verifyToken: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    loggedIn: state.auth.loggedIn,
})

// const mapDispatchToProps = dispatch => {

// }

export default connect(mapStateToProps, {login, verifyToken})(withRouter(LoginPage));
