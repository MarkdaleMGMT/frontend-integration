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
        this.handleClick = this.handleClick.bind(this);
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
        }, () => console.log("changed" + JSON.stringify(this.state.newUser))
        )

    }

    handleClick(event) {
        event.preventDefault();
        let userData = this.state.newUser;
        
        if(this.stringValidator(userData.username) || this.stringValidator(userData.email) 
        || this.stringValidator(userData.password) || this.stringValidator(userData.refCode)){
            alert("Please fill in the form!");
        }
        else if (this.validateEmail(this.state.newUser.email)){
            var url = "http://localhost:3001"

            fetch(url + '/frontend/all_users', {
                method: "GET",
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                response.json().then(data => {
                    console.log("Successful" + JSON.stringify(data));
                    //console.log("Successful" + JSON.stringify(data.users[0]));
                    let found = false;

                    data.users.forEach((data) => {
                        if (data.username === this.state.newUser.username){
                            found = true;
                            alert("Username Taken");
                            return;

                        }
                        else if(data.email === this.state.newUser.email){
                            found = true;
                            alert("Email Taken");
                            return;
                        }                   
                    })

                    if(!found){
                        fetch(url + "/frontend/signup", {
                            method: "POST",
                            mode: "cors",
                            body: JSON.stringify({
                              "username": userData.username,
                              "email": userData.email,
                              "password": userData.password,
                              "code": userData.refCode
                            }), // string or object
                            headers: {
                              'Content-Type': "application/json"
                            }
                        }).then((response) => {
                            if (response.state !== 200){
                                return;
                            }
                            else {
                            response.json().then(data => {
                                console.log("Successful" + JSON.stringify(data));
                                //console.log("Successful" + JSON.stringify(data.users[0]));
                                alert("Verification e-mail sent. Check your inbox to confirm your account, (might go to your junk folder)")              
                            });
                        }
                        });                             
                    }
                })
                .catch((error) => {
                    console.log("Unable to sign up " + error);
                })
            })
        }
        else{
            alert("Enter a valid email");
        }
    }

    //Resetting state to default
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

    validateEmail(email){
        let re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        return re.test(email)
      }
    
    stringValidator(string){
        return string.trim() === "" || string == null || string === "username" || string === "pass" || string === "code"
    }

    render() {
        return (
            <div className="container-fluid" id="signup-panel">
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
                                        <Button onClick={this.handleClick}>
                                            Sign Up
                                        </Button>
                                    </div>
                                </div>
                            </form>
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