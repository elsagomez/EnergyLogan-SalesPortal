import React, {Component} from 'react';
import { Bootstrap } from 'react-bootstrap';
import detailedview from './detailedview.css';
import helpers from '../../utils/helpers';

class DetailedView extends Component{
	constructor(props){
		super(props);
		this.state = {
			project:"",
			address:""
		}
		
	}

componentDidMount() {
    helpers.getProjects().then(function(res) {
    	console.log("res " + res);
      // only updates if any saved articles are found
      if (res.data.length > 0) {
      	 this.setState({ project: res.data});
      	 console.log("here res: " + this);
      };
    }.bind(this));
}

render() {
		return (
			 <div className="container">
			 <page size="A4">
        <h1 id="makeityellow"><b>LIGHTING PROPOSAL: <span className="text-danger"> {this.state.project_name}</span></b></h1>
    <div className="row">


<div className="col-xs-12">  
<h3><b>SUMMARY</b></h3>
<p>The information contained in this proposal addresses the lighting and labor needs for <span className="text-danger"> 70E 12th Street</span>	</p>
<p>The report analyzes the current lighting conditions for each building and provides recommendations
given the following considerations:</p>
<ul>
	<li>Replacement of existing technology to improve performance and efficiency</li>
	<li>Occupant experience and safety</li>
	<li>Consideration of upfront costs</li>
</ul>
<p>We have included incentive and rebate opportunities where applicable</p>
</div>
<hr />
 <div className="col-xs-12">
 <h3><b>FINANCIAL ANALYSIS</b></h3>
 <hr />
<table className="table table-bordered">
<tbody>
	<tr>
	<td><b>Project Cost</b></td>
        <td className="text-danger">$9,028</td>
    </tr>
    <tr>
        <td><b>Annual Energy Savings</b></td>
        <td className="text-danger">$1,027</td>
    </tr>
     <tr>
        <td><b>Rebate Amount</b></td>
        <td className="text-danger">$2,270</td>
    </tr>
     <tr>
        <td><b>Net Cost</b></td>
        <td className="text-danger">$6,758</td>
    </tr>
     <tr>
        <td><b>kWh saved</b></td>
        <td className="text-danger">10,275</td>
    </tr>
     <tr>
        <td><b>kWh Rate</b></td>
        <td className="text-danger">$0.10</td>
    </tr>
     <tr>
        <td><b>Reduced Maintenance Costs</b></td>
        <td className="text-danger">$1,570</td>
    </tr>
    <tr>
        <td><b>Payback</b></td>
        <td className="text-danger">2.6 years</td>
    </tr>
    <tr>
        <td><b>ROI</b></td>
        <td className="text-danger">38%</td>
    </tr>
    <tr>
        <td><b>10 Year Life Cycle Savings</b></td>
        <td className="text-danger">$19,224</td>
    </tr>
</tbody>
</table>
</div>

<div className="col-xs-12">
	<h3><b>SCOPE OF WORK</b></h3>
	<hr /> 
	<p><b>Project Recommendations</b></p>
	<br />
	<ul>
		<li>Replacing existing compact Fluorescent can Fixtures with LED fixtures</li>
		<li>Replacement of existing technology to improve performance and efficiency</li>
		<li>Applying for utility Incentives to Offset project costs</li>
	</ul>
</div>
</div>
</page>

<page size="A4">
<div className="col-xs-12">
<h1><b>Survey Results</b></h1>
<br />
<table className="table table-bordered">
	<tbody>
		<tr>
			<th>Location</th>
			<th className="info">Quantity</th>
			<th className="info">Pre-Fixture</th>
			<th className="info">Watts/Fixture</th>
			<th className="success">Quantity</th>
			<th className="success">Post Fixture</th>
			<th className="success">Watts/Fixture</th>
			<th className="success">Cost/Fixture</th>
			<th className="success">Rebate</th>
			
		</tr>

		<tr>
			<td>Stairs</td>
			<td className="danger">26</td>
			<td className="danger">T9 Circle Line</td>
			<td className="danger">40</td>
			<td className="danger">26</td>
			<td className="danger">RemPhos LED Fixture</td>
			<td className="danger">12</td>
			<td className="danger">$310</td>
			<td className="danger">$70</td>
			
		</tr>
				<tr>
			<td>Lower Basement</td>
			<td className="danger">5</td>
			<td className="danger">CFL Screw in</td>
			<td className="danger">23</td>
			<td className="danger">5</td>
			<td className="danger">CREE LED 6" Can Retrofit</td>
			<td className="danger">12</td>
			<td className="danger">$51</td>
			<td className="danger">$20</td>
			
		</tr>

		<tr>
			<td>Basement</td>
			<td className="danger">1</td>
			<td className="danger">1L 2FT T12</td>
			<td className="danger">20</td>
			<td className="danger">1</td>
			<td className="danger">LAMAR DLLT LED</td>
			<td className="danger">10</td>
			<td className="danger">$275</td>
			<td className="danger">$70</td>
			
		</tr>
		<tr>
			<td>Compactor Room</td>
			<td className="danger">2</td>
			<td className="danger">2L 4FT T12</td>
			<td className="danger">80</td>
			<td className="danger">2</td>
			<td className="danger">LED (1) 48" 18W T8 lamp</td>
			<td className="danger">18</td>
			<td className="danger">$38</td>
			<td className="danger">$20</td>
			
		</tr>
		<tr>
			<td>Compactor Room</td>
			<td className="danger">4</td>
			<td className="danger">CFL Screw IN</td>
			<td className="danger">23</td>
			<td className="danger">4</td>
			<td className="danger">LED 12W A-Lamp</td>
			<td className="danger">12</td>
			<td className="danger">$15</td>
			<td className="danger">$15</td>
		</tr>

		<tr>
			<td>Laundry Room</td>
			<td className="danger">3</td>
			<td className="danger">1L 4FT T8</td>
			<td className="danger">32</td>
			<td className="danger">3</td>
			<td className="danger">LED (1) 48" 18W T8 lamp</td>
			<td className="danger">18</td>
			<td className="danger">$38</td>
			<td className="danger">$20</td>
		</tr>

		<tr>
			<td>Trash Room</td>
			<td className="danger">1</td>
			<td className="danger">2L 8FT T12</td>
			<td className="danger">150</td>
			<td className="danger">1</td>
			<td className="danger">LED (2) 48" 18W T8 lamp</td>
			<td className="danger">36</td>
			<td className="danger">$56</td>
			<td className="danger">$40</td>
		</tr>

		<tr>
			<td>Boiler Room</td>
			<td className="danger">2</td>
			<td className="danger">1L 2FT T12</td>
			<td className="danger">20</td>
			<td className="danger">2</td>
			<td className="danger">LED (1) 24" 14W T8 lamp </td>
			<td className="danger">14</td>
			<td className="danger">$38</td>
			<td className="danger">$20</td>
		</tr>

			<tr>
			<td>Boiler Room</td>
			<td className="danger">1</td>
			<td className="danger">2L 4FT T12</td>
			<td className="danger">80</td>
			<td className="danger">1</td>
			<td className="danger">LED (2) 48" 18W T8 lamp</td>
			<td className="danger">36</td>
			<td className="danger">$56</td>
			<td className="danger">$40</td>
		</tr>

		</tbody>

</table>

</div>
</page>



</div>
      
			)
	}
}

export default DetailedView;