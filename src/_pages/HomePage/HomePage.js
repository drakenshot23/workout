import React, {Component} from 'react';
import { connect } from 'react-redux';
import NavBar from '../../_components/NavBar/NavBar';
import EventCard from '../../_components/EventCard/EventCard';
import ProfileInfoCard from '../../_components/ProfileInfoCard/ProfileInfoCard';
import PropTypes from 'prop-types';
import {verifyUserToken} from '../../_helpers/verifyUserToken';
import {initHomeEvents} from '../../_actions/event-actions';

class HomePage extends Component {

    componentWillMount() {
        verifyUserToken(this.props);
        let token = localStorage.getItem('token');
        let user = localStorage.getItem('user');
        if (token !== null && user !== null) {
            let config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
            this.props.initHomeEvents(config);
        }
    }

    render()
    {

        const {cards} = this.props;
        let firstName = localStorage.getItem('firstName');
        let lastName = localStorage.getItem('lastName');

        return (
        <div>
            <NavBar></NavBar>
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-3">
                        <ProfileInfoCard firstName={firstName} lastName={lastName} age={'21'} height={'1m81'} weight={'70kg'}></ProfileInfoCard>
                    </div>
                    <div className="col-8">
                        {Array.isArray(cards) && cards.map((card, index) =>  <EventCard key={index} eventCreator={card.eventCreator.user.id} firstName={card.eventCreator.user.first_name} lastName={card.eventCreator.user.last_name} description={card.description} maxParticipants={card.maxParticipants}></EventCard>)}
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

HomePage.propTypes = {
    initHomeEvents: PropTypes.func.isRequired,
    cards: PropTypes.array,
}

const mapStateToProps = state => ({
    cards: state.events.cards,
})

export default connect(mapStateToProps, {initHomeEvents})(HomePage);