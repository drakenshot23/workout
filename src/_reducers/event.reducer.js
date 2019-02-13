import {eventTypes} from '../_actions/event-types';


export default function (state = {}, action) {
    switch(action.type) {
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
        default:
            return state;
    }
}