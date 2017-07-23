import React, {Component} from 'react';
import { Bootstrap } from 'react-bootstrap';
// import detailedview from './detailedview.css';


class TableDetailedView extends Component{
render() {
		return (
		
		
<div className="col-xs-12">
<h2><b>SURVEY RESULTS</b></h2>
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





      
			)
	}
}

export default TableDetailedView;