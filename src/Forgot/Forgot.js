import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Panel from '../Panel/Panel';
import InputField from '../InputField/InputField';
import Button from '../Button/Button'
import RegistrationLink from '../RegistrationLink/RegistrationLink';

import './Forgot.css';

class Forgot extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12" id="panel">
                        <Panel>
                            <div className="row">
                                <div className="col-12">
                                    <InputField></InputField>
                                </div>
                            </div>
                            <div className="row" id="button">
                                <div className="col-6 mx-auto">
                                    <Button>Reset Password</Button>
                                </div>
                            </div>
                            <div className="row" id="registration-links">
                                <div className="col-4 offset-2" id="login">
                                    <Link to="/"><RegistrationLink>Login</RegistrationLink></Link>
                                </div>
                                <div className="col-4 offset-2" id="sign-up">
                                    <Link to="/signup"><RegistrationLink>Sign Up</RegistrationLink></Link>
                                </div>
                            </div>
                        </Panel>
                    </div>
                </div>
            </div>
        );
    }
}

export default Forgot;