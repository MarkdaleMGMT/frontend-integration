import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './SideBar.css'

class SideBar extends Component {
    render() {
        return (
            <div className="col-sm-3 col-md-2 sidebar" id="sidebar">
                <ul className="nav nav-sidebar">
                    <li className={(this.props.highlight === "Dashboard" ? 'active' : '')}><Link to="/">Dashboard <span className="sr-only">(current)</span></Link></li>
                </ul>
                <ul className="nav nav-sidebar">
                    <li className={(this.props.highlight === "Affiliates" ? 'active' : '')}><Link to="/">Affiliates</Link></li>
                    <li className={(this.props.highlight === "Stats" ? 'active' : '')}><Link to="/">Stats</Link></li>
                    <li className={(this.props.highlight === "Exchange" ? 'active' : '')}><Link to="/">Exchange</Link></li>
                </ul>
                <ul className="nav nav-sidebar">
                    <li className={(this.props.highlight === "CLAM" ? 'active' : '')}><Link to="/">CLAM</Link></li>
                    <li className={(this.props.highlight === "BTC" ? 'active' : '')}><Link to="/">BTC</Link></li>
                    <li className={(this.props.highlight === "CAD" ? 'active' : '')}><Link to="/">CAD</Link></li>
                    <li className={(this.props.highlight === "USD" ? 'active' : '')}><Link to="/">USD</Link></li>
                    <li className={(this.props.highlight === "GOLD" ? 'active' : '')}><Link to="/">GOLD</Link></li>
                </ul>
                <ul className="nav nav-sidebar">
                    <li className={(this.props.highlight === "Contact" ? 'active' : '')}><Link to="/">Contact</Link></li>
                    <li className={(this.props.highlight === "Logout" ? 'active' : '')}><Link to="/">Logout</Link></li>
                    <li><Link to="/">Refferal Code:</Link></li>
                </ul>
            </div>

        );
    }
}

export default SideBar;