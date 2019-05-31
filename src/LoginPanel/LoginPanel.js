import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Panel from '../Panel/Panel';
import InputField from '../InputField/InputField';
import Button from '../Button/Button'
import RegistrationLink from '../RegistrationLink/RegistrationLink';

import './LoginPanel.css';

class LoginPanel extends Component {
    render() {
        return (
            <div className="container-fluid" id="login-panel">
                 <div className="row">
                     <div className="col-12" id="panel">
                <Panel>
                    <div className="row">
                        <div className="col-12">
                            <InputField></InputField>
                        </div>
                    </div>
                    <div className="row" id="button">
                        <div className="col-4 mx-auto">
                            <Button>Login</Button>
                        </div>
                    </div>
                    <div className="row" id="registration-links">
                        <div className="col-4 offset-2" id="sign-up">
                            <Link to="/signup"><RegistrationLink>Sign Up</RegistrationLink></Link>
                        </div>
                        <div className="col-4 offset-2" id="forgot">
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

export default LoginPanel;