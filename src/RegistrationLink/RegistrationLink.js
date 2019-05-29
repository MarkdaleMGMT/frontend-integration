import React, { Component } from 'react'
//import { Link } from 'react-router-dom';
import './RegistrationLink.css'

class RegistrationLink extends Component {
    render() {
        return (
            <div id="links">
                {this.props.children}
            </div>
        );
    }
}

export default RegistrationLink