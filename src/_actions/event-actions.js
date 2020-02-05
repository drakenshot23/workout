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
        dispatch({type: eventTypes.CREATE_EVENT, payload: res.data, success: res.data.success});
    }).catch(error => {
        dispatch({type: eventTypes.CREATE_EVENT, payload: null, success: false});
    });
}

export const deleteEvent = (id, key, config) => dispatch => {
    axios.post(apiURL + 'WorkoutEvent/' + id + '/delete_event/', null, config).then(res => {
        console.log("data has been sent and delete ok");
        dispatch({type: eventTypes.DELETE_EVENT, payload: res.data, success: true, key: key});
    }).catch(error => {
        dispatch({type: eventTypes.DELETE_EVENT, payload: error.data, success: false});
    });
}