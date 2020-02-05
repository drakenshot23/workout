import React, {Component} from 'react';
import './EventCard.css';
import blankProfileImage from '../../_assets/blankProfilePhoto.png';
import { connect } from 'react-redux';
import {deleteEvent, initHomeEvents} from '../../_actions/event-actions';


class EventCard extends Component {

    componentDidUpdate() {
        if (this.props.success) {
            let token = localStorage.getItem('token');
            let config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
            this.props.initHomeEvents(config);
        }
    }


    render() {
        let user = parseInt(localStorage.getItem('user'), 10);
        var participateHide = "btn btn-primary";
        var deleteHide = "close";
        if (user === this.props.eventCreator){
            participateHide = "btn btn-primary hiddenButton";
        } else {
            deleteHide = "close hiddenButton";
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
                        <button className={deleteHide} onClick={() => {
                            let token = localStorage.getItem('token');
                            let config = {
                                headers: {
                                    "Authorization": `Bearer ${token}`
                                }
                            }
                            this.props.deleteEvent(this.props.eventId, this.props.key, config);
                        }}><span aria-hidden="true">&times;</span></button>
                    </div>
                </div>
                    <div className="card-body">
                        <p>{this.props.description}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <button className={participateHide}>Participer</button>
                            <span className="badge badge-info">1 / {this.props.maxParticipants}</span>
                        </div>
                    </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    success: state.events.success,
})

export default connect(mapStateToProps, {deleteEvent, initHomeEvents})(EventCard);