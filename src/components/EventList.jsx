import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import {
    Grid,
    Typography,
    List,
    ListItem,
    ListItemText
} from '@material-ui/core';

import { getAllEvents } from '../actions';

class EventList extends Component {
  componentWillMount() {
    this.props.getAllEvents();
  }

  render() {
    return (
        <div className="EventList">
            <Grid container>
                <Grid item xs={12}>
                <Typography variant="title">
                    Events
                </Typography>
                <div className="event-list">
                    <List>
                    {this.props.events.sort(() => true).map((item, index) => (
                        <ListItem key={index}>
                        <ListItemText
                            primary={`
                                ${item['first-name']} 
                                ${item['second-name']} 
                            `}
                            secondary={`${new Date(item['date']).toString().slice(0,15)}`}
                        />
                        </ListItem>
                    ))}
                    </List>
                </div>
                </Grid>
            </Grid>
        </div>

    );
  }
}


EventList.propTypes = {
    events: PropTypes.array.isRequired,
    getAllEvents: PropTypes.func.isRequired
};

// export default EventList;

const mapStateToProps = (state) => {
    return {
      events: state.events
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        getAllEvents: () => dispatch(getAllEvents())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(EventList);