import {eventTypes} from '../_actions/event-types';


export default function (state = {}, action) {
    switch(action.type) {
        case eventTypes.INIT_HOME_EVENTS:
            if (action.payload.success) {
                return {
                    ...state,
                    cards: action.payload.data
                }
            } else {
                return state;
            }
        default:
            return state;
    }
}