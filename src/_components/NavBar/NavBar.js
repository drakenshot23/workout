import React, {Component} from 'react';
import './NavBar.css';
import logo from '../../_assets/workoutLogo.png';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import {logout} from '../../_actions/user-actions';
import PropTypes from 'prop-types';
import { withRouter } from "react-router";
import { verifyUserToken } from '../../_helpers/verifyUserToken';

class NavBar extends Component {
    
    componentDidUpdate() {
        verifyUserToken(this.props);
        if (!this.props.loggedIn) {
            localStorage.clear();
            this.props.history.push('/');
        }
    }

    render()
    {
        let username = localStorage.getItem('firstName');

        return(
            <div className="container-fluid nav-color">
                <div className="container">
                    <nav className="navbar navbar-expand-lg nav-color">
                    <Link to="/home" className="navbar-brand"><img src={logo} width="60" height="30" alt="workoutLogo" className="homeLogo"/></Link>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link to="/home" className="nav-link" >Accueil<span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/workout_event" className="nav-link">Evenement</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/dashboard" className="nav-link">Dashboard</Link>
                                </li>
                            </ul>
                            <div class="btn-group">
                                <button type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Hello {username}</button>
                                <div className="dropdown-menu">
                                    <button className="dropdown-item">Action</button>
                                    <button className="dropdown-item">Another action</button>
                                    <button className="btn btn-danger my-2 my-sm-0" onClick={() => {
                                        let token = localStorage.getItem('token');
                                        if (token !== null){
                                            this.props.logout(token);
                                        }
                                    }}>Logout <i className="fas fa-sign-out-alt"></i></button>
                                </div>
                            </div>

                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}

NavBar.propTypes = {
    logout: PropTypes.func.isRequired,
    loggedIn: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
    loggedIn: state.auth.loggedIn,
})



export default connect(mapStateToProps, {logout})(withRouter(NavBar));