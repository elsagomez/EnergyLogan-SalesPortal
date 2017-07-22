import React, {Component} from 'react';
import { Bootstrap } from 'react-bootstrap';




class Resources extends Component {

	render(){
		return(
			<div className="container">
      <h1>Hola</h1>
    <div className="row">
      <div className="col-xs-6 col-md-4">
        <img src="img/conedison.jpg" className="rounded" />
        <h1> Conedison</h1>
      </div>
      <div className="col-xs-6 col-md-4">
        <img src="img/onr.jpg" className="circle" />
        <h1>Orange</h1>
      </div>
    <div className="col-xs-6 col-md-4">
        <img src="img/pgne.png" className="thumbnail" />
        <h1>PGnE</h1>
      </div>
    </div>
  </div>


			)
	}
}

export default Resources;