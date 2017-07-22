import React, { Component } from 'react';
import ReactDom from 'react-dom';

import './App.css';
import DetailedView from './components/DetailedView/DetailedView';
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';

class App extends Component {
  render() {
    return (
      <div className="App">
         <DetailedView />
      </div>
    );
  }
}

export default App;
