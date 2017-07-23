import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';

class GraphView extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData:{
                labels: ["existing", "proposed"],
                datasets: [
                {
                   
                    data: [1000, 670],
                    backgroundColor: [
                    "rgba(255,99, 132, .9)",
                    "rgba(255,206,86,.9)"]
                }]
            }
        }
    }

    static defaultProps= {
        displayTitle: false,
        displayLegend: true,
        legendPosition: "right"
    }

    render(){
        return(
            <div className="chart">
                <Bar
                    data={this.state.chartData}
                    width={50}
                    height={20}
                    options={{
                       title:{
                        display:this.props.displayTitle,
                        text:"Annual Energy Savings",
                        fontSize: 25
                       },

                       legend:{
                        display: this.props.displayLegend,
                        position: this.props.legendPosition
                       }
                    }}

                    />

            CHART cOMPONENT
            </div>

            )
    }


}
export default GraphView