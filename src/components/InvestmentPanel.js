import React, { Component } from 'react';
//import './InvestmentPanel.css'

class InvestmentPanel extends Component {
    render() {
        return (
            <div className="card shadow p-3 mb-5 bg-white rounded" id="investment-panel">
                <div className="card-body" id="investment-panel">
                    <div className="table-responsive overview-table">
                        <table className="table table-striped">
                            <tbody>

                                        <tr >
                                            <td>investment</td>
                                            <td>ivestment</td>
                                            <td>ivestment</td>
                                        </tr>
                                        <tr >
                                            <td>investment</td>
                                            <td>ivestment</td>
                                            <td>ivestment</td>
                                        </tr>
                                        <tr >
                                            <td>investment</td>
                                            <td>ivestment</td>
                                            <td>ivestment</td>
                                        </tr>
                                        <tr >
                                            <td>investment</td>
                                            <td>ivestment</td>
                                            <td>ivestment</td>
                                        </tr>
                                        <tr >
                                            <td>Total</td>
                                            <td></td>
                                            <td>ivestment</td>
                                        </tr>
                                 
                                {/* {this.state.projects.map((element, index) => {
                                    return (
                                        <tr key={element._id}>
                                            <td>Project {element.ProjectName}</td>
                                            <td>Active {moment().diff(moment([element.ProjectStartDate]), 'days')} Days</td>
                                        </tr>
                                    )
                                })} */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
export default InvestmentPanel