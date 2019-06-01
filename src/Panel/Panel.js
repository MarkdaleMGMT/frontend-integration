import React, { Component } from 'react';
import './Panel.css'

class Panel extends Component {
    render() {
        return (
            <div className="card" id="panel">
                <div className="card-body" id="panel">
                    {this.props.children}
                </div>
            </div>

        );
    }
}

export default Panel