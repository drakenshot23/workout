import React, {Component} from 'react';
import NavBar from '../../_components/NavBar/NavBar';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { createEvent } from '../../_actions/event-actions';
import { connect } from 'react-redux';


class WorkoutEventPage extends Component {
    render() {
        return(
            <div>
                <NavBar></NavBar>
                <div className="container">
                    <div className="row justify-content-center">
                        <h1>Creer un evenement</h1> 
                    </div>
                    <div className="row justify-content-center">
                        <Formik
                            initialValues={{address: '', date: '', description: '', maxParticipants: 2}}
                            onSubmit={(values) => {
                                if (values.address !== '' && values.date !== '' && values.description !== '' && values.maxParticipants >= 2)
                                {
                                    let token = localStorage.getItem('token');
                                    let user = localStorage.getItem('user');
                                    let data = {
                                        eventCreator: user,
                                        workoutDate: values.date,
                                        streetAddress: values.address,
                                        description: values.description,
                                        maxParticipants: values.maxParticipants
                                    }
                                    let config = {
                                        headers: {
                                            "Authorization": `Bearer ${token}`
                                        }
                                    }
                                    this.props.createEvent(data, config);
                                } else {
                                    alert("Veuillez remplir tous les champs");
                                }
                            }}
                            render={(props) => (
                                <Form>
                                    <Field type="text" name="address" className="form-control addressField" placeholder="12 Rue de Rivoli" value={props.values.address}/>
                                    <ErrorMessage name="address" />
                                    <Field type="date" name="date" className="form-control dateField" placeholder="Mot de passe" value={props.values.date}/>
                                    <ErrorMessage name="date" />
                                    <Field type="text" name="description" className="form-control" placeholder="Description" value={props.values.description}/>
                                    <ErrorMessage name="description" />
                                    <Field type="number" name="maxParticipants" className="form-control" value={props.values.maxParticipants} />
                                    <button type="submit" className="btn btn-primary">
                                    Creer
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

const mapStateToProps = state => ({
    
})

export default connect(mapStateToProps, {createEvent})(WorkoutEventPage);