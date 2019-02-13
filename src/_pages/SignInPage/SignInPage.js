import React, {Component} from 'react';
import logo from '../../_assets/workoutLogo.png';
import './SignInPage.css'
import {register} from '../../_actions/user-actions';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { connect } from 'react-redux';

class SignInPage extends Component {

    render ()
    {
        return(
            <div className="container signinForm">
                <div className="row justify-content-center">
                    <div className="form-group login justify-content-center">
                    <img src={logo} width="66" height="35" alt="workoutLogo" className="workoutLogo"/><br /> 
                    <Formik
                            initialValues={{firstName: '', lastName: '', email: '', password: ''}}
                            onSubmit={(values) => {
                                if (values.email !== '' && values.password !== '' && values.firstName !== '' && values.lastName !== ''){
                                    let data = {"first_name": values.firstName, "last_name": values.lastName, "email": values.email, "password": values.password}
                                    this.props.register(data);
                                }
                            }}
                            render={(props) => (
                                <Form>
                                    <Field type="text" name="firstName" className="form-control first-input" placeholder="First Name" value={props.values.firstName}/>
                                    <Field type="text" name="lastName" className="form-control in-between-input" placeholder="Last Name" value={props.values.lastName}/>
                                  <Field type="email" name="email" className="form-control in-between-input" placeholder="email@example.com" value={props.values.email}/>
                                  <ErrorMessage name="email" />
                                  <Field type="password" name="password" className="form-control userPassword" placeholder="Mot de passe" value={props.values.password}/>
                                  <ErrorMessage name="password" />
                                  <button type="submit" className="btn btn-primary userLoginBtn">
                                    S'enregistrer
                                  </button>
                                </Form>
                              )}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, {register})(SignInPage);