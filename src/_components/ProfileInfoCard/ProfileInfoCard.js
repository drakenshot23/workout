import React, {Component} from 'react';
import './ProfileInfoCard.css';
import blankProfileImage from '../../_assets/blankProfilePhoto.png';

class ProfileInfoCard extends Component {
    render ()
    {
        var starsNb = 3;
        var stars = []
        for(let i = 0; i < 5; i++){
            if (i < starsNb) {
                stars.push(<span key={i} className="fas fa-star star-checked"></span>);
            } else {
                stars.push(<span key={i} className="fas fa-star"></span>);
            }
        }
        return(
            <div className="card" style={{ marginTop: 10 + 'px'}}>
                <div className="d-flex justify-content-center" style={{marginTop: 10 + 'px'}}>
                    <img src={blankProfileImage} width="60" height="60" alt="user profile"/>
                </div>
                <div className="d-flex justify-content-center">
                    <h3 className="event-user-name">{this.props.firstName} {this.props.lastName}</h3>
                </div>
                <div className="card-body">
                    <div className="d-flex justify-content-between profile-border">
                        <div>
                            {this.props.age} years
                            {/**Age */}
                        </div>
                        <div>
                            {this.props.height}
                            {/**Height */}
                        </div>
                        <div>
                            {this.props.weight}
                            {/**Weight */}
                        </div>
                    </div>
                    <div className="d-flex justify-content-center star-margin">
                        {stars}
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default ProfileInfoCard;