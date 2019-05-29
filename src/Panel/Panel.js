import React, { Component } from 'react';
import './Panel.css'

class Panel extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    {this.props.children}
                </div>
            </div>

        );
    }
}

export default Panel