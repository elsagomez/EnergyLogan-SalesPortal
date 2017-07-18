import React, {Component} from 'react';




class DetailedView extends Component{
	render() {
		return (
			 <div className="container">
        <h1><b>LIGHTING PROPOSAL: 100 United Nations Proposal</b></h1>
    <div className="row">


<div className="col-xs-12">  
<h3><b>SUMMARY</b></h3>
<p>The information contained in this proposal addresses the lighting and labor needs for 100 United Nations.</p>
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
 <div className="col-xs-8">
 <h3><b>FINANCIAL ANALYSIS</b></h3>
 <hr />
<table className="table table-bordered">
<tbody>
    <tr>
        <td><b>Annual Energy Savings</b></td>
        <td>$33,651</td>
    </tr>
     <tr>
        <td><b>Rebate Amount</b></td>
        <td>$10,759</td>
    </tr>
     <tr>
        <td><b>Net Cost</b></td>
        <td>$53,387</td>
    </tr>
     <tr>
        <td><b>kWh saved</b></td>
        <td>210,319</td>
    </tr>
     <tr>
        <td><b>Reduced Maintenance Costs</b></td>
        <td>$6,193.17</td>
    </tr>
    <tr>
        <td><b>Payback</b></td>
        <td>1.3 years</td>
    </tr>
    <tr>
        <td><b>ROI</b></td>
        <td>75%</td>
    </tr>
    <tr>
        <td><b>10 Year Life Cycle Savings</b></td>
        <td>$406,080</td>
    </tr>
</tbody>
</table>
</div>
<div className="col-xs-4"></div>

<div className="col-xs-12">
	<h3><b>SCOPE OF WORK</b></h3>
	<hr /> 
	<p><b>Project Recommendations</b></p>
	<br />
	<ul>
		<li>Replacing existing compact Fluorescent can Fixtures with LED fixtures</li>
		<li>Replacement of existing technology to improve performance and efficiency</li>
		<li> Applying for utility Incentives to Offset project costs</li>
	</ul>
</div>

<div className="col-xs-12">

</div>



</div>
      </div>
			)
	}
}

export default DetailedView;