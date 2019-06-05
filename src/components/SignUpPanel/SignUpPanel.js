import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Panel from '../Panel/Panel';
import InputField from '../InputField/InputField';
import Button from '../Button/Button'
import RegistrationLink from '../RegistrationLink/RegistrationLink';

import './SignUpPanel.css';

class SignUpPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newUser: {
                username: '',
                password: '',
                email: '',
                refCode: ''
            }
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
    }

    handleChange(e) {

        let value = e.target.value;
        let name = e.target.name;
        this.setState(prevState => {
            return {
                newUser: {
                    ...prevState.newUser, [name]: value
                }
            }
        }, () => console.log("changed" + this.state.newUser)
        )

    }

    handleSubmit(event) {
        event.preventDefault();
       // let userData = this.state.user;

        fetch('https://still-tundra-89877.herokuapp.com/projects', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(response => {
            response.json().then(data => {
                console.log("Successful" + JSON.stringify(data));
            })
        })
        this.handleClearForm(event);
    }

    handleClearForm(e) {
        console.log("clear form");
        e.preventDefault();
        this.setState({
            newUser: {
                username: '',
                password: '',
                email: '',
                refCode: ''
            }
        })
    }

    render() {
        return (
            <div className="container-fluid" id="signup-panel">
                <div className="row">
                    <div className="col-12" id="panel">
                        <Panel>
                            <div className="row">
                                <div className="col-12">
                                    <InputField type={"text"}
                                        title={"Username"}
                                        name={"username"}
                                        placeholder={"Username"}
                                        value={this.state.newUser.username}
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <InputField type={"password"}
                                        title={"Password"}
                                        name={"password"}
                                        placeholder={"Password"}
                                        value={this.state.newUser.password}
                                        onChange={this.handleChange}

                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <InputField type={"email"}
                                        title={"Email"}
                                        name={"email"}
                                        placeholder={"Email"}
                                        value={this.state.newUser.email}
                                        onChange={this.handleChange}

                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <InputField type={"text"}
                                        title={"Refferal Code"}
                                        name={"refCode"}
                                        placeholder={"Refferal Code"}
                                        value={this.state.newUser.refCode}
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </div>
                            <div className="row" id="button">
                                <div className="col-4 mx-auto">
                                    <Button title={"Sign Up"}
                                    ></Button>
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