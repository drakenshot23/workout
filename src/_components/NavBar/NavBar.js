import React, {Component} from 'react';
import './NavBar.css';
import logo from '../../_assets/workoutLogo.png';
import { Link } from "react-router-dom";

class NavBar extends Component {
    render()
    {
        return(
            <div className="container-fluid nav-color">
                <div className="container">
                    <nav className="navbar navbar-expand-lg nav-color">
                    <Link to="/home" className="navbar-brand"><img src={logo} width="60" height="30" alt="workoutLogo" className="homeLogo"/></Link>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link to="/home" className="nav-link" href="#">Accueil<span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/workout_event" className="nav-link">Evenement</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/dashboard" className="nav-link">Dashboard</Link>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search user" aria-label="Search" />
                                <button className="btn btn-primary my-2 my-sm-0" type="submit"><i className="fas fa-search"></i></button>
                            </form>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}

export default NavBar;