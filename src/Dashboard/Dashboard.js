import React, { Component } from 'react';
import './Dashboard.css';
//import { Link } from 'react-router-dom';
import MainContainer from '../MainContainer'
import InvestmentPanel from '../InvestmentPanel';

class Dashboard extends Component {
    render() {
        return (
            <MainContainer sidebar="Dashboard">
                <div className="row">
                    <div className="col-6">
                    <InvestmentPanel></InvestmentPanel>
                    </div>
                </div>
            </MainContainer>
        );
    }
}

export default Dashboard;