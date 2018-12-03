import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

class Confirm extends Component {
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
                    <AppBar title="Enter Confirm Details" />
                    <List>
                        <ListItem 
                        primaryText="First Name"
                        secondaryText={this.props.values.firstName}
                        />
                    </List>
                    <List>
                        <ListItem 
                        primaryText="Last Name"
                        secondaryText={this.props.values.lastName}
                        />
                    </List>
                    <List>
                        <ListItem 
                        primaryText="Email"
                        secondaryText={this.props.values.email}
                        />
                    </List>
                    <List>
                        <ListItem 
                        primaryText="occupation"
                        secondaryText={this.props.values.occupation}
                        />
                    </List>
                    <List>
                        <ListItem 
                        primaryText="City"
                        secondaryText={this.props.values.city}
                        />
                    </List>
                    <List>
                        <ListItem 
                        primaryText="Bio"
                        secondaryText={this.props.values.bio}
                        />
                    </List>
                    <br />
                    <RaisedButton 
                    label="Back"
                    primary= {false}
                    style={styles.button}
                    onClick={this.back}
                    />
                    <RaisedButton 
                    label="Confirm & Continue"
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

export default Confirm;