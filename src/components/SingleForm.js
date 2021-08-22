import React, { Component } from 'react';

export class SingleForm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const { values, handleChange } = this.props;
        return (
            <body className="h-full py-12">
                <div className="p-10 bg-white border border-gray-100 rounded-lg shadow-2xl mx-72">
                    <h1 className="pb-10 text-xl text-center">Enter Your Detals</h1>
                    <div
                        className="my-2 border-2 border-gray-500 rounded-lg ">
                        <input
                            className="w-full py-2 pl-8 text-base rounded-lg outline-none"
                            id={values.firstName}
                            onChange={handleChange('firstName')}
                            placeholder="First Name"
                        />
                    </div>
                    <div
                        className="my-2 border-2 border-gray-500 rounded-lg ">
                        <input
                            className="w-full py-2 pl-8 text-base rounded-lg outline-none"
                            id={values.lastName}
                            onChange={handleChange('lastName')}
                            placeholder="Last Name"
                        />
                    </div>
                    <div
                        className="my-2 border-2 border-gray-500 rounded-lg ">
                        <input
                            className="w-full py-2 pl-8 text-base rounded-lg outline-none"
                            id={values.username}
                            onChange={handleChange('username')}
                            placeholder="Username"
                        />
                    </div>
                    <div
                        className="my-2 border-2 border-gray-500 rounded-lg ">
                        <input
                            className="w-full py-2 pl-8 text-base rounded-lg outline-none"
                            id={values.date}
                            onChange={handleChange('date')}
                            placeholder="Date Of Birth"
                            type="date"
                        />
                    </div>
                    <div
                        className="my-2 border-2 border-gray-500 rounded-lg ">
                        <input
                            className="w-full py-2 pl-8 text-base rounded-lg outline-none"
                            id={values.password}
                            onChange={handleChange('password')}
                            placeholder="Password"
                            type="password"
                        />
                    </div>
                    <div
                        className="my-2 border-2 border-gray-500 rounded-lg ">
                        <input
                            className="w-full py-2 pl-8 text-base rounded-lg outline-none"
                            id={values.confirmPassword}
                            onChange={handleChange('confirmPassword')}
                            placeholder="Confirm Password"
                            type="password"
                        />
                    </div>
                    <button
                        onClick={this.continue}
                        className="px-3 py-2 mx-auto my-12 font-bold text-white bg-green-400 rounded-lg">
                        Confirm
                    </button>
                </div>
            </body>
        );
    }
}

export default SingleForm;