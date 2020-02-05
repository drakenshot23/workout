import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from '../_helpers/store';
import LoginPage from '../_pages/LoginPage/LoginPage';
import { Router, Route } from "react-router-dom";
import {createBrowserHistory} from 'history';
import HomePage from '../_pages/HomePage/HomePage';
import ResetPasswordPage from '../_pages/ResetPasswordPage/ResetPasswordPage';
import SignInPage from '../_pages/SignInPage/SignInPage';
import DashboardPage from '../_pages/DashboardPage/DashboardPage';
import WorkoutEventPage from '../_pages/WorkoutEventPage/WorkoutEventPage';

const customHistory = createBrowserHistory();


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={customHistory}>
          <div>
            <Route exact path="/" component={LoginPage} />
            <Route path="/home" component={HomePage} />
            <Route path="/reset_password" component={ResetPasswordPage} />
            <Route path="/sign_in" component={SignInPage} />
            {/* <Route path="/dashboard" component={DashboardPage} /> */}
            <Route path="/workout_event" component={WorkoutEventPage} />
          </div>
        </Router>
      </Provider>
    );
  }
}

// const mapStateToProps = state => ({

// });

// const mapDispatchToProps = dispatch => bindActionCreators({

// }, dispatch);

export default App;
