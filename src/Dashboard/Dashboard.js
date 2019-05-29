import React, { Component } from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
    render() {
        return (

            <div className="container">
                <Link to="/">Back to login</Link>
            </div>

        );
    }
}

export default Dashboard;