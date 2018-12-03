import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render () {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter Personal Details" />
                    <TextField 
                    hintText="Enter Your Ocupation"
                    floatingLabelText="Occupation"
                    onChange={this.props.handleInputChange('occupation')}
                    defaultValue={this.props.values.occupation}
                    />
                    <br/>
                    <TextField 
                    hintText="Enter Your city"
                    floatingLabelText="City"
                    onChange={this.props.handleInputChange('city')}
                    defaultValue={this.props.values.city}
                    />
                    <br/>
                    <TextField 
                    hintText="Enter Your bio"
                    floatingLabelText="Bio"
                    onChange={this.props.handleInputChange('bio')}
                    defaultValue={this.props.values.bio}
                    />
                    <br />
                    <RaisedButton 
                    label="Back"
                    primary= {false}
                    style={styles.button}
                    onClick={this.back}
                    />
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

export default FormPersonalDetails;