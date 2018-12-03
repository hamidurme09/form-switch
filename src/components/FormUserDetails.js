import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render () {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter User Details" />
                    <TextField 
                    hintText="Enter Your First Name"
                    floatingLabelText="First Name"
                    onChange={this.props.handleInputChange('firstName')}
                    defaultValue={this.props.values.firstName}
                    />
                    <br/>
                    <TextField 
                    hintText="Enter Your last Name"
                    floatingLabelText="Last Name"
                    onChange={this.props.handleInputChange('lastName')}
                    defaultValue={this.props.values.lastName}
                    />
                    <br/>
                    <TextField 
                    hintText="Enter Your email"
                    floatingLabelText="Email"
                    onChange={this.props.handleInputChange('email')}
                    defaultValue={this.props.values.email}
                    />
                    <br />
                    <RaisedButton 
                    label="Continue"
                    primary= {true}
                    style={styles.button}
                    onClick={this.continue}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
    
    }
    const styles = {
        button : {
            margin: 15
        }
}

export default FormUserDetails;
  