import React, { Component } from 'react';
import './Dashboard.css';
//import { Link } from 'react-router-dom';
import MainContainer from '../../components/MainContainer'
import InvestmentPanel from '../../components/InvestmentPanel';

class Dashboard extends Component {

    componentDidMount(){
        console.log(sessionStorage.getItem("data").username);
    }

    render() {
        return (
            <MainContainer sidebar="Dashboard">
                <div className="row">
                    <div className="col-12">
                    <InvestmentPanel></InvestmentPanel>
                    </div>
                </div>
            </MainContainer>
        );
    }
}

export default Dashboard;