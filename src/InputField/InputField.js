import React, { Component } from 'react';
import './InputField.css'

class InputField extends Component {
    render() {
        return (
            <div className="form-group shadow">
                <input type={this.props.input.toLowerCase()} id={this.props.input.toLowerCase()}
                    className="form-control" placeholder={this.props.input} />
            </div>
        );
    }
}

export default InputField