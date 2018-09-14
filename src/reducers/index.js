import { combineReducers } from 'redux';

export const events = (state = [], payload) => {
    switch(payload.type) {
        case 'EVENT__CREATE':
            return [...state, payload.data];

        case 'EVENTS__GET':
            return payload.events;

        default:
            return state;
    }
};


const rootReducer = combineReducers({
    events
});

export default rootReducer;