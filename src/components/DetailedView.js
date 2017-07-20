import React, { PropTypes } from 'react';
import {
  MenuItem,
  DropdownButton,
  Image, 
  Panel, PageHeader, ListGroup, ListGroupItem, Button,
} from 'react-bootstrap';
// import StatWidget from './Widget/';
// import Donut from './Donut';
// import {
//   Tooltip,
//   XAxis, YAxis, Area,
//   CartesianGrid, AreaChart, Bar, BarChart,
//   ResponsiveContainer } from '../../vendor/recharts';

class DetailedView extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {};
    }

    componentDidUpdate(prevProps, prevState) {

    }

    render() {
        return (
				 <div>
			      <div className="row">
			        <div className="col-lg-12">
			        
			          <PageHeader>Detailed View</PageHeader>
			        </div>
			      </div>

			      <div className="row">
			        <div className="col-lg-12">
			        	<Panel
			            header={<span>
			              <i className="fa fa-bar-chart-o fa-fw" /> {this.props.data.project_name}
		              <div className="pull-right">
		                <DropdownButton title="Dropdown" bsSize="xs" pullRight id="dropdownButton2">
		                  <MenuItem eventKey="1">Print PDF</MenuItem>
		                  <MenuItem eventKey="2">Email PDF</MenuItem>
		                </DropdownButton>
		              </div>
			            </span>}
			          >
			            <div>
										<div>
										<p>Customer: {this.props.data.customer}</p>
										<p>Address: {this.props.data.address}</p>
										<p>Contact Name: {this.props.data.contact_name}</p>
										<p>Contact Number: {this.props.data.contact_number}</p>
										<p>Account Number: {this.props.data.account_number}</p>
										</div>
			            </div>
			          </Panel>
			        </div>
			     	</div>

			      <div className="row">
			        <div className="col-lg-12">
			        	<Panel
			            header={<span>
			              <i className="fa fa-bar-chart-o fa-fw" /> INCENTIVES TABLE GOES HERE
			            </span>}
			          >
			            <div>
										 <Image src="http://i.imgur.com/NBIAwCo.png" responsive />
			            </div>
			          </Panel>
			        </div>
			     	</div>


			    </div>
        );
    }
}

// Export the component back for use in other files
export default DetailedView;
