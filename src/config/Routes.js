import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Dashboard from '../components/Dashboard';
import DetailedView from '../components/DetailedView';
import FormComponent from '../FormComponent';
import Login from '../components/Login';
import Main from '../components/Main';
import Project from '../components/Project';
import QuickProjectView from '../components/QuickProjectView';
import SideBar from '../components/SideBar';
import TopNav from '../components/TopNav';

// const Main = () => <Main />
// const Login = () => <h2>Login</h2>
// A route config is just data. React is great at mapping
// data into components, and <Route> is a component.

class extends Routes Component {
	render() {
    return (
      <Router history={browserHistory}>
    		<Route path="/" component={Main}>
      		{/* If user selects any of the components show the appropriate component */}
      	<Route path="Login" component={Login} />
      	<Route path="Dashboard" component={Dashboard} />
      	<Route path="DetailedView" component={DetailedView} />
      	<Route path="FormComponent" component={FormComponent} />
      	<Route path="Main" component={Main} />
      	<Route path="Project" component={Project} />
      	<Route path="QuickProjectView" component={QuickProjectView} />
      	<Route path="SideBar" component={SideBar} />
      	<Route path="TopNav" component={TopNav} />



      		{/* If user selects any other path... we get the Home Route */}
      	<IndexRoute component={Search} />

    </Route>
  </Router>
       )
export default Routes


