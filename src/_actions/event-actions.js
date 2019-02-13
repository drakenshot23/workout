import {apiURL} from '../_helpers/apiURL';
import axios from 'axios';
import {eventTypes} from './event-types';



export const initHomeEvents = (config) => dispatch => {
    axios.get(apiURL + 'InitWorkoutEvent/', config).then(res => {
        dispatch({type: eventTypes.INIT_HOME_EVENTS, payload: res.data, success: res.data.success});
    }).catch(error => {
        dispatch({type: eventTypes.INIT_HOME_EVENTS, payload: null, success: false});
    });
}

export const createEvent = (data, config) => dispatch => {
    console.log("data has been sent");
    axios.post(apiURL + 'WorkoutEvent/create_new_workout_event/', data, config).then(res => {
        console.log("data successful created")
        dispatch({type: eventTypes.CREATE_EVENT, payload: res.data, success: res.data.success});
    }).catch(error => {
        dispatch({type: eventTypes.CREATE_EVENT, payload: null, success: false});
    });
}