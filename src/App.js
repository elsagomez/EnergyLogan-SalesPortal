import React, { Component }  from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import TopNav from './components/TopNav';
import Project from './components/Project';
import './App.css';

import Main from './components/Main'

ReactDom.render(<Main />, document.getElementById('app'));

// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//       	<TopNav />
//         <Project />
//       </div>
//     );
//   }
// }

