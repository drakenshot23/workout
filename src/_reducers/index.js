import { combineReducers } from 'redux';
import authReducer from './auth.reducer'
import eventReducer from './event.reducer';

export default combineReducers({
    auth: authReducer,
    events: eventReducer,
});