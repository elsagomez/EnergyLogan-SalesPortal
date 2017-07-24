import React, { Component } from 'react';
import ReactDom from 'react-dom';

import './App.css';
import DetailedView from './components/DetailedView/DetailedView';

import TableDetailedView from './components/DetailedView/TableDetailedView';
import GraphView from './components/DetailedView/GraphView';
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';

class App extends Component {

    constructor(props) {
        super();
        this.state = {
            chartData: {}
        };
        // this.getChartData = this.getChartData.bind(this);
    }


    componentWillMount() {
        this.getChartData();
    }

    getChartData() {

        //TODO: AJAX call here!!!!!

        this.setState({
            chartData: {

                title: {
                    text: "Annual Energy Savings",
                    fontSize: 25
                },
                yAxisID: 0,

                labels: ["Existing", "Proposed"],

                datasets: [{
                    label: "Savings",
                    data: [15706, 5431],
                     backgroundColor: [
                    'rgba(255,22,64,.9)',
                    'rgba(255,23,98,.7)'
                ]
                }],
               
            }

        })
    }

    render() {
        return ( <
            div className = "App" >
            <
            DetailedView / >
            <
            GraphView chartData = { this.state.chartData }
            /> <
            TableDetailedView / >


            <
            /div>
        );
    }
}

export default App;