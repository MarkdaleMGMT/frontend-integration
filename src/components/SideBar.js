import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './SideBar.css'
import Axios from 'axios';

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            currency: []
        }
    }

    componentDidMount() {
        this._isMounted = true;
        var url = "http://localhost:3001";
        if (this._isMounted){
            var sessionData = JSON.parse(sessionStorage.getItem('data'));
            //console.log(sessionData);
            this.setState({
              user: sessionData
            })
        }
        Axios(url + '/frontend/account_investments/' + sessionData.username, {
            method: "GET",
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(data => {
            console.log("data receieved: " + data)
            if (this._isMounted) {
                this.setState({
                    currency: data
                });
                console.log("state -> currency: " + this.state.currency);
            }
            }).catch(err => {
                console.log("error");
            });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <div className="d-flex" id="wrapper">
                <div className="border-right" id="sidebar-wrapper">
                    <div className="list-group list-group-flush">
                        <Link to="#" className="list-group-item list-group-item-action bg-gray"><i className="fa fa-home"></i> Dashboard</Link>
                        <Link to="#" className="list-group-item list-group-item-action bg-gray"><i className="fa fa-users"></i> Affiliates</Link>
                        <Link to="#" className="list-group-item list-group-item-action bg-gray"><i className="fa fa-chart-pie"></i> Stats</Link>
                        <Link to="#" className="list-group-item list-group-item-action bg-gray"><i className="fa fa-chart-line"></i> Exchange</Link>
                    </div>
                    <br></br>
                    <div className="list-group list-group-flush">
                        <Link to="#" className="list-group-item list-group-item-action bg-gray"><i className="fas fa-chevron-right"></i> CLAM {this.state.currency[0]}</Link>
                        <Link to="#" className="list-group-item list-group-item-action bg-gray"><i className="fas fa-chevron-right"></i> BTC</Link>
                        <Link to="#" className="list-group-item list-group-item-action bg-gray"><i className="fas fa-chevron-right"></i> CAD</Link>
                        <Link to="#" className="list-group-item list-group-item-action bg-gray"><i className="fas fa-chevron-right"></i> USD</Link>
                        <Link to="#" className="list-group-item list-group-item-action bg-gray"><i className="fas fa-chevron-right"></i> GOLD</Link>
                    </div>
                    <br></br>
                    <div className="list-group list-group-flush">
                        <Link to="#" className="list-group-item list-group-item-action bg-gray"><i className="far fa-envelope"></i> Contact</Link>
                        <Link to="#" className="list-group-item list-group-item-action bg-gray"><i className="fas fa-sign-out-alt"></i> Logout</Link>
                        <span className="list-group-item list-group-item-action align-center bg-gray">Refferal Code: {this.state.user.ref_code}</span>
                    </div>
                </div>
            </div>

        );
    }
}

export default SideBar;