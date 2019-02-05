import {apiURL} from '../_helpers/apiURL';
import axios from 'axios';
import {eventTypes} from './event-types';



export const initHomeEvents = (config) => dispatch => {
    axios.get(apiURL + 'InitWorkoutEvent/', config).then(res => {
        dispatch({type: eventTypes.INIT_HOME_EVENTS, payload: res.data});
    }).catch(error => {
        dispatch({type: eventTypes.INIT_HOME_EVENTS, payload: null});
    });
}
