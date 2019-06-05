import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './SideBar.css'

class SideBar extends Component {
    render() {
        return (
            <div className="col-sm-3 col-xl-2 sidebar" id="sidebar">
                <ul className="nav nav-sidebar">
                    <li className={(this.props.highlight === "Dashboard" ? 'active' : '')}><Link to="/">Dashboard <span className="sr-only">(current)</span></Link></li>
                </ul>
                <ul className="nav nav-sidebar">
                    <li className={(this.props.highlight === "Affiliates" ? 'active' : '')}><Link to="/">Affiliates</Link></li>
                    <li className={(this.props.highlight === "Stats" ? 'active' : '')}><Link to="/">Stats</Link></li>
                    <li className={(this.props.highlight === "Exchange" ? 'active' : '')}><Link to="/">Exchange</Link></li>
                </ul>
                <ul className="nav nav-sidebar">
                    <li className={(this.props.highlight === "Dashboard" ? 'active' : '')}><Link to="/">CLAM</Link></li>
                    <li className={(this.props.highlight === "Dashboard" ? 'active' : '')}><Link to="/">BTC</Link></li>
                    <li className={(this.props.highlight === "Dashboard" ? 'active' : '')}><Link to="/">CAD</Link></li>
                    <li className={(this.props.highlight === "Dashboard" ? 'active' : '')}><Link to="/">USD</Link></li>
                    <li className={(this.props.highlight === "Dashboard" ? 'active' : '')}><Link to="/">GOLD</Link></li>
                </ul>
                <ul className="nav nav-sidebar">
                    <li className={(this.props.highlight === "Dashboard" ? 'active' : '')}><Link to="/">Contact</Link></li>
                    <li className={(this.props.highlight === "Dashboard" ? 'active' : '')}><Link to="/">Logout</Link></li>
                    <li className={(this.props.highlight === "Dashboard" ? 'active' : '')}><Link to="/">Refferal Code:</Link></li>
                </ul>
            </div>
            /*
        <aside className="col-12 col-md-2 p-0 "id="side-bar">
            <nav className="navbar navbar-expand navbar-dark flex-md-column flex-row align-items-start py-2" id="side-bar">
                <div className="collapse navbar-collapse">
                    <ul className="flex-md-column flex-row navbar-nav w-100 justify-content-between">
                        <li className="nav-item">
                            <a className="nav-link pl-0 text-nowrap" href="/"><i className="fa fa-bullseye fa-fw"></i> <span className="font-weight-bold">Dashboard</span></a>
                        </li>
                    </ul>
                    <ul className="flex-md-column flex-row navbar-nav w-100 justify-content-between">
                        <li className="nav-item">
                            <a className="nav-link pl-0 text-nowrap" href="/"><i className="fa fa-bullseye fa-fw"></i> <span className="font-weight-bold">Affiliates</span></a>
                        </li>
                        <li className="nav-item">
                            <Link To="/" className="nav-link pl-0"><i className="fa fa-heart-o fa-fw"></i> <span className="d-none d-md-inline">Stats</span></Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link pl-0" href="/"><i className="fa fa-book fa-fw"></i> <span className="d-none d-md-inline">Exchange</span></a>
                        </li>
                    </ul>
                    <ul className="flex-md-column flex-row navbar-nav w-100 justify-content-between">
                        <li className="nav-item">
                            <a className="nav-link pl-0 text-nowrap" href="/"><i className="fa fa-bullseye fa-fw"></i> <span className="font-weight-bold">CLAM</span></a>
                        </li>
                        <li className="nav-item">
                            <Link To="/" className="nav-link pl-0"><i className="fa fa-heart-o fa-fw"></i> <span className="d-none d-md-inline">BTC</span></Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link pl-0" href="/"><i className="fa fa-book fa-fw"></i> <span className="d-none d-md-inline">CAD</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link pl-0" href="/"><i className="fa fa-heart codeply fa-fw"></i> <span className="d-none d-md-inline">USD</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link pl-0" href="/"><i className="fa fa-star codeply fa-fw"></i> <span className="d-none d-md-inline">GOLD</span></a>
                        </li>
                    </ul>
                    <ul className="flex-md-column flex-row navbar-nav w-100 justify-content-between">
                        <li className="nav-item">
                            <a className="nav-link pl-0 text-nowrap" href="/"><i className="fa fa-bullseye fa-fw"></i> <span className="font-weight-bold">Contact</span></a>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link pl-0"><i className="fa fa-heart-o fa-fw"></i><span className="d-none d-md-inline">Logout</span></Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link pl-0" href="/"><i className="fa fa-book fa-fw"></i> <span className="d-none d-md-inline">Refferal Code:(insert data)</span></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </aside>
        */
        );
    }
}

export default SideBar;