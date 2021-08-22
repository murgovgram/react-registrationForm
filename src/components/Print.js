import React, { Component } from 'react';

class Print extends Component {

    render() {
        const { values: { username, firstName, lastName, date } } = this.props;

        return (
            <div className="p-8 mt-20 border border-gray-200 rounded-lg shadow-2xl mx-96">
                <div className="my-6">
                    <h1>Username: {username}</h1>
                </div>
                <div className="my-6">
                    <h1>First Name: {firstName}</h1>
                </div>
                <div className="my-6">
                    <h1>Last Name: {lastName}</h1>
                </div>
                <div className="my-6">
                    <h1>Date of birth: {date}</h1>
                </div>
            </div>

        );
    }
}

export default Print;