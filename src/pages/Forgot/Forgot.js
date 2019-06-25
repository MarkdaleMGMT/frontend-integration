import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

import Panel from '../../components/Panel/Panel';
import InputField from '../../components/InputField/InputField';
import Button from '../../components/Button/Button'
import RegistrationLink from '../../components/RegistrationLink/RegistrationLink';

import './Forgot.css';

class Forgot extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                email: ''
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
    }
    handleChange(e) {
        let value = e.target.value;
        let name = e.target.name;
        this.setState(prevState => {
            return {
                user: {
                    ...prevState.user, [name]: value
                }
            }
        }, () => console.log(this.state.user)
        )
    }

    validateEmail(email) {
        let re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        return re.test(email)
    }

    handleClick(event) {
        event.preventDefault();
        //  let userData = this.state.user;
        var url = "http://138.197.175.92"
        
        if (this.validateEmail(this.state.user.email)) {

            Axios(url + "/frontend/reset_password", {
                method: "POST",
                mode: "cors",
                body: JSON.stringify({
                    "email": this.state.user.email
                }), // string or object
                headers: {
                    'Content-Type': "application/json"
                }
            }).then((response) => {
                if (response.status !== 200){
                    console.log("Email does not exist");
                    alert("Email does not exist");            }
                else{
                    console.log("success: " + JSON.stringify(response));
                    alert("Verification e-mail sent. Check your inbox to confirm your account, (might go to your junk folder)")
                }
            }).catch((error) => {
                console.log(error);
                alert("Cannot reest password")
            })
        }
        else {
            alert("Email in incorrect format!");
        }

    }

    handleClearForm(e) {
        console.log("clear form");
        e.preventDefault();
        this.setState({
            user: {
                email: ''
            }
        })
    }

    render() {
        return (
            <div className="container-fluid" id="forgot-panel">
                <div className="row">
                    <div className="col-12" id="panel">
                        <Panel>
                            <div className="row">
                                <div className="col-12">
                                    <InputField type={"email"}
                                        title={"Email"}
                                        name={"email"}
                                        placeholder={"Email"}
                                        value={this.state.user.email}
                                        onChange={this.handleChange}

                                    />
                                </div>
                            </div>
                            <div className="row" id="button">
                                <div className="col-6 mx-auto">
                                    <Button onClick={this.handleClick}>
                                        Reset Pasword
                                        </Button>
                                </div>
                            </div>
                            <div className="row" id="registration-links">
                                <div className="col-6" id="login">
                                    <Link to="/login"><RegistrationLink>Login</RegistrationLink></Link>
                                </div>
                                <div className="col-6" id="sign-up">
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