import React, {Component} from 'react';
import NavBar from '../../_components/NavBar/NavBar';
import EventCard from '../../_components/EventCard/EventCard';
import ProfileInfoCard from '../../_components/ProfileInfoCard/ProfileInfoCard';

class HomePage extends Component {
    render()
    {
        var cards = []

        for(let i = 0; i < 2; i++){
            cards.push(<EventCard key={i}></EventCard>);
        }

        return (
        <div>
            <NavBar></NavBar>
            <div className="container">
                <div className="row">
                    <div className="col-xs-3">
                        <ProfileInfoCard></ProfileInfoCard>
                    </div>
                    <div className="col-xs-9">
                        {cards}
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default HomePage;