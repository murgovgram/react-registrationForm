import React, { Component } from 'react';

class Print extends Component {

    render() {
        const { values: { username, firstName, lastName, date } } = this.props;

        return (
            <div className="p-8 mt-20 text-left bg-white border border-gray-200 rounded-lg shadow-2xl mx-96">
                <div className="my-6">
                    <h1 className="font-bold">First Name:<span className="pl-8 italic">{firstName}</span></h1>
                </div>
                <div className="my-6">
                    <h1 className="font-bold">Last Name:<span className="pl-8 italic">{lastName}</span></h1>
                </div>
                <div className="my-6">
                    <h1 className="font-bold">Username:<span className="pl-8 italic">{username}</span></h1>
                </div>
                <div className="my-6">
                    <h1 className="font-bold">Date of birth:<span className="pl-8 italic">{date}</span></h1>
                </div>
            </div>

        );
    }
}

export default Print;