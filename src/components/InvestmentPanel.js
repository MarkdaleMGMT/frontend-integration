import React, { Component } from 'react';
//import './InvestmentPanel.css'

class InvestmentPanel extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);
        //  this.dataSource = this.props.dataSource;
        this.state = {
            investments: []
        }
    }/*
    componentDidMount() {
        this._isMounted = true;

        var url = "http://138.197.175.92"
        fetch(url + "/all_investments")
            .then(res => res.json())
            .then(data => {
                if (this._isMounted) {
                    this.setState({
                        investments: data
                    });
                }
            }).catch(err => {
                console.log("error");
            });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

*/
    render() {
        return (
            <div className="card-responsive shadow p-3 mb-5 bg-white rounded" id="investment-panel">
                <div className="card-body" id="investment-panel">
                    <div className="table-responsive overview-table">
                        <table className="table table-striped">
                            <tbody>
                                <tr>
                                    <td>Investment </td>
                                    <td>amount</td>
                                    <td>balance</td>
                                </tr>
                                <tr>
                                    <td>Investment </td>
                                    <td>amount</td>
                                    <td>balance</td>
                                </tr>
                                <tr>
                                    <td>Investment </td>
                                    <td>amount</td>
                                    <td>balance</td>
                                </tr>
                                <tr>
                                    <td>Investment </td>
                                    <td>amount</td>
                                    <td>balance</td>
                                </tr>
                                <tr>
                                    <td>Investment </td>
                                    <td>amount</td>
                                    <td>balance</td>
                                </tr>
                                {/* {this.state.investments.map((element, index) => {
                                    return (
                                        <tr key={element.investments}>
                                            <td>Investment {element.investments}</td>
                                            <td>amount</td>
                                            <td>balance</td>
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