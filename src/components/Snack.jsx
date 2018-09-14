import React, { Component } from 'react';
import PropTypes from "prop-types";
import {
    Snackbar,
    IconButton
} from '@material-ui/core';
import CloseIcon  from '@material-ui/icons/Close';
// import { Provider } from 'react-redux';

// import store from './store';
// import Events from './components/Events';


class Snack extends Component {
  render() {
    return (
        <div className="Snack">
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={this.props.open}
                onClose={this.props.handleClose}
                autoHideDuration={2000}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
                message={
                    <span id="message-id">
                    {this.props.text}
                    </span>}
                action={[
                    <IconButton
                    key="close"
                    aria-label="Close"
                    color="inherit"
                    onClick={this.props.handleClose}
                    >
                    <CloseIcon />
                    </IconButton>,
                ]}
            />
        </div>
    );
  }
}


Snack.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
};

export default Snack;
