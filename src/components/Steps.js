import React, { Component } from 'react';
import Print from './Print';
import SingleForm from './SingleForm';

class Steps extends Component {
    state = {
        step: 1,
        username: '',
        firstName: '',
        lastName: '',
        date: '',
        password: '',
        confirmPassword: ''
    };

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    };

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    };

    render() {
        const { step } = this.state;
        const { username, firstName, lastName, date, password, confirmPassword } = this.state;
        const values = { username, firstName, lastName, date, password, confirmPassword };

        switch (step) {
            case 1:
                return (
                    <SingleForm
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 2:
                return (
                    <Print
                        values={values}
                    />
                );
        }
    }
}

export default Steps;