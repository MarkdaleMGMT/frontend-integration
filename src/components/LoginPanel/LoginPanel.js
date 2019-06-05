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
            user:{
                username:'',
                password: ''
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
    }
    handleChange(e) {
        let value = e.target.value;
        let name = e.target.name;
        this.setState( prevState => {
           return { 
              user : {
                       ...prevState.user, [name]: value
                      }
           }
        }, () => console.log(this.state.user)
        )
    }

    handleSubmit(event) {
        event.preventDefault();
        let userData = this.state.user;

        fetch('https://still-tundra-89877.herokuapp.com/projects',{
            method: "GET",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
          }).then(response => {
            response.json().then(data =>{
              console.log("Successful" + JSON.stringify(data));
            })
        })
    }

    handleClearForm(e) {
        console.log("clear form");
        e.preventDefault();
        this.setState({
            user:{
                username: '',
                password: ''
            }
        })
    }

    render() {
        return (
            <div className="container-fluid" id="login-panel">
                <div className="row">
                    <div className="col-12" id="panel">
                        <Panel>
                            <form>
                                <div className="row">
                                    <div className="col-12">
                                        <InputField type={"text"}
                                                    title={"Username"}
                                                    name={"username"}
                                                    placeholder={"Username"}   
                                                    value={this.state.user.username}                                           
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
                                                    value={this.state.user.password}                                                
                                                    onChange={this.handleChange}   
                                                                                
                                        />
                                    </div>
                                </div>
                                <div className="row" id="button">
                                    <div className="col-4 mx-auto">
                                        <Button title={"Login"} 
                                                onClick={this.handleSubmit}>
                                        </Button>
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