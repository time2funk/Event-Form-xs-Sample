import React, { Component } from 'react';
import { 
    Button,
    Paper
} from '@material-ui/core';

import Form from './Form';
import Snack from './Snack';
import EventList from './EventList';

class Events extends Component {
  constructor(){
    super();
    this.state = {
      snack: false,
      view: '',
      msgOpen: false,
      msgText: '',
    };
  
    this.handleFormOpen = this.handleFormOpen.bind(this);
    this.handleMsgClose = this.handleMsgClose.bind(this);
    this.handleBackHome = this.handleBackHome.bind(this);
  }

  handleFormOpen() {
    this.setState({
      view: "createEventView"
    });
  }

  handleMsgCall = text => {
    this.setState({ 
      msgOpen: true,
      msgText: text
    });
  };

  handleMsgClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ msgOpen: false });
  };

  handleBackHome(bool) {
    if(bool) 
      this.setState({
        view: ''
      });
  }

  render() {
    return (
      <div className="Events">
        <Paper elevation={4}>
          {(() => {
            switch(this.state.view){
              case "createEventView":
                return (
                  <Paper elevation={4}>
                    <Form 
                      backHome={this.handleBackHome}
                      snackMsg={this.handleMsgCall}
                    />
                  </Paper>
                );

              default:
                return (
                  <div className="Events">
                    <Button onClick={this.handleFormOpen} fullWidth={true} className='create-event--btn'>
                      Create Event
                    </Button>
                  </div>
                );
            }
          })()}
        </Paper>

        <EventList/>

        <Snack 
          open={this.state.msgOpen} 
          handleClose={this.handleMsgClose}
          text={this.state.msgText}
        />
      </div>
    );
  }
}


export default Events;