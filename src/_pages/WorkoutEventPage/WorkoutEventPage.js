import React, {Component} from 'react';
import NavBar from '../../_components/NavBar/NavBar';
import { Formik, Field, Form, ErrorMessage } from 'formik';

class WorkoutEventPage extends Component {
    render() {
        return(
            <div>
                <NavBar></NavBar>
                <div className="container">
                    <Formik
                        initialValues={{email: '', password: ''}}
                        onSubmit={(values) => {
                            if (values.email !== '' && values.password !== ''){
                                let data = {"username": values.email, "password": values.password}
                                this.props.login(data);
                            }
                        }}
                        render={(props) => (
                            <Form>
                                <Field type="email" name="email" className="form-control userMail" placeholder="email@example.com" validate={this.validateEmail} value={props.values.email}/>
                                <ErrorMessage name="email" />
                                <Field type="password" name="password" className="form-control userPassword" placeholder="Mot de passe" validate={this.validatePassword} value={props.values.password}/>
                                <ErrorMessage name="password" />
                                <button type="submit" className="btn btn-primary userLoginBtn">
                                Connexion
                                </button>
                            </Form>
                        )}
                    />
                </div>
            </div>

        );
    }
}

export default WorkoutEventPage;