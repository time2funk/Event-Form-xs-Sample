
import { events as reducer }  from '../../reducers';
import * as actions from '../../actions';

describe('reducers', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, [])).toEqual([]);
    });

    it('should handle EVENT__CREATE', () => {
        const test_data = {
            "first-name": 'Testet',
            "second-name": 'Test',
            "email": 'test@test.com',
            "date": new Date()
        };
        const test_data_2 = {
            type: 'test_data_2'
        };
        const action = {
            type: "EVENT__CREATE",
            data: test_data
        };
        expect(reducer([test_data_2], action)).toEqual([
            test_data_2,
            test_data
        ]);
    });
    it('should handle EVENTS__GET', () => {
       const test_data = [
           'event1',
           'event2',
           'event3'
       ];
        const action = {
            type: "EVENTS__GET",
            events: test_data
        };
        expect(reducer([], action)).toEqual(test_data);
    });
});
