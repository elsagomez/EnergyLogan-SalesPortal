import React, {Component} from 'react';
import { Bootstrap } from 'react-bootstrap';
import TableDetailedView from './TableDetailedView';
import GraphView from './GraphView';
import detailedview from './detailedview.css';
import helpers from '../../utils/helpers';

class DetailedView extends Component{


render() {
		return (
			 <div className="container">
			 <page size="A4">
        <h1 id="makeityellow"><b>LIGHTING PROPOSAL: <span className="text-danger"> THE PROJECT</span></b></h1>
    <div className="row">


<div className="col-xs-12">  
<h2><b>SUMMARY</b></h2>
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
 <h2><b>FINANCIAL ANALYSIS</b></h2>
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
	<h2><b>SCOPE OF WORK</b></h2>
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
<page>

<TableDetailedView />

<GraphView legendPosition="top"/>

</page>





</div>
      
			)
	}
}

export default DetailedView;