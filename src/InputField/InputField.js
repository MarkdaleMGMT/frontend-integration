import React, { Component } from 'react';
import './InputField.css'

class InputField extends Component {
    render() {
        return (
            <div className="container">
                <div className="form-group shadow">
                    <input type="username" id="username" className="form-control" placeholder="Username" />
                </div>
                <div className="form-group shadow">
                    <input type="password" id="password" className="form-control" placeholder="Password" />
                </div>
            </div>
        );
    }
}

export default InputField