import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Panel from '../Panel/Panel';
import InputField from '../InputField/InputField';
import Button from '../Button/Button'
import RegistrationLink from '../RegistrationLink/RegistrationLink';

import './SignUpPanel.css';

class SignUpPanel extends Component {
    render() {
        return (
            <div className="container-fluid" id="signup-panel">
                 <div className="row">
                     <div className="col-12" id="panel">
                <Panel>
                    <div className="row">
                        <div className="col-12">
                            <InputField input="Username"></InputField>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <InputField input="Password"></InputField>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <InputField input="Email"></InputField>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <InputField input="Referral Code"></InputField>
                        </div>
                    </div>
                    <div className="row" id="button">
                        <div className="col-4 mx-auto">
                            <Button>Sign Up</Button>
                        </div>
                    </div>
                    <div className="row" id="registration-links">
                        <div className="col-6" id="login">
                            <Link to="/"><RegistrationLink>Login</RegistrationLink></Link>
                        </div>
                        <div className="col-6" id="forgot">
                        <Link to="/forgot"><RegistrationLink>Forgot</RegistrationLink></Link>
                        </div>
                    </div>
                </Panel>
                </div>
                </div>
            </div>
        );
    }
}

export default SignUpPanel;