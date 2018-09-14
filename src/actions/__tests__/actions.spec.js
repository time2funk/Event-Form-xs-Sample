import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from '../../actions'

const middlewares = [
    thunk
];
const mockStore = configureStore(middlewares);
const store = mockStore({});

describe(`actions`, () => {

    it('should create an action to get-events', () => {
        const events = [];
        const expectedAction = {
            type: "EVENTS__GET",
            events
        }
        expect(actions.getEvents(events)).toEqual(expectedAction);
    });

    it('should create an action to create-events', () => {
        const data = {
            "first-name": "Tester",
            "second-name": "Test",
            "email": "test@test.com",
            "date": new Date()
        };
        const expectedAction = {
            type: "EVENT__CREATE",
            data: {
                "first-name": data['first-name'],
                "second-name": data['second-name'],
                "email": data['email'],
                "date": data['date']
            }
        }
        expect(actions.createEventSuccess(data)).toEqual(expectedAction);
    });
});