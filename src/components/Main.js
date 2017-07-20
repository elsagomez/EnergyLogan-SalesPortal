import React from 'react';
//import ReactDom from 'react-dom';
import {Link} from 'react-router';
import '../App.scss';

//import helper from '../utils/helpers';

//children
import Login from './Login';
import FormComponent from './FormComponent';

class Main extends React.Component{
	//constructor(props){
	//super(props);
	// 	this.state = {

	//}
	render(){
		return(
			//rendering main div here
			<div className="main-container">
        <div className="container">
            <div className="container-fluid">
   
              <Login />
              
            </div>

        <div className="collapse navbar-collapse navbar-ex1-collapse">
            <ul className="nav navbar-nav navbar-right">
              {/* Using <Link> in place of <a> and "to" in place of "href" */}
              <li><Link to="/login">Login</Link></li>
            </ul>   
        </div>

        <div className="container-fluid">
        
          <FormComponent />
              
        </div>

        <div className="collapse navbar-collapse navbar-ex1-collapse">
            <ul className="nav navbar-nav navbar-right">
              {/* Using <Link> in place of <a> and "to" in place of "href" */}       
              <li><Link to="/form-component">FormComponent</Link></li>
            </ul>   
        </div>
          {/* These sub-components are getting passed as this.props.children */}
          {this.props.children}

        </div>
      </div>
    );
  }
};

export default Main;

