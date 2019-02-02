import React, {Component} from 'react';
import './EventCard.css';
import profileImage from '../../_assets/girlProfile.png';

class EventCard extends Component {
    render() {
        return(
            <div className="card event-card">
                <div className="d-flex justify-content-start event-user-margin">
                    <img src={profileImage} width="45" height="45" alt="user profile"/>
                    <h3 className="event-user-name">Ariana Mendy</h3>
                </div>
                <div className="card-body">
                    <p>Description de l'evenement !</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <button className="btn btn-primary">Participer</button>
                        <span className="badge badge-info">1 / 5</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default EventCard;