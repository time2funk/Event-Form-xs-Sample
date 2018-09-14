import axios from 'axios';
const apiUrl = 'http://localhost:7070';


export function createEvent(data) {
    return (dispatch, getState) => {
        return axios.post(`${apiUrl}/api/event/new`, {data})
            .then(response => {
                console.log('response', response);
                dispatch(createEventSuccess(response.data))
            })
            .catch(error => {
                console.log('error', error);
                throw(error);
            });
    }
}

export const createEventSuccess =  (data) => {
    return {
        type: "EVENT__CREATE",
        data: {
            "first-name": data['first-name'],
            "second-name": data['second-name'],
            "email": data['email'],
            "date": data['date']
        }
    }
};


export const getAllEvents = () => {
    return (dispatch) => {
        return axios.get(`${apiUrl}/api/event/list`)
            .then(response => {
                console.log("response", response.data.list);
                dispatch(getEvents(response.data.list));
                dispatch(snackMsg("Event was created successfuly"));
            })
            .catch(error => {
                throw(error);
            });
    };
};

export const getEvents = (events) => {
    return {
        type: "EVENTS__GET",
        events
    }
};

export function snackMsg(msg) {
    return (dispatch, getState) => {
        dispatch({
            type: 'MESSAGE',
            text: msg
        });
    }
}

export default {
    createEvent,
    getAllEvents
};