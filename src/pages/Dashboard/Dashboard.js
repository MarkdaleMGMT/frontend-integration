import React, { Component } from 'react';
import './Dashboard.css';
//import { Link } from 'react-router-dom';
import MainContainer from '../../components/MainContainer'
import InvestmentPanel from '../../components/InvestmentPanel';

class Dashboard extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         user: {},
    //         currency: []
    //     }
    // }

    // componentDidMount() {
    //     this._isMounted = true;
    //     var url = "http://138.197.175.92";
    //     if (this._isMounted){
    //         var sessionData = JSON.parse(sessionStorage.getItem('data'));
    //         //console.log(sessionData);
    //         this.setState({
    //           user: sessionData
    //         })
    //     }
    //     Axios(url + '/frontend/all_users', {
    //         method: "GET",
    //         mode: 'cors',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         }
    //     }).then(data => {
             
    //         }).catch(err => {
    //             console.log("error");
    //         });
    // }

    // componentWillUnmount() {
    //     this._isMounted = false;
    // }

    render() {
        return (
            <MainContainer sidebar="Dashboard">
                <div className="row">
                    <div className="col-12 offset-4">
                    <InvestmentPanel></InvestmentPanel>
                    </div>
                </div>
            </MainContainer>
        );
    }
}

export default Dashboard;