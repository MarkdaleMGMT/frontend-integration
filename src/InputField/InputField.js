import React, { Component } from 'react';
import './InputField.css'

class InputField extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="form-group shadow">
                <input 
                    type={this.props.input.toLowerCase()} 
                    id={this.props.input.toLowerCase()}
                    className="form-control" 
                    placeholder={this.props.input} 
                    name={this.props.input.toLowerCase()}
                    {...this.props}
                />
            </div>
        );
    }
}

export default InputField