import {
    eventTypes
} from '../_actions/event-types';


export default function (state = {}, action) {
    switch (action.type) {
        case eventTypes.INIT_HOME_EVENTS:
            if (action.success) {
                return {
                    ...state,
                    cards: action.payload.data
                }
            } else {
                return state;
            }
        case eventTypes.CREATE_EVENT:
            if (action.success) {
                return state;
            } else {
                return state;
            }
        case eventTypes.DELETE_EVENT:
            console.log("inside the reducer : " + action.success);
            console.log(state);
            if (action.success) {
                return {
                    ...state,
                    success: action.success
                }
            } else {
                return state;
            }
        default:
            return state;
    }
}