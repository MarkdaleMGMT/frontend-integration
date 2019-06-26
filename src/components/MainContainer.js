import React, { Component } from 'react';
import SideBar from './SideBar';

class MainContainer extends Component {
    // constructor(props){
    //     super(props);
    // }
    render() {
        return (
            <div className="mainContainer">
                <div className="container-fluid min-vh-100" id="main">
                    <div className="row">
                        <SideBar highlight={this.props.sidebar
                                    
                        }/>
                            {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default MainContainer;

