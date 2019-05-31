import React, { Component } from 'react';
import './Dashboard.css';
//import { Link } from 'react-router-dom';
import MainContainer from '../MainContainer'

class Dashboard extends Component {
    render() {
        return (
            <MainContainer sidebar="Dashboard"></MainContainer>
        );
    }
}

export default Dashboard;