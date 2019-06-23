import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './SideBar.css'

class SideBar extends Component {
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
                        <Link to="#" className="list-group-item list-group-item-action bg-gray"><i className="fas fa-chevron-right"></i> CLAM</Link>
                        <Link to="#" className="list-group-item list-group-item-action bg-gray"><i className="fas fa-chevron-right"></i> BTC</Link>
                        <Link to="#" className="list-group-item list-group-item-action bg-gray"><i className="fas fa-chevron-right"></i> CAD</Link>
                        <Link to="#" className="list-group-item list-group-item-action bg-gray"><i className="fas fa-chevron-right"></i> USD</Link>
                        <Link to="#" className="list-group-item list-group-item-action bg-gray"><i className="fas fa-chevron-right"></i> GOLD</Link>
                    </div>
                    <br></br>
                    <div className="list-group list-group-flush">
                        <Link to="#" className="list-group-item list-group-item-action bg-gray"><i className="far fa-envelope"></i> Contact</Link>
                        <Link to="#" className="list-group-item list-group-item-action bg-gray"><i className="fas fa-sign-out-alt"></i> Logout</Link>
                        <span className="list-group-item list-group-item-action align-center bg-gray">Refferal Code: 12345</span>
                    </div>
                </div>
            </div>

        );
    }
}

export default SideBar;