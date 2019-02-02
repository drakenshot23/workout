import React, {Component} from 'react';
import NavBar from '../../_components/NavBar/NavBar';
// import PropTypes from 'prop-types';
// import {verifyUserToken} from '../../_helpers/verifyUserToken';
import { connect } from 'react-redux';
import { verifyUserToken } from '../../_helpers/verifyUserToken';

class DashboardPage extends Component {

    componentWillMount(){
        verifyUserToken(this.props);
    }

    render() {
        return(
            <div>
                <NavBar></NavBar>
            </div>
        );
    }
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(DashboardPage);