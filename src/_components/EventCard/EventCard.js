import React, {Component} from 'react';
import './EventCard.css';
import blankProfileImage from '../../_assets/blankProfilePhoto.png';


class EventCard extends Component {

    render() {
        let user = parseInt(localStorage.getItem('user'), 10);
        var shouldHidde = "btn btn-primary";
        if (user === this.props.eventCreator){
            shouldHidde = "btn btn-primary hiddenButton"
        }
        return(
            <div className="card container event-card">
                <div className="row">
                    <div className="col-1 event-user-margin">
                        <img src={blankProfileImage} width="45" height="45" alt="user profile"/>
                    </div>
                    <div className="col-7">
                        <h3 className="event-user-name">{this.props.firstName} {this.props.lastName}</h3>
                    </div>
                    <div className="col-3">
                        <button className="close"><span aria-hidden="true">&times;</span></button>
                    </div>
                </div>
                    <div className="card-body">
                        <p>{this.props.description}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <button className={shouldHidde}>Participer</button>
                            <span className="badge badge-info">1 / {this.props.maxParticipants}</span>
                        </div>
                    </div>
            </div>
        );
    }
}

export default EventCard;