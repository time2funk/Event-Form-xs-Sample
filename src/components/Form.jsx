import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import { 
    Button,
    Grid,
    TextField
} from '@material-ui/core';

import { createEvent } from '../actions';
import { Validate } from '../utility';


class Form extends Component {
    constructor(){
        super();
        this.state = {
            // initial data
            first_name: '',
            second_name: '',
            email: '',
            startDate: moment(),
            // data error booleans
            first_name_err: false,
            second_name_err: false,
            email_err: false,
            date_err: false,
        };

        this.handleDatePickerChange = this.handleDatePickerChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormApply = this.handleFormApply.bind(this);
        this.handleFormCancel = this.handleFormCancel.bind(this);
    }

    handleInputChange = input => event => {
        this.setState({
            [input]: event.target.value,
        });
    };

    handleDatePickerChange(date) {
        this.setState({
            startDate: date
        });
    }

    handleFormCancel() {
        this.props.backHome(true);
    }

    async handleFormApply() {
        const data = {
            "first-name": this.state.first_name,
            "second-name": this.state.second_name,
            "email": this.state.email,
            "date": this.state.startDate,
        }
        const valid_data = await Validate(data);

        if(valid_data.ok) {
            this.props.backHome(true);
            this.props.createEvent(data);
            this.props.snackMsg('Event Created');
            this.props.snackMsg('Event Created');
        } else {
            if(!valid_data["first-name"]) {
                this.setState({
                    first_name_err: true
                });
            }else{
                this.setState({
                    first_name_err: false
                });
            }

            if(!valid_data["second-name"]) {
                this.setState({
                    second_name_err: true
                });
            }else{
                this.setState({
                    second_name_err: false
                });
            }

            if(!valid_data["email"]) {
                this.setState({
                    email_err: true
                });
            }else{
                this.setState({
                    email_err: false
                });
            }

            if(!valid_data["date"]) {
                this.setState({
                    date_err: true
                });
            }else{
                this.setState({
                    date_err: false
                });
            }
        }
    }

    render() {
        return (
            <div className="Form">

                <Grid container>
                    <Grid item xs={12} style={{textAlign: "center"}}>
                        <form className="event-form" noValidate autoComplete="off">
                            <TextField
                                required
                                error={this.state.first_name_err}
                                id="imput--first-name"
                                label="First Name"
                                className="event-form-input"
                                value={this.state.first_name}
                                onChange={this.handleInputChange('first_name')}
                                margin="normal"
                                helperText={
                                    this.state.first_name_err
                                    ? "Accepts only letters"
                                    : ''
                                }
                            /><br/>
                            <TextField
                                required
                                error={this.state.second_name_err}
                                id="imput--second-name"
                                label="Second Name"
                                className="event-form-input"
                                value={this.state.second_name}
                                onChange={this.handleInputChange('second_name')}
                                margin="normal"
                                helperText={
                                    this.state.second_name_err
                                    ? "Accepts only letters"
                                    : ''
                                }
                            /><br/>
                            <TextField
                                required
                                error={this.state.email_err}
                                id="email"
                                label="Email"
                                className="event-form-input"
                                value={this.state.email}
                                onChange={this.handleInputChange("email")}
                                margin="normal"
                                helperText={
                                    this.state.email_err
                                    ? 'Provide a proper email address'
                                    : ''
                                }
                            /><br/>
                            <div style={{margin: "20px auto"}}
                                className={
                                    this.state.date_err 
                                        ? "event-form-date errored"
                                        : "event-form-date"
                                }>
                                <DatePicker
                                    selected={this.state.startDate}
                                    onSelect={this.handleDatePickerChange}
                                />
                            </div>
                            <Button onClick={this.handleFormApply} fullWidth={true}>
                                Apply
                            </Button>
                            <Button onClick={this.handleFormCancel} fullWidth={true}>
                                Cancel
                            </Button>
                        </form>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

Form.propTypes = {
    createEvent: PropTypes.func.isRequired,
    backHome: PropTypes.func.isRequired
};
const mapStateToProps = (state) => {
    return {};
};
const mapDispatchToProps = (dispatch) => {
    return {
        createEvent: (data) => dispatch(createEvent(data)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);