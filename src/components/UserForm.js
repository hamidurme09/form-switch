import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';


export default class UserFrom extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email:'',
        occupation:'',
        city: '',
        bio: ''
    }
    //next step
    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1
        })
    }
    //next step
    prevStep = () => {
        const {step} = this.state;
        this.setState ({
            step: step - 1
        })
    }

    // handle input change
    handleInputChange = (input) => e => {
        this.setState({
            [input]: e.target.value
        })
    }

    render() {
        
        const {step} = this.state;
        const {firstName, lastName, email, city, occupation, bio} = this.state;
        const values = {firstName, lastName, email, city, occupation, bio}

        switch(step) {
            case 1: 
            return (
                <FormUserDetails 
                nextStep={this.nextStep}
                handleInputChange={this.handleInputChange}
                values={values}
                />
            )
            case 2: 
            return (
                <FormPersonalDetails 
                nextStep={this.nextStep}
                handleInputChange={this.handleInputChange}
                values={values}
                prevStep={this.prevStep}
                />
            )
            case 3: 
            return (
                <Confirm
                nextStep={this.nextStep}
                handleInputChange={this.handleInputChange}
                values={values}
                prevStep={this.prevStep}
                />
            )
            case 4: 
            return (
                <Success
                values={values}
                />
            )
        }
    }
  }
  

  