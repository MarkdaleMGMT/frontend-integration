import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Panel from '../Panel/Panel';
import InputField from '../InputField/InputField';
import Button from '../Button/Button'
import RegistrationLink from '../RegistrationLink/RegistrationLink';

import './LoginPanel.css';

class LoginPanel extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            formControls:{
                name:{
                    value: ''
                }
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ 
            formControls: {
                [name]: value
            } 
        });
     }

    handleSubmit(event) {
        alert(this.state.username);
        event.preventDefault();
    }

    render() {
        return (
            <div className="container-fluid" id="login-panel">
                <div className="row">
                    <div className="col-12" id="panel">
                        <Panel>
                            <form onSubmit={this.handleSubmit}>
                                <div className="row">
                                    <div className="col-12">
                                        <InputField input="Username" 
                                                    value={this.state.formControls.name.value}
                                                    onChange={this.changeHandler}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <InputField input="Password"
                                                    value={this.state.formControls.name.value}
                                                    onChange={this.changeHandler}
                                        />
                                    </div>
                                </div>
                                <div className="row" id="button">
                                    <div className="col-4 mx-auto">
                                        <Button type="submit">Login</Button>
                                    </div>
                                </div>
                            </form>
                            <div className="row" id="registration-links">
                                <div className="col-6" id="sign-up">
                                    <Link to="/signup"><RegistrationLink>Sign Up</RegistrationLink></Link>
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

export default LoginPanel;