import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css'

class SideBar extends Component {
    render() {
        return (
            <div className="col-sm-3 col-md-2  sidebar">
                <ul className="nav nav-sidebar">
                    <li className={(this.props.highlight === "Overview" ? 'active' : '')}><Link to="/">Dashboard <span className="sr-only">(current)</span></Link></li>
                </ul>
                <ul className="nav nav-sidebar">
                    <li className={(this.props.highlight === "Projects" ? 'active' : '')}><Link to="/">Affiliates</Link></li>
                    <li className={(this.props.highlight === "Teams" ? 'active' : '')}><Link to="/">Stats</Link></li>
                    <li className={(this.props.highlight === "Employees" ? 'active' : '')}><Link to="/">Exchange</Link></li>
                </ul>
                <ul className="nav nav-sidebar">
                    <li className={(this.props.highlight === "Projects" ? 'active' : '')}><Link to="/">CLAM</Link></li>
                    <li className={(this.props.highlight === "Teams" ? 'active' : '')}><Link to="/">BTC</Link></li>
                    <li className={(this.props.highlight === "Employees" ? 'active' : '')}><Link to="/">CAD</Link></li>
                    <li className={(this.props.highlight === "Employees" ? 'active' : '')}><Link to="/">USD</Link></li>
                    <li className={(this.props.highlight === "Employees" ? 'active' : '')}><Link to="/">GOLD</Link></li>
                </ul>
                <ul className="nav nav-sidebar">
                    <li className={(this.props.highlight === "Projects" ? 'active' : '')}><Link to="/">Contact</Link></li>
                    <li className={(this.props.highlight === "Teams" ? 'active' : '')}><Link to="/">Logout</Link></li>
                    <li className={(this.props.highlight === "Employees" ? 'active' : '')}><Link to="/">Refferal Code:</Link></li>
                </ul>
            </div>
        );
    }
}

export default SideBar;